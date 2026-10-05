import Image from 'next/image';
import { fdsSavedPosts } from '../../lib/fds-saved-posts';
import { fdsPhotos } from '../../lib/fds-photos';

export default function SavedClubPosts({ kind }: { kind: 'golden' | 'humans' }) {
  const posts = fdsSavedPosts.filter(post => post.kind === kind);
  return <section id={kind === 'golden' ? 'coc-vang-archive' : 'humans-archive'} className="ed-section people-saved-posts">
    <div className="ed-heading"><div><p className="ed-label">Humans of FDS / {kind === 'golden' ? 'Cóc Vàng qua các năm' : 'Từ album của CLB'}</p><h2>{kind === 'golden' ? 'Cóc Vàng.' : 'Những gương mặt.'}<br /><em>{kind === 'golden' ? 'Spring 2022 – Summer 2023.' : 'Qua các thế hệ.'}</em></h2></div><p>Các bài Humans of FDS về thành viên và cựu thành viên CLB.</p></div>
    <div className="people-golden-grid">{posts.map(post => <article key={post.id} id={post.id} className="people-golden-story">
      <div className="people-golden-art"><Image src={fdsPhotos[post.photo]} alt={`Ảnh từ bài Humans of FDS về ${post.name}`} fill unoptimized sizes="(max-width: 700px) 90vw, 33vw" /></div>
      <p className="ed-label">{post.label}</p><h3>{post.name}.</h3>
      <details className="people-saved-excerpt"><summary>{'fullText' in post && post.fullText ? 'Đọc toàn bộ bài viết' : 'Đọc phần mở đầu bài viết'}</summary><blockquote>{post.excerpt}</blockquote></details>
      <a className="ed-link" href={post.source} target="_blank" rel="noopener noreferrer">Xem album Humans of FDS ↗</a>
    </article>)}</div>
  </section>;
}
