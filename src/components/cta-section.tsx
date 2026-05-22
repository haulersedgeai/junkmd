import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function CtaSection({
  title = "Ready for a JunkMD+ house call?",
  subtitle = "Same-day and next-day appointments across San Diego. Save $20 on your first booking.",
}: {
  title?: string;
  subtitle?: string;
  variant?: "green" | "ink"; // kept for back-compat with existing callers
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-x section text-center">
        <h2 className="text-white" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{title}</h2>
        <p className="mt-4 max-w-xl mx-auto text-[16px] leading-[1.6] text-white/70">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
            Book now
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn btn-ghost-white btn-lg">
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>
        <p
          className="mt-6 text-[13px] text-white/50"
          style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        >
          {SITE.phone} · Mon–Sat · 2-hour arrival windows
        </p>
      </div>
    </section>
  );
}
