"use client";
import { useState } from "react";
import { ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { quizQuestions } from "@/data/quiz";
export function QuizPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const score = answers.reduce(
    (sum, a, i) => sum + (a === quizQuestions[i].answer ? 1 : 0),
    0,
  );
  const restart = () => {
    setStarted(false);
    setStep(0);
    setChoice(null);
    setAnswers([]);
    setFinished(false);
  };
  const next = () => {
    if (choice === null) return;
    const updated = [...answers, choice];
    setAnswers(updated);
    if (step === quizQuestions.length - 1) {
      setFinished(true);
    } else {
      setStep(step + 1);
      setChoice(null);
    }
  };
  return (
    <div className="container py-14 sm:py-20">
      <PageHeading
        eyebrow="UJI PEMAHAMANMU"
        title="Kuis Aksara Jawa"
        description="Sudah mengenal aksara? Saatnya menguji pengetahuanmu melalui 10 pertanyaan singkat."
      />
      {!started ? (
        <div className="mx-auto max-w-3xl rounded-[28px] bg-[#173c32] p-8 text-center text-[#f5f0e4] sm:p-12">
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#e1c995]/15">
            <Trophy size={35} className="text-[#e1c995]" />
          </div>
          <p className="mt-7 text-xs font-bold tracking-[.2em] text-[#e1c995]">
            SIAP UNTUK TANTANGAN?
          </p>
          <h2 className="display mt-3 text-3xl font-semibold">
            Seberapa kenal kamu dengan Aksara Jawa?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#d1d8ce]">
            Jawab 10 soal pilihan ganda. Setiap jawaban akan langsung mendapat
            umpan balik dan pembahasan.
          </p>
          <div className="my-8 flex justify-center gap-8 text-left">
            <div>
              <p className="text-2xl font-bold text-[#e1c995]">10</p>
              <p className="text-xs text-[#cbd2c7]">Pertanyaan</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#e1c995]">A–D</p>
              <p className="text-xs text-[#cbd2c7]">Pilihan jawaban</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#e1c995]">∞</p>
              <p className="text-xs text-[#cbd2c7]">Bisa diulang</p>
            </div>
          </div>
          <button onClick={() => setStarted(true)} className="btn-primary">
            Mulai Kuis <ArrowRight size={16} />
          </button>
        </div>
      ) : finished ? (
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] bg-[#173c32] p-8 text-center text-[#f5f0e4]">
            <Trophy className="mx-auto text-[#e1c995]" size={42} />
            <p className="mt-5 text-xs font-bold tracking-[.2em] text-[#e1c995]">
              KUIS SELESAI
            </p>
            <h2 className="display mt-2 text-5xl font-semibold">
              {score}
              <span className="text-2xl text-[#cbd2c7]"> / 10</span>
            </h2>
            <p className="mt-3 text-sm text-[#d1d8ce]">
              {score >= 8
                ? "Luar biasa! Kamu sudah sangat mengenal Aksara Jawa."
                : score >= 5
                  ? "Bagus! Terus asah pengetahuanmu tentang Aksara Jawa."
                  : "Tidak apa-apa, perjalanan belajar selalu dimulai dari mencoba."}
            </p>
            <button onClick={restart} className="btn-primary mt-6">
              <RotateCcw size={15} /> Ulangi kuis
            </button>
          </div>
          <div className="mt-6 rounded-2xl border border-[#e4ddce] bg-[#fffdf7] p-6">
            <h3 className="mb-4 font-bold text-[#173c32]">
              Pembahasan jawaban
            </h3>
            <div className="space-y-4">
              {quizQuestions.map((q, i) => (
                <div
                  key={q.q}
                  className="border-b border-[#eee8dc] pb-4 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-xs font-bold text-[#a18454]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{q.q}</p>
                      <p
                        className={`mt-1 text-xs font-semibold ${answers[i] === q.answer ? "text-emerald-700" : "text-rose-700"}`}
                      >
                        {answers[i] === q.answer
                          ? "Jawabanmu benar"
                          : "Jawaban benar: " + q.options[q.answer]}
                      </p>
                      <p className="mt-1 text-xs leading-6 text-[#77776c]">
                        {q.explain}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center justify-between text-xs font-bold text-[#77776c]">
            <span>
              PERTANYAAN {step + 1} DARI {quizQuestions.length}
            </span>
            <span>
              {Math.round((step / quizQuestions.length) * 100)}% SELESAI
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#e9e3d7]">
            <div
              className="h-full rounded-full bg-[#315b4b] transition-all"
              style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
          <div className="mt-6 rounded-[26px] border border-[#e4ddce] bg-[#fffdf7] p-6 sm:p-9">
            <p className="text-xs font-bold tracking-widest text-[#a18454]">
              SOAL {String(step + 1).padStart(2, "0")}
            </p>
            <h2 className="display mt-4 text-2xl leading-snug font-semibold text-[#173c32]">
              {quizQuestions[step].q}
            </h2>
            <div className="mt-7 grid gap-3">
              {quizQuestions[step].options.map((option, i) => (
                <button
                  key={option}
                  onClick={() => setChoice(i)}
                  className={`flex min-h-14 items-center gap-4 rounded-xl border px-4 text-left text-sm font-semibold transition ${choice === i ? "border-[#315b4b] bg-[#eaf0e9] text-[#173c32]" : "border-[#e7e0d3] hover:border-[#b7a37e]"}`}
                >
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-xs ${choice === i ? "bg-[#315b4b] text-white" : "bg-[#f0ebdf] text-[#77776c]"}`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={next}
              disabled={choice === null}
              className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === quizQuestions.length - 1
                ? "Lihat hasil"
                : "Pertanyaan berikutnya"}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
