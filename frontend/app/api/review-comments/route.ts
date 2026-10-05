import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const directory = process.env.FDS_REVIEW_DIRECTORY || path.resolve(process.cwd(), "../scratch/review-comments");
const localHosts = new Set(["localhost", "127.0.0.1", "[::1]"]);
const uuid = /^[a-f0-9-]{36}\.json$/;
const headers = { "Cache-Control": "no-store" };

function enabled(request: Request) {
  if (process.env.FDS_ENABLE_REVIEW !== "1") return false;
  return localHosts.has(new URL(request.url).hostname) ||
    Boolean(process.env.FDS_REVIEW_DIRECTORY && (process.env.FDS_REVIEW_TOKEN?.length || 0) >= 32);
}
function owner(request: Request) {
  const secret = process.env.FDS_REVIEW_TOKEN;
  const provided = request.headers.get("authorization")?.replace(/^Bearer /, "") || "";
  if (!secret) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function GET(request: Request) {
  if (!enabled(request)) return Response.json({ enabled: false, notes: [] }, { headers });
  const exporting = new URL(request.url).searchParams.get("export") === "1";
  if (!owner(request)) {
    if (exporting) return Response.json({ error: "Không có quyền đọc góp ý." }, { status: 401, headers });
    return Response.json({ enabled: true, notes: [] }, { headers });
  }
  try {
    await mkdir(directory, { recursive: true });
    const files = (await readdir(directory)).filter(file => uuid.test(file));
    const notes = await Promise.all(files.map(async file => JSON.parse(await readFile(path.join(directory, file), "utf8"))));
    notes.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return Response.json({ enabled: true, notes }, { headers });
  } catch {
    return Response.json({ error: "Không đọc được góp ý đã lưu." }, { status: 500, headers });
  }
}

export async function POST(request: Request) {
  if (!enabled(request)) return Response.json({ error: "Chế độ góp ý chưa bật." }, { status: 403 });
  const expectedOrigin = process.env.FDS_REVIEW_SITE_ORIGIN || new URL(request.url).origin;
  if (request.headers.get("origin") !== expectedOrigin) return Response.json({ error: "Nguồn yêu cầu không hợp lệ." }, { status: 403 });
  try {
    if (Number(request.headers.get("content-length")) > 16000) return Response.json({ error: "Góp ý quá dài." }, { status: 400 });
    const body = await request.text();
    if (body.length > 16000) return Response.json({ error: "Góp ý quá dài." }, { status: 400 });
    let input;
    try { input = JSON.parse(body); } catch { return Response.json({ error: "Nội dung góp ý không hợp lệ." }, { status: 400 }); }
    if (!input || typeof input !== "object" || Array.isArray(input)) return Response.json({ error: "Nội dung góp ý không hợp lệ." }, { status: 400 });
    if (typeof input.comment !== "string" || !input.comment.trim() || input.comment.length > 4000 ||
        typeof input.quote !== "string" || input.quote.length > 2000 ||
        typeof input.section !== "string" || input.section.length > 100 ||
        typeof input.pathname !== "string" || !["/", "/people", "/about"].includes(input.pathname) ||
        (input.component !== undefined && (typeof input.component !== "string" || input.component.length > 200)) ||
        (input.name !== undefined && (typeof input.name !== "string" || input.name.length > 80))) {
      return Response.json({ error: "Vui lòng nhập góp ý hợp lệ (tối đa 4.000 ký tự)." }, { status: 400 });
    }
    const note = { id: randomUUID(), pathname: input.pathname, section: input.section, component: input.component || "", name: input.name?.trim() || "", quote: input.quote, comment: input.comment.trim(), createdAt: new Date().toISOString(), status: "open" };
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, `${note.id}.json`), JSON.stringify(note, null, 2), { encoding: "utf8", flag: "wx" });
    return Response.json({ note }, { status: 201, headers });
  } catch {
    return Response.json({ error: "Không gửi được góp ý. Thử lại nhé." }, { status: 500 });
  }
}
