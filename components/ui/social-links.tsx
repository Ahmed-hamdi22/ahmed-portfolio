"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { WhatsAppIcon, whatsappUrl } from "./whatsapp-icon";
export function SocialLinks({ className, size = "md", whatsapp = false }: { className?: string; size?: "sm" | "md"; whatsapp?: boolean }) {
  const { t } = usePortfolio();
  return <div className={cn("social-links", size === "sm" && "social-links-small", className)}>
    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19}/></a>
    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
    {whatsapp && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t("whatsapp")} className="whatsapp-social"><WhatsAppIcon/></a>}
    <a href={`mailto:${siteConfig.email}`} aria-label={t("email")}><Mail size={19}/></a>
  </div>;
}
