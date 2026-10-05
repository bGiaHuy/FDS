"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { authFetch, getAccessToken } from '../../../lib/auth';
import { loadMyProfile } from '../../../lib/profile';
import { fdsMembers, generations } from '../../../lib/fds-members';
import '../../editorial.css';
import '../profile/profile.css';

export default function MemberAccountsPage() {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [memberId, setMemberId] = useState('');
  const [generation, setGeneration] = useState('8');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    let active = true;
    if (!getAccessToken()) { setLoading(false); return; }
    loadMyProfile().then(data => { if(active) setAdmin(data.user.role === 'ADMIN'); }).catch(reason => { if(active) setError(reason.message); }).finally(() => { if(active) setLoading(false); });
    return () => { active = false; };
  }, []);
  async function bind(event: React.FormEvent) {
    event.preventDefault();setSaving(true);setError('');setMessage('');
    try {
      const response = await authFetch(`/api/members/${encodeURIComponent(memberId)}/owner`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email:email.trim() }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || data.message || 'Không gắn được tài khoản.');
      setMessage(`Đã gắn tài khoản với hồ sơ ${fdsMembers.find(member => member.id === memberId)?.name}.`);
      setEmail('');setMemberId('');
    } catch(reason) { setError(reason instanceof Error ? reason.message : 'Không gắn được tài khoản.'); }
    finally { setSaving(false); }
  }
  return <main className="ed-home account-profile"><div className="ed-shell"><Link className="ed-link" href="/account/profile">← Hồ sơ cá nhân</Link><p className="ed-label">Tài khoản / Quản trị viên</p><h1>Gắn tài khoản<br /><em>thành viên.</em></h1>
    {loading && <p role="status">Đang kiểm tra tài khoản…</p>}
    {!loading && !admin && <div className="profile-notice"><p role="alert">{error || 'Chỉ quản trị viên được gắn tài khoản với hồ sơ thành viên.'}</p><Link className="ed-link" href="/auth?next=/account/members">Đăng nhập →</Link></div>}
    {admin && <><p className="profile-notice">Xác nhận đúng người và email trước khi gắn. Tài khoản cần có quyền thành viên; mỗi tài khoản được gắn với một hồ sơ.</p><form className="profile-form" onSubmit={bind}>
      <label>Gen<select value={generation} onChange={event => {setGeneration(event.target.value);setMemberId('');setMessage('');}}>{generations.map(gen => <option key={gen.id} value={gen.id}>{gen.label}</option>)}</select></label>
      <label>Hồ sơ thành viên<select required value={memberId} onChange={event => {setMemberId(event.target.value);setMessage('');}}><option value="">Chọn thành viên</option>{fdsMembers.filter(member => member.generation === generation).map(member => <option key={member.id} value={member.id}>{member.name} — {member.department}</option>)}</select></label>
      <label className="profile-form-wide">Email tài khoản<input type="email" autoComplete="off" required maxLength={255} value={email} onChange={event => {setEmail(event.target.value);setMessage('');}} /></label>
      <div className="profile-form-wide">{error && <p role="alert" className="profile-error">{error}</p>}<p role="status" className="profile-message">{message}</p><button className="profile-submit" disabled={saving}>{saving ? 'Đang gắn…' : 'Gắn tài khoản'}</button></div>
    </form></>}
  </div></main>;
}
