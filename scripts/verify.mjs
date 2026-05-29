import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "docs";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

// Desktop — testimonials
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(BASE, { waitUntil: "networkidle" });
await page.locator("#testimonials").scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/testimonials.png` });
console.log("✓ testimonials.png");

// OG image
const og = await page.goto(`${BASE}/opengraph-image`);
console.log("OG image status:", og.status(), og.headers()["content-type"]);
await page.screenshot({ path: `${OUT}/og-preview.png` });
console.log("✓ og-preview.png");

// Mobile — open menu
const m = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mp = await m.newPage();
await mp.goto(BASE, { waitUntil: "networkidle" });
await mp.waitForTimeout(800);
await mp.getByRole("button", { name: "Open menu" }).click();
await mp.waitForTimeout(900);
await mp.screenshot({ path: `${OUT}/mobile-menu.png` });
console.log("✓ mobile-menu.png");

await browser.close();
console.log("Done.");
