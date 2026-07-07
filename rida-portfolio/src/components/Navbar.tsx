"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-6" aria-label="Main">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          Rida Tahir<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  pathname === l.href ? "bg-soft text-primary" : "text-muted hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-onprimary transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Download size={15} /> Resume
          </a>
          <ThemeSwitcher />
          <button
            className="rounded-full p-2 text-muted hover:bg-soft lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <ul className="mx-auto max-w-page px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium ${
                    pathname === l.href ? "bg-soft text-primary" : "text-ink hover:bg-soft"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
