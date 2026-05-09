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
  return (
    <section id="projects" className="relative py-[76px] border-t border-white/[0.07]"
      style={{ background: "linear-gradient(to bottom, #080f20 0%, #020617 100%)" }}>
      <GlowBackground variant="section" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Things I've built"
          subtitle="Production-grade projects spanning e-commerce, fitness, education, and more."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
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
