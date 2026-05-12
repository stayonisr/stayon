"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

// ─── Contact & social links ───────────────────────────────────────────────
const WHATSAPP  = "https://wa.me/972506226569?text=היי%20StayOn%2C%20סרקתי%20את%20הQR%20ורוצה%20לדעת%20עוד";
const INSTAGRAM = "https://www.instagram.com/stayon_il/";
const TIKTOK    = "https://www.tiktok.com/@stayon_il";
const FACEBOOK  = "https://www.facebook.com/stayon.co.il/";
const EMAIL     = "mailto:hello@stayon.co.il";
const WEBSITE   = "https://stayon.co.il";
const GOLD      = "#a09072";
// ─────────────────────────────────────────────────────────────────────────

// ─── Icons ───────────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.17 8.17 0 004.78 1.52V6.8a4.85 4.85 0 01-1.01-.11z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 opacity-40 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

// ─── Social data ─────────────────────────────────────────────────────────
const socials = [
  {
    href: INSTAGRAM,
    label: "Instagram",
    sub: "@stayon_il",
    icon: <InstagramIcon />,
    bg: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
    color: "white",
    hoverShadow: "rgba(253,29,29,0.35)",
  },
  {
    href: TIKTOK,
    label: "TikTok",
    sub: "@stayon_il",
    icon: <TikTokIcon />,
    bg: "#010101",
    color: "white",
    hoverShadow: "rgba(0,0,0,0.4)",
  },
  {
    href: FACEBOOK,
    label: "Facebook",
    sub: "stayon.co.il",
    icon: <FacebookIcon />,
    bg: "#1877F2",
    color: "white",
    hoverShadow: "rgba(24,119,242,0.35)",
  },
  {
    href: WHATSAPP,
    label: "WhatsApp",
    sub: "0506226569",
    icon: <WhatsAppIcon />,
    bg: "#25D366",
    color: "white",
    hoverShadow: "rgba(37,211,102,0.35)",
  },
  {
    href: EMAIL,
    label: "מייל",
    sub: "hello@stayon.co.il",
    icon: <MailIcon />,
    bg: "#ffffff",
    color: "#0C0A09",
    border: true,
    hoverShadow: "rgba(160,144,114,0.2)",
  },
  {
    href: WEBSITE,
    label: "האתר שלנו",
    sub: "stayon.co.il",
    icon: <GlobeIcon />,
    bg: "#ffffff",
    color: "#0C0A09",
    border: true,
    hoverShadow: "rgba(160,144,114,0.2)",
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────
export default function QRPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: "easeOut" as const },
        };

  const fadeIn = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.55, delay, ease: "easeOut" as const },
        };

  return (
    <main
      className="min-h-screen flex flex-col items-center overflow-x-hidden"
      style={{ background: "#ffffff", fontFamily: "var(--font-heebo), Heebo, Arial, sans-serif" }}
      dir="rtl"
    >
      {/* ── LOGO ─────────────────────────────────────────────────────── */}
      <motion.div {...fadeIn(0)} className="w-full flex justify-center pt-10 pb-0">
        <Link href={WEBSITE} aria-label="StayOn homepage">
          <Image
            src="/logo.png"
            alt="StayOn"
            width={110}
            height={40}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
      </motion.div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="w-full flex flex-col items-center text-center px-6 pt-10 pb-12 relative">

        {/* Background glow */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(160,144,114,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        {/* Charger image */}
        <motion.div
          {...(reduceMotion ? {} : {
            initial: { opacity: 0, scale: 0.9, y: 12 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" as const },
          })}
          className="relative z-10 mb-8"
        >
          <Image
            src="/charger.png"
            alt="StayOn מטען USB-C חד-פעמי"
            width={280}
            height={120}
            priority
            className="w-[180px] sm:w-[220px] h-auto animate-float product-shadow"
          />
        </motion.div>

        {/* Eyebrow label */}
        <motion.p
          {...fadeIn(0.25)}
          className="text-xs font-black tracking-[0.3em] uppercase mb-5"
          style={{ color: GOLD }}
        >
          סרקת · ברוך הבא
        </motion.p>

        {/* Headline — exaggerated minimalism */}
        <motion.h1
          {...(reduceMotion ? {} : {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.7, ease: "easeOut" as const },
          })}
          className="text-[#0C0A09] mb-5 leading-[1.0]"
          style={{ fontSize: "clamp(2.9rem, 12vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em" }}
        >
          חיברת.
          <br />
          <span className="gold-shimmer" style={{ fontSize: "inherit" }}>
            תישאר
            <br />
            מחובר.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-stone-500 font-semibold leading-relaxed max-w-[280px] mb-1"
          style={{ fontSize: "1rem" }}
        >
          מה שנמצא בידיים שלך הציל אותך היום.
          <br />
          תדאג שזה יקרה שוב.
        </motion.p>

        <motion.p {...fadeIn(0.65)} className="text-stone-400 text-xs font-semibold tracking-wide mt-3">
          USB-C · 1,500 mAh · אחסון 3 שנים
        </motion.p>
      </section>

      {/* ── GOLD DIVIDER ─────────────────────────────────────────────── */}
      <motion.div
        {...(reduceMotion ? {} : {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
          transition: { duration: 0.9, delay: 0.6, ease: "easeOut" as const },
        })}
        className="w-full px-8 mb-10"
        style={{ originX: 0.5 }}
      >
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #a09072 30%, #c0b090 50%, #a09072 70%, transparent)" }} />
      </motion.div>

      {/* ── SOCIAL LINKS ─────────────────────────────────────────────── */}
      <section className="w-full max-w-sm px-5 mb-10" aria-label="קישורים לרשתות חברתיות">
        <motion.p {...fadeIn(0.7)} className="text-center text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
          עקבו אחרינו
        </motion.p>

        <div className="flex flex-col gap-2.5" role="list">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label={`${s.label} — ${s.sub}`}
              {...(reduceMotion ? {} : {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.65 + i * 0.07, duration: 0.4, ease: "easeOut" as const },
                whileHover: {
                  y: -3,
                  boxShadow: `0 10px 32px ${s.hoverShadow}`,
                  transition: { type: "spring", stiffness: 420, damping: 22 },
                },
                whileTap: { scale: 0.97 },
              })}
              className="flex items-center gap-4 px-5 cursor-pointer"
              style={{
                background: s.bg,
                color: s.color,
                border: s.border ? "1.5px solid rgba(160,144,114,0.25)" : "none",
                borderRadius: 14,
                minHeight: 62,
                boxShadow: s.border
                  ? "0 2px 12px rgba(0,0,0,0.04)"
                  : "0 2px 16px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.2s ease",
              }}
            >
              <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.18)" }}>
                {s.icon}
              </div>
              <div className="flex-1 text-right">
                <div className="font-black text-sm leading-tight">{s.label}</div>
                <div className="text-xs font-semibold mt-0.5" style={{ opacity: 0.72 }}>{s.sub}</div>
              </div>
              <ArrowIcon />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── ORDER MORE — dark card ────────────────────────────────────── */}
      <section className="w-full px-5 mb-10">
        <motion.div
          {...fadeUp(1.0)}
          className="relative overflow-hidden"
          style={{
            background: "#0C0A09",
            borderRadius: 20,
            maxWidth: 400,
            margin: "0 auto",
            padding: "36px 28px 32px",
          }}
        >
          {/* Subtle gold glow inside card */}
          <div
            className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(160,144,114,0.18) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
            aria-hidden="true"
          />

          <p className="text-xs font-black tracking-[0.3em] uppercase mb-4 relative z-10" style={{ color: GOLD }}>
            רוצים עוד?
          </p>

          <h2
            className="text-white mb-3 leading-[1.05] relative z-10"
            style={{ fontSize: "clamp(1.7rem, 7vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.03em" }}
          >
            למי שיודע
            <br />
            שזה הציל אותם.
          </h2>

          <p className="text-stone-400 font-semibold text-sm leading-relaxed mb-7 relative z-10 max-w-[260px]">
            קנו ממשיכה של המטען, תנו במתנה, או הזמינו ב-bulk לעסק שלכם עם הלוגו שלכם.
          </p>

          {/* WhatsApp CTA */}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="שלחו הודעה ב-WhatsApp"
            {...(reduceMotion ? {} : {
              whileHover: { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 20 } },
              whileTap: { scale: 0.97 },
            })}
            className="flex items-center justify-center gap-3 font-black text-white text-base cursor-pointer relative z-10 mb-3"
            style={{
              background: GOLD,
              borderRadius: 12,
              minHeight: 56,
              padding: "0 24px",
              boxShadow: "0 4px 24px rgba(160,144,114,0.4)",
            }}
          >
            <WhatsAppIcon size="w-5 h-5" />
            להזמנה / שאלות — WhatsApp
          </motion.a>

          {/* Wholesale link */}
          <Link
            href={WEBSITE + "/wholesale"}
            className="flex items-center justify-center gap-2 font-bold text-sm cursor-pointer relative z-10"
            style={{
              color: "rgba(160,144,114,0.8)",
              borderRadius: 12,
              minHeight: 48,
              border: "1.5px solid rgba(160,144,114,0.2)",
              padding: "0 20px",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            לעסקים — bulk וסיטונאות
            <ArrowIcon />
          </Link>
        </motion.div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer
        className="w-full mt-auto py-8 text-center"
        style={{ borderTop: "1px solid rgba(160,144,114,0.12)" }}
      >
        <Link href={WEBSITE} aria-label="StayOn homepage">
          <Image
            src="/logo.png"
            alt="StayOn"
            width={80}
            height={28}
            className="h-6 w-auto object-contain mx-auto mb-3 opacity-30"
          />
        </Link>
        <p className="text-stone-400 text-xs font-semibold">
          © {new Date().getFullYear()} StayOn · Made in China · Designed in Israel
        </p>
      </footer>
    </main>
  );
}
