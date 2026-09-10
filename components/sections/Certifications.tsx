"use client";

import { motion } from "framer-motion";
import { Award, Building2, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUp } from "@/components/ui/FadeUp";
import { GlowBackground } from "@/components/ui/glow-background";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 py-14 sm:py-16 border-t border-slate-200 dark:border-white/[0.07]"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <GlowBackground variant="section" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Education & Training"
          title="Certifications & Learning"
          subtitle="Structured diplomas and technical tracks covering modern full-stack development."
          className="mb-8 sm:mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {certifications.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-[#0a1628] border-slate-200 dark:border-white/[0.07] rounded-[18px] shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.18)] hover:border-sky-300 dark:hover:border-[rgba(56,189,248,0.22)] hover:shadow-md dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-200 flex flex-col">
                  <CardContent className="p-5 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-[36px] h-[36px] rounded-[10px] bg-sky-50 dark:bg-[rgba(56,189,248,0.1)] border border-sky-200 dark:border-[rgba(56,189,248,0.2)] flex items-center justify-center shrink-0 text-[#0284C7] dark:text-[#38BDF8]">
                          <Award size={18} />
                        </div>
                        <div>
                          <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-[#F8FAFC] tracking-[-0.02em] font-heading">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-1 text-[#0284C7] dark:text-[#38BDF8] text-[12px] font-semibold">
                            <Building2 size={12} />
                            <span>{item.provider}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="flex items-center gap-1 justify-end text-[11px] text-slate-500 dark:text-[#64748B] font-medium">
                          <Calendar size={11} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end mt-1 text-[11px] text-slate-500 dark:text-[#64748B]">
                          <MapPin size={11} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[12px] sm:text-[13px] text-slate-600 dark:text-[#94A3B8] leading-[1.65] mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Topic Tags */}
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.08em] text-slate-500 dark:text-[#64748B] block mb-2">
                        Main Topics Covered
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.topics.map((topic) => (
                          <Badge
                            key={topic}
                            variant="default"
                            className="text-[10px] px-2 py-0.5 font-mono"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
