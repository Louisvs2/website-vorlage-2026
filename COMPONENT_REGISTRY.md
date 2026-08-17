# COMPONENT_REGISTRY.md — Using `src/registry/components.ts`

The machine-readable index behind `COMPONENT_LIBRARY.md`. This is the
first thing to search before writing any new component (CLAUDE.md §8's
priority order, step 1–2).

## Schema

```ts
interface ComponentRegistryEntry {
  id: string; // stable kebab-case id
  category: ComponentCategory; // layout | navigation | hero | content
  // | card | form | business | shared
  // | ui | motion
  name: string; // exported symbol name(s)
  path: string; // file path from repo root
  description: string;
  tags: string[];
  themes: readonly LookName[] | "all"; // "all" = fully token-driven
  animation: string[]; // motion patterns used internally
  responsive: boolean;
  suitableFor: string[]; // industry/brief suggestions, never a restriction
  referenceSources?: string[]; // reference-library/sources/*.md ids
}
```

## How to search it

It's a plain TypeScript array — filter it like any other data:

```ts
import { componentRegistry } from "@/registry/components";

// Everything that fits a real-estate brief
componentRegistry.filter((c) => c.suitableFor.includes("real-estate"));

// Every hero variant
componentRegistry.filter((c) => c.category === "hero");

// Everything with a spotlight/glow effect
componentRegistry.filter((c) => c.tags.includes("spotlight"));
```

No build step, no separate tooling — it's imported directly wherever a
future showcase or builder script needs it.

## Registering a new component

Required whenever a component is added to `src/components/` (CLAUDE.md
§8: "adding a component without a registry entry is an incomplete
change"):

1. Pick the narrowest accurate `category`.
2. Write `suitableFor` from the actual brief that justified building it
   — not a guess at every industry it might theoretically fit.
3. Set `themes` to `"all"` only after actually verifying the component
   under at least the light/dark and glow/flat extremes (e.g. `glass` and
   `swiss`) — see `THEMES.md`'s verification note.
4. If the component's mechanism came from `reference-library/` research,
   list the source id(s) in `referenceSources`.
5. Add the component to `COMPONENT_LIBRARY.md`'s relevant section too —
   the registry is the searchable data, the catalog is the readable tour;
   they should never drift out of sync.

## Current coverage

45 entries across layout, navigation, hero, content, card, form,
business, shared, ui, and motion — see `src/registry/components.ts` for
the full list, or `COMPONENT_LIBRARY.md` for the narrative version.
