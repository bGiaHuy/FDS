import ReviewComments from "../../components/home/ReviewComments";
import Link from "next/link";
import Image from "next/image";
import MembersGallery from "../../components/home/MembersGallery";
import { fdsPhotos, type FdsPhotoKey } from "../../lib/fds-photos";
import { fdsSources } from "../../lib/fds-stories";
import { fdsProfiles } from "../../lib/fds-profiles";
import AlumniStories from "../../components/home/AlumniStories";
import GoldenToadStories from "../../components/home/GoldenToadStories";
import SavedClubPosts from "../../components/home/SavedClubPosts";
import NamAchievements, { NamAchievementDetails } from "../../components/home/NamAchievements";
import InsideTheLeader from "../../components/home/InsideTheLeader";
import "../editorial.css";
import "./people.css";

export const metadata = { title: "Humans of FDS | FPTU Data Science Club" };

function Moment({ photo, caption }: { photo: FdsPhotoKey; caption: string }) {
  return <figure><div className="ed-photo"><Image src={fdsPhotos[photo]} alt={caption} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><figcaption>{caption}</figcaption></figure>;
}

export default function PeoplePage() {
  return <><ReviewComments /><main id="main-content" className="ed-home ed-people-page"><div className="ed-shell">
    <header className="people-intro ed-section"><Link className="ed-link" href="/">← Về trang chủ FDS</Link><Link className="ed-link" href="/account/profile">Tài khoản / Chỉnh sửa hồ sơ →</Link><div className="people-intro-copy"><div><p className="ed-label">Humans of FDS</p><h1>Con người<br /><em>của FDS.</em></h1></div><div><p>Thành viên FDS cùng học, đi thi, nghiên cứu và tổ chức hoạt động CLB. Humans of FDS giới thiệu những người đã góp sức qua từng thế hệ.</p><a className="ed-link" href="#profiles">Gặp những gương mặt FDS ↓</a></div></div><div className="people-cover"><Moment photo="club-day-2026-team" caption="Thành viên tại gian hàng FDS · Club Day 2026" /><Moment photo="club-day-2026-conversation" caption="Gặp những người bạn mới · Club Day 2026" /></div></header>
    <section id="profiles" className="ed-section people-stories"><div className="ed-heading"><div><p className="ed-label">Những thế hệ đi trước</p><h2>Nguyễn Thế Nam.<br /><em>Kaggle Competition Master.</em></h2></div><p>Thành viên và cựu thành viên FDS với những thành tích trong học tập, thi đấu và nghiên cứu.</p></div><article className="people-story-feature"><div className="people-story-portrait"><Image src={fdsPhotos['nguyen-the-nam']} alt="Poster Nguyễn Thế Nam · Kaggle Competition Master từ Humans of FDS" fill unoptimized sizes="(max-width: 700px) 100vw, 45vw" /></div><div><p className="ed-label">Humans of FDS / Nguyễn Thế Nam</p><h3>Kaggle Competition Master</h3><NamAchievements /><a className="ed-link" href="#archive-nguyen-the-nam">Đọc bài Humans of FDS ↓</a><a className="ed-link" href="#members">Xem thành viên các thế hệ ↓</a></div></article><NamAchievementDetails /></section>
    <AlumniStories />
    <GoldenToadStories />
    <SavedClubPosts kind="golden" />
    <SavedClubPosts kind="humans" />
    <InsideTheLeader />
    <section id="stories" className="ed-section people-stories"><p className="ed-label">Từ những bài đăng của nhà FDS</p><article id="hai-anh" className="people-story-feature"><div className="people-story-portrait"><Image unoptimized src={fdsPhotos['nguyen-hai-anh']} alt="Nguyễn Hải Anh — trưởng ban Văn hoá Gen 8 trong bộ ảnh giới thiệu FDS" fill sizes="(max-width: 700px) 100vw, 45vw" /></div><div><p className="ed-label">Humans of FDS / 23.09.2026</p><h2>Nguyễn Hải Anh.<br /><em>Trưởng ban Văn hoá Gen 8.</em></h2><p>✨ Với sự nhiệt huyết, trách nhiệm và nguồn năng lượng tích cực, 𝐇𝐚̉𝐢 𝐀𝐧𝐡 đã góp phần tạo nên nhiều kỷ niệm đẹp và mang đến sự gắn kết cho đại gia đình 𝐅𝐃𝐒. Cảm ơn 𝐇𝐚̉𝐢 𝐀𝐧𝐡 vì những đóng góp thầm lặng nhưng đầy ý nghĩa trong suốt hành trình vừa qua.</p><a className="ed-link" href={fdsSources.haiAnh} target="_blank" rel="noopener noreferrer">Đọc bài Humans gốc ↗</a></div></article><div className="people-story-pair"><article id="club-day"><p className="ed-label">Club Day / 19.09.2026</p><h3>Club Day 2026.<br /><em>Gặp FDS tại gian hàng.</em></h3><p>Ở Club Day 2026, thành viên FDS trò chuyện với các bạn sinh viên về Data Science, giới thiệu hoạt động CLB và chia sẻ kinh nghiệm học tập.</p><Moment photo="club-day-2026-guests" caption="Ảnh từ album Club Day 2026 của FDS" /><a className="ed-link" href={fdsSources.clubDay} target="_blank" rel="noopener noreferrer">Đọc recap Find Your North ↗</a></article><article id="mid-autumn"><p className="ed-label">Đời sống CLB / 25.09.2026</p><h3>Một mâm cỗ.<br /><em>Hai nhà cùng vui.</em></h3><p>FDS và F-LOGI cùng tổ chức một buổi Trung thu trong phòng sinh hoạt chung. Khoảng 30–40 thành viên tham gia phá cỗ, chơi trò chơi và ngồi lại nói chuyện. Một buổi gặp đầu kỳ để những người ở hai CLB gần nhau hơn.</p><Moment photo="mid-autumn-2026" caption="FDS và F-LOGI cùng đón Trung thu 2026" /><a className="ed-link" href={fdsSources.midAutumn} target="_blank" rel="noopener noreferrer">Đọc recap Trung thu ↗</a></article></div></section>
    <section id="alps-alpine" className="ed-section people-scholarship"><p className="ed-label">Học bổng / ALPS Alpine</p><h2>Học bổng ALPS Alpine.<br /><em>Trải nghiệm tại Đại Liên.</em></h2><p>FDS vinh danh Nguyễn Văn Quyền, Nguyễn Tiến Đạt, Phạm Nam Khánh và Đỗ Ngọc Bích nhận học bổng ALPS Alpine, tham gia chương trình trải nghiệm tại Đại Liên, Trung Quốc.</p><p>Các thành viên trải nghiệm môi trường nghiên cứu và phát triển sản phẩm Automotive tại Alpine Electronics R&amp;D Center.</p><a className="ed-link" href={fdsSources.alps} target="_blank" rel="noopener noreferrer">Đọc bài vinh danh bốn thành viên ↗</a></section>
    <section id="recent-achievements" className="ed-section people-profiles">
      <div className="ed-heading"><div><p className="ed-label">Vinh danh / 2026</p><h2>Thành tích<br /><em>gần đây.</em></h2></div><p>Nguyễn Minh Đức, Nguyễn Thị Hà Lan và Cao Đức Duy — ba thủ khoa khối ngành Kỹ thuật được FDS vinh danh ngày 12/09/2026.</p></div>
      <div className="people-profiles-grid">{fdsProfiles.map(profile => <article key={profile.id} id={profile.id} className="people-profile">
        <div className="people-profile-art"><Image src={fdsPhotos[profile.id]} alt={`Poster vinh danh ${profile.name} · GPA ${profile.gpa}`} fill unoptimized sizes="(max-width: 700px) 100vw, 33vw" /></div>
        <p className="ed-label">{profile.cohort}</p><h3>{profile.name}.</h3><p className="people-profile-gpa">GPA <strong>{profile.gpa}</strong></p><p>{profile.story}</p><a className="ed-link" href={fdsSources.valedictorians} target="_blank" rel="noopener noreferrer">Đọc bài vinh danh gốc ↗</a>
      </article>)}</div>
      <div className="people-academic-notes"><article><p className="ed-label">Capstone / Spring 2026</p><h3>Mùa bảo vệ<br /><em>Capstone.</em></h3><p>FDS gửi lời chúc tới các đội bước vào kỳ bảo vệ Capstone Spring 2026.</p><a className="ed-link" href={fdsSources.capstone} target="_blank" rel="noopener noreferrer">Đọc bài gửi tới các đội Capstone ↗</a></article><article><p className="ed-label">Học tập / Spring 2026</p><h3>Ghi nhận nỗ lực<br /><em>qua từng học kỳ.</em></h3><p>Bài vinh danh ngày 22/06/2026 dành cho thành viên đạt danh hiệu sinh viên Giỏi và Xuất sắc trong học kỳ Spring 2026.</p><a className="ed-link" href={fdsSources.springAwards} target="_blank" rel="noopener noreferrer">Xem bài vinh danh học kỳ ↗</a></article></div>
    </section>
    <MembersGallery />
    <section id="moments" className="ed-section people-moments"><div className="ed-heading"><div><p className="ed-label">Ảnh sinh hoạt CLB</p><h2>Training, prom<br /><em>và teambuilding.</em></h2></div><p>Những buổi thực hành, đêm prom và chuyến teambuilding của thành viên FDS.</p></div><div className="people-moments-grid"><Moment photo="pdp-mentoring" caption="Hướng dẫn thực hành máy tính · hoạt động PDP" /><Moment photo="prom-friends" caption="Ban Chuyên môn tại Pawn & Rise · FDS Prom 2026" /><Moment photo="trouvaille-game" caption="Trò chơi nhóm tại teambuilding Trouvaille" /><Moment photo="trouvaille-friends" caption="Ảnh lưu niệm tại teambuilding Trouvaille" /></div></section>
    <footer className="people-footer"><p className="ed-label">Tham gia FDS</p><h2>Bạn muốn<br /><em>tham gia FDS?</em></h2><Link className="ed-link" href="/#journey">Tìm hiểu cách tham gia FDS →</Link><a className="ed-link" href="https://www.facebook.com/dsclub.fu" target="_blank" rel="noopener noreferrer">Theo dõi câu chuyện của FDS ↗</a></footer>
  </div></main></>;
}
