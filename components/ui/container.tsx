import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
  size?: "default" | "narrow" | "wide";
  padded?: boolean;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
  padded = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6",
        size === "default" && "max-w-[1100px]",
        size === "narrow" && "max-w-[760px]",
        size === "wide" && "max-w-[1280px]",
        padded && "py-[76px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
