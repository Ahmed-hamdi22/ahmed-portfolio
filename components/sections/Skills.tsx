"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { GlowBackground } from "@/components/ui/glow-background";
import { FadeUp } from "@/components/ui/FadeUp";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-14 sm:py-16 border-t border-slate-200 dark:border-white/[0.07]"
      style={{
        background: "var(--section-alt-bg)",
      }}
    >
      <GlowBackground variant="section" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technologies I work with"
          subtitle="A curated toolkit of frontend, backend, database, and development tools organized by specialization."
          className="mb-8 sm:mb-10"
        />

        {/* Single Unified Container */}
        <FadeUp delay={0.1}>
          <div className="rounded-[20px] border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#071322]/75 backdrop-blur-md p-6 sm:p-8 shadow-sm dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] divide-y divide-slate-100 dark:divide-white/[0.06]">
            {Object.entries(skills).map(([category, { color, tags }]) => (
              <div
                key={category}
                className={cn(
                  "py-5 sm:py-6 first:pt-0 last:pb-0",
                  "grid grid-cols-1 md:grid-cols-[190px_1fr] lg:grid-cols-[200px_1fr] gap-3.5 md:gap-6 items-start"
                )}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pt-1">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 10px ${color}80`,
                    }}
                  />
                  <h3 className="font-heading font-bold text-[14px] sm:text-[15px] tracking-[-0.01em] text-slate-900 dark:text-[#F8FAFC]">
                    {category}
                  </h3>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-[8px] px-3 py-1.5 text-[12px] sm:text-[12.5px] font-sans font-medium text-[#334155] dark:text-[#CBD5E1] bg-[#F1F5F9] dark:bg-white/[0.035] border border-slate-200 dark:border-white/[0.08] hover:border-sky-300 dark:hover:border-[#38BDF8]/40 hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:bg-slate-200/70 dark:hover:bg-[#38BDF8]/[0.05] transition-all duration-150 cursor-default select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
