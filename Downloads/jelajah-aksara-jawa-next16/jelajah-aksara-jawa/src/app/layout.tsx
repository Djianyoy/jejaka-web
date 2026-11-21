import type { Metadata } from "next";
import "../shared/styles/globals.css";
import { SiteHeader } from "@/shared/components/site-header";
import { SiteFooter } from "@/shared/components/site-footer";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Jelajah Aksara Jawa — Mengenal Aksara, Menjaga Budaya",
    template: "%s | Jelajah Aksara Jawa",
  },
  description:
    "Jelajahi sejarah, bentuk, dan keunikan Aksara Jawa melalui materi, kuis, permainan, dan video pembelajaran interaktif.",
};

const nunito = Nunito ({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("font-sans", nunito.variable)}>
      <body>
        <SiteHeader />
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
        />
        <main>
            {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
