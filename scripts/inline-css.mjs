import { readFile, writeFile, unlink } from 'node:fs/promises';
import path from 'node:path';

// Vite emits a blocking stylesheet request for a single small CSS file.
// Inlining it removes that round trip and lets the page paint immediately,
// which matters most on slow mobile connections.
const DIST_DIR = path.resolve('dist');
const HTML_PATH = path.join(DIST_DIR, 'index.html');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

const run = async () => {
  let html = await readFile(HTML_PATH, 'utf8');
  const linkPattern = /<link\b[^>]*\brel="stylesheet"[^>]*>/g;
  const links = html.match(linkPattern) ?? [];

  let inlined = 0;
  let inlinedBytes = 0;

  for (const link of links) {
    const href = link.match(/\bhref="([^"]+)"/)?.[1];
    if (!href) continue;

    // Resolve by filename so this works for both `/` and `/Portfolio1/` bases.
    const cssPath = path.join(ASSETS_DIR, path.basename(decodeURIComponent(href)));
    let css;
    try {
      css = await readFile(cssPath, 'utf8');
    } catch {
      console.warn(`Could not inline ${cssPath}; leaving the link in place.`);
      continue;
    }

    if (/<\/style/i.test(css)) {
      console.warn(`Skipping ${cssPath}: it contains a closing style tag.`);
      continue;
    }

    html = html.replace(link, `<style>${css}</style>`);
    inlinedBytes += Buffer.byteLength(css);
    inlined += 1;
    await unlink(cssPath);
  }

  if (inlined === 0) {
    console.log('No stylesheet links found to inline.');
    return;
  }

  await writeFile(HTML_PATH, html);
  console.log(`Inlined ${inlined} stylesheet(s) into index.html (${(inlinedBytes / 1024).toFixed(1)} KB).`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
