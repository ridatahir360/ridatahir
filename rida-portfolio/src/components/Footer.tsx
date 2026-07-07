import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <p className="font-display font-bold">Rida Tahir<span className="text-accent">.</span></p>
          <p className="mt-1 text-sm text-muted">{profile.role} · {profile.location}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/resume" className="hover:text-primary">Resume</Link>
          <Link href="/certifications" className="hover:text-primary">Certifications</Link>
          <Link href="/achievements" className="hover:text-primary">Achievements</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line p-2.5 text-muted transition-colors hover:border-primary hover:text-primary"><Linkedin size={16} /></a>
          <a aria-label="Email" href={`mailto:${profile.email}`} className="rounded-full border border-line p-2.5 text-muted transition-colors hover:border-primary hover:text-primary"><Mail size={16} /></a>
          <a aria-label="Phone" href={`tel:${profile.phone.replace(/\s/g, "")}`} className="rounded-full border border-line p-2.5 text-muted transition-colors hover:border-primary hover:text-primary"><Phone size={16} /></a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted">© {new Date().getFullYear()} Rida Tahir · Dubai, UAE</p>
    </footer>
  );
}
