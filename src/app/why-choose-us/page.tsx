import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ValuePillars } from "@/components/value-pillars";
import { TruckComparison } from "@/components/truck-comparison";
import { ReviewGrid } from "@/components/review-grid";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose JunkMD+ — Top-Rated San Diego Junk Removal",
  description: `Why JunkMD+? Family-owned since 2012, ${SITE.reviews.totalDisplay} 5-star reviews, flat-rate pricing, eco-friendly disposal, and a full-service house-call model. Save $20 first appointment.`,
};

export default function WhyChooseUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]} />
      <Hero
        title="Why Choose JunkMD+"
        subtitle="Four reasons San Diego picks us over every other junk-removal company in town."
        image="/images/crew-action.jpeg"
      />
      <ValuePillars />
      <TruckComparison />
      <ReviewGrid limit={9} />
      <CtaSection />
    </>
  );
}
