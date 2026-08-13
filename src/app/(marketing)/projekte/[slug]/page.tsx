import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { CTA } from "@/components/sections/cta";
import { HeroStatement } from "@/components/sections/hero";
import { HeroVisual } from "@/components/sections/hero-visual";
import { features } from "@/config/features";
import { projects, projectsPage } from "@/content/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  if (!features.gallery) return [];
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.excerpt };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  if (!features.gallery) notFound();

  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <>
      <HeroStatement
        eyebrow="Referenz"
        title={project.hero.title}
        subtitle={project.hero.subtitle}
        actions={{
          primary: { label: "Projekt anfragen", href: "/kontakt" },
        }}
        className="py-20 sm:py-24 lg:py-28"
      />
      <Section className="pt-0">
        <Container>
          <FadeIn>
            <HeroVisual
              media={{
                type: "image",
                src: project.image.src,
                alt: project.image.alt,
              }}
              priority
              sizes="100vw"
              className="aspect-[16/9]"
            />
          </FadeIn>
        </Container>
      </Section>
      <Section background="muted">
        <Container>
          <FadeIn className="mx-auto flex max-w-3xl flex-col gap-8">
            {(project.client || project.year) && (
              <div className="flex gap-8 border-b pb-6 text-sm">
                {project.client && (
                  <div>
                    <p className="text-muted-foreground">Kunde</p>
                    <p className="mt-1 font-medium">{project.client}</p>
                  </div>
                )}
                {project.year && (
                  <div>
                    <p className="text-muted-foreground">Jahr</p>
                    <p className="mt-1 font-medium">{project.year}</p>
                  </div>
                )}
              </div>
            )}
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              {project.description}
            </p>
            {project.results && project.results.length > 0 && (
              <ul className="flex flex-col gap-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand-strong"
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            )}
          </FadeIn>
        </Container>
      </Section>
      <CTA {...projectsPage.cta} background="muted" />
    </>
  );
}
