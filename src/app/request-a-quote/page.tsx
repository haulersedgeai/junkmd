import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { HcpLeadForm } from "@/components/hcp-lead-form";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote — JunkMD+ Junk Removal",
  description:
    "Get a free, no-obligation quote from JunkMD+. Tell us what needs to go and we'll come back with a flat-rate quote, usually the same day. Same-day & next-day appointments across San Diego.",
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
      <Hero
        title="Free, No-Obligation Quote"
        subtitle="Tell us what needs to go and we'll come back with a flat-rate quote, usually the same day."
        ctaPrimary={{ label: "", href: "" }}
        ctaSecondary={{ label: "", href: "" }}
      />

      <section className="section bg-bg">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <div
              className="card bg-bg p-6 md:p-8"
              style={{ borderRadius: 14, boxShadow: "var(--shadow-sm)" }}
            >
              <HcpLeadForm />
            </div>
            <p className="mt-6 text-center text-[14px] text-ink-soft">
              Prefer not to fill out a form?{" "}
              <a href={`tel:${SITE.phoneRaw}`} className="text-ink underline decoration-brand underline-offset-[3px]" style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 500 }}>
                Call {SITE.phone}
              </a>{" "}
              ·{" "}
              <a href={`sms:${SITE.phoneRaw}`} className="text-ink underline decoration-brand underline-offset-[3px]">
                Text photos
              </a>{" "}
              ·{" "}
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-brand underline-offset-[3px]">
                Book online
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaSection title="Need a quote right now?" subtitle="Text us photos at (858) 869-9448 for the fastest response." />
    </>
  );
}
