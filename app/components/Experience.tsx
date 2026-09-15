"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  Award,
  GraduationCap,
  Sparkles,
  FileText,
  Terminal,
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
        {/* Impeccable Variants Container for Session 49005009 */}
        <div data-impeccable-variants="49005009" data-impeccable-variant-count="3" style={{ display: "contents" }}>
          {/* impeccable-variants-start 49005009 */}
          {/* Original */}
          <div data-impeccable-variant="original" style={{ display: "none" }}>
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
          </div>
          {/* Variants: insert below this line */}

          {/* VARIANT 1: Dual Document Cards (Side-by-Side ATS Cards) */}
          <div data-impeccable-variant="1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 text-left">
              {/* Card 1: Español */}
              <div className="p-6 rounded-[22px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 hover:bg-[#180e26] transition-all duration-300 shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-purple-950/50 text-[#8750f7] border border-purple-800/40">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                        {language === "es" ? "Curriculum Vitae (ES)" : "Curriculum Vitae (ES)"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ATS Ready · 1 Page
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-white tracking-wide mb-1.5 group-hover:text-purple-200 transition-colors">
                    {language === "es" ? "Hoja de Vida Oficial (Español)" : "Official CV (Spanish)"}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                    {language === "es"
                      ? "Formato monocolumna optimizado para ATS, métricas de impacto Google XYZ y verificación técnica."
                      : "Single-column ATS-optimized CV built with Google's XYZ formula and verified technical achievements."}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-neutral-400">PDF · DOCX</span>
                  <div className="inline-flex rounded-full overflow-hidden border border-[#8750f7]/50 shadow-md">
                    <button
                      onClick={() => handleAction("cv", "download")}
                      className="flex items-center gap-2 px-4 py-2 bg-[#8750f7] hover:bg-[#7435f5] text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.resumeHub.downloadCv}</span>
                    </button>
                    <button
                      onClick={() => handleAction("cv", "preview")}
                      aria-label="Preview CV"
                      className="flex items-center justify-center px-3 py-2 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: English */}
              <div className="p-6 rounded-[22px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 hover:bg-[#180e26] transition-all duration-300 shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-purple-950/50 text-[#a855f7] border border-purple-800/40">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                        {language === "es" ? "Professional Resume (EN)" : "Professional Resume (EN)"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      ATS Compliant · 1 Page
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-white tracking-wide mb-1.5 group-hover:text-purple-200 transition-colors">
                    {language === "es" ? "Resume Oficial en Inglés" : "Official Technical Resume"}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                    {language === "es"
                      ? "Diseñado para reclutadores internacionales y equipos globales remotos. Nivel B2 profesional."
                      : "Designed for international recruiters, engineering managers, and global remote teams. Professional B2."}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-neutral-400">PDF · DOCX</span>
                  <div className="inline-flex rounded-full overflow-hidden border border-[#8750f7]/50 shadow-md">
                    <button
                      onClick={() => handleAction("resume", "download")}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8750f7] to-[#a855f7] hover:brightness-110 text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.resumeHub.downloadResume}</span>
                    </button>
                    <button
                      onClick={() => handleAction("resume", "preview")}
                      aria-label="Preview Resume"
                      className="flex items-center justify-center px-3 py-2 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VARIANT 2: Minimalist Integrated Header Bar (Ultra-clean Floating Toolbar) */}
          <div data-impeccable-variant="2" style={{ display: "none" }}>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#140c1c]/90 border border-white/10 hover:border-[#8750f7]/40 transition-all duration-300 shadow-xl mb-16 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8750f7] font-bold">
                      ✦ {t.resumeHub.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5">
                      ATS Verified
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-snug mt-0.5">
                    {t.resumeHub.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {/* CV Español */}
                <div className="inline-flex rounded-full overflow-hidden border border-white/10 shadow-md">
                  <button
                    onClick={() => handleAction("cv", "download")}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#8750f7] hover:bg-[#7435f5] text-white font-medium text-xs transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CV (ES)</span>
                  </button>
                  <button
                    onClick={() => handleAction("cv", "preview")}
                    aria-label="Preview CV"
                    className="flex items-center justify-center px-2.5 py-2 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-white/10 text-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Resume English */}
                <div className="inline-flex rounded-full overflow-hidden border border-white/10 shadow-md">
                  <button
                    onClick={() => handleAction("resume", "download")}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#8750f7] to-[#a855f7] hover:brightness-110 text-white font-medium text-xs transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Resume (EN)</span>
                  </button>
                  <button
                    onClick={() => handleAction("resume", "preview")}
                    aria-label="Preview Resume"
                    className="flex items-center justify-center px-2.5 py-2 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-white/10 text-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* VARIANT 3: Engineering Console / Terminal Tech Box */}
          <div data-impeccable-variant="3" style={{ display: "none" }}>
            <div className="p-5 sm:p-6 rounded-[22px] bg-[#120a1a] border border-[#8750f7]/30 hover:border-[#8750f7]/60 transition-all duration-300 shadow-2xl mb-16 font-mono text-left relative overflow-hidden">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-neutral-400 ml-2 font-mono">
                    ~/jhojan/credentials-vault // ats_monocolumn_v2.4
                  </span>
                </div>
                <span className="text-[10px] text-[#8750f7] bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
                  STATUS: VERIFIED
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-purple-300 mb-1">
                    <Terminal className="w-3.5 h-3.5 text-[#8750f7]" />
                    <span className="font-bold">curl -O https://dev.jhojan.cloud/resume</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-xl font-sans">
                    {language === "es"
                      ? "Documentos oficiales de 1 página estricta, monocolumna, sin tablas complejas y 100% compatibles con sistemas ATS corporativos."
                      : "Strict 1-page, single-column documents built for high ATS-compatibility and engineering leadership review."}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0 font-sans">
                  {/* CV Español */}
                  <div className="inline-flex rounded-xl overflow-hidden border border-[#8750f7]/40 shadow-md">
                    <button
                      onClick={() => handleAction("cv", "download")}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#8750f7] hover:bg-[#7435f5] text-white font-semibold text-xs transition-all cursor-pointer font-mono"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>CV_ES.pdf</span>
                    </button>
                    <button
                      onClick={() => handleAction("cv", "preview")}
                      aria-label="Preview CV"
                      className="flex items-center justify-center px-3 py-2.5 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Resume English */}
                  <div className="inline-flex rounded-xl overflow-hidden border border-[#8750f7]/40 shadow-md">
                    <button
                      onClick={() => handleAction("resume", "download")}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#8750f7] to-[#a855f7] hover:brightness-110 text-white font-semibold text-xs transition-all cursor-pointer font-mono"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>RESUME_EN.pdf</span>
                    </button>
                    <button
                      onClick={() => handleAction("resume", "preview")}
                      aria-label="Preview Resume"
                      className="flex items-center justify-center px-3 py-2.5 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* impeccable-variants-end 49005009 */}
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
