"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Building2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].experience;

  // Track expanded cards for detailed technical architecture view
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const handleAction = (type: "cv" | "resume", mode: "download" | "preview") => {
    const fileUrl =
      type === "cv"
        ? "/resume/Jhojan_JimenezCV.pdf"
        : "/resume/Jhojan_Jimenez_Resume.pdf";
    const downloadName =
      type === "cv" ? "Jhojan_JimenezCV.pdf" : "Jhojan_Jimenez_Resume.pdf";

    if (mode === "preview") {
      window.open(fileUrl, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const educationItems = [
    {
      period: "2022 – 2026",
      title:
        language === "es"
          ? "Grado en Ingeniería Informática (Computational Science)"
          : "B.S. in Computer Science & Informatics Engineering",
      institution:
        language === "es"
          ? "Universidad de La Sabana · Chía, Colombia"
          : "Universidad de La Sabana · Chía, Colombia",
      highlight:
        language === "es"
          ? "Beneficiario de Beca de Excelencia Académica del 80% · Promedio 4.4 / 5.0"
          : "80% Academic Excellence Merit Scholarship · Cumulative GPA: 4.4 / 5.0",
      description:
        language === "es"
          ? "Formación rigurosa con énfasis en Arquitectura de Software, Sistemas Distribuidos, Concurrencia y Bases de Datos Vectoriales y Relacionales de alta escala."
          : "Rigorous curriculum emphasizing Software Architecture, Distributed Systems, Concurrency, and high-scale Relational and Vector Databases.",
    },
    {
      period: "2025",
      title:
        language === "es"
          ? "🏆 1er Lugar — Sabana Hack 2025"
          : "🏆 1st Place — Sabana Hack 2025",
      institution:
        language === "es"
          ? "Cruz Roja Colombiana & Unisabana"
          : "Colombian Red Cross & Unisabana",
      highlight:
        language === "es"
          ? "Sistema de Alertas en Tiempo Real con IA en sprint de 24h"
          : "Real-Time AI Alerting & Triage System built in 24h sprint",
      description:
        language === "es"
          ? "Diseño e implementación de arquitectura distribuida para procesamiento de emergencias y triaje inteligente bajo alta demanda."
          : "Engineered and shipped a distributed real-time emergency triage and automated alerting architecture under high concurrency.",
    },
    {
      period: language === "es" ? "Continuo" : "Ongoing",
      title:
        language === "es"
          ? "Competencia Profesional & Bilingüismo"
          : "Professional Competence & Bilingualism",
      institution:
        language === "es"
          ? "Estándar Global de Ingeniería"
          : "Global Engineering Standards",
      highlight:
        language === "es"
          ? "Español (Nativo) · Inglés (B2 Profesional)"
          : "Spanish (Native) · English (B2 Professional)",
      description:
        language === "es"
          ? "Comunicación técnica fluida para entornos internacionales, code reviews en inglés y diseño de especificaciones de sistemas distribuidos."
          : "Fluent technical communication in English, architectural design documents, international code reviews, and remote agile workflows.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* GEROLD'S SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140c1c] border border-[#8750f7]/40 text-purple-200 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(135,80,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#8750f7] animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              {language === "es" ? "Mi Trayectoria & Resumen" : "My Experience & Resume"}
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Historial comprobado en empresas y startups liderando arquitecturas backend resilientes, despliegues cloud y pipelines de datos de alto rendimiento."
              : "Proven production track record across high-growth ventures leading resilient backend architectures, cloud infrastructure, and data pipelines."}
          </p>
        </div>

        {/* OFFICIAL RESUME HUB (GEROLD STYLE BUTTONS) */}
        <div className="p-6 sm:p-8 rounded-[30px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/40 transition-all duration-300 shadow-xl mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8750f7] font-bold">
                ✦ {t.resumeHub.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
              {t.resumeHub.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* CV Español */}
            <div className="inline-flex rounded-full overflow-hidden border border-[#8750f7]/50 shadow-md">
              <button
                onClick={() => handleAction("cv", "download")}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#8750f7] hover:bg-[#7435f5] text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.resumeHub.downloadCv}</span>
              </button>
              <button
                onClick={() => handleAction("cv", "preview")}
                aria-label="Preview CV"
                className="flex items-center justify-center px-3.5 py-2.5 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs sm:text-sm cursor-pointer"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Resume English */}
            <div className="inline-flex rounded-full overflow-hidden border border-[#8750f7]/50 shadow-md">
              <button
                onClick={() => handleAction("resume", "download")}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#8750f7] to-[#a855f7] hover:brightness-110 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.resumeHub.downloadResume}</span>
              </button>
              <button
                onClick={() => handleAction("resume", "preview")}
                aria-label="Preview Resume"
                className="flex items-center justify-center px-3.5 py-2.5 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs sm:text-sm cursor-pointer"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* GEROLD'S 2-COLUMN PARALLEL RESUME (MY EXPERIENCE & MY EDUCATION) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-start text-left">
          {/* COLUMN 1: MY EXPERIENCE */}
          <div>
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#1c102b] border border-[#8750f7]/40 text-[#8750f7] flex items-center justify-center shadow-md">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === "es" ? "Mi Experiencia" : "My Experience"}
              </h3>
            </div>

            {/* Resume Items List */}
            <div className="space-y-6">
              {t.roles.map((job, idx) => {
                const isExpanded = expandedRole === idx;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-[26px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 hover:bg-[#190f24] transition-all duration-300 group relative shadow-lg"
                  >
                    {/* Time Period in Gerold's Neon Purple */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-base sm:text-lg font-bold text-[#8750f7] font-mono">
                        {job.period}
                      </span>
                      {job.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {t.activeStatus}
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8750f7] transition-colors mb-1">
                      {job.title}
                    </h4>

                    {/* Company & Location */}
                    <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-3">
                      {job.company} · {job.location}
                    </p>

                    {/* Highlight Metric Pill */}
                    <div className="mb-4">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1e1130] text-[#D46F88] border border-[#8750f7]/30 inline-block font-semibold">
                        ✦ {job.highlightMetric}
                      </span>
                    </div>

                    {/* Summary Description */}
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(job.technologies || []).slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Architectural Details Toggle */}
                    <button
                      onClick={() =>
                        setExpandedRole(isExpanded ? null : idx)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#8750f7] hover:text-[#a855f7] transition-colors cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? language === "es"
                            ? "Ocultar entregables [-]"
                            : "Hide details [-]"
                          : language === "es"
                          ? "Ver entregables técnicos [+]"
                          : "View technical deliverables [+]"}
                      </span>
                    </button>

                    {/* Expanded Deliverables Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 mt-4 border-t border-white/10 space-y-2"
                        >
                          {job.achievements.map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-neutral-200 leading-relaxed"
                            >
                              <span className="font-mono font-bold text-xs text-[#8750f7] uppercase mr-1.5">
                                [{ach.tag}]
                              </span>
                              {ach.description}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: MY EDUCATION */}
          <div>
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#1c102b] border border-[#8750f7]/40 text-[#8750f7] flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === "es" ? "Mi Educación" : "My Education"}
              </h3>
            </div>

            {/* Education Items List */}
            <div className="space-y-6">
              {educationItems.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-[26px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 hover:bg-[#190f24] transition-all duration-300 group relative shadow-lg"
                >
                  {/* Time Period in Gerold's Neon Purple */}
                  <div className="mb-2">
                    <span className="text-base sm:text-lg font-bold text-[#8750f7] font-mono">
                      {edu.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8750f7] transition-colors mb-1">
                    {edu.title}
                  </h4>

                  {/* Institution */}
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-3">
                    {edu.institution}
                  </p>

                  {/* Highlight Distinction Pill */}
                  <div className="mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1e1130] text-[#D46F88] border border-[#8750f7]/30 inline-block font-semibold">
                      ✦ {edu.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
