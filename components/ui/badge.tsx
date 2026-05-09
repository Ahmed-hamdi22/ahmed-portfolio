"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[5px] px-[10px] py-[3px] text-[11px] font-semibold transition-all duration-150 cursor-default select-none",
  {
    variants: {
      variant: {
        default:
          "text-[#94A3B8] bg-white/[0.04] border border-white/[0.07] hover:text-[#F8FAFC] hover:border-white/[0.12]",
        accent:
          "text-[#38BDF8] bg-[rgba(56,189,248,0.07)] border border-[rgba(56,189,248,0.14)] tracking-[0.04em] uppercase",
        blue:
          "text-[#38BDF8] bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.18)]",
        green:
          "text-[#34D399] bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.2)]",
        purple:
          "text-[#A78BFA] bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.2)]",
        orange:
          "text-[#FB923C] bg-[rgba(251,146,60,0.08)] border border-[rgba(251,146,60,0.2)]",
        indigo:
          "text-[#818CF8] bg-[rgba(129,140,248,0.08)] border border-[rgba(129,140,248,0.2)]",
        muted:
          "text-[#94A3B8] bg-[rgba(148,163,184,0.06)] border border-[rgba(148,163,184,0.12)]",
        availability:
          "text-[#38BDF8] bg-[rgba(56,189,248,0.07)] border border-[rgba(56,189,248,0.2)] rounded-full px-[14px] py-[5px] text-[11px] uppercase tracking-[0.04em]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
