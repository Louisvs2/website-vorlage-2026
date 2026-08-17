# AI_WEBSITE_BUILDER.md — Client Discovery Workflow

The structured process for starting a new client website from this
library, run by Claude Code as a conversation — not an in-app UI. This
repository is a static marketing site with no backend/admin area; a real
"builder UI" would be a separate application to host and maintain, which
is a bigger project than this round scoped (see `ROADMAP.md`). This
document is that builder, implemented as a Claude workflow instead.

The decisions made _during_ this discovery are handed to
`WEBSITE_ARCHITECT.md`'s checklist before any code is written.

## Step 1 — Client

Gather (or ask for, if starting fresh — this overlaps with `CLIENT.md`'s
existing intake questionnaire and should reuse it rather than duplicate
it):

- Name, industry, location, target audience
- What they offer, and the website's primary goal/conversion
- Existing brand assets (logo, colors, photography) or their absence
- An existing website, if any, and what to keep/replace
- Reference websites they admire (and, as importantly, ones they don't)

## Step 2 — Website type

Portfolio, agency, corporate, restaurant, architecture, fashion, SaaS,
event, e-commerce, personal brand, beauty, automotive, creative,
photography, music, real estate, consulting, and any close variant
Claude reasonably proposes from the brief — the list is a starting
vocabulary, not a closed enum.

## Step 3 — Visual direction

Offer the nine looks from `THEMES.md` by _character_, not by name first
— a client doesn't know what "swiss" means, they know they want
"precise and understated" or "warm and human." Map their answer onto a
look (or a short list to choose between) only after that.

Optional qualitative sliders, used as creative-direction language rather
than literal component settings:

```
MINIMAL ━━━━━━━●━━ EXPRESSIVE
CALM    ━━━━━●━━━━ ENERGETIC
SERIOUS ━━━━●━━━━━ PLAYFUL
```

## Step 4 — Motion level

`Static` / `Subtle` / `Premium` / `Experimental` — maps onto the active
look's existing `--spotlight-strength`/`--magnet-strength`/`--hover-lift`
tokens rather than a separate system; most looks already sit at
"Subtle" or "Premium" by design (DESIGN.md §10's restraint principle),
"Experimental" is rare and should be treated as a deliberate exception
per site, the same way brutalist's hard shadow is a deliberate exception
to the general shadow rule.

## Step 5 — Sitemap

Propose a sitemap from the website type, not a generic default:

```
Agency/Corporate:     Home · About · Services · Projects · Contact
Hairdresser/Beauty:   Home · Services · Team · Gallery · Booking · Contact
Architecture:         Home · Projects · Project Detail · Studio · About · Contact
```

The client can edit it afterward — this is a proposal, not a constraint.

## Step 6 — Component selection

For each page, walk `COMPONENT_REGISTRY.md`'s priority order per section:
existing component → variant → pattern → reference research → new
component. Prefer the Hero variant that structurally matches the brief
(`COMPONENT_LIBRARY.md`'s hero table) over defaulting to `HeroCentered`.

## Step 7 — Site config

Record the resulting decisions where the codebase already expects them —
`src/config/site.ts` (brand/contact), `src/config/theme.ts`
(`activeLook`), `src/config/navigation.ts` (sitemap → nav), `src/content/`
(page copy), `src/config/features.ts` via `npm run setup` (optional
modules: gallery/booking/whatsapp/analytics). There is no separate
"site-config" file to invent — these are already the site config.

## Step 8 — Build → Review → Critique → Iterate

Build the pages, then run every item in `WEBSITE_ARCHITECT.md`'s
post-build review before calling the work done. A website is not
finished when it builds; it's finished when it survives the self-critique
pass.
