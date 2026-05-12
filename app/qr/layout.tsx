import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StayOn — חיברת. תישאר מחובר.",
  description: "מטען USB-C חד-פעמי שנכנס לכיס ומציל את היום. סרקת את הQR? ברוך הבא.",
  openGraph: {
    title: "StayOn — חיברת. תישאר מחובר.",
    description: "מטען USB-C חד-פעמי שנכנס לכיס ומציל את היום.",
    url: "https://stayon.co.il/qr",
    siteName: "StayOn",
  },
};

export default function QRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
