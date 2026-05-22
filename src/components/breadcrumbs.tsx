import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-paper border-b border-border">
      <div className="container-x py-3 text-[12px] tracking-[0.06em] uppercase text-muted flex items-center flex-wrap gap-2">
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-muted/50">/</span>}
            {c.href ? (
              <Link href={c.href} className="hover:text-ink transition-colors">{c.label}</Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
