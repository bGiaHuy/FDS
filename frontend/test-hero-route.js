const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:3000';

// hand-network.png: canvas 1247x1261
// Horizontal: visible width 1115, left margin 76, right margin 56
// Vertical: visible height 1187, top margin 39, bottom margin 35
const H_CFG = {
  canvasW: 1247,
  canvasH: 1261,
  visibleW: 1115,
  leftM: 76,
  rightM: 56
};

// hero-left-reference-flow.svg: viewBox 280x642, spine at x=116
const LEFT_SPINE_FRAC = 116 / 280;
// hero-right-reference-route.svg: viewBox 223x416, bottom route line y=324, starts x=0
const ROUTE_LINE_Y_FRAC = 324 / 416;

const screens = [
  { name: '1892x886', width: 1892, height: 886, measure: true },
  { name: '1536x960', width: 1536, height: 960, measure: false },
  { name: '1440x900', width: 1440, height: 900, measure: false },
  { name: '768x1024', width: 768, height: 1024, measure: false },
  { name: '375x812', width: 375, height: 812, measure: false }
];

async function measure(page) {
  return page.evaluate(async () => {
    const hero = document.querySelector('#home');
    const img = document.querySelector('.hero-hand');
    const route = document.querySelector('.hero-right-reference-route');
    const leftFlow = document.querySelector('.hero-left-reference-flow');
    const note = document.querySelector('.hero-note');
    const title = document.querySelector('.hero-title');
    const copy = document.querySelector('.hero-copy');
    const rect = el => {
      const r = el.getBoundingClientRect();
      return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
    };
    const noteRect = rect(note);
    const firstNoteChild = note && note.firstElementChild;
    const noteCssWidth = firstNoteChild
      ? parseFloat(getComputedStyle(firstNoteChild).width) || noteRect.width
      : noteRect.width;
    const heroRect = rect(hero);
    const handRect = rect(img);

    // Sample hand alpha at the route line row to find the silhouette right edge.
    const src = new Image();
    src.src = '/fds/hero/hand-network.png';
    await src.decode();
    const cv = document.createElement('canvas');
    cv.width = 1247;
    cv.height = 1261;
    const ctx = cv.getContext('2d');
    ctx.drawImage(src, 0, 0, 1247, 1261);
    const data = ctx.getImageData(0, 0, 1247, 1261).data;

    const routeLineScreenY = rect(route).top + rect(route).height * (324 / 416);
    const sourceRow = ((routeLineScreenY - handRect.top) / handRect.height) * 1261;
    const bandMin = Math.max(0, Math.floor(sourceRow - 15));
    const bandMax = Math.min(1260, Math.ceil(sourceRow + 15));
    let maxX = 0;
    for (let y = bandMin; y <= bandMax; y++) {
      for (let x = 1246; x >= 0; x--) {
        if (data[(y * 1247 + x) * 4 + 3] > 40) {
          if (x > maxX) maxX = x;
          break;
        }
      }
    }
    const handRightAtRow = handRect.left + (maxX / 1247) * handRect.width;

    return {
      hero: rect(hero),
      hand: rect(img),
      route: rect(route),
      leftFlow: rect(leftFlow),
      note: rect(note),
      noteCssWidth,
      noteCssWidth2: noteRect.width,
      title: rect(title),
      copy: rect(copy),
      leftSpineX: rect(leftFlow).left + rect(leftFlow).width * (116 / 280),
      rightRouteStartX: rect(route).left,
      routeLineScreenY,
      handRightAtRow,
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    };
  });
}

function summarize(r) {
  const heroW = r.hero.width;
  const visibleLeft = r.hand.left + r.hand.width * (76 / 1247);
  const visibleRight = r.hand.right - r.hand.width * (56 / 1247);
  const handToHexGap = r.route.left - visibleRight;
  return {
    heroTop: Math.round(r.hero.top),
    heroBottom: Math.round(r.hero.bottom),
    leftSpineX: Math.round(r.leftSpineX),
    rightRouteStartX: Math.round(r.rightRouteStartX),
    routeLineScreenY: Math.round(r.routeLineScreenY),
    handRightXAtRow: Math.round(r.handRightAtRow),
    routeHandGap: Math.round(r.rightRouteStartX - r.handRightAtRow),
    signatureLeft: Math.round(r.note.left),
    signatureWidth: Math.round(r.note.width),
    signatureCssWidth: Math.round(r.noteCssWidth),
    headingRect: {
      left: Math.round(r.title.left),
      top: Math.round(r.title.top),
      right: Math.round(r.title.right),
      bottom: Math.round(r.title.bottom),
      width: Math.round(r.title.width),
      height: Math.round(r.title.height)
    },
    handVisible: { left: Math.round(visibleLeft), right: Math.round(visibleRight) },
    handToHexGap,
    heroTextRight: Math.round(r.copy.right),
    horizontalOverflow: r.scrollWidth - r.innerWidth
  };
}

async function main() {
  fs.mkdirSync(path.join('evidence', 'hero'), { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  let summary = null;

  for (const s of screens) {
    await page.setViewport({ width: s.width, height: s.height, deviceScaleFactor: 2 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 800));

    const heroEl = await page.$('#home');
    const shotPath = path.join('evidence', 'hero', `${s.name}-full-hero.png`);
    await heroEl.screenshot({ path: shotPath });
    console.log(`Saved: ${shotPath}`);

    if (s.measure) {
      const m = await measure(page);
      summary = summarize(m);
      await new Promise(r => setTimeout(r, 200));

      // extra crops at 1892 (deviceScaleFactor 1)
      await page.setViewport({ width: s.width, height: s.height, deviceScaleFactor: 1 });
      await page.reload({ waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 600));

      // left spine crop
      const lf = await page.$('.hero-left-reference-flow');
      await lf.screenshot({ path: path.join('evidence', 'hero', '1892-left-spine.png') });
      console.log('Saved: evidence/hero/1892-left-spine.png');
      // route+hand junction crop
      const routeEl = await page.$('.hero-right-reference-route');
      await routeEl.screenshot({ path: path.join('evidence', 'hero', '1892-right-route.png') });
      console.log('Saved: evidence/hero/1892-right-route.png');
      // signature crop
      const noteEl = await page.$('.hero-note');
      await noteEl.screenshot({ path: path.join('evidence', 'hero', '1892-signature.png') });
      console.log('Saved: evidence/hero/1892-signature.png');
    }
  }

  console.log('\n======== MEASUREMENTS @1892x886 ========');
  console.log(JSON.stringify(summary, null, 2));
  console.log('======== ACCEPTANCE ========');
  const checks = {
    leftSpineX_871_875: summary.leftSpineX >= 871 && summary.leftSpineX <= 875,
    rightRouteStartX_1495_1510: summary.rightRouteStartX >= 1495 && summary.rightRouteStartX <= 1510,
    routeHandGap_minus3_3: summary.routeHandGap >= -3 && summary.routeHandGap <= 3,
    signatureLeft_1500_1520: summary.signatureLeft >= 1500 && summary.signatureLeft <= 1520,
    signatureWidth_250_275: summary.signatureCssWidth >= 250 && summary.signatureCssWidth <= 275,
    horizontalOverflow_0: summary.horizontalOverflow === 0
  };
  for (const [k, v] of Object.entries(checks)) console.log(`${k}: ${JSON.stringify(v)}`);
  console.log('OVERALL:', Object.values(checks).every(Boolean) ? 'PASS' : 'FAIL');

  fs.writeFileSync(path.join('evidence', 'hero', 'route-signature-measurements.json'), JSON.stringify({ summary, checks }, null, 2));
  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});