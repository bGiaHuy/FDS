"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function AnimatedDetails({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  const details = useRef<HTMLDetailsElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const destination = useRef(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function settle() {
      if (!preference.matches || !animation.current) return;
      animation.current.cancel();
      animation.current = null;
      if (details.current) details.current.open = destination.current;
    }
    preference.addEventListener("change", settle);
    return () => {
      animation.current?.cancel();
      preference.removeEventListener("change", settle);
    };
  }, []);

  return <details ref={details} className={`ed-animated-details ${className}`}>
    <summary onClick={event => {
      const panel = details.current;
      const body = content.current;
      if (!panel || !body || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      event.preventDefault();
      const next = animation.current ? !destination.current : !panel.open;
      const from = panel.open ? body.getBoundingClientRect().height : 0;
      animation.current?.cancel();
      panel.open = true;
      destination.current = next;
      const transition = body.animate([
        { height: `${from}px`, opacity: from ? 1 : 0 },
        { height: `${next ? body.scrollHeight : 0}px`, opacity: next ? 1 : 0 },
      ], { duration: 260, easing: "cubic-bezier(.22,1,.36,1)" });
      animation.current = transition;
      transition.onfinish = () => {
        panel.open = next;
        animation.current = null;
      };
    }}><span>{title}</span><span className="ed-join-icon" aria-hidden="true">+</span></summary>
    <div ref={content} className="ed-details-body">{children}</div>
  </details>;
}
