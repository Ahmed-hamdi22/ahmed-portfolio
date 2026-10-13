"use client";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
export function SkipLink() { const { t } = usePortfolio(); return <a className="skip-link" href="#main-content">{t("skip")}</a>; }
