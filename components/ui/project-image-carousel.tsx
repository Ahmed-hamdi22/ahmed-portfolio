"use client";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ImageOff } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";

export function ProjectImageCarousel({ title, images, href }: { title: string; images: string[]; href?: string }) {
  const { t } = usePortfolio();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: .25 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState<string[]>([]);
  const available = useMemo(() => images.filter(image => !failed.includes(image)), [images, failed]);
  const frame = available.length ? active % available.length : 0;
  useEffect(() => {
    if (reducedMotion || paused || !visible || available.length < 2) return;
    const interval = setInterval(() => { if (!document.hidden) setActive(index => (index + 1) % available.length); }, 4500);
    return () => clearInterval(interval);
  }, [available.length, paused, reducedMotion, visible]);
  const media = available.length ? <AnimatePresence initial={false}><motion.div key={available[frame]} className="absolute inset-0" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : .4 }}><Image src={available[frame]} alt={`${title} — ${frame + 1}`} fill sizes="(max-width: 560px) 90vw, (max-width: 900px) 40vw, 400px" onError={() => setFailed(current => [...new Set([...current, available[frame]])])}/></motion.div></AnimatePresence> : <div className="media-placeholder"><ImageOff size={24}/><span>{t("unavailable")}</span></div>;
  return <div ref={ref} className="project-media" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
    {href ? <a className="project-preview-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${t("openProject")}: ${title}`}>{media}</a> : <div className="project-preview-link">{media}</div>}
    {available.length > 1 && <div className="slide-controls"><div className="slide-dots" role="group" aria-label={title}>{available.map((image,index) => <button key={image} type="button" className={index === frame ? "active" : ""} aria-label={`${t("showImage")} ${index + 1}: ${title}`} aria-pressed={index === frame} onClick={() => setActive(index)}/>)}</div></div>}
  </div>;
}
