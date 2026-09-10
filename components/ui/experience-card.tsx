"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/FadeUp";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  index?: number;
}

export function ExperienceCard({
  role,
  company,
  period,
  location,
  description,
  tags,
  index = 0,
}: ExperienceCardProps) {
  return (
    <div className="relative pb-6 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-6 top-2 w-[14px] h-[14px] rounded-full bg-white dark:bg-[#020617] border-2 border-[#0284C7] dark:border-[#38BDF8] shadow-[0_0_10px_rgba(2,132,199,0.3)] dark:shadow-[0_0_12px_rgba(56,189,248,0.4),0_0_0_4px_rgba(56,189,248,0.08)]" />

      <FadeUp delay={index * 0.1}>
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Card className="shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:border-sky-300 dark:hover:border-[rgba(56,189,248,0.15)] hover:shadow-md dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all duration-200">
            <CardContent className="p-5">
              {/* Top row */}
              <div className="flex justify-between items-start gap-3 flex-wrap mb-2.5">
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 dark:text-[#F8FAFC] tracking-[-0.02em]">
                    {role}
                  </h3>
                  <div className="flex items-center gap-[6px] mt-[2px]">
                    <Briefcase size={12} className="text-[#0284C7] dark:text-[#38BDF8]" />
                    <span className="text-[13px] font-semibold text-[#0284C7] dark:text-[#38BDF8]">{company}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-[5px] justify-end">
                    <Calendar size={11} className="text-slate-400 dark:text-[#64748B]" />
                    <span className="text-[11px] text-slate-500 dark:text-[#64748B] font-medium">{period}</span>
                  </div>
                  <div className="flex items-center gap-[5px] justify-end mt-[2px]">
                    <MapPin size={11} className="text-slate-400 dark:text-[#64748B]" />
                    <span className="text-[11px] text-slate-500 dark:text-[#64748B]">{location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[12px] sm:text-[13px] text-slate-600 dark:text-[#CBD5E1] leading-[1.65] mb-3">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-[5px]">
                {tags.map((tag) => (
                  <Badge key={tag} variant="accent" className="text-[10px] px-2 py-0.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </FadeUp>
    </div>
  );
}
