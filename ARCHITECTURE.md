# ARCHITECTURE.md — The Website OS

How the five layers of this Website OS map onto the actual repository.
This is the entry point for the bigger picture; each layer has its own
deeper document (linked below). `PLAN.md` remains the source of truth for
the concrete Next.js folder structure and tech stack — this document adds
the layer above it.

## What this repository is

Not a single website template. A library a new client website is
**composed from**: a design token system, a component registry, a motion
system, and a documented reference of external patterns — all consumed
through `CLAUDE.md`'s priority order (existing component → variant →
pattern → reference research → new component) and directed by
`WEBSITE_ARCHITECT.md`'s decisions before any code is written.

`CLAUDE.md` §8 draws the one distinction that matters throughout: the
**library** (this document's five layers) grows deliberately over time;
**a client project** built from it stays exactly as minimal as the brief
demands. Growing the library is not speculative work — every addition
here is justified by a concrete document explaining why it exists.

## The five layers

```
┌─────────────────────────────────────────────────────────────┐
│ DESIGN SYSTEM        src/styles/globals.css, src/config/theme.ts
│                       → DESIGN_SYSTEM.md, THEMES.md
├─────────────────────────────────────────────────────────────┤
│ COMPONENT LIBRARY     src/components/**
│                       → COMPONENT_LIBRARY.md
├─────────────────────────────────────────────────────────────┤
│ MOTION SYSTEM         src/components/motion/**
│                       → MOTION_SYSTEM.md
├─────────────────────────────────────────────────────────────┤
│ COMPONENT REGISTRY    src/registry/components.ts
│                       → COMPONENT_REGISTRY.md
├─────────────────────────────────────────────────────────────┤
│ REFERENCE LIBRARY     reference-library/
│                       → REFERENCE_LIBRARY.md
└─────────────────────────────────────────────────────────────┘
```

### Design System

One set of CSS custom properties (`src/styles/globals.css`) drives every
visual decision: color, radius, border width, shadow, font pairing, and
"feel" knobs (glass blur, cursor spotlight, hover lift, magnetic
strength, section rhythm). A **look** (`src/config/theme.ts`) is a named
bundle of these tokens, applied via a single `data-look` attribute on
`<html>`. Nine looks exist today (see `THEMES.md`); adding a tenth means
adding one CSS block and one `theme.ts` entry — no component changes.

### Component Library

`src/components/{ui,layout,sections,shared,motion}/` — see
`COMPONENT_LIBRARY.md` for the full catalog. Every component reads the
design tokens rather than hardcoding values (CLAUDE.md §2), so the same
component renders correctly under all nine looks without a look-specific
code path.

### Motion System

A small set of reusable wrappers (`src/components/motion/`) rather than
inline animation in every section — see `MOTION_SYSTEM.md`. All motion
is gated by `prefers-reduced-motion` and, where relevant, by the active
look's feel knobs (`--spotlight-strength`, `--magnet-strength`,
`--hover-lift`), so a "flat" look genuinely has no glow anywhere, not
component-by-component.

### Component Registry

`src/registry/components.ts` — a machine-readable catalog of every
component with tags, suitable industries, theme coverage, and motion
usage. This is the first stop before writing anything new — see
`COMPONENT_REGISTRY.md`.

### Reference Library

`reference-library/` — documented, abstracted external UI patterns
(Aceternity UI, shadcn/ui, shadcn blocks, React Bits, 21st.dev, Magic UI,
Motion). Consulted only after the registry comes up empty, and never
copied directly — see `REFERENCE_LIBRARY.md`.

## How a website actually gets built from this

See `AI_WEBSITE_BUILDER.md` for the discovery workflow and
`WEBSITE_ARCHITECT.md` for the decisions made before writing code. In
short: brief → design direction → look selection → sitemap → component
selection (registry-first) → build → review against `DESIGN.md`.

## Where things live (quick index)

| Question                                             | Document                |
| ---------------------------------------------------- | ----------------------- |
| What's the tech stack / folder structure?            | `PLAN.md`               |
| How do we work (process, git, quality bar)?          | `CLAUDE.md`             |
| What does "good" look like, concretely?              | `DESIGN.md`             |
| What tokens exist and what do they drive?            | `DESIGN_SYSTEM.md`      |
| What are the 9 looks and when to use each?           | `THEMES.md`             |
| What components exist?                               | `COMPONENT_LIBRARY.md`  |
| How do I search for a component before building one? | `COMPONENT_REGISTRY.md` |
| What motion patterns exist?                          | `MOTION_SYSTEM.md`      |
| Where do external UI ideas come from, and how?       | `REFERENCE_LIBRARY.md`  |
| How do we run client discovery for a new site?       | `AI_WEBSITE_BUILDER.md` |
| What decisions happen before coding starts?          | `WEBSITE_ARCHITECT.md`  |
| What's built vs. still backlog?                      | `ROADMAP.md`            |
