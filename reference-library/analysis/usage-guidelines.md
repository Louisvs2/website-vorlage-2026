# Reference Library — Usage Guidelines

How to actually use this folder when building a website. See
`REFERENCE_LIBRARY.md` at the repo root for the role/policy overview —
this document is the step-by-step workflow.

## When to open this folder at all

Only after checking `src/registry/components.ts` and finding no existing
component (or variant) that fits. The Reference Library is step 4 of the
priority order in CLAUDE.md §8:

```
1. Existing component
2. Existing component + variant
3. Existing pattern (documented here)
4. Reference Library research (this folder)
5. Combination of multiple patterns
6. New component, registered afterward
```

## Workflow

1. **Check `patterns/*.json` first.** Every entry already states whether
   the pattern is implemented, backlog, or rejected — this alone often
   answers the question in seconds.
2. **If genuinely new,** read the matching `sources/*.md` for that
   pattern's origin — its strengths/weaknesses section states directly
   whether it fits a restraint-first brief or an expressive one.
3. **Never copy code from a source.** Re-describe the pattern in your own
   words (name, type, complexity), then implement it against this
   project's tokens (`globals.css` custom properties), motion wrappers
   (`src/components/motion/`), and component conventions — see
   `reference-library/analysis/design-principles.md`.
4. **Register the result.** Any new component built this way gets an
   entry in `src/registry/components.ts` with `referenceSources` pointing
   at the source(s) that inspired it, so the next search finds it as an
   existing component, not another external lookup.
5. **If a pattern is evaluated and rejected** (as most decorative effects
   are, per DESIGN.md §10/§18), add or update its entry in the matching
   `patterns/*.json` with a `note` explaining why — so the next person
   (or the next Claude session) doesn't re-research the same dead end.

## What "abstraction" means in practice

Abstraction is not renaming a copied component. It means:

- Extracting the _mechanism_ (e.g. "a card whose border/glow intensity
  follows the cursor position") — not the exact easing curve, color, or
  markup structure.
- Re-implementing the mechanism using this project's existing primitives
  (`cn()`, the `--brand`/`--spotlight-strength` tokens, `LazyMotion`
  scoping) rather than the source's own class names or animation config.
- Passing the mechanism through DESIGN.md's filters (§10 purpose test,
  §18 ban list) before it's built at all — most external "effects" fail
  this filter and should be logged as rejected, not built quietly.
