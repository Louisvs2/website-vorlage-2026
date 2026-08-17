# Design Principles — Filtering External Patterns

The lens every pattern in `patterns/*.json` gets evaluated through before
it can move from "researched" to "built". This is a working index into
`DESIGN.md`, not a replacement for it — read the full sections referenced
here before applying a pattern to a real client project.

## The filters, in order

1. **Purpose test (DESIGN.md §10).** Does this pattern orient the visitor,
   give feedback, or add perceived craft? If it's decoration without one
   of those three jobs, it doesn't ship — regardless of how well-executed
   the source's version is.
2. **Ban list (DESIGN.md §18).** Multi-color gradients, floating blobs,
   glassmorphism-as-default, oversized shadows, generic AI illustration
   style, more than a neutral ramp + one accent, scroll-jacking, spinning/
   bouncing/pulsing motion. A pattern that trips this list is rejected
   outright, no exceptions, on any project.
3. **Restraint (DESIGN.md §1).** "Our default answer to 'should we add
   this?' is no." A pattern earns inclusion by clearing this bar, not by
   being technically impressive.
4. **One system (DESIGN.md §7–§9).** A new pattern must use the existing
   radius/border-width/shadow-surface/motion tokens (`globals.css`) — not
   introduce a second parallel styling system, even for one component.
5. **Cost (CLAUDE.md §3).** Bundle size, runtime JS, and dependency count
   are all real costs. A WebGL background or a heavy carousel library
   loses to a CSS-only equivalent unless the brief specifically justifies
   the cost.
6. **Accessibility (DESIGN.md §17).** `prefers-reduced-motion` support,
   keyboard operability, and focus visibility are not negotiable
   additions after the fact — a pattern that can't clear this bar isn't
   adopted as-is.

## What passes, typically

Small, purposeful micro-interactions: a cursor-aware glow that's fully
disableable per theme (`SpotlightCard`), a magnetic CTA pull
(`Magnetic`), a count-up stat (`AnimatedNumber`), a quiet scroll-entrance
fade (`FadeIn`). Every one of these already exists in this codebase —
which is itself evidence the filter works: independently arrived-at
solutions to the same well-known problems converge on the same shape.

## What fails, typically

Anything whose entire value proposition _is_ the spectacle: aurora/mesh
gradient backgrounds, generative canvas art, 3D tilt-everything, animated
beam diagrams, auto-playing carousels. These are logged in
`patterns/*.json` as rejected with a reason, not silently ignored — a
future brief that genuinely wants a louder, more experimental identity
(an explicit `experimental` or high-motion look, not yet built) is the
correct place to revisit them, deliberately, with its own token budget —
not a default any client project inherits.
