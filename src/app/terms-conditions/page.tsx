import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions — JunkMD+",
  description: "Terms and conditions for using JunkMD+ services and website.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <section className="py-12 bg-white">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h1 className="font-display text-4xl uppercase">Terms &amp; Conditions</h1>
          <p>Last updated: 2026-01-01</p>
          <p>By booking a JunkMD+ house call, you agree to the following terms.</p>
          <h2>Service Scope</h2>
          <p>We haul most household and commercial items. We do not haul hazardous waste, asbestos-containing materials, medical waste, or certain regulated items. We reserve the right to decline any load that poses a safety or legal risk.</p>
          <h2>Pricing</h2>
          <p>Prices are quoted on-site as flat rates. The quoted price is what you pay. Concrete, dirt, and other dense materials may be priced by weight; we disclose this before starting.</p>
          <h2>Cancellation</h2>
          <p>Cancellations made before our crew arrives are free. Cancellations after crew arrival may incur a trip fee.</p>
          <h2>Property</h2>
          <p>We're insured and careful, but if damage occurs to your property due to our work, please report it before we leave. We address damage claims in good faith.</p>
          <h2>Donations &amp; Recycling</h2>
          <p>Once items leave your property, they become JunkMD+'s responsibility to dispose of. We donate or recycle wherever possible; otherwise we landfill responsibly.</p>
        </div>
      </section>
    </>
  );
}
