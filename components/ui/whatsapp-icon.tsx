import type { SVGProps } from "react";
import { siteConfig } from "@/lib/data";
export const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.1 3.9A11.2 11.2 0 0 0 2.5 17.4L1 23l5.7-1.5A11.2 11.2 0 0 0 20.1 3.9ZM12.2 21a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3a9.2 9.2 0 1 1 7.7 4.2Z"/><path d="M8.2 6.7c-.3 0-.6.1-.8.4-.4.4-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.2.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.5.6.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4l-1.8-.9c-.3-.1-.5-.2-.7.1l-.8 1c-.2.2-.4.2-.7.1a7.6 7.6 0 0 1-2.2-1.4 8.4 8.4 0 0 1-1.5-1.9c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9.4 7c-.2-.4-.4-.3-.7-.3Z"/></svg>;
}
