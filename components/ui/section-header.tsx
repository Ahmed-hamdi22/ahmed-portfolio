"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <FadeUp className={cn("mb-12", align === "center" && "text-center", className)}>
      {/* Eyebrow */}
      <div
        className={cn(
          "flex items-center gap-2 mb-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="w-5 h-[1.5px] bg-[#38BDF8] rounded-full block" />
        <span className="text-[11px] font-bold text-[#38BDF8] tracking-[0.1em] uppercase">
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-[clamp(24px,3.8vw,36px)] font-extrabold tracking-[-0.03em] text-[#F8FAFC] leading-[1.15] mb-2">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-[14px] text-[#94A3B8] max-w-[460px] leading-[1.72]">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}
