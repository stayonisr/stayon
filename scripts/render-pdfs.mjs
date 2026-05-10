import { createCanvas } from 'canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, mkdirSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const OUT = 'C:/Users/ACER/Desktop/stayon/public/mockups';
mkdirSync(OUT, { recursive: true });

const files = [
  {
    src: 'C:/Users/ACER/Desktop/stayon ישן/מוצרים רשמיים/אחרי הדמיה אמיתית/whitecharger 2325.pdf',
    name: 'mockup-charger',
  },
  {
    src: 'C:/Users/ACER/Desktop/stayon ישן/מוצרים רשמיים/אחרי הדמיה אמיתית/box - ela peng.pdf',
    name: 'mockup-box',
  },
  {
    src: 'C:/Users/ACER/Desktop/stayon ישן/מוצרים רשמיים/אחרי הדמיה אמיתית/‏‏polybag - ela peng.pdf',
    name: 'mockup-polybag',
  },
];

async function renderPdf(srcPath, baseName) {
  const data = new Uint8Array(readFileSync(srcPath));
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  console.log(`${baseName}: ${pdf.numPages} pages`);

  for (let i = 1; i <= Math.min(pdf.numPages, 3); i++) {
    const page = await pdf.getPage(i);
    const scale = 3.0; // high res
    const vp = page.getViewport({ scale });

    const canvas = createCanvas(vp.width, vp.height);
    const ctx = canvas.getContext('2d');

    await page.render({
      canvasContext: ctx,
      viewport: vp,
    }).promise;

    const pngBuf = canvas.toBuffer('image/png');

    // Save as high-quality JPEG
    const outPath = `${OUT}/${baseName}-p${i}.jpg`;
    await sharp(pngBuf)
      .jpeg({ quality: 96, mozjpeg: true })
      .toFile(outPath);

    console.log(`  ✓ ${baseName}-p${i}.jpg (${vp.width.toFixed(0)}x${vp.height.toFixed(0)})`);
  }
}

for (const f of files) {
  try {
    await renderPdf(f.src, f.name);
  } catch (e) {
    console.error(`✗ ${f.name}:`, e.message);
  }
}

console.log('\n✅ Done — saved to public/mockups/');
