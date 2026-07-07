import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Alert from "@/components/ui/Alert";
import { posts } from "@/data/misc";

export const metadata: Metadata = { title: "Insights", description: "Writing on product management, GRC and resilience." };

export default function InsightsPage() {
  return (
    <Section eyebrow="Blog" title="Insights"
      intro="Notes from the intersection of product and governance.">
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-3">
                <Badge tone="primary">{p.tag}</Badge>
                <span className="text-xs text-muted">{p.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Alert>These are sample article stubs — replace them in <code>src/data/misc.ts</code>, or link them to your LinkedIn posts to start with.</Alert>
      </div>
    </Section>
  );
}
