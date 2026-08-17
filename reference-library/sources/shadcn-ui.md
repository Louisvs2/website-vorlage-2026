# shadcn/ui

SOURCE:
https://ui.shadcn.com

CATEGORY:
Copy-paste component distribution layer over Radix UI primitives

STYLE:
Neutral, restrained, systematized — deliberately not a "look" of its own.
Ships as tokens + component source, meant to be themed per project.

TECHNOLOGY:
React, Radix UI (accessible primitives), Tailwind CSS, `class-variance-authority`.
Distributed via a CLI that copies component source into your repo — no
runtime package to import, you own and edit the code directly.

LICENSE:
Open source (MIT-style); the copied source becomes part of your own
codebase with no ongoing license obligation.

USE CASE:

- The accessible, unstyled-logic foundation for almost any component
  (dialogs, dropdowns, accordions, forms, sheets) where correct
  keyboard/focus/ARIA behavior matters more than visual novelty.

STRENGTHS:

- This is already this project's own foundation: `src/components/ui/`
  (Button, Input, Textarea, Label, Accordion, Sheet) is directly derived
  from shadcn/ui's Radix + cva + Tailwind pattern (see
  `src/registry/components.ts`, `referenceSources: ["shadcn-ui"]`).
- Accessibility is correct by default (Radix handles focus management,
  ARIA roles, keyboard interaction) — matches DESIGN.md §17.
- The "copy source, own it, theme it" model is exactly this project's
  own component philosophy (CLAUDE.md §5: extend via variant, not fork).

WEAKNESSES:

- Zero opinion on visual identity by design — every shadcn/ui site looks
  generic until someone applies real art direction. This project's
  DESIGN.md exists precisely to supply what shadcn/ui deliberately omits.

WHEN TO USE:
As the base primitive layer for any new interactive UI element (dialog,
dropdown, tooltip, tabs, select) not yet in `src/components/ui/` — check
the registry first, then reach for the shadcn/ui pattern for the
accessible-primitive layer, then apply this project's tokens on top.

WHEN NOT TO USE:
Never adopt a shadcn/ui visual default (its default gray theme, its
default spacing) as-is — it must always run through this project's
`--radius`/`--border-width`/`--shadow-surface`/color tokens.
