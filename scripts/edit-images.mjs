import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUB = path.join(__dirname, '..', 'public');
const OUT = path.join(PUB, 'edited');

// Ensure output dir exists
import { mkdirSync } from 'fs';
mkdirSync(OUT, { recursive: true });

async function run() {
  console.log('--- StayOn Image Editor ---\n');

  // ─────────────────────────────────────────
  // 1. HERO: photo-hand.jpg
  //    Crop bottom-center to remove keyboard, boost contrast, warm tones
  // ─────────────────────────────────────────
  {
    const meta = await sharp(`${PUB}/photo-hand.jpg`).metadata();
    console.log(`photo-hand: ${meta.width}x${meta.height}`);
    const w = meta.width, h = meta.height;
    // Crop: remove top 5% (keyboard edge), keep bottom 90%, center crop to 9:16
    const cropH = Math.floor(h * 0.92);
    const cropW = Math.floor(cropH * (9/16));
    const left = Math.floor((w - cropW) / 2);
    const top = Math.floor(h * 0.04);

    await sharp(`${PUB}/photo-hand.jpg`)
      .extract({ left: Math.max(0,left), top, width: Math.min(cropW, w), height: cropH })
      .modulate({ brightness: 1.05, saturation: 1.15 })
      .linear(1.12, -8) // contrast boost
      .sharpen({ sigma: 0.8 })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(`${OUT}/hero-hand.jpg`);
    console.log('✓ hero-hand.jpg');
  }

  // ─────────────────────────────────────────
  // 2. CONNECTED: photo-connected.jpg
  //    Crop to center on phone+charger, enhance screen glow
  // ─────────────────────────────────────────
  {
    const meta = await sharp(`${PUB}/photo-connected.jpg`).metadata();
    console.log(`photo-connected: ${meta.width}x${meta.height}`);
    const w = meta.width, h = meta.height;
    // Tight crop: remove top hand area, focus on phone+charger in middle
    const top = Math.floor(h * 0.12);
    const cropH = Math.floor(h * 0.75);
    const cropW = Math.floor(w * 0.82);
    const left = Math.floor((w - cropW) / 2);

    await sharp(`${PUB}/photo-connected.jpg`)
      .extract({ left, top, width: cropW, height: cropH })
      .modulate({ brightness: 1.08, saturation: 1.1 })
      .linear(1.15, -10)
      .sharpen({ sigma: 0.9 })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(`${OUT}/connected.jpg`);
    console.log('✓ connected.jpg');
  }

  // ─────────────────────────────────────────
  // 3. LIFESTYLE: photo-lifestyle.jpg
  //    Crop to remove cluttered edges, boost vibrancy
  // ─────────────────────────────────────────
  {
    const meta = await sharp(`${PUB}/photo-lifestyle.jpg`).metadata();
    console.log(`photo-lifestyle: ${meta.width}x${meta.height}`);
    const w = meta.width, h = meta.height;
    // Crop: center crop removing keyboard on right and edges
    const top = Math.floor(h * 0.06);
    const cropH = Math.floor(h * 0.84);
    const cropW = Math.floor(w * 0.78);
    const left = Math.floor(w * 0.06);

    await sharp(`${PUB}/photo-lifestyle.jpg`)
      .extract({ left, top, width: cropW, height: cropH })
      .modulate({ brightness: 1.06, saturation: 1.25, hue: 2 })
      .linear(1.1, -5)
      .sharpen({ sigma: 0.7 })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(`${OUT}/lifestyle.jpg`);
    console.log('✓ lifestyle.jpg');
  }

  // ─────────────────────────────────────────
  // 4. SUPPLIER: clean product-in-hand shot
  //    Crop out the subtitle text bar at bottom
  // ─────────────────────────────────────────
  {
    const meta = await sharp(`${PUB}/frames/supplier_t1.jpg`).metadata();
    console.log(`supplier_t1: ${meta.width}x${meta.height}`);
    const w = meta.width, h = meta.height;
    // Remove bottom ~12% which has the subtitle overlay
    const cropH = Math.floor(h * 0.82);
    const cropW = Math.floor(w * 0.88);
    const left = Math.floor((w - cropW) / 2);

    await sharp(`${PUB}/frames/supplier_t1.jpg`)
      .extract({ left, top: 0, width: cropW, height: cropH })
      .modulate({ brightness: 1.05, saturation: 1.1 })
      .sharpen({ sigma: 0.6 })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(`${OUT}/product-scale.jpg`);
    console.log('✓ product-scale.jpg');
  }

  // ─────────────────────────────────────────
  // 5. FACTORY: wholesale trust photo
  //    Crop to center on worker + chargers, remove ceiling
  // ─────────────────────────────────────────
  {
    const meta = await sharp(`${PUB}/photo-factory.jpg`).metadata();
    console.log(`photo-factory: ${meta.width}x${meta.height}`);
    const w = meta.width, h = meta.height;
    const top = Math.floor(h * 0.08);
    const cropH = Math.floor(h * 0.82);
    const cropW = Math.floor(w * 0.92);
    const left = Math.floor((w - cropW) / 2);

    await sharp(`${PUB}/photo-factory.jpg`)
      .extract({ left, top, width: cropW, height: cropH })
      .modulate({ brightness: 1.04, saturation: 1.12 })
      .linear(1.08, -5)
      .sharpen({ sigma: 0.7 })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(`${OUT}/factory.jpg`);
    console.log('✓ factory.jpg');
  }

  // ─────────────────────────────────────────
  // 6. PACKAGING: crop to instructions area only
  // ─────────────────────────────────────────
  {
    const meta = await sharp(`${PUB}/photo-packaging.jpg`).metadata();
    console.log(`photo-packaging: ${meta.width}x${meta.height}`);
    const w = meta.width, h = meta.height;
    // Top portion has the instructions — crop to top 55%
    const cropH = Math.floor(h * 0.52);
    const cropW = Math.floor(w * 0.90);
    const left = Math.floor((w - cropW) / 2);

    await sharp(`${PUB}/photo-packaging.jpg`)
      .extract({ left, top: 0, width: cropW, height: cropH })
      .modulate({ brightness: 1.08, saturation: 0.95 })
      .linear(1.15, -8)
      .sharpen({ sigma: 0.8 })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(`${OUT}/packaging-instructions.jpg`);
    console.log('✓ packaging-instructions.jpg');
  }

  // ─────────────────────────────────────────
  // 7. HERO COMPOSITE: charger.png on dark gradient background
  //    Creates a premium dark hero image with gold glow
  // ─────────────────────────────────────────
  {
    const chargerMeta = await sharp(`${PUB}/charger.png`).metadata();
    console.log(`charger.png: ${chargerMeta.width}x${chargerMeta.height}`);

    const W = 1200, H = 900;

    // Scale charger to fit nicely (60% of canvas width)
    const targetW = Math.floor(W * 0.58);
    const scale = targetW / chargerMeta.width;
    const targetH = Math.floor(chargerMeta.height * scale);

    // Resize charger
    const chargerResized = await sharp(`${PUB}/charger.png`)
      .resize(targetW, targetH, { fit: 'fill' })
      .toBuffer();

    // Position charger centered
    const chargerLeft = Math.floor((W - targetW) / 2);
    const chargerTop = Math.floor((H - targetH) / 2) - 20;

    // Create gold glow layer (soft ellipse)
    const glowW = targetW + 120;
    const glowH = targetH + 80;
    const glowLeft = Math.floor((W - glowW) / 2);
    const glowTop = Math.floor((H - glowH) / 2) - 20;

    const glowSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#1a1208"/>
          <stop offset="55%" stop-color="#0d0b06"/>
          <stop offset="100%" stop-color="#080604"/>
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#CA8A04" stop-opacity="0.22"/>
          <stop offset="50%" stop-color="#92650A" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#CA8A04" stop-opacity="0"/>
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="32"/>
        </filter>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bg)"/>
      <ellipse cx="${W/2}" cy="${H/2 - 20}" rx="${glowW/2}" ry="${glowH/2 + 30}" fill="url(#glow)" filter="url(#blur)"/>
    </svg>`;

    await sharp(Buffer.from(glowSvg))
      .composite([{
        input: chargerResized,
        left: chargerLeft,
        top: chargerTop,
      }])
      .jpeg({ quality: 95, mozjpeg: true })
      .toFile(`${OUT}/hero-composite.jpg`);
    console.log('✓ hero-composite.jpg');
  }

  // ─────────────────────────────────────────
  // 8. CHARGER DARK VERSION: charger on near-black bg for dark sections
  // ─────────────────────────────────────────
  {
    const chargerMeta = await sharp(`${PUB}/charger.png`).metadata();
    const W = 800, H = 600;
    const targetW = Math.floor(W * 0.72);
    const scale = targetW / chargerMeta.width;
    const targetH = Math.floor(chargerMeta.height * scale);

    const chargerResized = await sharp(`${PUB}/charger.png`)
      .resize(targetW, targetH)
      .toBuffer();

    const bgSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="#0C0A09"/>
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stop-color="#CA8A04" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#CA8A04" stop-opacity="0"/>
        </radialGradient>
        <filter id="b"><feGaussianBlur stdDeviation="24"/></filter>
      </defs>
      <ellipse cx="${W/2}" cy="${H/2}" rx="${targetW/2 + 60}" ry="${targetH/2 + 40}" fill="url(#g)" filter="url(#b)"/>
    </svg>`;

    await sharp(Buffer.from(bgSvg))
      .composite([{
        input: chargerResized,
        left: Math.floor((W - targetW) / 2),
        top: Math.floor((H - targetH) / 2),
      }])
      .png()
      .toFile(`${OUT}/charger-dark-bg.png`);
    console.log('✓ charger-dark-bg.png');
  }

  console.log('\n✅ All images edited and saved to public/edited/');
}

run().catch(console.error);
