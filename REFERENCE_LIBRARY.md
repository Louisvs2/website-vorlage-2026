# REFERENCE_LIBRARY.md — Role & Policy

`reference-library/` is a design-intelligence layer, not a code source.
This document is the policy overview; `reference-library/analysis/
usage-guidelines.md` is the step-by-step workflow, and
`reference-library/analysis/design-principles.md` is the filter every
external pattern gets run through.

## Structure

```
reference-library/
  sources/      One .md per external library, standardized format
                (source, category, style, tech, license, use case,
                strengths, weaknesses, when to use / not use).
  patterns/     One .json per source: abstracted pattern names, types,
                complexity, reusability — never copied code.
  analysis/     Cross-source synthesis, usage workflow, and the design
                filter patterns are evaluated against.
```

## Sources currently documented

Aceternity UI, shadcn/ui, shadcn blocks, React Bits, 21st.dev, Magic UI,
and Motion (motion.dev — the animation engine this project already
depends on). Each has a `sources/*.md` and a `patterns/*.json`.

## The role, precisely

1. **Inspiration** — seeing how a well-known UI problem (a gallery grid,
   a pricing table, a hover interaction) gets solved elsewhere before
   designing this project's own version.
2. **Pattern extraction** — naming and abstracting a _mechanism_, not
   copying markup, class names, or exact animation curves.
3. **Informed rejection** — DESIGN.md's restraint principles reject most
   decorative/maximalist patterns from these sources by design; logging
   _why_ (in `patterns/*.json`) is as valuable as logging what was kept.

## The No-Direct-Copy rule

Never:

- Copy a component's source code from any of these libraries into this
  project.
- Clone a specific site or template 1:1.
- Adopt a source's visual identity (its exact color, its exact spacing)
  as this project's own.

Always:

- Understand the pattern → abstract it → map it onto this project's own
  tokens and conventions → implement it fresh.
- Respect each source's actual license (`sources/*.md` states what's
  known; verify current terms before any close study of paid/commercial
  work).

## Priority order (CLAUDE.md §8)

The Reference Library is consulted at step 4, after the registry has
already been searched twice:

```
1. Existing component
2. Existing component + variant
3. Existing pattern (already logged in patterns/*.json)
4. Reference Library research (new source or new pattern)
5. Combination of multiple patterns
6. New component — registered afterward (COMPONENT_REGISTRY.md)
```

## Keeping it current

Add a new `sources/*.md` when a genuinely new external library becomes
relevant to a brief — not speculatively. Update `patterns/*.json` and
`analysis/pattern-analysis.md` whenever a pattern moves from "researched"
to "built" or "rejected", so the next search finds the decision instead
of redoing the research.
