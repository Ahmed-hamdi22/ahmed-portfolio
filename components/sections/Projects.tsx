"use client";

import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { Container } from "@/components/ui/container";
import { GlowBackground } from "@/components/ui/glow-background";
import { FadeUp } from "@/components/ui/FadeUp";
import { projects } from "@/lib/data";

export function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-16 border-t border-slate-200 dark:border-white/[0.07]"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <GlowBackground variant="section" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Selected Projects"
          title="Things I've built"
          subtitle="A curated selection of full-stack and frontend web applications with verified live demos and responsive architecture."
          className="mb-8 sm:mb-10"
        />

        {featuredProject && (
          <div className="mb-4 sm:mb-5">
            <ProjectCard {...featuredProject} index={0} isFeatured />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i + 1} />
          ))}
        </div>

        {/* More on GitHub */}
        <FadeUp delay={0.3}>
          <div className="mt-8 sm:mt-10 text-center">
            <Button variant="outline" className="gap-2 font-sans text-[12px]" asChild>
              <a href="https://github.com/Ahmed-hamdi22" target="_blank" rel="noopener noreferrer">
                <Github size={14} />
                View more on GitHub
                <ExternalLink size={12} />
              </a>
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
