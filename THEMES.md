# THEMES.md — The Nine Looks

Every look is defined in two places: its CSS token block in
`src/styles/globals.css` (`:root[data-look="…"]`) and its entry in
`src/config/theme.ts` (`looks`, `lookDescriptions`, and `darkLooks` where
relevant). Preview all nine live at `/looks`, including every Hero
variant and the Gallery/Booking sections.

A look earns its place by being **structurally** distinguishable — color,
radius, border width, shadow, section rhythm, font pairing, and
motion/glow intensity all move together (CLAUDE.md §8) — not by being a
palette swap of another look. See `DESIGN_SYSTEM.md` for what each token
controls.

## The six original looks

| Look                | Character                                                                                          | Fonts                 | Fixed dark? |
| ------------------- | -------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| **glass** (default) | Modern & tactile — warm gold, frosted-glass cards, cursor spotlight, magnetic CTA                  | Space Grotesk / Inter | No          |
| **editorial**       | Refined & calm — deep burgundy, flat cards, hairline borders, magazine-grade                       | Fraunces / Inter      | No          |
| **minimal**         | Quiet & sharp — monochrome ink, flat surfaces, tight corners, gallery-like                         | Inter / Inter         | No          |
| **bold**            | Vivid & playful — electric violet, strong glass, deep lift, punchy magnetic CTA                    | Sora / Inter          | No          |
| **cinema**          | Dark & dramatic — near-black stage, achromatic accent, sharp corners, no glow                      | Space Grotesk / Inter | Yes         |
| **noir**            | Dark & luxurious — twilight ground, vivid violet fills every button, heavy glass, full-pill radius | Sora / Inter          | Yes         |

## The three new looks (this round)

### Brutalist

Raw and static. Achromatic paper-white ground (not the shared warm
ramp — brutalism rejects softness on principle), thick 3px black
borders, zero radius, a hard 4px-offset shadow with **zero blur** — a
deliberate, documented exception to DESIGN.md §7/§18's "shadows are a
whisper, never oversized" rule. Brutalism's entire point is the flat,
graphic offset shadow; a soft one would defeat the style, so this is a
conscious brief-level exception, not an oversight. No hover lift, no
magnetic pull, no glow — everything sits heavy and still. One vivid
orange-red accent. Denser rhythm (`0.85`) than the calm default.

**Suitable for:** creative agencies, artists, event/festival brands,
anyone whose brief explicitly wants "raw, loud, unpolished-on-purpose."
**Avoid for:** anything trust-sensitive or conservative — law firms,
medical, finance.

### Swiss

Precise and rigid. Pure white/near-black, a single vivid red accent
(International Typographic Style), hairline 1px borders, **zero
shadow at all**, zero radius, the tightest rhythm (`0.9`). The quietest
of the new three but the most exacting — precision over warmth.

**Suitable for:** architecture, design studios, publishing/editorial,
cultural institutions, anything wanting rigor over friendliness.
**Avoid for:** hospitality, wellness, anything wanting to feel warm or
approachable.

### Organic

Warm and soft. Terracotta-on-cream palette, the most generous radius of
any look (`1.75rem`), a gentle warm glow (`--spotlight-strength: 0.6` —
present but restrained, not full glass), Fraunces serif paired with
Inter, the loosest rhythm (`1.1`) of any look for a calm, breathing feel.

**Suitable for:** wellness, beauty, hospitality, restaurants, craft/food
brands — anywhere softness itself is the trust signal.
**Avoid for:** tech/SaaS, anything wanting to feel sharp or fast-moving.

## Choosing a look for a client

This is a `WEBSITE_ARCHITECT.md` decision, made from the brief's industry
and desired mood — never a default. As a starting point (not a rule):
museum/gallery/hospitality/real-estate → `cinema`/`noir`; law/finance/
consulting → `editorial`/`minimal`/`swiss`; creative/startup/product →
`glass`/`bold`; wellness/restaurant/craft → `organic`; anything wanting
raw/unconventional energy → `brutalist`.

## Adding a tenth look

Clear the same bar the three new ones did: it must differ structurally
(at least radius + border-width or shadow-surface + section-rhythm), not
just in accent color, and it needs a concrete client brief driving it
(CLAUDE.md §8) — not "we might need it someday."
