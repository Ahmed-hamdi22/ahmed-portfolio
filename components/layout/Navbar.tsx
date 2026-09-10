"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Download, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/ui/social-links";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if no preference is found
    const isDark = savedTheme ? savedTheme === "dark" : true;

    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? dark
            ? "rgba(2,6,23,0.88)"
            : "rgba(248,250,252,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? dark
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid #E2E8F0"
          : "1px solid transparent",
      }}
    >
      <Container>
        <div className="h-[58px] flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline shrink-0">
            <div className="w-[30px] h-[30px] rounded-[8px] bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.2)] flex items-center justify-center">
              <Code2 size={14} className="text-[#38BDF8]" />
            </div>
            <span className="font-heading font-extrabold text-[15px] text-slate-900 dark:text-[#F8FAFC] tracking-[-0.02em]">
              {siteConfig.name.split(" ")[0]}
              <em className="text-[#38BDF8] not-italic">.</em>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-[2px] items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-slate-600 dark:text-[#94A3B8] text-[13px] font-medium px-[11px] py-[5px] rounded-[7px] transition-all duration-180 hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-white/[0.04] no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="icon"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-[34px] h-[34px] rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-600 dark:text-[#94A3B8] cursor-pointer transition-all duration-200 hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:border-sky-300 dark:hover:border-sky-400/35 shadow-xs dark:shadow-none"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </Button>

            {/* Mobile sheet */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="icon"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetHeader className="px-6 pt-8 pb-4">
                  <SheetTitle className="font-heading text-[16px] font-extrabold tracking-tight">
                    {siteConfig.name}
                    <em className="text-[#38BDF8] not-italic">.</em>
                  </SheetTitle>
                </SheetHeader>

                <Separator />

                {/* Nav links */}
                <nav className="px-6 py-4 flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-sans flex items-center justify-between py-[13px] border-b border-slate-100 dark:border-white/[0.05] text-slate-600 dark:text-[#94A3B8] text-[14px] font-medium transition-colors duration-150 hover:text-slate-900 dark:hover:text-[#F8FAFC] no-underline last:border-b-0"
                    >
                      {link.label}
                      <span className="text-[12px] opacity-40">-&gt;</span>
                    </a>
                  ))}
                </nav>

                <Separator />

                <div className="px-6 py-5 flex flex-col gap-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-center font-sans font-medium"
                    asChild
                  >
                    <a href="/cv.pdf" download onClick={() => setOpen(false)}>
                      <Download size={13} /> Download CV
                    </a>
                  </Button>
                  <SocialLinks className="justify-center mt-1" size="sm" />

                  {/* Status */}
                  <div className="flex items-center gap-2 mt-1 px-3 py-2.5 rounded-[9px] bg-emerald-50 dark:bg-[rgba(52,211,153,0.05)] border border-emerald-200 dark:border-[rgba(52,211,153,0.14)]">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#059669] dark:bg-[#34D399] shadow-[0_0_6px_#059669] dark:shadow-[0_0_6px_#34D399] shrink-0" />
                    <span className="text-[12px] text-[#059669] dark:text-[#34D399] font-sans font-semibold">
                      Available for work
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
