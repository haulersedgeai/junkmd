import Link from "next/link";
import { Tag } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Save20Bar() {
  return (
    <div className="bg-[color:var(--brand-ink)] text-white text-xs sm:text-sm">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center">
        <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider">
          <Tag className="h-4 w-4 text-[color:var(--brand-green)]" />
          First Appointment? <span className="text-[color:var(--brand-green)]">Save $20</span>
        </span>
        <span className="hidden sm:inline opacity-70">•</span>
        <Link
          href="/pricing"
          className="underline-offset-2 hover:underline opacity-90 hover:opacity-100"
        >
          Learn More
        </Link>
        <span className="hidden sm:inline opacity-70">•</span>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[color:var(--brand-green)] hover:text-white"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
