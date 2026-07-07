"use client";
import { motion } from "framer-motion";

/** Animated skill progress bar. */
export default function Progress({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-ink">{label}</span>
        <span className="text-xs font-semibold text-muted">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-soft" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
