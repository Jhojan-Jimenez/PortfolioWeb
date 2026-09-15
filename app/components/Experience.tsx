"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].experience;

  // Track expanded cards for detailed technical architecture inspect
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
          ? "INGENIERÍA INFORMÁTICA / COMPUTATIONAL SCIENCE"
          : "B.S. IN COMPUTER SCIENCE & INFORMATICS",
      institution:
        language === "es"
          ? "Universidad de La Sabana · Promedio 4.4 / 5.0"
          : "Universidad de La Sabana · Cumulative GPA: 4.4 / 5.0",
      highlight:
        language === "es"
          ? "Énfasis en Arquitectura de Software y Sistemas Distribuidos"
          : "Focus on Software Architecture & Distributed Systems",
      description:
        language === "es"
          ? "Formación en alta concurrencia, bases de datos vectoriales y relacionales, redes y diseño de sistemas distribuidos."
          : "Curriculum focusing on high concurrency, vector and relational databases, networks, and distributed systems design.",
    },
    {
      period: "2022 – 2026",
      title:
        language === "es"
          ? "BECA DE EXCELENCIA ACADÉMICA DEL 80%"
          : "80% ACADEMIC EXCELLENCE SCHOLARSHIP",
      institution:
        language === "es"
          ? "Universidad de La Sabana · Mérito al Ingreso"
          : "Universidad de La Sabana · Entrance Merit Honor",
      highlight:
        language === "es"
          ? "Beca otorgada por rendimiento académico sobresaliente"
          : "Awarded for top-tier academic merit and technical potential",
      description:
        language === "es"
          ? "Reconocimiento institucional mantenido de forma continua con un promedio acumulado de 4.4 / 5.0."
          : "Continuous institutional honor maintained with a cumulative 4.4 / 5.0 grade point average.",
    },
    {
      period: "2025",
      title:
        language === "es"
          ? "1ER LUGAR — SABANA HACK 2025"
          : "1ST PLACE — SABANA HACK 2025",
      institution:
        language === "es"
          ? "Cruz Roja Colombiana & Unisabana"
          : "Colombian Red Cross & Unisabana",
      highlight:
        language === "es"
          ? "Alertas en Tiempo Real con IA en sprint de 24 horas"
          : "Real-Time AI Alerting System built in 24h sprint",
      description:
        language === "es"
          ? "Diseño e implementación de arquitectura distribuida para triaje de emergencias y procesamiento en tiempo real."
          : "Designed and deployed distributed emergency triage architecture and real-time processing under high demand.",
    },
    {
      period: language === "es" ? "Continuo" : "Ongoing",
      title:
        language === "es"
          ? "BILINGÜISMO & COMPETENCIA TÉCNICA"
          : "BILINGUAL & TECHNICAL EXPERTISE",
      institution:
        language === "es"
          ? "Inglés (B2 Profesional) · Español (Nativo)"
          : "English (B2 Professional) · Spanish (Native)",
      highlight:
        language === "es"
          ? "Comunicación fluida para equipos globales remotos"
          : "Fluent technical communication for global remote teams",
      description:
        language === "es"
          ? "Capacidad de documentación técnica, diseño de especificaciones RFCs y code reviews en inglés."
          : "Proven RFC specification authoring, international code reviews, and remote agile collaboration in English.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* OFFICIAL RESUME HUB (DOWNLOAD BUTTONS) */}
        <div className="p-6 sm:p-7 rounded-[26px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/40 transition-all duration-300 shadow-xl mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8750f7] font-bold">
                ✦ {t.resumeHub.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
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

        {/* STACKED FULL-WIDTH EXPERIENCE & EDUCATION SECTIONS */}
        <div className="space-y-16 sm:space-y-20 text-left">
          {/* SECTION 1: MY EXPERIENCE (FULL WIDTH) */}
          <div>
            {/* Column Header with Gerold's Badge/Award Icon */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="text-[#8750f7]">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "es" ? "Mi Experiencia" : "My Experience"}
              </h3>
            </div>

            {/* Experience Cards - Single Full-Width Column */}
            <div className="space-y-6">
              {t.roles.map((job, idx) => {
                const isExpanded = expandedRole === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setExpandedRole(isExpanded ? null : idx)}
                    className="p-6 sm:p-7 rounded-[22px] bg-[#140c1c] border border-white/5 hover:border-[#8750f7]/60 hover:bg-gradient-to-r hover:from-[#1b0e30] hover:to-[#140c1c] transition-all duration-300 group cursor-pointer relative shadow-lg"
                  >
                    {/* Time Period in Gerold's Neon Purple */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm sm:text-base font-bold text-[#8750f7] tracking-wide">
                        {job.period}
                      </span>
                      {job.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {t.activeStatus}
                        </span>
                      )}
                    </div>

                    {/* Role Title in Bold Uppercase (Direct from Gerold Screenshot) */}
                    <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase group-hover:text-purple-200 transition-colors mb-1.5 leading-snug">
                      {job.title}
                    </h4>

                    {/* Company and Location */}
                    <p className="text-neutral-400 text-sm font-medium">
                      {job.company}, {job.location}
                    </p>

                    {/* Highlight Metric Badge */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-purple-300/90">
                        ✦ {job.highlightMetric}
                      </span>
                      <span className="text-[11px] font-mono text-[#8750f7] opacity-0 group-hover:opacity-100 transition-opacity">
                        {isExpanded
                          ? language === "es"
                            ? "Cerrar [-]"
                            : "Close [-]"
                          : language === "es"
                          ? "Ver detalles [+]"
                          : "Inspect [+]"}
                      </span>
                    </div>

                    {/* Expandable Architectural Deliverables Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 mt-4 border-t border-white/10 space-y-2.5"
                        >
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {job.description}
                          </p>

                          {job.achievements.map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-neutral-200 leading-relaxed"
                            >
                              <span className="font-mono font-bold text-xs text-[#8750f7] uppercase mr-1.5">
                                [{ach.tag}]
                              </span>
                              {ach.description}
                            </div>
                          ))}

                          {/* Tech Pills */}
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {(job.technologies || []).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/5"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: MY EDUCATION & HONORS (CONDENSED) */}
          <div>
            {/* Column Header with Gerold's Mortarboard Icon */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="text-[#8750f7]">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === "es" ? "Educación & Reconocimientos" : "Education & Honors"}
              </h3>
            </div>

            {/* 4 Condensed Education & Recognition Cards (1 Row on Desktop, 2x2 on Tablet) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {educationItems.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#140c1c] border border-white/5 hover:border-[#8750f7]/60 hover:bg-[#1a0e2a] transition-all duration-300 group flex flex-col justify-between shadow-md"
                >
                  <div>
                    {/* Time Period in Gerold's Neon Purple */}
                    <div className="mb-1.5">
                      <span className="text-xs font-bold text-[#8750f7] tracking-wider font-mono">
                        {edu.period}
                      </span>
                    </div>

                    {/* Title in Bold Uppercase */}
                    <h4 className="text-sm sm:text-[15px] font-extrabold text-white tracking-wide uppercase group-hover:text-purple-200 transition-colors mb-1.5 leading-snug">
                      {edu.title}
                    </h4>

                    {/* Institution */}
                    <p className="text-neutral-400 text-xs font-medium leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Highlight Pill */}
                  <div className="mt-3.5 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono text-purple-300/90 leading-tight block">
                      ✦ {edu.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
