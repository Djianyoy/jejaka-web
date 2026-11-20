"use client";
import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { aksara } from "@/data/aksara";
const timeline = [
  {
    year: "Akar awal",
    title: "Brahmi",
    text: "Salah satu rumpun aksara yang menjadi akar perkembangan berbagai sistem tulisan di Asia Selatan dan Asia Tenggara.",
  },
  {
    year: "Perkembangan",
    title: "Pallawa",
    text: "Aksara Pallawa berpengaruh dalam perkembangan tradisi tulis di Nusantara.",
  },
  {
    year: "Jawa Kuno",
    title: "Kawi",
    text: "Tradisi aksara Kawi berkembang dan digunakan dalam prasasti serta naskah Jawa Kuno.",
  },
  {
    year: "Bentuk baru",
    title: "Aksara Jawa",
    text: "Bentuk Carakan yang dikenal sekarang berkembang dalam tradisi tulis Jawa, dan dikaitkan dengan masa Mataram Islam.",
  },
];
export function AboutPage() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="container py-14 sm:py-20">
      <PageHeading
        eyebrow="KENALI WARISAN NUSANTARA"
        title="Mengenal Aksara Jawa"
        description="Memahami bentuk, aturan, dan perjalanan panjang aksara yang menjadi bagian dari identitas budaya Jawa."
      />
      <section className="grid gap-8 rounded-[28px] bg-[#173c32] p-7 text-[#f5f0e4] md:grid-cols-[.8fr_1.2fr] md:p-10">
        <div>
          <p className="text-xs font-bold tracking-[.18em] text-[#d7bd88]">
            APA ITU AKSARA JAWA?
          </p>
          <p className="jawa mt-5 text-5xl text-[#e1c995]">ꦲꦤꦕꦫꦏ</p>
        </div>
        <div>
          <p className="text-base leading-8 text-[#e0e3d8]">
            Aksara Jawa atau Hanacaraka/Carakan merupakan sistem tulisan
            tradisional untuk menuliskan bahasa Jawa. Pada masa lampau, aksara
            ini juga digunakan untuk menulis bahasa Madura dan Kawi.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#c5d0c4]">
            Aksara Jawa termasuk jenis abugida: setiap huruf dasar memiliki
            vokal inheren /a/. Aksara dibaca dari kiri ke kanan, dan penulisan
            tradisional tidak menggunakan spasi antarkata.
          </p>
        </div>
      </section>
      <section id="sejarah" className="py-16">
        <div className="mb-8">
          <p className="eyebrow">JEJAK PERJALANAN</p>
          <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
            Sejarah & asal-usul
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#77776c]">
            Telusuri tahapan perkembangan tradisi aksara yang membentuk Aksara
            Jawa.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {timeline.map((x, i) => (
            <div
              key={x.title}
              className="relative rounded-2xl border border-[#e4ddce] bg-[#fffdf7] p-5"
            >
              <span className="text-xs font-bold text-[#ad8950]">
                0{i + 1} · {x.year}
              </span>
              <h3 className="display mt-5 text-2xl font-semibold text-[#173c32]">
                {x.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#77776c]">{x.text}</p>
              {i !== 3 && (
                <div className="absolute -right-2 top-8 z-10 hidden size-4 rounded-full border-4 border-[#faf9f5] bg-[#b9975d] md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-[#eee7d8] p-6">
          <div className="flex items-start gap-4">
            <span className="jawa text-3xl text-[#315b4b]">ꦱꦼ</span>
            <div>
              <h3 className="font-bold text-[#173c32]">
                Jejak Jawa Timur: Prasasti Dinoyo
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#68695f]">
                Prasasti Dinoyo berasal dari 682 Saka / 760 M dan ditemukan di
                Malang. Prasasti ini berkaitan dengan Kerajaan Kanjuruhan pada
                masa Raja Gajayana, menggunakan aksara Kawi dan bahasa
                Sanskerta.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="jenis" className="border-t border-[#e4ddce] py-14">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">CARAKAN / NGLEGENA</p>
            <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
              Kenali 20 aksara dasar
            </h2>
            <p className="mt-2 text-sm text-[#77776c]">
              Pilih salah satu aksara untuk melihat bentuknya lebih dekat.
            </p>
          </div>
          <span className="text-xs text-[#8d744e]">4 baris · 5 kolom</span>
        </div>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-10">
          {aksara.map(([char, name], i) => (
            <button
              key={name}
              onClick={() => setSelected(i)}
              className="group rounded-2xl border border-[#e4ddce] bg-[#fffdf7] p-4 text-center transition hover:-translate-y-1 hover:border-[#a88a5b] hover:shadow-md"
            >
              <span className="jawa block text-4xl text-[#173c32]">{char}</span>
              <span className="mt-2 block text-xs font-bold text-[#77776c]">
                {name}
              </span>
            </button>
          ))}
        </div>
      </section>
      <section
        id="fungsi"
        className="grid gap-6 border-t border-[#e4ddce] py-14 md:grid-cols-2"
      >
        <div>
          <p className="eyebrow">ATURAN PENULISAN</p>
          <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
            Aksara dan pasangannya
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#77776c]">
            Selain aksara nglegena, terdapat sandhangan dan pasangan. Sandhangan
            mengubah bunyi vokal atau menutup suku kata, sedangkan pasangan
            digunakan untuk menghilangkan vokal inheren pada aksara sebelumnya
            ketika dua konsonan bertemu.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#eee7d8] p-5">
            <p className="jawa text-4xl text-[#173c32]">ꦏ</p>
            <h3 className="mt-3 font-bold">Aksara nglegena</h3>
            <p className="mt-1 text-xs leading-5 text-[#77776c]">
              Huruf dasar dengan vokal inheren /a/.
            </p>
          </div>
          <div className="rounded-2xl bg-[#173c32] p-5 text-white">
            <p className="jawa text-4xl text-[#e1c995]">꧀ꦏ</p>
            <h3 className="mt-3 font-bold">Pasangan</h3>
            <p className="mt-1 text-xs leading-5 text-[#cbd2c7]">
              Menghilangkan vokal inheren aksara sebelumnya.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-between gap-3 border-t border-[#e4ddce] pt-8">
        <Link href="/fun-fact" className="btn-outline">
          Lanjut: Fun Fact <ArrowRight size={15} />
        </Link>
        <Link href="/praktik-menulis" className="btn-primary">
          Belajar menulis <ArrowRight size={15} />
        </Link>
      </div>
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-5"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-sm rounded-3xl bg-[#fffdf7] p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-[#eee7d8]"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>
            <p className="eyebrow">AKSARA CARAKAN</p>
            <p className="jawa mt-8 text-8xl text-[#173c32]">
              {aksara[selected][0]}
            </p>
            <h3 className="display mt-4 text-3xl font-semibold text-[#173c32]">
              {aksara[selected][1]}
            </h3>
            <p className="mt-2 text-sm text-[#77776c]">
              Bagian dari 20 aksara dasar Aksara Jawa.
            </p>
            <Link href="/praktik-menulis" className="btn-primary mt-7">
              Lihat panduan menulis <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
