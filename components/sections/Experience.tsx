"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceCard } from "@/components/ui/experience-card";
import { Container } from "@/components/ui/container";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 py-[76px] border-t border-white/[0.07]">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Professional roles and intensive training programs that shaped my engineering foundation."
        />

        {/* Timeline */}
        <div className="relative pl-7"
          style={{
            ["--line-gradient" as string]: "linear-gradient(to bottom, #38BDF8, rgba(56,189,248,0.05))",
          }}
        >
          {/* Vertical line */}
          <div className="absolute left-[8px] top-3 bottom-3 w-[1px]"
            style={{ background: "linear-gradient(to bottom, #38BDF8, rgba(56,189,248,0.05))" }}
          />

          {experience.map((exp, i) => (
            <ExperienceCard key={exp.company} {...exp} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
