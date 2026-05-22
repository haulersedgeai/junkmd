import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Our Company — JunkMD+ San Diego",
  description:
    "Learn about JunkMD+ — family-owned San Diego junk removal company since 2012. 15,000+ clients served, eco-friendly disposal, full-service house calls.",
};

export default function OurCompanyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Company" }]} />
      <Hero
        title="Our Company"
        subtitle="A San Diego family-owned junk removal company. We treat every house call like it's the only one we're doing today."
        image="/images/crew-hero.jpg"
        imageAlt="JunkMD+ team and truck"
      />

      <section className="py-12 bg-white">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h2>The Short Version</h2>
          <p>
            JunkMD+ started in 2012 as a one-truck, one-person operation. Today it's a three-truck,
            eight-person family business that has served more than 15,000 San Diego households and
            businesses. We're licensed, insured, NARPM San Diego Chapter partners, NetVendor partners,
            and Local Junkers affiliates.
          </p>

          <h2>The Long Version</h2>
          <p>
            David Leddick bought JunkMD in 2012 after years of running a successful moving company. He'd
            seen too many junk-removal trucks show up late, look dirty, hit walls, and surprise customers
            with mystery upcharges. He thought: what if a junk-removal company felt more like a friendly,
            on-time doctor's house call? Uniformed crew, clear pricing, in and out fast, leave the space
            better than you found it.
          </p>
          <p>
            In 2018, David's fiancée Clemencia Sandoval joined as co-owner. She brought a customer-care
            and operations background that's turned JunkMD+ into one of the best-reviewed junk removal
            companies in California — 1,290+ five-star Google reviews and counting.
          </p>

          <h2>What We Believe</h2>
          <ul>
            <li><strong>Show up.</strong> On time, in a uniform, with a clean truck.</li>
            <li><strong>Quote up-front.</strong> Flat-rate. No surprises. Ever.</li>
            <li><strong>Donate and recycle first.</strong> The landfill is the last resort, not the default.</li>
            <li><strong>Treat clients like neighbors.</strong> Because most of them are.</li>
          </ul>

          <h2>Memberships & Partnerships</h2>
          <ul>
            <li>NARPM San Diego Chapter — property management partner</li>
            <li>NetVendor — verified contractor partner</li>
            <li>Local Junkers — eco-friendly hauler affiliate</li>
            <li>Google My Business Verified — 5.0 average across 1,290+ reviews</li>
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
