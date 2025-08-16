"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import QuizGame from "~/components/quiz-game";

export default function App() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-4 min-h-screen">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <QuizGame />
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
