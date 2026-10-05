"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../../../lib/auth';
import { loadMyProfile, saveMyProfile, type MyProfile, type ProfileFields } from '../../../lib/profile';
import '../../editorial.css';
import './profile.css';

const empty: ProfileFields = { name: '', bio: '', major: '', cohort: '', skills: [], website: '', github: '', linkedin: '' };
export default function ProfilePage() {
  const [data, setData] = useState<MyProfile | null>(null);
  const [form, setForm] = useState<ProfileFields>(empty);
  const [skills, setSkills] = useState('');
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let active = true;
    if (!getAccessToken()) { setLoading(false); return; }
    setSignedIn(true);setLoading(true);setError('');
    loadMyProfile().then(profile => {
      if (!active) return;
      setData(profile);setForm({ name: profile.user.name, bio: profile.user.bio, major: profile.user.major, cohort: profile.user.cohort, skills: profile.user.skills, website: profile.user.website, github: profile.user.github, linkedin: profile.user.linkedin });setSkills(profile.user.skills.join(', '));
    }).catch(reason => { if (active) setError(reason.message); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [retry]);
  const change = (field: keyof Omit<ProfileFields,'skills'>, value: string) => { setForm(previous => ({ ...previous, [field]: value }));setMessage(''); };
  async function save(event: React.FormEvent) {
    event.preventDefault();setSaving(true);setError('');setMessage('');
    try {
      const fields = { ...form, skills: skills.split(',').map(skill => skill.trim()).filter(Boolean) };
      const updated = await saveMyProfile(fields);setData(updated);setForm(fields);setMessage('Đã lưu hồ sơ.');
    } catch(reason) { setError(reason instanceof Error ? reason.message : 'Không lưu được hồ sơ.'); }
    finally { setSaving(false); }
  }
  return <main className="ed-home account-profile"><div className="ed-shell">
    <Link className="ed-link" href="/">← Về trang chủ</Link>
    <p className="ed-label">Tài khoản / Hồ sơ cá nhân</p><h1>Chỉnh sửa<br /><em>hồ sơ.</em></h1>
    {loading && <p role="status">Đang tải hồ sơ…</p>}
    {!loading && !signedIn && <div className="profile-notice"><p>Đăng nhập để xem và chỉnh sửa hồ sơ của bạn.</p><Link className="ed-link" href="/auth?next=/account/profile">Đăng nhập →</Link></div>}
    {signedIn && !loading && !data && <div className="profile-notice"><p role="alert">{error}</p><button className="profile-submit" onClick={() => setRetry(value => value + 1)}>Thử lại</button><Link className="ed-link" href="/auth?next=/account/profile">Đăng nhập lại →</Link></div>}
    {data && <>{data.user.role === 'ADMIN' && <p><Link className="ed-link" href="/account/members">Gắn tài khoản thành viên →</Link></p>}<div className="profile-notice"><p>{data.member ? `Hồ sơ thành viên: ${data.member.name} · Gen ${data.member.generation} · ${data.member.department}.` : 'Tài khoản chưa được gắn với hồ sơ thành viên. Liên hệ Ban Chủ nhiệm để xác nhận.'}</p>{data.member && <Link className="ed-link" href={`/people#${data.member.id}`}>Xem hồ sơ trên trang thành viên →</Link>}</div>
      <form onSubmit={save} className="profile-form"><label>Tên hiển thị<input required minLength={2} maxLength={120} value={form.name} onChange={event => change('name',event.target.value)} autoComplete="name" /></label>
        <label className="profile-form-wide">Giới thiệu<textarea rows={5} maxLength={1200} value={form.bio} onChange={event => change('bio',event.target.value)} placeholder="Giới thiệu về bạn, điều bạn đang học hoặc dự án bạn đang làm." /></label>
        <label>Ngành học<input maxLength={120} value={form.major} onChange={event => change('major',event.target.value)} /></label><label>Khoá / Lớp<input maxLength={120} value={form.cohort} onChange={event => change('cohort',event.target.value)} /></label>
        <label className="profile-form-wide">Kỹ năng<input value={skills} onChange={event => {setSkills(event.target.value);setMessage('');}} placeholder="Python, Machine Learning, thiết kế…" /><small>Ngăn cách bằng dấu phẩy; tối đa 20 kỹ năng, mỗi kỹ năng 40 ký tự.</small></label>
        {(['website','github','linkedin'] as const).map(key => <label key={key}>{key === 'website' ? 'Website cá nhân' : key === 'github' ? 'GitHub' : 'LinkedIn'}<input type="url" maxLength={500} value={form[key]} onChange={event => change(key,event.target.value)} placeholder={`https://${key === 'website' ? '…' : key === 'github' ? 'github.com/…' : 'linkedin.com/in/…'}`} /></label>)}
        <div className="profile-form-wide"><p className="profile-help">Thông tin này xuất hiện trong hồ sơ thành viên sau khi tài khoản được xác nhận. Email đăng nhập không hiển thị công khai.</p>{error && <p role="alert" className="profile-error">{error}</p>}<p role="status" className="profile-message">{message}</p><button className="profile-submit" disabled={saving}>{saving ? 'Đang lưu…' : 'Lưu hồ sơ'}</button></div>
      </form></>}
  </div></main>;
}
