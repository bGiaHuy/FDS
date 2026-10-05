# Hero reference overlay

Hai asset này được dựng trực tiếp theo cấu trúc của Hero demo, không phải pattern trang trí độc lập:

- `hero-left-reference-flow.svg`: rail trái bắt đầu từ divider Navbar, tách nhánh vuông giữa hai dòng title, nhập lại gần club name rồi rẽ phải.
- `hero-right-reference-route.svg`: hex lồng xuyên nhẹ qua mép trên, connector khoảng 35 độ, rail dọc cạnh nhãn PEOPLE/DATA/IDEAS/IMPACT và nhánh chéo định hướng chữ ký.

## Tỷ lệ desktop

Minh họa hand-network cần chiếm khoảng 29–31% chiều rộng Hero:

```css
.hero-visual {
  width: clamp(500px, 30vw, 600px);
}
```

Tại viewport 1901px, mục tiêu là 560–580px. Text vẫn nằm trong container; illustration và overlay có thể thoát khỏi container để giữ tỷ lệ demo.

## Đặt asset

```tsx
<Image
  src="/fds/decorations/hero-left-reference-flow.svg"
  alt=""
  aria-hidden="true"
  draggable={false}
  className="hero-left-reference-flow"
/>

<Image
  src="/fds/decorations/hero-right-reference-route.svg"
  alt=""
  aria-hidden="true"
  draggable={false}
  className="hero-right-reference-route"
/>
```

```css
.hero-left-reference-flow,
.hero-right-reference-route {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  opacity: .36;
}

.hero-left-reference-flow {
  top: 0;
  left: 46.8%;
  width: clamp(190px, 14.5vw, 280px);
  height: 100%;
}

.hero-right-reference-route {
  top: 0;
  right: 0;
  width: clamp(200px, 14.5vw, 280px);
  height: auto;
}
```

Ở demo 1536px, right route rộng xấp xỉ 223px (14.5% viewport) và cao khoảng 416px. Các giá trị phần trăm là điểm khởi đầu; phải tinh chỉnh 1–3% theo bounding box thực tế của title và hand image.

## Quy tắc

- Chỉ dùng hai asset này cho Hero desktop. Không dùng đồng thời `hero-blueprint-grid.svg`, `hero-signal-rail.svg`, `hero-node-orbits.svg`, radar hoặc measurement grid.
- Chỉ giữ hai nhóm label HTML: `FPTU / Data Science / Club` và `PEOPLE / DATA / IDEAS / IMPACT`.
- Không nhúng text, mã HUD, tick đo lường hoặc đường đứt vào SVG.
- Dưới 768px ẩn cả hai overlay; tablet có thể chỉ giữ một phần rail phải nếu không va nội dung.
- Illustration nằm trên overlay; text, CTA và label nằm ở lớp cao nhất.
