# WEBSITE_ARCHITECT.md — Decisions Before Code

The questions answered _before_ writing a single component for a new
client site — output of the `AI_WEBSITE_BUILDER.md` discovery, input to
the actual build. Skipping straight to "which component do I use here"
without these answered is how a site ends up looking assembled rather
than designed (DESIGN.md §1).

## The twelve questions

1. **What is the website's goal?** One primary conversion, stated
   concretely (not "raise awareness" — "get qualified inquiries").
2. **Who is the audience?** Their vocabulary, their sophistication level,
   what they're skeptical of.
3. **Which visual direction fits?** From `AI_WEBSITE_BUILDER.md` step 3.
4. **Which look fits?** From `THEMES.md` — structural, not just color.
5. **Which typography fits?** Usually implied by the look, but verify
   against the brief (`DESIGN_SYSTEM.md` typography tokens).
6. **Which components fit?** Registry-first (`COMPONENT_REGISTRY.md`),
   Hero variant chosen deliberately (`COMPONENT_LIBRARY.md`'s hero table).
7. **Which pages are needed?** The sitemap from `AI_WEBSITE_BUILDER.md`
   step 5.
8. **Which motion is appropriate?** The motion level from step 4, mapped
   onto existing tokens — see `MOTION_SYSTEM.md`.
9. **What must happen on mobile?** Not "does it also work" — designed
   mobile-first per DESIGN.md §16; check nav, type scale, spacing
   compression, touch targets before calling a section done.
10. **Which conversion elements are necessary?** Per DESIGN.md §14–15:
    one primary CTA repeated consistently, friction removed from forms,
    a closing CTA section on every page.
11. **What's the content hierarchy?** The eye path per section
    (DESIGN.md §2: eyebrow → headline → subline → proof → action) and
    the page-level arc (DESIGN.md §14).
12. **Which visual patterns fit the industry?** Cross-check
    `COMPONENT_REGISTRY.md`'s `suitableFor` tags against the actual
    brief — a suggestion, not a rule to follow blindly.

## Priority order while answering question 6

```
1. Existing component
2. Existing component + variant
3. Existing pattern (reference-library/patterns/*.json)
4. Reference Library research (REFERENCE_LIBRARY.md)
5. Combination of multiple existing patterns
6. New component — built, then registered (COMPONENT_REGISTRY.md)
```

A new component is justified in its registry entry by naming what it
covers that nothing existing does — not by preference.

## Design Director, not component picker

The registry is a tool, not a decision-maker. Before reaching for any
component, ask what a good art director would actually do with this
brief — not which existing component can be made to fit. If every
answer to question 6 comes from steps 1–2 above and the result still
reads as generic, the composition (question 11) is the problem, not the
missing component.

## Post-build check (before calling it done)

At minimum, run the composition and banned-pattern checks from
DESIGN.md §1 and §18, verify the mobile checklist (§16), and confirm
`npm run typecheck`, `npm run lint`, and `npm run build` are clean
(CLAUDE.md §2). A fuller, structured self-critique pass (design/UX/
content/technical scoring, an explicit "would I show this to a paying
client" gate) is tracked as a `ROADMAP.md` backlog item — until then,
DESIGN.md's own principles are the review checklist, applied honestly.
