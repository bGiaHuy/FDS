# Kho ảnh nguồn FDS

Ảnh gốc nằm tại `fds/`, ngoài thư mục `public` và được Git bỏ qua. Toàn bộ 420 ảnh người dùng cung cấp đã được chuyển, giữ nguyên nội dung và kiểm tra SHA-256 trước/sau. Không bỏ ảnh gốc khi tối ưu ảnh cho web.

`catalog.json` được giữ trong repo: đường dẫn mới tương đối với `fds/`, tên nguồn ban đầu, đường dẫn trong bộ ảnh nhập, mô tả, kích thước và SHA-256. Không chứa đường dẫn máy cá nhân. Phân loại/mô tả kế thừa danh mục người dùng cung cấp; không dùng chúng để tự xác nhận tên người, chức danh hoặc thành tích.

| Nhóm | Thư mục |
| --- | --- |
| Thành viên, các ban, sinh nhật | `fds/people/` |
| Prom, dã ngoại, Club Fair, FDS Talk, PDP | `fds/events/` |
| Đồ án | `fds/projects/capstone/` |
| Vinh danh, chứng chỉ | `fds/achievements/` |
| Các cuộc thi | `fds/competitions/` |
| Nghiên cứu, lab | `fds/research/` |
| Các mùa tuyển thành viên | `fds/recruitment/` |
| Hoạt động lớp học số | `fds/community/bootcamp-2026/` |
| Logo, poster nhận diện | `fds/brand/` |

Ảnh website dùng nằm tại `frontend/public/fds/photos/`, đã chọn lọc và tối ưu. Trang/component truy cập thông qua `frontend/lib/fds-photos.ts`. Nguồn gốc của ảnh xuất bản nằm trong `frontend/public/fds/photos/manifest.json`.

Để chia sẻ kho gốc sang máy khác, chuyển riêng thư mục `fds/`; ảnh gốc không đi cùng một Git clone. Build và website chỉ cần ảnh đã chọn trong `public`, không phụ thuộc kho gốc.

Không tạo folder `FDS_images` hay handoff ở root. Ảnh thêm mới: đưa vào nhóm phù hợp trong kho nguồn, bổ sung catalog; chỉ đưa phiên bản cần dùng lên `public`. Context/spec redesign được giữ tại `frontend/docs/design/`.
