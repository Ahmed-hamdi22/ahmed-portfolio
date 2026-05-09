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
    <div className="relative pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-6 top-2 w-[15px] h-[15px] rounded-full bg-[#020617] border-2 border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.4),0_0_0_4px_rgba(56,189,248,0.08)]" />

      <FadeUp delay={index * 0.12}>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Card className="shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:border-[rgba(56,189,248,0.15)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all duration-250">
            <CardContent className="p-6">
              {/* Top row */}
              <div className="flex justify-between items-start gap-3 flex-wrap mb-3">
                <div>
                  <h3 className="text-[15px] font-bold text-[#F8FAFC] tracking-[-0.02em]">
                    {role}
                  </h3>
                  <div className="flex items-center gap-[6px] mt-[3px]">
                    <Briefcase size={12} className="text-[#38BDF8]" />
                    <span className="text-[13px] font-semibold text-[#38BDF8]">{company}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-[5px] justify-end">
                    <Calendar size={11} className="text-[#64748B]" />
                    <span className="text-[11px] text-[#64748B] font-medium">{period}</span>
                  </div>
                  <div className="flex items-center gap-[5px] justify-end mt-[3px]">
                    <MapPin size={11} className="text-[#64748B]" />
                    <span className="text-[11px] text-[#64748B]">{location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#CBD5E1] leading-[1.75] mb-4">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-[6px]">
                {tags.map((tag) => (
                  <Badge key={tag} variant="accent" className="text-[10px]">
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
