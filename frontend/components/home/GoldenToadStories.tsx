import Image from 'next/image';

const stories = [
  { id: 'pham-thai-hoang-tung', name: 'Phạm Thái Hoàng Tùng', semester: 'Summer 2020', role: 'Chủ nhiệm FDS · Gen 3', photo: 'pham-thai-hoang-tung', caption: 'Ảnh bài Humans chúc sinh nhật · 29.05.2021', copy: 'Anh Tùng đạt Cóc Vàng kỳ Summer 2020, học bổng 100% và giải Ba Cuộc Đua Số 2019–2020. Anh từng giữ vai trò Chủ nhiệm FDS Gen 3.', source: 'https://www.facebook.com/dsclub.fu/posts/pfbid0oRfB3s73Fm9eCM38JBoaUnYiLcAJERujwpddHXQwacQXs1foiguG2ZnxPTKNAb7Ll', sourceLabel: 'Đọc bài Humans của FDS' },
  { id: 'tran-tien-nam', name: 'Trần Tiến Nam', semester: 'Spring 2021', role: 'Ban Chuyên môn · K15 An toàn thông tin', photo: 'tran-tien-nam', caption: 'Poster từ bài vinh danh FDS · 22.06.2021', copy: 'Tiến Nam đạt Cóc Vàng kỳ Spring 2021 và học bổng 100% của Đại học FPT Hà Nội. Nam là thành viên ban Chuyên môn, khóa K15 ngành An toàn thông tin.', source: 'https://www.facebook.com/dsclub.fu/posts/pfbid02R7r1VdrsRpJYCMnz1EmHgErgjADDT1FYXcyUvxaY8pQqMP4BBURaHV6GYggsdWD5l', sourceLabel: 'Đọc bài vinh danh của FDS' },
  { id: 'do-ngoc-bich', name: 'Đỗ Ngọc Bích', semester: 'Fall 2025', role: 'K19 Trí tuệ nhân tạo · Thành viên FDS', photo: 'do-ngoc-bich', caption: 'Đỗ Ngọc Bích · Cóc Vàng Fall 2025', copy: 'Ngọc Bích đạt Cóc Vàng khối Kỹ thuật kỳ Fall 2025. Trong bài của Đại học FPT, Bích chia sẻ cách học chủ động: hỏi trên lớp, tìm hiểu bản chất kiến thức và học thêm từ anh chị khi làm dự án.', source: 'https://daihoc.fpt.edu.vn/tin-tuc/tu-hoc-bong-100-den-danh-hieu-coc-vang-hanh-trinh-cua-bong-hong-tri-tue-nhan-tao/', sourceLabel: 'Đọc câu chuyện trên Đại học FPT' },
] as const;

export default function GoldenToadStories() {
  return <section id="coc-vang" className="ed-section people-golden">
    <div className="ed-heading"><div><p className="ed-label">Vinh danh / Cóc Vàng</p><h2>Thành viên FDS<br /><em>đạt Cóc Vàng.</em></h2></div><p>Thành viên FDS đạt danh hiệu Cóc Vàng từ Summer 2020 đến Fall 2025.</p></div>
    <div className="people-golden-grid">{stories.map(person => <article key={person.id} id={person.id} className="people-golden-story">
      <figure><div className="people-golden-art"><Image src={`/fds/photos/people/golden-toad/${person.photo}.webp`} alt={`Ảnh FDS giới thiệu ${person.name}`} fill unoptimized sizes="(max-width: 700px) 90vw, 33vw" /></div><figcaption>{person.caption}</figcaption></figure>
      <p className="ed-label">Cóc Vàng / {person.semester}</p><h3>{person.name}.</h3><p className="people-golden-role">{person.role}</p><p>{person.copy}</p><a className="ed-link" href={person.source} target="_blank" rel="noopener noreferrer">{person.sourceLabel} ↗</a>
    </article>)}</div>
  </section>;
}
