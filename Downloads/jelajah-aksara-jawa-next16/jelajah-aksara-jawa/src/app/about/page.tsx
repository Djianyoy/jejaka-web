import type { Metadata } from "next";
import { AboutPage } from "@/features/about/about-page";
export const metadata: Metadata = { title: "Mengenal Aksara Jawa" };
export default function Page() {
  return <AboutPage />;
}
