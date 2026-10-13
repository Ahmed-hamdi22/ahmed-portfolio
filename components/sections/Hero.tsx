"use client";
import { useRef } from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { HeroProjectShowcase } from "@/components/ui/hero-project-showcase";
import { SocialLinks } from "@/components/ui/social-links";
import { TypewriterRole } from "@/components/ui/typewriter-role";
export function Hero() {
  const { t } = usePortfolio();
  const section = useRef<HTMLElement>(null);
  const visible = useInView(section, { amount: .15 });
  return <section id="top" ref={section} className="hero" aria-labelledby="hero-title">
    <svg className="hero-lines" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true"><path d="M-40 555 C260 75 425 660 735 285 S1190 500 1480 115"/><path d="M-60 150 C205 570 490 95 795 480 S1150 195 1470 600"/></svg>
    <div className="orbit" aria-hidden="true"/>
    <svg className="hero-pulses" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true">{[{x:175,y:355,color:"#e85a42",name:"coral"},{x:290,y:625,color:"#89cba2",name:"green"},{x:1240,y:235,color:"#7ab6e8",name:"blue"}].map(dot => <g key={dot.name} className={`hero-pulse pulse-${dot.name}`} style={{ "--pulse-color": dot.color } as React.CSSProperties}><circle className="pulse-halo" cx={dot.x} cy={dot.y} r="18"/><circle className="pulse-wave" cx={dot.x} cy={dot.y} r="20"/><circle className="pulse-core" cx={dot.x} cy={dot.y} r="4.5"/></g>)}</svg>
    <HeroProjectShowcase visible={visible}/>
    <div className="hero-copy"><span className="hero-dash" aria-hidden="true"/><h1 id="hero-title" dir="ltr">Ahmed <em>Hamdi.</em></h1><TypewriterRole/><p className="subtitle">{t("intro")}</p><div className="hero-actions"><a href="#projects">{t("viewProjects")}<ArrowDownRight/></a><a href="#contact">{t("contactMe")}<ArrowUpRight/></a></div><SocialLinks className="hero-socials"/></div>
    <a className="scroll-cue" href="#skills">{t("scroll")}<ArrowDown size={12}/></a>
  </section>;
}
