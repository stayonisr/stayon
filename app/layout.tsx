import type { Metadata } from "next";
import { Heebo, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "StayOn — מטען חירום חד-פעמי לעסקים",
  description:
    "מטען USB-C חד-פעמי ממותג לעסקים. טעינה מיידית, בלי כבלים, עם הלוגו שלכם. מינימום 100 יחידות, אספקה תוך 3-5 ימים.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-950">
        {children}
      </body>
    </html>
  );
}
