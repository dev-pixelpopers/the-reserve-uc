import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import { compress } from "wawoff2";

const root = fileURLToPath(new URL("..", import.meta.url));
const SOURCE_DIR = join(root, "assets", "originals", "fonts");
const OUTPUT_DIR = join(root, "public", "fonts");

const FONTS = [
    "MidlandluxuryRegular.otf",
    "Gayathri-Regular.ttf",
    "Icon-Script.ttf",
    "seasons-regular.ttf",
];

if (!existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

let before = 0;
let after = 0;

for (const font of FONTS) {
    const source = join(SOURCE_DIR, font);
    if (!existsSync(source)) {
        console.error(`missing source: ${font}`);
        process.exit(1);
    }
    const outName = `${parse(font).name}.woff2`;
    const target = join(OUTPUT_DIR, outName);
    const input = readFileSync(source);
    const output = await compress(input);
    writeFileSync(target, output);

    before += input.length;
    after += output.length;
    const pct = Math.round((1 - output.length / input.length) * 100);
    console.log(
        `${font.padEnd(30)} -> ${outName.padEnd(26)} ${String(Math.round(input.length / 1024)).padStart(4)} KB -> ${String(Math.round(output.length / 1024)).padStart(3)} KB  ${String(pct).padStart(3)}%`
    );
}

console.log("");
console.log(`total ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB (${Math.round((1 - after / before) * 100)}% smaller)`);
