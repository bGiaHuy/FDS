import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { setTimeout } from 'node:timers/promises';

const root = fileURLToPath(new URL('../../', import.meta.url));
try { process.loadEnvFile(path.join(root, '.env.review.local')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const site = process.env.FDS_REVIEW_REMOTE_URL;
const token = process.env.FDS_REVIEW_TOKEN;
if (!site || !token || token.length < 32) {
  console.error('Điền FDS_REVIEW_REMOTE_URL và FDS_REVIEW_TOKEN (ít nhất 32 ký tự) trong .env.review.local trước khi đồng bộ.');
  process.exit(1);
}
const url = new URL('/api/review-comments?export=1', site);
if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname))) {
  console.error('Dùng địa chỉ HTTPS của website.'); process.exit(1);
}
const directory = process.env.FDS_REVIEW_INBOX_DIRECTORY || path.join(root, 'scratch/review-comments');
const stateFile = path.join(directory, '.sync-state.json');
let state;
try { state = JSON.parse(await readFile(stateFile, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; state = {}; }
const source = url.origin;
const seen = new Set(state[source] || []);
async function sync() {
  const response = await fetch(url, { headers: { authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`Không nhận được góp ý (HTTP ${response.status}). Kiểm tra domain và mã đồng bộ.`);
  const data = await response.json();
  if (data.enabled !== true || !Array.isArray(data.notes)) throw new Error('Website chưa bật nhận góp ý.');
  await mkdir(directory, { recursive: true });
  let count = 0;
  for (const input of data.notes) {
    if (!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/.test(input.id || '') ||
        !['/', '/people', '/about'].includes(input.pathname) || typeof input.comment !== 'string' || input.comment.length > 4000 ||
        typeof input.quote !== 'string' || input.quote.length > 2000 || typeof input.section !== 'string' || input.section.length > 100 ||
        typeof input.createdAt !== 'string' || !Number.isFinite(Date.parse(input.createdAt))) throw new Error('Có góp ý không đúng định dạng; chưa đánh dấu đã đồng bộ.');
    if (seen.has(input.id)) continue;
    const note = { id: input.id, pathname: input.pathname, section: input.section, component: typeof input.component === 'string' ? input.component.slice(0, 200) : '', name: typeof input.name === 'string' ? input.name.slice(0, 80) : '', quote: input.quote, comment: input.comment, createdAt: input.createdAt, status: 'open', source };
    try { await writeFile(path.join(directory, `${note.id}.json`), JSON.stringify(note, null, 2), { flag: 'wx' }); count++; }
    catch (error) { if (error.code !== 'EEXIST') throw error; }
    seen.add(input.id);
  }
  state[source] = [...seen];
  await writeFile(stateFile, JSON.stringify(state, null, 2));
  console.log(`Đã nhận ${count} góp ý mới về scratch/review-comments.`);
}
const watch = process.argv.includes('--watch');
do {
  try { await sync(); }
  catch (error) { console.error(error.message); if (!watch) process.exitCode = 1; }
  if (watch) await setTimeout(30000);
} while (watch);
