"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getLocalizedProjects } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";
import { TechIcon } from "@/lib/tech-icons";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const projects = getLocalizedProjects(language);

  // Filter categories with multi-tag support
  const categories = [
    { id: "all", label: language === "es" ? "Todos" : "All" },
    { id: "cloud", label: "Cloud & K8s" },
    { id: "backend", label: "Backend & Systems" },
    { id: "ai", label: "Applied AI" },
    { id: "frontend", label: "Frontend" },
    { id: "3d", label: "3D & WebGL" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.categories?.includes(activeFilter);
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 sm:pt-12 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              {language === "es" ? "Mis Proyectos Recientes" : "My Recent Works"}
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            {language === "es"
              ? "Arquitecturas en producción, microservicios distribuidos y pipelines de IA de alta concurrencia con benchmarks reproducibles."
              : "Production architectures, distributed microservices, and high-concurrency AI systems engineered with verified uptime."}
          </p>
        </div>

        {/* PILL CATEGORY FILTER BAR */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-[#140c1c] border border-white/10 shadow-lg">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#8750f7] text-white shadow-[0_0_20px_rgba(135,80,247,0.4)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECT CARDS GRID (CHARAN MUNUR DESIGN PATTERN: IMAGE, CLEAN DESCRIPTION, BRAND ICONS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filteredProjects.map((project, idx) => {
            const displayedTechs = project.technologies?.slice(0, 7) || [];
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
                  className="group flex flex-col justify-between h-full bg-[#140c1c] border border-dashed border-white/15 p-2 sm:p-2.5 rounded-2xl w-full overflow-hidden hover:border-[#8750f7]/60 hover:bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8750f7]/15 cursor-pointer"
                >
                  <div>
                    {/* Image Showcase */}
                    <div className="group/image relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
                      {project.heroImage ? (
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 550px"
                          className="object-cover object-top transition-all duration-500 ease-out group-hover/image:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono text-sm">
                          {project.title}
                        </div>
                      )}

                      {/* Subtle status tag */}
                      {project.isFlagship && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-black/70 text-purple-300 border border-purple-500/40 backdrop-blur-md">
                            ✦ Flagship
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div className="px-2 pt-4 pb-2">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <div className="shrink-0 text-neutral-400 group-hover:text-white p-1 rounded-lg bg-white/[0.03] group-hover:bg-[#8750f7]/20 border border-white/5 group-hover:border-[#8750f7]/40 transition-all">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-2">
                        {project.shortDescription || project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Technology Icons Row (Charan Munur pattern: clean logos + count) */}
                  <div className="flex items-center gap-2 px-2 pt-3 pb-1 border-t border-white/5 mt-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {displayedTechs.map((tech) => (
                        <div
                          key={tech}
                          title={tech}
                          className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-1 hover:border-purple-400/40 hover:bg-white/[0.08] transition-all"
                        >
                          <TechIcon name={tech} className="w-4 h-4" />
                        </div>
                      ))}
                      {remainingCount > 0 && (
                        <span className="text-xs text-neutral-400 font-mono pl-1">
                          +{remainingCount}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
