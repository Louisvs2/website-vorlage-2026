# 21st.dev

SOURCE:
https://21st.dev

CATEGORY:
Community marketplace/registry for shadcn/ui-based components, blocks,
and hooks ("npm for design engineers")

STYLE:
No single style — an aggregation of 12,000+ components from many authors,
spanning minimal to maximal, all on the shadcn/ui + Tailwind + Radix base.

TECHNOLOGY:
React, Tailwind CSS, Radix UI, TypeScript-first. Every component installs
via the standard `npx shadcn` CLI flow, same ownership model as
`shadcn-ui.md`.

LICENSE:
Varies by individual author/listing — this is a marketplace, not a single
license; always check the specific component's terms before treating it
as a reference, and never copy paid/attributed work.

USE CASE:

- Breadth search: "has anyone already solved a well-designed version of
  X" (a gallery layout, a pricing table, a specific form pattern) across
  a very large sample of community work, for pattern research rather
  than direct adoption.

STRENGTHS:

- Sheer volume and searchability by category (e.g. hundreds of gallery/
  image-grid variants) makes it useful for surveying how a given UI
  problem gets solved across many designers before committing to this
  project's own approach.
- Same technical base as this project's own UI primitives, so patterns
  found here translate structurally without a framework mismatch.

WEAKNESSES:

- Quality is uneven by nature of being a community marketplace — the
  platform's own positioning ("not AI slop") is itself an acknowledgment
  that a lot of listed work is exactly that; curation is the consumer's
  job.
- No shared art direction across listings — cannot be treated as "one
  style", only mined for isolated structural ideas.

WHEN TO USE:
Research phase only — searching for how others have solved a specific,
named UI problem (e.g. "asymmetric project grid") before designing this
project's own version. Extract the _pattern_ (see
`reference-library/patterns/21st-dev.json`), never the source.

WHEN NOT TO USE:
As a stand-in for original art direction — 21st.dev has no house style to
borrow, only isolated patterns to abstract.
