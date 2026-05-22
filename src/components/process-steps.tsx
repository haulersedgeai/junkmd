import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="section bg-bg-soft border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="label mb-3">The house call</p>
          <h2>Six steps from booking to done.</h2>
        </div>

        <div className="relative">
          {/* Horizontal hairline on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-[18px] h-px bg-border" aria-hidden="true" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="relative">
                <p
                  className="text-muted tnum"
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 32,
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    background: "var(--bg-soft)",
                    paddingRight: 12,
                    display: "inline-block",
                  }}
                >
                  {String(step.n).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[16px] font-semibold leading-snug text-ink" style={{ letterSpacing: "-0.005em" }}>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted leading-[1.5]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
