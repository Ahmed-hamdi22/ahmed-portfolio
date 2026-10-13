"use client";
import { useEffect, useRef, useState } from "react";
import { Download, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { BrandMark } from "@/components/ui/brand-mark";
import type { TranslationKey } from "@/lib/i18n";
const links: TranslationKey[] = ["projects", "experience", "skills", "about", "contact"];
export function Navbar() {
  const { language, theme, setLanguage, setTheme, t } = usePortfolio();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menu.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    const wide = window.matchMedia("(min-width: 901px)");
    const resize = () => { if (wide.matches) setOpen(false); };
    document.addEventListener("keydown", escape); document.addEventListener("pointerdown", outside); wide.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); wide.removeEventListener("change", resize); };
  }, [open]);
  return <header ref={header} className="site-header" data-menu-open={open}>
    <a className="wordmark" href="#top" aria-label={t("home")} dir="ltr"><BrandMark/>Ahmed.</a>
    <nav id="site-navigation" aria-label={language === "ar" ? "التنقل" : "Main navigation"}>
      {links.map(key => <a href={`#${key}`} key={key} onClick={() => setOpen(false)}>{t(key)}</a>)}
      <a className="mobile-nav-cv" href="/cv.pdf" download onClick={() => setOpen(false)}><Download size={16}/>{t("downloadCV")}</a>
    </nav>
    <div className="header-actions">
      <a className="cv-link" href="/cv.pdf" download aria-label={t("downloadCV")}><Download size={14}/><span className="cv-full">{t("downloadCV")}</span><span className="cv-short">CV</span></a>
      <button className="language-button" type="button" onClick={() => setLanguage(language === "en" ? "ar" : "en")} aria-label={t(language === "en" ? "switchArabic" : "switchEnglish")}><Languages size={16}/><span>{language === "en" ? "ع" : "EN"}</span></button>
      <div className="theme-switch" role="group" aria-label={language === "ar" ? "المظهر" : "Theme"}>
        <button type="button" className={theme === "light" ? "active" : ""} onClick={() => setTheme("light")} aria-label={t("lightTheme")} aria-pressed={theme === "light"}><Sun size={17}/></button>
        <button type="button" className={theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")} aria-label={t("darkTheme")} aria-pressed={theme === "dark"}><Moon size={17}/></button>
      </div>
      <button type="button" className="theme-mobile-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t(theme === "dark" ? "lightTheme" : "darkTheme")}>{theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <button ref={menu} className="menu-button" type="button" aria-controls="site-navigation" aria-expanded={open} aria-label={t(open ? "menuClose" : "menuOpen")} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    </div>
  </header>;
}
