import sharp from "sharp";

const SRC = "public/photos/chargers-duo.png";
const OUT = "public/photos/chargers-duo-stacked.png";
const WHITE = { r: 255, g: 255, b: 255 };

const { data: base, info } = await sharp(SRC)
  .rotate()
  .png()
  .toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;
const half = Math.floor(W / 2);
console.log(`src ${W}x${H} half=${half}`);

// Each step in its own pipeline (extract -> buffer -> trim -> buffer).
const leftRaw = await sharp(base)
  .extract({ left: 0, top: 0, width: half, height: H })
  .toBuffer();
const rightRaw = await sharp(base)
  .extract({ left: half, top: 0, width: W - half, height: H })
  .toBuffer();
console.log("extracted halves");

const left = await sharp(leftRaw)
  .trim({ background: WHITE, threshold: 14 })
  .toBuffer();
const right = await sharp(rightRaw)
  .trim({ background: WHITE, threshold: 14 })
  .toBuffer();

const lm = await sharp(left).metadata();
const rm = await sharp(right).metadata();
console.log(`left ${lm.width}x${lm.height}  right ${rm.width}x${rm.height}`);

const targetW = Math.max(lm.width, rm.width);
const l = await sharp(left).resize({ width: targetW }).toBuffer();
const r = await sharp(right).resize({ width: targetW }).toBuffer();
const lh = (await sharp(l).metadata()).height;
const rh = (await sharp(r).metadata()).height;

const gap = Math.round(targetW * 0.1);
const pad = Math.round(targetW * 0.08);
const canvasW = targetW + pad * 2;
const canvasH = lh + rh + gap + pad * 2;

await sharp({
  create: { width: canvasW, height: canvasH, channels: 4, background: WHITE },
})
  .composite([
    { input: l, top: pad, left: pad },
    { input: r, top: pad + lh + gap, left: pad },
  ])
  .png()
  .toFile(OUT);

console.log(`OK ${OUT} ${canvasW}x${canvasH}`);
