"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  Github,
  Terminal,
  ShoppingBag,
  Zap,
  LayoutDashboard,
  LineChart,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getLocalizedProjects, getLocalizedProject } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";
import ProjectEvidenceInspector from "./ProjectEvidenceInspector";

const DEMO_ICONS = [ShoppingBag, Zap, LayoutDashboard, LineChart];

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [copiedCmdIdx, setCopiedCmdIdx] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const modalRef = useRef<HTMLDivElement>(null);

  const copyCommand = (cmd: string, idx: number) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cmd);
      setCopiedCmdIdx(idx);
      setTimeout(() => setCopiedCmdIdx(null), 2000);
    }
  };

  const projects = getLocalizedProjects(language);
  const selectedProject = selectedSlug ? getLocalizedProject(selectedSlug, language) || null : null;

  const topProjects = projects.slice(0, 2);
  const bottomProjects = projects.slice(2, 5);

  // Keyboard navigation & accessibility focus trap when modal is open
  useEffect(() => {
    if (!selectedSlug) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSlug(null);
        return;
      }

      // Cycle projects via ArrowLeft / ArrowRight
      if (e.key === "ArrowLeft") {
        const currentIdx = projects.findIndex((p) => p.slug === selectedSlug);
        if (currentIdx > 0) {
          setSelectedSlug(projects[currentIdx - 1].slug);
        }
        return;
      }

      if (e.key === "ArrowRight") {
        const currentIdx = projects.findIndex((p) => p.slug === selectedSlug);
        if (currentIdx < projects.length - 1) {
          setSelectedSlug(projects[currentIdx + 1].slug);
        }
        return;
      }

      // Focus trap for accessibility
      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length > 0) {
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSlug, projects]);

  // Auto-focus modal close button on open
  useEffect(() => {
    if (selectedSlug && modalRef.current) {
      const closeBtn = modalRef.current.querySelector<HTMLElement>("button");
      if (closeBtn) closeBtn.focus();
    }
  }, [selectedSlug]);

  // Lock body scroll and hide header when modal is open
  useEffect(() => {
    if (selectedSlug) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [selectedSlug]);

  return (
    <section id="projects" className="pt-6 sm:pt-10 pb-24 sm:pb-32 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER: "My Recent Projects" (MATCHING REFERENCE DESIGN) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181d] border border-[#7F1DFF]/30 text-purple-200 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFEB34] animate-pulse" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {language === "es" ? "Mis Proyectos Recientes" : "My Recent Projects"}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="font-semibold text-neutral-200">{t.countLabel}</span>
            <div className="h-1 w-1 rounded-full bg-neutral-600" />
            <span className="text-neutral-400">{t.clickToExpand}</span>
          </div>
        </div>

        {/* TOP ROW: 2 PROJECTS (WIDE SHOWCASE) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedSlug(project.slug)}
              className="group relative cursor-pointer rounded-3xl bg-[#18181d]/90 backdrop-blur-xl border border-white/10 hover:border-[#7F1DFF]/40 hover:shadow-2xl hover:shadow-[#7F1DFF]/20 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-xl text-left"
            >
              <div>
                {/* Visual Preview Frame */}
                <div className="relative aspect-[1920/910] w-full rounded-2xl overflow-hidden bg-[#131313] border border-white/10 mb-5 shadow-inner">
                  {project.clusterStatus && (
                    <div className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#131313]/90 backdrop-blur-md border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-lg">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span>
                        {project.clusterStatus.badgeText.includes("k3s")
                          ? "Live on k3s"
                          : "Live on VPS"}
                      </span>
                    </div>
                  )}
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top filter contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Metadata Header */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#D46F88]">
                    {project.category}
                  </span>
                  <span className="text-neutral-400">{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-neutral-300 text-sm font-normal leading-relaxed line-clamp-2 mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Footer: Technologies & CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono text-neutral-200 bg-[#131313] border border-white/10 group-hover:border-[#7F1DFF]/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-neutral-400 bg-[#131313] border border-white/10">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-neutral-300 group-hover:text-white uppercase font-medium shrink-0">
                  <span className="hidden sm:inline">{t.viewCase}</span>
                  <div className="w-9 h-9 rounded-full bg-[#131313] border border-white/10 text-neutral-300 group-hover:bg-[#7F1DFF] group-hover:text-white group-hover:border-[#7F1DFF] flex items-center justify-center transition-all shadow-md">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW: 3 PROJECTS (BALANCED 3-WIDE GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedSlug(project.slug)}
              className="group relative cursor-pointer rounded-3xl bg-[#18181d]/90 backdrop-blur-xl border border-white/10 hover:border-[#7F1DFF]/40 hover:shadow-2xl hover:shadow-[#7F1DFF]/20 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-xl text-left"
            >
              <div>
                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#131313] border border-white/10 mb-4 shadow-inner">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top filter contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Metadata Header */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#D46F88] truncate">
                    {project.category}
                  </span>
                  <span className="text-neutral-400 text-xs shrink-0">{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2 group-hover:text-purple-200 transition-colors truncate">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2 mb-5">
                  {project.shortDescription}
                </p>
              </div>

              {/* Footer: Technologies & CTA */}
              <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1 max-w-[75%]">
                  {project.technologies.slice(0, 2).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono text-neutral-200 bg-[#131313] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-mono text-neutral-400 bg-[#131313] border border-white/10">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-[#131313] border border-white/10 text-neutral-300 group-hover:bg-[#7F1DFF] group-hover:text-white group-hover:border-[#7F1DFF] flex items-center justify-center transition-all shrink-0 shadow-md">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL-WINDOW EXPANDED CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedSlug(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Container with Focus Trap and Dialog Role */}
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-3xl bg-[#0c0a14] border border-purple-500/25 shadow-2xl shadow-purple-950/50 p-0 text-neutral-100 my-auto"
            >
              <div className="sticky top-0 z-50 px-5 py-3.5 sm:px-8 bg-[#0c0a14] border-b border-purple-500/25 flex items-center justify-between shadow-2xl shadow-black/80 rounded-t-3xl">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedSlug(null)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{language === "es" ? "Volver a proyectos" : "Back to projects"}</span>
                  </button>

                  {/* Project navigation arrows */}
                  <div className="hidden sm:flex items-center gap-1 bg-purple-950/40 border border-purple-500/30 rounded-full p-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        const idx = projects.findIndex((p) => p.slug === selectedSlug);
                        if (idx > 0) setSelectedSlug(projects[idx - 1].slug);
                      }}
                      disabled={projects.findIndex((p) => p.slug === selectedSlug) === 0}
                      aria-label="Previous project"
                      className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-purple-900/50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      title={language === "es" ? "Caso Anterior (←)" : "Previous (←)"}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono text-neutral-400 px-1">
                      {projects.findIndex((p) => p.slug === selectedSlug) + 1}/{projects.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const idx = projects.findIndex((p) => p.slug === selectedSlug);
                        if (idx < projects.length - 1) setSelectedSlug(projects[idx + 1].slug);
                      }}
                      disabled={projects.findIndex((p) => p.slug === selectedSlug) === projects.length - 1}
                      aria-label="Next project"
                      className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-purple-900/50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      title={language === "es" ? "Siguiente Caso (→)" : "Next (→)"}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.gitlabUrl && (
                    <a
                      href={selectedProject.gitlabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-purple-950/40 hover:bg-purple-900/50 text-neutral-300 border border-purple-500/30 transition-colors"
                      title="GitLab Repository"
                    >
                      <Terminal className="w-3.5 h-3.5 text-purple-300" />
                      <span className="hidden sm:inline">GitLab</span>
                    </a>
                  )}

                  {selectedProject.githubUrl && !selectedProject.gitlabUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-purple-950/40 hover:bg-purple-900/50 text-neutral-300 border border-purple-500/30 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5 text-purple-300" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#eae6df] hover:bg-white text-neutral-950 border border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all shadow-md font-mono"
                    >
                      <span>{language === "es" ? "Ver Proyecto" : "Live Demo"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Inner modal content wrapper */}
              <div className="px-5 sm:px-8 pb-8 pt-4">

              {/* Title & Metadata (Reduced top spacing per user request) */}
              <div className="pt-2 sm:pt-3 pb-1 mb-6">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-neutral-400 mb-2.5">
                  <span className="text-purple-300 font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span>•</span>
                  <span>{selectedProject.date}</span>
                  <span>•</span>
                  <span className="text-neutral-300">{selectedProject.role}</span>
                </div>

                <h2 id="modal-project-title" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-2.5">
                  {selectedProject.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-3xl">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* PRIMARY VISUAL SHOWCASE & EVIDENCE INSPECTOR */}
              <div className="mb-8">
                <ProjectEvidenceInspector
                  evidenceList={selectedProject.evidenceGallery || []}
                  defaultHeroImage={selectedProject.heroImage}
                  projectTitle={selectedProject.title}
                  liveUrl={selectedProject.liveUrl}
                />
              </div>

              {/* INTERACTIVE LIVE DEMOS / INSPECTION ENDPOINTS */}
              {selectedProject.liveDemos && selectedProject.liveDemos.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold">
                      {language === "es"
                        ? "Puntos de Inspección Interactivos (Live Demos)"
                        : "Interactive Live Inspection Endpoints"}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {selectedProject.liveDemos.map((demo, dIdx) => {
                      const IconComponent = DEMO_ICONS[dIdx % DEMO_ICONS.length] || ArrowUpRight;
                      return (
                        <a
                          key={dIdx}
                          href={demo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-4 rounded-2xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2.5">
                              <div className="w-7 h-7 rounded-lg bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white transition-colors">
                                <IconComponent className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-medium">
                                {demo.badge}
                              </span>
                            </div>
                            <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-1.5 flex items-center gap-1">
                              <span>{demo.label}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </h4>
                            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                              {demo.description}
                            </p>
                          </div>
                          <div className="mt-3 pt-2.5 border-t border-purple-500/10 text-xs font-mono text-purple-400 group-hover:text-purple-300 flex items-center gap-1 font-medium">
                            <span>{language === "es" ? "Abrir endpoint" : "Launch endpoint"}</span>
                            <span>→</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Metrics */}
              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.49, duration: 0.38, ease: "easeOut" }}
                  className="mb-10"
                >
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                    {t.modal.metrics}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20"
                      >
                        <span className="text-xs font-mono uppercase text-purple-300 font-semibold block mb-1">
                          {m.label}
                        </span>
                        <span className="text-2xl font-bold font-mono text-white block mb-1">
                          {m.value}
                        </span>
                        <p className="text-xs text-neutral-300 font-normal leading-snug">
                          {m.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.56, duration: 0.38, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                    <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-bold block mb-2">
                      01 / {language === "es" ? "EL DESAFÍO" : "THE CHALLENGE"}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      {selectedProject.problem.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-4">
                      {selectedProject.problem.summary}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-purple-500/20">
                      {selectedProject.problem.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                    <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-bold block mb-2">
                      02 / {language === "es" ? "SOLUCIÓN DE ARQUITECTURA" : "ARCHITECTURE SOLUTION"}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      {selectedProject.solution.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-4">
                      {selectedProject.solution.summary}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-purple-500/20">
                      {selectedProject.solution.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* THE SENIOR FACTOR: ARCHITECTURAL DECISIONS */}
                {selectedProject.architecture?.decisions && selectedProject.architecture.decisions.length > 0 && (
                  <div className="mb-10">
                    <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-bold block">
                          03 / {language === "es" ? "DECISIONES DE ARQUITECTURA (THE SENIOR FACTOR)" : "ARCHITECTURAL DECISIONS (THE SENIOR FACTOR)"}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/30">
                          Production-Grade
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {selectedProject.architecture.title}
                      </h4>
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-6">
                        {selectedProject.architecture.summary}
                      </p>

                      <div className="space-y-4">
                        {selectedProject.architecture.decisions.map((dec, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/15 hover:border-purple-500/30 transition-all"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center justify-center font-bold">
                                  {String.fromCharCode(65 + dIdx)}
                                </span>
                                <h5 className="text-sm font-semibold text-white">
                                  {dec.title}
                                </h5>
                              </div>
                              <span className="text-xs font-mono text-purple-300 px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/20">
                                {dec.choice}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-300 leading-relaxed pl-7">
                              <span className="text-neutral-400 font-mono text-xs uppercase mr-1.5 font-medium">
                                {language === "es" ? "El valor:" : "The value:"}
                              </span>
                              {dec.why}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* QUICK TECHNICAL INSPECTION GUIDE (CURL) */}
                {selectedProject.inspectionCommands && selectedProject.inspectionCommands.length > 0 && (
                  <div className="mb-10">
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#080512] border border-purple-500/30 shadow-2xl">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/20">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 mr-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <Terminal className="w-4 h-4 text-purple-400" />
                          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
                            {language === "es"
                              ? "Guía Rápida de Inspección Técnica (Terminal)"
                              : "Quick Technical Inspection Guide (Terminal)"}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                          bash / zsh
                        </span>
                      </div>

                      <p className="text-xs text-neutral-300 mb-5 font-normal leading-relaxed">
                        {language === "es"
                          ? "Si eres Tech Lead, Reclutador o Arquitecto Senior, puedes auditar los endpoints y la infraestructura directamente desde tu terminal:"
                          : "If you are a Tech Lead, Recruiter, or Senior Architect, you can audit the endpoints and infrastructure directly from your terminal:"}
                      </p>

                      <div className="space-y-4">
                        {selectedProject.inspectionCommands.map((cmd, cIdx) => (
                          <div key={cIdx} className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono text-purple-300 font-semibold">
                                {cIdx + 1}. {cmd.title}
                              </span>
                              <button
                                onClick={() => copyCommand(cmd.command, cIdx)}
                                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-white px-2.5 py-1 rounded-md bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 transition-colors cursor-pointer"
                              >
                                {copiedCmdIdx === cIdx ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">{language === "es" ? "Copiado" : "Copied"}</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>{language === "es" ? "Copiar" : "Copy"}</span>
                                  </>
                                )}
                              </button>
                            </div>
                            {cmd.description && (
                              <p className="text-xs text-neutral-400 font-mono">
                                {cmd.description}
                              </p>
                            )}
                            <pre className="p-3.5 rounded-xl bg-black/60 border border-purple-500/20 text-xs font-mono text-neutral-200 overflow-x-auto selection:bg-purple-800">
                              <code>{cmd.command}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies & CTA */}
                <div className="pt-6 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200 bg-purple-950/30 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedSlug(null)}
                    className="px-6 py-2.5 rounded-full bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-neutral-200 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    ← {language === "es" ? "VOLVER A PROYECTOS" : "BACK TO GRID"}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        )}
      </AnimatePresence>
    </section>
  );
}
