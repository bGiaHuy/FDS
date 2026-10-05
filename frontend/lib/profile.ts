import { authFetch } from './auth';
import type { AuthUser } from './auth';
import type { FdsMember } from './fds-members';
export type ProfileFields = { name: string; bio: string; major: string; cohort: string; skills: string[]; website: string; github: string; linkedin: string };
export type MyProfile = { user: AuthUser & ProfileFields & { profileMemberId: string | null }; member: Omit<FdsMember, 'sourceFile'> | null };
export async function loadMyProfile(): Promise<MyProfile> {
  const response = await authFetch('/api/account/profile');
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Không tải được hồ sơ.');
  return data;
}
export async function saveMyProfile(profile: ProfileFields): Promise<MyProfile> {
  const response = await authFetch('/api/account/profile', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(profile) });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Không lưu được hồ sơ.');
  localStorage.setItem('user', JSON.stringify(data.user));
  window.dispatchEvent(new Event('fds-auth-change'));
  return data;
}
