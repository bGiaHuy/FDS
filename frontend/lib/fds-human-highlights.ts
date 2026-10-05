import { fdsSources } from './fds-stories';

export const fdsHumanHighlights = [
  {
    id: 'vu-thanh-lam', name: 'Vũ Thành Lâm', role: 'Chủ nhiệm FDS · Gen 6',
    date: '15.09.2026', photo: 'vu-thanh-lam',
    title: 'Chủ nhiệm Gen 6 · nghiên cứu Data Mining.',
    story: 'FDS vinh danh anh Lâm là Sinh viên Phong trào Xuất sắc đợt II/2026. Anh tham gia tổ chức Digital Race 2023, FPT Hackathon 2025 và hoạt động FDS tại triển lãm 80 năm Quốc khánh.',
    detail: 'Anh nghiên cứu Data Mining tại Hiroshima University, đạt danh hiệu Kaggle Expert và giải Ấn tượng NRC×FPT Healthcare Hackathon 2025.',
    source: fdsSources.lam,
  },
  {
    id: 'duong-van-hiep', name: 'Dương Văn Hiệp', role: 'Trưởng ban Truyền thông – Đối ngoại · Gen 6',
    date: '15.07.2026', photo: 'duong-van-hiep',
    title: 'Giải Nhất Huawei ICT Competition.',
    story: 'Anh Hiệp cùng đội VN.FPTIT giành giải Nhất Computing Track tại chung kết toàn cầu Huawei ICT Competition 2025–2026 ở Thâm Quyến, Trung Quốc.',
    detail: 'Anh từng phụ trách ban Truyền thông – Đối ngoại Gen 6 của FDS.',
    source: fdsSources.hiep,
  },
] as const;
