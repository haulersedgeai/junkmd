import { ServiceCard } from "@/components/service-card";

export function ServiceGrid({
  items,
}: {
  items: { href: string; title: string; description: string; image?: string; icon?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((i) => (
        <ServiceCard key={i.href} {...i} />
      ))}
    </div>
  );
}
