"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-8 h-4 rounded-full transition-colors duration-[35ms] ${
        isDark ? "bg-violet" : "bg-gray-300"
      }`}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      <span
        className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-150 ${
          isDark ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
