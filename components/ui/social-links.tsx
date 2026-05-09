"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const socials = [
  { Icon: Github, href: siteConfig.github, label: "GitHub" },
  { Icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { Icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md";
}

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <div className={cn("flex items-center justify-center gap-2", className)}>
        {socials.map(({ Icon, href, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button
                className="flex items-center justify-center"
                variant="icon"
                size={size === "sm" ? "icon" : "icon-lg"}
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={size === "sm" ? 15 : 17} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
