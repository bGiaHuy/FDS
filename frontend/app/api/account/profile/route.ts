import { forward } from '../../../../lib/backend-proxy';
export const dynamic = 'force-dynamic';
export function GET(request: Request) { return forward(request, '/members/me/profile'); }
export function PATCH(request: Request) { return forward(request, '/members/me/profile'); }
