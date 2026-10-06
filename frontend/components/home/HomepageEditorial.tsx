import Image from "next/image";
import Partners from "./Partners";
import ActivityGallery from "./ActivityGallery";
import AnimatedDetails from "./AnimatedDetails";
import { FlowPath } from "./EditorialMotifs";
import { fdsPhotos, type FdsPhotoKey } from "../../lib/fds-photos";
import { fdsProfiles } from "../../lib/fds-profiles";
import { fdsSources } from "../../lib/fds-stories";

const facebook = "https://www.facebook.com/dsclub.fu";
const kaggle = "https://www.kaggle.com/competitions/fds-summer-challenge-2025-weather-prediction";

function Photo({ file, alt, className = "" }: { file: FdsPhotoKey; alt: string; className?: string }) {
  const fullWidth = file === 'club-prom-gathering' || file === 'ba-vi-team' || file === 'memoastro-team';
  const artwork = file === 'nguyen-minh-duc' || file === 'nguyen-thi-ha-lan' || file === 'cao-duc-duy' || file === 'dao-the-viet' || file === 'mai-huyen-trang' || file === 'do-dinh-long';
  return <div className={`ed-photo ${className}`}><Image src={fdsPhotos[file]} alt={alt} fill unoptimized={artwork} sizes={fullWidth ? '100vw' : '(max-width: 700px) 100vw, (max-width: 1100px) 60vw, 700px'} /></div>;
}

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="ed-link" href={href} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}

function Label({ children }: { children: React.ReactNode }) { return <p className="ed-label">{children}</p>; }

export function HumansSpread() {
  return <div className="ed-humans">
    {fdsProfiles.map((profile, index) => <a key={profile.id} className={`ed-human ed-human--achievement ${['ed-human--feature', 'ed-human--second', 'ed-human--third'][index]}`} href={`/people#${profile.id}`}>
      <Photo file={profile.id} alt={`Bài vinh danh ${profile.name} của FDS`} />
      <Label>{profile.cohort}</Label><h3>{profile.name}.</h3><p>{profile.highlight}</p><span className="ed-human-more">Đọc câu chuyện →</span>
    </a>)}
    <a className="ed-human-peek" href="/people"><span>Gặp thêm những gương mặt FDS.</span><span aria-hidden="true">↗</span></a>
  </div>;
}

export default function HomepageEditorial() {
  return <div className="ed-home">
    <section id="humans" className="ed-section ed-shell">
      <div className="ed-heading"><div><Label>01 / Humans of FDS</Label><h2>Những gương mặt<br /><em>của FDS.</em></h2></div><p>Thành tích học tập, nghiên cứu và thi đấu của thành viên FDS.</p></div>
      <HumansSpread />
      <a className="ed-members-cta" href="/people#members">Xem thành viên các thế hệ <span aria-hidden="true">→</span></a>
      <div id="achievements" className="ed-proof"><h3>Thành tích cá nhân được FDS vinh danh</h3><div className="ed-proof-numbers"><p><strong>03</strong><span>Thủ khoa khối ngành Kỹ thuật<br />Đợt III/2025 – II/2026</span></p><External href={fdsSources.valedictorians}>Đọc bài vinh danh của FDS</External><a className="ed-link" href="/people#alps-alpine">04 thành viên · học bổng ALPS Alpine →</a></div></div>
    </section>

    <section id="ambition" className="ed-rest ed-rest--photo" aria-labelledby="ambition-title"><Photo file="club-prom-gathering" alt="Các thế hệ thành viên FDS cùng gặp gỡ trong hội trường" /><div className="ed-rest-copy ed-shell"><h2 id="ambition-title" className="ed-club-title">FPTU DATA SCIENCE CLUB</h2></div></section>

    <section id="fields" className="ed-section ed-shell">
      <div className="ed-heading ed-heading--stack"><div><Label>02 / Hoạt động chuyên môn</Label><h2>Ở FDS,<br /><em>chúng mình làm gì?</em></h2><p>Học AI và Data Science, tham gia cuộc thi, tổ chức workshop và hướng dẫn thực hành.</p></div></div>
      <article className="ed-pillar ed-pillar--compete"><figure><Photo file="huawei-team" alt="Đội thi tại lễ trao giải Huawei ICT Competition" /><figcaption>Chung kết toàn cầu Huawei ICT Competition 2025–2026</figcaption></figure><div><Label>01 / Competition</Label><h3>Lập đội.<br /><em>Cùng đi thi.</em></h3><p>Các thành viên lập đội, chuẩn bị bài thi và thử sức ở các cuộc thi công nghệ. FDS cũng tổ chức Summer Challenge trên Kaggle.</p><a className="ed-link" href="#projects">FDS Summer Challenge →</a><a className="ed-link ed-pillar-extra" href="/people#duong-van-hiep">Dương Văn Hiệp · giải Nhất Computing Track →</a></div></article>
      <article className="ed-pillar ed-pillar--grow"><figure><Photo file="about-members" alt="Thành viên FDS trao đổi bên bàn máy tính" /><figcaption>Trao đổi chuyên môn · cùng học, cùng thực hành</figcaption></figure><div><Label>02 / Career</Label><h3>Kinh nghiệm.<br /><em>Học từ người đi trước.</em></h3><p>Thành viên và cựu thành viên chia sẻ chuyện học, đi thi và làm việc. Bạn có thể đọc câu chuyện của họ trong Humans of FDS.</p><a className="ed-link" href="#achievements">Xem thành tích của thành viên →</a></div></article>
      <article className="ed-pillar ed-pillar--learn"><div><Label>03 / Knowledge</Label><h3>Học tập.<br /><em>Training và talkshow.</em></h3><p>Thành viên tổ chức các buổi học AI và Data Science hằng tuần, trao đổi kiến thức và hướng dẫn nhau thực hành.</p><p>Talkshow AI Agent — The Next Generation bàn về ứng dụng AI trong học tập, nghiên cứu và sáng tạo.</p><External href={fdsSources.talkshow}>Đọc recap talkshow</External></div><figure><Photo file="talkshow-ai-agent" alt="Ảnh tập thể talkshow AI Agent tại Đại học FPT Hà Nội" /><figcaption>AI Agent — The Next Generation · 08.11.2025</figcaption></figure></article>
      <article className="ed-pillar ed-pillar--build"><figure><Photo file="pdp-mentoring" alt="Hướng dẫn trẻ em thực hành máy tính trong hoạt động PDP" /><figcaption>Hướng dẫn thực hành · ảnh hoạt động cộng đồng của CLB</figcaption></figure><div><Label>04 / Project</Label><h3>Thực hành.<br /><em>Hướng dẫn trẻ học lập trình.</em></h3><p>Trong FDS Bootcamp, thành viên hướng dẫn trẻ em học Scratch và các kỹ năng số qua từng buổi thực hành.</p><a className="ed-link" href="#bootcamp">Xem FDS Bootcamp 2026 →</a></div></article>
      <AnimatedDetails className="ed-disciplines" title="Các lĩnh vực chuyên môn"><dl><div><dt>Data Science</dt><dd>Phân tích dữ liệu, tìm quy luật và xây dựng mô hình dự đoán.</dd></div><div><dt>Big Data</dt><dd>Lưu trữ, xử lý và phân tích lượng dữ liệu lớn.</dd></div><div><dt>Artificial Intelligence</dt><dd>Học và ứng dụng Machine Learning, Deep Learning vào bài toán thực tế.</dd></div><div><dt>Học tập & Thực hành</dt><dd>Training, workshop chuyên sâu, cuộc thi và dự án cộng đồng.</dd></div></dl></AnimatedDetails>
    </section>

    <section id="together" className="ed-image-rest" aria-label="Teambuilding Memoastro"><Photo file="memoastro-team" alt="Thành viên FDS tại teambuilding Memoastro" /></section>

    <section id="projects" className="ed-section ed-shell">
      <Label>03 / Chương trình của FDS</Label>
      <div className="ed-case"><div><h2>FDS Summer<br /><em>Challenge.</em></h2><p>Cuộc thi dữ liệu do FDS tổ chức trên Kaggle. Người tham gia xây dựng mô hình học máy và so sánh kết quả trên bảng xếp hạng.</p><dl className="ed-case-years"><div><dt>2024</dt><dd>Data Challenge</dd></div><div><dt>2025</dt><dd>Weather Prediction</dd></div></dl><External href={kaggle}>Xem thử thách trên Kaggle</External></div><figure><Photo file="digital-race-team" alt="Đội thi tại Digital Race FPT Edu 2023; ảnh tư liệu hoạt động thi đấu" /><figcaption>Đội thi FDS tại Digital Race FPT Edu 2023</figcaption><div className="ed-case-note"><Label>Weather Prediction / 2025</Label><strong>Dự báo<br />thời tiết.</strong><span>Thử thách dự báo thời tiết</span></div></figure></div>
      <div className="ed-initiatives"><article id="bootcamp"><figure><Photo file="activity-workshop" alt="Người hướng dẫn cùng trẻ em thực hành trên máy tính" /><figcaption>Ảnh hoạt động hướng dẫn thực hành của FDS</figcaption></figure><Label>Community / 2026</Label><h3>FDS Bootcamp</h3><p>10 buổi Scratch và kỹ năng số cho trẻ từ 8 đến 12 tuổi tại phường Hoàn Kiếm, từ 19/06 đến 19/07/2026. Phối hợp cùng Đoàn Thanh niên phường.</p><p>Chương trình được Vietnam.vn và cổng thông tin Đại học FPT đưa tin.</p></article><article><figure><Photo file="prom-friends" alt="Thành viên chụp ảnh tại FDS Prom Pawn & Rise 2026" /><figcaption>FDS Prom · gặp gỡ các thế hệ thành viên</figcaption></figure><Label>Culture / 2026</Label><h3>FDS Prom — PawnRise</h3><p>Buổi prom thường niên của CLB, nơi thành viên và cựu thành viên gặp lại nhau, trò chuyện và chụp ảnh lưu niệm.</p><External href={facebook}>Theo dõi các hoạt động</External></article></div>
    </section>

    <section id="activities" className="ed-section ed-shell"><div className="ed-heading ed-heading--stack"><div><Label>04 / Sinh hoạt CLB</Label><h2>Sinh hoạt<br /><em>ngoài giờ học.</em></h2><p>Gặp nhau ở buổi training, gian hàng Club Day, đêm prom hay chuyến teambuilding.</p></div></div><ActivityGallery /></section>

    <section id="ecosystem" className="ed-section ed-shell"><Label>05 / Học và chia sẻ</Label><h2>Học từ nhau.<br /><em>Chia sẻ lại với nhau.</em></h2><div className="ed-ecosystem"><FlowPath /><ol>{[
      ["Học", "Tham gia training về Data Science, Big Data và AI."],
      ["Thực hành", "Làm bài tập, thử mô hình và trao đổi kết quả với nhóm."],
      ["Đi thi", "Cùng đội chuẩn bị và tham gia các cuộc thi công nghệ."],
      ["Hướng dẫn", "Chia sẻ tài liệu và hướng dẫn những thành viên mới."],
    ].map(([title, copy], index) => <li key={title}><span className="ed-label">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></div></section>

    <section id="half-story" className="ed-half" aria-labelledby="half-title"><Photo file="prom-conversation" alt="Thành viên trò chuyện tại FDS Prom 2026" /><Photo file="prom-portraits" alt="Thành viên chụp ảnh lưu niệm tại FDS Prom" /><div><h2 id="half-title">FDS PROM 2026</h2></div></section>

    <section id="community" className="ed-section ed-shell"><div className="ed-heading ed-heading--stack"><div><Label>06 / Các ban của FDS</Label><h2>Mỗi ban<br /><em>một công việc.</em></h2><p>Ban Chủ nhiệm điều phối hoạt động chung. Ba ban chuyên trách cùng phụ trách chuyên môn, truyền thông và đời sống CLB.</p></div></div><div className="ed-departments"><article><Label>01 / Chuyên môn</Label><h3>Training<br />và chuyên môn.</h3><p>Nghiên cứu kiến thức, xây dựng tài liệu học tập, tổ chức workshop kỹ thuật, training nội bộ và cố vấn chuyên môn cho các đội thi.</p><Photo file="technical-seminar-practice" alt="Thành viên thực hành trên máy tính tại seminar Limitless Potential of Data Science" /><span className="ed-label">Data Science · Big Data · AI</span></article><article><Label>02 / Truyền thông – Đối ngoại</Label><h3>Truyền thông<br />và đối tác.</h3><p>Phụ trách nội dung trên các kênh của CLB và liên hệ doanh nghiệp, nhà tài trợ, đối tác.</p><Photo file="communications-photographer" alt="Thành viên chụp ảnh tại buổi truyền thông tuyển thành viên FDS Gen 7" /></article><article><Label>03 / Văn hoá</Label><h3>Sự kiện<br />và sinh hoạt CLB.</h3><p>Tổ chức FDS Prom, Club Fair và các hoạt động nội bộ để thành viên gặp gỡ, sinh hoạt cùng nhau.</p><Photo file="club-first-meeting" alt="Thành viên FDS trong buổi First Meeting tuyển thành viên Gen 7" /></article></div></section>

    <section id="about" className="ed-section ed-shell ed-legacy"><div><Label>07 / Về FDS</Label><h2>Từ CLB Xe tự hành<br /><em>đến FDS.</em></h2><p>FPTU Data Science Club là câu lạc bộ khoa học dữ liệu đầu tiên tại Đại học FPT cơ sở Hà Nội. CLB dành cho sinh viên quan tâm đến Data Science, Big Data và AI, với các buổi training, cuộc thi và hoạt động cộng đồng.</p><a className="ed-link ed-history-cta" href="/about">Đọc lịch sử FDS <span aria-hidden="true">↗</span></a></div><div className="ed-legacy-preview"><Photo file="legacy-autonomous-car" alt="Thành viên CLB Xe tự hành cùng chuẩn bị xe tại Cuộc Đua Số 2019–2020" /><ol className="ed-timeline"><li><strong>2018</strong><p>CLB Xe tự hành · nhiều mùa Cuộc Đua Số</p></li><li><strong>Đầu 2020</strong><p>FPT Innovation Club · Big Data, AI và Data Science</p></li><li><strong>01.11.2020</strong><p>Công bố tên FPTU Data Science Club</p></li></ol></div></section>

    <section id="journey" className="ed-section ed-shell ed-join"><Label>08 / Tham gia FDS</Label><h2>Bạn muốn<br /><em>tham gia FDS?</em></h2><p>Dành cho sinh viên Đại học FPT Hà Nội. Tuyển thường niên vào khoảng cuối tháng 12 – đầu tháng 1; theo dõi kênh chính thức để cập nhật đợt tiếp theo.</p><AnimatedDetails title="Quy trình tham gia FDS"><ol>{[["Tìm hiểu", "Tìm hiểu hoạt động và công việc của từng ban."], ["Ứng tuyển", "Điền Google Form khi đợt tuyển thường niên mở đơn."], ["Phỏng vấn", "Trao đổi về sở thích, kinh nghiệm và ban bạn muốn tham gia."], ["Tham gia", "Làm quen với các thành viên và bắt đầu sinh hoạt tại ban."]].map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}</ol></AnimatedDetails><External href={facebook}>Theo dõi đợt tuyển tiếp theo</External></section>

    <section id="explore" className="ed-section ed-shell"><Label>09 / Xem thêm</Label><div className="ed-explore"><a href="/people"><Photo file="activity-community" alt="Cộng đồng FDS bên biểu ngữ của CLB" /><h2>Humans<br /><em>of FDS.</em> <span aria-hidden="true">↗</span></h2></a><a href="#projects"><Label>Initiatives</Label><h3>Các chương trình<br />của CLB →</h3></a><a href="#about"><Label>About</Label><h3>Câu chuyện FDS →</h3></a><a href={facebook} target="_blank" rel="noopener noreferrer"><Label>Social / Stories</Label><h3>Gặp chúng mình<br />trên Facebook ↗</h3></a></div></section>
    <Partners />
  </div>;
}
