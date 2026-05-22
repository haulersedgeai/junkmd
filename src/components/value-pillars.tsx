import { VALUE_PILLARS } from "@/lib/constants";

function PlusMark() {
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" className="shrink-0">
      <rect x="6" y="0" width="2" height="14" rx="0.5" fill="var(--brand)" />
      <rect x="0" y="6" width="14" height="2" rx="0.5" fill="var(--brand)" />
    </svg>
  );
}

export function ValuePillars() {
  return (
    <section className="section bg-paper">
      <div className="container-x">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Why JunkMD+</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            A service standard you'd expect from a doctor's office, not a hauler.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          {VALUE_PILLARS.map((pillar) => (
            <div key={pillar.title}>
              <div className="mb-4">
                <PlusMark />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.2,
                }}
              >
                {pillar.title}
              </h3>
              <p className="text-ink-soft text-[15px] leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
