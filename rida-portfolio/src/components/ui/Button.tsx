import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  external?: boolean;
  variant?: "solid" | "outline" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  solid: "bg-primary text-onprimary hover:opacity-90 shadow-card",
  outline: "border border-line text-ink hover:border-primary hover:text-primary",
  ghost: "text-muted hover:text-primary hover:bg-soft"
};

export default function Button({ href, external, variant = "solid", children, className = "", onClick, type = "button" }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;
  if (href && external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
