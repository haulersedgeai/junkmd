import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Blog — JunkMD+ San Diego Junk Removal",
  description: "JunkMD+ blog — junk removal tips, decluttering guides, eco-friendly disposal advice for San Diego homes and businesses.",
};

const POSTS = [
  { title: "How Much Does Junk Removal Cost in San Diego?", date: "2025-11-13", excerpt: "Real pricing for real San Diego jobs. The four-tier breakdown and what drives the price." },
  { title: "Estate Cleanout Checklist for San Diego Families", date: "2025-11-13", excerpt: "Step-by-step planning so the cleanout doesn't become a second loss." },
  { title: "5 Signs It's Time to Clear Your Garage", date: "2025-09-22", excerpt: "If you haven't parked in it in over a year, the signs are everywhere." },
  { title: "Eco-Friendly Junk Removal: Where It All Goes", date: "2025-09-08", excerpt: "Goodwill, scrap yards, e-waste centers — the trail your junk takes after we drive away." },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <Hero
        title="JunkMD+ Blog"
        subtitle="Tips, guides, and stories from San Diego's top-rated junk removal team."
        image="/images/truck-hero.webp"
      />
      <section className="py-12 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSTS.map((p) => (
            <article key={p.title} className="bg-white border border-[color:var(--brand-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
              <p className="text-xs text-[color:var(--brand-muted)] uppercase tracking-wider mb-2">{p.date}</p>
              <h2 className="font-display text-lg uppercase mb-2">{p.title}</h2>
              <p className="text-sm text-[color:var(--brand-text)]">{p.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-bold text-[color:var(--brand-green-dark)]">Coming soon →</span>
            </article>
          ))}
        </div>
        <p className="container-x mt-6 text-sm text-[color:var(--brand-muted)] text-center">
          Full blog content rolling out as the rebuild ships. Subscribe by booking your first job — we email new guides 1x/month.
        </p>
      </section>
      <CtaSection />
    </>
  );
}
