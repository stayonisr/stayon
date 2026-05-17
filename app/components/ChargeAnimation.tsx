"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "motion/react";
import { useEffect } from "react";

const GOLD = "#a09072";
const CYCLE = 5.2; // seconds per loop

export default function ChargeAnimation() {
  const reduce = useReducedMotion();
  // master timeline value 0 -> 1, looping
  const t = useMotionValue(reduce ? 0.7 : 0);

  useEffect(() => {
    if (reduce) return;
    const controls = animate(t, 1, {
      duration: CYCLE,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [reduce, t]);

  // charger slides up into the phone, holds, slides back out
  const chargerY = useTransform(t, [0, 0.16, 0.86, 1], [150, 0, 0, 150]);
  // battery percentage 1 -> 30 -> reset
  const pct = useTransform(t, [0, 0.22, 0.62, 0.86, 1], [1, 1, 30, 30, 1]);
  const pctText = useTransform(pct, (v) => `${Math.round(v)}%`);
  const barWidth = useTransform(pct, (v) => `${v}%`);
  const color = useTransform(pct, [1, 8, 20, 30], ["#dc2626", "#d97706", "#b8923f", GOLD]);
  const boltOpacity = useTransform(t, [0.14, 0.22, 0.86, 0.92], [0, 1, 1, 0]);
  const glow = useTransform(t, [0.1, 0.2, 0.34, 0.86, 0.94], [0, 0.85, 0.45, 0.45, 0]);

  return (
    <div className="relative mx-auto flex items-end justify-center" style={{ width: 300, height: 470 }}>
      {/* ambient halo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "42%", left: "50%", transform: "translate(-50%,-50%)",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(160,144,114,0.20) 0%, transparent 70%)",
          filter: "blur(46px)",
        }}
      />

      {/* Phone */}
      <div
        className="relative z-10"
        style={{
          width: 230, height: 470, borderRadius: 38, background: "#0C0A09",
          padding: 11, boxShadow: "0 28px 60px rgba(12,10,9,0.28), 0 4px 14px rgba(12,10,9,0.2)",
        }}
      >
        {/* Screen */}
        <div
          className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
          style={{ borderRadius: 28, background: "linear-gradient(180deg,#FBFAF7 0%,#F2EEE6 100%)" }}
        >
          {/* notch */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2"
            style={{ width: 70, height: 18, borderRadius: 10, background: "#0C0A09" }}
          />

          {/* charging bolt */}
          <motion.div style={{ opacity: boltOpacity }} className="mb-1">
            <svg width="34" height="34" viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
              <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </motion.div>

          {/* percentage */}
          <motion.div
            style={{ color, fontWeight: 900, fontSize: 56, letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            {pctText}
          </motion.div>

          <motion.p
            style={{ opacity: boltOpacity }}
            className="text-stone-500 text-xs font-black tracking-[0.2em] uppercase mt-2"
          >
            מטעין · StayOn
          </motion.p>

          {/* battery track */}
          <div
            className="mt-7 relative"
            style={{ width: 150, height: 16, borderRadius: 8, background: "rgba(12,10,9,0.08)", border: "1px solid rgba(160,144,114,0.25)" }}
          >
            <motion.div
              style={{ width: barWidth, background: color }}
              className="absolute inset-y-0 start-0 rounded-[7px]"
            />
          </div>
        </div>

        {/* connection glow at the bottom port */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            opacity: glow, bottom: -6, left: "50%", transform: "translateX(-50%)",
            width: 120, height: 60, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(160,144,114,0.85) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* StayOn charger sliding into the phone's bottom port */}
      <motion.div
        className="absolute z-20"
        style={{ y: chargerY, bottom: -28, left: "50%", x: "-50%", width: 168 }}
      >
        <Image
          src="/photos/product-clean.png"
          alt="מטען StayOn"
          width={168}
          height={112}
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 10px 22px rgba(160,144,114,0.4))" }}
        />
      </motion.div>
    </div>
  );
}
