"use client";
import { useState } from "react";
import { PlayCircle, Clock3, Video } from "lucide-react";
import { PageHeading } from "@/shared/components/page-heading";
const categories = [
  "Semua",
  "Pengenalan Aksara Jawa",
  "20 Aksara Dasar",
  "Cara Membaca",
  "Sandhangan & Pasangan",
  "Penggunaan Sehari-hari",
];
const videos = [
  {
    title: "Mengenal Aksara Jawa",
    category: categories[1],
    duration: "—",
    desc: "Pengantar sejarah, fungsi, dan karakteristik Aksara Jawa.",
  },
  {
    title: "Pengenalan 20 Aksara Dasar",
    category: categories[2],
    duration: "—",
    desc: "Mengenal bentuk dan nama aksara Carakan dari Ha hingga Nga.",
  },
  {
    title: "Cara Membaca Aksara Jawa",
    category: categories[3],
    duration: "—",
    desc: "Belajar membaca rangkaian aksara dan memahami vokal inheren.",
  },
  {
    title: "Mengenal Sandhangan dan Pasangan",
    category: categories[4],
    duration: "—",
    desc: "Memahami tanda vokal dan aturan penggunaan pasangan.",
  },
  {
    title: "Aksara Jawa dalam Kehidupan Sehari-hari",
    category: categories[5],
    duration: "—",
    desc: "Melihat penggunaan Aksara Jawa dalam konteks budaya masa kini.",
  },
];
export function VideoPage() {
  const [filter, setFilter] = useState("Semua");
  const [active, setActive] = useState<string | null>(null);
  const shown = videos.filter(
    (v) => filter === "Semua" || v.category === filter,
  );
  return (
    <div className="container py-14 sm:py-20">
      <PageHeading
        eyebrow="RUANG AUDIOVISUAL"
        title="Video pembelajaran"
        description="Pelajari Aksara Jawa melalui materi audiovisual yang disusun berdasarkan topik, dari pengenalan hingga penggunaannya."
      />
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold transition ${filter === c ? "bg-[#173c32] text-white" : "border border-[#e4ddce] bg-[#fffdf7] text-[#77776c] hover:border-[#a88a5b]"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((v) => (
          <article
            key={v.title}
            className="overflow-hidden rounded-[22px] border border-[#e4ddce] bg-[#fffdf7]"
          >
            <div className="relative grid aspect-[16/9] place-items-center overflow-hidden bg-[#173c32]">
              <div className="pattern absolute inset-0 opacity-30" />
              <span className="jawa relative text-5xl text-[#e1c995]">
                ꦲꦤꦕꦫꦏ
              </span>
              <button
                onClick={() => setActive(v.title)}
                className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-[#e1c995] text-[#173c32]"
                aria-label={`Lihat ${v.title}`}
              >
                <PlayCircle size={21} />
              </button>
              <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[10px] font-bold text-white">
                VIDEO MATERI
              </span>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold tracking-widest text-[#a18454]">
                {v.category}
              </p>
              <h2 className="mt-2 text-lg font-bold text-[#173c32]">
                {v.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#77776c]">{v.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#eee8dc] pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#8b897e]">
                  <Clock3 size={14} /> Durasi menyusul
                </span>
                <button
                  onClick={() => setActive(v.title)}
                  className="text-xs font-bold text-[#315b4b]"
                >
                  Lihat detail
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-5"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-[#fffdf7] p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid aspect-video place-items-center rounded-2xl bg-[#173c32]">
              <Video size={42} className="text-[#e1c995]" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-[#173c32]">{active}</h2>
            <p className="mt-2 text-sm leading-6 text-[#77776c]">
              Video dari tim konten belum tersedia. Bagian ini siap dihubungkan
              ke URL YouTube atau berkas video setelah materi final diberikan.
            </p>
            <button
              onClick={() => setActive(null)}
              className="btn-primary mt-5 w-full"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
