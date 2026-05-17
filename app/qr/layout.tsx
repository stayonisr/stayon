import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StayOn — חיברת. תישאר מחובר.",
  description: "פתרון טעינת חירום קטן ונגיש שנכנס לכיס ומציל את הרגע. סרקת את ה-QR? ברוך הבא.",
  openGraph: {
    title: "StayOn — חיברת. תישאר מחובר.",
    description: "פתרון טעינת חירום קטן ונגיש שנכנס לכיס ומציל את הרגע.",
    url: "https://stayon.co.il/qr",
    siteName: "StayOn",
  },
};

export default function QRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
