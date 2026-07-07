"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Contact form. By default it opens the visitor's email client with the
 * message pre-filled (works with zero backend). To use a real form service,
 * see "Contact form" in the README (Formspree takes ~2 minutes).
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = () => {
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const input = "w-full rounded-lg border border-line bg-base px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-primary";

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
          <input id="name" className={input} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
          <input id="email" type="email" className={input} placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
        <input id="subject" className={input} placeholder="Role, project, or question" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="message" rows={5} className={input} placeholder="Tell me a little about what you're building or hiring for…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button
        onClick={submit}
        disabled={!form.name || !form.email || !form.message}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-onprimary transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Send size={15} /> Send message
      </button>
    </div>
  );
}
