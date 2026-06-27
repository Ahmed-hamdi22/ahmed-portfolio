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
      className="relative py-[76px] border-t border-white/[0.07]"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <GlowBackground variant="section" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Things I've built"
          subtitle="Production-grade projects spanning recruitment workflows, e-commerce, fitness, education, and backend APIs."
        />

        {featuredProject && (
          <div className="mb-[18px]">
            <ProjectCard {...featuredProject} index={0} isFeatured />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i + 1} />
          ))}
        </div>

        {/* More on GitHub */}
        <FadeUp delay={0.4}>
          <div className="mt-12 text-center">
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://github.com/Ahmed-hamdi22" target="_blank" rel="noopener noreferrer">
                <Github size={15} />
                View more on GitHub
                <ExternalLink size={13} />
              </a>
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
