"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SLIDES = [
  { src: "/images/trucks.webp", alt: "JunkMD+ fleet of green trucks in San Diego" },
  { src: "/images/crew-action.jpeg", alt: "JunkMD+ crew loading a truck" },
  { src: "/images/DSC03672.jpg", alt: "JunkMD+ crew on a San Diego job" },
  { src: "/images/DSC03523.jpg", alt: "JunkMD+ truck at a San Diego property" },
  { src: "/images/truck-hero.webp", alt: "JunkMD+ green junk removal truck" },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 35, dragFree: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink" data-embla="hero">
      {/* Embla viewport */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {SLIDES.map((s, i) => (
            <div key={s.src} className="embla__slide relative h-full min-w-0 flex-[0_0_100%]">
              <div
                className="absolute inset-0 hero-kenburns"
                style={{
                  animationPlayState: selectedIndex === i ? "running" : "paused",
                }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ink overlay for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(10,10,10,0.55)" }}
        aria-hidden="true"
      />

      {/* Dot indicators bottom-right */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 pointer-events-auto">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              selectedIndex === i ? "bg-brand w-6" : "bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </div>
  );
}
