"use client";

import { useEffect } from "react";

// Content stays visible without JavaScript, and each entrance runs once.
export default function LandingMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const seen = new WeakSet<Element>();

    function play(element: HTMLElement, frames: Keyframe[], delay = 0) {
      const animation = element.animate(frames, {
        duration: 500, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards",
      });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    }

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
          if (seen.has(entry.target)) return;
          seen.add(entry.target);
          if (["ambition", "together", "half-story"].includes(entry.target.id)) {
            entry.target.querySelectorAll<HTMLElement>(".ed-photo img").forEach(image => {
              play(image, [{ transform: "scale(1.025)" }, { transform: "scale(1)" }]);
            });
          } else if (entry.target.classList.contains("ed-initiatives")) {
            entry.target.querySelectorAll<HTMLElement>(":scope > article").forEach((card, index) => {
              play(card, [{ opacity: 0, translate: "0 16px" }, { opacity: 1, translate: "0 0" }], index * 80);
            });
          } else {
            play(entry.target as HTMLElement, [{ opacity: 0, translate: "0 12px" }, { opacity: 1, translate: "0 0" }]);
          }
        });
      }, { threshold: 0.2 });
      document.querySelectorAll("#ambition, #together, #half-story, #about > div:first-child, .ed-initiatives, #activities > .ed-heading, #partners").forEach(section => observer?.observe(section));
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
