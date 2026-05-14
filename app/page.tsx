import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { AnimateIn, StaggerContainer, StaggerItem, HoverCard, GoldLine } from "./components/AnimateIn";
import { Marquee } from "./components/Marquee";
import { HomeGSAP } from "./components/HomeGSAP";

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#a09072";

function Icon({ d, className = "w-8 h-8" }: { d: string | string[]; className?: string }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      {paths.map((p, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={p} />
      ))}
    </svg>
  );
}

const ICONS = {
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  battery: "M21 10.5h.375a.375.375 0 01.375.375v2.25a.375.375 0 01-.375.375H21M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
  unplug: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
  recycle: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  plane: "M6 12 3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
  music: "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z",
  building: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  map: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  graduation: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  bag: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
};

function WhatsAppBtn({ text = "הזמינו ב-WhatsApp", large = false }: { text?: string; large?: boolean }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-gold inline-flex items-center justify-center gap-3 text-white ${large ? "px-10 py-5 text-lg font-black" : "px-7 py-4 text-base font-bold"}`}
      style={{ borderRadius: 0 }}
    >
      <svg className={large ? "w-6 h-6" : "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {text}
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <Nav dark={false} />
      <HomeGSAP />
      <main className="bg-white">

        {/* ── HERO — dark, dramatic ────────────────────────────────────── */}
        <section data-hero-section className="relative overflow-hidden min-h-screen flex items-center" style={{ background: "#0C0A09" }}>

          {/* Background: hero-composite full bleed */}
          <div className="absolute inset-0">
            <Image
              src="/edited/hero-composite.jpg"
              alt=""
              fill
              priority
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            {/* Gradient overlay — stronger on text side */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(12,10,9,0.2) 0%, rgba(12,10,9,0.75) 55%, rgba(12,10,9,0.92) 100%)" }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-5 w-full py-24 pt-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Text — left side (RTL: right side visually) */}
              <div data-hero-text className="order-2 md:order-1 text-center md:text-right">
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-black tracking-[0.3em] uppercase"
                    style={{ background: "rgba(160,144,114,0.15)", border: "1px solid rgba(160,144,114,0.4)", color: GOLD }}
                  >
                    <Icon d={ICONS.bolt} className="w-3.5 h-3.5" />
                    Portable Single-Use Charger
                  </div>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.15}>
                  <h1
                    className="leading-[1.05] mb-6 text-white"
                    style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)", fontWeight: 900, letterSpacing: "-0.03em" }}
                  >
                    הטלפון שלך
                    <br />
                    <span className="gold-shimmer">לא יכבה.</span>
                  </h1>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.25}>
                  <p className="text-stone-300 text-xl font-bold leading-relaxed mb-3">
                    מטען USB-C חד-פעמי. תחבר, תטען, תמשיך הלאה.
                  </p>
                  <p className="text-stone-500 text-sm font-semibold mb-10 tracking-wide">
                    No cables · No powerbank · Just plug in and go
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.35}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <WhatsAppBtn large />
                    <Link
                      href="/product"
                      className="inline-flex items-center justify-center px-7 py-5 text-base font-black cursor-pointer transition-all duration-200"
                      style={{ borderRadius: 0, border: "2px solid rgba(160,144,114,0.5)", color: "rgba(192,176,144,0.9)" }}
                    >
                      פרטים על המוצר
                    </Link>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fadeIn" delay={0.5}>
                  <div className="flex flex-wrap items-center gap-5 mt-10 justify-center md:justify-start">
                    {["USB-C מובנה", "1,500 mAh", "אחסון 3 שנים"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5" style={{ background: GOLD }} />
                        <span className="text-stone-400 text-sm font-bold">{t}</span>
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              </div>

              {/* Product — 3/4 render floating on dark */}
              <AnimateIn variant="scaleIn" delay={0.1} duration={0.9} className="order-1 md:order-2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(192,176,144,0.6) 0%, transparent 70%)", transform: "scale(0.85) translateY(15%)" }} />
                  <Image
                    data-hero-product
                    src="/renders/product-3q.png"
                    alt="StayOn מטען USB-C חד-פעמי"
                    width={600}
                    height={420}
                    priority
                    className="relative z-10 w-[280px] sm:w-[380px] md:w-[480px] h-auto animate-float"
                    style={{ filter: "drop-shadow(0 0 80px rgba(192,176,144,0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
                  />
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Bottom fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }} />
        </section>

        {/* ── MARQUEE BAND ────────────────────────────────────────────── */}
        <div className="py-5 overflow-hidden" style={{ background: "#0C0A09", borderTop: "1px solid rgba(160,144,114,0.2)", borderBottom: "1px solid rgba(160,144,114,0.2)" }}>
          <Marquee
            items={["Stay Connected", "USB-C חד-פעמי", "1,500 mAh", "Pocket Size", "Emergency Power", "Made for Israel", "Ultra Lightweight", "3 שנות אחסון"]}
            speed={28}
            separator="·"
            className="text-sm font-black tracking-[0.2em] uppercase"
            style={{ color: GOLD }}
          />
        </div>

        {/* ── STATS BAR ───────────────────────────────────────────────── */}
        <section className="py-14 px-5 section-wash" style={{ borderBottom: "1px solid rgba(160,144,114,0.12)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: 1500, suffix: " mAh", label: "קיבולת סוללה" },
                { num: 3, suffix: " שנים", label: "אחסון ארוך טווח" },
                { num: 100, suffix: "+", label: "מינימום הזמנה לעסקים" },
                { num: 10, suffix: "″", label: "זמן חיבור למטען" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-black leading-none mb-2 gold-text" style={{ fontSize: "clamp(2.4rem, 6vw, 3.5rem)", letterSpacing: "-0.03em" }}>
                    <span data-count={s.num}>0</span>{s.suffix}
                  </div>
                  <div className="text-stone-500 text-xs font-bold tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HERO-GLOW FULL-BLEED ────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "60vw", maxHeight: 780 }}>
          <Image
            src="/renders/hero-glow.png"
            alt="StayOn — קטן כשצריך, ענק כשצריך"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle bottom fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }} />
          {/* CTA overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-12 px-5">
            <AnimateIn variant="fadeUp" delay={0.1}>
              <WhatsAppBtn large text="הזמינו עכשיו ב-WhatsApp" />
            </AnimateIn>
          </div>
        </section>

        {/* ── PRODUCT GALLERY — 7 angles ──────────────────────────────── */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-12">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Product</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                מכל זווית. אותה איכות.
              </h2>
            </AnimateIn>

            {/* Angles image — full width showcase */}
            <AnimateIn variant="scaleIn" delay={0.1}>
              <div className="relative group cursor-zoom-in overflow-hidden" style={{ background: "#f8f7f5", border: "1px solid rgba(160,144,114,0.15)" }}>
                <Image
                  src="/renders/angles.png"
                  alt="StayOn מטען USB-C — כל הזוויות"
                  width={1320}
                  height={880}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
                {/* Corner badge */}
                <div className="absolute top-4 end-4 px-3 py-1.5 text-xs font-black tracking-[0.2em] uppercase text-white" style={{ background: GOLD }}>
                  360° View
                </div>
              </div>
            </AnimateIn>

            {/* Feature callouts below gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: ICONS.bolt,    label: "USB-C מובנה",    sub: "ללא כבל נפרד" },
                { icon: ICONS.battery, label: "1,500 mAh",      sub: "חיבור חירום מלא" },
                { icon: ICONS.recycle, label: "Li-ion",         sub: "ניתן למחזור" },
                { icon: ICONS.plane,   label: "כיסנוני",        sub: "קטן כמו מסטיק" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3 p-4" style={{ border: "1px solid rgba(160,144,114,0.15)" }}>
                  <div style={{ color: GOLD }}><Icon d={f.icon} className="w-5 h-5 shrink-0" /></div>
                  <div>
                    <div className="text-[#0C0A09] font-black text-sm">{f.label}</div>
                    <div className="text-stone-400 text-xs font-semibold">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE MOMENT ─────────────────────────────────────────────── */}
        <section className="section-cream py-24 px-5" style={{ borderTop: "1px solid rgba(160,144,114,0.15)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <AnimateIn variant="slideRight" className="relative order-2 md:order-1">
                <Image
                  src="/edited/connected.jpg"
                  alt="מטען StayOn מחובר לטלפון — סוללה 21%"
                  width={400}
                  height={530}
                  className="w-full max-w-[320px] mx-auto md:mx-0 object-cover"
                  style={{ boxShadow: "12px 16px 0 rgba(160,144,114,0.15), 4px 6px 30px rgba(0,0,0,0.1)" }}
                />
                <div
                  className="absolute top-5 end-0 translate-x-1/3 flex items-center gap-2 px-4 py-2 text-sm font-black text-white shadow-lg"
                  style={{ background: GOLD }}
                >
                  <Icon d={ICONS.bolt} className="w-4 h-4" />
                  מטעין עכשיו
                </div>
              </AnimateIn>

              <div className="order-1 md:order-2">
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Moment</p>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={0.15}>
                  <h2
                    className="text-[#0C0A09] leading-tight mb-6"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    הטלפון על&nbsp;1%.
                    <br />הלב דופק.
                    <br />אין כבל.
                  </h2>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={0.25}>
                  <p className="text-stone-700 text-lg font-bold leading-relaxed mb-5">
                    הכרת את הרגע הזה. ב-Waze באמצע דרך, בשדה תעופה, בפגישה חשובה — ואין לאן לפנות.
                  </p>
                  <p className="text-stone-500 font-semibold leading-relaxed mb-8">
                    StayOn הוא מטען USB-C חד-פעמי שנכנס לכיס, לתיק, לארנק. תחבר, תטען, תמשיך.
                  </p>
                </AnimateIn>
                <GoldLine delay={0.3} />
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
        <section className="py-24 px-5 section-wash">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <AnimateIn variant="fadeUp">
                <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>How It Works</p>
                <h2
                  className="text-[#0C0A09]"
                  style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                >
                  ארבעה צעדים. עשר שניות.
                </h2>
              </AnimateIn>
            </div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.12}>
              {[
                { num: "1", he: "חברו", en: "Plug In", icon: ICONS.bolt, desc: "חברו ישירות לטלפון" },
                { num: "2", he: "הטעינו", en: "Charge", icon: ICONS.battery, desc: "הטלפון מטעין מיידית" },
                { num: "3", he: "נתקו", en: "Disconnect", icon: ICONS.unplug, desc: "כשנגמר, פשוט נתקו" },
                { num: "4", he: "מחזרו", en: "Recycle", icon: ICONS.recycle, desc: "Li-ion — לפח המיחזור" },
              ].map((step) => (
                <StaggerItem key={step.num}>
                  <HoverCard
                    className="relative flex flex-col items-center text-center p-6 h-full"
                    style={{ background: "white", border: "1px solid rgba(160,144,114,0.2)", boxShadow: "0 2px 16px rgba(160,144,114,0.05)" } as React.CSSProperties}
                  >
                    <div
                      className="absolute -top-4 right-4 w-8 h-8 flex items-center justify-center text-sm font-black text-white"
                      style={{ background: GOLD }}
                    >
                      {step.num}
                    </div>
                    <div className="mb-4 mt-2" style={{ color: GOLD }}>
                      <Icon d={step.icon} className="w-9 h-9" />
                    </div>
                    <p className="text-[#0C0A09] font-black text-lg mb-1">{step.he}</p>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">{step.en}</p>
                    <p className="text-stone-500 text-xs font-semibold leading-relaxed">{step.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── LIFESTYLE SPLIT ─────────────────────────────────────────── */}
        <section className="overflow-hidden" style={{ borderTop: "1px solid rgba(160,144,114,0.12)", borderBottom: "1px solid rgba(160,144,114,0.12)" }}>
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <AnimateIn variant="fadeIn" duration={0.8} className="relative overflow-hidden min-h-[360px] md:min-h-0">
              <Image
                src="/edited/lifestyle.jpg"
                alt="אישה מחזיקה StayOn ואייפון"
                fill
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />
            </AnimateIn>

            <div className="flex flex-col justify-center px-10 py-16 md:py-20 bg-white">
              <AnimateIn variant="slideLeft" delay={0.1}>
                <p className="text-xs font-black tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>Always Ready</p>
                <h2
                  className="text-[#0C0A09] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                >
                  תמיד מוכן.
                  <br />
                  <span className="gold-text">גם כשאתה לא.</span>
                </h2>
                <p className="text-stone-700 text-lg font-bold leading-relaxed mb-7">
                  קטן מספיק לכיס מעיל. חזק מספיק להציל את היום.
                </p>
              </AnimateIn>

              <StaggerContainer staggerDelay={0.1} containerDelay={0.2}>
                {[
                  "USB-C מובנה — ללא כבל נפרד",
                  "אחסון ארוך טווח — מוכן כשצריך",
                  "חד-פעמי — אין עלויות נסתרות",
                  "ממותג — עם הלוגו שלך",
                ].map((f) => (
                  <StaggerItem key={f}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center" style={{ background: GOLD }}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-stone-700 font-bold text-sm">{f}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ── USE CASES ───────────────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Use Cases</p>
              <h2
                className="text-[#0C0A09]"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
              >
                איפה תרצה אותו
              </h2>
            </AnimateIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.08}>
              {[
                { icon: ICONS.plane,      title: "שדה תעופה",        desc: "פרידות, לו\"ז צפוף, בלי שקעים" },
                { icon: ICONS.music,      title: "הופעות ואירועים",   desc: "הטלפון חייב לחיות עד הסוף" },
                { icon: ICONS.building,   title: "בתי חולים",         desc: "שעות ארוכות, ללא טעינה" },
                { icon: ICONS.map,        title: "נסיעות ארוכות",     desc: "Waze, מוזיקה, חיבור בלי הפסקה" },
                { icon: ICONS.graduation, title: "קמפוסים",           desc: "בין שיעורים, ללא שקע בשבילך" },
                { icon: ICONS.bag,        title: "שופינג",            desc: "ניווט, תשלום, תמונות" },
              ].map((u) => (
                <StaggerItem key={u.title}>
                  <HoverCard
                    className="p-6 bg-white h-full"
                    style={{ border: "1px solid rgba(160,144,114,0.2)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" } as React.CSSProperties}
                  >
                    <div className="mb-3" style={{ color: GOLD }}>
                      <Icon d={u.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#0C0A09] font-black text-base mb-1">{u.title}</h3>
                    <p className="text-stone-500 text-sm font-semibold leading-relaxed">{u.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── PRODUCT CLOSEUP ─────────────────────────────────────────── */}
        <section className="py-24 px-5 section-wash">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Product</p>
                  <h2
                    className="text-[#0C0A09] leading-tight mb-6"
                    style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    קטן ביד.
                    <br />
                    <span className="gold-text">ענק כשצריך.</span>
                  </h2>
                  <p className="text-stone-700 font-bold leading-relaxed mb-8">
                    מחובר ישירות לטלפון — בלי כבל, בלי מתאמים, בלי בזבוז זמן. גודל של מסטיק. ביצועים של חירום.
                  </p>
                </AnimateIn>
                <StaggerContainer className="grid grid-cols-2 gap-3 mb-8" staggerDelay={0.09} containerDelay={0.15}>
                  {[
                    { label: "USB-C מובנה", sub: "Built-in connector" },
                    { label: "1,500 mAh", sub: "Battery capacity" },
                    { label: "3 שנות אחסון", sub: "Long shelf life" },
                    { label: "Li-ion", sub: "Recyclable battery" },
                  ].map((s) => (
                    <StaggerItem key={s.label}>
                      <div className="p-4 bg-white" style={{ border: "1px solid rgba(160,144,114,0.2)" }}>
                        <div className="text-[#0C0A09] font-black text-sm">{s.label}</div>
                        <div className="text-stone-400 text-xs font-semibold mt-0.5">{s.sub}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <AnimateIn variant="fadeIn" delay={0.4}>
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 font-black text-sm transition-all duration-150 hover:gap-3"
                    style={{ color: GOLD }}
                  >
                    לדף המוצר המלא
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                </AnimateIn>
              </div>

              <AnimateIn variant="slideLeft">
                <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
                  <Image
                    src="/edited/hero-hand.jpg"
                    alt="יד מחזיקה StayOn לצד אייפון"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── B2B BANNER ──────────────────────────────────────────────── */}
        <section className="py-20 px-5" style={{ background: "#0C0A09" }}>
          <div className="max-w-4xl mx-auto">
            <AnimateIn variant="fadeUp">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-[#c0b090]">For Business · לעסקים</p>
                  <h2
                    className="text-white leading-tight mb-4"
                    style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    רוצים למכור StayOn?
                  </h2>
                  <p className="text-stone-300 font-bold leading-relaxed">
                    מינימום 100 יחידות · לוגו מותאם · אספקה 3–5 ימים
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/wholesale" className="btn-gold inline-flex items-center justify-center px-8 py-4 font-black text-white" style={{ borderRadius: 0 }}>
                    לפרטים ולהצעת מחיר
                  </Link>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline-gold inline-flex items-center justify-center px-8 py-4 font-black cursor-pointer" style={{ borderRadius: 0, borderColor: GOLD }}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────── */}
        <section className="py-28 px-5 text-center section-cream" style={{ borderTop: "3px solid #CA8A04" }}>
          <div className="max-w-2xl mx-auto">
            <AnimateIn variant="fadeUp">
              <p className="text-xs font-black tracking-[0.35em] uppercase mb-6" style={{ color: GOLD }}>Stay On — מוכנים?</p>
              <h2
                className="text-[#0C0A09] mb-5"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em" }}
              >
                תמיד מחובר.{" "}
                <span className="gold-shimmer">תמיד דלוק.</span>
              </h2>
              <p className="text-stone-600 font-bold text-lg mb-10">
                שלחו הודעה ב-WhatsApp ונחזור אליכם מיידית.
              </p>
              <WhatsAppBtn text="דברו איתנו ב-WhatsApp" large />
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
