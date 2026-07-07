import type { Metadata } from "next";
import { Award, BadgeCheck } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import Alert from "@/components/ui/Alert";
import { certifications } from "@/data/misc";

export const metadata: Metadata = { title: "Certifications", description: "Credentials and qualifications." };

export default function CertificationsPage() {
  return (
    <Section eyebrow="Credentials" title="Certifications"
      intro="Formal qualifications and professional certifications.">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <Card className="flex h-full items-start gap-4">
              <span className={`mt-0.5 rounded-full p-2.5 ${c.highlight ? "bg-primary text-onprimary" : "bg-soft text-primary"}`}>
                {c.highlight ? <BadgeCheck size={20} /> : <Award size={20} />}
              </span>
              <div>
                <h3 className="font-display font-semibold leading-snug">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer} · {c.year}</p>
                <p className="mt-2 text-xs text-muted">Credential ID: {c.credentialId}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Alert>Cards marked <strong>[REPLACE]</strong> are placeholders — edit <code>src/data/misc.ts</code> to add real certifications as you earn them (CRISC, ISO 22301 LI and CSPO are strong picks for your target roles).</Alert>
      </div>
    </Section>
  );
}
