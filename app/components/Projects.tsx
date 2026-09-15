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
      className="py-24 sm:py-32 sm:pt-10 px-4 relative z-10 bg-[#0f0715]"
    >
      <div className="container mx-auto max-w-7xl">
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

        {/* IMPECCABLE 3-VARIANT CONTAINER: MOSAIC/BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isFlagship = idx === 0 || idx === 1; // Gazu y TalentMatch son las dos grandes
            const colSpan = isFlagship ? "md:col-span-3" : "md:col-span-2";

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={colSpan}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group relative h-full flex flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-[#140c1c] border ${isFlagship ? "border-purple-500/40 shadow-purple-950/40" : "border-white/10"} hover:border-[#8750f7]/60 p-3.5 sm:p-5 md:p-6 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#8750f7]/25`}
                >
                  {/* Priority Tag */}
                  {isFlagship && (
                    <div className="absolute top-5 left-5 z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-purple-900/80 text-purple-200 border border-purple-400/40 backdrop-blur-md">
                        ✦ PRIORITY
                      </span>
                    </div>
                  )}

                  <div className="relative aspect-[16/9] w-full rounded-t-2xl sm:rounded-t-[24px] overflow-hidden bg-[#09040d]">
                    {project.heroImage ? (
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes={isFlagship ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 1024px) 100vw, 380px"}
                        className="object-cover object-center filter brightness-[0.96] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono text-sm">
                        {project.title}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-b-2xl bg-gradient-to-r from-[#8750f7] via-[#7435f5] to-[#401280] shadow-xl shadow-purple-950/50 flex items-center justify-between gap-3 border border-white/10 group-hover:border-white/25 transition-all duration-300">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        {project.categories?.map((catId) => (
                          <span
                            key={catId}
                            className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/20 text-white backdrop-blur-sm"
                          >
                            {getCatLabel(catId)}
                          </span>
                        ))}
                      </div>
                      <h3 className={`${isFlagship ? "text-base sm:text-lg md:text-xl font-bold" : "text-sm sm:text-base font-semibold"} text-white tracking-tight mb-0.5 truncate`}>
                        {project.title}
                      </h3>
                      <p className="text-purple-100/90 text-xs font-normal line-clamp-1 leading-normal">
                        {project.shortDescription || project.subtitle}
                      </p>
                    </div>
                    <div className="shrink-0 text-white p-1.5 sm:p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
