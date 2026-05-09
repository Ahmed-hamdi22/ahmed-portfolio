"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowBackground } from "@/components/ui/glow-background";
import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/utils";

type ProjectColor = "blue" | "green" | "purple" | "orange";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  accent: string;
  color: ProjectColor;
  icon: string;
  index?: number;
}

const colorToBadgeVariant: Record<
  ProjectColor,
  "blue" | "green" | "purple" | "orange"
> = {
  blue: "blue",
  green: "green",
  purple: "purple",
  orange: "orange",
};

export function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  accent,
  color,
  icon,
  index = 0,
}: ProjectCardProps) {
  return (
    <FadeUp delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -7 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        <Card
          className={cn(
            "flex flex-col overflow-hidden border-white/[0.07] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.2)]",
            "transition-all duration-350",
          )}
          style={{
            ["--hover-border" as string]: `${accent}30`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${accent}30`;
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 28px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.07)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 24px rgba(0,0,0,0.2)";
          }}
        >
          {/* Visual panel */}
          <div className="h-[196px] relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 transition-transform duration-400"
              style={{
                background: `linear-gradient(135deg, #010b18 0%, #021628 100%)`,
              }}
            />
            <GlowBackground variant="side" color={color} />
            {/* Subtle grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Icon */}
            <div
              className="relative z-10 w-[58px] h-[58px] rounded-[16px] flex items-center justify-center text-[26px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-transform duration-300"
              style={{
                background: "rgba(2,6,23,0.65)",
                border: `1px solid ${accent}33`,
              }}
            >
              {icon}
            </div>
            {/* Fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]" />
          </div>

          {/* Content */}
          <CardContent className="p-[22px] flex flex-col flex-1 gap-0">
            <h3 className="text-[16px] font-bold text-[#F8FAFC] tracking-[-0.025em] mb-2">
              {title}
            </h3>
            <p className="text-[12px] text-[#94A3B8] leading-[1.72] mb-4 flex-1">
              {description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-[5px] mb-4">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={colorToBadgeVariant[color]}
                  className="text-[10px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2 relative z-20">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-[11px]"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github size={12} /> GitHub
                </a>
              </Button>

              <Button
                size="sm"
                className="flex-1 text-[11px] font-bold"
                style={{ background: accent, color: "#020617" }}
                asChild
              >
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight size={12} /> Live Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </FadeUp>
  );
}
