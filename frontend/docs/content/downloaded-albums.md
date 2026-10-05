# Ảnh và bài viết do người dùng tải về

Đợt nhập ngày 05/10/2026 gồm 55 album, 2.672 file ảnh và 2.670 file chữ tại `downloaded_albums/`. Đọc được 2.671 ảnh; `FDS_-_Trung_Thu_202350_mc/image_42.jpg` không phải định dạng ảnh hợp lệ. Giữ nguyên toàn bộ thư mục tải về và bỏ qua trong Git.

Đã chọn 19 ảnh cho trang chủ, Về FDS và Humans of FDS: Prom 2026, Digital Race 2023, Memoastro, Trouvaille và các bài Humans. Ảnh nguồn được sao chép vào nhóm tương ứng trong `asset/photos/fds/`, kèm file chữ nếu có. Catalog lưu đường dẫn nhập, kích thước và SHA-256. Ảnh xuất bản nằm trong `public/fds/photos/`; component sử dụng khóa trong `lib/fds-photos.ts`.

Các file chữ chỉ có phần mở đầu, dài tối đa 250 ký tự, thường kết thúc bằng `...`. Không coi chúng là bài viết đầy đủ. Bảy phần mở đầu được giữ nguyên trong `lib/fds-saved-posts.ts`, hiển thị dưới mục “Đọc phần mở đầu bài viết”. Không viết thêm hoặc biến chúng thành lời kể của nhân vật. Liên kết đi tới album Humans of FDS vì bộ tải về không lưu URL từng bài.

Ba gương mặt Cóc Vàng bổ sung: Đào Duy Hưng (Spring 2022), Vũ Lê Hải Xuân (Fall 2022), Hoàng Trung Kiên (Summer 2023). Học kỳ được ghi trên poster và phần mở đầu do người dùng cung cấp. Bài về Lâm, Hiệp trong mục lưu trữ là bài sinh nhật Gen 6; không thay ảnh vinh danh năm 2026 của hai anh bằng poster sinh nhật.

`downloaded-albums-audit.json` ghi thống kê từng album. Build chỉ cần ảnh đã xuất bản, không cần thư mục tải về hoặc kho ảnh gốc.
