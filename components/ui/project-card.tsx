"use client";
import { ArrowUpRight, Github } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { useReveal } from "@/components/hooks/use-reveal";
import { arabicProjectSummaries, isolateLatin } from "@/lib/i18n";
import { getProjectLinks } from "@/lib/project-links";
import type { ProjectItem } from "@/lib/data";
import { ProjectImageCarousel } from "./project-image-carousel";
export function ProjectCard({ index, layout, ...project }: ProjectItem & { index: number; layout: "rows" | "featured" }) {
  const { t, language } = usePortfolio();
  const fromImageSide = (index % 2 === 0) === (language === "ar") ? "right" : "left";
  const ref = useReveal<HTMLElement>((index % 3) * .07, layout === "rows" ? fromImageSide : "up");
  const links = getProjectLinks(project);
  return <article ref={ref} className="project-card">
    <ProjectImageCarousel title={project.title} images={project.images} href={links.primary}/>
    <div className="project-info"><span className="project-index" dir="ltr">{String(index + 1).padStart(2,"0")} / 07</span><h3 dir="ltr">{project.title}</h3><p>{language === "ar" ? isolateLatin(arabicProjectSummaries[index]) : project.summary}</p><div className="tags" dir="ltr">{project.tags.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}</div>
      {(links.live || links.github) && <div className="project-actions">{links.live && <a href={links.live} target="_blank" rel="noopener noreferrer">{t("live")}<ArrowUpRight size={13}/></a>}{links.github && <a href={links.github} target="_blank" rel="noopener noreferrer"><Github size={14}/>{t("source")}<ArrowUpRight size={12}/></a>}</div>}
    </div>
  </article>;
}
