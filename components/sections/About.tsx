"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { SocialLinks } from "@/components/ui/social-links";
import { WhatsAppIcon, whatsappUrl } from "@/components/ui/whatsapp-icon";
import { siteConfig } from "@/lib/data";

export function About() {
  const { t, language } = usePortfolio();
  const section = useRef<HTMLElement>(null);
  const revealed = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = section.current;
    if (!node || reducedMotion || revealed.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      revealed.current = true;

      const mobile = matchMedia("(max-width: 760px)").matches;
      const fromNarrative = mobile ? "0 16px" : language === "ar" ? "22px 0" : "-22px 0";
      const fromProfile = mobile ? "0 20px" : language === "ar" ? "-35px 0" : "35px 0";
      const reveal = (selector: string, delay: number, from: string, scale = 1) => {
        node.querySelector<HTMLElement>(selector)?.animate(
          [
            { opacity: 0, translate: from, scale },
            { opacity: 1, translate: "0 0", scale: 1 },
          ],
          { duration: 650, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" },
        );
      };

      reveal(".about-narrative .eyebrow", 50, fromNarrative);
      reveal(".about-narrative h2", 120, fromNarrative);
      reveal(".about-narrative > div:nth-child(2)", 220, fromNarrative);
      reveal(".about-links", 350, "0 12px");
      reveal(".about-profile", 180, fromProfile, .98);
      node.querySelectorAll<HTMLElement>(".about-profile dl > div").forEach((row, index) => {
        row.animate(
          [{ opacity: 0, translate: "0 10px" }, { opacity: 1, translate: "0 0" }],
          { duration: 650, delay: 430 + index * 70, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" },
        );
      });
      reveal(".about-profile .whatsapp-link", 640, "0 10px");
    }, { threshold: .12 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [language, reducedMotion]);

  return (
    <section id="about" className="about section" aria-labelledby="about-heading" ref={section}>
      <div className="about-narrative">
        <div className="section-heading">
          <span className="eyebrow">{t("aboutMe")}</span>
          <h2 id="about-heading" dir="ltr">Ahmed <em>Hamdi.</em></h2>
        </div>
        <div><p>{t("aboutText")}</p></div>
        <div className="about-links"><SocialLinks/></div>
      </div>
      <div className="about-profile">
        <span className="profile-monogram" aria-hidden="true" dir="ltr">AH<ArrowUpRight size={30}/></span>
        <dl>
          <div><dt>{t("location")}</dt><dd>{t("cairo")}</dd></div>
          <div><dt>{t("mainTech")}</dt><dd dir="ltr">React.js, Next.js, Node.js, TypeScript</dd></div>
          <div><dt>{t("contact")}</dt><dd><a href={`mailto:${siteConfig.email}`} dir="ltr">{siteConfig.email}</a></dd></div>
        </dl>
        <a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t("whatsapp")} dir="ltr"><WhatsAppIcon/>{siteConfig.phone}<ArrowUpRight size={14}/></a>
      </div>
    </section>
  );
}
