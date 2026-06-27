import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const description =
  "Ahmed Hamdi is a Full Stack Developer building scalable web applications with React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and REST APIs.";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description,
  keywords: [
    siteConfig.name,
    siteConfig.title,
    "Full Stack Developer",
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
    description:
      "Full Stack Developer building scalable web applications from UI to API.",
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description:
      "Full Stack Developer building scalable web applications from UI to API.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("theme") || "dark";
                document.documentElement.classList.toggle("dark", theme === "dark");
              } catch (_) {
                document.documentElement.classList.add("dark");
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} relative font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
