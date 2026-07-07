import type { Config } from "tailwindcss";

/**
 * DESIGN SYSTEM — all colors come from CSS variables defined in globals.css.
 * Never hardcode colors in components; use these semantic tokens instead.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--c-primary)",       // brand color (buttons, links)
        onprimary: "var(--c-on-primary)",  // text on primary surfaces
        soft: "var(--c-primary-soft)",     // tinted backgrounds
        accent: "var(--c-accent)",         // highlights, gradients
        base: "var(--c-bg)",               // page background
        surface: "var(--c-surface)",       // cards, panels
        ink: "var(--c-text)",              // main text
        muted: "var(--c-muted)",           // secondary text
        line: "var(--c-border)"            // borders, dividers
      },
      borderRadius: { theme: "var(--radius)" },
      boxShadow: {
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      maxWidth: { page: "72rem" }
    }
  },
  plugins: []
};
export default config;
