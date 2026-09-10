"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/FadeUp";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { cn } from "@/lib/utils";

type ProjectColor = "blue" | "green" | "purple" | "orange";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  accent: string;
  color: ProjectColor;
  icon?: string;
  images?: string[];
  type?: string;
  index?: number;
  isFeatured?: boolean;
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
  images = [],
  type,
  index = 0,
  isFeatured = false,
}: ProjectCardProps) {
  const projectLabel = isFeatured ? "" : type;
  const hasGithub = Boolean(github && github.trim() !== "");
  const hasDemo = Boolean(demo && demo.trim() !== "");

  return (
    <FadeUp delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="h-full"
      >
        <Card
          className={cn(
            "h-full overflow-hidden border-slate-200 dark:border-white/[0.07] rounded-[18px] bg-white dark:bg-[#0a1628]",
            "shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-250 flex flex-col",
            isFeatured &&
              "md:grid md:grid-cols-[0.46fr_1fr] border-[#0891B2]/30 dark:border-[#38BDF8]/25",
          )}
          style={{
            ["--hover-border" as string]: `${accent}30`,
          }}
          onMouseEnter={(e) => {
            const isDark = document.documentElement.classList.contains("dark");
            (e.currentTarget as HTMLElement).style.borderColor = `${accent}50`;
            (e.currentTarget as HTMLElement).style.boxShadow = isDark
              ? "0 18px 48px rgba(0,0,0,0.32), 0 0 0 1px rgba(56,189,248,0.1)"
              : "0 12px 32px rgba(15,23,42,0.08), 0 0 0 1px rgba(14,165,233,0.15)";
          }}
          onMouseLeave={(e) => {
            const isDark = document.documentElement.classList.contains("dark");
            (e.currentTarget as HTMLElement).style.borderColor = isFeatured
              ? (isDark ? "rgba(56,189,248,0.25)" : "rgba(8,145,178,0.3)")
              : (isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0");
            (e.currentTarget as HTMLElement).style.boxShadow = isDark
              ? "0 4px 24px rgba(0,0,0,0.18)"
              : "0 1px 3px rgba(0,0,0,0.05)";
          }}
        >
          {/* Visual panel (compact ~165px height) */}
          <div
            className={cn(
              "relative overflow-hidden bg-slate-50 dark:bg-[#071222] p-2.5",
              isFeatured ? "h-[175px] md:h-full md:min-h-[175px]" : "h-[165px]",
            )}
          >
            <ProjectImageCarousel
              title={title}
              images={images}
              accent={accent}
              isFeatured={isFeatured}
            />
            {projectLabel && (
              <div className="absolute left-4 top-4 z-20 rounded-full border border-sky-300/40 dark:border-[#38BDF8]/20 bg-white/90 dark:bg-[#020617]/80 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#0891B2] dark:text-[#38BDF8] backdrop-blur shadow-xs">
                {projectLabel}
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent
            className={cn(
              "flex flex-col flex-1 p-4 sm:p-5",
              isFeatured ? "md:p-5" : "",
            )}
          >
            <h3
              className={cn(
                "font-heading font-bold text-slate-900 dark:text-[#F8FAFC] tracking-[-0.02em] mb-1.5",
                isFeatured ? "text-[16px] sm:text-[17px]" : "text-[15px]",
              )}
            >
              {title}
            </h3>

            <p
              className={cn(
                "text-slate-600 dark:text-[#94A3B8] leading-[1.6] mb-3 line-clamp-3 flex-1",
                isFeatured ? "text-[12px] sm:text-[13px]" : "text-[12px]",
              )}
            >
              {description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-[5px] mb-3.5">
              {tags.slice(0, 7).map((tag) => (
                <Badge
                  key={tag}
                  variant={colorToBadgeVariant[color] || "default"}
                  className="font-mono text-[10px] px-2 py-0.5 tracking-[0.01em]"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 7 && (
                <Badge
                  variant="default"
                  className="font-mono text-[10px] px-2 py-0.5"
                >
                  +{tags.length - 7}
                </Badge>
              )}
            </div>

            {/* Actions (render only when real URLs exist) */}
            {(hasGithub || hasDemo) && (
              <div className="flex gap-2 pt-1 border-t border-slate-100 dark:border-white/[0.05]">
                {hasGithub && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-center text-[11px] h-8 gap-1.5 font-sans"
                    asChild
                  >
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <Github size={12} /> Source Code
                    </a>
                  </Button>
                )}

                {hasDemo && (
                  <Button
                    size="sm"
                    className="flex-1 justify-center text-[11px] font-bold h-8 gap-1.5 font-sans bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs"
                    asChild
                  >
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight size={12} /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </FadeUp>
  );
}
