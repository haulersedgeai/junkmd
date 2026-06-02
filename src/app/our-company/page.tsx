import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Our Company — JunkMD+ San Diego",
  description:
    "Learn about JunkMD+ — family-owned San Diego junk removal company since 2012. 15,000+ clients served, eco-friendly disposal, full-service house calls.",
};

const STATS = [
  { value: "2012", label: "Family-owned since" },
  { value: "15K+", label: "San Diego jobs" },
  { value: "1,396+", label: "5-star Google reviews" },
  { value: "1 = 6", label: "Truck = pickup loads" },
];

export default function OurCompanyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Company" }]} />

      {/* Photo banner — real team shot */}
      <section className="relative isolate overflow-hidden bg-ink text-white" style={{ minHeight: 480 }}>
        <Image
          src="/images/team/team-on-truck.jpg"
          alt="The JunkMD+ team with their green junk-removal truck in San Diego"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-x relative flex flex-col items-start justify-end min-h-[420px] md:min-h-[480px] pt-24 pb-12 md:pb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-1 text-[13px] mb-5"
            style={{ fontWeight: 500 }}
          >
            <span className="text-brand">★</span>
            <span className="text-white">Family-owned since 2012</span>
          </span>
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              maxWidth: "720px",
              textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            The crew behind the green truck.
          </h1>
          <p
            className="mt-5 max-w-[600px] text-white/90 text-[18px] leading-[1.55]"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
          >
            A San Diego family-owned junk removal company. We treat every house call like it&apos;s
            the only one we&apos;re doing today.
          </p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="py-10 bg-[color:var(--brand-bg-soft)] border-y border-[color:var(--brand-border)]">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl md:text-5xl text-[color:var(--brand-green-dark)] leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-xs md:text-sm uppercase font-bold tracking-wide text-[color:var(--brand-ink)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founding story */}
      <section className="py-16 bg-white">
        <div className="container-x grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          <div className="prose-brand max-w-none">
            <h2>The short version</h2>
            <p>
              JunkMD+ started in 2012 as a one-truck, one-person operation. Today it&apos;s a three-truck,
              eight-person family business that has served more than 15,000 San Diego households and
              businesses. We&apos;re licensed, insured, NARPM San Diego Chapter partners, NetVendor
              partners, and Local Junkers affiliates.
            </p>

            <h2>The long version</h2>
            <p>
              David Leddick bought JunkMD in 2012 after years of running a successful moving company.
              He&apos;d seen too many junk-removal trucks show up late, look dirty, hit walls, and surprise
              customers with mystery upcharges. He thought: what if a junk-removal company felt more like
              a friendly, on-time doctor&apos;s house call? Uniformed crew, clear pricing, in and out fast,
              leave the space better than you found it.
            </p>
            <p>
              In 2018, Clemencia Sandoval joined as co-owner. She brought a customer-care and operations
              background that&apos;s turned JunkMD+ into one of the best-reviewed junk removal companies
              in California — 1,396+ five-star Google reviews and counting.
            </p>

            <h2>What we believe</h2>
            <ul>
              <li><strong>Show up.</strong> On time, in a uniform, with a clean truck.</li>
              <li><strong>Quote up-front.</strong> Flat-rate. No surprises. Ever.</li>
              <li><strong>Donate and recycle first.</strong> The landfill is the last resort, not the default.</li>
              <li><strong>Treat clients like neighbors.</strong> Because most of them are.</li>
            </ul>
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] rounded-xl p-6">
              <p className="label" style={{ color: "var(--brand-green-dark)" }}>Memberships</p>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--brand-text)]">
                <li>· NARPM San Diego Chapter</li>
                <li>· NetVendor verified contractor</li>
                <li>· Local Junkers eco-hauler</li>
                <li>· Google Verified — 5.0 average</li>
              </ul>
            </div>
            <div className="bg-white border border-[color:var(--brand-border)] rounded-xl p-6">
              <p className="label" style={{ color: "var(--brand-green-dark)" }}>Home base</p>
              <p className="mt-3 text-sm text-[color:var(--brand-text)] leading-relaxed">
                We dispatch from Morena Blvd in Bay Park — central San Diego County, with most jobs
                inside a 30-minute radius. Two-hour arrival windows, Mon–Sat.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Owners */}
      <section className="py-16 bg-[color:var(--brand-bg-soft)] border-y border-[color:var(--brand-border)]">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <p className="label" style={{ color: "var(--brand-green-dark)" }}>The owners</p>
            <h2 className="mt-3">Family-owned and on the truck.</h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
              You&apos;re working with the people who run the company. No franchise, no call center.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/david-leddick"
              className="group block bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square bg-[color:var(--brand-bg-muted)]">
                <Image
                  src="/images/team/david.webp"
                  alt="David Leddick, owner of JunkMD+"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase mb-1">David Leddick</h3>
                <p className="text-sm text-[color:var(--brand-green-dark)] font-bold uppercase mb-2">
                  Owner — Since 2012
                </p>
                <p className="text-sm text-[color:var(--brand-text)]">
                  David has built JunkMD+ from a one-man, one-truck operation in 2012 into a thriving
                  family business with 8 team members and 3 trucks. Read his story →
                </p>
              </div>
            </Link>
            <Link
              href="/clemencia-sandoval"
              className="group block bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square bg-[color:var(--brand-bg-muted)]">
                <Image
                  src="/images/team/clemencia.webp"
                  alt="Clemencia Sandoval, co-owner of JunkMD+"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase mb-1">Clemencia Sandoval</h3>
                <p className="text-sm text-[color:var(--brand-green-dark)] font-bold uppercase mb-2">
                  Co-Owner — Since 2018
                </p>
                <p className="text-sm text-[color:var(--brand-text)]">
                  Clemencia partnered with David in 2018 and runs operations, customer care, and
                  community partnerships. Read her story →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
