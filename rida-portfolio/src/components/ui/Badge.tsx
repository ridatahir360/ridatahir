import { ReactNode } from "react";

export default function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "primary" }) {
  const cls = tone === "primary" ? "bg-soft text-primary" : "border border-line bg-surface text-muted";
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${cls}`}>{children}</span>;
}
