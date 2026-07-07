"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lightbulb } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { projects, projectCategories } from "@/data/projects";

/** Filterable project case studies. */
export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<string | null>(null);
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {projectCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === c ? "bg-primary text-onprimary" : "border border-line text-muted hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => {
            const expanded = open === p.slug;
            return (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-theme border border-line bg-surface shadow-card"
              >
                {/* Cover image — [REPLACE] drop real screenshots into /public/projects */}
                <div aria-hidden className="flex h-36 items-end bg-soft p-5">
                  <span className="font-display text-5xl font-bold text-primary opacity-15">{p.title.slice(0, 2)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone="primary">{p.category}</Badge>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.description}</p>

                  <button
                    onClick={() => setOpen(expanded ? null : p.slug)}
                    aria-expanded={expanded}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    {expanded ? "Hide case study" : "Read case study"}
                    <ChevronDown size={15} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <dl className="mt-5 space-y-4 border-t border-line pt-5 text-sm">
                          <div><dt className="font-semibold">Business problem</dt><dd className="mt-1 text-muted">{p.problem}</dd></div>
                          <div><dt className="font-semibold">Solution</dt><dd className="mt-1 text-muted">{p.solution}</dd></div>
                          <div><dt className="font-semibold">My role</dt><dd className="mt-1 text-muted">{p.role}</dd></div>
                          <div>
                            <dt className="font-semibold">Technologies</dt>
                            <dd className="mt-2 flex flex-wrap gap-2">{p.technologies.map((t) => <Badge key={t}>{t}</Badge>)}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold">Outcomes</dt>
                            <dd className="mt-1"><ul className="space-y-1">{p.outcomes.map((o) => <li key={o} className="flex gap-2 text-muted"><span className="text-accent">—</span>{o}</li>)}</ul></dd>
                          </div>
                          <div className="rounded-lg bg-soft p-4">
                            <dt className="flex items-center gap-2 font-semibold"><Lightbulb size={15} className="text-accent" /> Lessons learned</dt>
                            <dd className="mt-1 text-muted">{p.lessons}</dd>
                          </div>
                        </dl>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
