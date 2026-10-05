"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(distance > 0 ? Math.min(100, Math.max(0, Math.round(window.scrollY / distance * 100))) : 100);
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div className="ed-reading-progress"><div><span>Hành trình FDS</span><span>Đã đọc {progress}%</span></div><progress max={100} value={progress} aria-label="Tiến độ đọc hành trình FDS" /></div>;
}
