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
    <div className={cn("flex flex-wrap gap-[6px]", className)}>
      {tags.map((tag) => (
        <Badge key={tag} variant={variant} className={cn(size === "sm" && "text-[10px] px-[8px] py-[2px]")}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}
