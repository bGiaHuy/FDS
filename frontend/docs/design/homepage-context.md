# CONTEXT — FDS Homepage Redesign

## 1. Mục tiêu sản phẩm
Website chính của FPTU Data Science Club (FDS) là **bộ mặt thương hiệu**, không phải landing page tuyển quân quanh năm.

Mục tiêu ưu tiên:
1. Branding / prestige.
2. Showcase thành tích và con người.
3. Làm CLB hấp dẫn với sinh viên tài năng.
4. Giúp người xem hiểu: FDS có những ai, làm gì, và mình sẽ phát triển thế nào nếu ở trong môi trường này.

Recruitment mỗi năm có concept riêng và có thể tách thành campaign route/page riêng.

## 2. Positioning
FDS nên tạo cảm giác:
- Tiêu chuẩn cao, có thành tích, có năng lực thật.
- Elite nhưng không arrogant.
- Đối ngoại chuyên nghiệp.
- Đối nội vui vẻ, thân thiện, nghiêm túc chia sẻ và mentor thế hệ sau.
- Thành viên có cảm giác tự hào khi mang identity FDS.

Thứ tự giá trị muốn nhấn:
**Competition → Career → Knowledge → Project**.

## 3. Brand direction
Giữ:
- Light mode.
- Deep navy + FDS blue + off-white paper.
- Texture giấy / báo.
- Wireframe hand + network/data motif.
- Technical lines / node graph / hex accents.
- Handwritten annotations có kiểm soát.
- Student photography thật.
- Editorial tape / photo collage.
- Slogan đang dùng: **Insights in our eyes.**
- Brand mood: **Apple-like clarity + FDS identity**, không biến thành Apple clone.

Không muốn:
- SaaS dashboard generic.
- Corporate website khô cứng.
- Decoration ở mọi chỗ.
- Slanted/xiên typography quá nhiều.
- Layout ngang gây khó đọc.
- Card-grid lặp đi lặp lại.

## 4. Feedback mỹ thuật quan trọng
UI trước bị vướng:
- Layout `4 ô vuông đặt cạnh nhau`.
- Pattern tương tự lặp lại nhiều lần.
- Các card People và What FDS Does nhìn như HTML mới viết xong nhưng chưa art-direct.
- Mật độ chữ cao, thiếu “trang nghỉ”.

### Rule bắt buộc
- **Không có hai section liên tiếp dùng cùng một composition.**
- **Không dùng 4 equal cards như default.**
- Sau 1–2 dense sections cần một `rest section / visual reset`.
- Không được lược bỏ content để tạo khoảng nghỉ. Phải dùng hierarchy, progressive disclosure, media, spacing, statement section.

## 5. Reference: UET Innovation Space
Reference public: https://uetis.framer.website/

Thứ cần học từ reference:
- Rhythm thay đổi liên tục giữa text, project, image, stats, statement, testimonial/visual.
- Có các đoạn “nghỉ” rất ít information density.
- Section không bị đóng thành những block grid giống nhau.
- Composition thay đổi nhưng vẫn giữ identity.
- Content → visual → content → rest → content → experience → rest.

Không copy:
- Agency/service positioning.
- Palette hoặc identity của UETIS.
- Framer component look.
- Generic Inter-only look.

## 6. Homepage narrative
Cảm xúc mong muốn:
**Ấn tượng → Nể → Tò mò → Hiểu giá trị → Muốn thuộc về → Khám phá sâu hơn.**

Homepage nên kể:
1. Đây là FDS.
2. Đây là những người FDS tạo ra / quy tụ.
3. Đây là những gì FDS làm.
4. Đây là proof / flagship initiative.
5. Đây là đời sống thật.
6. Đây là cách hệ sinh thái giúp thành viên lớn lên.
7. Data chỉ là một nửa; con người là nửa còn lại.
8. Đây là nơi bạn có thể đóng góp.
9. Đây là legacy.
10. Đi sâu hơn qua Humans / Initiatives / About / Social.

## 7. Composition signature đề xuất
- Hero: 2-column editorial split, wireframe hand là signature.
- Humans: 1 hero profile + 2 supporting + 1 peek; asymmetrical, magazine spread.
- Rest 01: 60–80vh, big type + một ảnh/statement.
- What FDS Does: zig-zag / editorial journey, không 4 equal cards.
- Rest 02: image-led hoặc quote-led.
- Summer Challenge: 40/60 asymmetric case study, photo + poster/chart overlap.
- Moments: freeform photo collage.
- Ecosystem: one flowing path / node journey.
- Data is Only Half the Story: cinematic split.
- Find Your Place: 1 major block + 2 supporting blocks / accordion.
- Timeline: airy one-line timeline.
- Explore: 1 large feature tile + 2–3 smaller supporting links.

## 8. Content constraints
Không invent số liệu.
Các số về member / event / competition / scholarship cần placeholder rõ ràng cho tới khi CLB thống kê chính thức.
Không thay thành tích thật bằng claim marketing.
Không xóa các section chính chỉ để làm trang ngắn.

## 9. Technical context
Project hiện tại dùng Next.js app directory + Tailwind.
Assets FDS nằm trong `frontend/public/fds` theo context cũ.
Khi implement phải ưu tiên tái sử dụng asset thật trong repo; không tự thay asset bằng generated placeholder nếu repo đã có.
Responsive mobile là bắt buộc vì traffic nhiều khả năng đến từ Facebook.
