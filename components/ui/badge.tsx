"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[6px] px-[10px] py-[3.5px] text-[11.5px] sm:text-[12px] font-sans font-medium transition-all duration-150 cursor-default select-none",
  {
    variants: {
      variant: {
        default:
          "text-slate-700 dark:text-[#CBD5E1] bg-[#F1F5F9] dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-slate-300 dark:hover:border-white/[0.16] hover:bg-slate-200/60 dark:hover:bg-white/[0.06]",
        accent:
          "text-[#0891B2] dark:text-[#38BDF8] bg-sky-50 dark:bg-[rgba(56,189,248,0.07)] border border-sky-200 dark:border-[rgba(56,189,248,0.14)] tracking-[0.04em] uppercase font-medium",
        blue:
          "text-[#2563EB] dark:text-[#38BDF8] bg-blue-50 dark:bg-[rgba(56,189,248,0.08)] border border-blue-200 dark:border-[rgba(56,189,248,0.18)] font-medium",
        green:
          "text-[#059669] dark:text-[#34D399] bg-emerald-50 dark:bg-[rgba(52,211,153,0.08)] border border-emerald-200 dark:border-[rgba(52,211,153,0.2)] font-medium",
        purple:
          "text-[#7C3AED] dark:text-[#A78BFA] bg-purple-50 dark:bg-[rgba(167,139,250,0.08)] border border-purple-200 dark:border-[rgba(167,139,250,0.2)] font-medium",
        orange:
          "text-[#EA580C] dark:text-[#FB923C] bg-orange-50 dark:bg-[rgba(251,146,60,0.08)] border border-orange-200 dark:border-[rgba(251,146,60,0.2)] font-medium",
        indigo:
          "text-[#4F46E5] dark:text-[#818CF8] bg-indigo-50 dark:bg-[rgba(129,140,248,0.08)] border border-indigo-200 dark:border-[rgba(129,140,248,0.2)] font-medium",
        muted:
          "text-slate-600 dark:text-[#94A3B8] bg-slate-100 dark:bg-[rgba(148,163,184,0.06)] border border-slate-200 dark:border-[rgba(148,163,184,0.12)]",
        availability:
          "text-[#059669] dark:text-[#38BDF8] bg-emerald-50 dark:bg-[rgba(56,189,248,0.07)] border border-emerald-200 dark:border-[rgba(56,189,248,0.2)] rounded-full px-[14px] py-[5px] text-[11px] uppercase tracking-[0.04em]",
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
