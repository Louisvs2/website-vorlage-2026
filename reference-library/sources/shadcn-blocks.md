# shadcn blocks

SOURCE:
https://ui.shadcn.com/blocks (and community registries built on the same
model, e.g. shadcnblocks.com)

CATEGORY:
Pre-built, full page-section blocks (not single components) on top of
shadcn/ui primitives

STYLE:
Whatever theme is applied — blocks inherit the project's existing colors,
typography, and spacing tokens rather than imposing their own, by design.

TECHNOLOGY:
React, Tailwind CSS, shadcn/ui components. Installed via the shadcn CLI
as source, same no-dependency model as shadcn/ui itself. Framework-agnostic
across Next.js/Remix/Astro/Vite.

LICENSE:
Official shadcn/ui blocks are open source; third-party block marketplaces
(shadcnblocks.com and similar) mix free and paid tiers — verify per block.

USE CASE:

- Hero sections, pricing tables, testimonial grids, feature sections,
  footers, navigation bars — full section-level layouts, one step above
  the atomic components in `shadcn-ui.md`.

STRENGTHS:

- Section-level (not component-level) — the closest external analog to
  this project's own `src/components/sections/` and
  `src/registry/components.ts`.
- Because blocks inherit theme tokens automatically, they're a good
  reference for _composition_ (how a hero + proof strip + CTA reads
  together) without importing any specific visual identity.

WEAKNESSES:

- Breadth over curation — hundreds of near-duplicate hero/pricing
  variations, most generic; the value is in the composition patterns,
  not any individual block's exact layout.
- Composition still needs to be filtered through DESIGN.md §14 (the
  canonical landing-page arc) rather than assembled block-by-block —
  this project's own worry, "designed, not assembled" (CLAUDE.md /
  DESIGN.md §1), applies directly to any indiscriminate use of blocks.

WHEN TO USE:
As a composition-pattern reference when deciding section order/rhythm for
a new page type this project doesn't have a precedent for yet (e.g. a
pricing-heavy SaaS page) — study the arc, not the pixels.

WHEN NOT TO USE:
Never assemble a page by stacking blocks directly; every section still
goes through this project's `Section`/`Container` rhythm and existing
component library first (registry priority order, CLAUDE.md §8).
