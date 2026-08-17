# DESIGN_SYSTEM.md — Token Catalog

The concrete tokens defined in `src/styles/globals.css`. For the
_principles_ behind them (why restraint, why one accent, why a whisper of
a shadow), read `DESIGN.md` — this document is the reference table, not
the philosophy.

Every token is a CSS custom property, redefined per look under
`:root[data-look="…"]`. Components consume the token, never a raw value
(CLAUDE.md §2 "no duplicates", DESIGN.md §5 "semantic tokens only").

## Color tokens

Standard shadcn/ui-style semantic pairs, each with a matching
`-foreground` for guaranteed-readable text on that surface:

`background` / `foreground`, `card` / `card-foreground`, `popover` /
`popover-foreground`, `primary` / `primary-foreground`, `secondary` /
`secondary-foreground`, `muted` / `muted-foreground`, `accent` /
`accent-foreground`, `destructive` / `destructive-foreground`, `border`,
`input`, `ring`.

Plus the three brand tokens that carry a look's personality:

- `--brand` — the vivid decorative tone (eyebrow dots, focus rings, the
  spotlight/magnetic glow).
- `--brand-strong` — the AA-contrast-safe text variant of the accent.
- `--brand-foreground` — text color placed on top of a brand-filled
  surface.

All color-pair combinations are WCAG AA-verified at authoring time
(4.5:1 body, 3:1 large text/UI) — re-verify at every client rebrand
(DESIGN.md §5).

## Typography tokens

- `--font-display-active` / `--font-sans-active` — which loaded
  `next/font` family (see `src/lib/fonts.ts`) the active look uses for
  headings vs. body. Four families are loaded: Inter, Space Grotesk,
  Fraunces, Sora — see `THEMES.md` for which look pairs which.
- `--font-sans` / `--font-display` (in `@theme inline`) — the resolved
  Tailwind font families, falling back to system fonts.

## Shape tokens

- `--radius` — the single corner-radius value every rounded utility
  derives from (`--radius-sm/md/lg/xl` are `calc()` offsets of it in
  `@theme inline`). Ranges from `0px` (swiss, brutalist) to `1.75rem`
  (organic) across the nine looks.
- `--border-width` — consumed via `border-[length:var(--border-width)]`
  on `Button`'s outline variant, `TestimonialCard`, `SpotlightCard`, and
  `FeatureIcon`. `1px` by default; `3px` for brutalist's thick borders.

## Surface tokens

- `--shadow-surface` — the box-shadow value for `Button` and other flat
  surfaces. A near-invisible "whisper" by default (DESIGN.md §7), `none`
  for swiss, and a hard, unblurred offset block for brutalist — a
  deliberate, documented exception (see `THEMES.md`).
- `--surface` — the translucent/opaque background `SpotlightCard` sits
  on (drives the "glass" feel).
- `--glass-blur` — backdrop-blur amount behind frosted surfaces. `0px`
  for flat looks.

## Motion / feel tokens

- `--spotlight-strength` (0–1) — intensity of the cursor-follow glow on
  `SpotlightCard` _and_ the ambient hero/service-grid background glow in
  `HeroCentered`/`ServiceCards`. `0` means genuinely no glow anywhere,
  not just a dimmed one.
- `--spotlight-glow` — derived, not set per look: `color-mix()` of
  `--brand` at `calc(45% * var(--spotlight-strength))`, so the hover-glow
  shadow on `SpotlightCard` scales with the same dial automatically.
- `--hover-lift` — translateY distance on card hover. `0rem` for
  brutalist/swiss (nothing floats), up to `-0.5rem` for bold/noir.
- `--magnet-strength` (0–1) — how strongly `Magnetic`-wrapped elements
  lean toward the cursor. `0` disables the effect entirely.
- `--section-rhythm` — multiplier on `Section`'s vertical padding
  (`py-[calc(5rem*var(--section-rhythm))] …`). `1` reproduces the
  original 5/7/8rem measures exactly; `0.85`–`0.9` for denser looks
  (brutalist, swiss), `1.1` for organic's more spacious rhythm.

## Motion timing (not per-look)

`--default-transition-duration` (200ms) and
`--default-transition-timing-function` (a single ease-out curve) are
shared by every look — DESIGN.md §10's "one timing, one curve" rule is a
hard constant, not a per-theme knob.

## Adding a token

A new structural token is justified when at least two looks need
genuinely different values for it (the same bar `--border-width` and
`--shadow-surface` cleared when brutalist/swiss/organic were added). A
token that only one look would ever set is usually better as a one-off
override inside that look's block instead.
