import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function CtaSection({
  title = "Ready for a JunkMD+ house call?",
  subtitle = "Same-day and next-day appointments across San Diego. Save $20 on your first booking.",
}: {
  title?: string;
  subtitle?: string;
  variant?: "green" | "ink"; // kept for backward compat with existing callers, unused
}) {
  return (
    <section className="bg-forest text-paper">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
        <div>
          <p className="eyebrow eyebrow-on-dark mb-5">Book your house call</p>
          <h2
            className="text-paper max-w-xl"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              fontVariationSettings: "'opsz' 144, 'SOFT' 60",
            }}
          >
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-paper/80 text-[16px] leading-relaxed">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark w-full sm:w-auto"
          >
            Book online — Save $20
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn btn-ghost-on-dark w-full sm:w-auto">
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
