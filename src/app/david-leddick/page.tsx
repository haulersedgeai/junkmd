import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "David Leddick — Owner of JunkMD+ San Diego",
  description:
    "Meet David Leddick — owner of JunkMD+ since 2012. Grew JunkMD+ from a one-truck operation to a three-truck family business serving 15,000+ San Diegans.",
};

export default function DavidPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "David Leddick" }]} />

      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/crew-hero.jpg" alt="David Leddick — Owner of JunkMD+" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 400px" />
            </div>
            <div className="mt-4 p-4 rounded-lg bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)]">
              <p className="font-display text-2xl uppercase">David Leddick</p>
              <p className="text-sm text-[color:var(--brand-green-dark)] font-bold uppercase">Owner — Since 2012</p>
              <p className="text-sm text-[color:var(--brand-text)] mt-2">15,000+ San Diego clients served · Best Service 2021 · San Diego Best Awards.</p>
            </div>
          </div>
          <div className="prose-brand">
            <h1 className="font-display text-4xl uppercase mb-3">David Leddick — Owner of JunkMD+</h1>
            <p>
              David Leddick is the proud owner of JunkMD+, the go-to junk removal service in San Diego.
              With a passion for excellence and a focus on serving the community, David has built a
              company known for its professionalism and eco-friendly approach. Under his guidance,
              JunkMD+ has become a trusted name in hassle-free junk removal.
            </p>

            <h2>Background and Journey</h2>
            <p>
              David's journey began long before JunkMD+. As the owner of a successful moving company,
              he developed the skills and vision to grow a business. In 2012, he took over JunkMD — a
              small, one-man operation with a single truck. Over time, he expanded it into a thriving
              company with a team of eight professionals and three operational trucks. Today, JunkMD+
              serves over 15,000 clients across San Diego County, helping people clear their spaces and
              simplify their lives.
            </p>

            <h2>Philosophy and Vision</h2>
            <p>
              David's approach is simple: provide excellent service while making junk removal stress-free.
              He believes in honesty, reliability, and treating customers with respect. At JunkMD+, the
              mission is to help clients <strong>"Make Space for What Matters."</strong> That means more
              than just hauling away junk — it's about creating a smoother, less stressful process and
              reducing environmental impact by recycling and donating as much as possible.
            </p>

            <h2>Personal Touch</h2>
            <p>
              JunkMD+ thrives because of David's leadership and his partnership with his fiancée,
              Clemencia Sandoval, who joined the business in 2018. Together, they've built a company that
              values people — both their team and their clients. David's hands-on approach ensures that
              every client gets personal attention and that every project is handled with care and
              professionalism.
            </p>

            <h2>Community Engagement</h2>
            <p>
              San Diego isn't just where David works — it's his home. JunkMD+ gives back by donating
              reusable items to local charities like Goodwill and the Salvation Army. With over 1,290
              five-star Google reviews and numerous awards, including Best Service 2021 and the San
              Diego Best Awards, JunkMD+ has become a company that San Diegans trust.
            </p>

            <h2>Expertise and Specialization</h2>
            <p>
              From hauling office furniture to managing large-scale estate cleanouts, David and his team
              handle it all. JunkMD+ specializes in both residential and commercial junk removal,
              including construction debris and yard waste. Their focus on recycling and donations means
              fewer items end up in landfills. No matter the size or complexity of the project, JunkMD+
              approaches every job with the same level of care and efficiency.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
