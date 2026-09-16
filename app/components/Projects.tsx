"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getLocalizedProjects } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";
import { TechIcon } from "@/lib/tech-icons";
import { FormattedText } from "@/lib/formatted-text";
import { setActiveTransitionSlug, getActiveTransitionSlug } from "@/lib/view-transition-store";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const projects = getLocalizedProjects(language);

  // Restore active transition slug if navigating back from project detail
  useEffect(() => {
    const slug = getActiveTransitionSlug();
    if (slug) {
      setActiveSlug(slug);
      const timer = setTimeout(() => {
        setActiveSlug(null);
        setActiveTransitionSlug(null);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  // Filter categories with multi-tag support
  const categories = [
    { id: "all", label: language === "es" ? "Todos" : "All" },
    { id: "cloud", label: "Cloud & K8s" },
    { id: "backend", label: "Backend" },
    { id: "ai", label: "Applied AI" },
    { id: "frontend", label: "Frontend" },
    { id: "3d", label: "3D Graphics" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.categories?.includes(activeFilter);
  });

  // Staggered column distribution:
  // The Right column starts with the first project (idx 0: Gazu), positioned at the top
  // level with the Left column's Header block for the perfect alternating staggered rhythm.
  const rightProjects = filteredProjects.filter((_, idx) => idx % 2 === 0);
  const leftProjects = filteredProjects.filter((_, idx) => idx % 2 === 1);

  const headerBlock = (
    <div className="space-y-4 pb-2">
     

      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.12]">
        {language === "es" ? (
          <>
            Proyectos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              Seleccionados.
            </span>
          </>
        ) : (
          <>
            All Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              Works.
            </span>
          </>
        )}
      </h2>

      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-md">
        {language === "es"
          ? "Sistemas distribuidos, arquitecturas cloud y pipelines de IA de alta concurrencia con benchmarks reproducibles."
          : "Production architectures, distributed microservices, and high-concurrency AI systems engineered with verified uptime."}
      </p>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {categories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#8750f7] text-white shadow-[0_0_15px_rgba(135,80,247,0.4)] font-medium"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderProjectCard = (project: (typeof projects)[0], idx: number) => {
    const displayedTechs = project.technologies?.slice(0, 4) || [];
    const remainingCount = (project.technologies?.length || 0) - displayedTechs.length;

    return (
      <motion.div
        key={project.slug}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: idx * 0.06 }}
      >
        <Link
          href={`/projects/${project.slug}`}
          onClick={() => {
            setActiveSlug(project.slug);
            setActiveTransitionSlug(project.slug);
          }}
          className="group flex flex-col bg-[#120822]/70 border border-white/10 hover:border-[#8750f7]/60 rounded-2xl overflow-hidden hover:bg-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#8750f7]/15 cursor-pointer"
        >
          {/* Showcase Image with inner rounded container */}
          <div className="p-3 sm:p-3.5 pb-0">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
              {project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono text-sm">
                  {project.title}
                </div>
              )}
            </div>
          </div>

          {/* Title, Tech Pills with Icon + Name, and Description */}
          <div className="p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3
                style={
                  activeSlug === project.slug
                    ? { viewTransitionName: "case-title" }
                    : undefined
                }
                className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors"
              >
                {project.title}
              </h3>
              <div className="shrink-0 text-neutral-400 group-hover:text-white p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-[#8750f7]/20 border border-white/10 group-hover:border-[#8750f7]/40 transition-all">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Tech Badges with icon + label */}
            <div className="flex flex-wrap gap-1.5">
              {displayedTechs.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/10"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-mono text-neutral-400 bg-white/[0.02] border border-white/10">
                  +{remainingCount}
                </span>
              )}
            </div>

            {/* Description */}
            <p
              style={
                activeSlug === project.slug
                  ? { viewTransitionName: "case-desc" }
                  : undefined
              }
              className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-2 pt-2 border-t border-white/5"
            >
              <FormattedText text={project.shortDescription || project.subtitle} />
            </p>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 sm:pt-16 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* DESKTOP STAGGERED 2-COLUMN LAYOUT (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: HEADER BLOCK + LEFT PROJECTS */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {headerBlock}
            {leftProjects.map((project, idx) => renderProjectCard(project, idx))}
          </div>

          {/* RIGHT COLUMN: RIGHT PROJECTS */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {rightProjects.map((project, idx) =>
              renderProjectCard(project, idx + leftProjects.length)
            )}
          </div>
        </div>

        {/* MOBILE SINGLE-COLUMN LAYOUT (< md) */}
        <div className="md:hidden flex flex-col gap-6">
          {headerBlock}
          {filteredProjects.map((project, idx) => renderProjectCard(project, idx))}
        </div>
      </div>
    </section>
  );
}
