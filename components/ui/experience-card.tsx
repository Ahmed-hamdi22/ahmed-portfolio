"use client";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { useReveal } from "@/components/hooks/use-reveal";
import { arabicExperienceSummaries, isolateLatin } from "@/lib/i18n";
interface ExperienceCardProps { role: string; company: string; period: string; description: string; location: string; tags: string[]; index: number; }
export function ExperienceCard({ role, company, period, description, index }: ExperienceCardProps) {
  const { language } = usePortfolio();
  const ref = useReveal<HTMLElement>(index * .08, language === "ar" ? "right" : "left");
  return <article className="experience-item" ref={ref}><span className="experience-index" dir="ltr">0{index + 1}</span><div><h3 dir="ltr">{role}</h3><strong dir="ltr">{company}</strong><p>{language === "ar" ? isolateLatin(arabicExperienceSummaries[index]) : description.split("\n\n")[0]}</p></div><time>{period}</time></article>;
}
