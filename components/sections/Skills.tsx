"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { SkillCard } from "@/components/ui/skill-card";
import { Container } from "@/components/ui/container";
import { GlowBackground } from "@/components/ui/glow-background";
import { skills } from "@/lib/data";

const iconMap: Record<string, string> = {
  Frontend: "⚛",
  Backend: "🖥",
  "Tools & Workflow": "⚙",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-[76px] border-t border-white/[0.07]"
      style={{ background: "linear-gradient(to bottom, #080f20 0%, #020617 100%)" }}>
      <GlowBackground variant="section" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technologies I work with"
          subtitle="A curated toolkit of modern frontend and backend technologies refined through real production projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, { color, tags }], i) => (
            <SkillCard
              key={category}
              label={category}
              color={color}
              icon={<span style={{ color }}>{iconMap[category]}</span>}
              tags={tags}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
