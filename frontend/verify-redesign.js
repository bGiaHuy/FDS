const puppeteer = require('puppeteer-core');
const fs = require('node:fs');
const path = require('node:path');
const output = path.resolve(__dirname, '../scratch/redesign');
const baseUrl = process.env.FDS_PREVIEW_URL || 'http://localhost:3100';

async function run() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    const assetFailures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.url().includes('/fds/') && response.status() >= 400) assetFailures.push(response.url());
    });
    const results = [];
    for (const width of [1440, 1024, 768, 375, 360]) {
      await page.setViewport({ width, height: width > 700 ? 900 : 812, deviceScaleFactor: 1 });
      await page.goto(baseUrl, { waitUntil: 'networkidle0' });
      await page.evaluate(async () => {
        for (const image of document.images) { image.loading = 'eager'; }
        await Promise.all(Array.from(document.images, image => image.decode().catch(() => {})));
        await document.fonts.ready;
      });
      const audit = await page.evaluate(() => {
        const width = innerWidth;
        const content = document.querySelector('.ed-home');
        return {
          documentWidth: document.documentElement.scrollWidth,
          overflow: Array.from(content.querySelectorAll('*')).filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && (r.left < -1 || r.right > width + 1);
          }).map(el => ({ tag: el.tagName, class: el.className })).slice(0, 12),
          brokenImages: Array.from(document.images).filter(img => !img.complete || !img.naturalWidth).map(img => img.src),
          brokenAnchors: Array.from(document.querySelectorAll('a[href^="#"]')).filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
          h1: document.querySelectorAll('h1').length,
          restHeights: ['ambition','together'].map(id => Math.round(document.getElementById(id).getBoundingClientRect().height)),
        };
      });
      results.push({ width, ...audit });
      if (width === 1440 || width === 375) await page.screenshot({ path: path.join(output, `full-${width}.png`), fullPage: true });
      if (width === 1440 || width === 375) {
        await page.addStyleTag({ content: 'body.ed-capture header, body.ed-capture .ed-skip, body.ed-capture .fds-review { display: none !important; }' });
        await page.evaluate(() => document.body.classList.add('ed-capture'));
        for (const id of width === 1440 ? ['humans','fields','ambition','projects','activities','about','journey'] : ['humans','ambition','fields']) {
          const section = await page.$(`#${id}`);
          await section.screenshot({ path: path.join(output, `${id}-${width}.png`) });
        }
        await page.evaluate(() => document.body.classList.remove('ed-capture'));
      }
      // Native disclosure must work through the keyboard at every breakpoint.
      await page.$eval('.ed-disciplines summary', el => el.focus());
      await page.keyboard.press('Enter');
      if (!await page.$eval('.ed-disciplines', el => el.open)) throw new Error('Keyboard disclosure failed');
      await page.$eval('.ed-join summary', el => el.focus());
      await page.keyboard.press('Enter');
      if (!await page.$eval('.ed-join details', el => el.open)) throw new Error('Journey disclosure failed');
      if (width < 1024) {
        await page.click('button[aria-controls="mobile-menu"]');
        if (!await page.$eval('#mobile-menu', el => el.getBoundingClientRect().height > 0)) throw new Error(`Menu hidden at ${width}px`);
        await page.click('#mobile-menu a[href="#humans"]');
        if (await page.$('#mobile-menu')) throw new Error('Mobile menu did not close');
      }
      const searchButtons = await page.$$('button[aria-label="Tìm kiếm nội dung"]');
      for (const button of searchButtons) {
        if (await button.isVisible()) { await button.click(); break; }
      }
      await page.type('input[placeholder^="Tìm kiếm thông tin"]', 'Big Data');
      if (!await page.$('[role="dialog"] a[href="#fields"]')) throw new Error('Search lost fields link');
      await page.keyboard.press('Escape');
      if (await page.$('[role="dialog"]')) throw new Error('Search did not close');
    }
    await page.goto(`${baseUrl}/people`, { waitUntil: 'networkidle0' });
    const people = await page.evaluate(() => ({ h1: document.querySelector('h1')?.textContent, backLink: document.querySelector('a[href="/"]') !== null }));
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const reducedMotion = await page.$eval('.ed-photo img', el => getComputedStyle(el).transitionDuration);
    const history = [];
    for (const width of [1440, 768, 375, 360]) {
      await page.setViewport({ width, height: 900 });
      await page.goto(`${baseUrl}/about`, { waitUntil: 'networkidle0' });
      await page.evaluate(async () => { for (const img of document.images) img.loading = 'eager'; await Promise.all(Array.from(document.images, img => img.decode().catch(() => {}))); });
      await page.waitForFunction(() => document.querySelector('progress')?.value === 0);
      const audit = await page.evaluate(() => ({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, brokenImages: Array.from(document.images).filter(img => !img.naturalWidth).length, brokenAnchors: Array.from(document.querySelectorAll('a[href^="#"]')).filter(a => !document.getElementById(a.hash.slice(1))).length }));
      if (audit.documentWidth !== width || audit.brokenImages || audit.brokenAnchors) throw new Error(`History layout failed: ${JSON.stringify(audit)}`);
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForFunction(() => document.querySelector('progress')?.value === 100);
      history.push({ ...audit, progressFrom: 0, progressTo: 100 });
      if (width === 1440 || width === 375) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForFunction(() => document.querySelector('progress')?.value === 0);
        await page.screenshot({ path: path.join(output, `history-${width}.png`), fullPage: true });
      }
    }
    const report = { results, people, reducedMotion, history, errors, assetFailures };
    fs.writeFileSync(path.join(output, 'verification.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
    if (results.some(r => r.overflow.length || r.brokenImages.length || r.brokenAnchors.length || r.h1 !== 1) || errors.length || assetFailures.length) process.exitCode = 1;
  } finally { await browser.close(); }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
