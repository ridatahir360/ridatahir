import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import { achievements } from "@/data/misc";

export const metadata: Metadata = { title: "Achievements", description: "Measurable outcomes across product, governance and growth." };

export default function AchievementsPage() {
  return (
    <Section eyebrow="Track record" title="Achievements by the numbers"
      intro="Every card is backed by a role on the experience page.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.05}>
            <Card className="h-full">
              <p className="font-display text-4xl font-bold text-primary">{a.value}</p>
              <p className="mt-1 font-semibold">{a.label}</p>
              <p className="mt-2 text-sm text-muted">{a.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
