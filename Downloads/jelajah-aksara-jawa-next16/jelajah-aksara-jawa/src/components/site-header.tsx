"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
export function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#173c32]/95 backdrop-blur-xl text-[#f8f2e4]">
  <div className="container gap-4 flex h-[76px] items-center justify-between">
   <Link href="/" className="flex items-center gap-2" onClick={()=>setOpen(false)}>
        <Image src={"/logo.png"} alt="Logo Navbar" width={500} height={500} className="w-[15%]"/>
        <span className="leading-tight">
            <strong className="block text-sm tracking-wide text-[#f8f2e4] ">
                Jelajah Aksara Jawa
            </strong>
            <small className="text-[10px] tracking-[.2em] text-[#d5c8ac]">
                MENGENAL AKSARA, MENJAGA BUDAYA
            </small>
        </span>
   </Link>
   <nav className="hidden items-center gap-6 lg:flex">{NAV_ITEMS.map(item=>
    <Link key={item.href} href={item.href} className="text-[13px] text-[#f8f2e4]  transition hover:text-[#e4c58d]">{item.label}</Link>)}
   </nav>
   <Link href="/about" className="hidden items-center gap-2 rounded-full bg-[#1b5e4c] px-5 py-3 text-xs font-bold  transition hover:bg-[#133b31] lg:flex">
    Jelajah 
    <ArrowUpRight size={15}/>
   </Link>
   <button className="grid size-11 place-items-center rounded-full border text-[#f8f2e4]  border-white/20 lg:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Tutup menu":"Buka menu"}>
        {open?<X/>:<Menu/>}
   </button>
  </div>
  {open&&<nav className="border-t border-white/10 bg-[#173c32] px-5 py-4 lg:hidden">{NAV_ITEMS.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block border-b border-white/10 py-3 text-sm last:border-0 text-[#f8f2e4] ">{item.label}</Link>)}</nav>}
 </header>
}
