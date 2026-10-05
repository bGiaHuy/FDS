"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { departments, generations, fdsMembers, fdsMemberRosters, type FdsMember } from '../../lib/fds-members';

import MemberDetails from './MemberDetails';

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
}

function MemberCard({ member, onOpen, duplicate = false }: { member: FdsMember; onOpen: () => void; duplicate?: boolean }) {
  return <article id={duplicate ? `leader-${member.id}` : member.id} className="people-member"><button type="button" className="people-member-open" onClick={onOpen} aria-label={`Xem hồ sơ ${member.name}`}>
    {member.photo && <div className="people-portrait"><Image src={member.photo} alt={`Ảnh giới thiệu ${member.name} — Gen ${member.generation} — ${member.department}`} fill unoptimized sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" /></div>}
    <p className="ed-label">Gen {member.generation} / {member.department}</p><h3>{member.name}</h3><p>{member.role === 'Thành viên' ? `Thành viên ban ${member.department}` : member.role}</p>
    <span className="people-member-more">Xem hồ sơ →</span>
  </button></article>;
}

function roleOrder(member: FdsMember) {
  const role = normalize(member.role);
  if (role.startsWith('pho')) return 1;
  if (role.startsWith('chu nhiem') || role.startsWith('truong')) return 0;
  return role.includes('co van') ? 2 : 3;
}

function isLeadership(member: FdsMember) {
  return member.department === 'Ban Chủ nhiệm' || /^(Trưởng|Phó) ban/.test(member.role);
}

export default function MembersGallery() {
  const [selected, setSelected] = useState<FdsMember | null>(null);
  useEffect(() => {
    const openFromHash = () => {
      const member = fdsMembers.find(item => `#${item.id}` === window.location.hash);
      if (member) { setGeneration(member.generation); setDepartment('Tất cả'); setQuery(''); setSelected(member); }
    };
    openFromHash(); window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);
  const [department, setDepartment] = useState('Tất cả');
  const [generation, setGeneration] = useState('8');
  const [query, setQuery] = useState('');
  const members = fdsMembers.filter(member =>
    (generation === 'all' || member.generation === generation) &&
    (department === 'Tất cả' || (department === 'Ban Chủ nhiệm' ? isLeadership(member) : member.department === department)) &&
    normalize(member.name).includes(normalize(query))
  );
  const rosters = fdsMemberRosters.filter(roster => roster.generation === generation &&
    (department === 'Tất cả' || roster.department === null || roster.department === department));
  const generationLabel = generations.find(item => item.id === generation)?.label ?? 'Các thế hệ';
  const leadership = members.filter(isLeadership).sort((a, b) => Number(b.department === 'Ban Chủ nhiệm') - Number(a.department === 'Ban Chủ nhiệm') || roleOrder(a) - roleOrder(b));
  const teams = departments.filter(item => item !== 'Ban Chủ nhiệm').map(name => ({ name, members: members.filter(member => member.department === name).sort((a, b) => roleOrder(a) - roleOrder(b)) })).filter(team => team.members.length > 0);
  return <section id="members" className="ed-section people-members">
    <div className="ed-heading"><div><p className="ed-label">Thành viên FDS / Qua các thế hệ</p><h2>Thành viên<br /><em>của từng gen.</em></h2></div><p>Bộ ảnh thành viên năm 2021 và Gen 4–8, cùng các anh chị trong Ban Chủ nhiệm. Chọn gen, chọn ban hoặc tìm tên.</p></div>
    <div className="people-filters people-generations" role="group" aria-label="Lọc thành viên theo gen">
      <button type="button" aria-pressed={generation === 'all'} onClick={() => setGeneration('all')}>Tất cả gen</button>
      {generations.map(item => <button key={item.id} type="button" aria-pressed={generation === item.id} onClick={() => setGeneration(item.id)}>{item.label} <span>{fdsMembers.filter(member => member.generation === item.id).length}</span></button>)}
    </div>
    <div className="people-member-controls">
      <div className="people-filters" role="group" aria-label="Lọc thành viên theo ban">{['Tất cả', ...departments].map(item => <button key={item} type="button" aria-pressed={department === item} onClick={() => setDepartment(item)}>{item}</button>)}</div>
      <label className="people-member-search">Tìm thành viên<input type="search" placeholder="Nhập tên, có hoặc không dấu" value={query} onChange={event => setQuery(event.target.value)} /></label>
    </div>
    <p className="people-count" aria-live="polite">{members.length} hồ sơ · {generationLabel}</p>
    {generation === '2' && <p className="people-generation-note">Kho ảnh hiện có bài giới thiệu anh Trần Quốc Việt, chưa có album danh sách đầy đủ của Gen 2.</p>}
    {rosters.length > 0 && <details className="people-rosters"><summary>Xem danh sách gốc của {generationLabel}</summary><div>{rosters.map(roster => <figure key={roster.photo}><div className="people-portrait"><Image src={roster.photo} alt={`Danh sách gốc ${generationLabel}${roster.department ? ' — ' + roster.department : ''}`} fill unoptimized sizes="(max-width: 700px) 90vw, 33vw" /></div><figcaption>{roster.department ?? 'Truyền thông và Văn hoá'}</figcaption></figure>)}</div></details>}
    {leadership.length > 0 && <div className="people-leadership"><p className="ed-label">Ban Chủ nhiệm / {generationLabel}</p><div className="people-grid">{leadership.map(member => <div key={member.id}><MemberCard member={member} duplicate={member.department !== 'Ban Chủ nhiệm' && department !== 'Ban Chủ nhiệm'} onOpen={() => setSelected(member)} /></div>)}</div></div>}
    <div className="people-department-columns">{teams.map(team => <section key={team.name} className="people-department-column" aria-label={team.name}><h3 className="people-department-title">{team.name}</h3><div className="people-department-list">{team.members.map(member => <MemberCard key={member.id} member={member} onOpen={() => setSelected(member)} />)}</div></section>)}</div>
    {members.length === 0 && <p className="people-generation-note">Không có tên khớp với bộ lọc này. Bạn thử chọn tất cả gen, tất cả ban hoặc nhập tên ngắn hơn.</p>}
    <p className="ed-content-note">Tên và vai trò được ghi theo bộ ảnh của từng gen. Một người có thể xuất hiện ở nhiều gen; hồ sơ chưa có ảnh riêng được giữ theo danh sách gốc.</p>
    {selected && <MemberDetails key={selected.id} member={selected} onClose={() => setSelected(null)} />}
  </section>;
}
