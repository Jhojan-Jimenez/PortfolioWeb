"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Sparkles,
  ChevronDown,
  Layers,
  Cpu,
  Workflow,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;
  const [showAllTech, setShowAllTech] = useState(false);

  // 4 Primary Architecture & Engineering Cards matching the reference image
  const skillCards = [
    {
      id: "cloud",
      icon: Cloud,
      gradient: "from-pink-500 to-purple-600",
      accentGlow: "shadow-pink-500/20",
      badge: language === "es" ? "NUBE & K8S" : "CLOUD & K8S",
      title: language === "es" ? "Cloud & Orquestación" : "Cloud & Orchestration",
      description:
        language === "es"
          ? "Orquestación en clústeres Kubernetes (k3s ARM64), contenedores Docker, CI/CD con GitHub Actions y servicios cloud en GCP Cloud Run y AWS S3."
          : "Kubernetes orchestration (k3s ARM64), Docker containerization, automated CI/CD pipelines with GitHub Actions, and cloud services on GCP & AWS S3.",
      skills: ["k3s ARM64", "Docker", "GCP Cloud Run", "AWS S3", "GitHub Actions"],
    },
    {
      id: "backend",
      icon: Server,
      gradient: "from-purple-600 to-indigo-600",
      accentGlow: "shadow-purple-500/20",
      badge: language === "es" ? "BACKEND DISTRIBUIDO" : "DISTRIBUTED BACKEND",
      title: language === "es" ? "APIs & Alta Concurrencia" : "High-Throughput APIs",
      description:
        language === "es"
          ? "Microservicios reactivos y APIs REST/GraphQL de baja latencia con FastAPI (Python), NestJS / Express (TypeScript) y resiliencia en producción."
          : "Low-latency microservices and REST/GraphQL APIs with FastAPI (Python), NestJS / Express (TypeScript), and high-concurrency connection pooling.",
      skills: ["FastAPI", "NestJS", "Python", "TypeScript", "PostgreSQL 16"],
    },
    {
      id: "data",
      icon: Database,
      gradient: "from-indigo-500 to-purple-500",
      accentGlow: "shadow-indigo-500/20",
      badge: language === "es" ? "DATOS & VECTORES" : "DATA & VECTORS",
      title: language === "es" ? "Datos & Búsqueda Vectorial" : "Data & Vector Search",
      description:
        language === "es"
          ? "Búsqueda vectorial in-database con pgvector, modelado relacional en PostgreSQL, migraciones con Alembic, caché en Redis y pipelines ETL con Pandas."
          : "In-database vector search with pgvector, relational modeling in PostgreSQL, deterministic Alembic migrations, Redis caching, and Pandas ETL pipelines.",
      skills: ["pgvector", "PostgreSQL", "Redis", "Alembic", "Pandas ETL"],
    },
    {
      id: "ai",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      accentGlow: "shadow-purple-600/20",
      badge: language === "es" ? "IA APLICADA & WEB" : "APPLIED AI & WEB",
      title: language === "es" ? "IA Aplicada & Modern Web" : "Applied AI & Modern Web",
      description:
        language === "es"
          ? "Modelos multimodales con CLIP ViT-B/32, pipelines RAG con GPT-4o-mini Vision, y delivery web moderno y accesible con Next.js y Tailwind CSS."
          : "Multimodal AI with CLIP ViT-B/32, RAG pipelines with GPT-4o-mini Vision, and high-performance frontend interfaces with Next.js & Tailwind CSS.",
      skills: ["CLIP ViT-B/32", "OpenAI / RAG", "Next.js", "React 19", "TailwindCSS"],
    },
  ];

  // Full stack inventory for technical recruiters & engineering leads
  const fullInventory = [
    {
      category: language === "es" ? "Lenguajes Principales" : "Core Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML5 / CSS3"],
    },
    {
      category: language === "es" ? "Frameworks & Backend" : "Backend Frameworks",
      items: ["FastAPI", "NestJS", "Express.js", "Django REST", "Pydantic", "Node.js"],
    },
    {
      category: language === "es" ? "Cloud & Orquestación" : "Cloud & Orchestration",
      items: ["Kubernetes (k3s ARM64)", "Docker", "GCP (Cloud Run)", "AWS (S3)", "GitHub Actions", "GitLab CI/CD"],
    },
    {
      category: language === "es" ? "Bases de Datos & Vectores" : "Databases & Vector Storage",
      items: ["PostgreSQL 16", "pgvector", "Redis", "Alembic", "SQL Optimization"],
    },
    {
      category: language === "es" ? "IA & Machine Learning" : "AI & Machine Learning",
      items: ["CLIP ViT-B/32", "OpenAI API", "GPT-4o Vision", "RAG Pipelines", "Embeddings"],
    },
    {
      category: language === "es" ? "Frontend & Analítica" : "Frontend & Analytics",
      items: ["Next.js (App Router)", "React 19", "Tailwind CSS", "Pandas ETL", "PostHog", "OpenTelemetry"],
    },
  ];

  return (
    <section id="skills" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER: "My Skills and Development" (Inspired by the reference design) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-mono mb-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>{language === "es" ? "ARQUITECTURA & DESARROLLO" : "ARCHITECTURE & DEVELOPMENT"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {language === "es" ? "Mis Habilidades & Desarrollo" : "My Skills and Development"}
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            {language === "es"
              ? "Capacidades de ingeniería construidas sobre sistemas en producción, orquestación cloud y modelos aplicados."
              : "Engineering capabilities grounded in production systems, cloud orchestration, and applied models."}
          </p>
        </div>

        {/* 4 SLEEK VERTICAL CARDS (EXACTLY AS IN THE REFERENCE IMAGE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group p-6 sm:p-7 rounded-3xl bg-[#0c0816]/85 border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle top card glow on hover */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Neon Icon Badge */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} p-2.5 flex items-center justify-center text-white shadow-lg ${card.accentGlow} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold px-2 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/20">
                      {card.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {card.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-300 bg-purple-950/30 border border-purple-500/20 group-hover:border-purple-400/30 group-hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* EXPANDABLE FULL STACK INVENTORY (FOR ATS & TECHNICAL LEADS) */}
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => setShowAllTech(!showAllTech)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-950/30 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400 text-purple-200 hover:text-white text-xs font-mono font-medium tracking-wide transition-all cursor-pointer shadow-lg shadow-purple-950/20"
          >
            <span>
              {showAllTech
                ? language === "es"
                  ? "Colapsar Índice Completo"
                  : "Collapse Full Index"
                : language === "es"
                ? "Ver Índice Completo de Tecnologías (40+)"
                : "View Full Technology Index (40+)"}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAllTech ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {showAllTech && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-8 text-left"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0816]/90 border border-purple-500/20 backdrop-blur-xl shadow-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {fullInventory.map((category, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-purple-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>{category.category}</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {category.items.map((item, iIdx) => (
                            <span
                              key={iIdx}
                              className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
