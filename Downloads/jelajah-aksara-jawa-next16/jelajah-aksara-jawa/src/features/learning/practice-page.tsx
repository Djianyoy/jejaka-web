"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Play, ArrowRight, BookOpen, PenLine } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
const lessons = [
  {
    id: "prep",
    step: "LANGKAH 01",
    title: "Persiapan menulis",
    desc: "Kenali alat tulis, posisi tangan, arah, dan proporsi tulisan.",
    target: "ꦲꦤꦕꦫꦏ",
    detail: [
      "Siapkan alat tulis dan buku bergaris.",
      "Atur posisi tangan agar nyaman.",
      "Perhatikan arah penulisan dari kiri ke kanan.",
    ],
  },
  {
    id: "basic",
    step: "LANGKAH 02",
    title: "Menulis 20 aksara dasar",
    desc: "Ikuti peragaan bentuk aksara dari Ha–Ka hingga Ma–Nga.",
    target: "ꦲ ꦤ ꦕ ꦫ ꦏ",
    detail: [
      "Amati bentuk dasar setiap aksara.",
      "Perhatikan proporsi dan lengkungan.",
      "Ulangi setiap bentuk secara perlahan.",
    ],
  },
  {
    id: "sandhangan",
    step: "LANGKAH 03",
    title: "Mengenal sandhangan",
    desc: "Pelajari tanda untuk mengubah vokal dan menutup suku kata.",
    target: "ꦏꦶ ꦏꦸ ꦏꦺ",
    detail: [
      "Amati letak sandhangan pada aksara.",
      "Bandingkan perubahan bunyi.",
      "Latih menulis beberapa kombinasi.",
    ],
  },
  {
    id: "pasangan",
    step: "LANGKAH 04",
    title: "Menulis pasangan",
    desc: "Pahami bentuk pasangan dan aturan penggunaannya.",
    target: "꧀ꦏ ꧀ꦤ ꧀ꦱ",
    detail: [
      "Kenali bentuk pasangan.",
      "Perhatikan posisi pasangan.",
      "Coba gabungkan dengan aksara sebelumnya.",
    ],
  },
  {
    id: "words",
    step: "LANGKAH 05",
    title: "Latihan menulis kata",
    desc: "Terapkan bentuk aksara dalam kata sederhana seperti omah, buku, dan sapi.",
    target: "ꦧꦸꦏꦸ",
    detail: [
      "Pilih kata sederhana untuk latihan.",
      "Susun aksara dan sandhangan dengan tepat.",
      "Baca ulang hasil tulisanmu.",
    ],
  },
];
export function PracticePage() {
 const [completed, setCompleted] = useState<string[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("jelajah-practice-progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        queueMicrotask(() => {
          setCompleted(parsed);
        });
      } catch {
        localStorage.removeItem("jelajah-practice-progress");
      } finally {
        
      }
    }
  }, []);

  const mark = () => {
    const next = completed.includes(lessons[active].id)
      ? completed.filter((x) => x !== lessons[active].id)
      : [...completed, lessons[active].id];
    setCompleted(next);
    localStorage.setItem("jelajah-practice-progress", JSON.stringify(next));
  };
  const lesson = lessons[active];
  return (
    <div className="container py-14 sm:py-20">
      <PageHeading
        eyebrow="BELAJAR DENGAN PRAKTIK"
        title="Praktik menulis Aksara Jawa"
        description="Ikuti tahapan belajar dari persiapan hingga menulis kata sederhana. Tandai setiap langkah yang sudah kamu selesaikan."
      />
      <div className="mb-8 rounded-2xl bg-[#eee7d8] p-5">
        <div className="flex items-center justify-between text-xs font-bold text-[#6f7066]">
          <span>PROGRES BELAJARMU</span>
          <span>
            {completed.length} / {lessons.length} SELESAI
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-[#315b4b] transition-all"
            style={{ width: `${(completed.length / lessons.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="space-y-2">
          {lessons.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${active === i ? "border-[#315b4b] bg-[#eaf0e9]" : "border-[#e4ddce] bg-[#fffdf7] hover:border-[#b7a37e]"}`}
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full ${completed.includes(item.id) ? "bg-[#315b4b] text-white" : "bg-[#eee7d8] text-[#8b744e]"}`}
              >
                {completed.includes(item.id) ? (
                  <Check size={17} />
                ) : (
                  <span className="text-xs font-bold">0{i + 1}</span>
                )}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold tracking-wider text-[#a18454]">
                  {item.step}
                </span>
                <span className="mt-1 block text-sm font-bold text-[#173c32]">
                  {item.title}
                </span>
              </span>
            </button>
          ))}
        </aside>
        <section className="overflow-hidden rounded-[26px] border border-[#e4ddce] bg-[#fffdf7]">
          <div className="relative grid aspect-video place-items-center bg-[#173c32]">
            <div className="pattern absolute inset-0 opacity-30" />
            <div className="relative text-center">
              <span className="jawa block text-5xl leading-[1.8] text-[#e1c995] sm:text-6xl">
                {lesson.target}
              </span>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white">
                <Play size={13} /> Video peraga segera hadir
              </span>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold tracking-widest text-[#a18454]">
              {lesson.step}
            </p>
            <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
              {lesson.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#77776c]">
              {lesson.desc}
            </p>
            <div className="mt-6 rounded-2xl bg-[#f3eee4] p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#173c32]">
                <BookOpen size={16} /> Ringkasan langkah
              </h3>
              <ol className="mt-3 space-y-2">
                {lesson.detail.map((d, i) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-6 text-[#77776c]"
                  >
                    <span className="font-bold text-[#a18454]">{i + 1}.</span>
                    {d}
                  </li>
                ))}
              </ol>
            </div>
            <button
              onClick={mark}
              className={`mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-bold transition ${completed.includes(lesson.id) ? "border border-[#315b4b] text-[#315b4b]" : "bg-[#173c32] text-white hover:bg-[#244b40]"}`}
            >
              {completed.includes(lesson.id) ? (
                <>
                  <Check size={16} /> Sudah ditandai selesai · Batalkan
                </>
              ) : (
                <>
                  <PenLine size={16} /> Tandai selesai
                </>
              )}
            </button>
            <div className="mt-5 flex justify-between gap-3">
              <button
                disabled={active === 0}
                onClick={() => setActive(active - 1)}
                className="text-xs font-bold text-[#77776c] disabled:opacity-30"
              >
                ← Langkah sebelumnya
              </button>
              <button
                disabled={active === lessons.length - 1}
                onClick={() => setActive(active + 1)}
                className="text-xs font-bold text-[#315b4b] disabled:opacity-30"
              >
                Langkah berikutnya →
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#eee7d8] p-6">
        <div>
          <h3 className="font-bold text-[#173c32]">
            Siap menguji kemampuanmu?
          </h3>
          <p className="mt-1 text-sm text-[#77776c]">
            Coba permainan Tebak Kata setelah berlatih menulis.
          </p>
        </div>
        <Link href="/tebak-kata" className="btn-primary">
          Main Tebak Kata <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
