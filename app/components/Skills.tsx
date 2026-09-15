"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Cpu,
  Terminal,
  Code2,
  ChevronDown,
  CheckCircle2,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiDjango,
  SiPydantic,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiLinux,
  SiGitlab,
  SiOpentelemetry,
  SiPostgresql,
  SiRedis,
  SiPandas,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiPostman,
  SiPosthog,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { TbVectorTriangle, TbDatabaseCog, TbScan, TbSql } from "react-icons/tb";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;
  const [showAllTech, setShowAllTech] = useState(false);

  // 1. WHAT I DO — PRAGMATIC & HUMBLE STACKED WIDE CARDS (REFERENCE IMAGE 2)
  const whatIDoItems = [
    {
      number: "01",
      icon: Cloud,
      title: language === "es" ? "Despliegue Cloud & Contenedores" : "Cloud Deployment & Containers",
      description:
        language === "es"
          ? "Configuro y despliego aplicaciones usando Docker, clústeres livianos en Kubernetes (k3s ARM64) y servicios gestionados en GCP (Cloud Run, Cloud SQL) o AWS S3, cuidando el consumo de recursos."
          : "Configuring and deploying services using Docker, lightweight Kubernetes clusters (k3s ARM64), and managed cloud resources on GCP (Cloud Run, Cloud SQL) or AWS S3.",
      pills: ["k3s ARM64", "Docker", "Cloud Run", "AWS S3"],
    },
    {
      number: "02",
      icon: Server,
      title: language === "es" ? "Desarrollo Backend & APIs" : "Backend Development & APIs",
      description:
        language === "es"
          ? "Construyo servicios web y APIs estructuradas en Python (FastAPI) y Node.js (NestJS/Express), asegurando esquemas tipados con Pydantic, validación de datos y comunicación fluida entre componentes."
          : "Building structured web services and APIs in Python (FastAPI) and Node.js (NestJS/Express), enforcing type-safe Pydantic schemas, validation, and clean inter-service communication.",
      pills: ["FastAPI", "NestJS", "Python", "TypeScript", "Node.js"],
    },
    {
      number: "03",
      icon: Database,
      title: language === "es" ? "Bases de Datos & Búsqueda Vectorial" : "Databases & Vector Search",
      description:
        language === "es"
          ? "Diseño modelos de datos en PostgreSQL, creo índices y búsquedas por similitud con pgvector, e implemento caché con Redis y scripts de procesamiento con Pandas cuando se requiere."
          : "Designing relational models in PostgreSQL, setting up semantic similarity search with pgvector, and implementing Redis caching and data processing with Pandas.",
      pills: ["PostgreSQL 16", "pgvector", "Redis", "Pandas"],
    },
    {
      number: "04",
      icon: Cpu,
      title: language === "es" ? "Integración de IA & Soporte Full Stack" : "Applied AI & Full-Stack Delivery",
      description:
        language === "es"
          ? "Conecto modelos de IA preentrenados (como CLIP o la API de OpenAI) directamente a la lógica de negocio, complementándolo con interfaces web claras y funcionales en Next.js y Tailwind CSS."
          : "Connecting pre-trained AI models (like CLIP or OpenAI APIs) into business workflows, complemented with clean, functional web interfaces built with Next.js and Tailwind CSS.",
      pills: ["CLIP ViT-B/32", "OpenAI API", "Next.js 15", "React 19"],
    },
  ];

  // 2. TECH ARSENAL — BENTO CONTAINERS WITH AUTHENTIC MULTI-COLOR LOGOS & OFFICIAL BRAND COLORS (REFERENCE IMAGE 1)
  const arsenalCategories: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    tools: {
      name: string;
      svg?: string;
      icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
      color: string;
    }[];
  }[] = [
    {
      name: language === "es" ? "Backend" : "Backend",
      icon: Server,
      tools: [
        { name: "Python", svg: "/tech-icons/python.svg", icon: SiPython, color: "#3776AB" },
        { name: "FastAPI", svg: "/tech-icons/fastapi.svg", icon: SiFastapi, color: "#009688" },
        { name: "Node.js", svg: "/tech-icons/nodejs.svg", icon: SiNodedotjs, color: "#5FA04E" },
        { name: "NestJS", svg: "/tech-icons/nestjs.svg", icon: SiNestjs, color: "#E0234E" },
        { name: "TypeScript", svg: "/tech-icons/typescript.svg", icon: SiTypescript, color: "#3178C6" },
        { name: "Java", svg: "/tech-icons/java.svg", icon: FaJava, color: "#ED8B00" },
        { name: "Django", svg: "/tech-icons/django.svg", icon: SiDjango, color: "#44B78B" },
        { name: "Pydantic", icon: SiPydantic, color: "#E92063" },
      ],
    },
    {
      name: language === "es" ? "Cloud & DevOps" : "Cloud & DevOps",
      icon: Cloud,
      tools: [
        { name: "Kubernetes", svg: "/tech-icons/kubernetes.svg", icon: SiKubernetes, color: "#326CE5" },
        { name: "Docker", svg: "/tech-icons/docker.svg", icon: SiDocker, color: "#2496ED" },
        { name: "GCP", svg: "/tech-icons/googlecloud.svg", icon: SiGooglecloud, color: "#4285F4" },
        { name: "AWS S3", svg: "/tech-icons/amazonwebservices.svg", icon: FaAws, color: "#FF9900" },
        { name: "GitHub CI", svg: "/tech-icons/githubactions.svg", icon: SiGithubactions, color: "#2088FF" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "GitLab CI", svg: "/tech-icons/gitlab.svg", icon: SiGitlab, color: "#FC6D26" },
        { name: "OTel", svg: "/tech-icons/opentelemetry.svg", icon: SiOpentelemetry, color: "#F5A800" },
      ],
    },
    {
      name: language === "es" ? "Datos & IA" : "Data & AI",
      icon: Database,
      tools: [
        { name: "PostgreSQL", svg: "/tech-icons/postgresql.svg", icon: SiPostgresql, color: "#336791" },
        { name: "pgvector", icon: TbVectorTriangle, color: "#A855F7" },
        { name: "Redis", svg: "/tech-icons/redis.svg", icon: SiRedis, color: "#DC382D" },
        { name: "CLIP AI", icon: TbScan, color: "#38BDF8" },
        { name: "OpenAI", icon: RiOpenaiFill, color: "#10A37F" },
        { name: "Pandas", svg: "/tech-icons/pandas.svg", icon: SiPandas, color: "#E70488" },
        { name: "Alembic", icon: TbDatabaseCog, color: "#F59E0B" },
        { name: "SQL", icon: TbSql, color: "#00BCF2" },
      ],
    },
    {
      name: language === "es" ? "Frontend & Herramientas" : "Frontend & Tools",
      icon: Code2,
      tools: [
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "React", svg: "/tech-icons/react.svg", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", svg: "/tech-icons/tailwindcss.svg", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "JavaScript", svg: "/tech-icons/javascript.svg", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML / CSS", svg: "/tech-icons/html5.svg", icon: SiHtml5, color: "#E34F26" },
        { name: "Git", svg: "/tech-icons/git.svg", icon: SiGit, color: "#F05032" },
        { name: "Postman", svg: "/tech-icons/postman.svg", icon: SiPostman, color: "#FF6C37" },
        { name: "PostHog", icon: SiPosthog, color: "#F54E00" },
      ],
    },
  ];

  // Full stack inventory for expandable drawer
  const fullInventory = [
    {
      category: language === "es" ? "Lenguajes Principales" : "Core Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "HTML5 / CSS3"],
    },
    {
      category: language === "es" ? "Frameworks & Backend" : "Backend Frameworks",
      items: ["FastAPI", "NestJS", "Express.js", "Django REST", "Pydantic", "Node.js"],
    },
    {
      category: language === "es" ? "Cloud & Orquestación" : "Cloud & Orchestration",
      items: ["Kubernetes (k3s ARM64)", "Docker", "GCP (Cloud Run)", "AWS (S3)", "GitHub Actions", "GitLab CI/CD", "Linux"],
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
      category: language === "es" ? "Frontend & Observabilidad" : "Frontend & Observability",
      items: ["Next.js (App Router)", "React 19", "Tailwind CSS", "Pandas ETL", "PostHog", "OpenTelemetry"],
    },
  ];

  return (
    <section
      id="skills"
      className="pb-24 sm:pb-32 sm:pt-10 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* ========================================================================= */}
        {/* BLOQUE 1: WHAT I DO (WIDE STACKED CARDS - REFERENCIA IMAGEN 2)             */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-left mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8750f7] font-bold block mb-2">
              {language === "es" ? "— EN QUÉ ME ENFOCO" : "— WHAT I DO"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              {language === "es"
                ? "Soluciones de ingeniería y desarrollo backend"
                : "Engineering focus and backend technical solutions"}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              {language === "es"
                ? "Construcción pragmática de software: infraestructura cloud contenida, servicios backend tipados, bases de datos relacionales e integración de modelos de IA."
                : "Pragmatic software delivery: containerized cloud infrastructure, type-safe backend services, relational data, and applied AI integration."}
            </p>
          </div>

          <div className="space-y-4">
            {whatIDoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group p-5 sm:p-6 md:p-7 rounded-2xl bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 shadow-lg hover:shadow-xl hover:shadow-[#8750f7]/15 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0 flex-1">
                    <span className="text-xs sm:text-sm font-mono font-bold text-neutral-500 group-hover:text-purple-400 transition-colors shrink-0 pt-1 sm:pt-0">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 group-hover:scale-105 group-hover:bg-[#8750f7] group-hover:text-white transition-all shadow-md">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges / Tech Pills on the right */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                    {item.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-[#0d0714] border border-white/10 group-hover:border-purple-500/30 transition-colors"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOQUE 2: TECH ARSENAL / SKILLS BY DOMAIN (REFERENCIA IMAGEN 1)           */}
        {/* ========================================================================= */}
        <div>
          <div className="text-left mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8750f7] font-bold block mb-2">
              {language === "es" ? "— ARSENAL TÉCNICO" : "— TECH ARSENAL"}
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              {language === "es" ? "Habilidades & Tecnologías" : "Skills & Technologies"}
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              {language === "es"
                ? "Herramientas que utilizo activamente para desarrollo, despliegue y analítica."
                : "Tools and technologies I actively use for engineering, deployment, and analytics."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {arsenalCategories.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[24px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-[#8750f7] group-hover:text-white transition-colors">
                        <CategoryIcon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {cat.name}
                        </h4>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {cat.tools.length} {language === "es" ? "tecnologías" : "technologies"}
                        </span>
                      </div>
                    </div>

                    {/* Grid of Tools with Authentic Logos/Icons (Ref Image 1) */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {cat.tools.map((tool, tIdx) => {
                        const ToolIcon = tool.icon;
                        return (
                          <div
                            key={tIdx}
                            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#0d0714] border border-white/5 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group/item hover:-translate-y-1 hover:shadow-lg"
                          >
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-white/25 group-hover/item:bg-white/[0.08] transition-all duration-300 mb-2 p-2 relative overflow-hidden">
                              {tool.svg ? (
                                <img
                                  src={tool.svg}
                                  alt={tool.name}
                                  className="w-full h-full object-contain filter drop-shadow transition-transform"
                                  loading="lazy"
                                />
                              ) : ToolIcon ? (
                                <ToolIcon
                                  className="w-5 h-5 transition-transform filter drop-shadow"
                                  style={{ color: tool.color }}
                                />
                              ) : null}
                            </div>
                            <span className="text-[11px] font-medium text-neutral-300 group-hover/item:text-white text-center leading-tight truncate w-full transition-colors">
                              {tool.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOQUE 3: EXPANDABLE FULL TECHNOLOGY INVENTORY (FOR ATS AUDITS)           */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto text-center mt-16">
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
