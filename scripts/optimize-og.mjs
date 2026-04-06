/**
 * Gera public/assets/og-image.jpg (1200×630, &lt; ~200KB) a partir do PNG.
 * Uso: npm run optimize:og
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.join(root, "public/assets/og-image.png");
const output = path.join(root, "public/assets/og-image.jpg");

await sharp(input)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 78, mozjpeg: true, chromaSubsampling: "4:2:0" })
  .toFile(output);

const fs = await import("node:fs");
const kb = (fs.statSync(output).size / 1024).toFixed(1);
console.log("OK", output, `(${kb} KB)`);
