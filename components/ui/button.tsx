"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-content gap-2 whitespace-nowrap rounded-[10px] text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#38BDF8] text-[#020617] hover:-translate-y-[2px] hover:shadow-[0_0_36px_rgba(56,189,248,0.32)] shadow-[0_0_24px_rgba(56,189,248,0.2)]",
        ghost:
          "bg-white/[0.04] text-[#CBD5E1] border border-white/[0.12] hover:text-[#F8FAFC] hover:border-white/[0.18] hover:-translate-y-[1px]",
        outline:
          "border border-white/[0.07] bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.14] hover:bg-white/[0.03]",
        accent:
          "border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.06)] text-[#38BDF8] hover:bg-[rgba(56,189,248,0.12)] hover:border-[rgba(56,189,248,0.5)]",
        icon: "border border-white/[0.1] bg-white/[0.04] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[rgba(56,189,248,0.35)] rounded-[9px]",
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
