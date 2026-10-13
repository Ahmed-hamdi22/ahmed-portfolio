"use client";
import { ArrowUp } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/lib/data";
import type { TranslationKey } from "@/lib/i18n";
const links: TranslationKey[] = ["projects", "experience", "skills", "about", "contact"];
export function Footer() {
  const { t } = usePortfolio();
  return <footer className="footer"><div className="footer-main">
    <div className="footer-identity"><a href="#top" dir="ltr">Ahmed <em>Hamdi.</em></a><p><bdi>{t("roles")}</bdi> · {t("cairo")}</p></div>
    <nav aria-label={t("contact")}>{links.map(key => <a key={key} href={`#${key}`}>{t(key)}</a>)}</nav>
    <SocialLinks className="footer-socials" whatsapp/>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} <bdi>{siteConfig.name}</bdi></span><a href="#top">{t("backTop")}<ArrowUp size={14}/></a></div></footer>;
}
