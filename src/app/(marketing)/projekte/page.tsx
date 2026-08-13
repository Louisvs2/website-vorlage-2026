import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTA } from "@/components/sections/cta";
import { Gallery } from "@/components/sections/gallery";
import { HeroCentered } from "@/components/sections/hero";
import { features } from "@/config/features";
import { projects, projectsPage } from "@/content/projects";

export const metadata: Metadata = {
  title: "Referenzen",
  description: projectsPage.hero.subtitle,
};

export default function ProjectsPage() {
  if (!features.gallery) notFound();

  return (
    <>
      <HeroCentered
        title={projectsPage.hero.title}
        subtitle={projectsPage.hero.subtitle}
        className="py-20 sm:py-24 lg:py-28"
      />
      <Gallery
        images={projects.map((project) => ({
          ...project.image,
          href: `/projekte/${project.slug}`,
        }))}
        background="muted"
      />
      <CTA {...projectsPage.cta} />
    </>
  );
}
