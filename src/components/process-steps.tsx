import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="section bg-paper-pure border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">The house call, step by step</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            Six calm steps from booking to "and we're off."
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6 lg:gap-x-8 relative">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.n}
              className="relative"
            >
              {i > 0 && (
                <div className="hidden lg:block absolute -left-4 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
              )}
              <p
                className="text-brand-dark mb-3"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.25rem",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  fontVariationSettings: "'opsz' 96, 'SOFT' 60",
                }}
              >
                {String(step.n).padStart(2, "0")}
              </p>
              <h3
                className="mb-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
