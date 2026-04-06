/**
 * Gera .webp a partir de cada .png em src/assets/modules/ (mantém os PNG).
 * Uso: npm install && npm run generate:webp
 */
import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "src/assets/modules");
const files = await readdir(dir);

for (const f of files) {
  if (!f.endsWith(".png") || f.startsWith("_")) continue;
  const input = path.join(dir, f);
  const output = input.replace(/\.png$/i, ".webp");
  await sharp(input).webp({ quality: 83 }).toFile(output);
  console.log("OK", path.relative(root, output));
}
