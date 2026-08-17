# MOTION_SYSTEM.md — Motion Pattern Catalog

Every animation in this project goes through a wrapper in
`src/components/motion/` — never inline `motion/react` usage inside a
section (CLAUDE.md §3, `reference-library/sources/motion-patterns.md`).
For the _rules_ behind these patterns (timing, distance, when motion is
and isn't justified), read `DESIGN.md` §10–11 — this document catalogs
what's implemented.

## Implemented patterns

| Pattern                               | Component                                | Gated by                                     | Reduced-motion behavior                                      |
| ------------------------------------- | ---------------------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| Scroll fade + rise, once              | `FadeIn`                                 | —                                            | Degrades to a plain fade, no rise                            |
| Staggered children reveal             | `FadeInStagger`                          | —                                            | Same, staggering removed                                     |
| Cursor-follow spotlight + hover glow  | `SpotlightCard`                          | `--spotlight-strength`                       | Transition removed via global `prefers-reduced-motion` rule  |
| Magnetic cursor pull                  | `Magnetic`                               | `--magnet-strength`                          | Explicitly checks `matchMedia` before applying any transform |
| Count-up number                       | `AnimatedNumber`                         | —                                            | (verify current implementation before reuse)                 |
| Ambient hero/services background glow | inline in `HeroCentered`, `ServiceCards` | `--spotlight-strength` (opacity scales to 0) | N/A — static gradient, no animation                          |

All motion additionally respects the global rule in `globals.css`
(`@media (prefers-reduced-motion: reduce)`), which zeroes animation and
transition durations everywhere as a last-resort safety net — the
per-component gating above is the intentional, designed behavior; the
global rule is the guarantee.

## Timing constants

One easing curve, one duration, defined once in `@theme inline`
(`--default-transition-duration: 200ms`,
`--default-transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1)`)
and reused by every transition utility. Framer/Motion entrances use a
matching expo-out curve (`EASE_OUT` in `fade-in.tsx`). Neither is a
per-look token — DESIGN.md §10 treats "one timing, one curve" as a hard
constant, not a per-theme creative choice.

## Adding a new motion pattern

Justify it against DESIGN.md §10's purpose test first (orient, feedback,
or perceived quality — never decoration alone), then:

1. Build it as a new `src/components/motion/` wrapper, following the
   `LazyMotion`-scoping and `useReducedMotion`/`matchMedia` gating
   conventions already established in `fade-in.tsx` and `magnetic.tsx`.
2. If it should vary in intensity per look, add a token for it
   (`DESIGN_SYSTEM.md` has the bar for when a new token is justified)
   rather than hardcoding one intensity for every look.
3. Register it in `src/registry/components.ts` with an accurate
   `animation` tag so other components can be found by motion pattern.
4. Check `reference-library/patterns/motion-patterns.json` first — most
   plausible new patterns are already logged there as implemented,
   backlog, or deliberately rejected.

## Deliberately not built

Shared-layout page transitions, scroll-linked parallax on imagery, and
scroll-progress indicators are documented as backlog in `ROADMAP.md` —
each is technically straightforward with `motion/react` but has no
concrete client brief driving it yet.
