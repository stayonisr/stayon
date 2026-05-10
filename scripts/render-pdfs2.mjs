import { fromPath } from 'pdf2pic';
import { mkdirSync } from 'fs';

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
];

for (const f of files) {
  try {
    const convert = fromPath(f.src, {
      density: 300,
      saveFilename: f.name,
      savePath: OUT,
      format: 'jpg',
      width: 2400,
      height: 2400,
    });
    const result = await convert(1, { responseType: 'image' });
    console.log('✓', f.name, result);
  } catch (e) {
    console.error('✗', f.name, e.message);
  }
}
