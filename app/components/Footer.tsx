import Link from "next/link";
import Image from "next/image";

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#a09072";

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "rgba(160,144,114,0.15)" }}>
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="StayOn" width={100} height={36} loading="eager" className="object-contain h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              מטען USB-C חד-פעמי ממותג לעסקים ואנשים פרטיים. טעינה מיידית, בלי כבלים, עם הלוגו שלכם.
            </p>
            <p className="text-stone-600 text-xs mt-3">
              Portable Single-Use Emergency Charger
            </p>
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
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-3 transition-opacity hover:opacity-85"
                style={{ background: GOLD }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <p className="text-stone-500 text-xs">
                יצרן: StayOn, שובה, ישראל<br />
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
            Made in China · Designed in Israel
          </p>
        </div>
      </div>
    </footer>
  );
}
