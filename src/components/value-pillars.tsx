import { VALUE_PILLARS } from "@/lib/constants";

function PlusGlyph() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <line x1="8" y1="2" x2="8" y2="14" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="8" x2="14" y2="8" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ValuePillars() {
  return (
    <section className="section bg-bg">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="label" style={{ color: "var(--brand-dark)" }}>Why JunkMD+</p>
          <h2 className="mt-3">The locally-owned crew that goes the extra mile.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {VALUE_PILLARS.map((p) => (
            <div key={p.title}>
              <div className="mb-4"><PlusGlyph /></div>
              <h3 className="mb-2" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>{p.title}</h3>
              <p className="text-[14px] text-muted leading-[1.55]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
