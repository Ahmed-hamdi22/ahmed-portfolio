"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/lib/data";
import { getProjectLinks } from "@/lib/project-links";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
const featured = projects.filter(project => getProjectLinks(project).primary);
export function HeroProjectShowcase({ visible = true }: { visible?: boolean }) {
  const reducedMotion = useReducedMotion();
  const { t } = usePortfolio();
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reducedMotion || paused || !visible || !featured.length) return;
    const timer = setInterval(() => { if (!document.hidden) setTick(value => value + 1); }, 3000);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, visible]);
  return <>{[0,1].map(slot => {
    const projectIndex = (Math.floor(tick / 4) * 2 + slot) % featured.length;
    const project = featured[projectIndex];
    if (!project) return null;
    const frame = tick % project.images.length;
    return <a key={slot} className={`hero-project ${slot === 0 ? "hero-project-one" : "hero-project-two"}`} href={getProjectLinks(project).primary} target="_blank" rel="noopener noreferrer" aria-label={`${t("openProject")}: ${project.title}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
      <figure><div className="hero-media-frame"><AnimatePresence initial={false}><motion.div key={`${project.title}-${frame}`} className="absolute inset-0" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : .45 }}><Image src={project.images[frame]} alt={`${project.title} — ${frame + 1}`} fill sizes="(max-width: 900px) 140px, 220px" priority={slot === 0 && tick === 0}/></motion.div></AnimatePresence></div><figcaption dir="ltr" title={project.title}>{project.title}</figcaption></figure>
    </a>;
  })}</>;
}
