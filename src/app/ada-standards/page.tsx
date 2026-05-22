import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility — JunkMD+",
  description: "JunkMD+ accessibility statement. We're committed to WCAG 2.1 AA conformance and welcome accessibility feedback.",
};

export default function AdaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility" }]} />
      <section className="py-12 bg-white">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h1 className="font-display text-4xl uppercase">Accessibility Statement</h1>
          <p>JunkMD+ is committed to making our website accessible to everyone, including people with disabilities. We aim to conform with WCAG 2.1 Level AA.</p>
          <h2>What We Do</h2>
          <ul>
            <li>Keyboard-navigable layout</li>
            <li>Alt text on all content images</li>
            <li>Sufficient color contrast across our brand greens, dark text, and white background</li>
            <li>Mobile-first responsive design</li>
            <li>Plain-language content</li>
          </ul>
          <h2>Feedback</h2>
          <p>Found an accessibility issue? Email <a href="mailto:support@junkmd.com">support@junkmd.com</a> or call (858) 869-9448. We respond to accessibility requests promptly.</p>
        </div>
      </section>
    </>
  );
}
