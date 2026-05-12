"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

// ─── Update these handles before going live ───────────────────────────────
const WHATSAPP  = "https://wa.me/972506226569?text=היי%20StayOn%2C%20סרקתי%20את%20הQR%20ורוצה%20לדעת%20עוד";
const INSTAGRAM = "https://instagram.com/stayon_il";
const TIKTOK    = "https://tiktok.com/@stayon_il";
const WEBSITE   = "https://stayon.co.il";
const GOLD      = "#a09072";
// ─────────────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.17 8.17 0 004.78 1.52V6.8a4.85 4.85 0 01-1.01-.11z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

const socials = [
  {
    href: INSTAGRAM,
    label: "Instagram",
    sub: "@stayon_il",
    icon: <InstagramIcon />,
    bg: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
    color: "white",
  },
  {
    href: TIKTOK,
    label: "TikTok",
    sub: "@stayon_il",
    icon: <TikTokIcon />,
    bg: "#000000",
    color: "white",
  },
  {
    href: WHATSAPP,
    label: "WhatsApp",
    sub: "דברו איתנו ישירות",
    icon: <WhatsAppIcon />,
    bg: "#25D366",
    color: "white",
  },
  {
    href: WEBSITE,
    label: "האתר שלנו",
    sub: "stayon.co.il",
    icon: <GlobeIcon />,
    bg: "#ffffff",
    color: "#0C0A09",
    border: true,
  },
];

export default function QRPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ background: "#ffffff", fontFamily: "var(--font-heebo), Heebo, Arial, sans-serif" }}
      dir="rtl"
    >
      {/* ── TOP BAR ────────────────────────────────────────────── */}
      <div className="w-full flex justify-center pt-8 pb-2">
        <Link href={WEBSITE}>
          <Image src="/logo.png" alt="StayOn" width={110} height={40} className="h-9 w-auto object-contain" />
        </Link>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="w-full flex flex-col items-center text-center px-6 pt-6 pb-10 relative overflow-hidden">
        {/* subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #a09072 0%, transparent 70%)" }}
        />

        {/* Charger image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 mb-6"
        >
          <Image
            src="/charger.png"
            alt="StayOn מטען USB-C חד-פעמי"
            width={260}
            height={112}
            priority
            className="w-[200px] sm:w-[240px] h-auto animate-float product-shadow"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-black tracking-[0.25em] uppercase rounded-full"
          style={{ background: "rgba(160,144,114,0.1)", border: "1px solid rgba(160,144,114,0.35)", color: GOLD }}
        >
          <span>⬆</span>
          QR המוצר שלך
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#0C0A09] mb-4 leading-[1.05]"
          style={{ fontSize: "clamp(2.4rem, 9vw, 3.8rem)", fontWeight: 900, letterSpacing: "-0.03em" }}
        >
          חיברת.
          <br />
          <span style={{
            background: "linear-gradient(90deg, #6b5f4a, #a09072, #c0b090, #a09072, #6b5f4a)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            תישאר מחובר.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-stone-600 font-bold leading-relaxed max-w-xs mb-2"
          style={{ fontSize: "1.05rem" }}
        >
          מה שנמצא בידיים שלך הציל אותך פעם אחת.
          <br />
          תדאג שזה יקרה שוב.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-stone-400 text-sm font-semibold"
        >
          מטען USB-C חד-פעמי · 1,500 mAh · אחסון 3 שנים
        </motion.p>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────── */}
      <div className="w-full px-6 mb-8">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #a09072, transparent)" }} />
      </div>

      {/* ── SOCIAL LINKS ───────────────────────────────────────── */}
      <section className="w-full max-w-sm px-6 mb-8">
        <p className="text-center text-xs font-black tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>
          עקבו אחרינו
        </p>
        <div className="flex flex-col gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-4 px-5 py-4 transition-all duration-200 active:scale-[0.97] cursor-pointer"
              style={{
                background: s.bg,
                color: s.color,
                border: s.border ? "1.5px solid rgba(160,144,114,0.3)" : "none",
                minHeight: 60,
              }}
            >
              <div className="shrink-0">{s.icon}</div>
              <div className="flex-1 text-right">
                <div className="font-black text-sm leading-tight">{s.label}</div>
                <div className="text-xs opacity-75 font-semibold mt-0.5">{s.sub}</div>
              </div>
              <svg className="w-4 h-4 opacity-50 rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────── */}
      <div className="w-full px-6 mb-8">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #a09072, transparent)" }} />
      </div>

      {/* ── ORDER MORE ─────────────────────────────────────────── */}
      <section className="w-full max-w-sm px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
            רוצים עוד?
          </p>
          <h2
            className="text-[#0C0A09] mb-3"
            style={{ fontSize: "clamp(1.5rem, 6vw, 2rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            למי שיודע
            <br />
            שזה הצל אותם.
          </h2>
          <p className="text-stone-500 font-semibold text-sm leading-relaxed mb-6 max-w-xs mx-auto">
            קנו ממשיכה של המטען שלכם, תנו במתנה, או הזמינו ב-bulk לעסק שלכם עם הלוגו שלכם.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 font-black text-white text-base cursor-pointer transition-all duration-200 active:scale-[0.97]"
              style={{ background: GOLD, minHeight: 56 }}
            >
              <WhatsAppIcon />
              להזמנה / שאלות — WhatsApp
            </a>

            <Link
              href={WEBSITE + "/wholesale"}
              className="flex items-center justify-center gap-2 py-4 font-black text-sm cursor-pointer transition-all duration-200 active:scale-[0.97]"
              style={{
                border: "1.5px solid rgba(160,144,114,0.5)",
                color: GOLD,
                minHeight: 52,
              }}
            >
              לעסקים — מידע על bulk וסיטונאות
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="w-full mt-auto py-6 text-center border-t" style={{ borderColor: "rgba(160,144,114,0.15)" }}>
        <p className="text-stone-400 text-xs font-semibold">
          © {new Date().getFullYear()} StayOn · Made in China · Designed in Israel
        </p>
        <p className="text-stone-300 text-xs mt-1">
          <Link href={WEBSITE} className="hover:text-stone-500 transition-colors">stayon.co.il</Link>
        </p>
      </footer>
    </main>
  );
}
