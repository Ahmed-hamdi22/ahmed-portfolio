"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BadgeGroup } from "@/components/ui/badge-group";
import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SkillCardProps {
  label: string;
  color: string;
  icon: ReactNode;
  tags: string[];
  delay?: number;
}

export function SkillCard({ label, color, icon, tags, delay = 0 }: SkillCardProps) {
  return (
    <FadeUp delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="h-full"
      >
        <Card
          glow
          className={cn(
            "p-5 h-full cursor-default flex flex-col justify-start",
            "bg-[#0a1628] border-white/[0.07] rounded-[18px]",
            "hover:border-[rgba(56,189,248,0.22)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-200"
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-[11px] font-bold shrink-0"
              style={{
                background: `${color}1a`,
                border: `1px solid ${color}26`,
                color,
              }}
            >
              {icon}
            </div>
            <span
              className="text-[12px] font-bold tracking-[0.06em] uppercase font-heading"
              style={{ color }}
            >
              {label}
            </span>
          </div>

          {/* Tags */}
          <div className="flex-1">
            <BadgeGroup tags={tags} variant="default" size="md" />
          </div>
        </Card>
      </motion.div>
    </FadeUp>
  );
}
