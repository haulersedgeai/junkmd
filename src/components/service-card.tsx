import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Baby,
  Bath,
  BedDouble,
  Boxes,
  BrickWall,
  Building2,
  Car,
  ChefHat,
  ChevronsDown,
  ChevronsUp,
  Clock,
  Construction,
  Container,
  CookingPot,
  Cpu,
  Dumbbell,
  Fence,
  Grid2x2,
  Hammer,
  HandHeart,
  Home,
  KeyRound,
  Layers,
  Leaf,
  Microwave,
  Package,
  PanelTop,
  Recycle,
  Refrigerator,
  ShowerHead,
  Sofa,
  Store,
  Trash2,
  Tv,
  UtensilsCrossed,
  Warehouse,
  WashingMachine,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const LUCIDE_ICONS: Record<string, LucideIcon> = {
  Baby,
  Bath,
  BedDouble,
  Boxes,
  BrickWall,
  Building2,
  Car,
  ChefHat,
  ChevronsDown,
  ChevronsUp,
  Clock,
  Construction,
  Container,
  CookingPot,
  Cpu,
  Dumbbell,
  Fence,
  Grid2x2,
  Hammer,
  HandHeart,
  Home,
  KeyRound,
  Layers,
  Leaf,
  Microwave,
  Package,
  PanelTop,
  Recycle,
  Refrigerator,
  ShowerHead,
  Sofa,
  Store,
  Trash2,
  Tv,
  UtensilsCrossed,
  Warehouse,
  WashingMachine,
  Waves,
  Wrench,
  Zap,
};

export function ServiceCard({
  href,
  title,
  description,
  image,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
}) {
  const Icon = icon ? LUCIDE_ICONS[icon] : undefined;
  const showIconPanel = !!Icon;
  const showImage = !!image && !Icon;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col card overflow-hidden transition-all duration-200 hover:border-ink hover:shadow-[var(--shadow-md)]"
    >
      {showImage && (
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-muted">
          <Image
            src={image!}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      {showIconPanel && Icon && (
        <div
          className="relative aspect-[16/10] flex items-center justify-center bg-white"
          aria-hidden="true"
        >
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full"
            style={{ background: "rgba(136, 194, 78, 0.11)" }}
          >
            <Icon
              className="h-12 w-12"
              strokeWidth={1.75}
              style={{ color: "#88c24e" }}
            />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[18px] font-semibold text-ink leading-[1.3]" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <p className="mt-2 text-[14px] text-ink-soft leading-[1.55] line-clamp-2">{description}</p>
        <span
          className="mt-auto pt-4 inline-flex items-center gap-1 text-[13px] text-brand-dark"
          style={{ fontWeight: 500 }}
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
