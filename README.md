# Website CV & Portfolio Cá Nhân - Phùng Trung Nguyên

Website giới thiệu hồ sơ năng lực cá nhân, CV và dự án dành cho **Phùng Trung Nguyên - Kỹ sư Công nghệ Kỹ thuật Ô tô (Đại học Lạc Hồng)**.

---

## 🌟 Điểm nổi bật của Website

1. **Thiết kế Đẳng Cấp & Hiện Đại**:
   - Giao diện lấy cảm hứng từ công nghệ kỹ thuật ô tô hiện đại, kết hợp hài hòa giữa màu sắc thể thao (Electric Blue, Amber, Cyan) và phong cách tối giản cao cấp.
   - Hỗ trợ chuyển đổi mượt mà giữa **Chế độ Tối (Dark Mode)** và **Chế độ Sáng (Light Mode)** (lưu trạng thái theo trình duyệt).
   - Responsive 100% trên điện thoại di động, máy tính bảng và màn hình máy tính để bàn.

2. **Đầy đủ dữ liệu & hình ảnh từ tài liệu gốc**:
   - **Ảnh đại diện & thông tin cá nhân**: Họ tên, ngày sinh, quê quán Phú Yên, SĐT `0373166715`, email `nam46591@gmail.com`.
   - **Học vấn & Bằng cấp**: Sinh viên năm 4 ngành Công nghệ Kỹ thuật Ô tô - Đại học Lạc Hồng (LHU).
   - **Chứng chỉ Quốc tế**: Dassault Systèmes CATIA V5 - Part Design (Associate Level) với mã xác thực `C-JGKSDPV8BC`, có thể phóng to chứng chỉ và bản vẽ 3D Trục Bánh Răng.
   - **Kinh nghiệm thực tập xưởng**: Thực tập sinh tại xưởng dịch vụ ủy quyền Hyundai Ngọc Phát Biên Hòa (quy trình bảo dưỡng định kỳ, hệ thống phanh, cầu nâng, PPE an toàn, 5S).
   - **Thành tích Robocon**: Lọt vào Vòng Chung Kết Cuộc thi Sáng tạo Robot Việt Nam (Robocon 2024), kinh nghiệm thiết kế cơ khí, đấu nối mạch điện, lập trình điều khiển và xử lý sự cố áp lực cao.
   - **Hội thi tay nghề LHU 2026**: Đảm nhiệm vai trò Trưởng nhóm (Team Leader), đạt **TOP 1 Lý thuyết** và **Giải Khuyến khích Thực hành**.
   - **Kỹ năng chuyên môn & xưởng**: Đầy đủ thanh đo kỹ năng CAD/CAM, dịch vụ xưởng và 3 thẻ phân tích chuyên sâu kèm hình ảnh minh họa (Kỹ năng 3S - 5S, Tư duy Khởi nghiệp trạm dịch vụ, An toàn lao động PPE).
   - **Bộ sưu tập hình ảnh tương tác (Interactive Gallery)**: Phân loại theo danh mục (Robocon, Hội thi tay nghề, CATIA & CAD 3D, Xưởng dịch vụ) với tính năng Lightbox phóng to sắc nét, hỗ trợ phím mũi tên và ESC.
   - **Bản CV gốc & In ấn**: Tích hợp trình xem phóng to bản CV thiết kế gốc, nút tải ảnh CV và nút **In CV (Print to PDF)** tối ưu riêng theo khổ giấy A4.

---

## 📂 Cấu trúc thư mục

```text
cv-phung-trung-nguyen/
├── index.html                   # Trang web chính (HTML5 ngữ nghĩa)
├── README.md                    # Hướng dẫn chi tiết
└── assets/
    ├── css/
    │   └── style.css            # Toàn bộ CSS giao diện, Dark/Light mode, hiệu ứng, @media print
    ├── js/
    │   └── main.js              # Script xử lý tương tác, filter, lightbox, copy clipboard, typewriter
    └── images/
        ├── avatar.png           # Ảnh chân dung đại diện (được trích xuất từ hồ sơ)
        ├── robocon-team.png     # Đội tuyển Robocon trên sân khấu chung kết
        ├── robocon-arena.png    # Sân tập robot và thiết bị bắn bóng
        ├── catia-gear-shaft.png # Mô hình 3D Trục Bánh Răng trên CATIA V5
        ├── catia-certificate.png# Chứng chỉ quốc tế Dassault Systèmes CATIA V5 Associate
        ├── skill-5s.png         # Minh họa quy trình 3S - 5S
        ├── skill-startup.jpeg   # Minh họa kỹ năng khởi nghiệp trạm dịch vụ ô tô
        ├── skill-safety.jpeg    # Minh họa kỹ năng an toàn lao động
        ├── skill-competition-2026.png # Ảnh kỷ niệm Hội thi tay nghề ô tô LHU 2026
        └── cv-original.png      # Bản CV gốc hoàn chỉnh dạng ảnh đồ họa
```

---

## 🚀 Cách mở và sử dụng Website

### Cách 1: Mở trực tiếp (Không cần cài đặt thêm phần mềm)
1. Mở thư mục:
   `C:\Users\DMX\.gemini\antigravity\scratch\cv-phung-trung-nguyen`
2. Nhấp đúp chuột vào file **`index.html`** để mở ngay trên trình duyệt Google Chrome, Cốc Cốc, Microsoft Edge hoặc bất kỳ trình duyệt nào.

### Cách 2: Chạy qua Live Server (Nếu muốn deploy hoặc chia sẻ mạng nội bộ)
Chạy lệnh bằng PowerShell hoặc Command Prompt tại thư mục dự án:
```bash
cd "C:\Users\DMX\.gemini\antigravity\scratch\cv-phung-trung-nguyen"
python -m http.server 8080
```
Sau đó truy cập: `http://localhost:8080` trên trình duyệt.

