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

          {/* SECTION 2: MY EDUCATION & HONORS (CONDENSED SINGLE ITEM) */}
          <div>
            {/* Column Header with Gerold's Mortarboard Icon */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="text-[#8750f7]">
                <GraduationCap className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "es" ? "Mi Educación" : "My Education"}
              </h3>
            </div>

            {/* Impeccable Variants Container for Session 0e8d5973 */}
            <div className="p-6 sm:p-7 rounded-[22px] bg-[#140c1c] border border-[#8750f7]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#8750f7] tracking-wide font-mono">
                    2022 – 2026
                  </span>
                  <span className="text-neutral-500 text-xs">·</span>
                  <span className="text-xs font-mono text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40">
                    GPA 4.4 / 5.0
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white uppercase tracking-tight leading-tight">
                  {language === "es"
                    ? "Ingeniería Informática / Computational Science"
                    : "B.S. in Computer Science & Informatics"}
                </h4>
                <p className="text-neutral-400 text-sm font-medium">
                  Universidad de La Sabana
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                  {language === "es"
                    ? "Énfasis de carrera en Arquitectura de Software, Almacenamiento Vectorial y Sistemas Distribuidos de alta concurrencia."
                    : "Degree emphasis on Software Architecture, Vector Storage, and High-Concurrency Distributed Systems."}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-2.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
                <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-white">
                      {language === "es" ? "Beca de Excelencia 80%" : "80% Academic Scholarship"}
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      {language === "es" ? "Mérito académico continuo" : "Continuous entrance merit"}
                    </div>
                  </div>
                  <span className="text-xs text-[#8750f7]">🎓</span>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-white">
                      {language === "es" ? "1er Lugar Sabana Hack" : "1st Place Sabana Hack"}
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      {language === "es" ? "Cruz Roja · Alertas IA 24h" : "Red Cross · Real-time AI alerts"}
                    </div>
                  </div>
                  <span className="text-xs text-[#8750f7]">🏆</span>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-white">
                      {language === "es" ? "Bilingüe Inglés (B2) / Español" : "Bilingual English (B2) / Spanish"}
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      {language === "es" ? "Comunicación técnica fluida" : "Fluent technical communication"}
                    </div>
                  </div>
                  <span className="text-xs text-[#8750f7]">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
