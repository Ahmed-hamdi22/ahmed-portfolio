"use client";
import { useState } from "react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { FadeUp } from "@/components/ui/FadeUp";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
export function Projects() {
  const { t } = usePortfolio();
  const [layout, setLayout] = useState<"rows" | "featured">("rows");
  return <section id="projects" className="projects section" data-project-view={layout} aria-labelledby="projects-heading"><div className="project-heading-row"><FadeUp className="section-heading"><span className="eyebrow">{t("selectedProjects")}</span><h2 id="projects-heading">{t("built")}</h2></FadeUp><div className="project-view-controls" role="group" aria-label={t("layout")}><button type="button" className={layout === "featured" ? "active" : ""} aria-pressed={layout === "featured"} onClick={() => setLayout("featured")}>{t("featured")}</button><button type="button" className={layout === "rows" ? "active" : ""} aria-pressed={layout === "rows"} onClick={() => setLayout("rows")}>{t("compact")}</button></div></div><div className="project-list">{projects.map((project,index) => <ProjectCard key={project.title} {...project} index={index} layout={layout}/>)}</div></section>;
}
