"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Target, Trophy, Wrench, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

/** Interactive timeline: click a role to expand full details. */
export default function ExperienceTimeline() {
  const [open, setOpen] = useState(0);

  return (
    <ol className="relative ml-3 border-l border-line">
      {experience.map((r, i) => {
        const expanded = open === i;
        return (
          <li key={r.title + r.period} className="relative mb-6 pl-8">
            <span aria-hidden className={`absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full border-2 border-base transition-colors ${expanded ? "bg-primary" : "bg-line"}`} />
            <div className="overflow-hidden rounded-theme border border-line bg-surface shadow-card">
              <button
                onClick={() => setOpen(expanded ? -1 : i)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-soft"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{r.period}{r.location ? ` · ${r.location}` : ""}</p>
                  <h3 className="mt-1 font-display font-semibold leading-snug">{r.title}</h3>
                  <p className="text-sm text-primary">{r.company}</p>
                </div>
                <ChevronDown size={18} className={`shrink-0 text-muted transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="grid gap-6 border-t border-line p-5 md:grid-cols-2">
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold"><Target size={15} className="text-accent" /> Responsibilities</h4>
                        <ul className="mt-2 space-y-1.5">
                          {r.responsibilities.map((x) => <li key={x} className="flex gap-2 text-sm text-muted"><span className="text-accent">—</span>{x}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold"><Trophy size={15} className="text-accent" /> Achievements</h4>
                        <ul className="mt-2 space-y-1.5">
                          {r.achievements.map((x) => <li key={x} className="flex gap-2 text-sm text-muted"><span className="text-accent">—</span>{x}</li>)}
                        </ul>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="flex items-center gap-2 text-sm font-semibold"><Wrench size={15} className="text-accent" /> Technologies & skills</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {r.technologies.map((t) => <Badge key={t} tone="primary">{t}</Badge>)}
                          {r.skills.map((s) => <Badge key={s}>{s}</Badge>)}
                        </div>
                      </div>
                      <div className="rounded-lg bg-soft p-4 md:col-span-2">
                        <h4 className="flex items-center gap-2 text-sm font-semibold"><Sparkles size={15} className="text-accent" /> Business impact</h4>
                        <p className="mt-1 text-sm text-muted">{r.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
