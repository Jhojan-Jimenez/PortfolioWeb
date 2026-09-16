"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Terminal,
} from "lucide-react";
import { getLocalizedProject, getLocalizedProjects } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TechPill } from "@/lib/tech-icons";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { language, setLanguage } = useLanguage();

  const project = getLocalizedProject(slug, language);
  const allProjects = getLocalizedProjects(language);

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  // Highlights to display
  const highlights = [
    ...(project.solution?.points || []),
    ...(project.architecture?.decisions?.map(
      (d) => `${d.title}: ${d.choice}. ${d.why}`
    ) || []),
  ].slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0f0715] text-neutral-100 selection:bg-purple-900/50 selection:text-white">
      {/* SOBER EXPANSIVE CONTAINER (EXCELLENT WIDTH UTILIZATION: max-w-5xl) */}
      <main className="mx-auto flex w-full max-w-5xl flex-col px-5 sm:px-8 pt-8 pb-16 sm:pt-12 sm:pb-24 space-y-10">
        {/* TOP NAV: BACK BUTTON & BILINGUAL TOGGLE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between gap-4 pb-2 border-b border-white/5"
        >
          <Link
            href="/#projects"
            className="flex w-fit items-center gap-2.5 text-sm font-light text-neutral-400 hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-purple-400" />
            <span>
              {language === "es" ? "Volver a Proyectos" : "Back to Projects"}
            </span>
          </Link>

          {/* Bilingual Switcher */}
          <div className="inline-flex p-0.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#8750f7] text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "es"
                  ? "bg-[#8750f7] text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              ES
            </button>
          </div>
        </motion.div>

        {/* HEADER: TITLE, SUBTITLE & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="space-y-4"
        >
          {project.clusterStatus && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{project.clusterStatus.badgeText}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-light text-neutral-300 leading-relaxed max-w-4xl">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono pt-1">
            <span>{project.role}</span>
            <span className="text-white/20">•</span>
            <span>{project.date}</span>
            <span className="text-white/20">•</span>
            <span className="text-purple-300">{project.category}</span>
          </div>

          {/* ACTION CTAs (CHARAN MUNUR BUTTON ROW) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[#8750f7] hover:bg-[#9662f8] text-white transition-all shadow-lg shadow-[#8750f7]/25 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{language === "es" ? "Plataforma en Vivo" : "Live Demo"}</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-dashed border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 text-neutral-200 hover:text-white transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>{language === "es" ? "Ver Código" : "View Source"}</span>
              </a>
            )}

            {project.devUrl && (
              <a
                href={project.devUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-neutral-300 hover:text-white transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>{language === "es" ? "Playground / Demo" : "Interactive Demo"}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* HERO IMAGE SCREENSHOT (EXPANSIVE 16:9 DISPLAY) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl"
        >
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono">
              {project.title}
            </div>
          )}
        </motion.div>

        {/* TECHNOLOGIES USED */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
            {language === "es" ? "Tecnologías Utilizadas" : "Technologies Used"}
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </motion.section>

        {/* SYSTEM SPECS & PERFORMANCE METRICS — SOBER, COMPACT & BALANCED (4 COLUMNS) */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="space-y-3 pt-2"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
                {language === "es"
                  ? "Especificaciones y Métricas"
                  : "System Specs & Metrics"}
              </h2>
              <span className="text-xs font-mono text-neutral-400">
                {project.metrics.length} {language === "es" ? "verificadas" : "verified"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              {project.metrics.map((metric, mIdx) => {
                const isNumeric = /^[\d<+~%]/.test(metric.value.trim());

                return (
                  <div
                    key={mIdx}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-white/20 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 block">
                        {metric.label}
                      </span>
                      <div
                        className={`text-white tracking-tight ${
                          isNumeric
                            ? "text-xl sm:text-2xl font-mono font-semibold text-purple-300"
                            : "text-base font-semibold text-neutral-100"
                        }`}
                      >
                        {metric.value}
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ABOUT THE PROJECT */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
            {language === "es" ? "Sobre el Proyecto" : "About the Project"}
          </h2>
          <div className="space-y-3.5 text-neutral-300 font-light leading-relaxed text-sm sm:text-base max-w-4xl">
            <p>{project.shortDescription}</p>
            {project.problem?.summary && (
              <p className="text-neutral-400">
                <span className="text-neutral-200 font-medium">
                  {language === "es" ? "Reto de Ingeniería: " : "Engineering Challenge: "}
                </span>
                {project.problem.summary}
              </p>
            )}
            {project.solution?.summary && (
              <p className="text-neutral-400">
                <span className="text-neutral-200 font-medium">
                  {language === "es" ? "Solución Arquitectónica: " : "Architectural Solution: "}
                </span>
                {project.solution.summary}
              </p>
            )}
          </div>
        </motion.section>

        {/* KEY ENGINEERING HIGHLIGHTS — 2-COLUMN BALANCED GRID FOR WIDE SCREENS */}
        {highlights.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="space-y-3"
          >
            <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
              {language === "es" ? "Aspectos Clave de Ingeniería" : "Key Engineering Highlights"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {highlights.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-xl border border-white/5 bg-white/[0.015] p-4 text-sm text-neutral-300 font-light leading-relaxed flex items-start gap-3 hover:border-white/10 transition-colors"
                >
                  <span className="text-purple-400 font-mono text-xs mt-0.5 shrink-0">✦</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* FOOTER NAVIGATION: PREV & NEXT PROJECT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="pt-8 border-t border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-light text-neutral-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/[0.03] w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-purple-400" />
              <div className="text-left">
                <span className="block text-[10px] uppercase font-mono text-neutral-400">
                  {language === "es" ? "Anterior" : "Previous"}
                </span>
                <span className="truncate max-w-[250px] block text-neutral-200 group-hover:text-white">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-light text-neutral-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/[0.03] w-full sm:w-auto justify-end text-right ml-auto"
            >
              <div>
                <span className="block text-[10px] uppercase font-mono text-neutral-400">
                  {language === "es" ? "Siguiente" : "Next"}
                </span>
                <span className="truncate max-w-[250px] block text-neutral-200 group-hover:text-white">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-purple-400" />
            </Link>
          )}
        </motion.div>
      </main>
    </div>
  );
}
