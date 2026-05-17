import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AnimateIn, StaggerContainer, StaggerItem, HoverCard } from "../components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "המוצר — StayOn | מטען חירום נייד",
  description: "StayOn: מטען חירום קטן, יפה ונגיש. זמין ב־USB-C ו־Lightning, מוכן לשימוש — נותן עוד זמן עם הטלפון כשאין כבל ואין שקע קרוב.",
};

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#a09072";

function Icon({ d, className = "w-8 h-8" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const ICONS = {
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  bag: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  battery: "M21 10.5h.375a.375.375 0 01.375.375v2.25a.375.375 0 01-.375.375H21M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
};

export default function ProductPage() {
  return (
    <>
      <Nav dark={false} />
      <main className="bg-white">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="pt-24 pb-16 px-4 bg-white" style={{ borderBottom: "1px solid rgba(160,144,114,0.15)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* TEXT COLUMN */}
              <div className="text-center md:text-right">
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.2em] uppercase mb-4" style={{ color: GOLD }}>
                    Portable · Emergency · Always Ready
                  </p>
                  <h1
                    className="text-[#0C0A09] leading-tight mb-5"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    קטן. יפה.<br />
                    <span className="gold-shimmer">מוכן לרגע האמת.</span>
                  </h1>
                </AnimateIn>

                {/* ── מטען במובייל בלבד — בין הכותרת למלל ── */}
                <AnimateIn variant="fadeIn" delay={0.15} duration={0.9} className="md:hidden mb-6">
                  <div className="relative flex flex-col items-center">
                    <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", maxWidth: 400, height: 260, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(160,144,114,0.22) 0%, transparent 70%)", filter: "blur(36px)" }} />
                    <Image
                      src="/photos/product-clean.png"
                      alt="StayOn — מטען חירום נייד"
                      width={480} height={320}
                      priority
                      className="w-full h-auto relative z-10"
                      style={{ filter: "drop-shadow(0 0 40px rgba(160,144,114,0.5)) drop-shadow(0 16px 36px rgba(160,144,114,0.22))" }}
                    />
                    {/* ספציפיקציות מתחת */}
                    <div className="relative z-10 grid grid-cols-2 gap-2 w-full mt-3">
                      {["2,500 mAh", "USB-C / Lightning", "5V / 2A", "מוכן לשימוש"].map((label) => (
                        <div key={label} className="flex items-center justify-center px-3 py-2 text-xs font-black" style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(160,144,114,0.25)", color: "#5a4a32" }}>
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.22}>
                  <p className="text-stone-700 text-lg font-bold leading-relaxed mb-4">
                    לא תמיד זוכרים לקחת מטען נייד. לא תמיד הוא טעון. ולא תמיד יש כבל.{" "}
                    <span style={{ color: GOLD, fontWeight: 800 }}>StayOn נועד בדיוק לרגעים האלה</span>{" "}
                    — לתת לך עוד זמן עם הטלפון כשאין איפה להטעין.
                  </p>
                  <p className="text-stone-500 font-semibold leading-relaxed mb-8">
                    הוא מתחבר ישירות לטלפון, זמין בדגמי USB-C ו־Lightning, ולא דורש כבל או שקע קרוב. קטן, נגיש, ונראה כמו אקססורי פרימיום.
                  </p>
                </AnimateIn>

                <AnimateIn variant="fadeUp" delay={0.3}>
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

              {/* תמונה — דסקטופ בלבד */}
              <AnimateIn variant="scaleIn" delay={0.1} duration={0.9} className="hidden md:flex justify-center items-center">
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl opacity-30" style={{ background: "radial-gradient(ellipse, rgba(160,144,114,0.6), transparent 70%)", transform: "scale(0.9) translateY(5%)" }} />
                  <Image
                    src="/photos/product-clean.png"
                    alt="StayOn — מטען חירום נייד"
                    width={520} height={340}
                    priority
                    className="relative z-10 w-[380px] md:w-[460px] h-auto"
                    style={{ filter: "drop-shadow(0 8px 40px rgba(160,144,114,0.4))" }}
                  />
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* ── THE MOMENT ──────────────────────────────────────────── */}
        <section className="py-20 px-5" style={{ background: "#0C0A09", borderBottom: `3px solid ${GOLD}` }}>
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn variant="fadeUp">
              <h2
                className="text-white leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
              >
                הרגע שהסוללה על 1% הוא{" "}
                <span className="gold-shimmer">לא ייאוש.</span>
                <br />הוא הרגע של StayOn.
              </h2>
              <p className="text-stone-300 text-lg font-bold leading-relaxed">
                שיחה חשובה. ניווט שנקטע באמצע. תמונה שלא תחזור. StayOn נמצא בכיס — מוכן בדיוק לרגע הזה.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── INSTRUCTIONS ─────────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="relative flex justify-center items-center" style={{ minHeight: 360 }}>
                {/* Layered gold halo */}
                <div className="absolute pointer-events-none" style={{ width: 460, height: 360, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(160,144,114,0.28) 0%, transparent 68%)", filter: "blur(46px)" }} />
                <div className="absolute pointer-events-none" style={{ width: 300, height: 240, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(160,144,114,0.30) 0%, transparent 65%)", filter: "blur(26px)" }} />
                <Image
                  src="/photos/product-clean.png"
                  alt="StayOn — מטען חירום נייד"
                  width={460}
                  height={320}
                  className="relative z-10 w-full max-w-md mx-auto object-contain"
                  style={{ filter: ["drop-shadow(0 0 36px rgba(160,144,114,0.45))", "drop-shadow(0 18px 40px rgba(160,144,114,0.25))"].join(" ") }}
                />
              </div>

              <div>
                <AnimateIn variant="fadeUp" delay={0.05}>
                  <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>How It Works</p>
                  <h2
                    className="text-[#0C0A09] mb-8"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                  >
                    ארבעה צעדים.{" "}
                    <span className="gold-text">פשוט וברור.</span>
                  </h2>
                </AnimateIn>
                <StaggerContainer staggerDelay={0.1} containerDelay={0.1}>
                  {[
                    { num: "01", he: "פותחים", en: "Open", desc: "מוציאים מהאריזה הקומפקטית — קטן ונוח לכיס." },
                    { num: "02", he: "מחברים", en: "Plug in", desc: "מכניסים ישירות לטלפון — USB-C או Lightning, לפי הדגם. אין כבל. אין מתאמים." },
                    { num: "03", he: "נושמים", en: "Breathe", desc: "הטלפון מתחיל לטעון מיידית. הלב מתרגע." },
                    { num: "04", he: "ממחזרים", en: "Recycle", desc: "Li-ion מוסמך — לפח הסוללות. פשוט ואחראי." },
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

        {/* ── WHY DIFFERENT ───────────────────────────────────────── */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Why StayOn</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                לא עוד מטען נייד כבד.<br />
                <span className="gold-text">פתרון חירום כשנתקעים.</span>
              </h2>
            </AnimateIn>
            <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
              {[
                {
                  icon: ICONS.bolt,
                  title: "מיידי. תמיד.",
                  desc: "אין המתנה לטעינה מראש. StayOn מוכן מהרגע הראשון — פותחים ומחברים.",
                  sub: "Ready to use",
                },
                {
                  icon: ICONS.bag,
                  title: "קטן ונגיש.",
                  desc: "נכנס לכיס, לתיק או לארנק — קטן וקל יותר ממטען נייד רגיל.",
                  sub: "Pocket-sized backup",
                },
                {
                  icon: ICONS.battery,
                  title: "עוד זמן עם הטלפון.",
                  desc: "תוספת טעינה קריטית בדיוק כשצריך — לשיחה, לניווט, לצילום הרגע שלא חוזר.",
                  sub: "Emergency power boost",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <HoverCard
                    className="p-7 bg-white h-full flex flex-col"
                    style={{ border: "1px solid rgba(160,144,114,0.18)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" } as React.CSSProperties}
                  >
                    <div className="mb-4" style={{ color: GOLD }}>
                      <Icon d={item.icon} className="w-9 h-9" />
                    </div>
                    <h3 className="text-[#0C0A09] font-black text-lg mb-3">{item.title}</h3>
                    <p className="text-stone-500 text-sm font-semibold leading-relaxed flex-1">{item.desc}</p>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mt-3">{item.sub}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── SPECS ───────────────────────────────────────────────── */}
        <section className="py-24 px-5 section-wash">
          <div className="max-w-4xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Specifications</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                מה מתחת למכסה
              </h2>
            </AnimateIn>
            <StaggerContainer className="grid md:grid-cols-2 gap-3" staggerDelay={0.07}>
              {[
                { label: "סוג מוצר", value: "מטען חירום חד־פעמי", en: "Single-use emergency charger" },
                { label: "חיבור", value: "USB-C או Lightning, לפי הדגם", en: "Built-in connector · no cable needed" },
                { label: "שימוש", value: "תוספת טעינה קריטית / עוד זמן שימוש", en: "Emergency power boost" },
                { label: "כבל", value: "ללא — מתחבר ישירות לטלפון", en: "No cable required" },
                { label: "שקע", value: "ללא צורך בשקע קרוב", en: "No nearby outlet needed" },
                { label: "ניידות", value: "מתאים לשימוש בדרכים", en: "Travel-ready" },
                { label: "מצב", value: "מוכן לשימוש", en: "Ready to use — no pre-charge" },
                { label: "מיחזור", value: "לאחר השימוש: לפח סוללות ייעודי", en: "Dispose at a battery collection point" },
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

        {/* ── ANGLES GALLERY ──────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <AnimateIn variant="fadeUp" className="text-center mb-12">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Design</p>
              <h2 className="text-[#0C0A09]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.025em" }}>
                תכשיט <span className="gold-shimmer">שמציל את הרגע.</span>
              </h2>
              <p className="text-stone-500 font-bold mt-4 max-w-xl mx-auto">
                עיצוב לבן־זהב נקי. פרופורציות מדויקות. מכל זווית — הוא נראה כמו אקססורי פרימיום, לא כמו מטען רגיל.
              </p>
            </AnimateIn>
            <StaggerContainer className="grid grid-cols-3 md:grid-cols-6 gap-3" staggerDelay={0.08}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <StaggerItem key={n}>
                  <div
                    className="relative aspect-square overflow-hidden group cursor-pointer"
                    style={{ background: "#f8f7f5", border: "1px solid rgba(160,144,114,0.15)" }}
                  >
                    <Image
                      src={`/renders/${n}.png`}
                      alt={`StayOn זווית ${n}`}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
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
                מוכנים שהרגע הקריטי<br />
                <span className="gold-shimmer">לא יתפספס?</span>
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
                  לעסקים / סיטונאות →
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
