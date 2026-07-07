import type { Metadata } from "next";
import { Rocket, ShieldCheck, RefreshCw, AlertTriangle, ClipboardCheck, BarChart3, Workflow, Compass } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/misc";

export const metadata: Metadata = { title: "Services", description: "Consulting services across product, GRC, BCM, risk and strategy." };

const icons = { Rocket, ShieldCheck, RefreshCw, AlertTriangle, ClipboardCheck, BarChart3, Workflow, Compass } as const;

export default function ServicesPage() {
  return (
    <Section eyebrow="How I can help" title="Services"
      intro="Available for full-time senior roles and selective consulting engagements.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons] ?? Compass;
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card className="h-full">
                <Icon size={24} className="mb-4 text-accent" />
                <h3 className="font-display font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-10">
        <Button href="/contact">Discuss an engagement</Button>
      </div>
    </Section>
  );
}
