import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AnimateIn, StaggerContainer, StaggerItem, HoverCard, GoldLine } from "../components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "המוצר — StayOn | מטען USB-C חד-פעמי",
  description: "StayOn: מטען USB-C חד-פעמי. 1,500 mAh, אחסון 3 שנים, ממותג עם הלוגו שלך.",
};

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#a09072";

export default function ProductPage() {
  return (
    <>
      <Nav dark={false} />
      <main className="bg-white">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="pt-28 pb-20 px-5 bg-white" style={{ borderBottom: "1px solid rgba(160,144,114,0.15)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
                    Portable Single-Use Charger
                  </p>
                  <h1
                    className="text-[#0C0A09] leading-tight mb-6"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    StayOn —<br />
                    <span className="gold-text">מטען חירום</span><br />
                    חד-פעמי
                  </h1>
                  <p className="text-stone-700 text-lg font-bold leading-relaxed mb-8">
                    תחבר ישירות לטלפון. ללא כבל, ללא powerbank כבד. גודל של מסטיק — כוח להמשיך את היום.
                  </p>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={0.2}>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["USB-C מובנה", "1,500 mAh", "אחסון 3 שנים", "Li-ion"].map((s) => (
                      <span key={s} className="px-3 py-1.5 text-xs font-black" style={{ background: "rgba(160,144,114,0.1)", border: "1px solid rgba(160,144,114,0.3)", color: "#92650A" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-3 px-7 py-4 font-bold text-white"
                    style={{ borderRadius: 0 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    הזמינו ב-WhatsApp
                  </a>
                </AnimateIn>
              </div>

              <AnimateIn variant="scaleIn" delay={0.1} duration={0.9} className="flex justify-center items-center">
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl opacity-25" style={{ background: "radial-gradient(ellipse, #CA8A04, transparent 70%)", transform: "scale(0.85) translateY(10%)" }} />
                  <Image
                    src="/charger.png"
                    alt="StayOn מטען USB-C חד-פעמי"
                    width={520}
                    height={225}
                    priority
                    className="relative z-10 w-[280px] sm:w-[380px] md:w-[460px] h-auto animate-float product-shadow"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── INSTRUCTIONS ─────────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <AnimateIn variant="slideRight" className="relative">
                <Image
                  src="/edited/packaging-instructions.jpg"
                  alt="הוראות שימוש StayOn"
                  width={400}
                  height={300}
                  className="w-full max-w-sm mx-auto md:mx-0 object-cover"
                  style={{ border: "1px solid rgba(160,144,114,0.2)", boxShadow: "8px 10px 0 rgba(160,144,114,0.12)" }}
                />
                <div className="absolute -top-3 -right-3 px-3 py-1.5 text-xs font-black text-white" style={{ background: GOLD }}>
                  הוראות מקוריות
                </div>
              </AnimateIn>

              <div>
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Instructions</p>
                  <h2
                    className="text-[#0C0A09] mb-8"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    שימוש פשוט.<br />תוצאה מיידית.
                  </h2>
                </AnimateIn>
                <StaggerContainer staggerDelay={0.1} containerDelay={0.1}>
                  {[
                    { num: "01", he: "חברו", en: "Plug in", desc: "חברו ישירות לחיבור USB-C. ללא כבל." },
                    { num: "02", he: "הטעינו", en: "Charge", desc: "הטלפון מתחיל לטעון מיידית." },
                    { num: "03", he: "נתקו", en: "Disconnect", desc: "כשהמטען נגמר, פשוט נתקו." },
                    { num: "04", he: "מחזרו", en: "Recycle", desc: "Li-ion — לפח הסוללות." },
                  ].map((s) => (
                    <StaggerItem key={s.num}>
                      <div className="flex gap-4 mb-5">
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center font-black text-xs text-white" style={{ background: GOLD }}>
                          {s.num}
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2 mb-0.5">
                            <span className="text-[#0C0A09] font-black">{s.he}</span>
                            <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">{s.en}</span>
                          </div>
                          <p className="text-stone-600 text-sm font-semibold leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECS ───────────────────────────────────────────────── */}
        <section className="py-24 px-5 section-wash">
          <div className="max-w-4xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Specifications</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                מפרט טכני
              </h2>
            </AnimateIn>
            <StaggerContainer className="grid md:grid-cols-2 gap-3" staggerDelay={0.07}>
              {[
                { label: "חיבור", value: "USB-C מובנה", en: "Built-in USB-C" },
                { label: "קיבולת", value: "1,500 mAh", en: "1,500 mAh capacity" },
                { label: "כימיה", value: "ליתיום-יון (Li-ion)", en: "Lithium-ion" },
                { label: "אחסון", value: "עד 3 שנים", en: "Up to 3-year shelf life" },
                { label: "מידות", value: "קומפקטי — נכנס לכיס", en: "Pocket-sized" },
                { label: "ייצור", value: "Made in China", en: "Quality-controlled" },
                { label: "מיחזור", value: "ניתן למיחזור", en: "Recyclable Li-ion" },
                { label: "מיתוג", value: "לוגו מותאם אישית", en: "Custom branding" },
              ].map((spec) => (
                <StaggerItem key={spec.label}>
                  <HoverCard className="flex items-start gap-4 p-5 bg-white" style={{ border: "1px solid rgba(160,144,114,0.18)" } as React.CSSProperties}>
                    <div className="w-1 self-stretch shrink-0" style={{ background: GOLD }} />
                    <div className="flex-1">
                      <div className="text-stone-500 text-xs font-black uppercase tracking-wider mb-0.5">{spec.label}</div>
                      <div className="text-[#0C0A09] font-black">{spec.value}</div>
                      <div className="text-stone-400 text-xs font-semibold mt-0.5">{spec.en}</div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── GALLERY ─────────────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-12">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Gallery</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                המוצר בפעולה
              </h2>
            </AnimateIn>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3" staggerDelay={0.12}>
              {[
                { src: "/edited/hero-hand.jpg", alt: "StayOn ביד לצד אייפון" },
                { src: "/edited/connected.jpg", alt: "מטען מחובר לטלפון" },
                { src: "/edited/lifestyle.jpg", alt: "StayOn בשימוש" },
              ].map((img) => (
                <StaggerItem key={img.src}>
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="py-20 px-5 text-center" style={{ background: "#0C0A09", borderTop: `3px solid ${GOLD}` }}>
          <div className="max-w-xl mx-auto">
            <AnimateIn variant="fadeUp">
              <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                מוכנים להזמין?
              </h2>
              <p className="text-stone-400 font-bold mb-8">שלחו הודעה ב-WhatsApp ונחזור אליכם.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white" style={{ borderRadius: 0 }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  הזמינו ב-WhatsApp
                </a>
                <Link href="/wholesale" className="btn-outline-gold inline-flex items-center justify-center px-8 py-4 font-bold cursor-pointer" style={{ borderRadius: 0, borderColor: GOLD }}>
                  לעסקים / סיטונאות
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
