# Hero Hand-Network Fix — Change Log / Report (v2: Height-Based)

- **Date:** 2026-09-18
- **Branch:** `landing-page` (working tree, **không commit/push**)
- **Revision:** v2 — chuyển từ width-based (30%) sang **height-based** (phủ gần trọn chiều cao Hero)

---

## 1. Mục tiêu (v2 — đọc lại đúng yêu cầu)

Tiêu chí ưu tiên mới — **không còn lấy tỷ lệ width 30% làm tiêu chí cao nhất**:

1. Quả cầu gần sát divider dưới Navbar.
2. Cổ tay chạm đúng divider dưới cùng của Hero.
3. Minh họa phủ gần trọn chiều cao Hero.
4. Ảnh không méo tỷ lệ.
5. Sau khi đạt chiều cao → kiểm tra lại khoảng cách hex / text.

> Ảnh nguồn `hand-network.png`: canvas 1247×1261; alpha top 39px (3.093%), bottom 35px (2.775%); visible height 1187px (94.13%).

---

## 2. Files đã sửa

| File | Loại thay đổi |
|---|---|
| `frontend/app/page.tsx` | Restructure `hero-visual` (v1) + giảm max-width paragraph |
| `frontend/app/globals.css` | Height-based layout, opacity line, hero-note |
| `frontend/test-hero-hand.js` | NEW — đo visible content (dọc + ngang) + screenshot (3 viewport) |
| `frontend/evidence/hero/*` | NEW — screenshots & measurements.json |

---

## 3. Chi tiết thay đổi

### 3.1 `frontend/app/page.tsx`

**a) Restructure `hero-visual`** (giữ từ v1): bỏ wrapper `hero-hand-wrap` — hand + note là con trực tiếp của `hero-visual`:

```tsx
<div data-hero-visual className="hero-visual">
  <Image data-hero-hand src="/fds/hero/hand-network.png"
         width={1247} height={1261} priority
         className="hero-hand fds-decorative select-none object-contain" />
  <div data-hero-note className="hero-note pointer-events-none" aria-hidden="true">
    <Image src="/fds/lettering/hero-note.svg" width={170} height={80} ... />
  </div>
</div>
```

**b) Paragraph max-width `580px → 500px`** — để tay phóng to không đè đoạn mô tả ở 1440/1536 (theo đúng hướng dẫn: "giảm max-width paragraph nhẹ, không thu nhỏ tay"). Chỉ đụng `.hero-desc`, không đổi title/CTA.

### 3.2 `frontend/app/globals.css` — Desktop `@media (min-width: 1280px)`

**Thay width-based bằng height-based** (bỏ `top:4%` + `width: clamp(500px,33.75vw,680px)`):

```css
.hero-visual {
  position: absolute;
  top: -1.1%;
  right: 14.7%;
  height: 104%;
  width: auto;
  aspect-ratio: 1247 / 1261;
  max-width: none !important;
  z-index: 2;
}

.hero-hand {
  display: block;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}
```

- **Lý do `height: 104%; top: -1.1%`:**
  - Visible top ≈ `-1.1% + 3.093% × 104% ≈ 2.12%` Hero → ~14–18px dưới Navbar divider.
  - Visible bottom ≈ `-1.1% + 104% − 2.775% × 104% ≈ 100.01%` Hero → cổ tay chạm divider dưới.
- Không `transform: scale()`; không đồng thời đặt `bottom` với `top` + `height`.

**Line opacity** (giữ nguyên mức đã tăng):
- `.hero-left-reference-flow` → `opacity: 0.58`
- `.hero-right-reference-route` → `opacity: 0.56`

**Hero-note** (cân lại vì wrapper cao hơn — không chạm divider dưới):

```css
.hero-note {
  position: absolute;
  right: -5%;
  bottom: 7%;
  width: clamp(155px, 10vw, 195px);
  transform: rotate(-6deg);
  z-index: 4;
}
```

**Tablet/Mobile:** `hero-visual` giữ `position: relative` (điều kiện để note neo đúng) — đã set ở v1.

---

## 4. Kết quả đo — Visible Content

### Công thức

```js
// Dọc
const visibleTop    = imageRect.top    + imageRect.height * (39 / 1261);
const visibleBottom = imageRect.bottom - imageRect.height * (35 / 1261);
const topGap        = visibleTop - heroRect.top;
const bottomGap     = heroRect.bottom - visibleBottom;
// Ngang
const visibleLeft   = imageRect.left  + imageRect.width * (76 / 1247);
const visibleRight  = imageRect.right - imageRect.width * (56 / 1247);
const handToHexGap  = hexRect.left - visibleRight;
```

### 1919px

| Metric | Kết quả | Target | ✅ |
|---|---|---|---|
| topGap (đỉnh quả cầu → Navbar divider) | **17px** | 12–24px | ✅ |
| bottomGap (cổ tay → divider dưới Hero) | **1px** | −4…+4px | ✅ |
| DOM width / height | 824 / 833px | — | — |
| Visible left / right | 863 / 1600px | — | — |
| Hex left | 1640px | — | — |
| handToHexGap | **40px** | hợp lý | ✅ |
| Text overlap (title/desc/cta) | none | none | ✅ |
| Horizontal overflow | NO | NO | ✅ |

### 1536px

| Metric | Kết quả | Target | ✅ |
|---|---|---|---|
| topGap | **14px** | 12–24px | ✅ |
| bottomGap | **1px** | −4…+4px | ✅ |
| DOM width / height | 659 / 667px | — | — |
| Visible left / right | 691 / 1281px | — | — |
| Hex left | 1313px | — | — |
| handToHexGap | **32px** | hợp lý | ✅ |
| Text overlap (title/desc/cta) | none | none | ✅ |
| Horizontal overflow | NO | NO | ✅ |

### 1440px

| Metric | Kết quả | Target | ✅ |
|---|---|---|---|
| topGap | **14px** | 12–24px | ✅ |
| bottomGap | **1px** | −4…+4px | ✅ |
| handToHexGap | **32px** | hợp lý | ✅ |
| Text overlap (title/desc/cta) | none | none | ✅ |
| Horizontal overflow | NO | NO | ✅ |

> **Width ratio** (giờ chỉ là kết quả phụ của height-driven sizing): 1919 → 0.384, 1440 → 0.408. Đúng tinh thần yêu cầu mới — không thu nhỏ tay để giữ 30%.

---

## 5. Regression check (chạy `test-collisions.js`)

- `heroNoteImpactCollision.pass` = **true**
- `heroNoteHandSilhouette.pass` = **true**
- `desktopOverflowPass` = **true**
- Mobile 375px scrollWidth = 375 (sạch)

---

## 6. Screenshots (đã lưu)

Thư mục `frontend/evidence/hero/` — 15 file:

| File | Nội dung |
|---|---|
| `1919-full-hero.png` | Full Hero 1919px (đủ 2 divider) |
| `1536-full-hero.png` | Full Hero 1536px |
| `1440-full-hero.png` | Full Hero 1440px |
| `{vp}-hand-to-hex.png` | Crop tay → hex (3 viewport) |
| `{vp}-left-line.png` | Crop line trái (3 viewport) |
| `{vp}-right-hex-route.png` | Crop hex-route phải (3 viewport) |
| `{vp}-orb-navbar.png` | Crop đỉnh quả cầu → Navbar divider (3 viewport) |
| `measurements.json` | Dữ liệu đo raw |

> Ảnh phải thấy rõ: divider dưới Navbar, đỉnh quả cầu, cổ tay, divider giữa Hero và section kế tiếp. **Nghiệm thu mắt thường bắt buộc mở các file này** (AI không xem trực tiếp ảnh).

---

## 7. Acceptance

```
topGap   : 12–24px        → PASS (14–17px cả 3 viewport)
bottomGap: −4…+4px        → PASS (1px cả 3 viewport)
Không horizontal overflow  → PASS
Không đè title/body/CTA    → PASS
Line rõ ở zoom 100%        → opacity 0.58 / 0.56 (giữ)
Screenshot đầy đủ           → 15 file (Section 6)
Chưa commit/push            → Đúng — chưa commit gì
```

**KẾT LUẬN: PASS toàn bộ.**

---

## 8. Ghi chú vận hành

- Dev server đang chạy `http://localhost:3000`, hot-reload đã pick thay đổi.
- Chạy lại phép đo:
  ```bash
  cd frontend && node test-hero-hand.js
  ```
  (cần dev server + Edge tại `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`).
- Nếu cần điều chỉnh thêm (mặc định KHÔNG làm trừ khi sếp yêu cầu):
  - Tay quá sát hex → dịch `hero-visual` sang trái `0.5–1.5%` (không thu nhỏ).
  - Tay đè text → giảm max-width paragraph nhẹ hơn (đã giảm 580→500).
  - Node SVG quá đậm → set `fill-opacity=".78"` trong file SVG, không giảm opacity asset.
- Line nằm DƯỚI bàn tay (z-index 1 < 2) — nếu tay che line đó là layering đúng của demo.