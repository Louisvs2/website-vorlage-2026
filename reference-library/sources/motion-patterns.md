# Motion (motion.dev)

SOURCE:
https://motion.dev

CATEGORY:
Animation library and pattern documentation hub for React/JS/Vue — this
is not a component library but the animation engine this project already
depends on directly.

STYLE:
N/A (a library, not an aesthetic) — but its documented example gallery
(430+ copy-paste patterns) spans scroll effects, gestures, carousels, and
text animation, useful as a _technique_ reference independent of look.

TECHNOLOGY:
Formerly "Framer Motion"; renamed to Motion in 2025 (package `motion`,
import from `motion/react`). Hybrid engine: runs natively via the Web
Animations API + ScrollTimeline where possible (120fps, no main-thread
JS), falls back to JS for spring physics, interruptible keyframes, and
gesture tracking it can't express natively. This project already imports
it (`motion` in `package.json`) inside `src/components/motion/fade-in.tsx`
via `LazyMotion` + the `domAnimation` feature bundle, specifically to keep
the animation runtime out of the main bundle.

LICENSE:
MIT / open source.

USE CASE:

- The implementation layer under every motion pattern already in
  `src/components/motion/` (FadeIn/FadeInStagger use `m.div` + variants;
  AnimatedNumber likely uses its spring/tween primitives) and under any
  future motion component this project adds.

STRENGTHS:

- Already the project's chosen engine — no new dependency risk.
- `LazyMotion` (already used) keeps bundle cost low, matching CLAUDE.md
  §3's performance discipline better than importing the full API.
- Native declarative variants/stagger API maps directly onto DESIGN.md
  §10–11's "one easing curve, small distances, stagger sparingly" rules —
  the library's idioms and this project's motion principles are already
  aligned by construction.

WEAKNESSES:

- Breadth of the API (layout animations, drag, `AnimatePresence`,
  scroll-linked values) makes it easy to reach for something heavier than
  needed — every new motion pattern should still go through the
  `LazyMotion`-scoped, `prefers-reduced-motion`-safe wrapper convention
  already established, not import the library ad hoc in a new component.

WHEN TO USE:
Any time a new motion pattern is justified by DESIGN.md §10's purpose
test — implement it as a new `src/components/motion/` wrapper following
the existing `FadeIn`/`Magnetic` conventions (LazyMotion scoping,
`useReducedMotion` gating, registered in `src/registry/components.ts`).

WHEN NOT TO USE:
Never import `motion/react` directly inside a section or page component —
route all motion through the wrapper layer, per CLAUDE.md §3
("`use client` only at the leaves").
