import type React from "react";
import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhojan Jimenez — Software Engineer & Cloud Architect",
  description:
    "Software Engineer specializing in Distributed Systems, Kubernetes Orchestration, and Applied AI.",
  keywords:
    "software engineer, cloud architect, kubernetes, nestjs, fastapi, pgvector, clip, distributed systems, argocd, jhojan jimenez",
  authors: [{ name: "Jhojan Jimenez" }],
  openGraph: {
    title: "Jhojan Jimenez — Software Engineer & Cloud Architect",
    description: "Software Engineer specializing in Distributed Systems & Cloud Architecture",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`dark ${figtree.variable} ${jetbrainsMono.variable}`}
      >
        <body className="text-neutral-100 font-sans antialiased selection:bg-purple-900/50 selection:text-white">
          <LanguageProvider>{children}</LanguageProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
