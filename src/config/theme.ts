/**
 * The look of the site — the single switch a new client project flips.
 *
 * Each look bundles an accent colour, a font pairing, corner radius, the
 * "feel" of the interactions (glass blur, cursor spotlight, hover lift,
 * magnetic strength), and — since brutalist/swiss/organic — a set of
 * structural knobs (border width, surface shadow, section rhythm) so a
 * look is a real art direction, not a palette swap (see THEMES.md /
 * ARCHITECTURE.md). The visual values live in src/styles/globals.css under
 * `:root[data-look="…"]`; the fonts are wired in src/lib/fonts.ts. To rebrand
 * beyond a preset, edit the accent tokens for that look in globals.css.
 */
export const looks = [
  "glass",
  "editorial",
  "minimal",
  "bold",
  "cinema",
  "noir",
  "brutalist",
  "swiss",
  "organic",
] as const;

export type LookName = (typeof looks)[number];

/** Human-readable summary of each look (for docs / tooling). */
export const lookDescriptions: Record<LookName, string> = {
  glass:
    "Modern & tactile — Space Grotesk, warm gold, frosted-glass cards with a cursor spotlight and magnetic CTA.",
  editorial:
    "Refined & calm — Fraunces serif, deep burgundy, flat cards with hairline borders. Magazine-grade.",
  minimal:
    "Quiet & sharp — Inter throughout, monochrome ink accent, flat surfaces, tight corners. Gallery-like.",
  bold: "Vivid & playful — Sora, electric violet, strong glass, deep lift and a punchy magnetic CTA.",
  cinema:
    "Dark & dramatic — Space Grotesk, near-black stage, monochrome accent, sharp corners, no glow. Museum-grade.",
  noir: "Dark & luxurious — Sora, deep twilight ground, vivid violet on every filled surface, heavy glass, full-pill radius.",
  brutalist:
    "Raw & static — Space Grotesk, achromatic, thick black borders, hard offset shadow, zero radius, no lift or glow.",
  swiss:
    "Precise & rigid — Inter, hairline red/black/white, zero shadow, zero radius, denser rhythm. International Typographic Style.",
  organic:
    "Warm & soft — Fraunces, terracotta on cream, generous radius, gentle glow, looser rhythm. Wellness/hospitality-grade.",
};

/**
 * Looks with a fixed dark ground (background/foreground/card, not just the
 * accent) live entirely in their own `[data-look]` block in globals.css —
 * they do not need the `.dark` class. Every other look is light by default.
 */
export const darkLooks: readonly LookName[] = ["cinema", "noir"];

/** The active look. Change this one line per client project. */
export const activeLook: LookName = "glass";
