import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function ServiceCard({
  href,
  title,
  description,
  image,
}: {
  href: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden hover:shadow-md transition-shadow"
    >
      {image && (
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display text-lg uppercase mb-2 group-hover:text-[color:var(--brand-green-dark)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[color:var(--brand-text)] line-clamp-3">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-green-dark)]">
          Learn More
          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
