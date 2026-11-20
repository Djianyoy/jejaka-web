"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#173c32]/95 text-[#f8f2e4] backdrop-blur-xl">
      <div className="container mx-auto flex h-[76px] items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-1"
        >
          <Image
            src="/logo.png"
            alt="Logo Jelajah Aksara Jawa"
            width={500}
            height={500}
            className="h-17 w-17 object-contain"
            priority
          />

          <span className="leading-tight">
            <strong className="block text-sm tracking-wide">
              Jelajah Aksara Jawa
            </strong>

            <small className="text-[10px] tracking-[.2em] text-[#d5c8ac]">
              MENGENAL AKSARA, MENJAGA BUDAYA
            </small>
          </span>
        </Link>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="floating-navigation"
            className="relative grid size-11 place-items-center rounded-full border border-white/20 bg-white/5 transition-colors duration-300 hover:bg-white/10"
          >
            <Menu
              size={21}
              className={`absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              size={21}
              className={`absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>

          <div
            id="floating-navigation"
            aria-hidden={!open}
            className={`absolute right-0 top-[calc(100%+14px)] z-50 w-max min-w-[210px] origin-top-right rounded-2xl border border-[#d5c8ac]/30 bg-[#f8f2e4] p-2 text-[#173c32] shadow-[0_16px_45px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out ${
              open
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0"
            }`}
          >
            <nav className="flex flex-col" aria-label="Navigasi utama">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-8 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[#e9dfc9] hover:text-[#1b5e4c]"
                >
                  {item.label}

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 opacity-40"
                  />
                </Link>
              ))}

              <div className="my-1 border-t border-[#173c32]/10" />

              <Link
                href="/about"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-8 rounded-xl bg-[#173c32]/90 px-4 py-3 text-sm font-semibold text-[#f8f2e4] transition-colors duration-200 hover:bg-[#1b5e4c]"
              >
                Jelajah Sekarang
                <ArrowUpRight size={16} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
