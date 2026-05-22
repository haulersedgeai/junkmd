import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[color:var(--brand-bg-soft)] border-b border-[color:var(--brand-border)]">
      <div className="container-x py-2 text-xs flex items-center flex-wrap gap-1 text-[color:var(--brand-muted)]">
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {c.href ? (
              <Link href={c.href} className="hover:text-[color:var(--brand-green-dark)]">{c.label}</Link>
            ) : (
              <span className="text-[color:var(--brand-text)]">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
