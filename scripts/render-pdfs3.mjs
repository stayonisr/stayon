import { createCanvas } from 'canvas';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import sharp from 'sharp';

// Use the legacy build of pdfjs which supports custom canvas factories
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

const OUT = 'C:/Users/ACER/Desktop/stayon/public/mockups';
mkdirSync(OUT, { recursive: true });

// Custom canvas factory for node-canvas
class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    return { canvas, context };
  }
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
  }
}

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
    src: "C:/Users/ACER/Desktop/stayon ישן/מוצרים רשמיים/אחרי הדמיה אמיתית/‪‪polybag - ela peng.pdf",
    name: 'mockup-polybag',
  },
];

for (const f of files) {
  try {
    const data = new Uint8Array(readFileSync(f.src));
    const loadingTask = pdfjsLib.getDocument({
      data,
      useSystemFonts: true,
      verbosity: 0,
    });
    const pdf = await loadingTask.promise;
    console.log(`${f.name}: ${pdf.numPages} page(s)`);

    const page = await pdf.getPage(1);
    const scale = 3.0;
    const viewport = page.getViewport({ scale });

    const canvasFactory = new NodeCanvasFactory();
    const canvasAndContext = canvasFactory.create(
      Math.ceil(viewport.width),
      Math.ceil(viewport.height)
    );

    await page.render({
      canvasContext: canvasAndContext.context,
      viewport,
      canvasFactory,
    }).promise;

    const pngBuf = canvasAndContext.canvas.toBuffer('image/png');
    const outPath = `${OUT}/${f.name}.jpg`;

    await sharp(pngBuf)
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 96, mozjpeg: true })
      .toFile(outPath);

    console.log(`  ✓ ${f.name}.jpg (${Math.ceil(viewport.width)}x${Math.ceil(viewport.height)})`);
  } catch (e) {
    console.error(`  ✗ ${f.name}:`, e.message);
  }
}

console.log('\n✅ Done');
