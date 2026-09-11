import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" className={`scroll-smooth dark ${inter.variable}`}>
      <body className="text-neutral-100 font-sans antialiased selection:bg-purple-900/50 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=35f42241-3f25-45b2-9823-5afac6651832"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
