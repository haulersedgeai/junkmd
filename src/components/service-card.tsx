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
      className="group flex flex-col card card-hover overflow-hidden transition-all duration-150"
    >
      {image && (
        <div className="relative aspect-[5/3] overflow-hidden bg-bg-muted">
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[18px] font-semibold text-ink leading-[1.3]" style={{ letterSpacing: "-0.01em" }}>
            {title}
          </h3>
          <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-muted opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-ink" />
        </div>
        <p className="mt-2 text-[14px] text-muted leading-[1.55] line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
