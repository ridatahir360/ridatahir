import type { Metadata } from "next";
import { Download } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Resume", description: "Interactive resume with PDF download." };

export default function ResumePage() {
  return (
    <>
      <Section eyebrow="Resume" title="Interactive resume"
        intro="Explore roles below, or download the PDF version.">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <Button href={profile.resumeUrl} external><Download size={16} /> Download PDF</Button>
          <Button href="/contact" variant="outline">Request references</Button>
        </div>
        <ExperienceTimeline />
      </Section>

      <Section eyebrow="Foundation" title="Education & languages">
        <div className="overflow-x-auto rounded-theme border border-line bg-surface shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line text-xs uppercase tracking-wider text-muted">
              <tr><th className="px-6 py-4">Qualification</th><th className="px-6 py-4">Institution</th><th className="px-6 py-4">Years</th><th className="px-6 py-4">Focus</th></tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 font-semibold">Bachelor of Laws (LLB)</td>
                <td className="px-6 py-4 text-muted">University of London</td>
                <td className="px-6 py-4 text-muted">2017 — 2021</td>
                <td className="px-6 py-4"><Badge tone="primary">Law · Regulation · Contracts</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
