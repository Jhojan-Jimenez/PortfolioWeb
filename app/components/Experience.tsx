"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  Award,
  Workflow,
  GraduationCap,
  ChevronDown,
  Briefcase,
  Building2,
  Activity,
  ShoppingCart,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].experience;

  // Unified Hybrid Timeline + Console State (Active locked role & temporary hover preview)
  const [activeRole, setActiveRole] = useState<number>(0);
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  const roleIcons = [Building2, Workflow, Activity, ShoppingCart];


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
    <section id="experience" className="py-24 sm:py-32 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* CLEAN OFFICIAL DOCUMENTS HUB */}
        <div id="resume-hub" className="mb-20 scroll-mt-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t.resumeHub.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.resumeHub.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* CV Español (Blue Segmented Pill) */}
              <div className="flex items-stretch justify-center border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg shadow-blue-600/10">
                <motion.button
                  onClick={() => handleAction("cv", "download")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.resumeHub.downloadCv}</span>
                </motion.button>

                <motion.button
                  onClick={() => handleAction("cv", "preview")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Preview CV"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-black/40 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-200 border-l-2 border-blue-600 text-sm sm:text-base font-medium cursor-pointer"
                >
                  <Eye className="w-5 h-5" />
                  <span>{t.resumeHub.preview}</span>
                </motion.button>
              </div>

              {/* Resume English (Green Segmented Pill) */}
              <div className="flex items-stretch justify-center border-2 border-green-600 rounded-lg overflow-hidden shadow-lg shadow-green-600/10">
                <motion.button
                  onClick={() => handleAction("resume", "download")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.resumeHub.downloadResume}</span>
                </motion.button>

                <motion.button
                  onClick={() => handleAction("resume", "preview")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Preview Resume"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-black/40 text-green-400 hover:bg-green-600 hover:text-white transition-all duration-200 border-l-2 border-green-600 text-sm sm:text-base font-medium cursor-pointer"
                >
                  <Eye className="w-5 h-5" />
                  <span>{t.resumeHub.preview}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2">
              {t.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t.title} {t.titleItalic}
            </h2>
          </div>
          <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* HIGHLIGHT BANNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {t.highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-950/30 transition-all duration-300 shadow-xl flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-white tracking-tight">{h.title}</h4>
                    <span className="text-[11px] font-mono text-purple-300 font-semibold">
                      · {h.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* PROGRESSIVE SMART ACCORDION (DESPLEGABLES) — UNIFIED RESPONSIVE TIMELINE    */}
        {/* ========================================================================= */}
        {/* HYBRID TIMELINE + CAREER CONSOLE (HOVER & CLICK INSPECTOR)                */}
        {/* ========================================================================= */}
        <div className="mb-16">
          {/* Section Subtitle / Instructions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1 mb-6 pb-3 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                {language === "es"
                  ? "Cronología Técnica e Inspector de Arquitectura"
                  : "Technical Timeline & Architecture Inspector"}
              </span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              {language === "es"
                ? "Pasa el cursor o haz clic en cualquier rol para inspeccionar sus métricas y arquitectura"
                : "Hover or click any role to inspect live metrics & system architecture"}
            </span>
          </div>

          {/* DESKTOP VIEW (lg+): SPLIT TIMELINE + STICKY CONSOLE */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: CONNECTED TIMELINE */}
            <div className="lg:col-span-5 relative">
              {/* Continuous vertical glowing timeline spine */}
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500/70 to-purple-900/30" />

              <div className="space-y-4">
                {t.roles.map((job, idx) => {
                  const isSelected = activeRole === idx;
                  const isHovered = hoveredRole === idx;
                  const isActive = isHovered || (hoveredRole === null && isSelected);
                  const Icon = roleIcons[idx] || Briefcase;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredRole(idx)}
                      onMouseLeave={() => setHoveredRole(null)}
                      onClick={() => {
                        setActiveRole(idx);
                        setHoveredRole(null);
                      }}
                      className={`relative flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer border select-none ${
                        isActive
                          ? "bg-purple-950/35 border-purple-400 shadow-xl shadow-purple-950/40 translate-x-1"
                          : "bg-[#0c0a14]/80 border-purple-500/20 hover:border-purple-400/40 hover:bg-[#0e0a1a]"
                      }`}
                    >
                      {/* Timeline Node Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 z-10 transition-all duration-200 ${
                          isActive
                            ? "bg-purple-500 text-white border-2 border-purple-300 shadow-[0_0_16px_rgba(168,85,247,0.5)] scale-105"
                            : "bg-purple-950/70 text-purple-300 border border-purple-500/30"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      {/* Basic Info (Default view) */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4 className="text-base font-bold text-white tracking-tight truncate">
                            {job.company}
                          </h4>
                          {job.isCurrent ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {t.activeStatus}
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                              {job.period.split("–")[0].trim()}
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-medium text-purple-300/90 mb-1.5 line-clamp-1">
                          {job.title}
                        </p>

                        <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mb-2">
                          <span>{job.period}</span>
                          <span>·</span>
                          <span>{job.location}</span>
                        </div>

                        {/* Highlight Metric Pill */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/[0.06]">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/50 text-purple-300 border border-purple-500/25 truncate max-w-[240px]">
                            ✦ {job.highlightMetric}
                          </span>
                          <span
                            className={`text-xs font-mono transition-transform duration-200 ${
                              isActive
                                ? "text-purple-300 translate-x-1 font-bold"
                                : "text-neutral-500"
                            }`}
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: STICKY ENGINEERING CONSOLE (REVEALS ON HOVER / CLICK) */}
            <div className="lg:col-span-7 sticky top-24">
              {(() => {
                const effectiveIdx =
                  hoveredRole !== null ? hoveredRole : activeRole;
                const job = t.roles[effectiveIdx] || t.roles[0];
                const Icon = roleIcons[effectiveIdx] || Briefcase;

                return (
                  <div className="rounded-2xl bg-[#0c0a14]/95 border border-purple-500/30 p-6 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
                    {/* Console Header Bar */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[10px] font-mono text-neutral-400 ml-2 tracking-wider">
                          SYSTEM::CONSOLE // NODE_{effectiveIdx + 1}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/25 font-semibold">
                        {hoveredRole !== null ? "PREVIEW [HOVER]" : "LOCKED [CLICK]"}
                      </span>
                    </div>

                    {/* Animated Console Body */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={effectiveIdx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        {/* Company & Role Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                              <Icon className="w-6 h-6 stroke-[1.75]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-white tracking-tight">
                                  {job.company}
                                </h3>
                                {job.isCurrent && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                    {t.activeStatus}
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-purple-300 font-medium">
                                {job.title}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-mono text-white block font-semibold">
                              {job.period}
                            </span>
                            <span className="text-[11px] font-mono text-neutral-400">
                              {job.location} · {job.roleType}
                            </span>
                          </div>
                        </div>

                        {/* 3 Prominent Impact Metric Cards */}
                        <div className="grid grid-cols-3 gap-3">
                          {job.impactMetrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-3 rounded-xl bg-purple-950/25 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                            >
                              <span className="text-[10px] font-mono text-purple-300 uppercase block font-semibold truncate">
                                {m.label}
                              </span>
                              <span className="text-base sm:text-lg font-mono font-bold text-white block mt-0.5">
                                {m.value}
                              </span>
                              <span className="text-[11px] text-neutral-300 block mt-1 leading-snug line-clamp-2">
                                {m.detail}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Executive Summary */}
                        <div>
                          <h4 className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold mb-1.5">
                            {t.summaryLabel}
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Architectural Deliverables */}
                        <div>
                          <h4 className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold mb-2">
                            {t.deliverablesLabel}
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements.map((ach, aIdx) => (
                              <li
                                key={aIdx}
                                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/15 text-xs text-neutral-200 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                                <div>
                                  <span className="font-mono font-bold text-[10px] text-purple-300 uppercase mr-1.5">
                                    [{ach.tag}]
                                  </span>
                                  {ach.description}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Verified Technologies */}
                        <div className="pt-3 border-t border-white/[0.08]">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block mb-2">
                            {t.verifiedTechLabel}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {job.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-0.5 rounded-full text-xs font-medium text-neutral-200 bg-purple-950/40 border border-purple-500/25"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* MOBILE VIEW (<lg): CONNECTED TIMELINE WITH INLINE CONSOLE EXPANSION ON TAP */}
          <div className="lg:hidden relative">
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500/70 to-purple-900/30" />

            <div className="space-y-4">
              {t.roles.map((job, idx) => {
                const isOpen = activeRole === idx;
                const Icon = roleIcons[idx] || Briefcase;

                return (
                  <div
                    key={idx}
                    className={`relative rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0c0a14]/95 border-purple-500/40 shadow-xl shadow-purple-950/30"
                        : "bg-[#0c0a14]/80 border-purple-500/20"
                    }`}
                  >
                    {/* Basic Info (Tap to toggle console details) */}
                    <button
                      type="button"
                      onClick={() => setActiveRole(isOpen ? -1 : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-start gap-3.5 cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 transition-all ${
                          isOpen
                            ? "bg-purple-500 text-white border border-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                            : "bg-purple-950/60 text-purple-300 border border-purple-500/20"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4 className="text-base font-bold text-white tracking-tight truncate">
                            {job.company}
                          </h4>
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform ${
                              isOpen
                                ? "bg-purple-600 text-white rotate-180"
                                : "bg-purple-950/50 text-neutral-400 border border-purple-500/20"
                            }`}
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <p className="text-xs text-purple-300 font-medium mb-1">
                          {job.title}
                        </p>
                        <p className="text-[11px] font-mono text-neutral-400 mb-2">
                          {job.period} · {job.location}
                        </p>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/40 text-purple-300 border border-purple-500/20 line-clamp-1">
                          ✦ {job.highlightMetric}
                        </span>
                      </div>
                    </button>

                    {/* Expanded Mobile Console Details */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden border-t border-white/[0.08] px-4 sm:px-5 pb-5 pt-3 space-y-4"
                        >
                          {/* 3 Metric cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                            {job.impactMetrics.map((m, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20"
                              >
                                <span className="text-[9px] font-mono text-purple-300 uppercase block font-semibold truncate">
                                  {m.label}
                                </span>
                                <span className="text-sm font-mono font-bold text-white block">
                                  {m.value}
                                </span>
                                <span className="text-[10px] text-neutral-300 block truncate">
                                  {m.detail}
                                </span>
                              </div>
                            ))}
                          </div>

                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {job.description}
                          </p>

                          {/* Architectural deliverables */}
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block">
                              {t.deliverablesLabel}
                            </span>
                            {job.achievements.map((ach, aIdx) => (
                              <div
                                key={aIdx}
                                className="p-2 rounded-lg bg-purple-950/20 border border-purple-500/15 text-[11px] text-neutral-200 leading-relaxed"
                              >
                                <span className="font-mono font-bold text-[9px] text-purple-300 uppercase mr-1">
                                  [{ach.tag}]
                                </span>
                                {ach.description}
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="pt-2 border-t border-white/[0.06]">
                            <div className="flex flex-wrap gap-1">
                              {job.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded-full text-[11px] text-neutral-200 bg-purple-950/40 border border-purple-500/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ACADEMIC BACKGROUND */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-950/30 transition-all duration-300 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <GraduationCap className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300 mb-0.5 block">
                {t.education.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.education.degree}
              </h3>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <p className="text-xs sm:text-sm font-mono text-neutral-300">
              {t.education.institution} · {t.education.location}
            </p>
            <span className="text-xs font-mono text-neutral-400">
              {t.education.period}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-purple-950/40 text-purple-200 border border-purple-500/30 font-medium inline-flex items-center gap-1.5">
              <span>★</span> {t.education.scholarship}
            </span>
            <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-purple-950/30 text-neutral-200 border border-purple-500/20 font-medium">
              {t.education.gpa}
            </span>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            {t.education.details}
          </p>
        </div>
      </div>
    </section>
  );
}
