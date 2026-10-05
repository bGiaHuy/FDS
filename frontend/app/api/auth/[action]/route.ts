import { forward } from '../../../../lib/backend-proxy';
export const dynamic = 'force-dynamic';
type Context = { params: Promise<{ action: string }> };
export async function POST(request: Request, { params }: Context) {
  const { action } = await params;
  if (!['login', 'register', 'refresh', 'logout', 'session'].includes(action)) return Response.json({ error: 'Không tìm thấy.' }, { status: 404 });
  return forward(request, `/auth/${action}`);
}
