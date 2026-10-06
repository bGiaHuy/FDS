"use client";

import { useEffect } from "react";

// Animate only the three photo interludes; content stays visible without JavaScript.
export default function LandingMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    function stop() {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }

    function start() {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          entry.target.querySelectorAll<HTMLElement>(".ed-photo img").forEach(image => {
            const animation = image.animate(
              [{ transform: "scale(1.035)" }, { transform: "scale(1)" }],
              { duration: 1100, easing: "cubic-bezier(.22,1,.36,1)" },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        });
      }, { threshold: 0.2 });
      document.querySelectorAll("#ambition, #together, #half-story").forEach(section => observer?.observe(section));
    }

    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, []);

  return null;
}
