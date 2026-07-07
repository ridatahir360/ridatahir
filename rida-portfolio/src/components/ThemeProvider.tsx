"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

/** All available themes. Add new ones here + in globals.css. */
export const THEMES = [
  { id: "royal-purple", label: "Royal Purple", swatch: "#312E81", accent: "#A855F7" },
  { id: "executive-navy", label: "Executive Navy", swatch: "#1E3A8A", accent: "#0EA5E9" },
  { id: "emerald-professional", label: "Emerald Professional", swatch: "#065F46", accent: "#10B981" },
  { id: "midnight-cyber", label: "Midnight Cyber", swatch: "#0F172A", accent: "#06B6D4" },
  { id: "modern-slate", label: "Modern Slate", swatch: "#334155", accent: "#F59E0B" },
  { id: "minimal-bw", label: "Minimal B&W", swatch: "#111111", accent: "#666666" }
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];
type Mode = "light" | "dark";

type Ctx = {
  palette: ThemeId;
  mode: Mode;
  setPalette: (p: ThemeId) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<Ctx | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPaletteState] = useState<ThemeId>("royal-purple");
  const [mode, setMode] = useState<Mode>("light");

  // Read persisted preferences (the inline script in layout.tsx applies them pre-paint)
  useEffect(() => {
    const p = (localStorage.getItem("palette") as ThemeId) || "royal-purple";
    const m =
      (localStorage.getItem("mode") as Mode) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setPaletteState(p);
    setMode(m);
  }, []);

  // Apply to <html> whenever state changes
  useEffect(() => {
    const el = document.documentElement;
    el.dataset.theme = palette;
    el.classList.toggle("dark", mode === "dark");
    localStorage.setItem("palette", palette);
    localStorage.setItem("mode", mode);
  }, [palette, mode]);

  return (
    <ThemeContext.Provider
      value={{
        palette,
        mode,
        setPalette: setPaletteState,
        toggleMode: () => setMode((m) => (m === "light" ? "dark" : "light"))
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
