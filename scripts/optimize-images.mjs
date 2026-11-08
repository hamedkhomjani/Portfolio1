import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Source screenshots live outside `public/` so the originals are never shipped.
const SOURCE_DIR = path.resolve('design-assets/projects');
const OUTPUT_DIR = path.resolve('public/projects');
const WIDTHS = [640, 800, 1024, 1400];

const formatBytes = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

const run = async () => {
  const files = (await readdir(SOURCE_DIR)).filter((file) => /\.(png|jpe?g)$/i.test(file));

  if (files.length === 0) {
    console.warn(`No source images found in ${SOURCE_DIR}`);
    return;
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  let originalTotal = 0;
  let optimizedTotal = 0;

  for (const file of files) {
    const sourcePath = path.join(SOURCE_DIR, file);
    const slug = path.parse(file).name;
    const sourceInfo = await stat(sourcePath);
    originalTotal += sourceInfo.size;

    const metadata = await sharp(sourcePath).metadata();

    for (const width of WIDTHS) {
      if (metadata.width && width > metadata.width) continue;

      const resized = sharp(sourcePath).resize({ width, withoutEnlargement: true });

      const avifPath = path.join(OUTPUT_DIR, `${slug}-${width}.avif`);
      const webpPath = path.join(OUTPUT_DIR, `${slug}-${width}.webp`);

      await resized.clone().avif({ quality: 65, effort: 5 }).toFile(avifPath);
      await resized.clone().webp({ quality: 82, smartSubsample: true }).toFile(webpPath);

      const [avifInfo, webpInfo] = await Promise.all([stat(avifPath), stat(webpPath)]);
      optimizedTotal += avifInfo.size + webpInfo.size;
    }
  }

  console.log(`Optimized ${files.length} source images to ${OUTPUT_DIR}`);
  console.log(`Sources: ${formatBytes(originalTotal)} total`);
  console.log(`Derivatives (AVIF + WebP, all widths): ${formatBytes(optimizedTotal)} total`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
