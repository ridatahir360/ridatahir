import type { Metadata } from "next";
import { Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Get in touch about senior product & governance roles." };

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Let's talk"
      intro="For senior roles in product management, GRC, IT governance, BCM, digital transformation, or technology strategy — I usually reply within a day.">
      <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
        <Card hover={false}><ContactForm /></Card>
        <div className="space-y-4">
          <Card hover={false}>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Mail size={17} className="text-accent" /><a className="font-medium hover:text-primary" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li className="flex items-center gap-3"><Phone size={17} className="text-accent" /><a className="font-medium hover:text-primary" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
              <li className="flex items-center gap-3"><Linkedin size={17} className="text-accent" /><a className="font-medium hover:text-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ridatahir</a></li>
              <li className="flex items-center gap-3"><MapPin size={17} className="text-accent" /><span className="text-muted">{profile.location}</span></li>
            </ul>
          </Card>
          <a href={profile.resumeUrl} download className="flex items-center justify-center gap-2 rounded-theme border border-line bg-surface p-5 text-sm font-semibold shadow-card transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
            <Download size={16} /> Download my resume (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}
