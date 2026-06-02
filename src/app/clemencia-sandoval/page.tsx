import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Clemencia Sandoval — Co-Owner of JunkMD+ San Diego",
  description:
    "Meet Clemencia Sandoval — co-owner of JunkMD+ since 2018. Leader behind customer care, operations, and community outreach for San Diego's top-rated junk removal company.",
};

export default function ClemenciaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Clemencia Sandoval" }]} />

      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <div className="mb-4 rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/images/team/clemencia.webp"
                alt="Clemencia Sandoval, co-owner of JunkMD+"
                width={1440}
                height={1440}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[color:var(--brand-green)] to-[color:var(--brand-green-dark)] p-8 text-center text-white">
              <p className="font-display text-3xl uppercase text-white leading-tight">Clemencia Sandoval</p>
              <p className="text-sm uppercase tracking-wider mt-1 opacity-95">Co-Owner · Since 2018</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-xs mt-2 opacity-90">Operations · Customer Care · Community</p>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] text-sm">
              <p className="font-bold text-[color:var(--brand-ink)] mb-1">Quick Facts</p>
              <ul className="space-y-1 text-[color:var(--brand-text)]">
                <li>· Co-owner since 2018</li>
                <li>· Background: business management &amp; customer care</li>
                <li>· Leads ops, dispatch, and charity partnerships</li>
                <li>· Goodwill &amp; Salvation Army donation coordinator</li>
              </ul>
            </div>
          </div>
          <div className="prose-brand">
            <h1 className="font-display text-4xl uppercase mb-3">Clemencia Sandoval — Co-Owner of JunkMD+</h1>
            <p>
              Meet Clemencia Sandoval, the co-owner of JunkMD+ and a driving force behind San Diego's
              favorite junk removal company. Since teaming up with David Leddick in 2018, Clemencia has
              helped transform the business into a trusted name known for eco-friendly solutions and
              exceptional customer service. She's passionate about helping clients reclaim their spaces
              and making a difference in the local community.
            </p>

            <h2>Background and Journey</h2>
            <p>
              Before joining JunkMD+, Clemencia built her career in business management and customer care.
              When she partnered with David in 2018, JunkMD was a growing operation. Together, they
              expanded it into a thriving company with three trucks and a skilled team of eight. Today,
              JunkMD+ serves thousands of clients across San Diego County, helping them declutter and
              create room for what matters most.
            </p>

            <h2>Vision and Philosophy</h2>
            <p>
              Clemencia believes junk removal should be easy and stress-free. Her approach centers on
              trust, transparency, and delivering on promises. For her, it's not just about hauling away
              items — it's about leaving clients with a clean, refreshed space. Clemencia is also deeply
              committed to sustainability, ensuring JunkMD+ recycles, donates, and disposes of items
              responsibly.
            </p>

            <h2>Role at JunkMD+</h2>
            <p>
              As co-owner, Clemencia takes on a wide range of responsibilities. She manages business
              operations, oversees customer service, and ensures the team delivers top-quality work.
              Clemencia is also heavily involved in community outreach, partnering with local charities
              to give reusable items a second life. Her leadership ensures that every job reflects the
              company's values of professionalism and care.
            </p>

            <h2>Community Impact</h2>
            <p>
              Supporting San Diego is at the heart of Clemencia's work. She collaborates with charities
              like Goodwill and the Salvation Army to donate usable items, reducing waste and helping
              those in need. Under her guidance, JunkMD+ prioritizes sustainable practices that protect
              the environment while serving the community.
            </p>

            <h2>Achievements and Recognition</h2>
            <p>
              Since Clemencia became co-owner, JunkMD+ has achieved remarkable success. With 1,396+
              five-star Google reviews and 221+ five-star Yelp reviews, JunkMD+ has become a household
              name in San Diego.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
