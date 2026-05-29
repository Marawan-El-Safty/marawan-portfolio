import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3000";
const OUT = "docs";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

async function shoot(theme) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.addInitScript((t) => localStorage.setItem("theme", t), theme);
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/hero-${theme}.png` });
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/work-${theme}.png` });
  await ctx.close();
  console.log(`✓ ${theme}`);
}

await shoot("light");
await shoot("dark");
await browser.close();
console.log("Done.");
