import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ReviewGrid } from "@/components/review-grid";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About JunkMD+ — San Diego's Top-Rated Junk Removal Company",
  description:
    "JunkMD+ is San Diego's family-owned junk removal company. Founded 2012. 15,000+ clients served. 1,290+ five-star Google reviews. Make Space for What Matters.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About JunkMD+" }]} />

      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">About JunkMD+</span>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-4">
              San Diego's House-Call Junk Removal Company.
            </h1>
            <p className="text-[color:var(--brand-text)] text-lg leading-relaxed mb-4">
              We call ourselves <strong>JunkMD+</strong> because we treat junk removal like a house call.
              You schedule a two-hour arrival window. Two uniformed pros show up in a clean green truck.
              We size the job up, give you a flat up-front price, do all the heavy lifting, and leave the
              space cleaner than we found it.
            </p>
            <p className="text-[color:var(--brand-text)] leading-relaxed">
              We've been doing this since 2012. Family-owned. Eco-friendly. 15,000+ San Diego households and
              businesses served. <strong>Make Space for What Matters.</strong>
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/crew-action.jpeg" alt="JunkMD+ crew at work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div>
              <p className="font-display text-5xl text-[color:var(--brand-green-dark)]">13+</p>
              <p className="text-sm uppercase font-bold tracking-wide mt-1">Years Serving San Diego</p>
            </div>
            <div>
              <p className="font-display text-5xl text-[color:var(--brand-green-dark)]">15K+</p>
              <p className="text-sm uppercase font-bold tracking-wide mt-1">Clients Served</p>
            </div>
            <div>
              <p className="font-display text-5xl text-[color:var(--brand-green-dark)]">1,290+</p>
              <p className="text-sm uppercase font-bold tracking-wide mt-1">5-Star Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl uppercase mb-3">Mission</h2>
            <p className="prose-brand">
              <strong>Make Space for What Matters.</strong> Junk removal sounds simple — pick up the stuff,
              haul it away. But for our clients, the stuff usually represents something heavier: a parent
              who passed, a divorce, a long-awaited remodel, a downsize, a fresh start. We believe how we
              show up matters. So we show up uniformed, on time, kind, and ready to help you reclaim your
              space without making it weird.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase mb-3">Promise</h2>
            <p className="prose-brand">
              We promise three things every single house call: a flat <strong>up-front price</strong> before
              we touch your stuff (no surprises), <strong>same-day or next-day service</strong> on most
              weekdays, and an <strong>eco-first disposal commitment</strong>. Less than 15% of a typical
              haul ends up in a landfill. The rest goes to Goodwill, Salvation Army, certified e-waste
              recyclers, metal scrappers, or green-waste facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase text-center mb-8">Meet the Owners</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/david-leddick" className="group block bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-square bg-[color:var(--brand-bg-muted)]">
                <Image src="/images/crew-hero.jpg" alt="David Leddick — JunkMD+ Owner" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase mb-1">David Leddick</h3>
                <p className="text-sm text-[color:var(--brand-green-dark)] font-bold uppercase mb-2">Owner — Since 2012</p>
                <p className="text-sm text-[color:var(--brand-text)]">
                  David has built JunkMD+ from a one-man, one-truck operation in 2012 into a thriving family
                  business with 8 team members and 3 trucks. Read his story →
                </p>
              </div>
            </Link>
            <Link href="/clemencia-sandoval" className="group block bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-square bg-[color:var(--brand-bg-muted)]">
                <Image src="/images/crew-action.jpeg" alt="Clemencia Sandoval — JunkMD+ Co-Owner" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase mb-1">Clemencia Sandoval</h3>
                <p className="text-sm text-[color:var(--brand-green-dark)] font-bold uppercase mb-2">Co-Owner — Since 2018</p>
                <p className="text-sm text-[color:var(--brand-text)]">
                  Clemencia partnered with David in 2018 and runs operations, customer care, and community
                  partnerships. Read her story →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ReviewGrid limit={6} />

      <CtaSection title="Ready to Make Space?" subtitle={`Two-hour arrival windows, Mon–Sat. Same-day available. Save $20 on your first appointment.`} />
    </>
  );
}
