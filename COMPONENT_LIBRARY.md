# COMPONENT_LIBRARY.md — Component Catalog

A human-readable tour of every component. For search-by-tag/industry/
theme, use the machine-readable `src/registry/components.ts` instead —
see `COMPONENT_REGISTRY.md`. `PLAN.md` §4 remains the original,
slightly shorter summary; this document is the full catalog kept in
sync with the registry.

## Layout & navigation (`src/components/layout/`)

`Container`, `Section` (the two structural primitives every page is built
from — width and vertical rhythm, both token-driven), `Header` (sticky,
config-driven), `MobileNav` (Sheet-based drawer), `Footer`
(config-driven link columns + legal + socials).

## Hero system (`src/components/sections/hero.tsx`)

Six structurally distinct variants sharing one `HeroBaseProps` interface
— `HeroCentered`, `HeroSplit`, `HeroStatement`, `HeroFullWidth`,
`HeroEditorial`, `HeroObject` — plus the shared `HeroVisual` media
renderer (image/video/object stage) they build on. This is the component
family with the most real structural range today; picking the variant
that matches the brief (not defaulting to `HeroCentered`) is a
`WEBSITE_ARCHITECT.md` decision, not an afterthought.

## Content sections (`src/components/sections/`)

`FeatureGrid`, `FeatureSplit`, `ServiceCards` (features.tsx),
`TestimonialsGrid`, `TestimonialsCarousel` (testimonials.tsx), `Stats`,
`PricingTable`, `FAQ`, `CTA` (centered + panel variants),
`TeamGrid`, `ProcessSteps`, `LogoCloud`, `Gallery` — a grid with hover
zoom and optional link-through to a detail page (`SectionImage.href`).

## Business components (`src/components/sections/`, `src/components/shared/`)

`ContactSection` + `ContactForm` (validated, spam-protected, Resend-backed
email), `Booking` (external booking-tool link, feature-flagged),
`WhatsAppButton` (floating, feature-flagged), `CookieConsent` +
Vercel Analytics/Speed Insights (feature-flagged, GDPR-gated).

## Shared (`src/components/shared/`)

`SectionHeading` (the eyebrow → headline → subline pattern nearly every
section opens with), `TestimonialCard`, `SkipLink` (a11y), `LegalText`.

## UI primitives (`src/components/ui/`)

shadcn/ui-derived: `Button` (6 `cva` variants × 4 sizes), `Input`,
`Textarea`, `Label`, `Accordion`, `Sheet`. See
`reference-library/sources/shadcn-ui.md` for the origin of this pattern.

## Motion (`src/components/motion/`)

`FadeIn` / `FadeInStagger`, `Magnetic`, `SpotlightCard`,
`AnimatedNumber` — see `MOTION_SYSTEM.md`.

## What's deliberately not here yet

Grid variants beyond a uniform grid (bento, masonry, horizontal-scroll),
a real in-house calendar/booking UI, a mega-menu or sidebar navigation,
and industry-specific business components (e.g. a menu/reservation
pattern for restaurants) are documented as backlog in `ROADMAP.md`, not
built speculatively — CLAUDE.md §8's "a concrete, immediate consumer"
rule applies to every new component the same way it applies to every new
theme.
