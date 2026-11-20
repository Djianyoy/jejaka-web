import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Fingerprint,
  Users,
  ScrollText,
  Signpost,
  Laptop,
} from "lucide-react";
import { PageHeading } from "@/components/page-heading";
export const metadata: Metadata = {
  title: "Pentingnya Melestarikan Aksara Jawa",
};
const reasons = [
  {
    n: "01",
    title: "Menjaga identitas dan warisan budaya",
    body: "Aksara Jawa merupakan bagian dari identitas budaya daerah. Mempelajarinya berarti ikut menjaga peninggalan yang diwariskan lintas generasi.",
    icon: Fingerprint,
  },
  {
    n: "02",
    title: "Mengenalkan budaya kepada generasi muda",
    body: "Pengenalan sejak dini membantu generasi muda memahami kekayaan tradisi dan merasa lebih dekat dengan budaya Jawa.",
    icon: Users,
  },
  {
    n: "03",
    title: "Memahami peninggalan sejarah",
    body: "Kemampuan mengenali aksara membantu kita mendekati naskah, prasasti, dan karya sastra yang menyimpan cerita masa lalu.",
    icon: ScrollText,
  },
  {
    n: "04",
    title: "Menghidupkan aksara di ruang publik",
    body: "Aksara Jawa dapat hadir tidak hanya di sekolah, tetapi juga pada nama jalan, papan informasi, dan kegiatan budaya.",
    icon: Signpost,
  },
  {
    n: "05",
    title: "Membawa pelestarian ke era digital",
    body: "Website, aplikasi, dan media sosial dapat menjadi ruang baru untuk belajar, berbagi, dan memperkenalkan Aksara Jawa.",
    icon: Laptop,
  },
];
export default function Page() {
  return (
    <div className="container py-14 sm:py-20">
      <PageHeading
        eyebrow="WARISAN YANG PERLU DIJAGA"
        title="Mengapa Aksara Jawa penting?"
        description="Pelestarian bukan hanya tentang mengingat masa lalu, tetapi juga memastikan budaya tetap hidup dan relevan di masa depan."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {reasons.map((r, i) => (
          <article
            key={r.n}
            className={`rounded-[24px] p-7 ${i === 0 || i === 4 ? "bg-[#173c32] text-[#f5f0e4]" : "border border-[#e4ddce] bg-[#fffdf7]"}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-bold tracking-widest ${i === 0 || i === 4 ? "text-[#d7bd88]" : "text-[#a18454]"}`}
              >
                {r.n} / ALASAN
              </span>
              <r.icon
                size={25}
                className={
                  i === 0 || i === 4 ? "text-[#e1c995]" : "text-[#315b4b]"
                }
              />
            </div>
            <h2 className="display mt-8 max-w-sm text-2xl font-semibold">
              {r.title}
            </h2>
            <p
              className={`mt-3 text-sm leading-7 ${i === 0 || i === 4 ? "text-[#d1d8ce]" : "text-[#77776c]"}`}
            >
              {r.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-[26px] bg-[#eee7d8] p-7 sm:p-10">
        <p className="jawa text-4xl text-[#315b4b]">ꦲꦤꦕꦫꦏ</p>
        <h2 className="display mt-4 text-3xl font-semibold text-[#173c32]">
          Budaya akan terus hidup saat kita ikut menjaganya.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#77776c]">
          Mulai dari mengenal bentuk aksara, mencoba membacanya, hingga
          membagikan pengetahuan kepada orang lain. Langkah kecil dapat menjadi
          bagian dari pelestarian.
        </p>
        <Link href="/kuis" className="btn-primary mt-6">
          Uji pengetahuanmu <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
