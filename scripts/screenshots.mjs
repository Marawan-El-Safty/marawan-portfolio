import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3000";
const OUT = "docs";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

// Hero
await page.screenshot({ path: `${OUT}/hero.png` });
console.log("✓ hero.png");

// Work section
await page.locator("#work").scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/work.png` });
console.log("✓ work.png");

// About section
await page.locator("#about").scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/about.png` });
console.log("✓ about.png");

// Contact
await page.locator("#contact").scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/contact.png` });
console.log("✓ contact.png");

// Full page
await page.screenshot({ path: `${OUT}/full.png`, fullPage: true });
console.log("✓ full.png");

await browser.close();
console.log("Done.");
