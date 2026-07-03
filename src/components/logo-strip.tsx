import Image from "next/image";
import { SITE } from "@/lib/constants";

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-bg">
      <div className="container-x flex flex-col items-center md:flex-row md:justify-between gap-6 py-6">
        <p className="label">Trusted by San Diego since 2012</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {SITE.partners.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={200}
              height={64}
              className="h-16 w-auto object-contain"
            />
          ))}
          <Image
            src="/images/partners/google-reviews.png"
            alt="Google Reviews"
            width={200}
            height={64}
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
