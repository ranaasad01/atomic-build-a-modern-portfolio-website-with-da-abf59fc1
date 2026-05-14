"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-800/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center
        bg-slate-800/50 dark:bg-slate-700/50 hover:bg-indigo-500/20
        border border-slate-700/50 dark:border-slate-600/50 hover:border-indigo-500/50
        text-slate-400 hover:text-indigo-400
        transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-indigo-500/10" />
      {theme === "dark" ? (
        <Sun size={16} className="relative z-10 transition-transform duration-200 group-hover:rotate-12" />
      ) : (
        <Moon size={16} className="relative z-10 transition-transform duration-200 group-hover:-rotate-12" />
      )}
    </button>
  );
}
