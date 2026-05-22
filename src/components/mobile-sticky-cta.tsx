import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink text-paper border-t border-paper/10">
      <div className="grid grid-cols-3 text-center text-[12px]" style={{ fontWeight: 500 }}>
        <a href={`tel:${SITE.phoneRaw}`} className="py-3 flex flex-col items-center gap-1 hover:bg-paper/5">
          <Phone className="h-4 w-4 text-brand" />
          <span>Call</span>
        </a>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex flex-col items-center gap-1 bg-brand text-ink"
          style={{ fontWeight: 600 }}
        >
          <Calendar className="h-4 w-4" />
          <span>Book online</span>
        </a>
        <a href="/pricing" className="py-3 flex flex-col items-center gap-1 hover:bg-paper/5">
          <span
            className="text-[15px]"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", color: "var(--brand)" }}
          >
            $20
          </span>
          <span>Save</span>
        </a>
      </div>
    </div>
  );
}
