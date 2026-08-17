# Aceternity UI

SOURCE:
https://ui.aceternity.com

CATEGORY:
Copy-paste React component library (animated, effect-heavy)

STYLE:
Modern, motion-heavy, premium SaaS/portfolio aesthetic — aurora backgrounds,
sparkles, 3D tilt cards, bento grids, spotlight effects, lamp headers,
timeline scroll reveals.

TECHNOLOGY:
React, Tailwind CSS, Motion (formerly Framer Motion). 200+ components,
blocks and landing-page templates, distributed as source you copy into
your own repo (no runtime package dependency for most components).

LICENSE:
Check current terms before use — mixed free/paid; some components are
free, full template packs are commercial. Verify per-component before
reuse of any code.

USE CASE:

- Marketing landing pages that want to feel "alive"
- Portfolios and personal-brand sites
- SaaS product pages with a strong visual hook

STRENGTHS:

- Genuinely high production value on hero/background effects (aurora,
  spotlight, sparkles) that are hard to get right from scratch
- Motion is baked in per-component, not bolted on afterward
- Wide variety — 3D cards, bento grids, timelines, direction-aware hover

WEAKNESSES:

- Easy to over-apply: a page using five different Aceternity effects
  reads as a demo reel, not a considered brand (violates this project's
  DESIGN.md §1 "designed, not assembled")
- Many effects are decorative rather than functional — conflicts with
  DESIGN.md §10 "every animation must orient, give feedback, or add
  perceived quality"
- Heavier client-side JS per effect than this project's motion budget
  (CLAUDE.md §3: check bundle impact before any dependency)

WHEN TO USE (as inspiration, never as copied code):
For a client brief that explicitly wants a bold, effects-forward, "wow"
hero — pick exactly one signature effect (e.g. a restrained spotlight or
aurora treatment), reimplement it against our token system, and stop there.

WHEN NOT TO USE:
Conservative corporate, editorial, minimal, or Swiss-style briefs — the
whole vocabulary conflicts with restraint-first art directions like this
project's `editorial`, `minimal`, and `swiss` looks.
