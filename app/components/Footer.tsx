import Link from "next/link";
import Image from "next/image";

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#a09072";
const INSTAGRAM = "https://www.instagram.com/stayon_il/";
const TIKTOK = "https://www.tiktok.com/@stayon_il";
const FACEBOOK = "https://www.facebook.com/stayon.co.il/";

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "rgba(160,144,114,0.15)" }}>
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="StayOn" width={100} height={36} loading="eager" className="object-contain h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-stone-300 text-sm font-bold leading-relaxed max-w-xs">
              StayOn — מותג ישראלי לטעינת חירום ניידת
            </p>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs mt-2">
              פתרון טעינה קטן ונגיש לעסקים, אירועים ונקודות מכירה
            </p>
            <p className="text-stone-600 text-xs mt-3">
              זמין ב־USB-C וב־Lightning
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-400 hover:text-[#c9b894] transition-colors duration-150">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6.01 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5.01-4.7.07-1.1.05-1.7.24-2.1.39-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.15.4-.34 1-.39 2.1C2.61 9.9 2.6 10.2 2.6 12s.01 2.1.07 3.3c.05 1.1.24 1.7.39 2.1.2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.15 1 .34 2.1.39 1.2.06 1.6.07 4.7.07s3.5-.01 4.7-.07c1.1-.05 1.7-.24 2.1-.39.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.15-.4.34-1 .39-2.1.06-1.2.07-1.5.07-3.3s-.01-2.1-.07-3.3c-.05-1.1-.24-1.7-.39-2.1-.2-.5-.43-.9-.83-1.3-.4-.4-.8-.63-1.3-.83-.4-.15-1-.34-2.1-.39C15.5 4.01 15.1 4 12 4zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm5-2.3a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
                </svg>
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-400 hover:text-[#c9b894] transition-colors duration-150">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-stone-400 hover:text-[#c9b894] transition-colors duration-150">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.8v2.4c-1.2.1-2.3-.3-3.5-.9v6.3c0 4-3.3 6.6-6.8 5.7-3-.8-4.5-4-3.5-7 .8-2.3 3-3.6 5.4-3.4v2.6c-.4-.1-.8-.1-1.2 0-1.3.3-2.1 1.5-1.8 2.8.3 1.4 1.8 2.2 3.2 1.7 1-.4 1.5-1.3 1.5-2.4V3h3.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">ניווט</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "דף הבית" },
                { href: "/product", label: "המוצר" },
                { href: "/wholesale", label: "לעסקים / סיטונאות" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-stone-400 hover:text-amber-400 text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">צור קשר</h4>
            <div className="space-y-3">
              <Link
                href="/wholesale#quote"
                className="flex items-center justify-center gap-2 text-sm font-black text-white px-4 py-3 transition-opacity hover:opacity-85 text-center"
                style={{ background: GOLD }}
              >
                לקבלת הצעת מחיר לחצו כאן
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold px-4 py-3 transition-colors hover:bg-[rgba(160,144,114,0.12)]"
                style={{ border: `1px solid ${GOLD}`, color: "#c9b894" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <p className="text-stone-500 text-xs">
                www.stayon.co.il
              </p>
            </div>
          </div>
        </div>

        <div className="gold-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} StayOn. כל הזכויות שמורות.
          </p>
          <p className="text-stone-700 text-xs tracking-wider uppercase">
            מותג ישראלי · Israeli Brand
          </p>
        </div>
      </div>
    </footer>
  );
}
