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
    <FadeUp delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <Card
          glow
          className={cn(
            "p-[22px] h-full cursor-default",
            "hover:border-[rgba(56,189,248,0.18)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-[10px] mb-[18px]">
            <div
              className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-[15px]"
              style={{
                background: `${color}1a`,
                border: `1px solid ${color}26`,
              }}
            >
              {icon}
            </div>
            <span
              className="text-[11px] font-bold tracking-[0.07em] uppercase"
              style={{ color }}
            >
              {label}
            </span>
          </div>

          {/* Tags */}
          <BadgeGroup tags={tags} variant="default" />
        </Card>
      </motion.div>
    </FadeUp>
  );
}
