import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhojan - Portfolio",
  description:
    "Portfolio profesional de desarrollador Full Stack especializado en React, Next.js y tecnologías modernas como Express / FastAPI / Django.",
  keywords:
    "desarrollador, full stack, react, nextjs, portfolio, programador, python, django, express, fastapi, javascript, typescript",
  authors: [{ name: "Jhojan Jimenez" }],
  openGraph: {
    title: "Jhojan - Portfolio",
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
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
