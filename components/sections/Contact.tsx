"use client";
import { ArrowUpRight, Mail } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { FadeUp } from "@/components/ui/FadeUp";
import { WhatsAppIcon, whatsappUrl } from "@/components/ui/whatsapp-icon";
import { siteConfig } from "@/lib/data";
export function Contact() {
  const { t } = usePortfolio();
  return <section id="contact" className="contact section" aria-labelledby="contact-heading"><FadeUp className="contact-copy"><span className="eyebrow">{t("contact")}</span><h2 id="contact-heading">{t("contactTitle")}</h2></FadeUp><FadeUp delay={.08} className="contact-links"><a href={`mailto:${siteConfig.email}`} aria-label={t("email")}><Mail/><span>{siteConfig.email}</span><ArrowUpRight size={16}/></a><a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t("whatsapp")}><WhatsAppIcon/><span>{siteConfig.phone}</span><ArrowUpRight size={16}/></a></FadeUp></section>;
}
