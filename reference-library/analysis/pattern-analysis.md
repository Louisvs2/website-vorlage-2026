# Pattern Analysis

Cross-source synthesis of `reference-library/sources/` and
`reference-library/patterns/`. Updated whenever a new source is researched
or a new pattern is extracted.

## What the research confirms this project already has right

A striking number of patterns found across all six external sources turn
out to already exist independently in this codebase, often built before
this research pass:

| Pattern                          | External source(s)    | This project's implementation           |
| -------------------------------- | --------------------- | --------------------------------------- |
| Cursor-follow spotlight card     | Aceternity UI         | `SpotlightCard`                         |
| Magnetic cursor pull             | React Bits            | `Magnetic`                              |
| Count-up number                  | React Bits, Magic UI  | `AnimatedNumber`                        |
| Scroll-triggered stagger reveal  | Aceternity UI         | `FadeIn` / `FadeInStagger`              |
| Radix + cva variant architecture | shadcn/ui             | `src/components/ui/*`                   |
| Copy-source, own-it distribution | shadcn/ui, React Bits | This project's entire component model   |
| Hero → proof → CTA arc           | shadcn blocks         | DESIGN.md §14 canonical arc             |
| Reduced-motion-gated animation   | Motion (motion.dev)   | Every `src/components/motion/*` wrapper |

This is the expected outcome, not a coincidence: DESIGN.md's principles
(restraint, purpose-tested motion, one radius/border/shadow system) and
this project's own iteration already converged on the same well-known
good patterns that these libraries also converge on. It is evidence the
component library doesn't need wholesale replacement — it needs targeted
extension where real gaps exist.

## Real gaps the research surfaced (candidates, not commitments)

- **Grid variety.** Every source (21st.dev, Aceternity, shadcn blocks)
  has far more grid patterns (masonry, bento, asymmetric editorial) than
  this project's current single uniform grid. Tracked in `ROADMAP.md` as
  a grid-system phase — not built in this round.
- **Logo marquee variant.** Magic UI's scrolling logo strip is a
  reasonable `LogoCloud` variant for clients with many logos. Not built —
  no current client brief needs it yet (CLAUDE.md §8: library growth
  needs a concrete consumer).
- **Lightbox-on-click for Gallery.** Considered directly (21st.dev), and
  deliberately not built: the current Gallery already has a clear job
  (hover-zoom, optional link to a case-study page) and a lightbox adds
  interaction cost without a brief asking for it.

## What was deliberately rejected, and why

Aceternity UI, React Bits, and Magic UI collectively supply dozens of
decorative effects (aurora backgrounds, generative canvases, animated
beams, 3D tilt) that were evaluated and _not_ adopted. The reason is
consistent across all three: DESIGN.md §10's purpose test (orient,
feedback, or perceived quality — never decoration alone) and §18's
explicit ban list rule most of this vocabulary out for default use. They
remain documented here as an intentional, reasoned "no" — not an
oversight — so a future request to add one of these effects can be
answered with the actual tradeoff instead of re-litigated from scratch.
