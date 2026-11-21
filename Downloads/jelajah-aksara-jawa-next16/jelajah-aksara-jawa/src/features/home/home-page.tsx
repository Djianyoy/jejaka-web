
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

const exploreItems = [
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
];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const leftCloudRef = useRef<HTMLDivElement>(null);
  const rightCloudRef = useRef<HTMLDivElement>(null);
  const gununganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const leftCloud = leftCloudRef.current;
      const rightCloud = rightCloudRef.current;
      const gunungan = gununganRef.current;

      if (!hero || !leftCloud || !rightCloud || !gunungan) return;

      const heroTitle = hero.querySelector("[data-hero-title]");
      const heroSubtitle = hero.querySelector("[data-hero-subtitle]");
      const heroButtons = hero.querySelectorAll(
      "[data-hero-buttons] > *"
      );
      const heroStats = hero.querySelectorAll("[data-hero-stat]");
      const heroInfinity = hero.querySelector("[data-counter-infinity]");
      const heroVisual = hero.querySelector("[data-hero-visual]");

      
      gsap.set(
        [
            heroTitle,
            heroSubtitle,
            ...Array.from(heroButtons),
            ...Array.from(heroStats),
            heroVisual,
        ],
        {
            autoAlpha: 0,
        }
      );

      gsap.set(heroTitle, {
        y: 55,
        scale: 0.95,
        });

        gsap.set(heroSubtitle, {
        y: 35,
        });

        gsap.set(heroButtons, {
        y: 25,
        scale: 0.95,
        });

        gsap.set(heroStats, {
        y: 30,
        });

        gsap.set(heroVisual, {
        y: 35,
        scale: 0.94,
      });

      let counterPlayed = false;

        const startCounter = () => {
        if (counterPlayed) return;

        counterPlayed = true;

        hero.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
            const target = Number(el.dataset.counter);
            const counter = { value: 0 };

            gsap.to(counter, {
            value: target,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => {
                el.textContent = Math.round(counter.value).toString();
            },
            });
        });

        if (heroInfinity) {
            gsap.fromTo(
            heroInfinity,
            {
                autoAlpha: 0,
                scale: 0.4,
                rotation: -90,
            },
            {
                autoAlpha: 1,
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.5)",
            }
            );
        }
        };

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });


        if (gunungan) {
        gsap.set(gunungan, {
            autoAlpha: 0,
            y: 30,
            scale: 0.95,
            opacity: 0
        });

        gsap.to(gunungan, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: hero,
            start: "top 70%",
            once: true,
            },
            onComplete: () => {
            gsap.to(gunungan, {
                y: -12,
                duration: 1.2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
            },
        });
        }

      introTimeline
        .to(
          leftCloud,
          {
            xPercent: -105,
            ease: "none",
          },
          0
        )
        .to(
          rightCloud,
          {
            xPercent: 105,
            ease: "none",
          },
          0
        )
        .to(
            heroTitle,
            {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            },
            0.25
        )
        .to(
            heroSubtitle,
            {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            },
            0.42
        )
        .to(
            heroButtons,
            {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.15,
            ease: "back.out(1.7)",
            },
            0.55
        )
        .to(
        heroStats,
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            onStart: startCounter,
        },
        0.72
        )
        .to(
            heroVisual,
            {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            },
            0.55
        );
      
      const sections = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]",
        pageRef.current
      );

      sections.forEach((section) => {
        const content = section.querySelector(".container");

        if (!content) return;

        gsap.fromTo(
          content,
          {
            autoAlpha: 0,
            y: 45,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const staggerSection = pageRef.current?.querySelector(
        "[data-stagger-section]"
      );

      if (staggerSection) {
        const cards = staggerSection.querySelectorAll(
          "[data-stagger-card]"
        );

        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: -45,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.25,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: staggerSection,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <div
        ref={leftCloudRef}
        className="pointer-events-none fixed inset-0 z-[99999] w-1/2"
        style={{
          backgroundImage: "url('/images/awan-home.jpg')",
          backgroundSize: "200% 100%",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        ref={rightCloudRef}
        className="pointer-events-none fixed inset-y-0 right-0 z-[99999] w-1/2"
        style={{
          backgroundImage: "url('/images/awan-home.jpg')",
          backgroundSize: "200% 100%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />

      
        <section
        ref={heroRef}
        className="relative isolate min-h-screen overflow-hidden bg-[#173c32] text-[#f5f0e4]"
        >
        <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
            backgroundImage: "url('/images/motif-batik.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
            }}
        />

        <div className="pointer-events-none absolute inset-0 z-0 bg-[#173c32]/30" />

        <div
            ref={gununganRef}
            className="absolute left-1/2 top-1/3 z-0 w-[420px] -translate-x-1/2 -translate-y-1/2 lg:left-1/4 lg:top-1/2"
        >
            <img
            src="/images/gunungan.webp"
            alt="Gunungan"
            className="h-auto w-full opacity-50"
            />
        </div>

        <div className="container relative z-10 grid min-h-screen items-center gap-12 py-30 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
            <div data-hero-content>
            <h1
                data-hero-title
                className="display max-w-2xl text-5xl leading-[1.08] font-semibold sm:text-6xl lg:text-[72px]"
            >
                Jelajah <span className="text-[#dfc58f]">Aksara</span>
                <br />
                Jawa.
            </h1>

            <p
                data-hero-subtitle
                className="mt-7 max-w-xl text-lg leading-8 text-[#d5d9ce]"
            >
                Warisan budaya, identitas, dan kekayaan bahasa yang perlu kita
                kenali serta lestarikan.
            </p>

            <div data-hero-buttons className="mt-9 flex flex-wrap gap-3">
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

            <div
                data-hero-stats
                className="mt-12 grid grid-cols-3 gap-3 border-t border-white/15 pt-6"
            >
                <div
                data-hero-stat
                className="flex w-full flex-col items-center justify-center rounded-xl bg-[#e4ce9f] py-3 text-forest"
                >
                <p className="display text-3xl font-semibold">
                    <span data-counter="20">0</span>
                </p>
                <p className="mt-1 text-center text-xs text-forest-2">
                    Aksara dasar
                </p>
                </div>

                <div
                data-hero-stat
                className="flex w-full flex-col items-center justify-center rounded-xl bg-[#e4ce9f] py-3 text-forest"
                >
                <p className="display text-3xl font-semibold">
                    <span data-counter="8">0</span>
                </p>
                <p className="mt-1 text-center text-xs text-forest-2">
                    Ruang jelajah
                </p>
                </div>

                <div
                data-hero-stat
                className="flex w-full flex-col items-center justify-center rounded-xl bg-[#e4ce9f] py-3 text-forest"
                >
                <p className="display text-3xl font-semibold">
                    <span data-counter-infinity>∞</span>
                </p>
                <p className="mt-1 text-center text-xs text-forest-2">
                    Cerita budaya
                </p>
                </div>
            </div>
            </div>

            <div
            data-hero-visual
            className="relative mx-auto w-full max-w-[520px]"
            >
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

                    <p className="display mt-3 text-3xl italic">
                    Hanacaraka
                    </p>

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


      <section className="section bg-[#faf9f5]" data-reveal>
        <div className="container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="display mt-3 text-4xl leading-tight font-semibold text-[#173c32]">
              Apa itu Aksara Jawa?
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-[#66685e]">
              Aksara Jawa merupakan salah satu warisan budaya Nusantara yang
              digunakan untuk menuliskan bahasa Jawa. Aksara ini memiliki
              bentuk dan aturan penulisan tersendiri yang menjadi bagian dari
              kekayaan budaya masyarakat Jawa.
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
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-forest py-3 text-sm font-bold text-white"
            >
              <p className="text-cream">Lihat semua aksara</p>
              <ArrowRight size={15} color="white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mengenal Lebih Dekat */}
      <section
        className="bg-[#eee7d8] py-16"
        data-stagger-section
      >
        <div className="container">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="display mt-2 text-3xl font-semibold text-[#173c32]">
                Mengenal lebih dekat
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#77776c]">
              Mulai dari perjalanan sejarah hingga peran aksara dalam
              kehidupan masa kini.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {exploreItems.map((x) => (
              <Link
                key={x.n}
                href={x.h}
                data-stagger-card
                className="group rounded-2xl border border-[#e0d8c8] bg-[#fffdf7] p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#b18d54]">
                    {x.n}
                  </span>

                  <x.i className="text-[#315b4b]" size={20} />
                </div>

                <h3 className="mt-7 font-bold text-[#263d33]">{x.t}</h3>

                <p className="mt-2 text-sm leading-6 text-[#77776c]">
                  {x.d}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#315b4b]">
                  Jelajahi <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cerita di Balik Aksara */}
      <section className="section" data-reveal>
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
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
                className={`overflow-hidden rounded-[22px] p-6 ${
                  i === 1
                    ? "bg-[#eee7d8]"
                    : "bg-[#173c32] text-[#f5f0e4]"
                }`}
              >
                <span
                  className={`text-[10px] font-bold tracking-[.18em] ${
                    i === 1 ? "text-[#927347]" : "text-[#d7bd88]"
                  }`}
                >
                  {f.tag}
                </span>

                <p
                  className={`jawa mt-7 text-4xl ${
                    i === 1 ? "text-[#315b4b]" : "text-[#e3ca96]"
                  }`}
                >
                  {f.symbol}
                </p>

                <h3 className="mt-6 text-xl font-bold">{f.title}</h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    i === 1 ? "text-[#6d6c61]" : "text-[#d1d8ce]"
                  }`}
                >
                  {f.body}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/fun-fact"
            className="btn-outline mt-5 w-full sm:hidden"
          >
            Jelajahi semua fakta
          </Link>
        </div>
      </section>

      {/* Belajar Sambil Bermain */}
      <section
        className="bg-[#173c32] py-16 text-[#f5f0e4]"
        data-reveal
      >
        <div className="container">
          <div className="mx-auto mb-10 max-w-xl text-center">
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
        </div>
      </section>
    </div>
  );
}
