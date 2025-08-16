"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { WelcomeScreen } from "~/components/welcome-screen";

export default function App() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-4 min-h-screen">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <WelcomeScreen />
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
