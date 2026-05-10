"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const WHATSAPP = "https://wa.me/972506226569";
const GOLD = "#a09072";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const links = [
  { href: "/", label: "בית" },
  { href: "/product", label: "המוצר" },
  { href: "/wholesale", label: "לעסקים" },
];

export default function Nav({ dark = true }: { dark?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const bg = dark ? "bg-black/90 border-stone-800" : "bg-white/95 border-stone-200";
  const textColor = dark ? "text-white" : "text-stone-900";
  const linkActive = dark ? "text-[#c0b090]" : "text-[#a09072]";
  const linkDefault = dark ? "text-stone-300 hover:text-white" : "text-stone-500 hover:text-[#0C0A09]";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${bg}`}
      style={{ borderColor: dark ? "rgba(160,144,114,0.15)" : "rgba(0,0,0,0.08)" }}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="StayOn" width={110} height={40} loading="eager" className="object-contain h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-150 ${pathname === l.href ? linkActive : linkDefault}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-opacity duration-150 hover:opacity-85"
          style={{ background: GOLD }}
        >
          <WhatsAppIcon />
          הזמינו עכשיו
        </a>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-t ${dark ? "bg-black border-stone-800" : "bg-white border-stone-200"}`}>
          <ul className="flex flex-col px-5 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-semibold ${pathname === l.href ? linkActive : linkDefault}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-white"
                style={{ background: GOLD }}
              >
                <WhatsAppIcon />
                הזמינו ב-WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
