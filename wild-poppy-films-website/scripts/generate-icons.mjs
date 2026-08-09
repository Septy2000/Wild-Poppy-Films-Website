/**
 * Generates the site's favicon, app icons and Open Graph card into public/,
 * from the poppy artwork in src/icons/logo/poppy-logo-sketch.svg.
 *
 *   node scripts/generate-icons.mjs
 *
 * Re-run this if the logo artwork changes. The output is committed, so this is
 * not part of the build.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SOURCE_SVG = path.join(ROOT, "src/icons/logo/poppy-logo-sketch.svg");

const POPPY_RED = "#E8412C"; // theme poppy_red, nudged brighter to hold up on black
const NEUTRAL_1 = "#FDFAF9";
const NEUTRAL_14 = "#010700";

const source = fs.readFileSync(SOURCE_SVG, "utf8");
const allPaths = [...source.matchAll(/d="([^"]+)"/g)].map((match) => match[1]);
// The four long paths are the petal outlines; the short one is fine interior detail
// that turns to mush below ~256px.
const petalPaths = allPaths.filter((d) => d.length > 200);

/**
 * The artwork is line art on a 138x120 viewBox. Strokes have to be thickened as the
 * target size shrinks, otherwise they disappear entirely at favicon sizes.
 */
function poppyMark({ size, strokeWidth, paths, background }) {
    const box = { x: -10, y: -10, w: 158, h: 140 };

    const drawn = paths
        .map(
            (d) =>
                `<path d="${d}" fill="none" stroke="${POPPY_RED}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`
        )
        .join("");

    return Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${box.x} ${box.y} ${box.w} ${box.h}">` +
            `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="${background}"/>` +
            drawn +
            `</svg>`
    );
}

function openGraphCard(width, height) {
    const artHeight = height * 0.52;
    const scale = artHeight / 120;
    const tx = (width - 138 * scale) / 2;
    const ty = height * 0.08;

    const drawn = allPaths
        .map(
            (d) =>
                `<path d="${d}" fill="none" stroke="${POPPY_RED}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
        )
        .join("");

    return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${NEUTRAL_14}"/>
  <g transform="translate(${tx} ${ty}) scale(${scale})">${drawn}</g>
  <text x="${width / 2}" y="${height * 0.82}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${height * 0.095}"
        font-weight="bold" letter-spacing="${height * 0.012}" fill="${NEUTRAL_1}">WILD POPPY FILMS</text>
  <text x="${width / 2}" y="${height * 0.91}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${height * 0.04}"
        letter-spacing="${height * 0.006}" fill="${POPPY_RED}">INDEPENDENT FILM PRODUCTION</text>
</svg>`);
}

const targets = [
    {
        file: "favicon.ico",
        // Browsers accept a PNG payload in a .ico. Only the bold petal outlines
        // survive at this size.
        buffer: () => poppyMark({ size: 32, strokeWidth: 7, paths: petalPaths, background: NEUTRAL_14 }),
    },
    {
        file: "apple-touch-icon.png",
        buffer: () => poppyMark({ size: 180, strokeWidth: 4, paths: petalPaths, background: NEUTRAL_14 }),
    },
    {
        file: "icon.png",
        buffer: () => poppyMark({ size: 512, strokeWidth: 2.4, paths: allPaths, background: NEUTRAL_14 }),
    },
];

fs.mkdirSync(PUBLIC_DIR, { recursive: true });

for (const { file, buffer } of targets) {
    const out = path.join(PUBLIC_DIR, file);
    await sharp(buffer()).png().toFile(out);
    console.log(`  ${file.padEnd(24)} ${(fs.statSync(out).size / 1024).toFixed(1)} KB`);
}

const ogPath = path.join(PUBLIC_DIR, "opengraph-image.jpg");
await sharp(openGraphCard(1200, 630)).jpeg({ quality: 90 }).toFile(ogPath);
console.log(`  opengraph-image.jpg      ${(fs.statSync(ogPath).size / 1024).toFixed(1)} KB`);
