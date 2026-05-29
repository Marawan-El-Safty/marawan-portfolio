import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const URL = "https://saftygroup.com";
const OUT = "/home/safty/saftygroup-website/screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

console.log("Loading", URL, "...");
await page.goto(URL, { waitUntil: "networkidle", timeout: 45000 });
await page.waitForTimeout(2500);

// Hero / top
await page.screenshot({ path: `${OUT}/hero.png` });
console.log("✓ hero.png");

// Full page (long marketing site)
await page.screenshot({ path: `${OUT}/full.png`, fullPage: true });
console.log("✓ full.png");

// A couple of scrolled sections
const h = await page.evaluate(() => document.body.scrollHeight);
for (const [i, frac] of [0.33, 0.6, 0.85].entries()) {
  await page.evaluate((y) => window.scrollTo({ top: y }), Math.round(h * frac));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/section-${i + 1}.png` });
  console.log(`✓ section-${i + 1}.png`);
}

await browser.close();
console.log("Done ->", OUT);
