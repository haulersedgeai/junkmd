import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SITE } from "@/lib/constants";
import { Camera, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote — JunkMD+ Junk Removal & Dumpster Rental",
  description:
    "Get a free, no-obligation quote from JunkMD+. Text us pictures of your junk for an instant estimate. Same-day & next-day appointments across San Diego.",
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
      <Hero
        title="Free, No-Obligation Quote"
        subtitle="Three fast ways to get an estimate. Text us pictures for the fastest path."
        ctaPrimary={{ label: "Book Online", href: SITE.bookingUrl, external: true }}
        ctaSecondary={{ label: `Text Pics to ${SITE.phone}`, href: `sms:${SITE.phoneRaw}` }}
      />

      <section className="py-12 bg-white">
        <div className="container-x grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)]">
            <Camera className="h-10 w-10 mx-auto mb-3 text-[color:var(--brand-green)]" />
            <h2 className="font-display text-xl uppercase mb-2">Text Pictures</h2>
            <p className="text-sm text-[color:var(--brand-text)] mb-4">Snap a few photos of your junk and text them to us. Quote back in minutes.</p>
            <a href={`sms:${SITE.phoneRaw}`} className="btn-primary">Text {SITE.phone}</a>
          </div>
          <div className="text-center p-6 rounded-xl bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)]">
            <MessageCircle className="h-10 w-10 mx-auto mb-3 text-[color:var(--brand-green)]" />
            <h2 className="font-display text-xl uppercase mb-2">Book Online</h2>
            <p className="text-sm text-[color:var(--brand-text)] mb-4">Pick a 2-hour arrival window. We size the job and quote a flat price on site.</p>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
          </div>
          <div className="text-center p-6 rounded-xl bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)]">
            <Phone className="h-10 w-10 mx-auto mb-3 text-[color:var(--brand-green)]" />
            <h2 className="font-display text-xl uppercase mb-2">Call Us</h2>
            <p className="text-sm text-[color:var(--brand-text)] mb-4">Talk to a real person. We'll answer your questions and set up a house call.</p>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <CtaSection title="Need a quote right now?" subtitle="Text us photos at (858) 869-9448 for the fastest response." />
    </>
  );
}
