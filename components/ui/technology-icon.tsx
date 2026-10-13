import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiSass, SiBootstrap, SiJquery, SiCplusplus, SiNodedotjs, SiExpress,
  SiNestjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiRedux, SiZod, SiReacthookform, SiReactquery, SiShadcnui, SiMui,
  SiJira, SiFigma, SiFormik,
} from "react-icons/si";
import { FiRefreshCw } from "react-icons/fi";
import { technologies } from "@/lib/technologies";

type TechnologySlug = (typeof technologies)[number][1];
const icons: Partial<Record<TechnologySlug, [IconType, string]>> = {
  react: [SiReact, "#087ea4"], nextdotjs: [SiNextdotjs, "#081827"],
  typescript: [SiTypescript, "#3178c6"], javascript: [SiJavascript, "#c9a800"],
  html: [SiHtml5, "#e34f26"], css: [SiCss, "#663399"],
  sass: [SiSass, "#cc6699"], bootstrap: [SiBootstrap, "#7952b3"],
  jquery: [SiJquery, "#0769ad"], cplusplus: [SiCplusplus, "#00599c"],
  nodedotjs: [SiNodedotjs, "#5fa04e"], express: [SiExpress, "#555555"],
  nestjs: [SiNestjs, "#e0234e"], mongodb: [SiMongodb, "#47a248"],
  postgresql: [SiPostgresql, "#4169e1"], docker: [SiDocker, "#2496ed"],
  git: [SiGit, "#f05032"], tailwindcss: [SiTailwindcss, "#06b6d4"],
  redux: [SiRedux, "#764abc"], zod: [SiZod, "#3e67b1"],
  reacthookform: [SiReacthookform, "#ec5990"], tanstack: [SiReactquery, "#ff4154"],
  shadcnui: [SiShadcnui, "#081827"], mui: [SiMui, "#007fff"],
  jira: [SiJira, "#0052cc"], scrum: [FiRefreshCw, "#e85a42"],
  figma: [SiFigma, "#a259ff"], formik: [SiFormik, "#2563eb"],
};

export function TechnologyIcon({ slug }: { slug: TechnologySlug }) {
  const entry = icons[slug];
  if (!entry) return <img className="technology-icon" src={`/icons/tech-${slug}.svg`} alt="" width={30} height={30}/>;
  const [Icon, color] = entry;
  return <span className="technology-icon" aria-hidden="true"><Icon size={22} color={color} focusable="false"/></span>;
}
