// Machine-readable catalog of every reusable component in the library
// (COMPONENT_REGISTRY.md explains the schema and the workflow). This is
// the first thing to search — via type/tags/suitableFor — before writing
// a new component for a client project (CLAUDE.md §8, §1, §5).
//
// Internal sub-components that are never imported outside their own file
// (HeroEyebrow, HeroButtons, FeatureIcon, ContactChannel, …) are not
// listed separately — they're implementation detail of the entry that
// uses them.

import type { LookName } from "@/config/theme";

export type ComponentCategory =
  | "layout"
  | "navigation"
  | "hero"
  | "content"
  | "card"
  | "form"
  | "business"
  | "shared"
  | "ui"
  | "motion";

export interface ComponentRegistryEntry {
  /** Stable, kebab-case identifier — referenced from docs and other entries. */
  id: string;
  category: ComponentCategory;
  /** Exported symbol name(s), as imported from `path`. */
  name: string;
  path: string;
  description: string;
  tags: string[];
  /** Looks this component has been visually verified against. "all" means
   *  it is fully token-driven with no look-specific code path. */
  themes: readonly LookName[] | "all";
  /** Motion patterns this component uses internally (see MOTION_SYSTEM.md). */
  animation: string[];
  responsive: boolean;
  /** Industries/briefs this component tends to fit well — a starting
   *  suggestion for the Website Architect (WEBSITE_ARCHITECT.md), never
   *  a restriction. */
  suitableFor: string[];
  /** reference-library/sources/*.md ids this pattern draws on, if any. */
  referenceSources?: string[];
}

export const componentRegistry: ComponentRegistryEntry[] = [
  // ── Layout ─────────────────────────────────────────────────────────
  {
    id: "container",
    category: "layout",
    name: "Container",
    path: "src/components/layout/container.tsx",
    description:
      "The single source of page width and horizontal padding. Every section's content lives inside it.",
    tags: ["grid", "width", "primitive"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "section",
    category: "layout",
    name: "Section",
    path: "src/components/layout/section.tsx",
    description:
      "The single source of vertical rhythm between sections. Padding scales with the --section-rhythm token, so a theme can be tighter (swiss, brutalist) or looser (organic) without touching every section.",
    tags: ["rhythm", "spacing", "primitive", "background"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "header",
    category: "navigation",
    name: "Header",
    path: "src/components/layout/header.tsx",
    description:
      "Sticky top navigation, fully config-driven from src/config/navigation.ts and src/config/site.ts — logo, nav links, primary CTA, mobile trigger.",
    tags: ["navigation", "sticky", "nav-bar"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "mobile-nav",
    category: "navigation",
    name: "MobileNav",
    path: "src/components/layout/mobile-nav.tsx",
    description:
      "Sheet/drawer-based mobile navigation (shadcn Sheet), triggered from Header on small viewports.",
    tags: ["navigation", "mobile", "drawer"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "footer",
    category: "layout",
    name: "Footer",
    path: "src/components/layout/footer.tsx",
    description:
      "Site footer: brand block, link columns from navigation.footer, legal links, social profiles (only rendered when configured).",
    tags: ["footer", "navigation", "legal"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },

  // ── Hero ───────────────────────────────────────────────────────────
  {
    id: "hero-centered",
    category: "hero",
    name: "HeroCentered",
    path: "src/components/sections/hero.tsx",
    description:
      "Centered promise hero: eyebrow, headline, subline, actions, a soft ambient brand glow (scales with --spotlight-strength). The safe, calm default.",
    tags: ["hero", "centered", "typography-led"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["agency", "corporate", "consulting", "saas", "default"],
  },
  {
    id: "hero-split",
    category: "hero",
    name: "HeroSplit",
    path: "src/components/sections/hero.tsx",
    description:
      "Copy on one side, a framed image/video/object visual (via HeroVisual) on the other. The visual is the LCP element.",
    tags: ["hero", "split", "image", "video"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["saas", "product", "portfolio", "architecture"],
  },
  {
    id: "hero-statement",
    category: "hero",
    name: "HeroStatement",
    path: "src/components/sections/hero.tsx",
    description:
      "A single large, left-aligned claim carried by type alone — no visual. For briefs where the words are the whole point.",
    tags: ["hero", "typography-led", "minimal"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["editorial", "personal-brand", "consulting", "law-firm"],
  },
  {
    id: "hero-full-width",
    category: "hero",
    name: "HeroFullWidth",
    path: "src/components/sections/hero.tsx",
    description:
      "Full-bleed background photo with a scrim and light-on-dark overlay content. The cinematic/dramatic opener — the structural match for museum, hospitality, and real-estate briefs.",
    tags: ["hero", "full-bleed", "image", "cinematic", "dark"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: [
      "museum",
      "gallery",
      "real-estate",
      "hotel",
      "event",
      "restaurant",
      "photography",
    ],
  },
  {
    id: "hero-editorial",
    category: "hero",
    name: "HeroEditorial",
    path: "src/components/sections/hero.tsx",
    description:
      "Magazine-grade opener: large headline above a hairline rule, lead paragraph offset right, actions anchored left, optional wide visual band below.",
    tags: ["hero", "editorial", "asymmetric", "typography-led"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["fashion", "magazine", "architecture", "creative-agency"],
  },
  {
    id: "hero-object",
    category: "hero",
    name: "HeroObject",
    path: "src/components/sections/hero.tsx",
    description:
      "Centered copy above a large product stage — Apple-grade floating-object treatment via HeroVisual's object mode.",
    tags: ["hero", "product", "stage", "centered"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["product", "saas", "automotive", "e-commerce"],
  },
  {
    id: "hero-visual",
    category: "hero",
    name: "HeroVisual",
    path: "src/components/sections/hero-visual.tsx",
    description:
      "The unified media renderer behind hero-split/editorial/object: framed image, autoplaying muted video, or a floating object on a stage. Also reusable standalone for a large single framed image outside a hero (e.g. a project detail page).",
    tags: ["media", "image", "video", "frame"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },

  // ── Content sections ───────────────────────────────────────────────
  {
    id: "feature-grid",
    category: "content",
    name: "FeatureGrid",
    path: "src/components/sections/features.tsx",
    description: "Icon-card grid, the default feature/benefit presentation.",
    tags: ["features", "grid", "icons"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["saas", "agency", "product"],
  },
  {
    id: "feature-split",
    category: "content",
    name: "FeatureSplit",
    path: "src/components/sections/features.tsx",
    description:
      "Intro stays left while the feature list flows right — for briefs that want one strong claim next to supporting detail.",
    tags: ["features", "split", "asymmetric"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["saas", "consulting"],
  },
  {
    id: "service-cards",
    category: "card",
    name: "ServiceCards",
    path: "src/components/sections/features.tsx",
    description:
      "Linkable service cards on SpotlightCard — the whole card is the link, cursor spotlight + hover glow scale with --spotlight-strength.",
    tags: ["services", "cards", "linkable", "spotlight"],
    themes: "all",
    animation: ["fade-in-stagger", "spotlight-hover"],
    responsive: true,
    suitableFor: ["agency", "consulting", "saas", "studio"],
  },
  {
    id: "testimonials-grid",
    category: "content",
    name: "TestimonialsGrid",
    path: "src/components/sections/testimonials.tsx",
    description: "Static testimonial grid — best for up to ~6 quotes.",
    tags: ["testimonials", "social-proof", "grid"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "testimonials-carousel",
    category: "content",
    name: "TestimonialsCarousel",
    path: "src/components/sections/testimonials.tsx",
    description:
      "Swipeable testimonial carousel (native CSS scroll-snap, no JS carousel library) for longer quote lists.",
    tags: ["testimonials", "social-proof", "carousel", "scroll-snap"],
    themes: "all",
    animation: ["fade-in"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "stats",
    category: "content",
    name: "Stats",
    path: "src/components/sections/stats.tsx",
    description:
      "Animated count-up statistics row — DESIGN.md's one deliberate motion indulgence beyond entrance fades.",
    tags: ["stats", "numbers", "proof", "count-up"],
    themes: "all",
    animation: ["fade-in-stagger", "count-up"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "pricing-table",
    category: "content",
    name: "PricingTable",
    path: "src/components/sections/pricing.tsx",
    description: "Pricing plan comparison cards.",
    tags: ["pricing", "plans", "cards"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["saas", "consulting", "subscription"],
  },
  {
    id: "faq",
    category: "content",
    name: "FAQ",
    path: "src/components/sections/faq.tsx",
    description:
      "Accordion FAQ (shadcn Accordion), the standard objection-handling section.",
    tags: ["faq", "accordion", "objection-handling"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "cta",
    category: "content",
    name: "CTA",
    path: "src/components/sections/cta.tsx",
    description:
      "Closing call-to-action, two layouts: centered (calm, spacious) and panel (contained inverted block, a stronger mid-page beat).",
    tags: ["cta", "conversion", "closing"],
    themes: "all",
    animation: ["fade-in"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "team-grid",
    category: "content",
    name: "TeamGrid",
    path: "src/components/sections/team.tsx",
    description: "Team member grid with real photos, names, roles.",
    tags: ["team", "people", "trust"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["agency", "consulting", "law-firm", "studio", "restaurant"],
  },
  {
    id: "process-steps",
    category: "content",
    name: "ProcessSteps",
    path: "src/components/sections/process.tsx",
    description: '"How we work" numbered process steps.',
    tags: ["process", "steps", "how-it-works"],
    themes: "all",
    animation: ["fade-in-stagger"],
    responsive: true,
    suitableFor: ["agency", "consulting", "saas"],
  },
  {
    id: "contact-section",
    category: "business",
    name: "ContactSection",
    path: "src/components/sections/contact.tsx",
    description:
      "Contact channels (email/phone/address) with a children slot for the form — composition, not a fixed layout.",
    tags: ["contact", "form-slot"],
    themes: "all",
    animation: ["fade-in"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "gallery",
    category: "content",
    name: "Gallery",
    path: "src/components/sections/gallery.tsx",
    description:
      "Image grid with a subtle hover zoom (respects prefers-reduced-motion). Tiles become links when SectionImage.href is set (e.g. to a case-study detail page).",
    tags: ["gallery", "images", "grid", "hover-zoom", "portfolio"],
    themes: "all",
    animation: ["fade-in-stagger", "hover-zoom"],
    responsive: true,
    suitableFor: [
      "architecture",
      "photography",
      "fashion",
      "real-estate",
      "restaurant",
      "artist",
    ],
  },
  {
    id: "booking",
    category: "business",
    name: "Booking",
    path: "src/components/sections/booking.tsx",
    description:
      "Single link out to an external booking tool (Calendly/cal.com) — no in-house calendar. Feature-flagged (features.booking).",
    tags: ["booking", "calendar", "external-link", "conversion"],
    themes: "all",
    animation: ["fade-in"],
    responsive: true,
    suitableFor: [
      "hairdresser",
      "beauty",
      "consulting",
      "medical",
      "event",
      "coaching",
    ],
  },
  {
    id: "logo-cloud",
    category: "content",
    name: "LogoCloud",
    path: "src/components/sections/logo-cloud.tsx",
    description:
      '"Known from" / client logo strip — quiet, early social proof.',
    tags: ["logos", "social-proof", "trust"],
    themes: "all",
    animation: ["fade-in"],
    responsive: true,
    suitableFor: ["agency", "saas", "consulting"],
  },

  // ── Forms / business ───────────────────────────────────────────────
  {
    id: "contact-form",
    category: "form",
    name: "ContactForm",
    path: "src/components/sections/contact-form.tsx",
    description:
      "Client contact form: react-hook-form + zod, honeypot spam field, idle/error/success state machine, posts to /api/contact (Resend).",
    tags: ["form", "contact", "validation", "spam-protection"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "legal-text",
    category: "shared",
    name: "LegalText",
    path: "src/components/shared/legal-text.tsx",
    description: "Typed rich-text renderer for Impressum/Datenschutz content.",
    tags: ["legal", "content", "typography"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },

  // ── Shared ─────────────────────────────────────────────────────────
  {
    id: "section-heading",
    category: "shared",
    name: "SectionHeading",
    path: "src/components/shared/section-heading.tsx",
    description:
      "The standard section opener: eyebrow → headline → subline, used by nearly every content section for a consistent typographic hierarchy.",
    tags: ["heading", "typography", "eyebrow"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "testimonial-card",
    category: "card",
    name: "TestimonialCard",
    path: "src/components/shared/testimonial-card.tsx",
    description:
      "A single testimonial: quote, optional photo, name, role. Border width follows --border-width so it participates in a theme's structural identity.",
    tags: ["testimonial", "card", "trust"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "skip-link",
    category: "shared",
    name: "SkipLink",
    path: "src/components/shared/skip-link.tsx",
    description:
      "Visually hidden until focused — the first tab stop, jumps to #main-content. WCAG AA requirement (DESIGN.md §17).",
    tags: ["accessibility", "keyboard", "skip-link"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "whatsapp-button",
    category: "business",
    name: "WhatsAppButton",
    path: "src/components/shared/whatsapp-button.tsx",
    description:
      "Global floating WhatsApp contact shortcut, wrapped in Magnetic. Feature-flagged (features.whatsapp).",
    tags: ["whatsapp", "contact", "floating", "conversion"],
    themes: "all",
    animation: ["magnetic"],
    responsive: true,
    suitableFor: [
      "hairdresser",
      "restaurant",
      "beauty",
      "local-business",
      "real-estate",
    ],
  },
  {
    id: "cookie-consent",
    category: "business",
    name: "CookieConsent",
    path: "src/components/shared/cookie-consent.tsx",
    description:
      "GDPR consent banner; Vercel Analytics + Speed Insights only mount after explicit consent, stored in localStorage. Feature-flagged (features.analytics).",
    tags: ["gdpr", "consent", "analytics", "compliance"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
  },

  // ── UI primitives (shadcn/ui-derived, see reference-library/sources/shadcn-ui.md) ──
  {
    id: "button",
    category: "ui",
    name: "Button",
    path: "src/components/ui/button.tsx",
    description:
      "cva-based button: default/destructive/outline/secondary/ghost/link variants × default/sm/lg/icon sizes. Border width and surface shadow follow theme tokens.",
    tags: ["button", "cta", "cva", "variants"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
    referenceSources: ["shadcn-ui"],
  },
  {
    id: "input",
    category: "ui",
    name: "Input",
    path: "src/components/ui/input.tsx",
    description: "Styled text input, used by ContactForm.",
    tags: ["form", "input"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
    referenceSources: ["shadcn-ui"],
  },
  {
    id: "textarea",
    category: "ui",
    name: "Textarea",
    path: "src/components/ui/textarea.tsx",
    description: "Styled multiline text input.",
    tags: ["form", "textarea"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
    referenceSources: ["shadcn-ui"],
  },
  {
    id: "label",
    category: "ui",
    name: "Label",
    path: "src/components/ui/label.tsx",
    description: "Accessible form field label (Radix Label).",
    tags: ["form", "label", "accessibility"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
    referenceSources: ["shadcn-ui"],
  },
  {
    id: "accordion",
    category: "ui",
    name: "Accordion",
    path: "src/components/ui/accordion.tsx",
    description: "Radix Accordion primitive — powers FAQ.",
    tags: ["accordion", "disclosure"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
    referenceSources: ["shadcn-ui"],
  },
  {
    id: "sheet",
    category: "ui",
    name: "Sheet",
    path: "src/components/ui/sheet.tsx",
    description: "Radix Dialog-based slide-in panel — powers MobileNav.",
    tags: ["sheet", "drawer", "dialog"],
    themes: "all",
    animation: [],
    responsive: true,
    suitableFor: ["all"],
    referenceSources: ["shadcn-ui"],
  },

  // ── Motion ─────────────────────────────────────────────────────────
  {
    id: "fade-in",
    category: "motion",
    name: "FadeIn / FadeInStagger",
    path: "src/components/motion/fade-in.tsx",
    description:
      "Scroll-triggered fade + rise entrance, once only. FadeInStagger orchestrates staggered children. Degrades to a quiet fade under prefers-reduced-motion.",
    tags: ["entrance", "scroll", "stagger", "reduced-motion"],
    themes: "all",
    animation: ["fade-in", "stagger"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "magnetic",
    category: "motion",
    name: "Magnetic",
    path: "src/components/motion/magnetic.tsx",
    description:
      "Wraps an interactive element so it gently leans toward the cursor on hover. Strength is a theme knob (--magnet-strength); 0 disables it entirely.",
    tags: ["hover", "cursor", "cta"],
    themes: "all",
    animation: ["magnetic"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "spotlight-card",
    category: "motion",
    name: "SpotlightCard",
    path: "src/components/motion/spotlight-card.tsx",
    description:
      "Frosted card with a cursor-follow spotlight and hover glow, both scaled by --spotlight-strength (0 = fully flat, no glow at all).",
    tags: ["hover", "cursor", "spotlight", "card"],
    themes: "all",
    animation: ["spotlight-hover"],
    responsive: true,
    suitableFor: ["all"],
  },
  {
    id: "animated-number",
    category: "motion",
    name: "AnimatedNumber",
    path: "src/components/motion/animated-number.tsx",
    description:
      "Count-up number animation for Stats — DESIGN.md's one deliberate motion indulgence.",
    tags: ["count-up", "numbers", "stats"],
    themes: "all",
    animation: ["count-up"],
    responsive: true,
    suitableFor: ["all"],
  },
];
