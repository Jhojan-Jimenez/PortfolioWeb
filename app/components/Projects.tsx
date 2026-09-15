"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getLocalizedProjects } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const projects = getLocalizedProjects(language);

  // Filter categories matching Gerold's layout with multi-tag support
  const categories = [
    { id: "all", label: language === "es" ? "Todos" : "All" },
    { id: "cloud", label: "Cloud & K8s" },
    { id: "backend", label: "Backend & Systems" },
    { id: "ai", label: "Applied AI" },
    { id: "frontend", label: "Frontend" },
    { id: "3d", label: "3D & WebGL" },
  ];

  const getCatLabel = (catId: string) => {
    switch (catId) {
      case "cloud":
        return "Cloud";
      case "backend":
        return "Backend";
      case "ai":
        return "AI";
      case "frontend":
        return "Frontend";
      case "3d":
        return "3D / WebGL";
      default:
        return catId;
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.categories?.includes(activeFilter);
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* GEROLD'S CENTERED SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
              {language === "es" ? "Mis Proyectos Recientes" : "My Recent Works"}
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Arquitecturas en producción, microservicios distribuidos y pipelines de IA de alta concurrencia con benchmarks reproducibles."
              : "Production architectures, distributed microservices, and high-concurrency AI systems engineered with verified uptime."}
          </p>
        </div>

        {/* GEROLD'S PILL CATEGORY FILTER BAR (ORIGINAL) */}
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

        {/* GEROLD'S EXACT 2-COLUMN HOVER-REVEAL PROJECT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block rounded-[32px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 p-5 sm:p-7 md:p-8 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#8750f7]/25"
              >
                {/* Framed Image Container (16:9 widescreen to fit app captures without crops) */}
                <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-[24px] overflow-hidden bg-[#09040d]">
                  {project.heroImage ? (
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover object-center filter brightness-[0.96] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono text-sm">
                      {project.title}
                    </div>
                  )}

                  {/* Dark subtle gradient at bottom for smooth contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
                </div>

                {/* GEROLD'S SIGNATURE HOVER BANNER (FLOATING AT BOTTOM) */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-5 md:left-5 md:right-5 z-20 transition-all duration-300 ease-out sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                  <div className="p-3.5 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#8750f7] via-[#7435f5] to-[#401280] shadow-2xl shadow-purple-950/80 flex items-center justify-between gap-3 sm:gap-4 border border-white/10">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        {project.categories?.map((catId) => (
                          <span
                            key={catId}
                            className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/20 text-white"
                          >
                            {getCatLabel(catId)}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight mb-0.5 truncate">
                        {project.title}
                      </h3>
                      <p className="text-purple-100/90 text-xs sm:text-[13px] font-normal line-clamp-1 leading-normal">
                        {project.shortDescription || project.subtitle}
                      </p>
                    </div>

                    {/* Signature Gerold Up-Right Arrow Icon */}
                    <div className="shrink-0 text-white pl-1">
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
