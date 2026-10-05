# Hồ sơ thành viên

## Sử dụng

- `/people#members`: bấm ảnh hoặc tên để mở chi tiết. Liên kết `/people#<member-id>` mở đúng hồ sơ và gen.
- `/account/profile`: người đăng nhập sửa tên hiển thị, giới thiệu, ngành học, khoá/lớp, kỹ năng và liên kết. Gen, ban, chức vụ và ảnh trong danh sách CLB giữ theo dữ liệu gốc.
- `/account/members`: quản trị viên chọn gen, hồ sơ và email tài khoản để gắn. Tài khoản phải tồn tại và có quyền MEMBER hoặc ADMIN. Quyền thành viên được chủ hệ thống xác nhận theo quy trình quản trị hiện có; đăng ký công khai vẫn tạo GUEST.
- Mỗi tài khoản gắn một hồ sơ. Cùng tên qua nhiều gen không tự động được coi là cùng người. Không cho ghi đè tài khoản đã gắn hoặc hồ sơ đã có chủ.

## Cơ sở dữ liệu và triển khai

Migration `prisma/migrations/20261005170000_member_profiles/migration.sql` đã được chuẩn bị, **chưa áp dụng lên cơ sở dữ liệu thật**. Chủ repo cần kiểm tra các migration đang chờ, sao lưu theo quy trình của hệ thống và chạy `npm --prefix backend run prisma:deploy` trên môi trường được phép trước khi triển khai backend mới. Không dùng migrate reset hoặc db push thay cho migration.

Frontend gọi API cùng domain; Next.js chuyển tiếp đến `INTERNAL_API_URL` (ví dụ `http://backend:4000` trong Docker). Nếu thiếu, dùng `NEXT_PUBLIC_API_URL`, cuối cùng là `http://localhost:4000`. Đăng nhập/refresh chuyển tiếp cookie HttpOnly; sửa hồ sơ yêu cầu JWT hợp lệ. Khởi động lại backend và frontend sau khi triển khai.

API công khai không trả email, ID tài khoản, mật khẩu hay trường riêng tư. Server lấy ID người sửa từ JWT, chỉ cho cập nhật các trường cho phép; quyền admin và quyền thành viên được kiểm tra lại từ DB. Khi dịch vụ hồ sơ chưa sẵn sàng, danh sách vẫn hiện thông tin gốc và báo chưa tải được thông tin bổ sung.

## Cập nhật danh sách và kiểm tra

Dữ liệu gốc: `frontend/lib/fds-members.ts`. Khi thay đổi, chạy `npm --prefix frontend run members:catalog` để cập nhật catalog backend. Dùng `npm --prefix frontend run members:check` để phát hiện lệch dữ liệu.

`npm --prefix backend run test:profiles` kiểm tra controller, JWT, validation, sửa đúng tài khoản, gắn bởi admin, trùng hồ sơ, thu hồi quyền và dữ liệu công khai. Test dùng dữ liệu trong bộ nhớ; không kết nối hay sửa DB thật.

Có thể chạy `node backend/test/member-profiles.cjs --serve` để mở backend thử nghiệm ở 4104; frontend thử nghiệm đặt `INTERNAL_API_URL=http://127.0.0.1:4104` và dùng cổng riêng. Dữ liệu thử nghiệm mất khi tắt; không dùng làm backend thật.
