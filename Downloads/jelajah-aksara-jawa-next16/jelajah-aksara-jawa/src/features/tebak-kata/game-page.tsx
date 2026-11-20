"use client";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { latinToJawa, jawaToLatin } from "@/data/words";
type Question = {
  prompt: string;
  answer: string;
  options: string[];
  hint: string;
};
function makeQuestions(mode: "latin" | "jawa"): Question[] {
  const source =
    mode === "latin"
      ? latinToJawa.map(([word, jawa]) => ({
          prompt: word,
          answer: jawa,
          hint: "Pilih penulisan Aksara Jawa yang tepat.",
        }))
      : jawaToLatin.map(([word, jawa, hint]) => ({
          prompt: jawa,
          answer: word,
          hint,
        }));
  return source.map((item, i) => {
    const distractors = source
      .filter((x) => x.answer !== item.answer)
      .sort((a, b) => a.answer.localeCompare(b.answer))
      .slice(i % 3, (i % 3) + 3)
      .map((x) => x.answer);
    const options = [item.answer, ...distractors].sort(
      (a, b) => ((a.charCodeAt(0) + i) % 7) - ((b.charCodeAt(0) + i) % 7),
    );
    return {
      prompt: item.prompt,
      answer: item.answer,
      options,
      hint: item.hint,
    };
  });
}
export function GamePage() {
  const [mode, setMode] = useState<"latin" | "jawa" | null>(null);
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const questions = useMemo(() => (mode ? makeQuestions(mode) : []), [mode]);
  const current = questions[index];
  const score = answers.reduce(
    (n, a, i) => n + (a === questions[i]?.answer ? 1 : 0),
    0,
  );
  const start = (m: "latin" | "jawa") => {
    setMode(m);
    setIndex(0);
    setChoice(null);
    setAnswers([]);
    setDone(false);
  };
  const next = () => {
    if (!choice) return;
    const list = [...answers, choice];
    setAnswers(list);
    if (index === questions.length - 1) setDone(true);
    else {
      setIndex(index + 1);
      setChoice(null);
    }
  };
  const reset = () => {
    setMode(null);
    setIndex(0);
    setChoice(null);
    setAnswers([]);
    setDone(false);
  };
  return (
    <div className="container py-14 sm:py-20">
      <PageHeading
        eyebrow="MAIN & BELAJAR"
        title="Tebak Kata Aksara Jawa"
        description="Latih kemampuan membaca dan mengenali Aksara Jawa melalui dua mode permainan sederhana."
      />
      {!mode ? (
        <div className="grid gap-4 md:grid-cols-2">
          <button
            onClick={() => start("latin")}
            className="rounded-[26px] bg-[#173c32] p-8 text-left text-[#f5f0e4] transition hover:-translate-y-1"
          >
            <span className="text-xs font-bold tracking-widest text-[#e1c995]">
              MODE 01
            </span>
            <p className="jawa mt-8 text-5xl text-[#e1c995]">ꦧꦸꦏꦸ</p>
            <h2 className="display mt-5 text-3xl font-semibold">
              Latin ke Aksara Jawa
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#cbd2c7]">
              Lihat kata dalam huruf Latin, lalu pilih bentuk Aksara Jawa yang
              sesuai.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#e1c995]">
              Main mode ini <ArrowRight size={16} />
            </span>
          </button>
          <button
            onClick={() => start("jawa")}
            className="rounded-[26px] border border-[#e4ddce] bg-[#eee7d8] p-8 text-left transition hover:-translate-y-1"
          >
            <span className="text-xs font-bold tracking-widest text-[#947649]">
              MODE 02
            </span>
            <p className="jawa mt-8 text-5xl text-[#315b4b]">ꦱꦥꦸ</p>
            <h2 className="display mt-5 text-3xl font-semibold text-[#173c32]">
              Aksara Jawa ke Latin
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#77776c]">
              Baca bentuk Aksara Jawa, lalu tebak kata Latin yang tepat.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#315b4b]">
              Main mode ini <ArrowRight size={16} />
            </span>
          </button>
        </div>
      ) : done ? (
        <div className="mx-auto max-w-2xl rounded-[28px] bg-[#173c32] p-9 text-center text-[#f5f0e4]">
          <Sparkles className="mx-auto text-[#e1c995]" size={36} />
          <p className="mt-5 text-xs font-bold tracking-[.2em] text-[#e1c995]">
            PERMAINAN SELESAI
          </p>
          <h2 className="display mt-3 text-5xl font-semibold">
            {score}
            <span className="text-2xl text-[#cbd2c7]">
              {" "}
              / {questions.length}
            </span>
          </h2>
          <p className="mt-3 text-sm text-[#cbd2c7]">
            {score >= 8
              ? "Hebat! Kamu makin akrab dengan Aksara Jawa."
              : "Terus berlatih, ya. Setiap percobaan membuatmu semakin lancar."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button onClick={() => start(mode)} className="btn-primary">
              <RotateCcw size={15} /> Main lagi
            </button>
            <button
              onClick={reset}
              className="btn-outline !border-white/30 !text-white"
            >
              Ganti mode
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl">
          <div className="mb-5 flex justify-between text-xs font-bold text-[#77776c]">
            <span>
              {mode === "latin" ? "LATIN → AKSARA JAWA" : "AKSARA JAWA → LATIN"}
            </span>
            <span>
              {index + 1} / {questions.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#e9e3d7]">
            <div
              className="h-full bg-[#315b4b]"
              style={{ width: `${((index + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="mt-6 rounded-[26px] border border-[#e4ddce] bg-[#fffdf7] p-7 text-center sm:p-10">
            <p className="text-xs font-bold tracking-widest text-[#a18454]">
              TEBAK KATA INI
            </p>
            <p
              className={`${mode === "jawa" ? "jawa text-6xl" : "display text-4xl"} mt-8 font-semibold text-[#173c32]`}
            >
              {current.prompt}
            </p>
            <p className="mt-3 text-xs text-[#8a897e]">{current.hint}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.options.map((option, i) => (
                <button
                  key={option}
                  onClick={() => setChoice(option)}
                  className={`min-h-14 rounded-xl border px-3 text-center font-semibold transition ${mode === "latin" ? "jawa text-2xl" : "text-sm"} ${choice === option ? "border-[#315b4b] bg-[#eaf0e9] text-[#173c32]" : "border-[#e7e0d3] hover:border-[#b7a37e]"}`}
                >
                  <span className="mr-2 font-sans text-[10px] text-[#a18454]">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={next}
              disabled={!choice}
              className="btn-primary mt-8 w-full disabled:opacity-40"
            >
              {index === questions.length - 1 ? "Lihat skor" : "Jawab & lanjut"}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
