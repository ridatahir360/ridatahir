import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "Skills", description: "Product, governance, risk, BCM, data and leadership skills." };

export default function SkillsPage() {
  return (
    <Section eyebrow="Capabilities" title="Skills"
      intro="Grouped by domain — from product management and governance to data, reporting and leadership.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.category} delay={i * 0.06}>
            <Card hover={false} className="h-full">
              <h3 className="font-display text-lg font-semibold">{g.category}</h3>
              <div className="mt-5 space-y-4">
                {g.skills.map((s) => <Progress key={s.name} label={s.name} value={s.level} />)}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
