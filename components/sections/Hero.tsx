"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Braces,
  Boxes,
  CalendarDays,
  ChevronRight,
  Code2,
  Database,
  Download,
  FolderKanban,
  GitBranch,
  Github,
  Monitor,
  Search,
  Server,
  Settings,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowBackground } from "@/components/ui/glow-background";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";

export function Hero() {
  const stack = [
    { label: "React", icon: <Code2 size={14} /> },
    { label: "Next.js", icon: <Braces size={14} /> },
    { label: "TypeScript", icon: <span className="text-[11px] font-black">TS</span> },
    { label: "Node.js", icon: <Server size={14} /> },
    { label: "MongoDB", icon: <Database size={14} /> },
  ];
  const stats = [
    { label: "Years Experience", value: "2+", icon: <CalendarDays size={17} /> },
    { label: "Projects Completed", value: "10+", icon: <FolderKanban size={17} /> },
    { label: "for opportunities", value: "Available", icon: <UserCheck size={17} /> },
  ];

  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden">
      <GlowBackground variant="hero" />

      <Container
        size="wide"
        className="relative z-10 w-full max-w-[1500px] py-14 sm:py-16 lg:py-12 xl:py-14"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)] lg:gap-20 xl:gap-24">
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Badge
                variant="availability"
                className="mb-6 inline-flex items-center gap-2"
              >
                <span className="w-[6px] h-[6px] rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 h-[130%] w-[118%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.055)_0%,transparent_62%)] blur-[36px]" />
              <h1 className="relative max-w-[620px] text-[clamp(48px,7vw,78px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#F8FAFC] mb-4">
                <span className="block">
                  Ahmed Hamdi
                  <em className="text-[#38BDF8] not-italic">.</em>
                </span>
                <span className="block bg-gradient-to-r from-[#22D3EE] via-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
                  Full Stack
                </span>
                <span className="block text-[#F8FAFC]">
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-[clamp(17px,2.5vw,24px)] font-light text-[#94A3B8] tracking-[-0.01em] mt-2 mb-5"
            >
              React &amp; Next.js <span className="mx-3 text-[#38BDF8]">|</span>
              Node.js APIs <span className="mx-3 text-[#38BDF8]">|</span>
              MongoDB
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[15px] text-[#94A3B8] max-w-[560px] leading-[1.78] mb-8"
            >
              Building scalable web applications with React, Next.js,
              TypeScript, Node.js, Express.js, and MongoDB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.39 }}
              className="mb-8 flex flex-wrap gap-2"
            >
              {stack.map((item) => (
                <span
                  key={item.label}
                  className="group/chip inline-flex items-center gap-2 rounded-[10px] border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 font-mono text-[12px] font-semibold text-[#CBD5E1] transition duration-200 hover:-translate-y-0.5 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/[0.055] hover:text-[#F8FAFC]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-[6px] border border-[#38BDF8]/18 bg-[#38BDF8]/[0.065] text-[#38BDF8] transition group-hover/chip:border-[#38BDF8]/35">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mb-8 flex flex-wrap items-center gap-[10px]"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#22D3EE] to-[#2563EB] text-[13px] font-bold shadow-[0_16px_34px_rgba(37,99,235,0.18)] hover:scale-[1.02]"
                asChild
              >
                <a href="#projects">
                  <ChevronRight size={15} /> View Projects
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-[13px]" asChild>
                <a href="/cv.pdf" download>
                  <Download size={14} /> Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-[13px]"
                asChild
              >
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} /> GitHub
                </a>
              </Button>
              <SocialLinks size="md" className="gap-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="grid max-w-[590px] grid-cols-1 overflow-hidden rounded-[16px] border border-[#38BDF8]/10 bg-[#071222]/46 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 px-4 py-4 sm:border-r sm:border-[#38BDF8]/10 last:sm:border-r-0"
                >
                  <span className="text-[#22D3EE]/80">{stat.icon}</span>
                  <div>
                    <p className="text-[14px] font-bold text-[#67E8F9]">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-[#CBD5E1]/85">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            className="relative mx-auto w-full max-w-[920px] lg:mx-0"
          >
            <HeroEditorVisual />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#64748B] lg:flex"
        >
          <span className="text-[11px] tracking-[0.1em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroEditorVisual() {
  const cards = [
    {
      title: "Frontend",
      subtitle: "React & Next.js",
      description: "Responsive and dynamic interfaces",
      icon: <Monitor size={18} />,
      position: "lg:top-[94px]",
      lineTop: 148,
    },
    {
      title: "Backend API",
      subtitle: "Node.js & Express",
      description: "RESTful APIs built for performance",
      icon: <Code2 size={18} />,
      position: "lg:top-[286px]",
      lineTop: 340,
    },
    {
      title: "Database",
      subtitle: "MongoDB",
      description: "Scalable and secure data storage",
      icon: <Database size={18} />,
      position: "lg:top-[478px]",
      lineTop: 532,
    },
  ];
  const lines = [
    { text: "// Full Stack Request Flow", tone: "comment" },
    { text: "", tone: "plain" },
    { text: "const user = await authenticateUser(token);", tone: "plain" },
    { text: "", tone: "plain" },
    { text: "const application = validateApplication({", tone: "plain" },
    { text: "  workerId: user.id,", tone: "plain" },
    { text: "  jobId: selectedJob.id,", tone: "plain" },
    { text: "});", tone: "plain" },
    { text: "", tone: "plain" },
    { text: "await saveApplication(application);", tone: "plain", focus: true },
    { text: "", tone: "plain" },
    { text: "emitNotification(\"employer\", {", tone: "plain" },
    { text: "  event: \"new_application\",", tone: "plain" },
    { text: "  message: \"New worker applied\",", tone: "plain" },
    { text: "});", tone: "plain" },
    { text: "", tone: "plain" },
    { text: "return successResponse({", tone: "plain" },
    { text: "  status: 201,", tone: "plain" },
    { text: "  message: \"Application submitted\",", tone: "plain" },
    { text: "});", tone: "plain" },
  ];

  return (
    <div className="relative lg:min-h-[610px] lg:pr-[250px]">
      <div className="hero-editor-shell rounded-[26px] p-px">
        <div className="relative overflow-hidden rounded-[25px] border border-[#38BDF8]/16 bg-[#020A14] shadow-[0_26px_82px_rgba(2,6,23,0.40)]">
          <div className="flex h-10 items-center justify-between border-b border-white/[0.07] bg-[#081322] px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F87171]" />
              <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
              <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            </div>
            <span className="font-mono text-[16px] leading-none text-[#94A3B8]">
              ...
            </span>
          </div>

          <div className="flex border-b border-white/[0.07] bg-[#07111f] pl-12">
            {["job.service.ts", "job-application.service.ts"].map(
              (file, index) => (
                <div
                  key={file}
                  className={`border-r border-white/[0.06] px-3 py-2 font-mono text-[10.5px] ${
                    index === 1
                      ? "bg-[#0B1625] text-[#F8FAFC]"
                      : "text-[#64748B]"
                  }`}
                >
                  {index === 1 && (
                    <span className="mr-2 rounded-[3px] bg-[#0284C7] px-1 py-0.5 text-[8px] font-bold text-white">
                      TS
                    </span>
                  )}
                  {file}
                </div>
              )
            )}
          </div>

          <div className="flex">
            <div className="hidden w-12 shrink-0 flex-col items-center gap-5 border-r border-white/[0.07] bg-[#081322] py-5 text-[#94A3B8]/85 sm:flex">
              <Boxes size={16} />
              <Search size={16} />
              <GitBranch size={16} />
              <Settings size={16} />
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden bg-[#020A14]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(56,189,248,0.06),transparent_36%)]" />
              <pre className="relative h-[475px] overflow-hidden py-7 pr-6 font-mono text-[13px] leading-[1.65] text-[#CBD5E1]">
                {lines.map((line, index) => (
                  <div
                    key={`${line.text}-${index}`}
                    className={`hero-code-line grid grid-cols-[52px_minmax(0,1fr)] px-5 ${
                      line.focus ? "hero-code-focus" : ""
                    }`}
                  >
                    <span className="select-none pr-4 text-right text-[#64748B]">
                      {index + 1}
                    </span>
                    <code className="whitespace-pre-wrap">
                      <CodeLine text={line.text} tone={line.tone} />
                    </code>
                  </div>
                ))}
              </pre>
            </div>
          </div>

          <div className="flex h-8 items-center justify-between border-t border-[#38BDF8]/16 bg-[#075985]/36 px-4 font-mono text-[10px] text-[#DFF6FF]/90">
            <div className="flex items-center gap-3">
              <span>main</span>
              <span>0 errors</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Ln 10, Col 26</span>
              <span>UTF-8</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none hidden lg:block">
        {cards.map((card) => (
          <svg
            key={card.title}
            className="absolute right-[206px] h-10 w-[56px] overflow-visible text-[#22D3EE]/28"
            style={{ top: card.lineTop - 18 }}
            viewBox="0 0 56 40"
            aria-hidden="true"
          >
            <path
              d="M0 20 C18 20 22 8 38 8 C46 8 50 20 56 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
            <circle
              cx="56"
              cy="20"
              r="3"
              fill="currentColor"
              className="drop-shadow-[0_0_7px_rgba(34,211,238,0.35)]"
            />
          </svg>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:mt-0 lg:block">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`hero-info-card rounded-[16px] border border-[#38BDF8]/14 bg-[#071222]/76 p-4 shadow-[0_16px_38px_rgba(2,6,23,0.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/26 lg:absolute lg:right-0 lg:w-[198px] ${card.position}`}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#38BDF8]/16 bg-[#38BDF8]/[0.06] text-[#7DD3FC]/90">
                {card.icon}
              </span>
              <h3 className="text-[14px] font-bold text-[#F8FAFC]">
                {card.title}
              </h3>
            </div>
            <p className="mb-2 text-[12px] font-semibold text-[#22D3EE]/90">
              {card.subtitle}
            </p>
            <p className="text-[12px] leading-relaxed text-[#CBD5E1]/90">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeLine({ text, tone }: { text: string; tone: string }) {
  if (!text) return null;
  if (tone === "comment") {
    return <span className="text-[#7CB342]">{text}</span>;
  }

  return (
    <>
      {text
        .split(/(const|await|return|authenticateUser|validateApplication|saveApplication|emitNotification|successResponse|"employer"|"new_application"|"New worker applied"|"Application submitted"|201|token|user|selectedJob|application|workerId|jobId|event|status|message)/g)
        .map((part, index) => {
          const className =
            part === "const" || part === "await" || part === "return"
              ? "text-[#C084FC]"
              : [
                  "authenticateUser",
                  "validateApplication",
                  "saveApplication",
                  "emitNotification",
                  "successResponse",
                ].includes(part)
              ? "text-[#FACC15]"
              : [
                  "\"employer\"",
                  "\"new_application\"",
                  "\"New worker applied\"",
                  "\"Application submitted\"",
                  "201",
                ].includes(part)
              ? "text-[#FB7185]"
              : [
                  "token",
                  "user",
                  "selectedJob",
                  "application",
                  "workerId",
                  "jobId",
                  "event",
                  "status",
                  "message",
                ].includes(part)
              ? "text-[#67E8F9]"
              : "text-[#CBD5E1]";

          return (
            <span key={`${part}-${index}`} className={className}>
              {part}
            </span>
          );
        })}
    </>
  );
}
