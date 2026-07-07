import { Info } from "lucide-react";
import { ReactNode } from "react";

export default function Alert({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="flex items-start gap-3 rounded-theme border border-line bg-soft p-4 text-sm text-ink">
      <Info size={18} className="mt-0.5 shrink-0 text-primary" />
      <div>{children}</div>
    </div>
  );
}
