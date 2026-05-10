import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
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
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-950">
        {children}
      </body>
    </html>
  );
}
