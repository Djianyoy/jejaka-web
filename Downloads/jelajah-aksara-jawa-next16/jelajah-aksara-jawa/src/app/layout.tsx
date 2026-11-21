import type { Metadata } from "next";
import "../shared/styles/globals.css";
import { SiteHeader } from "@/shared/components/site-header";
import { SiteFooter } from "@/shared/components/site-footer";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

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
    <html lang="id" className={cn("font-mono", jetbrainsMono.variable)}>
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
