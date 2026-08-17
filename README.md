# website-vorlage-2026

Ein **Website OS**: eine wiederverwendbare Design-/Component-/Theme-
Bibliothek für Agentur-/Kundenprojekte, kein einzelnes Template. Next.js 15
(App Router, React 19, TypeScript strict, Tailwind CSS 4), mit einem
Look-System aus 9 strukturell eigenständigen Art Directions (glass /
editorial / minimal / bold / cinema / noir / brutalist / swiss / organic)
unter `/looks` — siehe `THEMES.md`. Ein neues Kundenprojekt wird aus dieser
Bibliothek komponiert, nicht neu programmiert: `ARCHITECTURE.md` beschreibt
das Gesamtsystem, `AI_WEBSITE_BUILDER.md` den Discovery-Workflow dafür.

## Nutzung für ein neues Kundenprojekt

1. Dieses Repository klonen bzw. als Vorlage für ein neues Repo verwenden.
2. `CLIENT.md` kopieren und mit den Kundendaten ausfüllen — feeds
   `src/config/site.ts`, `src/content/`, Design-Tokens und Copywriting.
3. `npm run setup` ausführen — fragt interaktiv ab, ob Galerie (inkl.
   `/projekte`-Case-Studies), Buchung (externes Tool), WhatsApp-Button und
   Analytics (Cookie-Consent-Banner) aktiv sein sollen, und schreibt die
   Antworten nach `src/config/features.ts`.
4. `PLAN.md` lesen für Tech-Stack, Ordnerstruktur und Komponentenbibliothek.
5. `CLAUDE.md` beschreibt die Arbeitsweise (Code-Qualität, Performance,
   Design-Ansprüche) für dieses und alle daraus abgeleiteten Projekte.

## Entwicklung

```bash
npm install
npm run dev          # Entwicklungsserver
npm run setup        # Optionale Features (Galerie/Buchung/WhatsApp/Analytics) abfragen
npm run typecheck    # TypeScript strict
npm run lint          # ESLint
npm run build          # Produktions-Build
```

## Struktur

Details in `PLAN.md`. Kurzfassung:

- `src/app/` — Next.js App Router Seiten
- `src/components/` — wiederverwendbare Sections und UI-Bausteine
- `src/content/` — seiten-/kundenspezifische Inhalte (props-driven Sections)
- `src/config/` — Site-Konfiguration (Name, Kontakt, Social-Profile)
- `src/registry/` — maschinenlesbare Component-Registry (`COMPONENT_REGISTRY.md`)
- `reference-library/` — dokumentierte externe UI-Pattern-Recherche (`REFERENCE_LIBRARY.md`)

## Website OS — weitere Dokumentation

| Frage                                   | Dokument                |
| --------------------------------------- | ----------------------- |
| Gesamtarchitektur (5 Ebenen)            | `ARCHITECTURE.md`       |
| Design-Tokens im Detail                 | `DESIGN_SYSTEM.md`      |
| Alle 9 Looks + wann welcher passt       | `THEMES.md`             |
| Alle Components im Überblick            | `COMPONENT_LIBRARY.md`  |
| Component vor dem Bauen suchen          | `COMPONENT_REGISTRY.md` |
| Motion-Patterns                         | `MOTION_SYSTEM.md`      |
| Externe Inspiration, richtig genutzt    | `REFERENCE_LIBRARY.md`  |
| Neues Kundenprojekt: Discovery-Workflow | `AI_WEBSITE_BUILDER.md` |
| Entscheidungen vor dem Coden            | `WEBSITE_ARCHITECT.md`  |
| Was ist gebaut, was ist Backlog         | `ROADMAP.md`            |
