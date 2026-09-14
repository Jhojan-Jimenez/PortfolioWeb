"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ExternalLink,
} from "lucide-react";
import { getLocalizedProjects, getLocalizedProject } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";
import ProjectEvidenceInspector from "./ProjectEvidenceInspector";

const DEMO_ICONS = [ShoppingBag, Zap, LayoutDashboard, LineChart];

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
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
  const selectedProject = selectedSlug
    ? getLocalizedProject(selectedSlug, language) || null
    : null;

  // Filter categories
  const categories = [
    { id: "all", label: language === "es" ? "Todos" : "All" },
    { id: "cloud", label: "Cloud & K8s" },
    { id: "ai", label: "Applied AI" },
    { id: "backend", label: "Backend & Systems" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "cloud") {
      return (
        p.slug === "gazu" ||
        p.category.toLowerCase().includes("cloud") ||
        p.category.toLowerCase().includes("kubernetes")
      );
    }
    if (activeFilter === "ai") {
      return (
        p.slug === "talentmatch" ||
        p.category.toLowerCase().includes("ai") ||
        p.category.toLowerCase().includes("vector")
      );
    }
    if (activeFilter === "backend") {
      return (
        p.slug === "wheelus" ||
        p.slug === "vaccine-cdss" ||
        p.slug === "mercedes-gt3"
      );
    }
    return true;
  });

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
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSlug, projects]);

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
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* GEROLD'S CENTERED SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140c1c] border border-[#8750f7]/40 text-purple-200 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(135,80,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#8750f7] animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              {language === "es" ? "Mis Proyectos Recientes" : "My Recent Works"}
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Arquitecturas en producción, microservicios distribuidos y pipelines de IA de alta concurrencia diseñados con código auditable y reproducibilidad estricta."
              : "Production architectures, distributed microservices, and high-concurrency AI systems engineered with verified uptime and deterministic benchmarks."}
          </p>
        </div>

        {/* GEROLD'S CATEGORY FILTER BAR */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-[#140c1c] border border-white/10 shadow-lg">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#8750f7] text-white shadow-[0_0_20px_rgba(135,80,247,0.5)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GEROLD'S 2-COLUMN PROJECT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedSlug(project.slug)}
              className="group cursor-pointer rounded-[32px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/70 hover:shadow-2xl hover:shadow-[#8750f7]/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0410]">
                {project.heroImage ? (
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-top filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a0b2e] to-[#0f0715] text-purple-300 font-mono text-sm">
                    {project.title}
                  </div>
                )}

                {/* Ambient dark gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140c1c] via-[#140c1c]/20 to-transparent pointer-events-none" />

                {/* Category badge */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#140c1c]/90 border border-white/15 backdrop-blur-md text-[11px] font-mono font-semibold text-purple-200 shadow-md">
                  {project.category}
                </div>

                {/* Highlight metric badge */}
                <div className="absolute bottom-4 left-5 px-3 py-1 rounded-full bg-[#8750f7]/20 border border-[#8750f7]/40 backdrop-blur-md text-xs font-mono font-bold text-white shadow-lg">
                  ✦ {project.metrics?.[0]?.value || "Production"} · {project.metrics?.[0]?.label || "Ready"}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Gerold Diagonal Arrow Button */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8750f7] transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    {/* Signature Gerold Arrow Circle Button */}
                    <div className="w-11 h-11 rounded-full bg-[#1c102b] group-hover:bg-[#8750f7] border border-[#8750f7]/40 text-[#8750f7] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-md">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech pills & Action link footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {(project.technologies || []).slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono text-neutral-300 bg-white/5 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#8750f7] group-hover:underline">
                    {language === "es" ? "Inspeccionar Caso →" : "Inspect Case →"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL-WINDOW EXPANDED CASE STUDY MODAL (GEROLD STYLED) */}
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

            {/* Modal Container */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-[32px] bg-[#0f0715] border border-[#8750f7]/40 shadow-2xl shadow-purple-950/60 p-0 text-neutral-100 my-auto"
            >
              {/* Sticky Top Nav Bar */}
              <div className="sticky top-0 z-50 px-5 py-3.5 sm:px-8 bg-[#140c1c]/95 border-b border-white/10 backdrop-blur-md flex items-center justify-between shadow-2xl rounded-t-[32px]">
                <button
                  onClick={() => setSelectedSlug(null)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white px-4 py-2 rounded-full bg-white/5 hover:bg-[#8750f7]/20 border border-white/10 hover:border-[#8750f7]/50 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{language === "es" ? "Volver a proyectos" : "Back to projects"}</span>
                </button>

                <div className="flex items-center gap-2.5">
                  {selectedProject.gitlabUrl && (
                    <a
                      href={selectedProject.gitlabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#140c1c] hover:bg-[#8750f7]/20 text-neutral-300 border border-white/10 hover:border-[#8750f7]/50 transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#140c1c] hover:bg-[#8750f7]/20 text-neutral-300 border border-white/10 hover:border-[#8750f7]/50 transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-[#8750f7] hover:bg-[#7435f5] text-white shadow-[0_0_20px_rgba(135,80,247,0.4)] transition-all cursor-pointer font-mono"
                    >
                      <span>{language === "es" ? "Ver Proyecto" : "Live Demo"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Inner modal content */}
              <div className="px-5 sm:px-8 pb-10 pt-6 text-left">
                {/* Title & Metadata */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-neutral-400 mb-2">
                    <span className="text-[#8750f7] font-bold uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span>•</span>
                    <span>{selectedProject.date}</span>
                    <span>•</span>
                    <span className="text-neutral-300">{selectedProject.role}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    {selectedProject.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* PRIMARY VISUAL SHOWCASE & EVIDENCE INSPECTOR */}
                <div className="mb-8">
                  <ProjectEvidenceInspector
                    evidenceList={selectedProject.evidenceGallery || []}
                    defaultHeroImage={selectedProject.heroImage || ""}
                    projectTitle={selectedProject.title}
                    liveUrl={selectedProject.liveUrl}
                  />
                </div>

                {/* INTERACTIVE LIVE DEMOS */}
                {selectedProject.liveDemos && selectedProject.liveDemos.length > 0 && (
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#8750f7] animate-pulse" />
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
                            className="group p-4 rounded-2xl bg-[#140c1c] hover:bg-[#1a0f26] border border-white/10 hover:border-[#8750f7]/60 transition-all flex flex-col justify-between shadow-md"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2.5">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#8750f7]/20 text-purple-200 border border-[#8750f7]/30">
                                  {demo.badge}
                                </span>
                                <IconComponent className="w-4 h-4 text-neutral-400 group-hover:text-purple-300 transition-colors" />
                              </div>
                              <h4 className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                                {demo.label}
                              </h4>
                              <p className="text-[11px] text-neutral-400 leading-snug">
                                {demo.description}
                              </p>
                            </div>
                            <div className="mt-3 pt-2.5 border-t border-white/10 text-xs font-mono text-[#8750f7] group-hover:text-purple-300 flex items-center gap-1 font-medium">
                              <span>{language === "es" ? "Abrir endpoint" : "Launch endpoint"}</span>
                              <span>→</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* KEY PERFORMANCE & ENGINEERING METRICS */}
                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
                      {t.modal.metrics}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {selectedProject.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-4 rounded-2xl bg-[#140c1c] border border-white/10"
                        >
                          <span className="text-xs font-mono uppercase text-[#8750f7] font-semibold block mb-1">
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
                  </div>
                )}

                {/* PROBLEM & ARCHITECTURAL SOLUTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="p-6 rounded-[24px] bg-[#140c1c] border border-white/10">
                    <span className="text-xs font-mono tracking-widest uppercase text-[#8750f7] font-bold block mb-2">
                      01 / {language === "es" ? "EL DESAFÍO" : "THE CHALLENGE"}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      {selectedProject.problem.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-4">
                      {selectedProject.problem.summary}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-white/10">
                      {selectedProject.problem.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8750f7] mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-[24px] bg-[#140c1c] border border-white/10">
                    <span className="text-xs font-mono tracking-widest uppercase text-[#8750f7] font-bold block mb-2">
                      02 / {language === "es" ? "SOLUCIÓN DE ARQUITECTURA" : "ARCHITECTURE SOLUTION"}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      {selectedProject.solution.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-4">
                      {selectedProject.solution.summary}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-white/10">
                      {selectedProject.solution.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8750f7] mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* THE SENIOR FACTOR: ARCHITECTURAL DECISIONS */}
                {selectedProject.architecture?.decisions && selectedProject.architecture.decisions.length > 0 && (
                  <div className="mb-10">
                    <div className="p-6 rounded-[24px] bg-[#140c1c] border border-white/10">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono tracking-widest uppercase text-[#8750f7] font-bold block">
                          03 / {language === "es" ? "DECISIONES DE ARQUITECTURA (THE SENIOR FACTOR)" : "ARCHITECTURAL DECISIONS (THE SENIOR FACTOR)"}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#8750f7]/20 text-purple-200 border border-[#8750f7]/30">
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
                            className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#8750f7]/40 transition-all"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-[#8750f7]/20 border border-[#8750f7]/30 text-[#8750f7] text-xs font-mono flex items-center justify-center font-bold">
                                  {String.fromCharCode(65 + dIdx)}
                                </span>
                                <h5 className="text-sm font-semibold text-white">
                                  {dec.title}
                                </h5>
                              </div>
                              <span className="text-xs font-mono text-purple-300 px-2.5 py-0.5 rounded-md bg-[#140c1c] border border-[#8750f7]/20">
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

                {/* QUICK TECHNICAL INSPECTION GUIDE (TERMINAL) */}
                {selectedProject.inspectionCommands && selectedProject.inspectionCommands.length > 0 && (
                  <div className="mb-10">
                    <div className="p-5 sm:p-6 rounded-[24px] bg-[#140c1c] border border-white/10 shadow-2xl">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-[#8750f7]" />
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                            {language === "es"
                              ? "Guía Rápida de Inspección Técnica (Terminal)"
                              : "Quick Technical Inspection Guide (Terminal)"}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                          bash / zsh
                        </span>
                      </div>

                      <div className="space-y-4">
                        {selectedProject.inspectionCommands.map((cmd, cIdx) => (
                          <div key={cIdx} className="space-y-1.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-mono text-purple-300 font-semibold">
                                // {cmd.title}
                              </span>
                              <button
                                onClick={() => copyCommand(cmd.command, cIdx)}
                                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#8750f7]/20 border border-white/10 transition-colors cursor-pointer"
                              >
                                {copiedCmdIdx === cIdx ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">
                                      {language === "es" ? "Copiado" : "Copied"}
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3 text-neutral-400" />
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
                            <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-neutral-200 overflow-x-auto selection:bg-[#8750f7]">
                              <code>{cmd.command}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL FOOTER */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href={`/projects/${selectedProject.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#8750f7] hover:bg-[#7435f5] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(135,80,247,0.4)]"
                  >
                    <span>{t.modal.viewCaseStudy}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#8750f7]" />
                        <span>Live Production</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedSlug(null)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-white px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{t.modal.close}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
