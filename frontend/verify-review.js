const puppeteer = require('puppeteer-core');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless: true, args: ['--no-sandbox'] });
  let noteId;
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:3101', { waitUntil: 'networkidle0' });
    await page.waitForSelector('.review-toggle');
    await page.$eval('#humans h2', el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const quote = await page.$eval('#humans h2', el => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(el); selection.removeAllRanges(); selection.addRange(range);
      return selection.toString().trim();
    });
    await page.waitForSelector('.review-selection');
    await page.click('.review-selection');
    const captured = await page.$eval('.review-target blockquote', el => el.textContent);
    if (captured !== quote) throw new Error('Selection text was lost');
    const responsePromise = page.waitForResponse(response => response.url().endsWith('/api/review-comments') && response.request().method() === 'POST');
    await page.type('#review-comment', 'TEST REVIEW: Tăng cỡ chữ phần này.');
    await page.click('.review-save');
    const response = await responsePromise;
    const data = await response.json();
    if (response.status() !== 201) throw new Error(JSON.stringify(data));
    noteId = data.note.id;
    if (data.note.section !== 'humans' || data.note.quote !== quote) throw new Error('Incorrect comment anchor');
    const file = path.resolve(__dirname, '../scratch/review-comments', `${noteId}.json`);
    const persisted = JSON.parse(await fs.readFile(file, 'utf8'));
    if (persisted.comment !== 'TEST REVIEW: Tăng cỡ chữ phần này.') throw new Error('Note not saved to workspace');
    await page.reload({ waitUntil: 'networkidle0' });
    await page.click('.review-toggle');
    await page.waitForSelector('.review-notes li');
    if (!(await page.$eval('.review-notes', el => el.textContent)).includes(persisted.comment)) throw new Error('Note disappeared after reload');
    await page.keyboard.press('Escape');
    if (await page.$('#fds-review-panel')) throw new Error('Escape did not close panel');
    await page.setViewport({ width: 375, height: 812 });
    await page.click('.review-toggle');
    const fits = await page.$eval('.review-panel', el => { const r = el.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth && r.top >= 0 && r.bottom <= innerHeight; });
    if (!fits) throw new Error('Mobile panel overflows');
    const rejected = await page.evaluate(async () => (await fetch('/api/review-comments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ comment: '', quote: '', section: '', pathname: '/' }) })).status);
    if (rejected !== 400) throw new Error('Empty comments must be rejected');
    await page.screenshot({ path: path.resolve(__dirname, '../scratch/redesign/review-mobile.png') });
    console.log(JSON.stringify({ selection: true, anchor: 'humans', workspacePersistence: true, reload: true, escape: true, mobileFits: fits, invalidInput: rejected, pageErrors: errors }, null, 2));
    if (errors.length) throw new Error('Browser errors');
  } finally {
    await browser.close();
    // Remove only this test's generated note; preserve all user comments.
    if (noteId && /^[a-f0-9-]{36}$/.test(noteId)) await fs.unlink(path.resolve(__dirname, '../scratch/review-comments', `${noteId}.json`));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
