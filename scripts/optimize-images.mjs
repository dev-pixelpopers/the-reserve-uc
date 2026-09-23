import { readdirSync, statSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, parse, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const SOURCE_DIR = join(root, "assets", "originals", "images");
const OUTPUT_DIR = join(root, "public", "images");
const MANIFEST = join(root, "scripts", "image-manifest.json");

const BUCKETS = [
    {
        name: "full-bleed",
        maxWidth: 1600,
        quality: 72,
        variants: [800],
        match: [
            "menu-bg",
            "where-section-bg",
            "customize-experience-right",
            "bg-banner",
            "meet-the-founder-bg",
        ],
    },
    {
        name: "ui",
        maxWidth: 520,
        quality: 85,
        match: [
            "logo-new",
            "Reserve-logo",
            "cross",
            "moh-jaan-signature",
            "farah-jaan-signature",
            "instagram-heading",
        ],
    },
    {
        name: "icon",
        maxWidth: 160,
        quality: 85,
        match: [
            "tiktok-user",
            "tiktok-heart",
            "tiktok-comment",
            "tiktok-share",
            "tiktok-music",
            "tiktok-music-3",
            "instagram-liked",
            "instagram-comment",
            "instagram-share",
            "instagram-save",
        ],
    },
    {
        name: "social",
        maxWidth: 800,
        quality: 75,
        match: ["tiktok-img", "instagram", "insta-sec-1", "insta-sec-2", "insta-sec-3"],
    },
];

const DEFAULT_BUCKET = { name: "content", maxWidth: 1200, quality: 75 };

const RASTER = /\.(png|jpe?g)$/i;

function bucketFor(name) {
    const stem = parse(name).name;
    for (const bucket of BUCKETS) {
        if (bucket.match.includes(stem)) return bucket;
    }
    return DEFAULT_BUCKET;
}

function resolveOutputNames(files) {
    const byStem = new Map();
    for (const file of files) {
        const stem = parse(file).name;
        if (!byStem.has(stem)) byStem.set(stem, []);
        byStem.get(stem).push(file);
    }

    const names = new Map();
    for (const [stem, group] of byStem) {
        if (group.length === 1) {
            names.set(group[0], `${stem}.webp`);
            continue;
        }
        for (const file of group) {
            const ext = parse(file).ext.slice(1).toLowerCase();
            names.set(file, `${stem}-${ext}.webp`);
        }
    }
    return names;
}

function kb(bytes) {
    return `${Math.round(bytes / 1024)} KB`;
}

if (!existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${relative(root, SOURCE_DIR)}`);
    process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(SOURCE_DIR).filter((f) => RASTER.test(f));
const outputNames = resolveOutputNames(files);

const collisions = [...outputNames.entries()].filter(([file]) =>
    parse(outputNames.get(file)).name !== parse(file).name
);
if (collisions.length) {
    console.log("Basename collisions resolved by appending the source extension:");
    for (const [file, out] of collisions) console.log(`  ${file} -> ${out}`);
    console.log("");
}

const manifest = {};
let totalBefore = 0;
let totalAfter = 0;
let converted = 0;
let skipped = 0;

for (const file of files.sort()) {
    const bucket = bucketFor(file);
    const source = join(SOURCE_DIR, file);
    const outName = outputNames.get(file);
    const target = join(OUTPUT_DIR, outName);
    const sourceStat = statSync(source);

    manifest[`/images/${file}`] = `/images/${outName}`;

    const targets = [{ path: target, width: bucket.maxWidth, name: outName }];
    for (const width of bucket.variants ?? []) {
        const variantName = `${parse(outName).name}-${width}.webp`;
        targets.push({ path: join(OUTPUT_DIR, variantName), width, name: variantName });
    }

    let fileAfter = 0;
    let fileSkipped = true;

    for (const t of targets) {
        const fresh =
            existsSync(t.path) && statSync(t.path).mtimeMs >= sourceStat.mtimeMs;
        if (!fresh) {
            await sharp(source)
                .resize({ width: t.width, withoutEnlargement: true })
                .webp({ quality: bucket.quality })
                .toFile(t.path);
            fileSkipped = false;
        }
        fileAfter += statSync(t.path).size;
    }

    totalBefore += sourceStat.size;
    totalAfter += fileAfter;
    if (fileSkipped) {
        skipped += 1;
        continue;
    }
    converted += 1;

    const pct = Math.round((1 - fileAfter / sourceStat.size) * 100);
    console.log(
        `${file.padEnd(36)} ${bucket.name.padEnd(11)} ${kb(sourceStat.size).padStart(9)} -> ${kb(fileAfter).padStart(8)}  ${String(pct).padStart(3)}%`
    );
}

writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);

console.log("");
console.log(`converted ${converted}, skipped ${skipped} (already fresh)`);
console.log(`total ${kb(totalBefore)} -> ${kb(totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`);
console.log(`manifest written to ${relative(root, MANIFEST)}`);
