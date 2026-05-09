"use client";

import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";

const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07]">
      <Container className="py-10">
        <div className="flex flex-col items-center gap-5">
          <div className="text-[16px] font-extrabold tracking-[-0.025em] text-[#F8FAFC]">
            {siteConfig.name}<em className="text-[#38BDF8] not-italic">.</em>
          </div>

          <nav className="flex flex-wrap gap-4 justify-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[12px] text-[#64748B] no-underline hover:text-[#94A3B8] transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </nav>

          <SocialLinks size="sm" />

          <Separator />

          <p className="text-[11px] text-[#64748B] flex items-center gap-1">
            © {new Date().getFullYear()} {siteConfig.name} · Built with
            <Heart size={11} className="text-[#38BDF8] fill-[#38BDF8]" />
            using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
