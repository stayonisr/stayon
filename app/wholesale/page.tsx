import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";
import { AnimateIn, StaggerContainer, StaggerItem, HoverCard } from "../components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "לעסקים — StayOn | סיטונאות ומיתוג",
  description: "StayOn לעסקים: מטען USB-C חד-פעמי ממותג. מינימום 100 יחידות, אספקה 3-5 ימים.",
};

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
  tag: "M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z",
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  cube: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  recycle: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  globe: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  truck: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  storefront: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 2.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
  home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  sparkles: [
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    "M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  ],
  plane: "M6 12 3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
  building: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  cart: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
};

export default function WholesalePage() {
  return (
    <>
      <Nav dark={false} />
      <main className="bg-white">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative pt-16 min-h-[72vh] flex items-end overflow-hidden">
          <Image
            src="/edited/factory.jpg"
            alt="מפעל ייצור StayOn"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,10,9,0.95) 0%, rgba(12,10,9,0.55) 55%, rgba(12,10,9,0.2) 100%)" }} />
          <div className="absolute top-16 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #CA8A04 30%, #CA8A04 70%, transparent)" }} />

          <div className="relative z-10 max-w-5xl mx-auto px-5 pb-16 w-full">
            <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: "#c0b090" }}>
              For Business · סיטונאות
            </p>
            <h1
              className="text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
            >
              המוצר שלכם.
              <br />
              <span className="gold-shimmer">הלוגו שלכם.</span>
            </h1>
            <p className="text-stone-200 text-lg font-bold leading-relaxed max-w-xl mb-8">
              מטען USB-C חד-פעמי עם המיתוג שלכם. ייצור בסין, אספקה לישראל תוך 3–5 ימי עסקים.
            </p>
            <div className="flex flex-wrap gap-3">
              {["מינימום 100 יח׳", "לוגו מותאם", "3–5 ימי אספקה", "Li-ion · מיחזור"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-black"
                  style={{ border: "1px solid rgba(160,144,114,0.5)", background: "rgba(160,144,114,0.1)", color: "#c0b090" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY STAYON ──────────────────────────────────────────── */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Why StayOn</p>
              <h2
                className="text-[#0C0A09]"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
              >
                למה עסקים בוחרים בנו
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: ICONS.tag,     title: "מיתוג מלא",       desc: "הלוגו, הצבעים והמסר שלכם על המוצר. כל לקוח שמשתמש — רואה אתכם.", en: "Full custom branding" },
                { icon: ICONS.bolt,    title: "חוויית לקוח",     desc: "לקוח שנשאר עם סוללה — נשאר אצלכם. ערך פרקטי אמיתי.", en: "Real value & loyalty" },
                { icon: ICONS.cube,    title: "לוגיסטיקה פשוטה", desc: "אחסון עד 3 שנים, לא צריך חשמל לתצוגה. ממש plug-and-sell.", en: "Zero infrastructure" },
                { icon: ICONS.recycle, title: "הכנסה חוזרת",     desc: "מוצר מתכלה = מכירות חוזרות. מי שנשאר על 1% יחזור שוב.", en: "Repeat purchase model" },
                { icon: ICONS.globe,   title: "אחריות סביבתית",  desc: "Li-ion מוסמך לפח מיחזור. ערכי קיימות לצד מכירה.", en: "Recyclable Li-ion" },
                { icon: ICONS.truck,   title: "אספקה מהירה",     desc: "3–5 ימי עסקים לישראל. מינימום 100 יחידות.", en: "3–5 business days" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 bg-white group transition-all duration-200 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(160,144,114,0.18)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <div className="mb-4" style={{ color: GOLD }}>
                    <Icon d={item.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#0C0A09] font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm font-semibold leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">{item.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IDEAL FOR ──────────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Ideal For</p>
                <h2
                  className="text-[#0C0A09] leading-tight mb-8"
                  style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                >
                  מושלם עבור
                </h2>
                <div className="space-y-3">
                  {[
                    { icon: ICONS.storefront, label: "קיוסקים ונקודות מכירה", desc: "הכנסה נוספת בנפח קטן" },
                    { icon: ICONS.home,       label: "בתי מלון ואתרי נופש",   desc: "חוויית אורח ברמה אחרת" },
                    { icon: ICONS.sparkles,   label: "אולמות ואירועים",        desc: "מתנה לאורחים בלחיצת כפתור" },
                    { icon: ICONS.plane,      label: "שדות תעופה ותחנות",      desc: "מוצר שאנשים צריכים בדיוק עכשיו" },
                    { icon: ICONS.building,   label: "בתי חולים ומרפאות",      desc: "ערך אמיתי למטופלים ומשפחות" },
                    { icon: ICONS.cart,       label: "רשתות קמעונאיות",        desc: "SKU פשוט, רווחיות גבוהה" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 shrink-0 flex items-center justify-center bg-white"
                        style={{ border: "1px solid rgba(160,144,114,0.25)", color: GOLD }}
                      >
                        <Icon d={item.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[#0C0A09] font-black text-sm">{item.label}</div>
                        <div className="text-stone-500 text-xs font-semibold mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/edited/hero-composite.jpg"
                  alt="StayOn branded product"
                  width={560}
                  height={420}
                  className="w-full object-cover"
                  style={{ boxShadow: "12px 16px 0 rgba(160,144,114,0.15)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 text-white"
                  style={{ background: "linear-gradient(to top, rgba(12,10,9,0.85), transparent)" }}
                >
                  <p className="font-black">StayOn — הלוגו שלכם עליו</p>
                  <p className="text-stone-300 text-sm font-semibold">Custom branding on every unit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ─────────────────────────────────────────────── */}
        <section className="py-24 px-5 section-wash">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Process</p>
            <h2
              className="text-[#0C0A09] mb-14"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
            >
              איך זה עובד
            </h2>
            <div className="grid md:grid-cols-4 gap-5">
              {[
                { num: "1", title: "שלחו בקשה",    desc: "מלאו טופס או WhatsApp" },
                { num: "2", title: "הצעת מחיר",    desc: "תוך 24 שעות" },
                { num: "3", title: "אישור מיתוג",  desc: "לוגו ופרטי ייצור" },
                { num: "4", title: "אספקה",         desc: "3–5 ימי עסקים" },
              ].map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  {i < 3 && (
                    <div
                      className="hidden md:block absolute top-6 left-full w-5 h-0.5 -translate-x-2.5"
                      style={{ background: "rgba(160,144,114,0.3)" }}
                    />
                  )}
                  <div
                    className="w-12 h-12 flex items-center justify-center font-black text-lg text-white mb-4"
                    style={{ background: GOLD }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-[#0C0A09] font-black mb-1">{step.title}</h3>
                  <p className="text-stone-500 text-sm font-semibold">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE FORM ──────────────────────────────────────────── */}
        <section className="py-24 px-5 section-cream" style={{ borderTop: "1px solid rgba(160,144,114,0.15)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14">
              {/* Info */}
              <div>
                <p className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Get a Quote</p>
                <h2
                  className="text-[#0C0A09] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em" }}
                >
                  בקשו<br />הצעת מחיר
                </h2>
                <p className="text-stone-700 font-bold leading-relaxed mb-8">
                  מלאו את הטופס ונחזור אליכם תוך 24 שעות עם הצעה מותאמת.
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    "מינימום 100 יחידות",
                    "לוגו ומיתוג מותאם אישית",
                    "אספקה תוך 3–5 ימי עסקים",
                    "תמיכה ישירה מהיצרן",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center" style={{ background: GOLD }}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-stone-700 font-bold text-sm">{t}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="p-5 bg-white"
                  style={{ border: "1px solid rgba(160,144,114,0.25)" }}
                >
                  <p className="text-stone-600 font-bold text-sm mb-3">מעדיפים לדבר ישירות?</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black text-white px-5 py-3 transition-opacity hover:opacity-85"
                    style={{ background: "#25D366", borderRadius: 0 }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    כתבו לנו ב-WhatsApp
                  </a>
                </div>
              </div>

              {/* Form */}
              <div
                className="p-8 bg-white"
                style={{ border: "1px solid rgba(160,144,114,0.2)", boxShadow: "0 4px 30px rgba(0,0,0,0.06)" }}
              >
                <QuoteForm light />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
