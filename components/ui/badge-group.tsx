import { Badge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface BadgeGroupProps {
  tags: string[];
  variant?: BadgeVariant;
  className?: string;
  size?: "sm" | "md";
}

export function BadgeGroup({ tags, variant = "default", className, size = "md" }: BadgeGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={variant}
          className={cn(
            "font-sans font-medium tracking-[0.01em]",
            size === "sm" ? "text-[11px] px-[8.5px] py-[2.5px]" : "text-[11.5px] sm:text-[12px] px-[10px] py-[3.5px]"
          )}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
