// Placeholder reference projects for the template. Replaced per client from
// real case studies. This file is the single source for project slugs: the
// homepage gallery and the /projekte overview + detail routes all derive
// from it (same pattern as src/content/services.ts).

import type { SectionImage } from "@/types/content";

export interface ProjectDetail {
  slug: string;
  title: string;
  /** Short card/teaser description, also used as meta description. */
  excerpt: string;
  image: SectionImage;
  client?: string;
  year?: string;
  hero: { title: string; subtitle: string };
  description: string;
  results?: string[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "projekt-eins",
    title: "Projekt Eins",
    excerpt:
      "Ein Satz zum Ergebnis: Ausgangslage, Ansatz und die messbare Verbesserung für den Kunden.",
    image: {
      src: "/images/showcase/editorial.png",
      alt: "Referenzprojekt Eins, editoriale Gestaltung",
    },
    client: "Kundenname",
    year: "2025",
    hero: {
      title: "Projekt Eins: das Ergebnis in einem Satz",
      subtitle:
        "Zwei bis drei Sätze zu Ausgangslage, Zusammenarbeit und dem konkreten Ergebnis für diesen Kunden.",
    },
    description:
      "Ein bis zwei Absätze zum Projektverlauf: die Herausforderung, der gewählte Ansatz und warum er passte. Konkrete Details schaffen Glaubwürdigkeit — allgemeine Floskeln nicht.",
    results: [
      "Ein messbares Ergebnis, z. B. eine Kennzahl vor/nach dem Projekt",
      "Ein zweites Ergebnis aus Kundensicht",
    ],
  },
  {
    slug: "projekt-zwei",
    title: "Projekt Zwei",
    excerpt:
      "Ein Satz zum Ergebnis: Ausgangslage, Ansatz und die messbare Verbesserung für den Kunden.",
    image: {
      src: "/images/showcase/split.png",
      alt: "Referenzprojekt Zwei, zweispaltiges Layout",
    },
    client: "Kundenname",
    year: "2024",
    hero: {
      title: "Projekt Zwei: das Ergebnis in einem Satz",
      subtitle:
        "Zwei bis drei Sätze zu Ausgangslage, Zusammenarbeit und dem konkreten Ergebnis für diesen Kunden.",
    },
    description:
      "Ein bis zwei Absätze zum Projektverlauf: die Herausforderung, der gewählte Ansatz und warum er passte. Konkrete Details schaffen Glaubwürdigkeit — allgemeine Floskeln nicht.",
    results: [
      "Ein messbares Ergebnis, z. B. eine Kennzahl vor/nach dem Projekt",
      "Ein zweites Ergebnis aus Kundensicht",
    ],
  },
  {
    slug: "projekt-drei",
    title: "Projekt Drei",
    excerpt:
      "Ein Satz zum Ergebnis: Ausgangslage, Ansatz und die messbare Verbesserung für den Kunden.",
    image: {
      src: "/images/showcase/object.png",
      alt: "Referenzprojekt Drei, freigestelltes Produktbild",
    },
    client: "Kundenname",
    year: "2024",
    hero: {
      title: "Projekt Drei: das Ergebnis in einem Satz",
      subtitle:
        "Zwei bis drei Sätze zu Ausgangslage, Zusammenarbeit und dem konkreten Ergebnis für diesen Kunden.",
    },
    description:
      "Ein bis zwei Absätze zum Projektverlauf: die Herausforderung, der gewählte Ansatz und warum er passte. Konkrete Details schaffen Glaubwürdigkeit — allgemeine Floskeln nicht.",
    results: [
      "Ein messbares Ergebnis, z. B. eine Kennzahl vor/nach dem Projekt",
      "Ein zweites Ergebnis aus Kundensicht",
    ],
  },
];

export const projectsPage = {
  hero: {
    title: "Referenzen",
    subtitle:
      "Ausgewählte Projekte — jedes mit seiner eigenen Ausgangslage, seinem eigenen Weg und einem messbaren Ergebnis.",
  },
  cta: {
    title: "Ihr Projekt könnte das nächste sein",
    subtitle:
      "Im kostenlosen Erstgespräch klären wir, ob und wie wir Ihnen helfen können.",
    action: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
    note: "Unverbindlich. Antwort innerhalb von 24 Stunden.",
  },
};
