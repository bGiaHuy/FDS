"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { fdsPhotos } from "../../lib/fds-photos";

const photos = [
  { file: "trouvaille-play", caption: "Teambuilding · Trouvaille", alt: "Thành viên cùng tham gia trò chơi tại teambuilding Trouvaille" },
  { file: "club-day-2026-conversation", caption: "Club Day 2026", alt: "Giao lưu tại gian hàng FDS trong Club Day 2026" },
  { file: "talkshow-ai-agent", caption: "AI Agent — The Next Generation", alt: "Thành viên và khách mời tại talkshow AI Agent" },
  { file: "mid-autumn-2026", caption: "Trung thu cùng FDS và F-Logi", alt: "Thành viên FDS và F-Logi cùng đón Trung thu" },
  { file: "club-shirt-slogan", caption: "Áo CLB · Insights in our eyes", alt: "Thành viên mặc áo CLB mang slogan Insights in our eyes" },
] as const;

export default function ActivityGallery() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    if (!track.current) return;
    const destination = Math.max(0, Math.min(photos.length - 1, index));
    track.current.scrollTo({
      left: destination * (track.current.clientWidth + 20),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return <div className="ed-gallery" role="region" aria-roledescription="bộ ảnh" aria-label="Ảnh hoạt động FDS">
    <div className="ed-gallery-track" ref={track} tabIndex={0} aria-label="Ảnh hoạt động; dùng phím mũi tên để chuyển ảnh"
      onScroll={() => {
        if (track.current) setActive(Math.max(0, Math.min(photos.length - 1, Math.round(track.current.scrollLeft / (track.current.clientWidth + 20)))));
      }}
      onKeyDown={event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        goTo(event.key === "Home" ? 0 : event.key === "End" ? photos.length - 1 : active + (event.key === "ArrowRight" ? 1 : -1));
      }}>
      {photos.map((photo, index) => <figure key={photo.file} role="group" aria-roledescription="ảnh" aria-label={`${index + 1} / ${photos.length}`}>
        <div className="ed-photo"><Image src={fdsPhotos[photo.file]} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1400px) 90vw, 1280px" /></div>
        <figcaption>{photo.caption}</figcaption>
      </figure>)}
    </div>
    <div className="ed-gallery-controls">
      <span className="ed-gallery-count" aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
      <div><button type="button" aria-label="Ảnh trước" disabled={active === 0} onClick={() => goTo(active - 1)}>←</button><button type="button" aria-label="Ảnh tiếp theo" disabled={active === photos.length - 1} onClick={() => goTo(active + 1)}>→</button></div>
    </div>
  </div>;
}
