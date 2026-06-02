import { Check } from "lucide-react";
import { SITE } from "@/lib/constants";

const BULLETS = [
  "On-site quote before any work",
  "Mon–Sat, 2-hour arrival windows",
  "Save $20 when you book your first appointment",
  "Text photos to (858) 869-9448 for the fastest quote",
];

const SERVICE_OPTIONS = [
  "Junk removal (general)",
  "Furniture removal",
  "Appliance removal",
  "Estate / hoarder cleanout",
  "Hot tub removal",
  "Light demolition",
  "Yard waste removal",
  "Commercial / office cleanout",
  "Other / not sure",
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

            <form
              // TODO: replace with Justin's Formspree endpoint after signing
              action="https://formspree.io/f/your-formspree-id"
              method="POST"
              className="card bg-bg p-6 md:p-8"
              style={{ borderRadius: 14, boxShadow: "var(--shadow-sm)" }}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-[13px] text-ink" style={{ fontWeight: 500 }}>Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-[15px] focus:outline-none focus:border-ink transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[13px] text-ink" style={{ fontWeight: 500 }}>Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-[15px] focus:outline-none focus:border-ink transition-colors"
                    style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                  />
                </label>
              </div>

              <label className="block mt-3">
                <span className="text-[13px] text-ink" style={{ fontWeight: 500 }}>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-[15px] focus:outline-none focus:border-ink transition-colors"
                />
              </label>

              <label className="block mt-3">
                <span className="text-[13px] text-ink" style={{ fontWeight: 500 }}>Service needed</span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-[15px] focus:outline-none focus:border-ink transition-colors"
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="block mt-3">
                <span className="text-[13px] text-ink" style={{ fontWeight: 500 }}>How can we help?</span>
                <textarea
                  name="message"
                  rows={3}
                  className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-[15px] focus:outline-none focus:border-ink transition-colors resize-y"
                  placeholder="A couple sentences about what needs to go — rough size, item list, or paste a photo link."
                />
              </label>

              <input type="hidden" name="_subject" value="New JunkMD+ quote request" />

              <button type="submit" className="btn btn-accent btn-lg w-full mt-5">
                Send request
              </button>

              <p className="mt-3 text-[13px] text-muted text-center">
                Or call <a href={`tel:${SITE.phoneRaw}`} className="text-ink underline decoration-brand underline-offset-[3px]" style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 500 }}>{SITE.phone}</a> — we answer Mon–Sat.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
