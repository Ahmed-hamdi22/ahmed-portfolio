"use client";
import { usePortfolio } from "@/components/providers/PortfolioProvider";
import { WhatsAppIcon, whatsappUrl } from "./whatsapp-icon";
export function FloatingWhatsApp() {
  const { t } = usePortfolio();
  return <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t("whatsapp")}><WhatsAppIcon/><span>WhatsApp</span></a>;
}
