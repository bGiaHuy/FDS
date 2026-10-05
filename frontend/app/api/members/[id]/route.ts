import { fdsMembers } from '../../../../lib/fds-members';
import { backend } from '../../../../lib/backend-proxy';
export const dynamic = 'force-dynamic';
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = fdsMembers.find(member => member.id === id);
  if (!entry) return Response.json({ error: 'Không tìm thấy thành viên.' }, { status: 404 });
  const { sourceFile, ...member } = entry;
  try {
    const response = await fetch(`${backend}/members/${encodeURIComponent(id)}`, { cache: 'no-store', signal: AbortSignal.timeout(2500) });
    if (response.ok) { const data = await response.json(); return Response.json({ member, profile: data.profile, profileAvailable: true }); }
  } catch {}
  return Response.json({ member, profile: null, profileAvailable: false });
}
