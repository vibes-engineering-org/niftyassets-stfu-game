"use client";

import { useState } from "react";
import { PROJECT_TITLE } from "~/lib/constants";
import { WelcomeScreen } from "~/components/welcome-screen";
import QuizGame from "~/components/quiz-game";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-4 min-h-screen">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      {!gameStarted ? (
        <WelcomeScreen onStartGame={() => setGameStarted(true)} />
      ) : (
        <QuizGame onBackToWelcome={() => setGameStarted(false)} />
      )}
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
