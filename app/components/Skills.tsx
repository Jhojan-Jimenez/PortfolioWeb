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
  ShieldCheck,
  Code2,
  Terminal,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;
  const [showAllTech, setShowAllTech] = useState(false);

  // 4 Top Cards ("My Skills and Development" from reference design: Fast, Responsive, Intuitive, Dynamic)
  const coreSkillCards = [
    {
      id: "fast",
      icon: Zap,
      gradient: "from-[#7F1DFF] to-[#D46F88]",
      tag: "01",
      title: "Fast",
      role: language === "es" ? "Cloud & Orquestación" : "Cloud & Kubernetes",
      description:
        language === "es"
          ? "Rendimiento óptimo y ultra-baja latencia garantizada mediante clústeres k3s sobre ARM64 y despliegues contenerizados."
          : "Optimal performance and ultra-low latency ensured through k3s ARM64 orchestration and containerized delivery.",
      pills: ["k3s ARM64", "Docker", "Cloud Run", "AWS S3"],
    },
    {
      id: "responsive",
      icon: Server,
      gradient: "from-[#7F1DFF] to-[#4c1d95]",
      tag: "02",
      title: "Responsive",
      role: language === "es" ? "Backend Distribuido" : "Distributed Backend",
      description:
        language === "es"
          ? "Microservicios reactivos diseñados para escalar sin esfuerzo, gestionando alta concurrencia con tolerancia a fallos."
          : "Reactive microservices designed to scale effortlessly, handling high-volume concurrency with zero downtime.",
      pills: ["FastAPI", "NestJS", "Python", "TypeScript"],
    },
    {
      id: "intuitive",
      icon: Database,
      gradient: "from-[#D46F88] to-[#7F1DFF]",
      tag: "03",
      title: "Intuitive",
      role: language === "es" ? "Datos & Vectores" : "Data & Vector Storage",
      description:
        language === "es"
          ? "Modelado relacional determinista en PostgreSQL 16, búsquedas vectoriales por similitud con pgvector y pipelines ETL limpios."
          : "Deterministic relational modeling in PostgreSQL 16, vector similarity search via pgvector, and clean ETL pipelines.",
      pills: ["pgvector", "PostgreSQL", "Redis", "Pandas ETL"],
    },
    {
      id: "dynamic",
      icon: Sparkles,
      gradient: "from-[#FFEB34] to-[#D46F88]",
      iconColor: "text-neutral-900",
      tag: "04",
      title: "Dynamic",
      role: language === "es" ? "IA Aplicada & Modern Web" : "Applied AI & Web",
      description:
        language === "es"
          ? "Integración de modelos multimodales (CLIP ViT-B/32, GPT-4o Vision) y delivery web moderno y fluido con Next.js y Tailwind."
          : "Multimodal AI integration (CLIP ViT-B/32, GPT-4o Vision) and fluid, accessible web delivery with Next.js and Tailwind.",
      pills: ["CLIP ViT-B/32", "OpenAI / RAG", "Next.js", "React 19"],
    },
  ];

  // 4 Enterprise Solutions ("Custom IT Solutions Tailored to Your Needs" from reference design)
  const enterpriseSolutions = [
    {
      icon: Cloud,
      title: language === "es" ? "Infraestructura Cloud & Despliegue" : "Cloud Infrastructure Setup",
      bullets: [
        language === "es" ? "Experticia en GCP (Cloud Run, Cloud SQL) y AWS (S3)" : "GCP (Cloud Run, Cloud SQL) & AWS (S3) expertise",
        language === "es" ? "Arquitectura de clústeres k3s ARM64 segura y escalable" : "Secure, scalable k3s ARM64 Kubernetes architecture",
        language === "es" ? "Optimización de costos y alta disponibilidad (HA)" : "Cost optimization and high availability (HA)",
      ],
    },
    {
      icon: Code2,
      title: language === "es" ? "Desarrollo Backend & APIs Concurrentes" : "High-Concurrency Backend & APIs",
      bullets: [
        language === "es" ? "Microservicios REST y GraphQL en FastAPI y NestJS" : "Production REST & GraphQL microservices in FastAPI and NestJS",
        language === "es" ? "Esquemas Pydantic estrictos y validación de tipos" : "Strict Pydantic schemas and runtime type validation",
        language === "es" ? "Integraciones transaccionales con Stripe, Twilio y webhooks" : "Transactional integrations with Stripe, Twilio & webhooks",
      ],
    },
    {
      icon: Database,
      title: language === "es" ? "Sistemas de Datos & Búsqueda Vectorial" : "Data Systems & Vector Solutions",
      bullets: [
        language === "es" ? "Búsqueda vectorial semántica in-database con pgvector" : "In-database semantic vector search with pgvector",
        language === "es" ? "Migraciones deterministas y versionadas con Alembic" : "Deterministic, version-controlled migrations with Alembic",
        language === "es" ? "Pipelines de agregación y análisis con Pandas y Redis" : "ETL aggregation pipelines with Pandas and Redis caching",
      ],
    },
    {
      icon: Terminal,
      title: language === "es" ? "DevOps, CI/CD & Observabilidad" : "DevOps, CI/CD & Observability",
      bullets: [
        language === "es" ? "Pipelines automatizados con GitHub Actions y GitLab CI" : "Automated CI/CD workflows with GitHub Actions & GitLab",
        language === "es" ? "Contenerización reproducible y multi-stage con Docker" : "Reproducible multi-stage containerization with Docker",
        language === "es" ? "Monitoreo con OpenTelemetry, métricas y telemetría" : "Telemetry, error tracing, and OpenTelemetry instrumentation",
      ],
    },
  ];

  // Full stack inventory
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
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER: "My Skills and Development" */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140c1c] border border-[#8750f7]/40 text-purple-200 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(135,80,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#8750f7] animate-pulse" />
            <span>{language === "es" ? "ARQUITECTURA & HABILIDADES" : "ARCHITECTURE & SKILLS"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              {language === "es" ? "Mis Habilidades y Desarrollo" : "My Skills and Development"}
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            {language === "es"
              ? "Capacidades técnicas probadas sobre sistemas en producción, infraestructura cloud y modelos de IA aplicada."
              : "Engineering capabilities grounded in production distributed systems, cloud orchestration, and applied AI."}
          </p>
        </div>

        {/* 4 SLEEK TALL CARDS (Fast, Responsive, Intuitive, Dynamic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreSkillCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group p-6 sm:p-7 rounded-[28px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 shadow-xl hover:shadow-2xl hover:shadow-[#8750f7]/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Top ambient glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#7F1DFF]/10 rounded-full blur-2xl group-hover:bg-[#7F1DFF]/25 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Neon Icon Badge */}
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} p-2.5 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 stroke-[2] ${card.iconColor || "text-white"}`} />
                    </div>

                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D46F88] font-semibold block mb-3">
                    {card.role}
                  </span>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {card.pills.map((pill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-300 bg-[#131313] border border-white/10 group-hover:border-[#7F1DFF]/30 group-hover:text-white transition-all"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 2: "Custom Solutions Tailored to Your Needs" (FROM REFERENCE DESIGN) */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D46F88] font-bold block mb-1">
                {language === "es" ? "SOLUCIONES DE INGENIERÍA" : "ENGINEERING CAPABILITIES"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {language === "es"
                  ? "Soluciones de Ingeniería para Sistemas Críticos"
                  : "Custom Technical Solutions Tailored to Your Needs"}
              </h3>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md">
              {language === "es"
                ? "Arquitectura resiliente para optimizar operaciones, elevar disponibilidad y acelerar el desarrollo."
                : "Delivering innovative backend and cloud solutions to streamline operations, enhance security, and power growth."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enterpriseSolutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-[26px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 shadow-xl hover:shadow-2xl hover:shadow-[#8750f7]/15 flex flex-col justify-between transition-all duration-300 text-left group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#7F1DFF]/15 border border-[#7F1DFF]/30 flex items-center justify-center text-[#D46F88] shrink-0 shadow-md">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                        {solution.title}
                      </h4>
                      <ul className="space-y-1.5 mt-3 text-xs sm:text-sm text-neutral-300">
                        {solution.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7F1DFF] mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: EXPANDABLE FULL TECHNOLOGY INVENTORY (FOR ATS AUDITS) */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <button
            onClick={() => setShowAllTech(!showAllTech)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#18181d] hover:bg-white/[0.08] border border-white/20 hover:border-[#7F1DFF]/50 text-neutral-200 hover:text-white text-xs font-mono font-medium tracking-wide transition-all cursor-pointer shadow-lg"
          >
            <span>
              {showAllTech
                ? language === "es"
                  ? "Colapsar Índice de Tecnologías"
                  : "Collapse Technology Index"
                : language === "es"
                ? "Ver Inventario Técnico Completo (40+ Tecnologías)"
                : "View Full Technology Inventory (40+ Tools)"}
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
                <div className="p-6 sm:p-8 rounded-3xl bg-[#18181d]/95 border border-white/15 backdrop-blur-xl shadow-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {fullInventory.map((category, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-purple-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7F1DFF]" />
                          <span>{category.category}</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {category.items.map((item, iIdx) => (
                            <span
                              key={iIdx}
                              className="px-2.5 py-1 rounded-md bg-[#131313] border border-white/10 text-neutral-300 text-xs font-mono"
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
