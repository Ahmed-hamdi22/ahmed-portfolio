"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Code2, Layers, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/ui/FadeUp";
import { siteConfig } from "@/lib/data";

const highlights = [
  {
    Icon: Code2,
    label: "Clean Architecture",
    desc: "Maintainable, scalable code patterns",
  },
  {
    Icon: Layers,
    label: "Full Stack",
    desc: "Frontend and backend development across complete application workflows",
  },
  {
    Icon: Zap,
    label: "Performance First",
    desc: "Optimized, accessible UIs by default",
  },
];

const contactInfo = [
  { Icon: MapPin, text: siteConfig.location },
  { Icon: Mail, text: siteConfig.email },
  { Icon: Phone, text: siteConfig.phone },
];

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-[76px] border-t border-white/[0.07]"
    >
      <Container>
        <SectionHeader
          eyebrow="About Me"
          title="Building complete web applications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          {/* Left: bio */}
          <FadeUp delay={0.1}>
            <p className="text-[15px] text-[#CBD5E1] leading-[1.85] mb-5">
              I&apos;m Ahmed Hamdi, a{" "}
              <strong className="text-[#F8FAFC] font-semibold">
                Full Stack Developer
              </strong>{" "}
              building frontend interfaces, backend APIs, authentication
              flows, and database-driven features with React, Next.js,
              TypeScript, Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-[15px] text-[#CBD5E1] leading-[1.85] mb-6">
              I create responsive dashboards and full-stack application
              workflows with clean architecture, reusable forms, validation,
              loading states, safe API error handling, performance, and
              long-term maintainability in mind.
            </p>

            {/* Contact pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {contactInfo.map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-[7px] px-[13px] py-[7px] rounded-[8px] bg-white/[0.04] border border-white/[0.07] text-[12px] text-[#CBD5E1] hover:border-white/[0.12] transition-colors duration-200 cursor-default"
                >
                  <Icon size={13} className="text-[#38BDF8]" />
                  {text}
                </span>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="flex flex-col gap-3">
              {highlights.map(({ Icon, label, desc }, i) => (
                <FadeUp key={label} delay={0.15 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="flex items-start gap-4 p-5 hover:border-[rgba(56,189,248,0.15)] transition-all duration-200 cursor-default">
                      <div className="w-[38px] h-[38px] rounded-[10px] shrink-0 bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.15)] flex items-center justify-center">
                        <Icon size={17} className="text-[#38BDF8]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] text-[#F8FAFC] mb-1">
                          {label}
                        </p>
                        <p className="text-[13px] text-[#94A3B8]">{desc}</p>
                      </div>
                    </Card>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
