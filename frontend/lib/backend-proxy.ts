export const backend = process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
export async function forward(request: Request, endpoint: string) {
  const headers = new Headers();
  const authorization = request.headers.get('authorization');
  if (authorization) headers.set('authorization', authorization);
  const cookie = request.headers.get('cookie');
  if (cookie) headers.set('cookie', cookie);
  let body: string | undefined;
  if (request.method !== 'GET') {
    body = await request.text();
    if (body.length > 12000) return Response.json({ error: 'Nội dung quá dài.' }, { status: 400 });
    headers.set('Content-Type', 'application/json');
  }
  try {
    const response = await fetch(`${backend}${endpoint}`, { method: request.method, headers, body, cache: 'no-store', signal: AbortSignal.timeout(10000) });
    const output = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    for (const cookie of response.headers.getSetCookie()) output.append('Set-Cookie', cookie);
    if (response.ok) return new Response(await response.text(), { status: response.status, headers: output });
    const data = await response.json().catch(() => ({}));
    const message = response.status < 500 ? data.message || 'Yêu cầu không hợp lệ.' : 'Chưa kết nối được dịch vụ hồ sơ. Vui lòng thử lại sau.';
    return Response.json({ error: Array.isArray(message) ? message.join('. ') : message, message }, { status: response.status, headers: output });
  } catch { return Response.json({ error: 'Chưa kết nối được dịch vụ tài khoản. Vui lòng thử lại sau.' }, { status: 503 }); }
}
