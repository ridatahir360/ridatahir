import { ReactNode } from "react";

export default function Card({ children, className = "", hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`rounded-theme border border-line bg-surface p-6 shadow-card transition-all duration-200 ${hover ? "hover:-translate-y-1 hover:border-primary hover:shadow-lift" : ""} ${className}`}>
      {children}
    </div>
  );
}
