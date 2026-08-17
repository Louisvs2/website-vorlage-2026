# Magic UI

SOURCE:
https://magicui.design

CATEGORY:
Copy-paste animated component library, aimed at "design engineers"

STYLE:
Playful/energetic SaaS-marketing style — animated backgrounds, text
effects, interactive cards, spinning/scratch-reveal elements, smooth
transitions. Similar territory to Aceternity UI, generally a notch
lighter/more restrained.

TECHNOLOGY:
TypeScript, Next.js, Tailwind CSS, Motion (Framer Motion). 50+ components,
copy-paste ownership model, MIT-licensed, ~19k GitHub stars.

LICENSE:
MIT — free and open source, safe to study and reimplement patterns from
(still: reimplement against this project's design system, don't paste).

USE CASE:

- SaaS landing pages and creative portfolios that want a "memorable"
  moment (one animated centerpiece) without going as maximalist as
  Aceternity UI.

STRENGTHS:

- MIT license removes the ambiguity `aceternity-ui.md`/`21st-dev.md`
  carry — genuinely safe to study in depth.
- Individual effects (marquees, animated beams, number tickers) are often
  well-scoped, single-purpose components — closer in spirit to this
  project's own `AnimatedNumber`/`Magnetic` than to a full aesthetic system.

WEAKNESSES:

- Still motion-forward by default — the same DESIGN.md §10/§18 restraint
  filter applies as with Aceternity UI; "memorable" and "calm confidence"
  (DESIGN.md §1) are frequently in tension.
- Aimed at SaaS/startup marketing specifically — weak fit for the
  editorial, luxury, or civic-institution briefs this project also serves.

WHEN TO USE:
A `bold` or `noir`-look SaaS/startup brief that wants exactly one
animated proof moment (e.g. an animated stat/number ticker) — this
project's `AnimatedNumber` already covers that need natively; check the
registry before reaching for an external pattern at all.

WHEN NOT TO USE:
Editorial, luxury, civic, or restraint-first briefs (`editorial`,
`minimal`, `swiss`, `cinema` looks) — the vocabulary doesn't map.
