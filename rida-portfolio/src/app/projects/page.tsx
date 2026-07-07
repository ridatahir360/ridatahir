import type { Metadata } from "next";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = { title: "Projects", description: "Case studies across product, governance, transformation and growth." };

export default function ProjectsPage() {
  return (
    <Section eyebrow="Case studies" title="Projects"
      intro="Filter by focus area. Each case study covers the business problem, the solution, my role, and the measurable outcome.">
      <ProjectsGrid />
    </Section>
  );
}
