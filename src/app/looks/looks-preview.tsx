"use client";

import { useEffect, useState } from "react";

import { Booking } from "@/components/sections/booking";
import { Gallery } from "@/components/sections/gallery";
import { ServiceCards } from "@/components/sections/features";
import {
  HeroCentered,
  HeroEditorial,
  HeroFullWidth,
  HeroObject,
  HeroSplit,
  HeroStatement,
} from "@/components/sections/hero";
import {
  darkLooks,
  looks,
  lookDescriptions,
  type LookName,
} from "@/config/theme";
import { home } from "@/content/home";
import { cn } from "@/lib/utils";
import type { HeroMedia, SectionImage } from "@/types/content";

const heroVariants = [
  "centered",
  "split",
  "statement",
  "fullwidth",
  "editorial",
  "object",
] as const;
type HeroVariant = (typeof heroVariants)[number];

const heroVariantLabels: Record<HeroVariant, string> = {
  centered: "Centered",
  split: "Split",
  statement: "Statement",
  fullwidth: "Full Width",
  editorial: "Editorial",
  object: "Object",
};

const demoMedia: HeroMedia = {
  type: "image",
  src: "/images/showcase/split.png",
  alt: "Platzhaltervorschau",
};
const demoObjectMedia: HeroMedia = {
  type: "object",
  src: "/images/showcase/object.png",
  alt: "Platzhaltervorschau",
};
const demoImage: SectionImage = {
  src: "/images/showcase/editorial.png",
  alt: "Platzhaltervorschau",
};
const demoGalleryImages: SectionImage[] = [
  { src: "/images/showcase/editorial.png", alt: "Platzhaltervorschau 1" },
  { src: "/images/showcase/split.png", alt: "Platzhaltervorschau 2" },
  { src: "/images/showcase/object.png", alt: "Platzhaltervorschau 3" },
];

function DemoHero({ variant }: { variant: HeroVariant }) {
  switch (variant) {
    case "split":
      return <HeroSplit {...home.hero} media={demoMedia} />;
    case "statement":
      return <HeroStatement {...home.hero} />;
    case "fullwidth":
      return <HeroFullWidth {...home.hero} image={demoImage} />;
    case "editorial":
      return <HeroEditorial {...home.hero} media={demoMedia} />;
    case "object":
      return <HeroObject {...home.hero} media={demoObjectMedia} />;
    case "centered":
    default:
      return <HeroCentered {...home.hero} />;
  }
}

/**
 * Internal preview: flip through every look, every Hero variant, and the
 * Gallery/Booking sections. It overrides `data-look` on <html> while
 * mounted and restores it on leave, so nothing about the shipped site
 * changes. Gallery/Booking render unconditionally here regardless of the
 * real `features` flags — this is a design tool, not the live site. Delete
 * src/app/looks once you've picked a look for a client.
 */
export function LooksPreview() {
  const [look, setLook] = useState<LookName>("glass");
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("centered");

  useEffect(() => {
    const root = document.documentElement;
    const previousLook = root.getAttribute("data-look");
    const wasDark = root.classList.contains("dark");
    root.setAttribute("data-look", look);
    root.classList.toggle("dark", darkLooks.includes(look));
    return () => {
      if (previousLook) root.setAttribute("data-look", previousLook);
      root.classList.toggle("dark", wasDark);
    };
  }, [look]);

  return (
    <div>
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3">
          <span className="mr-1 text-sm font-medium text-muted-foreground">
            Look
          </span>
          {looks.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setLook(name)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition",
                look === name
                  ? "border-brand bg-brand/10 text-brand-strong"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 border-t px-4 py-3">
          <span className="mr-1 text-sm font-medium text-muted-foreground">
            Hero-Variante
          </span>
          {heroVariants.map((variant) => (
            <button
              key={variant}
              type="button"
              onClick={() => setHeroVariant(variant)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                heroVariant === variant
                  ? "border-brand bg-brand/10 text-brand-strong"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {heroVariantLabels[variant]}
            </button>
          ))}
        </div>
        <p className="mx-auto max-w-5xl px-4 pb-3 text-sm text-muted-foreground">
          {lookDescriptions[look]}
        </p>
      </div>

      <DemoHero variant={heroVariant} />
      <ServiceCards
        intro={home.services.intro}
        items={home.services.items}
        background="muted"
      />
      <Gallery
        intro={{
          eyebrow: "Referenzen",
          title: "Galerie-Vorschau",
          subtitle: "Zeigt den Hover-Zoom unabhängig vom features-Flag.",
        }}
        images={demoGalleryImages}
      />
      <Booking
        intro={{
          eyebrow: "Termin",
          title: "Buchungs-Vorschau",
          subtitle: "Zeigt die Booking-Section unabhängig vom features-Flag.",
        }}
        ctaLabel="Termin buchen"
        url="#"
        background="muted"
      />
    </div>
  );
}
