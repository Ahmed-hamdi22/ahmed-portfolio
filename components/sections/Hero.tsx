"use client";

import { motion } from "framer-motion";
import { ChevronRight, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowBackground } from "@/components/ui/glow-background";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";

const stats = [
  { num: "3+", label: "Production Apps" },
  { num: "15+", label: "Technologies" },
  { num: "2", label: "Roles & Programs" },
  { num: "Open", label: "To Remote Work" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center z-10">
      <GlowBackground variant="hero" />

      <Container className="py-20 relative z-10 w-full">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Badge
            variant="availability"
            className="mb-8 inline-flex items-center gap-2"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
            Available for opportunities
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Soft white glow behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] blur-[32px]" />
          <h1 className="relative text-[clamp(44px,8vw,84px)] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#F8FAFC] mb-1">
            {siteConfig.name.split(" ")[0]} {siteConfig.name.split(" ")[1]}
            <em className="text-[#38BDF8] not-italic">.</em>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "1px rgba(248,250,252,0.18)" }}
            >
              Full Stack
            </span>
            Engineer
          </h1>
        </motion.div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-[clamp(17px,2.5vw,24px)] font-light text-[#94A3B8] tracking-[-0.01em] mt-2 mb-5"
        >
          Frontend-focused · React.js &amp; Next.js · Node.js
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[15px] text-[#94A3B8] max-w-[520px] leading-[1.78] mb-10"
        >
          {siteConfig.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="flex flex-wrap gap-[10px] items-center mb-14"
        >
          <Button size="lg" className="text-[13px] font-bold" asChild>
            <a href="#projects">
              <ChevronRight size={15} /> View Projects
            </a>
          </Button>
          <Button variant="ghost" size="lg" className="text-[13px]" asChild>
            <a href="/cv.pdf" download>
              <Download size={14} /> Download CV
            </a>
          </Button>
          <SocialLinks size="md" className="gap-5" />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B]"
        >
          <span className="text-[11px] tracking-[0.1em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
