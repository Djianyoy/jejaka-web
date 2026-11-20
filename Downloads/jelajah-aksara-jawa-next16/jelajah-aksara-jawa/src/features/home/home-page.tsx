import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  PlayCircle,
  Sparkles,
  Feather,
  Landmark,
} from "lucide-react";
import { aksara } from "@/data/aksara";
import { facts } from "@/data/facts";
const games = [
  {
    title: "Kuis Aksara Jawa",
    desc: "Uji pemahamanmu lewat 10 pertanyaan",
    href: "/kuis",
    icon: BookOpen,
    meta: "10 SOAL",
  },
  {
    title: "Tebak Kata",
    desc: "Kenali aksara lewat permainan kata",
    href: "/tebak-kata",
    icon: Gamepad2,
    meta: "2 MODE",
  },
  {
    title: "Praktik Menulis",
    desc: "Ikuti panduan menulis langkah demi langkah",
    href: "/praktik-menulis",
    icon: Feather,
    meta: "VIDEO PERAGA",
  },
];
export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#173c32] text-[#f5f0e4] min-h-[720px]">
        <div className="pattern absolute inset-0 opacity-30" />
        <div className="container relative grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <h1 className="display max-w-2xl text-5xl leading-[1.08] font-semibold sm:text-6xl lg:text-[72px]">
              Jelajah <span className="text-[#dfc58f]">Aksara</span>
              <br />
              Jawa.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#d5d9ce]">
              Warisan budaya, identitas, dan kekayaan bahasa yang perlu kita
              kenali serta lestarikan.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Mulai Belajar Aksara Jawa <ArrowRight size={17} />
              </Link>
              <Link
                href="/fun-fact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold hover:bg-white/10"
              >
                Temukan Fakta Unik
              </Link>
            </div>
            <div className="mt-12 flex gap-8 border-t border-white/15 pt-6">
              <div>
                <p className="display text-3xl text-[#e4ce9f]">20</p>
                <p className="mt-1 text-xs text-[#c5cabb]">Aksara dasar</p>
              </div>
              <div>
                <p className="display text-3xl text-[#e4ce9f]">8</p>
                <p className="mt-1 text-xs text-[#c5cabb]">Ruang jelajah</p>
              </div>
              <div>
                <p className="display text-3xl text-[#e4ce9f]">∞</p>
                <p className="mt-1 text-xs text-[#c5cabb]">Cerita budaya</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-5 rounded-[36px] border border-[#d8bd87]/25" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#e7d9bb] p-3 shadow-2xl">
              <div className="relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-[20px] bg-[radial-gradient(ellipse_at_top,#d8c49a,#9e8056_65%,#6d5539)] p-7 text-[#342d21]">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg,transparent,transparent 9px,#fff 10px,transparent 11px)",
                  }}
                />
                <div className="relative flex justify-between text-[10px] font-bold tracking-[.2em]">
                  <span>ꦲꦤꦕꦫꦏ</span>
                  <span>EST. CULTURE</span>
                </div>
                <div className="relative py-10 text-center">
                  <p className="jawa text-6xl leading-[1.8] sm:text-7xl">
                    ꦲꦤꦕꦫꦏ
                  </p>
                  <p className="display mt-3 text-3xl italic">Hanacaraka</p>
                  <p className="mt-2 text-xs tracking-[.2em]">
                    AKSARA · BUDAYA · CERITA
                  </p>
                </div>
                <div className="relative flex items-end justify-between border-t border-[#51422e]/30 pt-4">
                  <span className="text-[10px] leading-5">
                    Mengenal warisan
                    <br />
                    lewat aksara.
                  </span>
                  <span className="jawa text-3xl">ꦗꦮ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-[#faf9f5]">
        <div className="container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">01 / MENGENAL</p>
            <h2 className="display mt-3 text-4xl leading-tight font-semibold text-[#173c32]">
              Apa itu Aksara Jawa?
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#66685e]">
              Aksara Jawa merupakan salah satu warisan budaya Nusantara yang
              digunakan untuk menuliskan bahasa Jawa. Aksara ini memiliki bentuk
              dan aturan penulisan tersendiri yang menjadi bagian dari kekayaan
              budaya masyarakat Jawa.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#315b4b]"
            >
              Kenali lebih dekat <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-[26px] border border-[#e4ddce] bg-[#f2ecdf] p-5 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-[.15em] text-[#8d744e]">
                  KENALI 20 AKSARA DASAR
                </p>
                <p className="mt-1 text-sm text-[#77776c]">
                  Aksara Carakan · Nglegena
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#315b4b]">
                4 × 5
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {aksara.map(([char, name]) => (
                <div
                  key={name}
                  className="rounded-xl border border-[#e5dece] bg-[#fffdf7] px-1 py-3 text-center"
                >
                  <p className="jawa text-3xl text-[#173c32] sm:text-4xl">
                    {char}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-[#77776c]">
                    {name}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#1f6f5a] py-3 text-sm font-bold text-white"
            >
              Lihat semua aksara <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#eee7d8] py-16">
        <div className="container">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">02 / TELUSURI</p>
              <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
                Mengenal lebih dekat
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#77776c]">
              Mulai dari perjalanan sejarah hingga peran aksara dalam kehidupan
              masa kini.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Sejarah & Asal-usul",
                d: "Jejak perjalanan aksara dari masa ke masa",
                h: "/about#sejarah",
                i: Landmark,
              },
              {
                n: "02",
                t: "Jenis-jenis Aksara",
                d: "Kenali carakan, sandhangan, dan pasangan",
                h: "/about#jenis",
                i: BookOpen,
              },
              {
                n: "03",
                t: "Fungsi & Penggunaan",
                d: "Aksara dalam bahasa dan kehidupan",
                h: "/about#fungsi",
                i: Feather,
              },
              {
                n: "04",
                t: "Pelestarian Budaya",
                d: "Menjaga warisan melalui generasi",
                h: "/pentingnya",
                i: Sparkles,
              },
            ].map((x) => (
              <Link
                key={x.n}
                href={x.h}
                className="group rounded-2xl border border-[#e0d8c8] bg-[#fffdf7] p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#b18d54]">
                    {x.n}
                  </span>
                  <x.i className="text-[#315b4b]" size={20} />
                </div>
                <h3 className="mt-7 font-bold text-[#263d33]">{x.t}</h3>
                <p className="mt-2 text-sm leading-6 text-[#77776c]">{x.d}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#315b4b]">
                  Jelajahi <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="eyebrow">03 / DID YOU KNOW?</p>
              <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
                Cerita di balik aksara
              </h2>
            </div>
            <Link
              href="/fun-fact"
              className="hidden items-center gap-2 text-sm font-bold text-[#315b4b] sm:flex"
            >
              Semua fakta <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {facts.slice(0, 3).map((f, i) => (
              <article
                key={f.title}
                className={`overflow-hidden rounded-[22px] p-6 ${i === 1 ? "bg-[#eee7d8]" : "bg-[#173c32] text-[#f5f0e4]"}`}
              >
                <span
                  className={`text-[10px] font-bold tracking-[.18em] ${i === 1 ? "text-[#927347]" : "text-[#d7bd88]"}`}
                >
                  {f.tag}
                </span>
                <p
                  className={`jawa mt-7 text-4xl ${i === 1 ? "text-[#315b4b]" : "text-[#e3ca96]"}`}
                >
                  {f.symbol}
                </p>
                <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
                <p
                  className={`mt-3 text-sm leading-7 ${i === 1 ? "text-[#6d6c61]" : "text-[#d1d8ce]"}`}
                >
                  {f.body}
                </p>
              </article>
            ))}
          </div>
          <Link href="/fun-fact" className="btn-outline mt-5 w-full sm:hidden">
            Jelajahi semua fakta
          </Link>
        </div>
      </section>
      <section className="bg-[#173c32] py-16 text-[#f5f0e4]">
        <div className="container">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="eyebrow !text-[#d7bd88]">04 / BELAJAR AKTIF</p>
            <h2 className="display mt-3 text-4xl font-semibold">
              Yuk, belajar sambil bermain!
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#cbd2c7]">
              Pahami Aksara Jawa dengan pengalaman belajar yang lebih seru dan
              interaktif.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {games.map(({ title, desc, href, icon: Icon, meta }) => (
              <Link
                href={href}
                key={href}
                className="group rounded-2xl border border-white/15 bg-white/[.06] p-6 transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#e1c995]/15 px-3 py-1 text-[10px] font-bold tracking-wider text-[#e1c995]">
                    {meta}
                  </span>
                  <Icon size={22} className="text-[#e1c995]" />
                </div>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-[#cbd2c7]">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e1c995]">
                  Mulai sekarang <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              href="/video"
              className="inline-flex items-center gap-2 text-sm text-[#e1c995]"
            >
              <PlayCircle size={17} /> Lihat video pembelajaran
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
