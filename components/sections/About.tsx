"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  CalendarDays,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const infoItems = [
    {
      icon: <MapPin size={16} className="text-[#38BDF8]" />,
      label: "Location",
      value: siteConfig.location,
      detail: "Remote Friendly",
    },
    {
      icon: <CalendarDays size={16} className="text-[#60A5FA]" />,
      label: "Experience",
      value: "2+ Years",
      detail: "Production Apps",
    },
    {
      icon: <Code2 size={16} className="text-[#A78BFA]" />,
      label: "Main Technologies",
      value: "React.js, Next.js, Node.js, TypeScript",
      detail: "Full Stack",
    },
    {
      icon: <CheckCircle2 size={16} className="text-[#34D399]" />,
      label: "Availability",
      value: "Available Now",
      detail: "Freelance & Full-time",
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 py-16 lg:py-20 border-t border-slate-200 dark:border-white/[0.07] overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 -right-24 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06)_0%,transparent_70%)] blur-[60px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] blur-[50px]" />

      <Container size="wide" className="max-w-[1240px]">
        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Left Column: About Narrative */}
          <div>
            {/* Small label: About Me */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-2.5 mb-3.5"
            >
              <span className="w-5 h-[1.5px] bg-[#38BDF8] rounded-full block" />
              <span className="text-[11.5px] font-semibold text-[#38BDF8] tracking-[0.12em] uppercase font-sans">
                About Me
              </span>
            </motion.div>

            {/* Narrative text */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-4 font-sans font-normal text-[15px] sm:text-[16px] text-slate-600 dark:text-[#94A3B8] leading-[1.75] mb-7"
            >
              <p>
                I&apos;m{" "}
                <strong className="text-slate-900 dark:text-[#F8FAFC] font-semibold">
                  Ahmed Hamdi
                </strong>
                , a Full Stack Developer passionate about turning complex ideas
                into clean, scalable, and user-focused web applications. I
                bridge frontend precision with solid backend reliability.
              </p>
              <p>
                Specializing in{" "}
                <span className="text-slate-700 dark:text-[#CBD5E1] font-medium">
                  React, Next.js, Node.js, and TypeScript
                </span>
                , I focus on writing maintainable code, designing intuitive user
                experiences, and building resilient APIs that perform
                effortlessly under load.
              </p>
            </motion.div>

            {/* Contact quick links */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="flex flex-wrap gap-2.5 font-sans"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-[12.5px] font-medium text-slate-700 dark:text-[#CBD5E1] hover:border-sky-300 dark:hover:border-[#38BDF8]/40 hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:bg-slate-200/60 dark:hover:bg-[#38BDF8]/[0.05] transition-all duration-200"
              >
                <Mail size={13} className="text-[#38BDF8]" />
                {siteConfig.email}
              </a>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-[12.5px] font-medium text-slate-700 dark:text-[#CBD5E1]">
                <Phone size={13} className="text-[#34D399]" />
                {siteConfig.phone}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Clean, Compact Information List (No Admin Dashboard) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="rounded-[20px] border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#071322]/75 backdrop-blur-md p-5 sm:p-6 shadow-sm dark:shadow-[0_12px_40px_rgba(0,0,0,0.22)] divide-y divide-slate-100 dark:divide-white/[0.06]">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#64748B] font-sans font-medium block">
                        {item.label}
                      </span>
                      <span className="text-[13.5px] sm:text-[14px] font-sans font-semibold text-slate-900 dark:text-[#F8FAFC]">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] sm:text-[11.5px] font-sans font-medium text-[#0891B2] dark:text-[#38BDF8]/90 bg-sky-50 dark:bg-[#38BDF8]/[0.06] border border-sky-200 dark:border-[#38BDF8]/15 rounded-full px-2.5 py-0.5 shrink-0">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
