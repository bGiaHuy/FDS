import Image from 'next/image';
import { fdsHumanHighlights } from '../../lib/fds-human-highlights';
import { fdsPhotos } from '../../lib/fds-photos';

export default function AlumniStories() {
  return <section id="alumni" className="ed-section people-alumni">
    <div className="ed-heading"><div><p className="ed-label">Humans / Những người anh của FDS</p><h2>Nghiên cứu<br /><em>và thi đấu.</em></h2></div><p>Vũ Thành Lâm và Dương Văn Hiệp: công việc tại CLB, nghiên cứu và các cuộc thi công nghệ.</p></div>
    <div className="people-alumni-grid">{fdsHumanHighlights.map(person => <article key={person.id} id={person.id} className="people-alumni-story">
      <div className="people-alumni-art"><Image src={fdsPhotos[person.photo]} alt={`Ảnh vinh danh ${person.name} từ FDS`} fill unoptimized sizes="(max-width: 700px) 80vw, 320px" /></div>
      <div><p className="ed-label">{person.role} / {person.date}</p><h3>{person.name}.</h3><p className="people-alumni-title">{person.title}</p><p>{person.story}</p><p>{person.detail}</p><a className="ed-link" href={person.source} target="_blank" rel="noopener noreferrer">Đọc bài FDS gốc ↗</a></div>
    </article>)}</div>
  </section>;
}
