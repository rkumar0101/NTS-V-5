"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function FloatingToggles() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="fixed bottom-5 right-5 z-50 rounded-full border bg-white/80 dark:bg-zinc-900/80 p-3 shadow-md"
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-zinc-700" />}
    </button>
  );
}
