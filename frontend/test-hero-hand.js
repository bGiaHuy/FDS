const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:3000';

// hand-network.png: canvas 1247x1261
// Horizontal: visible width 1115, left margin 76, right margin 56
// Vertical: visible height 1187, top margin 39, bottom margin 35 (relative to 1261)
const CFG = {
  canvasW: 1247,
  canvasH: 1261,
  visibleW: 1115,
  leftM: 76,
  rightM: 56,
  visibleH: 1187,
  topM: 39,
  bottomM: 35
};

const viewports = [
  { name: '1919', width: 1919, height: 1080 },
  { name: '1536', width: 1536, height: 864 },
  { name: '1440', width: 1440, height: 900 }
];

async function measure(page, vp) {
  return page.evaluate(() => {
    const hero = document.querySelector('#home');
    const img = document.querySelector('.hero-hand');
    const hex = document.querySelector('.hero-right-reference-route');
    const leftFlow = document.querySelector('.hero-left-reference-flow');
    const note = document.querySelector('.hero-note');
    const copy = document.querySelector('.hero-copy');
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-desc');
    const cta = document.querySelector('.hero-copy .fds-text-link');
    const heroRect = hero.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    function rect(el) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
    }
    return {
      hero: rect(hero),
      hand: rect(img),
      hex: rect(hex),
      leftFlow: rect(leftFlow),
      note: rect(note),
      copy: rect(copy),
      title: rect(title),
      desc: rect(desc),
      cta: rect(cta),
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    };
  }).then(r => {
    const h = CFG;
    const ALPHA_W = h.visibleW / h.canvasW;
    const ALPHA_L = h.leftM / h.canvasW;
    const ALPHA_R = h.rightM / h.canvasW;
    const ALPHA_H = h.visibleH / h.canvasH;
    const ALPHA_T = h.topM / h.canvasH;
    const ALPHA_B = h.bottomM / h.canvasH;

    const visibleWidth = r.hand.width * ALPHA_W;
    const visibleLeft = r.hand.left + r.hand.width * ALPHA_L;
    const visibleRight = r.hand.right - r.hand.width * ALPHA_R;
    const visibleTop = r.hand.top + r.hand.height * ALPHA_T;
    const visibleBottom = r.hand.bottom - r.hand.height * ALPHA_B;

    const handToHexGap = r.hex.left - visibleRight;
    const widthRatio = visibleWidth / r.hero.width;

    const topGap = visibleTop - r.hero.top;
    const bottomGap = r.hero.bottom - visibleBottom;

    // Text overlap: does hand visible box intersect title/desc/cta?
    function intersects(a, b) {
      return a && b && !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
    }
    const handVisibleBox = { left: visibleLeft, right: visibleRight, top: visibleTop, bottom: visibleBottom };
    const textOverlap = {
      title: intersects(handVisibleBox, r.title),
      desc: intersects(handVisibleBox, r.desc),
      cta: intersects(handVisibleBox, r.cta),
      copy: intersects(handVisibleBox, r.copy)
    };

    return {
      viewport: vp.name,
      hero: r.hero,
      hand: r.hand,
      hex: r.hex,
      leftFlow: r.leftFlow,
      note: r.note,
      text: { copy: r.copy, title: r.title, desc: r.desc, cta: r.cta },
      overflow: { scrollWidth: r.scrollWidth, innerWidth: r.innerWidth, hasOverflow: r.scrollWidth > r.innerWidth },
      metrics: {
        imageRectTop: Math.round(r.hand.top),
        imageRectBottom: Math.round(r.hand.bottom),
        domImageWidth: Math.round(r.hand.width),
        domImageHeight: Math.round(r.hand.height),
        visibleWidth: Math.round(visibleWidth),
        visibleLeft: Math.round(visibleLeft),
        visibleRight: Math.round(visibleRight),
        visibleTop: Math.round(visibleTop),
        visibleBottom: Math.round(visibleBottom),
        hexLeft: Math.round(r.hex.left),
        handToHexGap: Math.round(handToHexGap),
        widthRatio: widthRatio.toFixed(3),
        topGap: Math.round(topGap),
        bottomGap: Math.round(bottomGap)
      },
      textOverlap
    };
  });
}

async function clipRegion(page, name, rect, vp) {
  const pad = 30;
  const clip = {
    x: Math.max(0, Math.floor(rect.x - pad)),
    y: Math.max(0, Math.floor(rect.y - pad)),
    width: Math.min(vp.width, Math.floor(rect.width + pad * 2)),
    height: Math.floor(rect.height + pad * 2)
  };
  const file = `${vp.name}-${name}.png`;
  await page.screenshot({ path: path.join('evidence', 'hero', file), clip });
  console.log(`Saved: evidence/hero/${file}`);
}

async function main() {
  fs.mkdirSync(path.join('evidence', 'hero'), { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const results = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 800));

    const m = await measure(page, vp);
    results.push(m);
    console.log(`\n=== VIEWPORT ${vp.name}px ===`);
    console.log(JSON.stringify(m.metrics, null, 2));
    console.log('Text overlap:', JSON.stringify(m.textOverlap));
    console.log('Overflow:', m.overflow.hasOverflow ? `YES (scrollWidth ${m.overflow.scrollWidth})` : 'NO (clean)');

    // Full hero screenshot (with both dividers)
    const heroEl = await page.$('#home');
    await heroEl.screenshot({ path: path.join('evidence', 'hero', `${vp.name}-full-hero.png`) });
    console.log(`Saved: evidence/hero/${vp.name}-full-hero.png`);

    // Crops at deviceScaleFactor 1
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.reload({ waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    const c = await measure(page, vp);

    // Hand -> hex gap crop
    await clipRegion(page, 'hand-to-hex', { x: c.hand.left, y: c.hand.top, width: (c.hex.right - c.hand.left), height: (c.hand.bottom - c.hand.top) }, vp);
    // Left reference line crop
    await clipRegion(page, 'left-line', { x: c.leftFlow.left, y: c.leftFlow.top, width: c.leftFlow.width, height: c.leftFlow.height }, vp);
    // Right hex-route crop
    await clipRegion(page, 'right-hex-route', { x: c.hex.left, y: c.hex.top, width: c.hex.width, height: c.hex.height }, vp);
    // Top (orb -> navbar divider) crop
    await clipRegion(page, 'orb-navbar', { x: c.hand.left, y: Math.max(0, c.hand.top), width: c.hand.width, height: 140 }, vp);
  }

  const pass = results.every(r =>
    r.metrics.topGap >= 12 && r.metrics.topGap <= 24 &&
    r.metrics.bottomGap >= -4 && r.metrics.bottomGap <= 4 &&
    !r.overflow.hasOverflow &&
    !r.textOverlap.title && !r.textOverlap.desc && !r.textOverlap.cta
  );

  console.log('\n================ ACCEPTANCE ================');
  for (const r of results) {
    console.log(
      `${r.viewport}px: topGap=${r.metrics.topGap}px (need 12-24) | bottomGap=${r.metrics.bottomGap}px (need -4..4) | ` +
      `handToHexGap=${r.metrics.handToHexGap}px | widthRatio=${r.metrics.widthRatio} | ` +
      `textOverlap=${JSON.stringify(r.textOverlap)} | overflow=${r.overflow.hasOverflow ? 'FAIL' : 'OK'}`
    );
  }
  console.log('OVERALL:', pass ? 'PASS' : 'FAIL');

  fs.writeFileSync(path.join('evidence', 'hero', 'measurements.json'), JSON.stringify(results, null, 2));
  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});