"use client";
import { Award } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { useReveal } from "@/components/hooks/use-reveal";
import { FadeUp } from "@/components/ui/FadeUp";
import { certifications } from "@/lib/data";
import { arabicCertificationDescriptions, isolateLatin } from "@/lib/i18n";
function Certificate({ index }: { index: number }) {
  const { language } = usePortfolio();
  const ref = useReveal<HTMLElement>(index * .07);
  const item = certifications[index];
  return <article ref={ref}><div className="cert-top"><span className="cert-seal" aria-hidden="true"><Award size={24}/></span><span className="cert-number">0{index + 1}</span></div><p className="cert-provider">{item.provider}</p><h3 dir="ltr">{item.title}</h3><div className="cert-meta"><time>{item.period}</time><span dir="ltr">{item.location}</span></div><p className="cert-description">{language === "ar" ? isolateLatin(arabicCertificationDescriptions[index]) : item.description}</p><div className="tags" dir="ltr">{item.topics.map(topic => <span key={topic}>{topic}</span>)}</div></article>;
}
export function Certifications() {
  const { t } = usePortfolio();
  return <section id="certifications" className="certifications section" aria-labelledby="certifications-heading"><FadeUp className="section-heading"><span className="eyebrow">{t("education")}</span><h2 id="certifications-heading">{t("certifications")}</h2></FadeUp><div className="cert-list">{certifications.map((item,index) => <Certificate key={item.title} index={index}/>)}</div></section>;
}
