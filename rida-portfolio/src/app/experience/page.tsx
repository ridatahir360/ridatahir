import type { Metadata } from "next";
import Section from "@/components/Section";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = { title: "Experience", description: "Interactive career timeline across healthcare, fintech and logistics." };

export default function ExperiencePage() {
  return (
    <Section eyebrow="Career" title="Experience"
      intro="Click any role to expand responsibilities, achievements, technologies and business impact.">
      <ExperienceTimeline />
    </Section>
  );
}
