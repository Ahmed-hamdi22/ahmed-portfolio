"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { arabic, english, isolateLatin, type Language, type TranslationKey } from "@/lib/i18n";

type Theme = "light" | "dark";
interface PortfolioContextValue {
  language: Language; theme: Theme; setLanguage: (language: Language) => void; setTheme: (theme: Theme) => void;
  t: (key: TranslationKey) => string;
}
const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>("en");
  const [theme, updateTheme] = useState<Theme>("light");
  useEffect(() => {
    updateTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    try { if (localStorage.getItem("portfolio-language") === "ar") updateLanguage("ar"); } catch { /* Storage can be disabled. */ }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next);
    try { localStorage.setItem("portfolio-language", next); } catch { /* Keep the control usable without storage. */ }
  }, []);
  const setTheme = useCallback((next: Theme) => {
    updateTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    try { localStorage.setItem("theme", next); } catch { /* Keep the control usable without storage. */ }
  }, []);
  const t = useCallback((key: TranslationKey) => {
    const value = (language === "ar" ? arabic : english)[key];
    return language === "ar" && ["intro", "aboutText"].includes(key) ? isolateLatin(value) : value;
  }, [language]);
  const value = useMemo(() => ({ language, theme, setLanguage, setTheme, t }), [language, theme, setLanguage, setTheme, t]);
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}
export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return context;
}
