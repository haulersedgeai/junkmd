import { Phone, Calendar, BadgeDollarSign } from "lucide-react";
import { SITE } from "@/lib/constants";

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg border-t border-border" style={{ boxShadow: "0 -4px 16px rgba(10,10,10,0.04)" }}>
      <div className="grid grid-cols-3 text-center" style={{ fontWeight: 500 }}>
        <a href={`tel:${SITE.phoneRaw}`} className="py-3 flex flex-col items-center gap-1 text-ink text-[12px]">
          <Phone className="h-4 w-4 text-ink-soft" />
          Call
        </a>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex flex-col items-center gap-1 bg-brand text-ink text-[12px]"
        >
          <Calendar className="h-4 w-4" />
          Book
        </a>
        <a href="/pricing" className="py-3 flex flex-col items-center gap-1 text-ink text-[12px]">
          <BadgeDollarSign className="h-4 w-4 text-ink-soft" />
          Save $20
        </a>
      </div>
    </div>
  );
}
