"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { FadeUp } from "@/components/ui/FadeUp";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experience } from "@/lib/data";
export function Experience() {
  const { t } = usePortfolio();
  const list = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const progress = useRef(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = list.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      progress.current = reducedMotion ? 1 : Math.max(progress.current, Math.min(1,Math.max(0,(innerHeight * .78 - rect.top) / Math.max(1,rect.height))));
      element.style.setProperty("--timeline-progress", String(progress.current));
    };
    const schedule = () => { if (!frame && progress.current < 1) frame = requestAnimationFrame(update); };
    update(); addEventListener("scroll", schedule, { passive: true }); addEventListener("resize", schedule);
    return () => { removeEventListener("scroll", schedule); removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, [reducedMotion]);
  return <section id="experience" className="experience section" aria-labelledby="experience-heading"><FadeUp className="section-heading"><span className="eyebrow">{t("experience")}</span><h2 id="experience-heading">{t("work")}</h2></FadeUp><div className="experience-list" ref={list}>{experience.map((item,index) => <ExperienceCard {...item} key={item.company} index={index}/>)}</div></section>;
}
