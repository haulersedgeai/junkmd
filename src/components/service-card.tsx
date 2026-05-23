import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
      className="group flex flex-col card overflow-hidden transition-all duration-200 hover:border-ink hover:shadow-[var(--shadow-md)]"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-muted">
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-[18px] font-semibold text-ink leading-[1.3]" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <p className="mt-2 text-[14px] text-ink-soft leading-[1.55] line-clamp-2">{description}</p>
        <span
          className="mt-4 inline-flex items-center gap-1 text-[13px] text-brand-dark"
          style={{ fontWeight: 500 }}
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
