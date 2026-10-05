export const departments = ["Chuyên môn","Truyền thông – Đối ngoại","Văn hoá","Ban Chủ nhiệm"] as const;
export const generations = [{ id: '8', label: 'Gen 8' }, { id: '7', label: 'Gen 7' }, { id: '6', label: 'Gen 6' }, { id: '5', label: 'Gen 5' }, { id: '4', label: 'Gen 4' }, { id: '2021', label: 'Gen 2021' }, { id: '2', label: 'Gen 2' }] as const;
export type FdsMember = { id: string; name: string; generation: string; department: typeof departments[number]; role: string; photo: string | null; sourceFile: string };
export const fdsMembers: FdsMember[] = [
  {
    "id": "gen-2021-vo-doan-thinh",
    "name": "Võ Doãn Thịnh",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/vo-doan-thinh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_5.jpg"
  },
  {
    "id": "gen-2021-dao-duy-hung",
    "name": "Đào Duy Hưng",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/dao-duy-hung.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_6.jpg"
  },
  {
    "id": "gen-2021-tran-ngoc-anh",
    "name": "Trần Ngọc Anh",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/tran-ngoc-anh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_7.jpg"
  },
  {
    "id": "gen-2021-do-quang-manh",
    "name": "Đỗ Quang Mạnh",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/do-quang-manh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_8.jpg"
  },
  {
    "id": "gen-2021-luong-tuan-anh",
    "name": "Lương Tuấn Anh",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/luong-tuan-anh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_9.jpg"
  },
  {
    "id": "gen-2021-mai-dinh-thang",
    "name": "Mai Đình Thắng",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/mai-dinh-thang.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_10.jpg"
  },
  {
    "id": "gen-2021-ngo-anh-kiet",
    "name": "Ngô Anh Kiệt",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/ngo-anh-kiet.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_11.jpg"
  },
  {
    "id": "gen-2021-nguyen-duc-anh",
    "name": "Nguyễn Đức Anh",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-duc-anh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_12.jpg"
  },
  {
    "id": "gen-2021-nguyen-duc-minh",
    "name": "Nguyễn Đức Minh",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-duc-minh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_13.jpg"
  },
  {
    "id": "gen-2021-tran-tien-nam",
    "name": "Trần Tiến Nam",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/tran-tien-nam.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_14.jpg"
  },
  {
    "id": "gen-2021-le-phu-trong",
    "name": "Lê Phú Trọng",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/le-phu-trong.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_15.jpg"
  },
  {
    "id": "gen-2021-nguyen-hoang-giang",
    "name": "Nguyễn Hoàng Giang",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-hoang-giang.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_16.jpg"
  },
  {
    "id": "gen-2021-nguyen-ngo-tung-lam",
    "name": "Nguyễn Ngô Tùng Lâm",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-ngo-tung-lam.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_17.jpg"
  },
  {
    "id": "gen-2021-nguyen-quang-truong",
    "name": "Nguyễn Quang Trường",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-quang-truong.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_18.jpg"
  },
  {
    "id": "gen-2021-nguyen-quy-nam",
    "name": "Nguyễn Quý Nam",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-quy-nam.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_19.jpg"
  },
  {
    "id": "gen-2021-nguyen-tien-sy",
    "name": "Nguyễn Tiến Sỹ",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-tien-sy.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_20.jpg"
  },
  {
    "id": "gen-2021-nguyen-trong-duc",
    "name": "Nguyễn Trọng Đức",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-trong-duc.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_21.jpg"
  },
  {
    "id": "gen-2021-nguyen-van-ha",
    "name": "Nguyễn Văn Hà",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-van-ha.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_22.jpg"
  },
  {
    "id": "gen-2021-tran-thi-thu-hien",
    "name": "Trần Thị Thu Hiền",
    "generation": "2021",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/tran-thi-thu-hien.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_23.jpg"
  },
  {
    "id": "gen-2021-nguyen-minh-hung",
    "name": "Nguyễn Minh Hưng",
    "generation": "2021",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-minh-hung.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_24.jpg"
  },
  {
    "id": "gen-2021-nguyen-duc-dat",
    "name": "Nguyễn Đức Đạt",
    "generation": "2021",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/nguyen-duc-dat.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_25.jpg"
  },
  {
    "id": "gen-2021-luu-minh-huong",
    "name": "Lưu Minh Hương",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/luu-minh-huong.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_26.jpg"
  },
  {
    "id": "gen-2021-pham-hoang-nam",
    "name": "Phạm Hoàng Nam",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/pham-hoang-nam.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_27.jpg"
  },
  {
    "id": "gen-2021-bui-thi-anh",
    "name": "Bùi Thị Ánh",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/bui-thi-anh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_28.jpg"
  },
  {
    "id": "gen-2021-pham-thi-ngoc-mai",
    "name": "Phạm Thị Ngọc Mai",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/pham-thi-ngoc-mai.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_29.jpg"
  },
  {
    "id": "gen-2021-hoang-quoc-anh",
    "name": "Hoàng Quốc Anh",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/hoang-quoc-anh.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_30.jpg"
  },
  {
    "id": "gen-2021-pham-long-vu",
    "name": "Phạm Long Vũ",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-2021/pham-long-vu.webp",
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_31.jpg"
  },
  {
    "id": "gen-4-nguyen-dinh-nghia",
    "name": "Nguyễn Đình Nghĩa",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-dinh-nghia.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_4.jpg"
  },
  {
    "id": "gen-4-trinh-hoang-nam",
    "name": "Trịnh Hoàng Nam",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/trinh-hoang-nam.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_5.jpg"
  },
  {
    "id": "gen-4-le-phuoc-cuong",
    "name": "Lê Phước Cường",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/le-phuoc-cuong.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_6.jpg"
  },
  {
    "id": "gen-4-vu-le-hai-xuan",
    "name": "Vũ Lê Hải Xuân",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/vu-le-hai-xuan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_7.jpg"
  },
  {
    "id": "gen-4-vo-nhat-nam",
    "name": "Võ Nhật Nam",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/vo-nhat-nam.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_8.jpg"
  },
  {
    "id": "gen-4-pham-tuan-viet",
    "name": "Phạm Tuấn Việt",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/pham-tuan-viet.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_9.jpg"
  },
  {
    "id": "gen-4-thach-tuan-anh",
    "name": "Thạch Tuấn Anh",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/thach-tuan-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_10.jpg"
  },
  {
    "id": "gen-4-hoang-do-khai",
    "name": "Hoàng Đỗ Khải",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/hoang-do-khai.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_11.jpg"
  },
  {
    "id": "gen-4-nguyen-hong-son",
    "name": "Nguyễn Hồng Sơn",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-hong-son.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_12.jpg"
  },
  {
    "id": "gen-4-hoang-trung-kien",
    "name": "Hoàng Trung Kiên",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/hoang-trung-kien.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_13.jpg"
  },
  {
    "id": "gen-4-duong-minh-hoang",
    "name": "Dương Minh Hoàng",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/duong-minh-hoang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_14.jpg"
  },
  {
    "id": "gen-4-tran-dang-an",
    "name": "Trần Đăng An",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/tran-dang-an.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_15.jpg"
  },
  {
    "id": "gen-4-nguyen-thi-khanh-huyen",
    "name": "Nguyễn Thị Khánh Huyền",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-thi-khanh-huyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_16.jpg"
  },
  {
    "id": "gen-4-dang-xuan-huy",
    "name": "Đặng Xuân Huy",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/dang-xuan-huy.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_17.jpg"
  },
  {
    "id": "gen-4-pham-hong-minh",
    "name": "Phạm Hồng Minh",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/pham-hong-minh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_18.jpg"
  },
  {
    "id": "gen-4-dao-trung-duc",
    "name": "Đào Trung Đức",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/dao-trung-duc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_20.jpg"
  },
  {
    "id": "gen-4-pham-ngoc-quang",
    "name": "Phạm Ngọc Quang",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/pham-ngoc-quang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_21.jpg"
  },
  {
    "id": "gen-4-trinh-duc-linh",
    "name": "Trịnh Đức Linh",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/trinh-duc-linh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_22.jpg"
  },
  {
    "id": "gen-4-nguyen-thi-ngan",
    "name": "Nguyễn Thị Ngân",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-thi-ngan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_23.jpg"
  },
  {
    "id": "gen-4-trinh-dinh-hoan",
    "name": "Trịnh Đình Hoàn",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/trinh-dinh-hoan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_24.jpg"
  },
  {
    "id": "gen-4-tran-thanh-huyen",
    "name": "Trần Thanh Huyền",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/tran-thanh-huyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_25.jpg"
  },
  {
    "id": "gen-4-nguyen-minh-huyen",
    "name": "Nguyễn Minh Huyền",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-minh-huyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_26.jpg"
  },
  {
    "id": "gen-4-hoang-ngoc-linh",
    "name": "Hoàng Ngọc Linh",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/hoang-ngoc-linh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_27.jpg"
  },
  {
    "id": "gen-4-nguyen-thuy-duong",
    "name": "Nguyễn Thùy Dương",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-thuy-duong.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_28.jpg"
  },
  {
    "id": "gen-4-kieu-to-uyen",
    "name": "Kiều Tố Uyên",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/kieu-to-uyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_29.jpg"
  },
  {
    "id": "gen-4-khong-thi-hong-anh",
    "name": "Khổng Thị Hồng Anh",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/khong-thi-hong-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_31.jpg"
  },
  {
    "id": "gen-4-hoang-minh-quang",
    "name": "Hoàng Minh Quang",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/hoang-minh-quang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_32.jpg"
  },
  {
    "id": "gen-4-nguyen-hoang-duc",
    "name": "Nguyễn Hoàng Đức",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-hoang-duc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_33.jpg"
  },
  {
    "id": "gen-4-bui-viet-hung",
    "name": "Bùi Việt Hùng",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/bui-viet-hung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_34.jpg"
  },
  {
    "id": "gen-4-pham-van-minh",
    "name": "Phạm Văn Minh",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/pham-van-minh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_35.jpg"
  },
  {
    "id": "gen-4-pham-thi-kim-ngan",
    "name": "Phạm Thị Kim Ngân",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-4/pham-thi-kim-ngan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_36.jpg"
  },
  {
    "id": "gen-5-pham-xuan-khang",
    "name": "Phạm Xuân Khang",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/pham-xuan-khang.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_3.jpg"
  },
  {
    "id": "gen-5-nguyen-huu-duy-anh",
    "name": "Nguyễn Hữu Duy Anh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-huu-duy-anh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_4.jpg"
  },
  {
    "id": "gen-5-tran-vu-ngoc-quang",
    "name": "Trần Vũ Ngọc Quang",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/tran-vu-ngoc-quang.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_5.jpg"
  },
  {
    "id": "gen-5-vu-thanh-lam",
    "name": "Vũ Thành Lâm",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/vu-thanh-lam.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_6.jpg"
  },
  {
    "id": "gen-5-nguyen-thi-nhu-quynh",
    "name": "Nguyễn Thị Như Quỳnh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-thi-nhu-quynh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_7.jpg"
  },
  {
    "id": "gen-5-mai-phu-trong",
    "name": "Mai Phú Trọng",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/mai-phu-trong.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_8.jpg"
  },
  {
    "id": "gen-5-tran-anh-cuong",
    "name": "Trần Anh Cường",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/tran-anh-cuong.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_9.jpg"
  },
  {
    "id": "gen-5-nguyen-thi-ha-lan",
    "name": "Nguyễn Thị Hà Lan",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-thi-ha-lan.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_10.jpg"
  },
  {
    "id": "gen-5-nguyen-minh-duc",
    "name": "Nguyễn Minh Đức",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-minh-duc.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_11.jpg"
  },
  {
    "id": "gen-5-nguyen-duc-thinh",
    "name": "Nguyễn Đức Thịnh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-duc-thinh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_12.jpg"
  },
  {
    "id": "gen-5-nguyen-minh-anh",
    "name": "Nguyễn Minh Anh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-minh-anh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_13.jpg"
  },
  {
    "id": "gen-5-nguyen-tram-anh",
    "name": "Nguyễn Trâm Anh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-tram-anh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_14.jpg"
  },
  {
    "id": "gen-5-cao-duc-duy",
    "name": "Cao Đức Duy",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/cao-duc-duy.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_15.jpg"
  },
  {
    "id": "gen-5-dao-xuan-bac",
    "name": "Đào Xuân Bắc",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/dao-xuan-bac.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_16.jpg"
  },
  {
    "id": "gen-5-nguyen-ngo-huy-tung-anh",
    "name": "Nguyễn Ngô Huy Tùng Anh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-ngo-huy-tung-anh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_17.jpg"
  },
  {
    "id": "gen-5-le-thanh-binh",
    "name": "Lê Thanh Bình",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/le-thanh-binh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_18.jpg"
  },
  {
    "id": "gen-5-trinh-dinh-dung",
    "name": "Trịnh Đình Dũng",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/trinh-dinh-dung.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_19.jpg"
  },
  {
    "id": "gen-5-pham-hai-nam",
    "name": "Phạm Hải Nam",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/pham-hai-nam.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_20.jpg"
  },
  {
    "id": "gen-5-nguyen-thi-mung",
    "name": "Nguyễn Thị Mừng",
    "generation": "5",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-thi-mung.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_21.jpg"
  },
  {
    "id": "gen-5-cao-thi-ha-vy",
    "name": "Cao Thị Hà Vy",
    "generation": "5",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/cao-thi-ha-vy.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_22.jpg"
  },
  {
    "id": "gen-5-nguyen-thi-thuy-ngoc",
    "name": "Nguyễn Thị Thùy Ngọc",
    "generation": "5",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-thi-thuy-ngoc.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_23.jpg"
  },
  {
    "id": "gen-5-le-cong-truong-thinh",
    "name": "Lê Công Trường Thịnh",
    "generation": "5",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/le-cong-truong-thinh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_24.jpg"
  },
  {
    "id": "gen-5-ha-viet-hoang",
    "name": "Hà Việt Hoàng",
    "generation": "5",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/ha-viet-hoang.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_25.jpg"
  },
  {
    "id": "gen-5-nghiem-thi-lan",
    "name": "Nghiêm Thị Lan",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nghiem-thi-lan.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_26.jpg"
  },
  {
    "id": "gen-5-nguyen-phu-luong",
    "name": "Nguyễn Phú Lương",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-phu-luong.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_27.jpg"
  },
  {
    "id": "gen-5-nguyen-mau-hieu",
    "name": "Nguyễn Mậu Hiếu",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-mau-hieu.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_28.jpg"
  },
  {
    "id": "gen-5-duong-van-hiep",
    "name": "Dương Văn Hiệp",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/duong-van-hiep.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_29.jpg"
  },
  {
    "id": "gen-5-le-trung-ta",
    "name": "Lê Trung Tá",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/le-trung-ta.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_30.jpg"
  },
  {
    "id": "gen-5-nguyen-tien-duc",
    "name": "Nguyễn Tiến Đức",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-tien-duc.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_31.jpg"
  },
  {
    "id": "gen-5-dang-van-thai-anh",
    "name": "Đặng Văn Thái Anh",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-5/dang-van-thai-anh.webp",
    "sourceFile": "downloaded_albums/FDS_Gen_531_mc/image_32.jpg"
  },
  {
    "id": "gen-6-nguyen-quoc-hung",
    "name": "Nguyễn Quốc Hưng",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-quoc-hung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_3.jpg"
  },
  {
    "id": "gen-6-le-hien-hieu",
    "name": "Lê Hiển Hiếu",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/le-hien-hieu.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_4.jpg"
  },
  {
    "id": "gen-6-tran-tuan-anh",
    "name": "Trần Tuấn Anh",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/tran-tuan-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_5.jpg"
  },
  {
    "id": "gen-6-mai-anh-truong",
    "name": "Mai Anh Trường",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/mai-anh-truong.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_6.jpg"
  },
  {
    "id": "gen-6-vu-quang-minh",
    "name": "Vũ Quang Minh",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/vu-quang-minh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_7.jpg"
  },
  {
    "id": "gen-6-nguyen-phuong-huy",
    "name": "Nguyễn Phương Huy",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-phuong-huy.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_8.jpg"
  },
  {
    "id": "gen-6-do-ngoc-bich",
    "name": "Đỗ Ngọc Bích",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/do-ngoc-bich.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_9.jpg"
  },
  {
    "id": "gen-6-dang-phuong-nam",
    "name": "Đặng Phương Nam",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/dang-phuong-nam.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_10.jpg"
  },
  {
    "id": "gen-6-nguyen-duc-hoang-phuc",
    "name": "Nguyễn Đức Hoàng Phúc",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-duc-hoang-phuc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_11.jpg"
  },
  {
    "id": "gen-6-nguyen-van-son",
    "name": "Nguyễn Văn Sơn",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-van-son.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_12.jpg"
  },
  {
    "id": "gen-6-nguyen-hoang-tung",
    "name": "Nguyễn Hoàng Tùng",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-hoang-tung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_13.jpg"
  },
  {
    "id": "gen-6-hoang-duc-duy",
    "name": "Hoàng Đức Duy",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/hoang-duc-duy.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_14.jpg"
  },
  {
    "id": "gen-6-do-minh-quang",
    "name": "Đỗ Minh Quang",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/do-minh-quang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_15.jpg"
  },
  {
    "id": "gen-6-nguyen-anh-quan",
    "name": "Nguyễn Anh Quân",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-anh-quan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_16.jpg"
  },
  {
    "id": "gen-6-pham-thanh-duy",
    "name": "Phạm Thanh Duy",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/pham-thanh-duy.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_17.jpg"
  },
  {
    "id": "gen-6-nguyen-yen-nhi",
    "name": "Nguyễn Yến Nhi",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-yen-nhi.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_18.jpg"
  },
  {
    "id": "gen-6-vu-ngoc-duong",
    "name": "Vũ Ngọc Dương",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/vu-ngoc-duong.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_19.jpg"
  },
  {
    "id": "gen-6-pham-trung-tung",
    "name": "Phạm Trung Tùng",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/pham-trung-tung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_20.jpg"
  },
  {
    "id": "gen-6-nghiem-thi-hong-ngoc",
    "name": "Nghiêm Thị Hồng Ngọc",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nghiem-thi-hong-ngoc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_21.jpg"
  },
  {
    "id": "gen-6-trinh-hai-dang",
    "name": "Trịnh Hải Đăng",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/trinh-hai-dang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_22.jpg"
  },
  {
    "id": "gen-6-ha-hai-duong",
    "name": "Hà Hải Dương",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/ha-hai-duong.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_23.jpg"
  },
  {
    "id": "gen-6-do-huyen-tran",
    "name": "Đỗ Huyền Trân",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/do-huyen-tran.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_24.jpg"
  },
  {
    "id": "gen-6-phan-huu-thanh-hieu",
    "name": "Phan Hữu Thanh Hiếu",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/phan-huu-thanh-hieu.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_25.jpg"
  },
  {
    "id": "gen-6-nguyen-ngoc-chi",
    "name": "Nguyễn Ngọc Chi",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-ngoc-chi.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_26.jpg"
  },
  {
    "id": "gen-6-pham-quoc-huy",
    "name": "Phạm Quốc Huy",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/pham-quoc-huy.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_27.jpg"
  },
  {
    "id": "gen-6-dao-thi-minh-thu",
    "name": "Đào Thị Minh Thu",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/dao-thi-minh-thu.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_28.jpg"
  },
  {
    "id": "gen-6-ha-doan-tuan-kiet",
    "name": "Hà Đoàn Tuấn Kiệt",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/ha-doan-tuan-kiet.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_29.jpg"
  },
  {
    "id": "gen-6-ho-anh-nguyen",
    "name": "Hồ Anh Nguyên",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/ho-anh-nguyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_30.jpg"
  },
  {
    "id": "gen-6-nguyen-tuan-hung",
    "name": "Nguyễn Tuấn Hùng",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-tuan-hung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_31.jpg"
  },
  {
    "id": "gen-6-duong-the-luc",
    "name": "Dương Thế Lực",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/duong-the-luc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_32.jpg"
  },
  {
    "id": "gen-6-chu-thi-huyen-thao",
    "name": "Chu Thị Huyền Thảo",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/chu-thi-huyen-thao.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_33.jpg"
  },
  {
    "id": "gen-6-pham-ngoc-diep",
    "name": "Phạm Ngọc Diệp",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/pham-ngoc-diep.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_34.jpg"
  },
  {
    "id": "gen-6-nguyen-tuan-anh",
    "name": "Nguyễn Tuấn Anh",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-tuan-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_35.jpg"
  },
  {
    "id": "gen-6-nguyen-sy-quang-anh",
    "name": "Nguyễn Sỹ Quang Anh",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-sy-quang-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_36.jpg"
  },
  {
    "id": "gen-6-nguyen-nhat-linh",
    "name": "Nguyễn Nhật Linh",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-nhat-linh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_37.jpg"
  },
  {
    "id": "gen-6-nguyen-van-khanh",
    "name": "Nguyễn Văn Khánh",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/nguyen-van-khanh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_38.jpg"
  },
  {
    "id": "gen-6-tran-ngoc-thanh-ngan",
    "name": "Trần Ngọc Thanh Ngân",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-6/tran-ngoc-thanh-ngan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_FDS_GEN_6_-_202438_mc/image_39.jpg"
  },
  {
    "id": "gen-7-tran-duc-thinh",
    "name": "Trần Đức Thịnh",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/tran-duc-thinh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_3.jpg"
  },
  {
    "id": "gen-7-nguyen-viet-thanh",
    "name": "Nguyễn Việt Thành",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-viet-thanh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_4.jpg"
  },
  {
    "id": "gen-7-nghiem-thi-thu-huyen",
    "name": "Nghiêm Thị Thu Huyền",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nghiem-thi-thu-huyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_5.jpg"
  },
  {
    "id": "gen-7-bui-minh-tuan-dat",
    "name": "Bùi Minh Tuấn Đạt",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/bui-minh-tuan-dat.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_6.jpg"
  },
  {
    "id": "gen-7-nguyen-manh-hung",
    "name": "Nguyễn Mạnh Hùng",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-manh-hung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_7.jpg"
  },
  {
    "id": "gen-7-nguyen-duc-chung",
    "name": "Nguyễn Đức Chung",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-duc-chung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_8.jpg"
  },
  {
    "id": "gen-7-pham-duc-cong",
    "name": "Phạm Đức Công",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-duc-cong.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_9.jpg"
  },
  {
    "id": "gen-7-nguyen-van-quyen",
    "name": "Nguyễn Văn Quyền",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-van-quyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_10.jpg"
  },
  {
    "id": "gen-7-nguyen-manh-tuan",
    "name": "Nguyễn Mạnh Tuấn",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-manh-tuan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_11.jpg"
  },
  {
    "id": "gen-7-vu-thi-khanh-huyen",
    "name": "Vũ Thị Khánh Huyền",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/vu-thi-khanh-huyen.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_12.jpg"
  },
  {
    "id": "gen-7-dao-quang-minh",
    "name": "Đào Quang Minh",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/dao-quang-minh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_13.jpg"
  },
  {
    "id": "gen-7-pham-nam-khanh",
    "name": "Phạm Nam Khánh",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-nam-khanh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_14.jpg"
  },
  {
    "id": "gen-7-duong-huy-bach",
    "name": "Dương Huy Bách",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/duong-huy-bach.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_15.jpg"
  },
  {
    "id": "gen-7-duong-dinh-hieu",
    "name": "Dương Đình Hiếu",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/duong-dinh-hieu.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_16.jpg"
  },
  {
    "id": "gen-7-pham-thanh-son",
    "name": "Phạm Thanh Sơn",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-thanh-son.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_17.jpg"
  },
  {
    "id": "gen-7-tran-anh-van",
    "name": "Trần Anh Văn",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/tran-anh-van.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_18.jpg"
  },
  {
    "id": "gen-7-tran-ngoc-hung",
    "name": "Trần Ngọc Hưng",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/tran-ngoc-hung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_19.jpg"
  },
  {
    "id": "gen-7-nguyen-thang-long",
    "name": "Nguyễn Thăng Long",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-thang-long.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_20.jpg"
  },
  {
    "id": "gen-7-dao-the-viet",
    "name": "Đào Thế Việt",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/dao-the-viet.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_21.jpg"
  },
  {
    "id": "gen-7-pham-hoang-hai",
    "name": "Phạm Hoàng Hải",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-hoang-hai.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_22.jpg"
  },
  {
    "id": "gen-7-pham-minh-khoi",
    "name": "Phạm Minh Khôi",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-minh-khoi.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_23.jpg"
  },
  {
    "id": "gen-7-pham-hong-ha",
    "name": "Phạm Hồng Hà",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-hong-ha.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_24.jpg"
  },
  {
    "id": "gen-7-pham-manh-giang",
    "name": "Phạm Mạnh Giang",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-manh-giang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_25.jpg"
  },
  {
    "id": "gen-7-pham-hong-quan",
    "name": "Phạm Hồng Quân",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-hong-quan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_26.jpg"
  },
  {
    "id": "gen-7-nguyen-thanh-binh",
    "name": "Nguyễn Thanh Bình",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-thanh-binh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_27.jpg"
  },
  {
    "id": "gen-7-tran-minh-duc",
    "name": "Trần Minh Đức",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/tran-minh-duc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_28.jpg"
  },
  {
    "id": "gen-7-vo-nhat-minh",
    "name": "Võ Nhật Minh",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/vo-nhat-minh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_29.jpg"
  },
  {
    "id": "gen-7-truong-viet-anh",
    "name": "Trương Việt Anh",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/truong-viet-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_30.jpg"
  },
  {
    "id": "gen-7-dao-ngoc-duc",
    "name": "Đào Ngọc Đức",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/dao-ngoc-duc.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_31.jpg"
  },
  {
    "id": "gen-7-tran-hoang-long",
    "name": "Trần Hoàng Long",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/tran-hoang-long.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_32.jpg"
  },
  {
    "id": "gen-7-tran-thi-ngoc-lan",
    "name": "Trần Thị Ngọc Lan",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/tran-thi-ngoc-lan.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_33.jpg"
  },
  {
    "id": "gen-7-le-dinh-dung",
    "name": "Lê Đình Dũng",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/le-dinh-dung.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_34.jpg"
  },
  {
    "id": "gen-7-pham-dinh-minh",
    "name": "Phạm Đình Minh",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/pham-dinh-minh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_35.jpg"
  },
  {
    "id": "gen-7-nguyen-tuan-nam",
    "name": "Nguyễn Tuấn Nam",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-tuan-nam.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_36.jpg"
  },
  {
    "id": "gen-7-nguyen-hai-anh",
    "name": "Nguyễn Hải Anh",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-hai-anh.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_37.jpg"
  },
  {
    "id": "gen-7-nguyen-quang-duy",
    "name": "Nguyễn Quang Duy",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-quang-duy.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_38.jpg"
  },
  {
    "id": "gen-7-nguyen-viet-hoang",
    "name": "Nguyễn Việt Hoàng",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-viet-hoang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_39.jpg"
  },
  {
    "id": "gen-7-ta-trung-hieu",
    "name": "Tạ Trung Hiếu",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/ta-trung-hieu.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_40.jpg"
  },
  {
    "id": "gen-7-hoang-thi-kim-trang",
    "name": "Hoàng Thị Kim Trang",
    "generation": "7",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/hoang-thi-kim-trang.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_41.jpg"
  },
  {
    "id": "gen-7-nguyen-hoang-thao",
    "name": "Nguyễn Hoàng Thảo",
    "generation": "7",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-hoang-thao.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_42.jpg"
  },
  {
    "id": "gen-7-dinh-trung-hieu",
    "name": "Đinh Trung Hiếu",
    "generation": "7",
    "department": "Truyền thông – Đối ngoại",
    "role": "Trưởng ban Truyền thông – Đối ngoại",
    "photo": "/fds/photos/people/generations/gen-7/dinh-trung-hieu-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-eb67c1c2-3eeb-4acb-8907-90b820e99c30.png"
  },
  {
    "id": "gen-7-nguyen-tien-dat",
    "name": "Nguyễn Tiến Đạt",
    "generation": "7",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-tien-dat.webp",
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_7_-_202543_mc/image_44.jpg"
  },
  {
    "id": "gen-8-nguyen-manh-cuong",
    "name": "Nguyễn Mạnh Cường",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-manh-cuong.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_3.jpg"
  },
  {
    "id": "gen-8-vu-gia-tien",
    "name": "Vũ Gia Tiến",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/vu-gia-tien.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_4.jpg"
  },
  {
    "id": "gen-8-pham-huy-vu",
    "name": "Phạm Huy Vũ",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/pham-huy-vu.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_5.jpg"
  },
  {
    "id": "gen-8-bui-gia-huy",
    "name": "Bùi Gia Huy",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/bui-gia-huy.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_6.jpg"
  },
  {
    "id": "gen-8-nguyen-nhat-huy",
    "name": "Nguyễn Nhật Huy",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-nhat-huy.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_7.jpg"
  },
  {
    "id": "gen-8-tran-cong-du",
    "name": "Trần Công Du",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/tran-cong-du.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_8.jpg"
  },
  {
    "id": "gen-8-nguyen-duc-vinh",
    "name": "Nguyễn Đức Vinh",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-duc-vinh.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_9.jpg"
  },
  {
    "id": "gen-8-nguyen-the-anh",
    "name": "Nguyễn Thế Anh",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-the-anh.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_10.jpg"
  },
  {
    "id": "gen-8-nguyen-xuan-hoang",
    "name": "Nguyễn Xuân Hoàng",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-xuan-hoang.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_11.jpg"
  },
  {
    "id": "gen-8-nguyen-dinh-an",
    "name": "Nguyễn Đình An",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-dinh-an.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_12.jpg"
  },
  {
    "id": "gen-8-do-dinh-long",
    "name": "Đỗ Đình Long",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/do-dinh-long.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_13.jpg"
  },
  {
    "id": "gen-8-nguyen-duc-vuong",
    "name": "Nguyễn Đức Vượng",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-duc-vuong.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_14.jpg"
  },
  {
    "id": "gen-8-nguyen-le-ha-chau",
    "name": "Nguyễn Lê Hà Châu",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-le-ha-chau.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_15.jpg"
  },
  {
    "id": "gen-8-vu-minh-khoa",
    "name": "Vũ Minh Khoa",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/vu-minh-khoa.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_16.jpg"
  },
  {
    "id": "gen-8-nguyen-thi-huyen-trang",
    "name": "Nguyễn Thị Huyền Trang",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-thi-huyen-trang.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_17.jpg"
  },
  {
    "id": "gen-8-nguyen-ha-kim-ngan",
    "name": "Nguyễn Hà Kim Ngân",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-ha-kim-ngan.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_18.jpg"
  },
  {
    "id": "gen-8-dao-ngoc-anh",
    "name": "Đào Ngọc Anh",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/dao-ngoc-anh.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_19.jpg"
  },
  {
    "id": "gen-8-cao-thi-hong-anh",
    "name": "Cao Thị Hồng Anh",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/cao-thi-hong-anh.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_20.jpg"
  },
  {
    "id": "gen-8-tran-thi-tra-giang",
    "name": "Trần Thị Trà Giang",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/tran-thi-tra-giang.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_21.jpg"
  },
  {
    "id": "gen-8-dang-phuong-huy",
    "name": "Đặng Phương Huy",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/dang-phuong-huy.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_22.jpg"
  },
  {
    "id": "gen-8-nguyen-thi-kim-anh",
    "name": "Nguyễn Thị Kim Anh",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-thi-kim-anh.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_23.jpg"
  },
  {
    "id": "gen-8-nguyen-tri-phu",
    "name": "Nguyễn Trí Phú",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-tri-phu.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_24.jpg"
  },
  {
    "id": "gen-8-vu-van-loc",
    "name": "Vũ Văn Lộc",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/vu-van-loc.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_25.jpg"
  },
  {
    "id": "gen-8-nguyen-ha-manh-hung",
    "name": "Nguyễn Hà Mạnh Hùng",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-ha-manh-hung.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_26.jpg"
  },
  {
    "id": "gen-8-hoang-van-duc",
    "name": "Hoàng Văn Đức",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/hoang-van-duc.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_27.jpg"
  },
  {
    "id": "gen-8-mai-huyen-trang",
    "name": "Mai Huyền Trang",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Thành viên",
    "photo": "/fds/photos/people/generations/gen-8/mai-huyen-trang.webp",
    "sourceFile": "downloaded_albums/Thnh_vin_Gen_827_mc/image_28.jpg"
  },
  {
    "id": "gen-2-tran-quoc-viet",
    "name": "Trần Quốc Việt",
    "generation": "2",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm · Gen 2 (FIC)",
    "photo": "/fds/photos/people/generations/gen-2/tran-quoc-viet.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_2.jpg"
  },
  {
    "id": "gen-2021-pham-thai-hoang-tung",
    "name": "Phạm Thái Hoàng Tùng",
    "generation": "2021",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm · Gen 3",
    "photo": "/fds/photos/people/generations/gen-2021/pham-thai-hoang-tung.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_3.jpg"
  },
  {
    "id": "gen-2021-tran-duc-tuan",
    "name": "Trần Đức Tuấn",
    "generation": "2021",
    "department": "Ban Chủ nhiệm",
    "role": "Phó Chủ nhiệm · Gen 3",
    "photo": "/fds/photos/people/generations/gen-2021/tran-duc-tuan.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_11.jpg"
  },
  {
    "id": "gen-5-thach-tuan-anh",
    "name": "Thạch Tuấn Anh",
    "generation": "5",
    "department": "Ban Chủ nhiệm",
    "role": "Phó Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-5/thach-tuan-anh.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_13.jpg"
  },
  {
    "id": "gen-5-pham-ngoc-quang",
    "name": "Phạm Ngọc Quang",
    "generation": "5",
    "department": "Văn hoá",
    "role": "Trưởng ban Văn hoá",
    "photo": "/fds/photos/people/generations/gen-5/pham-ngoc-quang.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_14.jpg"
  },
  {
    "id": "gen-5-pham-hong-minh",
    "name": "Phạm Hồng Minh",
    "generation": "5",
    "department": "Chuyên môn",
    "role": "Trưởng ban Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-5/pham-hong-minh.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_16.jpg"
  },
  {
    "id": "gen-5-nguyen-duc-dat",
    "name": "Nguyễn Đức Đạt",
    "generation": "5",
    "department": "Truyền thông – Đối ngoại",
    "role": "Trưởng ban Truyền thông",
    "photo": "/fds/photos/people/generations/gen-5/nguyen-duc-dat.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_17.jpg"
  },
  {
    "id": "gen-5-trinh-dinh-hoan",
    "name": "Trịnh Đình Hoàn",
    "generation": "5",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-5/trinh-dinh-hoan.webp",
    "sourceFile": "downloaded_albums/HUMANS_OF_FDS35_mc/image_18.jpg"
  },
  {
    "id": "gen-6-vu-thanh-lam",
    "name": "Vũ Thành Lâm",
    "generation": "6",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-6/vu-thanh-lam-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-b3da3a61-95e7-4f58-a9d6-1930fdbbeac0.png"
  },
  {
    "id": "gen-6-duong-van-hiep",
    "name": "Dương Văn Hiệp",
    "generation": "6",
    "department": "Truyền thông – Đối ngoại",
    "role": "Trưởng ban Truyền thông – Đối ngoại",
    "photo": "/fds/photos/people/generations/gen-6/duong-van-hiep-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-bbe4da40-834f-40ca-b752-9ea56b6254e3.png"
  },
  {
    "id": "gen-6-cao-thi-ha-vy",
    "name": "Cao Thị Hà Vy",
    "generation": "6",
    "department": "Ban Chủ nhiệm",
    "role": "Phó Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-6/cao-thi-ha-vy-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-8d167c3b-5583-4b9c-9a64-8f299fb9dbc1.png"
  },
  {
    "id": "gen-6-pham-hai-nam",
    "name": "Phạm Hải Nam",
    "generation": "6",
    "department": "Chuyên môn",
    "role": "Trưởng ban Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-6/pham-hai-nam-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-c8d9b10a-7283-4797-8f28-99aaa91d88a2.png"
  },
  {
    "id": "gen-6-le-trung-ta",
    "name": "Lê Trung Tá",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Phó ban Văn hoá",
    "photo": "/fds/photos/people/generations/gen-6/le-trung-ta-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-496e1462-b6fa-407b-b987-5370b2f53f88.png"
  },
  {
    "id": "gen-7-do-minh-quang",
    "name": "Đỗ Minh Quang",
    "generation": "7",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-7/do-minh-quang-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-189eddf6-6832-44ac-94f8-4e0382cb2e6a.png"
  },
  {
    "id": "gen-7-vu-ngoc-duong",
    "name": "Vũ Ngọc Dương",
    "generation": "7",
    "department": "Ban Chủ nhiệm",
    "role": "Phó Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-7/vu-ngoc-duong-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-445a71a6-cc9f-4bee-b9d5-cb8adcd7d6aa.png"
  },
  {
    "id": "gen-8-nguyen-viet-thanh",
    "name": "Nguyễn Việt Thành",
    "generation": "8",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-viet-thanh.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_127.jpg"
  },
  {
    "id": "gen-8-ta-trung-hieu",
    "name": "Tạ Trung Hiếu",
    "generation": "8",
    "department": "Ban Chủ nhiệm",
    "role": "Phó Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-8/ta-trung-hieu.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_128.jpg"
  },
  {
    "id": "gen-8-duong-dinh-hieu",
    "name": "Dương Đình Hiếu",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Cố vấn chuyên môn",
    "photo": "/fds/photos/people/generations/gen-8/duong-dinh-hieu.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_129.jpg"
  },
  {
    "id": "gen-8-tran-duc-thinh",
    "name": "Trần Đức Thịnh",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Trưởng ban Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-8/tran-duc-thinh.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_130.jpg"
  },
  {
    "id": "gen-8-dao-the-viet",
    "name": "Đào Thế Việt",
    "generation": "8",
    "department": "Chuyên môn",
    "role": "Phó ban Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-8/dao-the-viet.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_131.jpg"
  },
  {
    "id": "gen-8-hoang-thi-kim-trang",
    "name": "Hoàng Thị Kim Trang",
    "generation": "8",
    "department": "Truyền thông – Đối ngoại",
    "role": "Trưởng ban Truyền thông – Đối ngoại",
    "photo": "/fds/photos/people/generations/gen-8/hoang-thi-kim-trang.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_132.jpg"
  },
  {
    "id": "gen-8-nguyen-hai-anh",
    "name": "Nguyễn Hải Anh",
    "generation": "8",
    "department": "Văn hoá",
    "role": "Trưởng ban Văn hoá",
    "photo": "/fds/photos/people/generations/gen-8/nguyen-hai-anh.webp",
    "sourceFile": "downloaded_albums/FDS_Prom_2026_PawnRise135_mc/image_133.jpg"
  },
  {
    "id": "gen-2021-duong-thi-phuong-dung",
    "name": "Dương Thị Phương Dung",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_3.jpg"
  },
  {
    "id": "gen-2021-nguyen-ba-chuan",
    "name": "Nguyễn Bá Chuẩn",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_3.jpg"
  },
  {
    "id": "gen-2021-dinh-thanh-ha",
    "name": "Đinh Thanh Hà",
    "generation": "2021",
    "department": "Chuyên môn",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_3.jpg"
  },
  {
    "id": "gen-2021-luu-hoang-hai",
    "name": "Lưu Hoàng Hải",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_4.jpg"
  },
  {
    "id": "gen-2021-ong-hoang-minh",
    "name": "Ong Hoàng Minh",
    "generation": "2021",
    "department": "Văn hoá",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/Danh_sch_thnh_vin_Gen_202130_mc/image_4.jpg"
  },
  {
    "id": "gen-4-nguyen-trong-duy",
    "name": "Nguyễn Trọng Duy",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_3.jpg"
  },
  {
    "id": "gen-4-tran-duc-anh",
    "name": "Trần Đức Anh",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_19.jpg"
  },
  {
    "id": "gen-4-nguyen-duc-trung",
    "name": "Nguyễn Đức Trung",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Có tên trong danh sách của CLB",
    "photo": null,
    "sourceFile": "downloaded_albums/DANH_SCH_THNH_VIN_GEN_4_-_202235_mc/image_30.jpg"
  },
  {
    "id": "gen-7-duong-the-luc",
    "name": "Dương Thế Lực",
    "generation": "7",
    "department": "Văn hoá",
    "role": "Trưởng ban Văn hoá",
    "photo": "/fds/photos/people/generations/gen-7/duong-the-luc-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-6e97b0a4-b587-444b-8556-630640bcb992.png"
  },
  {
    "id": "gen-7-nguyen-anh-quan",
    "name": "Nguyễn Anh Quân",
    "generation": "7",
    "department": "Chuyên môn",
    "role": "Trưởng ban Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-7/nguyen-anh-quan-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-8c43c484-5687-4931-ab43-50c7c7923b48.png"
  },
  {
    "id": "gen-6-nghiem-ha-lan",
    "name": "Nghiêm Hà Lan",
    "generation": "6",
    "department": "Văn hoá",
    "role": "Trưởng ban Văn hoá",
    "photo": "/fds/photos/people/generations/gen-6/nghiem-ha-lan-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-c0586896-5007-4b61-be3b-d26d8ff2b296.png"
  },
  {
    "id": "gen-4-le-phu-trong",
    "name": "Lê Phú Trọng",
    "generation": "4",
    "department": "Ban Chủ nhiệm",
    "role": "Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-4/le-phu-trong-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-e00e311a-4ef5-4649-83a4-b96a955eead6.png"
  },
  {
    "id": "gen-4-nguyen-ba-chuan",
    "name": "Nguyễn Bá Chuẩn",
    "generation": "4",
    "department": "Ban Chủ nhiệm",
    "role": "Phó Chủ nhiệm",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-ba-chuan-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-b37e15bb-e13b-4344-a901-2bb3d03452b2.png"
  },
  {
    "id": "gen-4-do-quang-manh",
    "name": "Đỗ Quang Mạnh",
    "generation": "4",
    "department": "Chuyên môn",
    "role": "Trưởng ban Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-4/do-quang-manh-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-6041d26a-e92e-4193-b6ee-728b6c0f65ec.png"
  },
  {
    "id": "gen-4-nguyen-do-khanh-nam",
    "name": "Nguyễn Đỗ Khánh Nam",
    "generation": "4",
    "department": "Văn hoá",
    "role": "Trưởng ban Văn hoá",
    "photo": "/fds/photos/people/generations/gen-4/nguyen-do-khanh-nam-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-1060b434-b8a1-4d33-b382-349958c5e514.png"
  },
  {
    "id": "gen-4-tran-thu-hien",
    "name": "Trần Thu Hiền",
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "role": "Trưởng ban Truyền thông",
    "photo": "/fds/photos/people/generations/gen-4/tran-thu-hien-leadership.png",
    "sourceFile": "C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-3137118f-0378-4a74-80bb-1a1c84835700.png"
  }
];
export const fdsMemberRosters: {generation: string; department: string | null; photo: string}[] = [
  {
    "generation": "2021",
    "department": "Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-2021/roster-3.webp"
  },
  {
    "generation": "2021",
    "department": null,
    "photo": "/fds/photos/people/generations/gen-2021/roster-4.webp"
  },
  {
    "generation": "4",
    "department": "Chuyên môn",
    "photo": "/fds/photos/people/generations/gen-4/roster-3.webp"
  },
  {
    "generation": "4",
    "department": "Văn hoá",
    "photo": "/fds/photos/people/generations/gen-4/roster-19.webp"
  },
  {
    "generation": "4",
    "department": "Truyền thông – Đối ngoại",
    "photo": "/fds/photos/people/generations/gen-4/roster-30.webp"
  }
];
