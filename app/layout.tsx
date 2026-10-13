import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { PortfolioProvider } from "@/components/providers/PortfolioProvider";
import "./globals.css";
import "./production.css";

const description =
  "Ahmed Hamdi is a Full Stack, MERN Stack, and Frontend Developer building scalable web applications with React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description,
  keywords: [
    siteConfig.name,
    siteConfig.title,
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "REST APIs",
    "JWT Authentication",
    "API Integration",
    "Cairo Egypt",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("theme") || "light";
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
              } catch (_) {
                document.documentElement.classList.remove("dark");
              }
            `,
          }}
        />
      </head>
      <body className="v1" suppressHydrationWarning>
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
