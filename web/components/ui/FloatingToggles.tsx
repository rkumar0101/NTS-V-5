"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/90 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
      aria-label="Toggle day and night mode"
    >
      <span className="text-base" aria-hidden>
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? "Night" : "Day"} mode</span>
    </button>
  );
}
