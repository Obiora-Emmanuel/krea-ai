// components/Landing/LandingHero.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";


// ----- data -----
type Slide = {
  title: string;
  subtitle: string;
  cta: string;
  img: string;
  caption: string;
};

const leftSlides: Slide[] = [
  {
    title: "WAN 2.2 — Studio",
    subtitle: "WORKFLOWS",
    cta: "Open Studio",
    img: "/pics/p1.jpg",
    caption: "Build repeatable, controllable image workflows.",
  },
  {
    title: "WAN 2.2",
    subtitle: "IMAGE GENERATION",
    cta: "Try WAN 2.2",
    img: "/pics/p2.jpg",
    caption:
      "Generate complex images with the brand-new model and control realistic textures.",
  },
  {
    title: "WAN 2.2",
    subtitle: "IMAGE GENERATION",
    cta: "Try WAN 2.2",
    img: "/pics/p3.jpg",
    caption:
      "Generate complex images with the brand-new model and control realistic textures.",
  },
  {
    title: "WAN 2.2",
    subtitle: "IMAGE GENERATION",
    cta: "Try WAN 2.2",
    img: "/pics/p4.jpg",
    caption:
      "Generate complex images with the brand-new model and control realistic textures.",
  },
  {
    title: "WAN 2.2",
    subtitle: "IMAGE GENERATION",
    cta: "Try WAN 2.2",
    img: "/pics/p5.jpg",
    caption:
      "Generate complex images with the brand-new model and control realistic textures.",
  },
  {
    title: "WAN 2.2",
    subtitle: "IMAGE GENERATION",
    cta: "Try WAN 2.2",
    img: "/pics/p6.jpg",
    caption:
      "Generate complex images with the brand-new model and control realistic textures.",
  },
  {
    title: "WAN 2.2",
    subtitle: "IMAGE GENERATION",
    cta: "Try WAN 2.2",
    img: "/pics/p7.jpg",
    caption:
      "Generate complex images with the brand-new model and control realistic textures.",
  },
];

const rightSlides: Slide[] = [
  {
    title: "FLUX.1 Krea",
    subtitle: "OPEN SOURCE MODEL",
    cta: "Read more",
    img: "/pics/p3.jpg",
    caption:
      "We’re making the weights to our FLUX model open-source. Download and explore.",
  },
  {
    title: "Docs",
    subtitle: "GUIDES",
    cta: "Read docs",
    img: "/pics/p7.jpg",
    caption: "Model insights, usage tips, and examples.",
  },
  {
    title: "Docs",
    subtitle: "GUIDES",
    cta: "Read docs",
    img: "/pics/p5.jpg",
    caption: "Model insights, usage tips, and examples.",
  },
  {
    title: "Docs",
    subtitle: "GUIDES",
    cta: "Read docs",
    img: "/pics/p6.jpg",
    caption: "Model insights, usage tips, and examples.",
  },
];

// ----- tiny dot component -----
function Dot({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "h-2 w-2 rounded-full bg-foreground/30 transition",
        active && "bg-foreground"
      )}
    />
  );
}

// ----- LEFT: carousel with dots centered under it -----
function LeftHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {leftSlides.map((s, i) => (
            <CarouselItem key={i} className="lg:pl-20">
              <article className="relative overflow-hidden rounded-2xl shadow-sm">
                <div className="relative aspect-[16/7] h-[420px] w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                  {/* top-to-bottom gradient like the ref */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-black" />
                </div>

                {/* overlay copy */}
                <div className="absolute left-6 right-6 bottom-6 text-white">
                  <div className="text-[10px] tracking-widest opacity-90">
                    <span className="rounded bg-white/10 px-2 py-1 backdrop-blur">
                      {s.subtitle}
                    </span>
                  </div>
                  <h2 className="mt-2 text-3xl md:text-5xl font-semibold">{s.title}</h2>
                  <p className="mt-2 max-w-xl text-sm md:text-base opacity-90">
                    {s.caption}
                  </p>
                  <div className="mt-4">
                    <Button size="sm" variant="secondary" className="text-foreground">
                      {s.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots EXACTLY under the left card */}
      <div className="mt-2 flex w-full justify-end pr-2 gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <Dot key={i} active={i === current} />
        ))}
      </div>
    </div>
  );
}

// ----- RIGHT: carousel with CHEVRONS INSIDE bottom-right -----
function RightHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[Autoplay({ delay: 5500, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {rightSlides.map((s, i) => (
            <CarouselItem key={i} className="pl-4">
              <article className="relative overflow-hidden rounded-2xl shadow-sm">
                <div className="relative aspect-[16/7] h-[420px] w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                  {/* same legibility gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-black" />
                </div>

                <div className="absolute left-6 right-6 bottom-6 text-white">
                  <div className="text-[10px] tracking-widest opacity-90">
                    <span className="rounded bg-white/10 px-2 py-1 backdrop-blur">
                      {s.subtitle}
                    </span>
                  </div>
                  <h2 className="mt-2 text-3xl md:text-5xl font-semibold">{s.title}</h2>
                  <p className="mt-2 max-w-xl text-sm md:text-base opacity-90">
                    {s.caption}
                  </p>
                  <div className="mt-4">
                    <Button size="sm" variant="secondary" className="text-foreground">
                      {s.cta}
                    </Button>
                  </div>
                </div>

                {/* CHEVRONS INSIDE THE CARD, bottom-right */}
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
                <div className="pointer-events-none flex items-center mt-2 justify-end gap-x-4">
                  <button
                    aria-label="Previous"
                    onClick={() => api?.scrollPrev()}
                    className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/80 backdrop-blur hover:bg-background"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => api?.scrollNext()}
                    className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/80 backdrop-blur hover:bg-background"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
    </div>
  );
}

// ----- Wrapper (2/3 + 1/3 on desktop, stacked on mobile) -----
export function LandingHeroCarousel() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 space-y-4 md:space-y-0 lg:grid-cols-7 gap-3">
          <div className=" md:col-span-4">
            <LeftHeroCarousel />
          </div>
          <div className="md:col-span-3">
            <RightHeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
