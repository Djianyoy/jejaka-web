"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
export function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#173c32]/95 text-[#f8f2e4] backdrop-blur-xl">
  <div className="container flex h-[76px] items-center justify-between">
   <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}><span className="jawa text-2xl text-[#e2c995]">ꦗꦼꦭꦗꦃ</span><span className="leading-tight"><strong className="block text-sm tracking-wide">Jelajah Aksara Jawa</strong><small className="text-[10px] tracking-[.2em] text-[#d5c8ac]">MENGENAL AKSARA, MENJAGA BUDAYA</small></span></Link>
   <nav className="hidden items-center gap-6 lg:flex">{NAV_ITEMS.map(item=><Link key={item.href} href={item.href} className="text-[13px] text-[#e9e2d3] transition hover:text-[#e4c58d]">{item.label}</Link>)}</nav>
   <Link href="/about" className="hidden items-center gap-2 rounded-full bg-[#e4d1a9] px-5 py-3 text-xs font-bold text-[#173c32] transition hover:bg-white lg:flex">Mulai Jelajah <ArrowUpRight size={15}/></Link>
   <button className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Tutup menu":"Buka menu"}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<nav className="border-t border-white/10 bg-[#173c32] px-5 py-4 lg:hidden">{NAV_ITEMS.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block border-b border-white/10 py-3 text-sm last:border-0">{item.label}</Link>)}</nav>}
 </header>
}
