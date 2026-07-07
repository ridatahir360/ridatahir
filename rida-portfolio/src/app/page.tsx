import Link from "next/link";
import { ArrowRight, Download, MapPin, ShieldCheck, Rocket, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/misc";

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-soft blur-3xl" />
        <div className="mx-auto grid max-w-page items-center gap-14 px-6 pb-16 pt-16 md:pt-24 lg:grid-cols-[1.25fr,1fr]">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-muted">
              <MapPin size={13} className="text-accent" /> {profile.location} · Open to senior product & governance roles
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              I take regulated products from idea to launch —{" "}
              <span className="text-primary">and keep them audit-ready</span> at scale.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{profile.subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Let&apos;s talk <ArrowRight size={16} /></Button>
              <Button href={profile.resumeUrl} external variant="outline"><Download size={16} /> Download Resume</Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-sm">
              {/* [REPLACE] Professional photo: put photo.jpg in /public and set profile.photo */}
              <div className="flex aspect-[4/5] items-center justify-center rounded-theme border border-line bg-surface shadow-lift">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photo} alt={profile.name} className="h-full w-full rounded-theme object-cover" />
                ) : (
                  <div className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-soft font-display text-3xl font-bold text-primary">RT</div>
                    <p className="text-sm text-muted">Professional photo<br />placeholder</p>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-theme border border-line bg-surface px-5 py-3 shadow-card">
                <p className="text-xs text-muted">Currently</p>
                <p className="text-sm font-semibold">GRC Officer @ PureHealth</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Key statistics */}
        <div className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-page grid-cols-2 gap-px px-6 py-8 md:grid-cols-4">
            {profile.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="text-center">
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Featured achievements ================= */}
      <Section eyebrow="Why teams hire me" title="Product delivery, with governance built in"
        intro="Three things most product managers can't offer — and most compliance officers can't either.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Rocket, title: "I ship in regulated markets", text: "Four fintech products launched with partner banks — compliant from day one, with 100+ credit risk analyses behind the lending models." },
            { icon: ShieldCheck, title: "I make enterprises audit-ready", text: "External audits facilitated against HIPAA, ADHICS and NCEMA 7000, backed by gap assessments, CAPA, and a tested business continuity program." },
            { icon: BarChart3, title: "I turn strategy into metrics", text: "KPI frameworks across every department of a national healthcare group, reported monthly to leadership — plus a 38%→80% retention turnaround." }
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <Card className="h-full">
                <f.icon className="mb-4 text-accent" size={26} />
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= Featured projects ================= */}
      <Section eyebrow="Selected work" title="Featured projects"
        intro="Case studies across product, transformation and governance.">
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href="/projects" className="block h-full">
                <Card className="flex h-full flex-col">
                  <Badge tone="primary">{p.category}</Badge>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">View case study <ArrowRight size={14} /></p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= Testimonials ================= */}
      <Section eyebrow="What people say" title="Testimonials">
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Card hover={false} className="h-full">
                <p className="text-sm italic leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= Contact CTA ================= */}
      <Section>
        <Reveal>
          <div className="rounded-theme bg-primary px-8 py-14 text-center text-onprimary md:px-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Building something in a regulated space?</h2>
            <p className="mx-auto mt-4 max-w-xl opacity-80">Let&apos;s talk about product, governance, or both. I usually reply within a day.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="rounded-full bg-base px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Get in touch</Link>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-onprimary/40 px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5">Connect on LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
