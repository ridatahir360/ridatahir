"use client";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Palette, Check } from "lucide-react";
import { THEMES, useTheme } from "./ThemeProvider";

/** Instant theme + light/dark switching. */
export default function ThemeSwitcher() {
  const { palette, mode, setPalette, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="flex items-center gap-1" ref={ref}>
      <button
        aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleMode}
        className="rounded-full p-2 text-muted transition-colors hover:bg-soft hover:text-primary"
      >
        {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className="relative">
        <button
          aria-label="Choose color theme"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-muted transition-colors hover:bg-soft hover:text-primary"
        >
          <Palette size={18} />
        </button>
        {open && (
          <div className="absolute right-0 top-11 z-50 w-60 rounded-theme border border-line bg-surface p-2 shadow-lift">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">Theme</p>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => { setPalette(t.id); setOpen(false); }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-ink transition-colors hover:bg-soft"
              >
                <span className="flex h-5 w-5 overflow-hidden rounded-full border border-line">
                  <span className="h-full w-1/2" style={{ background: t.swatch }} />
                  <span className="h-full w-1/2" style={{ background: t.accent }} />
                </span>
                <span className="flex-1">{t.label}</span>
                {palette === t.id && <Check size={16} className="text-primary" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
