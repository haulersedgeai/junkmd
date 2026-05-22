import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
      className="group flex flex-col bg-paper-pure border border-border rounded-lg overflow-hidden hover:border-ink/40 transition-colors"
    >
      {image && (
        <div className="relative aspect-[5/3] overflow-hidden">
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover img-soft transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" aria-hidden="true" />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3
          className="text-ink mb-2"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "1.375rem",
            fontWeight: 500,
            letterSpacing: "-0.015em",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
        <p className="text-[14px] text-ink-soft leading-relaxed line-clamp-3 flex-1">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] text-ink" style={{ fontWeight: 500 }}>
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
