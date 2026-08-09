/**
 * Re-encodes everything under src/images in place: caps the longest edge and
 * re-compresses, stripping camera EXIF.
 *
 *   node scripts/optimize-images.mjs            # report only, writes nothing
 *   node scripts/optimize-images.mjs --write    # actually rewrite the files
 *
 * Why: several source photos are straight off a full-frame camera (6240x4160,
 * 4 MB each). Next.js resizes them for delivery, but the originals still bloat the
 * repo and every build has to decode them. MAX_EDGE is comfortably above anything
 * the site displays, including 2x retina, so this is not visible to visitors.
 *
 * A file is only replaced when the re-encode actually comes out smaller.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = path.join(ROOT, "src/images");

const MAX_EDGE = 2560;
const JPEG_QUALITY = 85;
const PNG_QUALITY = 90;

const write = process.argv.includes("--write");

function walk(dir) {
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .flatMap((entry) =>
            entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]
        );
}

const kb = (bytes) => bytes / 1024;
const fmt = (n) => String(Math.round(n)).padStart(5);

const files = walk(IMAGES_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));

let beforeTotal = 0;
let afterTotal = 0;
let rewritten = 0;

for (const file of files) {
    // Read into a buffer rather than passing the path: sharp keeps a handle open on
    // an input file, and on Windows that blocks writing back to the same path.
    const input = fs.readFileSync(file);
    const before = input.length;
    beforeTotal += before;

    const isPng = /\.png$/i.test(file);
    const pipeline = sharp(input)
        .rotate() // bake in EXIF orientation before the metadata is stripped
        .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true });

    const buffer = await (isPng
        ? pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
        : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    ).toBuffer();

    const shrinks = buffer.length < before;
    const after = shrinks ? buffer.length : before;
    afterTotal += after;

    const rel = path.relative(IMAGES_DIR, file).split(path.sep).join("/");

    if (!shrinks) {
        console.log(`  ${fmt(kb(before))} KB  ->  unchanged (already optimal)   ${rel}`);
        continue;
    }

    const saved = (1 - buffer.length / before) * 100;
    console.log(
        `  ${fmt(kb(before))} KB  ->${fmt(kb(buffer.length))} KB  (-${String(Math.round(saved)).padStart(2)}%)  ${rel}`
    );

    if (write) {
        fs.writeFileSync(file, buffer);
        rewritten++;
    }
}

console.log(
    `\n  ${files.length} files: ${(kb(beforeTotal) / 1024).toFixed(1)} MB -> ${(kb(afterTotal) / 1024).toFixed(1)} MB ` +
        `(-${Math.round((1 - afterTotal / beforeTotal) * 100)}%)`
);
console.log(
    write
        ? `  ${rewritten} files rewritten.`
        : `  Dry run - nothing written. Re-run with --write to apply.`
);
