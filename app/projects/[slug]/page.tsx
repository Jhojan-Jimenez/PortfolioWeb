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

        {/* HEADER: COLOR-ACCENTED SOBER TITLE, SUBTITLE & DUAL-ENVIRONMENT CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/60 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(135,80,247,0.15)]">
              ✦ {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.role}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-neutral-400">
              {project.date}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-purple-300 leading-snug">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>

          {/* ACTION CTAs (TASTEFUL COLOR & CONTRAST) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r from-[#8750f7] to-[#7435f5] text-white hover:shadow-[0_0_20px_rgba(135,80,247,0.4)] hover:scale-[1.02] transition-all cursor-pointer shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>
                  {project.slug === "gazu"
                    ? language === "es"
                      ? "Producción (Live)"
                      : "Production (Live)"
                    : language === "es"
                    ? "Plataforma en Vivo"
                    : "Live Demo"}
                </span>
              </a>
            )}

            {project.devUrl && project.devUrl !== project.liveUrl && (
              <a
                href={project.devUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 hover:border-purple-400/60 text-purple-200 transition-all cursor-pointer shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>
                  {project.slug === "gazu"
                    ? language === "es"
                      ? "Entorno Dev (k3s)"
                      : "Dev Environment (k3s)"
                    : language === "es"
                    ? "Entorno de Prueba"
                    : "Development"}
                </span>
              </a>
            )}

            {(project.githubUrl || project.gitlabUrl) && (
              <a
                href={project.githubUrl || project.gitlabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-neutral-300 hover:text-white transition-all cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{language === "es" ? "Código Fuente" : "View Source"}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* HERO IMAGE SCREENSHOT (EXPANSIVE 16:9 DISPLAY WITH SUBTLE GLOW) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-purple-500/20 bg-black/40 shadow-2xl shadow-purple-950/20"
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
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8750f7] shadow-[0_0_8px_#8750f7]" />
            <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
              {language === "es" ? "Tecnologías Utilizadas" : "Technologies Used"}
            </h2>
          </div>
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
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8750f7] shadow-[0_0_8px_#8750f7]" />
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
                  {language === "es"
                    ? "Especificaciones y Métricas"
                    : "System Specs & Metrics"}
                </h2>
              </div>
              <span className="text-xs font-mono text-purple-300/80">
                {project.metrics.length} {language === "es" ? "verificadas" : "verified"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              {project.metrics.map((metric, mIdx) => {
                const isNumeric = /^[\d<+~%]/.test(metric.value.trim());

                return (
                  <div
                    key={mIdx}
                    className="rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/[0.02] hover:bg-purple-950/15 p-4 flex flex-col justify-between transition-all hover:shadow-[0_0_20px_rgba(135,80,247,0.08)]"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-medium mb-1.5 block">
                        {metric.label}
                      </span>
                      <div
                        className={`tracking-tight ${
                          isNumeric
                            ? "text-xl sm:text-2xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white"
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
