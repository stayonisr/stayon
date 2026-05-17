import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { AnimateIn, StaggerContainer, StaggerItem, HoverCard, GoldLine } from "./components/AnimateIn";
import { Marquee } from "./components/Marquee";
import { HomeGSAP } from "./components/HomeGSAP";
import { ProductGallery } from "./components/ProductGallery";

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
  check: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  recycle: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  plane: "M6 12 3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
  music: "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z",
  building: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  map: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c-.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
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

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section
          data-hero-section
          className="relative overflow-hidden min-h-screen flex items-center pt-16"
          style={{ background: "#ffffff" }}
        >
          {/* Halo glow behind product */}
          <div className="absolute pointer-events-none" style={{ top: "50%", left: "68%", transform: "translate(-50%,-50%)", width: 680, height: 480, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(160,144,114,0.18) 0%, transparent 68%)", filter: "blur(52px)", animation: "haloPulse 5s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ top: "50%", left: "68%", transform: "translate(-50%,-50%)", width: 360, height: 260, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(160,144,114,0.24) 0%, transparent 65%)", filter: "blur(28px)", animation: "haloPulse 5s ease-in-out infinite reverse" }} />

          <style>{`
            @keyframes haloPulse { 0%,100%{opacity:.75;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.07)} }
            @keyframes floatProduct { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-18px) rotate(-3deg)} }
            @keyframes chipFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
            @keyframes sparkleAnim { 0%,100%{opacity:0;transform:scale(.4) rotate(0deg)} 40%,60%{opacity:1;transform:scale(1) rotate(45deg)} }
          `}</style>

          <div className="max-w-[1300px] mx-auto px-4 md:px-14 w-full py-16">
            <div className="grid md:grid-cols-2 gap-0 items-center">

              {/* TEXT */}
              <div data-hero-text className="order-1 text-center md:text-right">
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <div className="inline-flex items-center gap-2 px-3 py-2 mb-7 text-xs font-black tracking-[0.15em] md:tracking-[0.32em] uppercase" style={{ background: "rgba(160,144,114,0.07)", border: "1px solid rgba(160,144,114,0.28)", color: GOLD }}>
                    <Icon d={ICONS.bolt} className="w-3.5 h-3.5 shrink-0" />
                    <span>מטען חירום נייד · USB-C ו-Lightning</span>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.12}>
                  <h1 className="leading-[1.05] mb-6 text-[#1a1410]" style={{ fontSize: "clamp(2.4rem, 4.6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em" }}>
                    נגמרה הסוללה?
                    <br />
                    <span className="gold-shimmer">StayOn משאיר אותך מחובר.</span>
                  </h1>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.16}>
                  <p className="font-black mb-6" style={{ fontSize: "clamp(1.05rem, 2vw, 1.4rem)", color: GOLD, letterSpacing: "-0.01em" }}>
                    בלי כבל. בלי שקע קרוב. בלי לסחוב מטען נייד.
                  </p>
                </AnimateIn>

                {/* Mobile — product between headline and subtext */}
                <AnimateIn variant="fadeIn" delay={0.18} duration={0.9} className="md:hidden mb-6">
                  <div className="relative flex flex-col items-center">
                    {/* Halo */}
                    <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", maxWidth: 420, height: 280, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(160,144,114,0.25) 0%, transparent 70%)", filter: "blur(36px)" }} />
                    {/* Product image — full width on mobile */}
                    <Image src="/photos/product-clean.png" alt="StayOn" width={480} height={320}
                      className="w-full h-auto relative z-10"
                      style={{ filter: "drop-shadow(0 0 40px rgba(160,144,114,0.5)) drop-shadow(0 16px 36px rgba(160,144,114,0.25))", animation: "floatProduct 6s ease-in-out infinite" }}
                    />
                    {/* Spec badges — clean text, no icons */}
                    <div className="relative z-10 grid grid-cols-2 gap-2 w-full mt-3">
                      {["2,500 mAh", "USB-C / Lightning", "5V / 2A", "מוכן לשימוש"].map((label) => (
                        <div key={label} className="flex items-center justify-center px-3 py-2 text-xs font-black text-center" style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(160,144,114,0.25)", color: "#5a4a32" }}>
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.22}>
                  <p className="text-stone-600 font-bold leading-relaxed mb-10" style={{ fontSize: "1.15rem" }}>
                    פתרון טעינת חירום קטן, יפה ונגיש — <span className="gold-text">שקונים בדיוק כשנתקעים.</span>
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.32}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <WhatsAppBtn text="דברו איתנו להזמנה" large />
                    <Link href="/product" className="btn-outline-gold inline-flex items-center justify-center px-7 py-5 text-base font-black cursor-pointer" style={{ borderRadius: 0, borderColor: GOLD }}>
                      פרטים על המוצר
                    </Link>
                  </div>
                </AnimateIn>
              </div>

              {/* PRODUCT — desktop only */}
              <AnimateIn variant="fadeIn" delay={0.08} duration={1} className="order-2 hidden md:flex flex-col relative items-center justify-center gap-5" style={{ minHeight: 520 }}>
                {/* Product */}
                <div data-hero-product className="relative z-[4]" style={{ width: "min(520px, 90vw)", animation: "floatProduct 6s ease-in-out infinite" }}>
                  <Image src="/photos/product-clean.png" alt="StayOn — מטען חירום נייד" width={520} height={340} className="w-full h-auto" priority
                    style={{ filter: ["drop-shadow(0 0 50px rgba(160,144,114,0.5))","drop-shadow(0 0 22px rgba(160,144,114,0.35))","drop-shadow(0 28px 55px rgba(160,144,114,0.2))"].join(" ") }}
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2" style={{ width:380, height:28, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(160,144,114,0.22) 0%, transparent 70%)", filter:"blur(12px)" }} />
                </div>
                {/* Spec strip — clean row below product */}
                <div className="flex gap-2 z-10">
                  {["2,500 mAh", "USB-C / Lightning", "5V / 2A", "מוכן לשימוש"].map((label) => (
                    <div key={label} className="px-4 py-2 text-xs font-black" style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(160,144,114,0.25)", color: "#5a4a32", backdropFilter: "blur(8px)" }}>
                      {label}
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── MARQUEE BAND ────────────────────────────────────────────── */}
        <div className="py-5 overflow-hidden" style={{ background: "#0C0A09", borderTop: "1px solid rgba(160,144,114,0.2)", borderBottom: "1px solid rgba(160,144,114,0.2)" }}>
          <Marquee
            items={["Stay Connected", "USB-C ו-Lightning", "2,500 mAh", "Pocket Size", "Emergency Power", "מותג ישראלי", "Ultra Lightweight", "מוכן מהקופסה", "פתרון טעינה מיידי"]}
            speed={28} separator="·"
            className="text-sm font-black tracking-[0.2em] uppercase"
            style={{ color: GOLD }}
          />
        </div>

        {/* ── STATS BAR ───────────────────────────────────────────────── */}
        <section className="py-14 px-5 section-wash" style={{ borderBottom: "1px solid rgba(160,144,114,0.12)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: 2500, suffix: "",  label: "mAh · קיבולת סוללה" },
                { num: 10,   suffix: "W", label: "הספק טעינה" },
                { num: 2,    suffix: "",  label: "דגמים: USB-C ו־Lightning" },
                { num: 0,    suffix: "",  label: "כבלים נדרשים" },
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

        {/* ── THE MOMENT ─────────────────────────────────────────────── */}
        <section className="section-cream py-14 md:py-24 px-5" style={{ borderTop: "1px solid rgba(160,144,114,0.15)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <AnimateIn variant="slideRight" className="relative order-2 md:order-1">
                <Image
                  src="/edited/connected.jpg"
                  alt="מטען StayOn מחובר לטלפון"
                  width={400} height={530}
                  className="w-full max-w-[320px] mx-auto md:mx-0 object-cover"
                  style={{ boxShadow: "12px 16px 0 rgba(160,144,114,0.15), 4px 6px 30px rgba(0,0,0,0.1)" }}
                />
                <div className="absolute bottom-5 start-4 flex items-center gap-2 px-4 py-2 text-sm font-black text-white shadow-lg" style={{ background: GOLD }}>
                  <Icon d={ICONS.bolt} className="w-4 h-4" />
                  מטעין עכשיו
                </div>
              </AnimateIn>

              <div className="order-1 md:order-2">
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Moment</p>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={0.15}>
                  <h2 className="text-[#0C0A09] leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                    הטלפון על&nbsp;1%.<br />
                    <span className="gold-shimmer">הלב דופק.</span><br />
                    StayOn מוכן.
                  </h2>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={0.25}>
                  <p className="text-stone-700 text-lg font-bold leading-relaxed mb-4">
                    בהופעה, בטיסה, בפגישה — ברגע שהסוללה מתרוקנת ואין שקע בנמצא, StayOn נכנס לתמונה.
                  </p>
                  <p className="text-stone-500 font-semibold leading-relaxed mb-8">
                    היתרון של StayOn הוא לא רק טעינה — אלא <span style={{ color: GOLD, fontWeight: 800 }}>החופש להמשיך להשתמש בטלפון</span> בלי לחפש שקע, בלי כבל, ובלי להשאיר אותו רחוק ממך.
                  </p>
                </AnimateIn>
                <GoldLine delay={0.3} />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY STAYON ──────────────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 bg-white" style={{ borderTop: "1px solid rgba(160,144,114,0.12)" }}>
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Why StayOn</p>
              <h2 className="text-[#0C0A09] mb-5" style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.7rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                לא תמיד יש שקע. לא תמיד יש כבל.<br />
                <span className="gold-text">ולא תמיד המטען הנייד טעון.</span>
              </h2>
              <p className="text-stone-600 font-bold leading-relaxed max-w-2xl mx-auto">
                StayOn נועד לרגעים שבהם צריך פתרון עכשיו — כשאתם בים, באירוע, בטיול, בטיסה, במסעדה, בצבא או באתר עבודה, והטלפון כמעט נגמר.
              </p>
            </AnimateIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.08}>
              {[
                { icon: ICONS.unplug,  title: "בלי כבל",                 desc: "מתחבר ישירות לטלפון — USB-C או Lightning." },
                { icon: ICONS.bolt,    title: "בלי שקע קרוב",            desc: "פתרון חירום למצבים שבהם החשמל לא נגיש." },
                { icon: ICONS.bag,     title: "בלי לסחוב מטען נייד",     desc: "קטן, קל ונוח יותר ממטען נייד רגיל." },
                { icon: ICONS.battery, title: "אין צורך להטעין מראש", desc: "מטען נייד צריך לזכור לקחת ולהטעין מראש. StayOn מוכן לשימוש — נועד בדיוק לרגעים שבהם נתקעים בלי פתרון." },
                { icon: ICONS.check,   title: "מחיר נגיש",               desc: "פתרון קטן שמתאים לקנייה מהירה ברגע האמת." },
                { icon: ICONS.recycle, title: "נראה טוב",                desc: "עיצוב לבן־זהב נקי, כמו אקססורי פרימיום." },
              ].map((c) => (
                <StaggerItem key={c.title}>
                  <HoverCard className="p-6 bg-white h-full" style={{ border: "1px solid rgba(160,144,114,0.2)", boxShadow: "0 2px 14px rgba(160,144,114,0.05)" } as React.CSSProperties}>
                    <div className="mb-3" style={{ color: GOLD }}>
                      <Icon d={c.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#0C0A09] font-black text-base mb-1">{c.title}</h3>
                    <p className="text-stone-500 text-sm font-semibold leading-relaxed">{c.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 section-wash">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <AnimateIn variant="fadeUp">
                <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>How It Works</p>
                <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                  ארבעה צעדים. <span className="gold-text">פשוט וברור.</span>
                </h2>
              </AnimateIn>
            </div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.12}>
              {[
                { num: "1", he: "פתחו", en: "Open", icon: ICONS.bag,     desc: "חלצו מהאריזה — מוכן לשימוש מיידי" },
                { num: "2", he: "חברו", en: "Plug In", icon: ICONS.bolt, desc: "חיבור ישיר לטלפון — אפס מאמץ" },
                { num: "3", he: "הטעינו", en: "Charge", icon: ICONS.check, desc: "הטלפון מתחיל לטעון תוך שניות" },
                { num: "4", he: "מחזרו", en: "Recycle", icon: ICONS.recycle, desc: "בסיום השימוש — לפח סוללות ייעודי. Li-ion." },
              ].map((step) => (
                <StaggerItem key={step.num}>
                  <HoverCard
                    className="relative flex flex-col items-center text-center p-6 h-full"
                    style={{ background: "white", border: "1px solid rgba(160,144,114,0.2)", boxShadow: "0 2px 16px rgba(160,144,114,0.05)" } as React.CSSProperties}
                  >
                    <div className="absolute -top-4 right-4 w-8 h-8 flex items-center justify-center text-sm font-black text-white" style={{ background: GOLD }}>
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

        {/* ── ANGLES GALLERY ──────────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <AnimateIn variant="fadeIn" delay={0.1}>
                <ProductGallery
                  objectFit="contain" aspectRatio="4/3" thumbSize={56}
                  images={[
                    { src: "/renders/1.png", alt: "StayOn — חזית" },
                    { src: "/renders/2.png", alt: "StayOn — חזית עם ברנדינג" },
                    { src: "/renders/3.png", alt: "StayOn — זווית 3/4" },
                    { src: "/renders/4.png", alt: "StayOn — זווית אנכית" },
                    { src: "/renders/5.png", alt: "StayOn — זווית נמוכה" },
                    { src: "/renders/6.png", alt: "StayOn — גב" },
                  ]}
                />
              </AnimateIn>

              <div className="flex flex-col justify-center">
                <AnimateIn variant="fadeUp">
                  <p className="text-xs font-black tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>Design</p>
                  <h2 className="text-[#0C0A09] mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                    יפה כמו תכשיט.<br />
                    <span className="gold-shimmer">חזק כשבאמת צריך.</span>
                  </h2>
                  <p className="text-stone-600 font-bold leading-relaxed mb-10">
                    עיצוב שקט ומדויק — קצוות עגולות, גוף לבן נקי, חיבור (USB-C או Lightning) שנראה כאילו <span style={{ color: GOLD, fontWeight: 800 }}>גדל מהמוצר עצמו.</span> מכל זווית שתסתכל — StayOn נראה כמו שייך לכיס שלך.
                  </p>
                </AnimateIn>

                <StaggerContainer className="flex flex-col gap-5" staggerDelay={0.1} containerDelay={0.15}>
                  {[
                    { title: "עיצוב ללא פשרות", body: "הגוף העגול נועד לשכב בנוחות בכיס. כל קצה מוחלק. כל מימד מחושב." },
                    { title: "חיבור שנבנה פנימה", body: "זמין ב-USB-C ו-Lightning לפי הדגם. אין כבל שמחפשים. אין מתאם שנשכח. פשוט הופכים ומחברים." },
                    { title: "הלוגו שלך. אותה איכות.", body: "כל עסק יכול להזמין ממותג — אותו ייצור, אותו גימור, הסיפור שלך." },
                  ].map((c) => (
                    <StaggerItem key={c.title}>
                      <div className="flex gap-4 items-start">
                        <div className="w-0.5 shrink-0 self-stretch mt-1" style={{ background: GOLD }} />
                        <div>
                          <h3 className="text-[#0C0A09] font-black text-sm mb-1">{c.title}</h3>
                          <p className="text-stone-500 text-sm font-semibold leading-relaxed">{c.body}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ───────────────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 section-wash">
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>When You Need It</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
מתי StayOn <span className="gold-text">מציל את הרגע</span>?
              </h2>
            </AnimateIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.08}>
              {[
                { icon: ICONS.music,      title: "אירועים ומסיבות",   desc: "כשהטלפון על אחוזים אחרונים ועדיין צריך מצלמה, וואטסאפ, מונית, תשלום או קשר עם חברים" },
                { icon: ICONS.map,        title: "ים וחוף",           desc: "כשאין שקע קרוב, אין כבל, ואתם עדיין רוצים מוזיקה, תמונות ולהישאר זמינים" },
                { icon: ICONS.unplug,     title: "טיולים ושטח",       desc: "כשאתם רחוקים מחשמל וצריכים ניווט, קשר, תמונות ועדכונים" },
                { icon: ICONS.plane,      title: "טיסות ונסיעות",     desc: "כשאתם בדרכים, בשדה תעופה, ברכבת, באוטובוס או בהמתנה ארוכה" },
                { icon: ICONS.bolt,       title: "צבא",               desc: "כשאין חשמל נגיש אבל הטלפון עדיין חשוב לתקשורת, ניווט ועדכונים" },
                { icon: ICONS.building,   title: "מסעדות ובתי קפה",   desc: "כשאין מקום נוח להטעין, או שלא רוצים להשאיר את הטלפון רחוק מהשולחן" },
                { icon: ICONS.bag,        title: "קבלנים ואנשי מקצוע", desc: "כשנמצאים באתר עבודה והטלפון חייב להישאר לידכם לשיחות, תמונות, ניווט ותיאומים" },
                { icon: ICONS.battery,    title: "קניות וקניונים",     desc: "ניווט בין חנויות, תשלומים דיגיטליים ושיחות — והסוללה נגמרת באמצע היום" },
                { icon: ICONS.graduation, title: "סטודנטים וקמפוס",    desc: "יום ארוך מחוץ לבית, הרצאות וספרייה — בלי שקע פנוי בהישג יד" },
              ].map((u) => (
                <StaggerItem key={u.title}>
                  <HoverCard className="p-6 bg-white h-full" style={{ border: "1px solid rgba(160,144,114,0.2)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" } as React.CSSProperties}>
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

        {/* ── NOT A POWER BANK ────────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 bg-white" style={{ borderTop: "1px solid rgba(160,144,114,0.12)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn variant="fadeUp">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Not a Power Bank</p>
              <h2 className="text-[#0C0A09] leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                לא מטען נייד.<br />
                <span className="gold-shimmer">פתרון חירום כשנתקעים.</span>
              </h2>
              <p className="text-stone-600 text-lg font-bold leading-relaxed mb-4">
                מטען נייד רגיל יכול להיות יקר, גדול ומסורבל. צריך לזכור לקחת אותו, להטעין אותו מראש, ולעיתים גם להביא כבל. הרבה פעמים הוא נשאר בבית — או שהוא בעצמו לא טעון.
              </p>
              <p className="text-stone-500 font-semibold leading-relaxed mb-8">
                StayOn נועד לרגעים אחרים: כשאין כבל, אין שקע קרוב, ואין זמן להתעסק. קונים, מחברים וממשיכים.
              </p>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.15}>
              <div className="p-6 md:p-7 mx-auto max-w-2xl" style={{ background: "rgba(160,144,114,0.07)", borderInlineStart: `4px solid ${GOLD}` }}>
                <p className="text-[#0C0A09] font-black text-base md:text-lg leading-relaxed">
                  StayOn לא מחליף מטען נייד — הוא <span style={{ color: GOLD }}>מציל את הרגע</span> שבו המטען הנייד לא איתך, לא טעון, או פשוט לא מספיק נוח.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── EXPLORE — product / business gateway ────────────────────── */}
        <section className="py-16 md:py-24 px-5 section-cream" style={{ borderTop: "1px solid rgba(160,144,114,0.15)" }}>
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-12">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Explore</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                לאן ממשיכים <span className="gold-text">מכאן?</span>
              </h2>
            </AnimateIn>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Product */}
              <AnimateIn variant="fadeUp" delay={0.05} className="h-full">
                <div className="h-full flex flex-col p-8 md:p-10 bg-white" style={{ border: "1px solid rgba(160,144,114,0.22)" }}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Product</p>
                  <h3 className="text-[#0C0A09] font-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                    רוצים לראות את המוצר מקרוב?
                  </h3>
                  <p className="text-stone-600 font-semibold leading-relaxed mb-8 flex-1">
                    כל הפרטים, המפרט והדגמים — USB-C ו־Lightning — בדף המוצר.
                  </p>
                  <Link href="/product" className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 font-black text-white self-start" style={{ borderRadius: 0 }}>
                    לדף המוצר המלא
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </Link>
                </div>
              </AnimateIn>

              {/* Business */}
              <AnimateIn variant="fadeUp" delay={0.12} className="h-full">
                <div className="h-full flex flex-col p-8 md:p-10" style={{ background: "#0C0A09" }}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-3 text-[#c0b090]">For Business · לעסקים</p>
                  <h3 className="text-white font-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                    למכור או למתג את StayOn?
                  </h3>
                  <p className="text-stone-300 font-semibold leading-relaxed mb-8 flex-1">
                    סיטונאות, מיתוג הקופסה והמטען, ומתנות לאירועים — הכול בדף העסקים, כולל הצעת מחיר.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/wholesale" className="btn-gold inline-flex items-center justify-center px-7 py-4 font-black text-white" style={{ borderRadius: 0 }}>
                      לעסקים, סיטונאות ומיתוג
                    </Link>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline-gold inline-flex items-center justify-center px-7 py-4 font-black cursor-pointer" style={{ borderRadius: 0, borderColor: GOLD }}>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-28 px-5 text-center section-cream" style={{ borderTop: "3px solid #a09072" }}>
          <div className="max-w-2xl mx-auto">
            <AnimateIn variant="fadeUp">
              <p className="text-xs font-black tracking-[0.35em] uppercase mb-6" style={{ color: GOLD }}>Stay On · מוכנים?</p>
              <h2 className="text-[#0C0A09] mb-5" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em" }}>
                הרגע שהסוללה על 1%<br />
                <span className="gold-shimmer">הוא לא הסוף.</span>
              </h2>
              <p className="text-stone-700 font-black text-lg md:text-xl mb-5 leading-relaxed">
                עוד שיחה. עוד ניווט. עוד תמונה. עוד הודעה.<br />
                <span style={{ color: GOLD }}>עוד קצת זמן כשהטלפון כמעט נגמר.</span>
              </p>
              <p className="text-stone-600 font-bold text-lg mb-10">
                שלחו הודעה ב-WhatsApp ונחזור אליכם <span style={{ color: GOLD, fontWeight: 800 }}>תוך דקות.</span>
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
