"use client";

import { useEffect, useRef, useState } from "react";
import "./review-comments.css";

type Target = { quote: string; section: string; component: string };
type SelectionTarget = Target & { top: number; left: number };
type Outline = { top: number; left: number; width: number; height: number };

function describe(element: Element): Target | null {
  if (element.closest("[data-review-ui]") || !element.closest("main, footer")) return null;
  const component = element.closest("article, .ed-human, figure, section[id], footer") || element;
  const section = component.closest("section[id], footer[id]")?.id || "main-content";
  const title = component.querySelector<HTMLElement>("h1, h2, h3");
  const heading = title?.innerText.replace(/\s+/g, " ").trim() || "";
  const image = element.closest("img") || component.querySelector("img");
  return { section, component: (heading || image?.getAttribute("alt") || section).slice(0, 200), quote: element.closest("img") ? (image?.getAttribute("alt") || "") : (heading || "") };
}

export default function ReviewComments() {
  const [enabled, setEnabled] = useState(false);
  const [selection, setSelection] = useState<SelectionTarget | null>(null);
  const [target, setTarget] = useState<Target | null>(null);
  const [picking, setPicking] = useState(false);
  const [outline, setOutline] = useState<Outline | null>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/review-comments", { cache: "no-store" }).then(response => response.json()).then(data => {
      if (active) setEnabled(data.enabled === true);
    }).catch(() => {});
    return () => { active = false; };
  }, []);

  function startComment(selected: Target | null) {
    setTarget(selected); setSelection(null); setPicking(false); setOutline(null); setError(""); setMessage(""); setOpen(true);
  }

  useEffect(() => {
    if (!enabled) return;
    const readSelection = () => {
      const selected = window.getSelection();
      if (picking || !selected?.rangeCount || selected.isCollapsed) { setSelection(null); return; }
      const range = selected.getRangeAt(0);
      const element = range.commonAncestorContainer instanceof Element ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
      if (!element || element.closest("input, textarea")) return;
      const info = describe(element);
      if (!info) { setSelection(null); return; }
      const quote = selected.toString().trim().slice(0, 2000);
      if (!quote) return;
      const rect = range.getBoundingClientRect();
      setSelection({ ...info, quote, top: Math.min(innerHeight - 64, Math.max(8, rect.bottom + 8)), left: Math.min(innerWidth - 175, Math.max(8, rect.left)) });
    };
    const clear = () => { setSelection(null); setOutline(null); };
    document.addEventListener("selectionchange", readSelection);
    window.addEventListener("scroll", clear, { passive: true });
    window.addEventListener("resize", clear);
    return () => { document.removeEventListener("selectionchange", readSelection); window.removeEventListener("scroll", clear); window.removeEventListener("resize", clear); };
  }, [enabled, picking]);

  useEffect(() => {
    if (!picking) return;
    const hover = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target : null;
      if (!element || !describe(element)) { setOutline(null); return; }
      const component = element.closest("article, .ed-human, figure, section[id], footer") || element;
      const rect = component.getBoundingClientRect();
      setOutline({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    };
    const choose = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target : null;
      const info = element && describe(element);
      if (!info) return;
      event.preventDefault(); event.stopPropagation();
      startComment(info);
    };
    document.addEventListener("mouseover", hover);
    document.addEventListener("click", choose, true);
    return () => { document.removeEventListener("mouseover", hover); document.removeEventListener("click", choose, true); };
  }, [picking]);

  useEffect(() => {
    if (!open && !picking) return;
    if (open) textarea.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); setPicking(false); setOutline(null); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open, picking]);

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true); setError(""); setMessage("");
    try {
      const response = await fetch("/api/review-comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ quote: target?.quote || "", section: target?.section || "", component: target?.component || "", pathname: location.pathname, name, comment }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Không gửi được góp ý.");
      setComment(""); setTarget(null); setMessage("Đã gửi góp ý. Cảm ơn bạn!");
      window.getSelection()?.removeAllRanges();
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Không gửi được góp ý."); }
    finally { setSaving(false); }
  }

  if (!enabled) return null;
  return <div className="fds-review" data-review-ui>
    {outline && <div className="review-outline" style={outline} aria-hidden="true" />}
    {picking && <div className="review-pick-hint" role="status">Chọn ảnh hoặc phần trên trang để góp ý.<button onClick={() => { setPicking(false); setOutline(null); }}>Huỷ</button></div>}
    {selection && <button className="review-selection" style={{ top: selection.top, left: selection.left }} onMouseDown={event => event.preventDefault()} onClick={() => startComment(selection)}>Góp ý đoạn này</button>}
    <button ref={toggle} className="review-toggle" aria-expanded={open} aria-controls="fds-review-panel" onClick={() => { setOpen(!open); setPicking(false); setOutline(null); setSelection(null); }}>Góp ý</button>
    {open && <aside id="fds-review-panel" className="review-panel" aria-label="Gửi góp ý">
      <div className="review-heading"><h2>Gửi góp ý</h2><button aria-label="Đóng bảng góp ý" onClick={() => { setOpen(false); toggle.current?.focus(); }}>×</button></div>
      <p className="review-help">Chọn phần cần góp ý, bôi đen một đoạn chữ hoặc gửi góp ý chung.</p>
      <button className="review-pick" onClick={() => { setOpen(false); setSelection(null); setPicking(true); setMessage(""); }}>Chọn phần trên trang</button>
      <form onSubmit={save}>
        {target && <div className="review-target"><small>Đang góp ý: {target.component || target.section}</small>{target.quote && <blockquote>{target.quote}</blockquote>}<button type="button" onClick={() => setTarget(null)}>Chuyển sang góp ý chung</button></div>}
        <label htmlFor="review-name">Tên bạn (không bắt buộc)</label>
        <input id="review-name" value={name} onChange={event => setName(event.target.value)} maxLength={80} autoComplete="name" />
        <label htmlFor="review-comment">Góp ý của bạn</label>
        <textarea id="review-comment" ref={textarea} value={comment} onChange={event => setComment(event.target.value)} placeholder="Bạn muốn phần này thay đổi như thế nào?" rows={4} maxLength={4000} required />
        <button className="review-save" disabled={saving || !comment.trim()}>{saving ? "Đang gửi…" : "Gửi góp ý"}</button>
        {error && <p className="review-error" role="alert">{error}</p>}
        <p className="review-message" role="status">{message}</p>
      </form>
    </aside>}
  </div>;
}
