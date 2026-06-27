"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackendApiPreview } from "@/components/ui/backend-api-preview";
import { FadeUp } from "@/components/ui/FadeUp";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
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
  images,
  type,
  index = 0,
  isFeatured = false,
}: ProjectCardProps) {
  const projectLabel = isFeatured ? "Featured Full Stack Project" : type;
  const hasImages = Boolean(images?.length);
  const isBackendApiPreview = type === "Backend API" && !hasImages;

  return (
    <FadeUp delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        <Card
          className={cn(
            "overflow-hidden border-white/[0.07] rounded-[20px] bg-[#0a1628]",
            "shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300",
            isFeatured
              ? "md:grid md:grid-cols-[0.52fr_1fr] border-[#38BDF8]/25"
              : "flex flex-col"
          )}
          style={{
            ["--hover-border" as string]: `${accent}30`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${accent}30`;
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 24px 58px rgba(0,0,0,0.34), 0 0 0 1px rgba(56,189,248,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              isFeatured ? "rgba(56,189,248,0.25)" : "rgba(255,255,255,0.07)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 24px rgba(0,0,0,0.2)";
          }}
        >
          {/* Visual panel */}
          <div
            className={cn(
              "relative overflow-hidden bg-[#071222] p-3",
              isFeatured ? "min-h-[240px] md:min-h-full" : "h-[218px]"
            )}
          >
            {hasImages ? (
              <ProjectImageCarousel
                title={title}
                images={images}
                accent={accent}
                isFeatured={isFeatured}
              />
            ) : isBackendApiPreview ? (
              <BackendApiPreview accent={accent} />
            ) : (
              <ProjectImageCarousel
                title={title}
                images={[]}
                accent={accent}
                isFeatured={isFeatured}
              />
            )}
            {projectLabel && (
              <div className="absolute left-5 top-5 z-20 rounded-full border border-[#38BDF8]/20 bg-[#020617]/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#38BDF8] backdrop-blur">
                {projectLabel}
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent
            className={cn(
              "flex flex-col flex-1 gap-0",
              isFeatured ? "p-[22px] md:p-[24px]" : "p-[22px]"
            )}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {projectLabel && (
                <Badge variant="accent" className="text-[10px]">
                  {projectLabel}
                </Badge>
              )}
            </div>
            <h3
              className={cn(
                "font-bold text-[#F8FAFC] tracking-[-0.02em] mb-2",
                isFeatured ? "text-[18px] leading-[1.25]" : "text-[16px]"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-[#94A3B8] leading-[1.72] mb-4 flex-1",
                isFeatured ? "text-[12px] md:text-[13px]" : "text-[12px]"
              )}
            >
              {description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-[5px] mb-4">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={colorToBadgeVariant[color]}
                  className={cn(
                    "font-mono text-[10px] tracking-[0.01em]",
                    isFeatured && tag === "Full Stack Project" && "hidden"
                  )}
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
                className="flex-1 justify-center text-[11px]"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github size={12} /> GitHub
                </a>
              </Button>

              <Button
                size="sm"
                className="flex-1 justify-center text-[11px] font-bold"
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
