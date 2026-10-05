import { forward } from '../../../../../lib/backend-proxy';
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return forward(request, `/members/${encodeURIComponent(id)}/owner`);
}
