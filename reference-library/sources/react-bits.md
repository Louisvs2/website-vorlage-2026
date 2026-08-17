# React Bits

SOURCE:
https://reactbits.dev

CATEGORY:
Open-source animated component collection (backgrounds, text effects,
interactive UI patterns)

STYLE:
Motion/effect-forward — generative backgrounds, text-reveal/scramble
effects, physics-flavored interactions. Broader and more experimental
than a themed design system.

TECHNOLOGY:
React (JS or TS), CSS or Tailwind variants, some components built on
`ogl` (WebGL) or GSAP for heavier effects. 165+ components across four
categories. Installed as owned source (no runtime dependency) via a CLI
with npm/shadcn/jsrepo registry support. Documented support for Vite,
Next.js, Astro, Remix.

LICENSE:
Core library free and open source; a paid Pro tier adds further
components, blocks, and templates. Verify per-component license before
any direct reuse.

USE CASE:

- A specific, isolated effect (a text-scramble headline, a generative
  background canvas, a magnetic/tilt interaction) for a brief where that
  one effect is the brand statement.

STRENGTHS:

- Deep on a narrow thing — text and background effects specifically are
  more varied and higher-quality here than in general-purpose libraries.
- Effects are isolated, single-purpose components — easier to study one
  pattern in isolation than to untangle it from a full template.

WEAKNESSES:

- WebGL/GSAP-backed effects carry real bundle and runtime cost — directly
  in tension with CLAUDE.md §3 ("no heavyweight libraries for trivial
  tasks", "check impact before adding any dependency") and this project's
  Lighthouse >95 target.
- Most effects are attention-seeking by design — DESIGN.md §10's "purpose
  test" (orient, give feedback, or add perceived quality) rules out the
  majority of what's here for a client marketing site; a small minority
  (a subtle text reveal, a quiet magnetic pull) already matches patterns
  this project has independently built (`Magnetic`, `FadeIn`).

WHEN TO USE:
Only for a single, deliberately chosen signature moment on a brief that
explicitly wants expressive/experimental motion (this project's `bold` or
a future high-motion look) — reimplemented lightly against
`prefers-reduced-motion` and the motion budget in DESIGN.md §10, never
adopted wholesale.

WHEN NOT TO USE:
Any brief where DESIGN.md's restraint principles (§1, §10, §18) apply
without exception — which is most client work by default.
