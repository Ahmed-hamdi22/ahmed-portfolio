import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
  variant?: "hero" | "section" | "card" | "side";
  className?: string;
  color?: "blue" | "green" | "purple" | "orange";
}

const colorMap = {
  blue: "rgba(56,189,248,",
  green: "rgba(52,211,153,",
  purple: "rgba(167,139,250,",
  orange: "rgba(251,146,60,",
};

export function GlowBackground({ variant = "section", color = "blue", className }: GlowBackgroundProps) {
  const c = colorMap[color];

  if (variant === "hero") {
    return (
      <div className={cn("absolute inset-0 pointer-events-none z-0", className)}>
        {/* Primary radial — top center */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${c}0.13) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 15% 30%, rgba(129,140,248,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 85% 20%, ${c}0.06) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${c}0.025) 1px, transparent 1px), linear-gradient(90deg, ${c}0.025) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 80% at 50% 40%, black 20%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div
        className={cn("absolute inset-0 pointer-events-none z-0", className)}
        style={{
          background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${c}0.08) 0%, transparent 70%)`,
        }}
      />
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn("absolute -top-16 -right-16 w-44 h-44 pointer-events-none", className)}
        style={{
          background: `radial-gradient(circle, ${c}0.14) 0%, transparent 70%)`,
        }}
      />
    );
  }

  if (variant === "side") {
    return (
      <div
        className={cn("absolute inset-0 pointer-events-none", className)}
        style={{
          background: `radial-gradient(ellipse at 25% 65%, ${c}0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, ${c}0.08) 0%, transparent 50%)`,
        }}
      />
    );
  }

  return null;
}
