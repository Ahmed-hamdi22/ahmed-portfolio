"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-[#020617] hover:-translate-y-[2px] shadow-[0_2px_10px_rgba(2,132,199,0.2)] dark:shadow-[0_0_24px_rgba(56,189,248,0.18)] hover:shadow-[0_4px_16px_rgba(2,132,199,0.3)] dark:hover:shadow-[0_0_36px_rgba(56,189,248,0.28)] font-semibold",
        ghost:
          "bg-white dark:bg-white/[0.04] text-slate-700 dark:text-[#CBD5E1] border border-slate-200 dark:border-white/[0.12] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-slate-300 dark:hover:border-white/[0.18] hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:-translate-y-[1px] shadow-xs dark:shadow-none",
        outline:
          "border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-transparent text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:border-slate-300 dark:hover:border-white/[0.16] hover:bg-slate-50 dark:hover:bg-white/[0.035] shadow-xs dark:shadow-none",
        accent:
          "border border-sky-300 dark:border-[rgba(56,189,248,0.3)] bg-sky-50 dark:bg-[rgba(56,189,248,0.06)] text-[#0284C7] dark:text-[#38BDF8] hover:bg-sky-100 dark:hover:bg-[rgba(56,189,248,0.12)] hover:border-sky-400 dark:hover:border-[rgba(56,189,248,0.5)]",
        icon: "border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-white/[0.04] text-slate-600 dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:border-sky-300 dark:hover:border-[rgba(56,189,248,0.35)] rounded-[9px] shadow-xs dark:shadow-none",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        icon: "h-[34px] w-[34px] p-0",
        "icon-lg": "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
