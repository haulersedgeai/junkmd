import Link from "next/link";

export function Save20Bar() {
  return (
    <div className="bg-cream border-b border-border">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-[13px]">
        <span
          className="text-ink-soft"
          style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400 }}
        >
          First appointment? Save $20 — ask when you book.
        </span>
        <span className="hidden sm:inline text-muted">·</span>
        <Link
          href="/pricing"
          className="text-ink underline decoration-brand decoration-2 underline-offset-[3px] hover:text-brand-dark"
          style={{ fontWeight: 500 }}
        >
          See pricing
        </Link>
      </div>
    </div>
  );
}
