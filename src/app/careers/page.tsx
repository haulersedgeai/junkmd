import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers at JunkMD+ — Join San Diego's Top-Rated Junk Removal Crew",
  description:
    "Looking for a junk removal job in San Diego? JunkMD+ hires hard-working, friendly crew members. Competitive pay, uniformed work, weekends off (Sundays). Apply today.",
};

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
      <Hero
        title="Join the JunkMD+ Crew"
        subtitle="We hire hard-working, friendly people who treat clients like neighbors. Competitive pay, real benefits, Sundays off."
        ctaPrimary={{ label: "Email Your Resume", href: `mailto:${SITE.email}?subject=JunkMD%2B%20Careers%20Application` }}
        ctaSecondary={{ label: `Call ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` }}
        image="/images/crew-hero.jpg"
      />

      <section className="py-12 bg-white">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h2>What We Look For</h2>
          <ul>
            <li>Strong, healthy, and able to lift 75+ lbs safely</li>
            <li>Clean driving record (some roles require commercial license)</li>
            <li>Friendly, customer-facing, comfortable talking to clients</li>
            <li>Reliable — on time, every shift</li>
            <li>Honest — we work in clients' homes and businesses</li>
          </ul>

          <h2>What We Offer</h2>
          <ul>
            <li>Competitive hourly pay + tips</li>
            <li>Mon–Sat work week — Sundays off, every Sunday</li>
            <li>Paid uniforms and gear</li>
            <li>Performance bonuses</li>
            <li>Real growth — from crew to lead, lead to dispatch</li>
            <li>Family-owned culture — David and Clemencia run the company in person</li>
          </ul>

          <h2>Open Roles</h2>
          <ul>
            <li><strong>Junk Removal Crew Member</strong> — full-time, full benefits</li>
            <li><strong>Driver / Crew Lead</strong> — clean MVR required</li>
            <li><strong>Customer Care</strong> — phone and dispatch</li>
          </ul>

          <p>
            Send your resume to <a href={`mailto:${SITE.email}?subject=JunkMD%2B%20Careers%20Application`}>{SITE.email}</a> or
            call us at <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <CtaSection title="Have Questions?" subtitle="Reach out — we'd love to talk." />
    </>
  );
}
