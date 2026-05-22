import Image from "next/image";
import { SITE } from "@/lib/constants";

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-bg">
      <div className="container-x flex flex-col items-center md:flex-row md:justify-between gap-6 py-6">
        <p className="label">Trusted by San Diego since 2012</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 grayscale opacity-70">
          {SITE.partners.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={120}
              height={48}
              className="h-6 w-auto object-contain"
            />
          ))}
          <Image
            src="/images/partners/google-reviews.png"
            alt="Google Reviews"
            width={120}
            height={48}
            className="h-6 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
