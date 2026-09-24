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
  ChevronUp,
  CheckCircle2,
  Layers,
  Sparkles,
  Wrench,
  ArrowUpRight,
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
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleCategory = (idx: number) => {
    setExpandedCategories((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // 1. WHAT I DO — PRAGMATIC & HUMBLE STACKED WIDE CARDS (REFERENCE IMAGE 2)
  const whatIDoItems = [
    {
      number: "01",
      icon: Cloud,
      title: language === "es" ? "Despliegue Cloud & Contenedores" : "Cloud Deployment & Containers",
      description:
        language === "es"
          ? "Configuro y despliego aplicaciones usando Docker, clústeres livianos en Kubernetes (k3s) y servicios gestionados en GCP (Cloud Run, Cloud SQL) o AWS S3, cuidando el consumo de recursos."
          : "Configuring and deploying services using Docker, lightweight Kubernetes clusters (k3s), and managed cloud resources on GCP (Cloud Run, Cloud SQL) or AWS S3.",
      pills: ["Kubernetes (k3s)", "Docker", "Cloud Run", "AWS S3"],
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

  const renderArsenalCards = () =>
    arsenalCategories.map((cat, idx) => {
      const CategoryIcon = cat.icon;
      const isExpanded = expandedCategories.includes(idx);

      return (
        <div
          key={idx}
          className="p-5 sm:p-6 rounded-[24px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            {/* Header / Clickable on mobile to open/close this specific card */}
            <div
              onClick={() => toggleCategory(idx)}
              className="flex items-center justify-between pb-4 border-b border-white/10 cursor-pointer md:cursor-default select-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-[#8750f7] group-hover:text-white transition-colors">
                  <CategoryIcon className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400">
                    {cat.tools.length} {language === "es" ? "tecnologías" : "technologies"}
                  </span>
                </div>
              </div>

              {/* Mobile Expand / Collapse Trigger Indicator */}
              <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-[#8750f7] pl-2">
                <span>
                  {isExpanded
                    ? language === "es"
                      ? "[-] Ocultar"
                      : "[-] Hide"
                    : language === "es"
                    ? "[+] Ver"
                    : "[+] View"}
                </span>
                <div
                  className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-300 transition-transform duration-300 ${
                    isExpanded ? "rotate-180 bg-[#8750f7]/20 text-white" : ""
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Mobile collapsible content */}
            <div className="md:hidden">
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pt-4"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop permanent content (always visible) */}
            <div className="hidden md:block pt-6">
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
        </div>
      );
    });

  return (
    <section
      id="skills"
      className="pb-24 sm:pb-32 sm:pt-10 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* ========================================================================= */}
        {/* BLOQUE 1: MY QUALITY SERVICES / ENGINEERING FOCUS (GEROLD SIGNATURE STYLE) */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
                {language === "es"
                  ? "Servicios & Soluciones de Ingeniería"
                  : "My Quality Services"}
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              {language === "es"
                ? "Diseño y despliegue de arquitecturas backend robustas, infraestructura cloud contenida, bases de datos relacionales e inteligencia artificial aplicada."
                : "Pragmatic software delivery: containerized cloud infrastructure, type-safe backend services, relational data, and applied AI integration."}
            </p>
          </div>

          <div className="border-t border-white/10">
            {whatIDoItems.map((item, idx) => {
              const isActive = activeService === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => {
                    setActiveService((prev) => (prev === idx ? null : idx));
                  }}
                  onMouseEnter={() => {
                    // Only trigger hover on larger screens
                    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                      setActiveService(idx);
                    }
                  }}
                  className={`group relative p-5 sm:p-7 lg:py-8 lg:px-10 border-b border-white/10 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#8750f7] via-[#7435f5] to-[#401280] shadow-xl shadow-purple-950/40"
                      : "bg-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Top / Main Row: Title + Desktop Description + Arrow */}
                  <div className="flex items-center justify-between">
                    {/* Left: Number + Title */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 lg:w-5/12 shrink-0">
                      <span
                        className={`text-base sm:text-lg lg:text-xl font-mono font-bold transition-colors ${
                          isActive ? "text-white" : "text-[#8750f7]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-white group-hover:text-purple-200"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Middle (Desktop only): Description */}
                    <div className="hidden lg:block lg:w-6/12 lg:px-6">
                      <p
                        className={`text-sm sm:text-base font-light leading-relaxed transition-colors ${
                          isActive ? "text-white/90" : "text-neutral-400"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Gerold Dynamic Arrow / Indicator */}
                    <div className="flex items-center justify-end lg:w-1/12 shrink-0 pl-3">
                      <div
                        className={`transition-all duration-300 p-1.5 sm:p-2 rounded-full ${
                          isActive
                            ? "text-white -rotate-45 scale-110 bg-white/15 lg:bg-transparent"
                            : "text-[#8750f7] rotate-45 group-hover:-rotate-45 group-hover:text-purple-300 bg-white/5 lg:bg-transparent"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Collapsible Body (<lg) */}
                  <div className="lg:hidden">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-3 sm:pt-4"
                        >
                          <p className="text-xs sm:text-sm font-light leading-relaxed text-white/95 mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                            {item.pills.map((pill) => (
                              <span
                                key={pill}
                                className="px-2 py-0.5 rounded-md bg-white/15 text-white text-[11px] font-mono"
                              >
                                {pill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOQUE 2: TECH ARSENAL / SKILLS BY DOMAIN (REFERENCIA IMAGEN 1)           */}
        {/* ========================================================================= */}
        <div id="tech-arsenal">
          <div className="text-left mb-8 sm:mb-10">
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

          {/* Unified Grid: 1 col on mobile (each card is an individual accordion, closed by default), 4 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {renderArsenalCards()}
          </div>
        </div>

      </div>
    </section>
  );
}
