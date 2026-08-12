import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { SectionIntro } from "@/types/content";

interface BookingProps {
  intro: SectionIntro;
  /** Label for the external booking link, e.g. "Termin buchen". */
  ctaLabel: string;
  /** URL of the external booking tool (Calendly, cal.com, …). */
  url: string;
  background?: SectionBackground;
  className?: string;
}

// A single link out to an external booking tool — no in-house calendar or
// backend, just a clear invitation to schedule directly (only rendered when
// features.booking.enabled, see src/config/features.ts).
export function Booking({
  intro,
  ctaLabel,
  url,
  background,
  className,
}: BookingProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        <FadeIn className="flex flex-col items-center gap-8">
          <SectionHeading {...intro} />
          <Button asChild size="lg">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
            </a>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
