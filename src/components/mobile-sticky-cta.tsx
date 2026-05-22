import { Phone, Calendar, Tag } from "lucide-react";
import { SITE } from "@/lib/constants";

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[color:var(--brand-border)] shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 text-center text-xs font-bold uppercase">
        <a href={`tel:${SITE.phoneRaw}`} className="py-3 flex flex-col items-center gap-0.5 text-[color:var(--brand-ink)]">
          <Phone className="h-5 w-5 text-[color:var(--brand-green)]" />
          Call
        </a>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex flex-col items-center gap-0.5 bg-[color:var(--brand-green)] text-white"
        >
          <Calendar className="h-5 w-5" />
          Book Online
        </a>
        <a href="/pricing" className="py-3 flex flex-col items-center gap-0.5 text-[color:var(--brand-ink)]">
          <Tag className="h-5 w-5 text-[color:var(--brand-green)]" />
          Save $20
        </a>
      </div>
    </div>
  );
}
