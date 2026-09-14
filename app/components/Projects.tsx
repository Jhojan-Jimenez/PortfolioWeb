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
  ExternalLink,
} from "lucide-react";
import { getLocalizedProjects, getLocalizedProject } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";
import ProjectEvidenceInspector from "./ProjectEvidenceInspector";

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

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

  // Lock body scroll when modal is open
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

      {/* FULL EVIDENCE INSPECTOR MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectEvidenceInspector
            project={selectedProject}
            onClose={() => setSelectedSlug(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
