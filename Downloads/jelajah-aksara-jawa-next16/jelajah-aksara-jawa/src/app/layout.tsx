import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: {
    default: "Jelajah Aksara Jawa — Mengenal Aksara, Menjaga Budaya",
    template: "%s | Jelajah Aksara Jawa",
  },
  description:
    "Jelajahi sejarah, bentuk, dan keunikan Aksara Jawa melalui materi, kuis, permainan, dan video pembelajaran interaktif.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
