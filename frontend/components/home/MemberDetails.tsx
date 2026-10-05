"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { getAccessToken } from '../../lib/auth';
import { loadMyProfile, type ProfileFields } from '../../lib/profile';
import type { FdsMember } from '../../lib/fds-members';

export default function MemberDetails({ member, onClose }: { member: FdsMember; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [profile, setProfile] = useState<ProfileFields | null>(null);
  const [loading, setLoading] = useState(true);
  const [canEdit, setCanEdit] = useState(false);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => { if (!dialog.current?.open) dialog.current?.showModal(); }, []);
  useEffect(() => {
    let active = true;
    setLoading(true); setError('');
    fetch(`/api/members/${encodeURIComponent(member.id)}`, { cache: 'no-store' }).then(response => {
      if (!response.ok) throw new Error('Không tải được hồ sơ.');
      return response.json();
    }).then(data => { if (active) { setProfile(data.profile); if (!data.profileAvailable) setError('Chưa tải được thông tin bổ sung.'); } }).catch(() => { if (active) setError('Không tải được thông tin bổ sung.'); }).finally(() => { if (active) setLoading(false); });
    if (getAccessToken()) loadMyProfile().then(data => { if (active) setCanEdit(data.user.profileMemberId === member.id && data.user.role !== 'GUEST'); }).catch(() => {});
    return () => { active = false; };
  }, [member.id, retry]);
  return <dialog ref={dialog} className="member-dialog" aria-labelledby="member-detail-title" onCancel={onClose} onClose={onClose} onClick={event => { if (event.target === event.currentTarget) { const box=event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose(); } }}>
    <button type="button" className="member-dialog-close" aria-label="Đóng hồ sơ" onClick={onClose}>×</button>
    <div className="member-detail-layout">
      {member.photo && <div className="member-detail-photo"><Image src={member.photo} alt={`Ảnh ${member.name}`} width={600} height={800} unoptimized /></div>}
      <div><p className="ed-label">Gen {member.generation} · {member.department}</p><h2 id="member-detail-title">{profile?.name || member.name}</h2><p className="member-detail-role">{member.role}</p>
        {loading && <p role="status">Đang tải hồ sơ…</p>}
        {profile && <><p className="member-detail-bio">{profile.bio || 'Thành viên chưa thêm phần giới thiệu.'}</p><dl className="member-detail-facts">{profile.major && <div><dt>Ngành học</dt><dd>{profile.major}</dd></div>}{profile.cohort && <div><dt>Khoá / Lớp</dt><dd>{profile.cohort}</dd></div>}{profile.skills.length > 0 && <div><dt>Kỹ năng</dt><dd>{profile.skills.join(' · ')}</dd></div>}</dl><div className="member-detail-links">{(['website','github','linkedin'] as const).map(key => profile[key] && <a key={key} href={profile[key]} target="_blank" rel="noopener noreferrer">{key === 'website' ? 'Website cá nhân' : key === 'github' ? 'GitHub' : 'LinkedIn'} ↗</a>)}</div></>}
        {!loading && !profile && !error && <p className="member-detail-bio">Thành viên chưa thêm thông tin cá nhân.</p>}
        {error && <p className="member-detail-status">{error} <button onClick={() => setRetry(value => value + 1)}>Thử lại</button></p>}
        {canEdit && <Link className="ed-link" href="/account/profile">Chỉnh sửa hồ sơ của mình →</Link>}
      </div>
    </div>
  </dialog>;
}
