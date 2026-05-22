import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-bg">
      <div className="container-x py-3 text-[13px] text-muted flex items-center flex-wrap gap-2">
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-border-strong">/</span>}
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
