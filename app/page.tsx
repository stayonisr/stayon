import QuoteForm from "./components/QuoteForm";

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#CA8A04";
const BODONI = "var(--font-bodoni), 'Bodoni Moda', Georgia, serif";

// ── Icons ─────────────────────────────────────────────────────────────────────

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function EnvelopeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function ArrowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// ── Shared ────────────────────────────────────────────────────────────────────

function GoldDivider() {
  return <div className="gold-divider" />;
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.25em] mb-6 ${light ? "text-amber-400" : "text-amber-600"}`}
    >
      {children}
    </p>
  );
}

// ── Product Visual ────────────────────────────────────────────────────────────

function ProductVisual() {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-0">
      {/* Warm backdrop so the white charger body is visible */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, #FEF3C7 0%, #FEF9E7 40%, transparent 72%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 animate-glow-pulse"
        style={{ background: "radial-gradient(ellipse at center, rgba(202,138,4,0.18) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <img
        src="/charger.png"
        alt="מטען חירום StayOn — USB-C חד-פעמי ממותג"
        width={883}
        height={376}
        className="relative w-full max-w-sm lg:max-w-lg animate-float"
        style={{ filter: "drop-shadow(0 24px 64px rgba(202,138,4,0.3)) drop-shadow(0 4px 20px rgba(0,0,0,0.12))" }}
      />
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 bg-white"
      style={{ borderBottom: "1px solid rgba(202,138,4,0.2)", height: "72px" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
        <a href="#" className="shrink-0 cursor-pointer">
          <img src="/logo.png" alt="StayOn" className="h-11 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#what", label: "מה זה StayOn" },
            { href: "#how", label: "איך זה עובד" },
            { href: "#usecases", label: "למי מתאים" },
            { href: "#quote", label: "הצעת מחיר" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-500 hover:text-stone-950 font-medium text-sm transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#quote"
          className="text-white font-bold text-sm px-6 py-3 transition-all duration-200 cursor-pointer whitespace-nowrap hover:opacity-90"
          style={{ background: GOLD, borderRadius: 0 }}
        >
          הצעת מחיר
        </a>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white" style={{ paddingTop: "72px" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 items-center min-h-[calc(100vh-72px)] py-16 lg:py-0">

        {/* Text — renders right in RTL */}
        <div className="py-8">
          <SectionLabel>מטען חירום חד-פעמי · ממותג לעסק שלכם</SectionLabel>
          <h1
            className="font-black text-stone-950 leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.025em" }}
          >
            הטלפון ב-<span className="gold-shimmer">1%</span>.<br />
            העסק לא<br />
            מכבה.
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-md">
            מטען USB-C חד-פעמי שמגיע עם הלוגו שלכם — מוכן לשימוש מיידי. בלי כבלים, בלי חיפוש שקע, בלי עיכובים.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-bold text-base px-8 py-4 transition-all duration-200 cursor-pointer hover:opacity-90"
              style={{ background: "#0c0a09", borderRadius: 0 }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              דברו איתנו
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-3 text-stone-950 font-bold text-base px-8 py-4 transition-all duration-200 cursor-pointer hover:bg-stone-50"
              style={{ border: "2px solid #0c0a09", borderRadius: 0 }}
            >
              הצעת מחיר
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Image — renders left in RTL */}
        <ProductVisual />
      </div>
      <GoldDivider />
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { number: "500+", label: "עסקים שכבר הזמינו" },
    { number: "1%", label: "מספיק להציל את הפגישה" },
    { number: "USB-C", label: "לכל הסמארטפונים החדשים" },
    { number: "3–5", label: "ימי אספקה בממוצע" },
  ];

  return (
    <section className="bg-stone-950 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-stone-800" style={{ borderTop: "1px solid rgba(202,138,4,0.15)" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-8 px-4 text-center"
              style={{ borderInlineEnd: i < stats.length - 1 ? "1px solid rgba(202,138,4,0.15)" : "none" }}
            >
              <div
                className="font-bold mb-2"
                style={{ fontFamily: BODONI, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: GOLD }}
              >
                {s.number}
              </div>
              <div className="text-stone-400 text-sm leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── What Is It ────────────────────────────────────────────────────────────────

function WhatIsIt() {
  const features = [
    "הדפסת לוגו + שם העסק על כל יחידה",
    "USB-C — תואם לכל הטלפונים המודרניים",
    "מינימום הזמנה 100 יחידות בלבד",
    "אספקה תוך 3–5 ימי עסקים",
    "אריזה ממותגת לפי בחירה",
  ];

  return (
    <section id="what" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionLabel>מה זה StayOn</SectionLabel>
            <h2
              className="font-black text-stone-950 leading-[1.08]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              פחות ממקל שפתיים.<br />
              <span className="gold-shimmer">יותר ערך</span><br />
              מכל ספל מתנה.
            </h2>
          </div>

          <div>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              StayOn הוא מטען חירום חד-פעמי קומפקטי המחובר ישירות לשקע ה-USB-C של הסמארטפון. אין צורך בכבלים, אין צורך בחשמל — פשוט מחברים ומתחילים לטעון.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              המטען מגיע ממותג עם הלוגו והצבעים של העסק שלכם. מתנת פרסום שאנשים שומרים, משתמשים בה, ומדברים עליה.
            </p>
            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: GOLD }}>
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  <span className="text-stone-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "בוחרים כמות ומעצבים",
      desc: "מגדירים כמות, מעלים לוגו ובוחרים צבעים. הצוות שלנו מכין הדמיה תוך 24 שעות לאישורכם.",
    },
    {
      n: "02",
      title: "אנחנו מייצרים",
      desc: "ייצור מהיר באיכות גבוהה. כל מטען עובר בקרת איכות ומגיע ממותג עם הלוגו שלכם.",
    },
    {
      n: "03",
      title: "אתם מחלקים — הם זוכרים",
      desc: "מגיע ישירות אליכם, ארוז ומוכן לחלוקה. הלקוחות שלכם לא שוכחים מי נמצא שם ב-1%.",
    },
  ];

  return (
    <section id="how" className="bg-stone-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel light>תהליך פשוט</SectionLabel>
          <h2
            className="font-black text-white leading-[1.08]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            איך זה עובד
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: `1px solid rgba(202,138,4,0.25)` }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="pt-10 pb-8"
              style={{
                borderBottom: `1px solid rgba(202,138,4,0.2)`,
                borderInlineStart: i > 0 ? `1px solid rgba(202,138,4,0.15)` : "none",
                paddingInlineStart: i > 0 ? "2.5rem" : 0,
                paddingInlineEnd: i < steps.length - 1 ? "2.5rem" : 0,
              }}
            >
              <div
                className="font-bold mb-8 leading-none opacity-70 select-none"
                style={{ fontFamily: BODONI, fontSize: "5rem", color: GOLD }}
              >
                {s.n}
              </div>
              <h3 className="text-white font-black text-xl mb-3">{s.title}</h3>
              <p className="text-stone-400 leading-relaxed text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Use Cases ─────────────────────────────────────────────────────────────────

function UseCases() {
  const cases = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-4.5c0-.932.575-1.736 1.399-2.072A3.002 3.002 0 016 3h5.25zm1.5 0H18a3 3 0 012.601 1.474c.824.336 1.399 1.14 1.399 2.072v4.5h-5.473a3 3 0 00-4.277-4.204V3zM1.5 12.954v4.046a3 3 0 003 3H18a3 3 0 003-3v-4.046c-.367.108-.756.168-1.16.177A4.502 4.502 0 0012 15a4.502 4.502 0 00-7.84-2.87c-.404-.009-.793-.069-1.16-.176z" />
        </svg>
      ),
      title: "מסעדות ובתי קפה",
      desc: "מתנה לאורחים שתישאר איתם הרבה אחרי הארוחה.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "מלונות וספא",
      desc: "כבוד לאורח שמגיע עם הטלפון גוסס. מתנת קבלת פנים שלא נשכחת.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
        </svg>
      ),
      title: "אירועים ותערוכות",
      desc: "כולם יצאו עם המטען שלכם בכיס. החשיפה ממשיכה הרבה אחרי האירוע.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      title: "קליניקות ומרפאות",
      desc: "מחווה חמה למטופלים שמגיעים לטיפול.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      ),
      title: "חברות ומשרדים",
      desc: "מתנה לעובדים ולקוחות שמדברת עסקים — בלי שצריך לומר מילה.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H13.5v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-3V4.875C10.5 3.839 9.66 3 8.625 3H9.375z" />
          <path d="M11.25 10.5H3v2.25a6 6 0 006 6h2.25v-8.25zM12.75 10.5v8.25H15a6 6 0 006-6V10.5h-8.25z" />
        </svg>
      ),
      title: "סוכנויות פרסום ויח״צ",
      desc: "כלי הפצה שמגיע לידיים הנכונות ומשאיר רושם.",
    },
  ];

  return (
    <section id="usecases" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel>למי מתאים</SectionLabel>
          <h2
            className="font-black text-stone-950 leading-[1.08]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            כל עסק שרוצה<br />
            <span className="gold-shimmer">להיזכר.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={i}
              className="p-8 transition-all duration-200 group cursor-default"
              style={{
                borderTop: "1px solid #e7e5e4",
                borderInlineEnd: (i % 3 !== 2) ? "1px solid #e7e5e4" : "none",
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-200"
                style={{ background: "rgba(202,138,4,0.08)", color: GOLD }}
              >
                {c.icon}
              </div>
              <h3 className="font-black text-stone-950 text-lg mb-3">{c.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{c.desc}</p>
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-12 transition-all duration-300"
                style={{ background: GOLD }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Benefits ──────────────────────────────────────────────────────────────────

function Benefits() {
  const items = [
    { title: "טעינה מיידית", desc: "מחברים — ומתחילים לטעון. אפס הגדרות, אפס המתנה." },
    { title: "לא צריך שקע", desc: "מקור אנרגיה עצמאי מובנה. עובד בכל מקום בכל זמן." },
    { title: "ממותג מקצועי", desc: "לוגו, צבעים ומסר. ממש כמו שתכננתם אותו." },
    { title: "USB-C אוניברסלי", desc: "תואם לכל הדגמים החדשים — iPhone ו-Android." },
    { title: "מינימום נמוך", desc: "מ-100 יחידות בלבד. מתאים לעסקים קטנים וגדולים." },
    { title: "משלוח מהיר", desc: "3–5 ימי עסקים מרגע אישור ההדמיה." },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#FAFAF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel>למה StayOn</SectionLabel>
          <h2
            className="font-black text-stone-950 leading-[1.08]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            פשוט. מהיר.<br />
            <span className="gold-shimmer">בלתי נשכח.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8"
              style={{ border: "1px solid #e7e5e4", marginTop: "-1px", marginInlineEnd: "-1px" }}
            >
              <div
                className="w-1 h-8 mb-6"
                style={{ background: GOLD }}
              />
              <h3 className="font-black text-stone-950 text-xl mb-3">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Quote Section ─────────────────────────────────────────────────────────────

function QuoteSection() {
  return (
    <section id="quote" className="bg-stone-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionLabel light>הצעת מחיר</SectionLabel>
            <h2
              className="font-black text-white leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              קבלו הצעה<br />
              <span className="gold-shimmer">תוך 24 שעות.</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              מלאו את הפרטים ואנחנו נחזור אליכם עם הצעת מחיר מפורטת ממותאמת לצרכים שלכם.
            </p>

            <div className="mt-12 space-y-6">
              {[
                "הדמיה חינמית תוך 24 שעות",
                "ייצור ואספקה תוך 3–5 ימים",
                "מינימום 100 יחידות",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 shrink-0 flex items-center justify-center"
                    style={{ border: `1px solid ${GOLD}`, color: GOLD }}
                  >
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <span className="text-stone-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact Section ───────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionLabel>צרו קשר</SectionLabel>
          <h2
            className="font-black text-stone-950 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            יש לכם שאלה?<br />
            <span className="gold-shimmer">אנחנו כאן.</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-white font-bold text-base px-10 py-5 transition-all duration-200 cursor-pointer hover:opacity-90"
            style={{ background: "#0c0a09", borderRadius: 0 }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            וואטסאפ — 050-622-6569
          </a>
          <a
            href="mailto:info@stayon.co.il"
            className="inline-flex items-center justify-center gap-3 text-stone-950 font-bold text-base px-10 py-5 transition-all duration-200 cursor-pointer hover:bg-stone-50"
            style={{ border: "2px solid #0c0a09", borderRadius: 0 }}
          >
            <EnvelopeIcon className="w-5 h-5" />
            info@stayon.co.il
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-stone-950">
      <GoldDivider />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/logo.png" alt="StayOn" className="h-9 w-auto brightness-0 invert opacity-80" />

          <div className="flex items-center gap-8">
            {[
              { href: "#what", label: "מה זה StayOn" },
              { href: "#how", label: "איך זה עובד" },
              { href: "#usecases", label: "למי מתאים" },
              { href: "#quote", label: "הצעת מחיר" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} StayOn. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhatIsIt />
        <HowItWorks />
        <UseCases />
        <Benefits />
        <QuoteSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
