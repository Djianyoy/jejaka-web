import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
export function SiteFooter() {
  return (
    <footer className="bg-[#122f28] py-14 text-[#eee7d8]">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="jawa mb-4 text-3xl text-[#d8bd87]">ꦲꦤꦕꦫꦏ</div>
            <h2 className="display text-2xl">
              Mengenal Aksara,
              <br />
              Menjaga Budaya.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#c4c7b9]">
              Ruang belajar digital untuk mengenal sejarah, bentuk, dan keunikan
              Aksara Jawa dengan cara yang lebih dekat dan menyenangkan.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-[.18em] text-[#d8bd87]">
              JELAJAHI
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {NAV_ITEMS.map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="text-sm text-[#d9d8cd] hover:text-white"
                >
                  {x.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-[#aeb8ac] sm:flex-row">
          <span>© 2026 Jelajah Aksara Jawa · Kelompok 6 | (Salwa, Shella, Kiarra, Aurelia)</span>
          <span>Manusia Kebudayaan Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
