import ReviewComments from "../../components/home/ReviewComments";
import Image from "next/image";
import Link from "next/link";
import ReadingProgress from "../../components/home/ReadingProgress";
import { fdsPhotos, type FdsPhotoKey } from "../../lib/fds-photos";
import "../editorial.css";
import "./history.css";

export const metadata = { title: "Hành trình FDS | FPTU Data Science Club", description: "Từ Câu lạc bộ Xe tự hành đến FPTU Data Science Club. Các cột mốc, hoạt động và hình ảnh cộng đồng FDS." };

function ArchivePhoto({ file, alt, caption }: { file: FdsPhotoKey; alt: string; caption: string }) {
  return <figure className="ed-archive-photo"><div className="ed-photo"><Image src={fdsPhotos[file]} alt={alt} fill sizes="(max-width: 700px) 100vw, 65vw" /></div><figcaption>{caption}</figcaption></figure>;
}

export default function AboutPage() {
  return <div className="ed-home ed-history-page">

    <ReviewComments /><header className="ed-history-header"><Link className="ed-link" href="/#about">← Về trang chủ</Link><ReadingProgress /></header>
    <main id="main-content" className="ed-shell">
      <section id="history-intro" className="ed-section ed-history-intro"><p className="ed-label">FPTU Data Science Club / Lịch sử CLB</p><h1>Hành trình<br /><em>của FDS.</em></h1><p>Từ những mùa Cuộc Đua Số đến một cộng đồng sinh viên cùng học, thực hành và chia sẻ kiến thức về dữ liệu.</p><ArchivePhoto file="activity-community" alt="Các thành viên đứng bên biểu ngữ FPTU Data Science Club" caption="Cộng đồng FDS · ảnh tư liệu CLB" /><nav aria-label="Các chương trong hành trình"><a href="#origins">2018 / Xe tự hành</a><a href="#innovation">2020 / Innovation</a><a href="#identity">01.11.2020 / FDS</a><a href="#today">Hoạt động hôm nay</a></nav></section>

      <section id="origins" className="ed-section ed-history-chapter"><div className="ed-chapter-year">2018</div><div><p className="ed-label">01 / Khởi đầu</p><h2>Từ CLB<br /><em>Xe tự hành.</em></h2><p>Tiền thân của FDS là Câu lạc bộ Xe tự hành, từng tham gia nhiều mùa Cuộc Đua Số.</p><ArchivePhoto file="legacy-autonomous-car" alt="Thành viên CLB Xe tự hành chuẩn bị xe tại Cuộc Đua Số" caption="CLB Xe tự hành tại Cuộc Đua Số 2019–2020" /></div></section>

      <section id="innovation" className="ed-section ed-history-chapter"><div className="ed-chapter-year">Đầu<br />2020</div><div><p className="ed-label">02 / Mở rộng lĩnh vực</p><h2>FPT Innovation Club.<br /><em>Thêm những bài toán mới.</em></h2><p>Đầu năm 2020, CLB đổi tên thành FPT Innovation Club và mở rộng sang Big Data, Artificial Intelligence và Data Science.</p><ArchivePhoto file="about-members" alt="Các thành viên cùng làm việc bên bàn máy tính" caption="Cùng học và thực hành · ảnh tư liệu hoạt động hiện tại của FDS" /></div></section>

      <section id="identity" className="ed-section ed-history-chapter"><div className="ed-chapter-year">01.11<br />2020</div><div><p className="ed-label">03 / Tên gọi FDS</p><h2>FPTU<br /><em>Data Science Club.</em></h2><p>Ngày 01/11/2020, CLB công bố tên FPTU Data Science Club và lấy Data Science làm định hướng chính.</p><div className="ed-history-pair"><ArchivePhoto file="club-shirt-slogan" alt="Áo CLB in slogan Insights in our eyes" caption="Insights in our eyes · slogan trên áo CLB hiện tại" /><ArchivePhoto file="club-fair-booth" alt="Gian hàng FDS trưng bày các khung ảnh" caption="Gian hàng CLB và các khung ảnh kỷ niệm" /></div></div></section>

      <section id="today" className="ed-section ed-history-chapter"><div className="ed-chapter-year">Hôm<br />nay</div><div><p className="ed-label">04 / Học hỏi · Kết nối · Ứng dụng</p><h2>Trong lớp học.<br /><em>Ngoài lớp học.</em></h2><p>Training, workshop và talkshow nội bộ là nơi trao đổi kiến thức. FDS Summer Challenge tạo sân chơi dữ liệu trên Kaggle; Bootcamp đưa kỹ năng số đến cộng đồng; FDS Prom kết nối các thế hệ thành viên.</p><ArchivePhoto file="activity-workshop" alt="Thành viên hướng dẫn trẻ em thực hành trên máy tính" caption="Hướng dẫn thực hành trên máy tính · hoạt động cộng đồng FDS" /><div className="ed-history-pair"><ArchivePhoto file="club-prom-stage" alt="Thành viên FDS trên sân khấu dạ tiệc" caption="FDS Prom · gặp gỡ thành viên và cựu thành viên" /><ArchivePhoto file="trouvaille-team" alt="Ảnh tập thể teambuilding Trouvaille của FDS" caption="Teambuilding Trouvaille · ảnh tập thể CLB" /></div><Link className="ed-link" href="/#projects">Xem các chương trình của FDS →</Link></div></section>
      <footer className="ed-history-footer"><p>FPTU Data Science Club · Đại học FPT cơ sở Hà Nội</p><Link className="ed-link" href="/">Về trang chủ FDS →</Link></footer>
    </main>
  </div>;
}
