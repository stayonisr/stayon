"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

// ─── Links ───────────────────────────────────────────────────────────────
const WHATSAPP  = "https://wa.me/972506226569?text=היי%20StayOn%2C%20סרקתי%20את%20הQR%20ורוצה%20לדעת%20עוד";
const INSTAGRAM = "https://www.instagram.com/stayon_il/";
const TIKTOK    = "https://www.tiktok.com/@stayon_il";
const FACEBOOK  = "https://www.facebook.com/stayon.co.il/";
const EMAIL     = "mailto:hello@stayon.co.il";
const WEBSITE   = "https://stayon.co.il";
const GOLD      = "#a09072";
const DARK      = "#6b5f4a";
// ─────────────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.17 8.17 0 004.78 1.52V6.8a4.85 4.85 0 01-1.01-.11z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = "w-7 h-7" }: { size?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

// ─── Social grid tiles ────────────────────────────────────────────────────
const socials = [
  { href: INSTAGRAM, label: "Instagram", icon: <InstagramIcon />, bg: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)", color: "white" },
  { href: TIKTOK,    label: "TikTok",    icon: <TikTokIcon />,    bg: "#010101",  color: "white" },
  { href: FACEBOOK,  label: "Facebook",  icon: <FacebookIcon />,  bg: "#1877F2",  color: "white" },
  { href: WHATSAPP,  label: "WhatsApp",  icon: <WhatsAppIcon />,  bg: "#25D366",  color: "white" },
  { href: EMAIL,     label: "מייל",      icon: <MailIcon />,      bg: GOLD,       color: "white" },
  { href: WEBSITE,   label: "האתר",      icon: <GlobeIcon />,     bg: DARK,       color: "white" },
];

export default function QRPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main
      className="min-h-screen flex flex-col items-center overflow-x-hidden"
      style={{ background: "#ffffff", fontFamily: "var(--font-heebo), Heebo, Arial, sans-serif" }}
      dir="rtl"
    >
      {/* ── LOGO ────────────────────────────────────────────────────── */}
      <div className="w-full flex justify-center pt-10 pb-0">
        <Link href={WEBSITE} aria-label="StayOn homepage">
          <Image
            src="/logo.png"
            alt="StayOn"
            width={110}
            height={40}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="w-full flex flex-col items-center text-center px-6 pt-10 pb-10 relative">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(160,144,114,0.1) 0%, transparent 70%)", filter: "blur(40px)" }}
          aria-hidden="true"
        />

        {/* Charger */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" as const }}
          className="relative z-10 mb-8"
        >
          <Image
            src="/charger.png"
            alt="StayOn — מטען חירום נייד"
            width={280}
            height={120}
            priority
            className="w-[170px] sm:w-[210px] h-auto animate-float product-shadow"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs font-black tracking-[0.32em] uppercase mb-4"
          style={{ color: GOLD }}
        >
          סרקת · ברוך הבא
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7, ease: "easeOut" as const }}
          className="text-[#0C0A09] mb-5 leading-[1.0]"
          style={{ fontSize: "clamp(2.9rem, 12vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em" }}
        >
          חיברת.
          <br />
          <span className="gold-shimmer">
            תישאר
            <br />
            מחובר.
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6, ease: "easeOut" as const }}
          className="text-stone-500 font-semibold leading-relaxed max-w-[270px]"
          style={{ fontSize: "1rem" }}
        >
          מה שנמצא בידיים שלך נתן לך עוד זמן היום.
          <br />
          תדאג שזה יקרה שוב.
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.56, duration: 0.5 }}
          className="text-stone-400 text-xs font-semibold tracking-wide mt-3"
        >
          USB-C ו-Lightning · 1,500 mAh · מוכן לשימוש
        </motion.p>
      </section>

      {/* ── FULL-WIDTH DIVIDER ───────────────────────────────────────── */}
      <div className="w-full mb-10">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #a09072 30%, #c0b090 50%, #a09072 70%, transparent)" }} />
      </div>

      {/* ── SOCIAL GRID ─────────────────────────────────────────────── */}
      <section className="w-full max-w-sm px-6 mb-2" aria-label="קישורים לרשתות חברתיות">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs font-black tracking-[0.32em] uppercase mb-6"
          style={{ color: GOLD }}
        >
          עקבו אחרינו
        </motion.p>

        {/* 3-col icon grid */}
        <div className="grid grid-cols-3 gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.35, ease: "easeOut" as const }}
              whileHover={reduceMotion ? undefined : {
                scale: 1.07,
                transition: { type: "spring", stiffness: 450, damping: 20 },
              }}
              whileTap={reduceMotion ? undefined : { scale: 0.93 }}
              className="flex flex-col items-center justify-center gap-2 cursor-pointer aspect-square"
              style={{
                background: s.bg,
                color: s.color,
              }}
            >
              {s.icon}
              <span className="text-[10px] font-black tracking-wide leading-none" style={{ color: s.color }}>
                {s.label}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── SPACER ──────────────────────────────────────────────────── */}
      <div className="h-12" />

      {/* ── FULL-WIDTH DIVIDER ───────────────────────────────────────── */}
      <div className="w-full mb-10">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #a09072 30%, #c0b090 50%, #a09072 70%, transparent)" }} />
      </div>

      {/* ── ORDER MORE — dark strip ──────────────────────────────────── */}
      <section className="w-full" style={{ background: "#0C0A09" }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" as const }}
          className="relative overflow-hidden flex flex-col items-center text-center px-8 py-12"
        >
          {/* Gold glow top-right */}
          <div
            className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(160,144,114,0.15) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
            aria-hidden="true"
          />

          <p className="text-xs font-black tracking-[0.32em] uppercase mb-4 relative z-10" style={{ color: GOLD }}>
            רוצים עוד?
          </p>

          <h2
            className="text-white mb-3 leading-[1.05] relative z-10"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.03em" }}
          >
            למי שיודע
            <br />
            שזה היה שם ברגע הנכון.
          </h2>

          <p className="text-stone-400 font-semibold text-sm leading-relaxed mb-8 relative z-10 max-w-[260px]">
            קנו ממשיכה, תנו במתנה, או הזמינו ב-bulk לעסק שלכם עם הלוגו שלכם.
          </p>

          {/* CTA buttons — sharp, full width */}
          <div className="w-full max-w-xs flex flex-col gap-3 relative z-10">
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שלחו הודעה ב-WhatsApp"
              whileHover={reduceMotion ? undefined : { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="flex items-center justify-center gap-3 font-black text-white text-base cursor-pointer"
              style={{ background: GOLD, minHeight: 56, padding: "0 24px", boxShadow: "0 4px 24px rgba(160,144,114,0.35)" }}
            >
              <WhatsAppIcon size="w-5 h-5" />
              להזמנה / שאלות — WhatsApp
            </motion.a>

            <Link
              href={WEBSITE + "/wholesale"}
              className="flex items-center justify-center gap-2 font-bold text-sm cursor-pointer"
              style={{ color: "rgba(160,144,114,0.75)", border: "1px solid rgba(160,144,114,0.2)", minHeight: 48, padding: "0 20px", transition: "border-color 0.2s, color 0.2s" }}
            >
              לעסקים — bulk וסיטונאות
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        className="w-full py-7 text-center"
        style={{ background: "#0C0A09", borderTop: "1px solid rgba(160,144,114,0.1)" }}
      >
        <Link href={WEBSITE} aria-label="StayOn homepage">
          <Image
            src="/logo.png"
            alt="StayOn"
            width={80}
            height={28}
            className="h-6 w-auto object-contain mx-auto mb-3 brightness-0 invert opacity-25"
          />
        </Link>
        <p className="text-stone-600 text-xs font-semibold">
          © {new Date().getFullYear()} StayOn. כל הזכויות שמורות.
        </p>
      </footer>
    </main>
  );
}
