import Image from 'next/image';

const paragraphs = [
  '💻 Một cuộc gặp tình cờ tại thư viện và lời giới thiệu rằng vào FPTU Data Science Club có thể được tiếp cận sớm với kiến thức chuyên ngành đã khiến Việt Thành quyết định apply ngay. Từ đó, chàng sinh viên K20 chuyên ngành Trí tuệ Nhân tạo trở thành thành viên Ban Chuyên môn, đồng thời có cơ hội tham gia SMART Lab.',
  '🏆 Sở hữu Học bổng 100% Trường Đại học FPT và Giải Nhì Quốc gia MOSWC, Thành còn ghi dấu trong hoạt động CLB với vai trò Trưởng Ban Tổ chức FDS Talkshow 2025 – AI Agent: The Next Generation, FDS Competition 2026 và Trưởng ban HR FDS Prom 2026. Chính lần đầu đảm nhận vị trí Trưởng Ban Tổ chức đã giúp Thành thay đổi từ suy nghĩ “leader phải ôm mọi việc” sang học cách tin tưởng và san sẻ trách nhiệm với đồng đội.',
  '🤝 Điều thú vị là Thành chưa từng có ý định ứng cử vào Ban Chủ nhiệm nhiệm kỳ mới. Việc được tập thể lựa chọn vì cảm giác yên tâm và tin tưởng rằng công việc sẽ được hoàn thành vì thế trở thành một dấu mốc đặc biệt. Với Thành, khi đã là lựa chọn vì lợi ích chung của tập thể, cậu bạn sẵn sàng nhận lấy trách nhiệm ấy.',
  '📸 Cùng Khoa Trí tuệ Nhân tạo gặp gỡ Nguyễn Việt Thành và khám phá một góc khác của leadership – nơi vị trí dẫn dắt bắt đầu từ sự tin tưởng của những người đồng hành – trong Inside The Leader #03 nhé!',
];

export default function InsideTheLeader() {
  return <section id="inside-the-leader" className="ed-section people-inside-leader">
    <p className="ed-label">Khoa Trí tuệ Nhân tạo / Inside The Leader #03</p>
    <h2>🤖 INSIDE THE LEADER #03 | NGUYỄN VIỆT THÀNH – KHI SỰ TIN TƯỞNG ĐƯA MỘT THÀNH VIÊN ĐẾN VỊ TRÍ CHỦ NHIỆM</h2>
    <div className="people-leader-article">
      <div className="people-leader-images">
        <Image src="/fds/photos/people/inside-the-leader/nguyen-viet-thanh-portrait.png" alt="Nguyễn Việt Thành — Chủ nhiệm FPTU Data Science Club, Inside The Leader #03" width={2048} height={2048} unoptimized />
        <Image src="/fds/photos/people/inside-the-leader/nguyen-viet-thanh-interview.png" alt="Nguyễn Việt Thành trong buổi phỏng vấn và chia sẻ về việc được chọn làm Chủ nhiệm CLB" width={2048} height={2048} unoptimized />
      </div>
      <div className="people-leader-original">{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </div>
  </section>;
}
