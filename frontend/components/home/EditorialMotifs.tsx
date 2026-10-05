// Inline motifs from the redesign handoff inherit the homepage's CSS tokens.
export function FlowPath() {
  return <svg className="ed-flow" viewBox="0 0 820 180" fill="none" aria-hidden="true">
    <path d="M24 120C110 38 185 42 270 110C355 176 436 160 514 88C600 9 687 24 796 108" stroke="var(--fds-blue)" strokeWidth="2" strokeDasharray="7 9" opacity=".65" />
    {[[24,120],[270,110],[514,88],[796,108]].map(([cx,cy]) => <circle key={cx} cx={cx} cy={cy} r="8" fill="var(--fds-paper)" stroke="var(--fds-blue)" strokeWidth="2" />)}
  </svg>;
}

export function Scribble() {
  return <svg className="ed-scribble" viewBox="0 0 360 46" fill="none" aria-hidden="true">
    <path d="M8 28C58 18 101 33 153 22C202 12 251 34 350 17M22 37C86 26 160 40 235 27C272 21 304 25 337 21" stroke="var(--fds-blue)" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}
