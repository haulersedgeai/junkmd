import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy — JunkMD+",
  description: "JunkMD+ privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="py-12 bg-white">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h1 className="font-display text-4xl uppercase">Privacy Policy</h1>
          <p>Last updated: 2026-01-01</p>
          <p>
            JunkMD Inc ("JunkMD+", "we", "us") respects your privacy. This policy explains what we
            collect when you use junkmd.com, why, and how we handle it.
          </p>
          <h2>Information We Collect</h2>
          <ul>
            <li>Contact info you give us when booking or submitting a quote: name, email, phone, address.</li>
            <li>Job details you give us: items to remove, photos, special instructions.</li>
            <li>Standard web analytics: pages visited, device type, referrer (no personal identifiers).</li>
          </ul>
          <h2>How We Use It</h2>
          <ul>
            <li>To schedule and complete your junk removal appointment.</li>
            <li>To contact you about your appointment, follow-ups, and reviews.</li>
            <li>To improve our website and service.</li>
          </ul>
          <h2>How We Don't Use It</h2>
          <p>We don't sell your personal information. We don't share it beyond what's needed to deliver service (our team, our booking system at HouseCall Pro, our email provider).</p>
          <h2>Your Rights</h2>
          <p>Email <a href="mailto:support@junkmd.com">support@junkmd.com</a> to request a copy of your data or have it deleted.</p>
        </div>
      </section>
    </>
  );
}
