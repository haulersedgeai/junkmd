import { Check } from "lucide-react";
import { HcpLeadForm } from "@/components/hcp-lead-form";

const BULLETS = [
  "On-site quote before any work",
  "Mon–Sat, 2-hour arrival windows",
  "Save $20 when you book your first appointment",
  "Text photos to (858) 869-9448 for the fastest quote",
];

export function LeadFormSection() {
  return (
    <section className="section bg-bg" id="quote">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left copy column */}
          <div className="lg:col-span-5">
            <p className="label" style={{ color: "var(--brand-dark)" }}>Get a quote</p>
            <h2 className="mt-3" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Tell us what needs to go.
            </h2>
            <p className="mt-4 text-[16px] text-ink-soft leading-[1.6]">
              Send a few details and we&rsquo;ll come back with a flat-rate quote, usually the same day. There&rsquo;s never any pressure to book — and the quote is free.
            </p>
            <ul className="mt-7 space-y-3">
              {BULLETS.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-ink-soft">
                  <Check className="h-4 w-4 mt-1 shrink-0 text-brand-dark" strokeWidth={2.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-7 relative">
            {/* Save $20 badge */}
            <div
              className="absolute -top-3 right-4 lg:-top-4 lg:right-6 z-10 pill"
              style={{
                background: "var(--brand)",
                color: "var(--ink)",
                fontWeight: 600,
                padding: "6px 12px",
                fontSize: 12,
                transform: "rotate(-3deg)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              Save $20 first appointment
            </div>

            <div
              className="card bg-bg p-6 md:p-8"
              style={{ borderRadius: 14, boxShadow: "var(--shadow-sm)" }}
            >
              <HcpLeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
