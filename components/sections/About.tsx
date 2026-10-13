"use client";
import { ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { FadeUp } from "@/components/ui/FadeUp";
import { SocialLinks } from "@/components/ui/social-links";
import { WhatsAppIcon, whatsappUrl } from "@/components/ui/whatsapp-icon";
import { siteConfig } from "@/lib/data";
export function About() {
  const { t } = usePortfolio();
  return <section id="about" className="about section" aria-labelledby="about-heading"><div className="about-narrative"><FadeUp className="section-heading"><span className="eyebrow">{t("aboutMe")}</span><h2 id="about-heading" dir="ltr">Ahmed <em>Hamdi.</em></h2></FadeUp><FadeUp><p>{t("aboutText")}</p></FadeUp><FadeUp delay={.07} className="about-links"><SocialLinks/></FadeUp></div><FadeUp delay={.1} className="about-profile"><span className="profile-monogram" aria-hidden="true" dir="ltr">AH<ArrowUpRight size={30}/></span><dl><div><dt>{t("location")}</dt><dd>{t("cairo")}</dd></div><div><dt>{t("mainTech")}</dt><dd dir="ltr">React.js, Next.js, Node.js, TypeScript</dd></div><div><dt>{t("contact")}</dt><dd><a href={`mailto:${siteConfig.email}`} dir="ltr">{siteConfig.email}</a></dd></div></dl><a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t("whatsapp")} dir="ltr"><WhatsAppIcon/>{siteConfig.phone}<ArrowUpRight size={14}/></a></FadeUp></section>;
}
