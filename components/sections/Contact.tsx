"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GlowBackground } from "@/components/ui/glow-background";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/ui/FadeUp";
import { siteConfig } from "@/lib/data";

const contactLinks = [
  { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { Icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { Icon: Github, label: "GitHub", value: "Ahmed-hamdi22", href: siteConfig.github },
  { Icon: Linkedin, label: "LinkedIn", value: "ahmed-hamdi-86ab2b23a", href: siteConfig.linkedin },
];

const availRows = [
  { label: "Availability", value: "Immediate" },
  { label: "Response time", value: "Within 24h" },
  { label: "Work type", value: "Remote / Onsite" },
  { label: "Contract", value: "Full-time / Freelance" },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-[76px] border-t border-white/[0.07]">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Open to full-time, freelance, or contract engineering roles. Fast response guaranteed."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact card */}
          <FadeUp delay={0.1}>
            <Card className="relative shadow-[0_8px_40px_rgba(0,0,0,0.2)] overflow-hidden">
              <GlowBackground variant="card" />
              <CardContent className="p-[30px]">
                <h3 className="text-[17px] font-bold text-[#F8FAFC] tracking-[-0.025em] mb-2">Get in touch</h3>
                <p className="text-[13px] text-[#94A3B8] leading-[1.7] mb-6">
                  Have a project or opportunity in mind? Reach out through any channel below.
                </p>

                <div className="flex flex-col gap-[10px]">
                  {contactLinks.map(({ Icon, label, value, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-[15px] py-[13px] rounded-[11px] bg-white/[0.02] border border-white/[0.07] no-underline transition-all duration-200 hover:border-[rgba(56,189,248,0.2)] hover:bg-[rgba(56,189,248,0.04)] group"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="w-[34px] h-[34px] rounded-[9px] shrink-0 flex items-center justify-center bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.12)] text-[#38BDF8]">
                        <Icon size={15} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-[#64748B] uppercase tracking-[0.07em] font-bold mb-[2px]">{label}</div>
                        <div className="text-[12px] text-[#F8FAFC] truncate">{value}</div>
                      </div>
                      <ArrowUpRight size={13} className="text-[#64748B] shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeUp>

          {/* CTA card */}
          <FadeUp delay={0.2}>
            <Card className="shadow-[0_8px_40px_rgba(0,0,0,0.2)] flex flex-col">
              <CardContent className="p-[30px] flex flex-col h-full">
                <h3 className="text-[17px] font-bold text-[#F8FAFC] tracking-[-0.025em] mb-2">Open to opportunities</h3>
                <p className="text-[13px] text-[#94A3B8] leading-[1.75] mb-6">
                  Based in Cairo, Egypt — available for remote roles globally, hybrid, or onsite.
                </p>

                {/* Availability grid */}
                <div className="grid grid-cols-2 gap-[10px] mb-6">
                  {availRows.map(({ label, value }) => (
                    <div key={label} className="p-[14px] bg-white/[0.02] border border-white/[0.07] rounded-[10px]">
                      <div className="text-[10px] text-[#64748B] uppercase tracking-[0.06em] font-bold mb-1">{label}</div>
                      <div className="text-[13px] text-[#F8FAFC] font-bold">{value}</div>
                    </div>
                  ))}
                </div>

                <Separator className="mb-6" />

                {/* Actions */}
                <div className="flex flex-col gap-[10px] mt-auto">
                  <Button size="lg" className="w-full justify-center font-bold" asChild>
                    <a href={`mailto:${siteConfig.email}`}>
                      <Send size={14} /> Send an Email
                    </a>
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full justify-center" asChild>
                    <a href="/cv.pdf" download>
                      <Download size={14} /> Download CV
                    </a>
                  </Button>
                </div>

                {/* Status */}
                <div className="flex items-center gap-[9px] mt-4 px-[15px] py-3 rounded-[10px] bg-[rgba(52,211,153,0.05)] border border-[rgba(52,211,153,0.14)]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.5)] shrink-0 animate-pulse" />
                  <span className="text-[12px] text-[#34D399] font-semibold">Available for work right now</span>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
