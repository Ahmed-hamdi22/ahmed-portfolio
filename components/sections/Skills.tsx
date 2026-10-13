"use client";
import Image from "next/image";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { FadeUp } from "@/components/ui/FadeUp";
import { technologies } from "@/lib/technologies";
export function Skills() {
  const { t } = usePortfolio();
  const half = Math.ceil(technologies.length / 2);
  const groups = [technologies.slice(0,half),technologies.slice(half)];
  return <section id="skills" className="skills section" aria-labelledby="skills-heading"><FadeUp className="section-heading"><span className="eyebrow">{t("technicalSkills")}</span><h2 id="skills-heading">{t("technologies")}</h2></FadeUp><div className="skills-stage" dir="ltr">{groups.map((group,row) => <div key={row} className={`skills-rail ${row === 0 ? "rail-a" : "rail-b"}`}>{[0,1].map(copy => group.map(([name,slug]) => <span key={`${copy}-${slug}`} className="tech-item" aria-hidden={copy === 1 ? true : undefined}><Image src={`/icons/tech-${slug}.svg`} alt="" width={30} height={30} unoptimized/><b>{name}</b></span>))}</div>)}</div></section>;
}
