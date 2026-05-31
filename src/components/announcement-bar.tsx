import { SITE } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-bg-soft border-b border-border">
      <div
        className="container-x flex items-center justify-center text-center text-[13px] leading-none gap-x-3 gap-y-1 flex-wrap"
        style={{ height: 36, fontWeight: 500 }}
      >
        <span className="text-brand-dark tracking-tight">★★★★★</span>
        <span className="text-ink">{SITE.reviews.totalDisplay} reviews</span>
        <span className="text-muted">·</span>
        <span className="text-ink-soft">Save $20 on your first appointment</span>
        <span className="text-muted hidden sm:inline">·</span>
        <span className="text-ink-soft hidden sm:inline">Same-day available</span>
      </div>
    </div>
  );
}
