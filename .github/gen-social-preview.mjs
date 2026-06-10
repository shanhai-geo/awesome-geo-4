// Generates .github/social-preview.svg — a clean macOS browser window with a
// LINE-ONLY web globe and a large "awesome-geo" logo-style wordmark stamped
// across it. Palette: ink + azure (monochrome). Render with rsvg-convert.
import { writeFileSync } from 'node:fs';

const W = 1280, H = 640;

// ---- Layout (tighter margins; the full 1280×640 is shown on GitHub) --------
const WX = 58, WY = 46, WW = 1164, WH = 548, RAD = 18; // browser window
const TBH = 58;                                         // title-bar height
const VPT = WY + TBH;                                    // viewport top
const GX = 640, GY = 312, R = 150;                       // globe centre + radius

const LINE = '#2563eb';

// ---- Line-only web globe (front-on): curved meridians + straight parallels --
const f = (n) => n.toFixed(1);                                 // format at use-site
const MERIDIANS = [0.866, 0.5].map((c) => R * c);              // lon ±30, ±60
const PARALLELS = [30, 60].map((lat) => ({
  dy: R * Math.sin((lat * Math.PI) / 180),
  hw: R * Math.cos((lat * Math.PI) / 180),
}));

const gridEls = [
  // parallels (equator slightly stronger)
  `<line x1="${f(GX - R)}" y1="${GY}" x2="${f(GX + R)}" y2="${GY}" stroke="${LINE}" stroke-width="1.6" stroke-opacity="0.42"/>`,
  ...PARALLELS.flatMap(({ dy, hw }) => [
    `<line x1="${f(GX - hw)}" y1="${f(GY - dy)}" x2="${f(GX + hw)}" y2="${f(GY - dy)}" stroke="${LINE}" stroke-width="1.4" stroke-opacity="0.30"/>`,
    `<line x1="${f(GX - hw)}" y1="${f(GY + dy)}" x2="${f(GX + hw)}" y2="${f(GY + dy)}" stroke="${LINE}" stroke-width="1.4" stroke-opacity="0.30"/>`,
  ]),
  // meridians
  `<line x1="${GX}" y1="${f(GY - R)}" x2="${GX}" y2="${f(GY + R)}" stroke="${LINE}" stroke-width="1.6" stroke-opacity="0.42"/>`,
  ...MERIDIANS.map(
    (rx) =>
      `<ellipse cx="${GX}" cy="${GY}" rx="${f(rx)}" ry="${R}" fill="none" stroke="${LINE}" stroke-width="1.4" stroke-opacity="0.30"/>`,
  ),
].join('\n    ');

// ---- SVG --------------------------------------------------------------------
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2f5fb"/>
      <stop offset="1" stop-color="#e4e9f3"/>
    </linearGradient>
    <radialGradient id="bgGlow" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="winShadow" x="-15%" y="-25%" width="130%" height="160%">
      <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#1e293b" flood-opacity="0.18"/>
    </filter>
    <clipPath id="discClip"><circle cx="${GX}" cy="${GY}" r="${R}"/></clipPath>
  </defs>

  <!-- backdrop -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#bgGlow)"/>

  <!-- macOS browser window -->
  <g filter="url(#winShadow)">
    <rect x="${WX}" y="${WY}" width="${WW}" height="${WH}" rx="${RAD}" fill="#ffffff"/>
  </g>
  <rect x="${WX}" y="${WY}" width="${WW}" height="${WH}" rx="${RAD}" fill="none" stroke="#e6ebf3" stroke-width="1"/>
  <!-- title bar -->
  <path d="M${WX} ${WY + RAD} a${RAD} ${RAD} 0 0 1 ${RAD} -${RAD} h${WW - 2 * RAD} a${RAD} ${RAD} 0 0 1 ${RAD} ${RAD} v${TBH - RAD} h-${WW} z" fill="#f6f8fc"/>
  <line x1="${WX}" y1="${VPT}" x2="${WX + WW}" y2="${VPT}" stroke="#e9edf4" stroke-width="1"/>
  <!-- traffic lights -->
  <circle cx="${WX + 38}" cy="${WY + 29}" r="7.5" fill="#ff5f57"/>
  <circle cx="${WX + 66}" cy="${WY + 29}" r="7.5" fill="#febc2e"/>
  <circle cx="${WX + 94}" cy="${WY + 29}" r="7.5" fill="#28c840"/>
  <!-- address bar -->
  <rect x="${GX - 300}" y="${WY + 12}" width="600" height="34" rx="17" fill="#eef1f7"/>
  <path d="M507 ${WY + 29} v-3 a5 5 0 0 1 10 0 v3 m-12 0 h14 a2 2 0 0 1 2 2 v7 a2 2 0 0 1 -2 2 h-14 a2 2 0 0 1 -2 -2 v-7 a2 2 0 0 1 2 -2 z" fill="none" stroke="#94a3b8" stroke-width="1.6"/>
  <text x="530" y="${WY + 34}" font-family="'SF Mono','Menlo','DejaVu Sans Mono',monospace" font-size="15" fill="#64748b">github.com/aldegad/<tspan fill="#0f172a" font-weight="600">awesome-geo</tspan></text>

  <!-- line globe -->
  <circle cx="${GX}" cy="${GY}" r="${R}" fill="none" stroke="${LINE}" stroke-width="2" stroke-opacity="0.7"/>
  <g clip-path="url(#discClip)">
    ${gridEls}
  </g>

  <!-- big logo wordmark stamped over the globe -->
  <text x="${GX}" y="${GY + 22}" text-anchor="middle" font-family="'Helvetica Neue','Arial',sans-serif" font-weight="800" font-size="68" letter-spacing="-2.5" fill="#0f172a">awesome<tspan fill="${LINE}">-geo</tspan></text>

  <!-- tagline + languages -->
  <text x="${GX}" y="508" text-anchor="middle" font-family="'Helvetica Neue','Arial',sans-serif" font-weight="600" font-size="20" letter-spacing="0.2" fill="#334155">A source-first map of GEO, AEO &amp; AI search</text>
  <text x="${GX}" y="540" text-anchor="middle" font-family="'Helvetica Neue','Arial',sans-serif" font-weight="500" font-size="15" letter-spacing="0.3" fill="#94a3b8">English · 한국어 · 中文 · 日本語 · Español · Français</text>
</svg>`;

writeFileSync(new URL('./social-preview.svg', import.meta.url), svg);
console.log('wrote social-preview.svg', `${svg.length} bytes`);
