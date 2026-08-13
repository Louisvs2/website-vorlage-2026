# website-vorlage-2026

Wiederverwendbares Website-Template für Agentur-/Kundenprojekte. Next.js 15
(App Router, React 19, TypeScript strict, Tailwind CSS 4), mit einem
Look-Preset-System (glass / editorial / minimal / bold / cinema / noir) unter
`/looks`, das als Ausgangspunkt für jedes neue Kundenprojekt dient. `cinema`
und `noir` sind eigenständig dunkle Looks für Marken, die grundsätzlich
dunkel wirken sollen (Museum, Immobilien, Luxus, Nightlife).

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
