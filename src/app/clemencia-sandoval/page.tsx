import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";

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
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/crew-action.jpeg" alt="Clemencia Sandoval — Co-Owner of JunkMD+" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 400px" />
            </div>
            <div className="mt-4 p-4 rounded-lg bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)]">
              <p className="font-display text-2xl uppercase">Clemencia Sandoval</p>
              <p className="text-sm text-[color:var(--brand-green-dark)] font-bold uppercase">Co-Owner — Since 2018</p>
              <p className="text-sm text-[color:var(--brand-text)] mt-2">Operations · Customer care · Community partnerships · Goodwill & Salvation Army outreach.</p>
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
              Since Clemencia became co-owner, JunkMD+ has achieved remarkable success. The company has
              earned awards like Best Service 2021 and the San Diego Best Awards. With 1,290+ five-star
              Google reviews and 150+ five-star Yelp reviews, JunkMD+ has become a household name in
              San Diego.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
