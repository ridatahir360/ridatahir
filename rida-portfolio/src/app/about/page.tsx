import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { profile, story } from "@/data/profile";
import { experience } from "@/data/experience";

export const metadata: Metadata = { title: "About", description: "My story, leadership philosophy and values." };

export default function About() {
  return (
    <>
      <Section eyebrow="About me" title="Law degree. Product instincts. Governance discipline."
        intro="The short version of how a lawyer-in-training became a product and governance leader across fintech and healthcare.">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-5">
            {story.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}><p className="leading-relaxed text-muted">{p}</p></Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Card hover={false}>
              <h3 className="font-display font-semibold">Industries</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.industries.map((ind) => <Badge key={ind}>{ind}</Badge>)}
              </div>
              <h3 className="mt-6 font-display font-semibold">Core strengths</h3>
              <ul className="mt-3 space-y-2">
                {profile.strengths.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-muted"><span className="text-accent">—</span>{s}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="How I lead" title="Leadership philosophy & values">
        <div className="grid gap-5 md:grid-cols-3">
          {profile.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="The journey" title="Professional timeline">
        <ol className="relative ml-3 border-l border-line">
          {experience.map((r, i) => (
            <Reveal key={r.title + r.period} delay={i * 0.05}>
              <li className="relative mb-10 pl-8">
                <span aria-hidden className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base bg-accent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{r.period}</p>
                <h3 className="mt-1 font-display font-semibold">{r.title}</h3>
                <p className="text-sm text-primary">{r.company}</p>
                <p className="mt-1.5 max-w-xl text-sm text-muted">{r.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
