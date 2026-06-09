"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <span
        className="inline-block h-9 w-9 rounded-full border border-border-token bg-card/40"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-border-token bg-card/40 px-3 py-2 text-xs font-bold text-page-fg transition hover:scale-[1.02] hover:bg-card"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
