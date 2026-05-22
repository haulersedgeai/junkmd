import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export function CtaSection({
  title = "Ready for a JunkMD+ House Call?",
  subtitle = "Same-day or next-day appointments across San Diego. Save $20 on your first booking.",
  variant = "green",
}: {
  title?: string;
  subtitle?: string;
  variant?: "green" | "ink";
}) {
  const bg = variant === "green" ? "bg-[color:var(--brand-green)]" : "bg-[color:var(--brand-ink)]";
  return (
    <section className={`${bg} text-white py-14`}>
      <div className="container-x text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl uppercase text-white mb-3">{title}</h2>
        <p className="text-white/90 mb-6">{subtitle}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            <Calendar className="h-4 w-4" />
            Book Online — Save $20
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-white">
            <Phone className="h-4 w-4" />
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
