import { Booking } from "@/components/sections/booking";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { ServiceCards } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { HeroCentered } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { TestimonialsGrid } from "@/components/sections/testimonials";
import { features } from "@/config/features";
import { home } from "@/content/home";

// Default homepage composition following the canonical arc (DESIGN.md §14):
// promise → offer → proof → process → deep proof → objections → action.
// Gallery and Booking are optional add-ons, toggled via `npm run setup`.
export default function HomePage() {
  return (
    <>
      <HeroCentered {...home.hero} />
      <ServiceCards
        intro={home.services.intro}
        items={home.services.items}
        background="muted"
      />
      {features.gallery && (
        <Gallery intro={home.gallery.intro} images={home.gallery.images} />
      )}
      <Stats items={home.stats} />
      <ProcessSteps
        intro={home.process.intro}
        steps={home.process.steps}
        background="muted"
      />
      <TestimonialsGrid
        intro={home.testimonials.intro}
        items={home.testimonials.items}
      />
      {features.booking.enabled && features.booking.url && (
        <Booking
          intro={{
            eyebrow: "Termin",
            title: "Direkt einen Termin buchen",
            subtitle:
              "Kein Formular, keine Wartezeit — wählen Sie selbst einen passenden Slot.",
          }}
          ctaLabel="Termin buchen"
          url={features.booking.url}
          background="muted"
        />
      )}
      <FAQ intro={home.faq.intro} items={home.faq.items} background="muted" />
      <CTA {...home.cta} />
    </>
  );
}
