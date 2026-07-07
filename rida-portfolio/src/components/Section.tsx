import { ReactNode } from "react";
import Reveal from "./Reveal";

/** Standard page section with eyebrow, title, intro. */
export default function Section({
  eyebrow, title, intro, children, className = ""
}: { eyebrow?: string; title?: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-page px-6 py-16 md:py-20 ${className}`}>
      {(eyebrow || title) && (
        <Reveal>
          {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
          {title && <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>}
          {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
        </Reveal>
      )}
      <div className={eyebrow || title ? "mt-10" : ""}>{children}</div>
    </section>
  );
}
