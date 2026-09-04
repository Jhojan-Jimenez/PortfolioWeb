import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhojan Jimenez - Software Engineer | Backend & Cloud Architecture",
  description:
    "Portfolio profesional de desarrollador Full Stack especializado en React, Next.js y tecnologías modernas como Express / FastAPI / Django.",
  keywords:
    "backend engineer, software engineer, cloud architecture, python, fastapi, django, nodejs, nestjs, aws, gcp, docker, postgresql, alembic, microservices, jhojan jimenez",
  authors: [{ name: "Jhojan Jimenez" }],
  openGraph: {
    title: "Jhojan Jimenez - Software Engineer | Backend & Cloud Architecture",
    description: "Portfolio profesional de desarrollador Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
