import type { Metadata } from "next";
import { QuizPage } from "@/features/kuis/quiz-page";
export const metadata: Metadata = { title: "Kuis Aksara Jawa" };
export default function Page() {
  return <QuizPage />;
}
