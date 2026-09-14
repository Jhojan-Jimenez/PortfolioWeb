"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  Workflow,
  Server,
  Activity,
  Cpu,
  Terminal,
  Database,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  ShoppingBag,
  Zap,
  LayoutDashboard,
  LineChart,
  Copy,
  Check,
} from "lucide-react";
import { getLocalizedProject, getLocalizedProjects } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import ProjectEvidenceInspector from "@/app/components/ProjectEvidenceInspector";

const DEMO_ICONS = [ShoppingBag, Zap, LayoutDashboard, LineChart];

const ICON_MAP: Record<string, any> = {
  Layers,
  Workflow,
  Server,
  Activity,
  Cpu,
  Database,
  Sparkles,
  ShieldCheck,
  Terminal,
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { language, setLanguage } = useLanguage();
  const [copiedCmdIdx, setCopiedCmdIdx] = useState<number | null>(null);

  const copyCommand = (cmd: string, idx: number) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cmd);
      setCopiedCmdIdx(idx);
      setTimeout(() => setCopiedCmdIdx(null), 2000);
    }
  };

  const project = getLocalizedProject(slug, language);
  const allProjects = getLocalizedProjects(language);

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div className="min-h-screen text-neutral-100 selection:bg-purple-900/50 selection:text-white pb-24">
      {/* FLOATING TOP NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0e051d]/85 border-b border-white/[0.07]">
        <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{language === "es" ? "Volver a Trabajos" : "Archive"}</span>
          </Link>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="inline-flex p-0.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-purple-600 text-white font-semibold"
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
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#eae6df] hover:bg-white text-neutral-950 transition-all shadow-sm"
              >
                <span>{language === "es" ? "Plataforma en Vivo" : "Live Platform"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container mx-auto max-w-5xl px-4 pt-14 sm:pt-20">
        {/* HERO TITLE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {project.clusterStatus && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">{project.clusterStatus.badgeText}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">
            <span>{project.role}</span>
            <span>·</span>
            <span>{project.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3 leading-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed mb-6">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#eae6df] hover:bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>{language === "es" ? "Visitar Proyecto" : "Live Platform"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.gitlabUrl && (
              <a
                href={project.gitlabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] hover:bg-[#181818] text-neutral-300 border border-white/[0.1] text-xs font-mono transition-all"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>GitLab</span>
              </a>
            )}

            {project.githubUrl && !project.gitlabUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] hover:bg-[#181818] text-neutral-300 border border-white/[0.1] text-xs font-mono transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* INTERACTIVE EVIDENCE INSPECTOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <ProjectEvidenceInspector
            evidenceList={project.evidenceGallery || []}
            defaultHeroImage={project.heroImage}
            projectTitle={project.title}
            liveUrl={project.liveUrl}
          />
        </motion.div>

        {/* INTERACTIVE LIVE INSPECTION ENDPOINTS */}
        {project.liveDemos && project.liveDemos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100">
                {language === "es"
                  ? "Puntos de Inspección Interactivos (Live Demos)"
                  : "Interactive Live Inspection Endpoints"}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.liveDemos.map((demo, dIdx) => {
                const IconComponent = DEMO_ICONS[dIdx % DEMO_ICONS.length] || ArrowUpRight;
                return (
                  <a
                    key={dIdx}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-2xl bg-[#0c0a14] hover:bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
                          {demo.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-2 flex items-center gap-1">
                        <span>{demo.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {demo.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-purple-500/10 text-xs font-mono text-purple-400 group-hover:text-purple-300 flex items-center gap-1">
                      <span>{language === "es" ? "Abrir endpoint" : "Launch endpoint"}</span>
                      <span>→</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* BENCHMARKS */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 mb-6">
              {language === "es" ? "Métricas de Producción & Rendimiento" : "Engineering Benchmarks & Impact"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-5 rounded-2xl bg-[#0d0d0d] border border-white/[0.07]"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                    {metric.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-light font-mono text-white block mb-2">
                    {metric.value}
                  </span>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* PROBLEM & SOLUTION */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Challenge */}
          <div className="p-7 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 block mb-3">
                01 / {language === "es" ? "EL DESAFÍO" : "THE CHALLENGE"}
              </span>
              <h3 className="text-lg font-medium text-white mb-3">
                {project.problem.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                {project.problem.summary}
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-white/[0.04] text-xs text-neutral-300">
              {project.problem.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 shrink-0" />
                  <span className="font-light">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Solution */}
          <div className="p-7 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 block mb-3">
                02 / {language === "es" ? "SOLUCIÓN DE ARQUITECTURA" : "ARCHITECTURE & RESOLUTION"}
              </span>
              <h3 className="text-lg font-medium text-white mb-3">
                {project.solution.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                {project.solution.summary}
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-white/[0.04] text-xs text-neutral-300">
              {project.solution.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 shrink-0" />
                  <span className="font-light">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* PILLARS */}
        {project.pillars && project.pillars.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 mb-6">
              {language === "es" ? "Arquitectura & Subsistemas" : "Architecture & Subsystems"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.pillars.map((pillar, idx) => {
                const Icon = ICON_MAP[pillar.iconName] || Layers;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="p-2 rounded-lg bg-white/[0.04] text-neutral-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.05]">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ARCHITECTURAL DECISIONS */}
        {project.architecture.decisions &&
          project.architecture.decisions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 p-7 rounded-2xl bg-[#0d0d0d] border border-white/[0.07]"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 mb-2">
                {language === "es" ? "Decisiones de Ingeniería & Compromisos" : "Engineering Trade-Offs & Decisions"}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">
                {language === "es"
                  ? "Justificación técnica para decisiones arquitectónicas de escalabilidad, latencia y tolerancia a fallos."
                  : "Technical rationale for architectural choices addressing scale, latency, and fault-tolerance."}
              </p>

              <div className="space-y-4">
                {project.architecture.decisions.map((dec, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-xl bg-[#111111] border border-white/[0.05]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xs font-mono font-semibold uppercase text-neutral-200">
                        {dec.title}
                      </h4>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.05] text-neutral-400">
                        {language === "es" ? "Decisión Técnica" : "Design Choice"}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-neutral-300 mb-1">
                      <strong>{language === "es" ? "Selección:" : "Selection:"}</strong> {dec.choice}
                    </p>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      <strong>{language === "es" ? "Justificación:" : "Rationale:"}</strong> {dec.why}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

        {/* QUICK TECHNICAL INSPECTION GUIDE (TERMINAL CURL) */}
        {project.inspectionCommands && project.inspectionCommands.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 p-6 sm:p-7 rounded-2xl bg-[#080512] border border-purple-500/30 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <Terminal className="w-4 h-4 text-purple-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
                  {language === "es"
                    ? "Guía Rápida de Inspección Técnica (Terminal)"
                    : "Quick Technical Inspection Guide (Terminal)"}
                </h3>
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
              {project.inspectionCommands.map((cmd, cIdx) => (
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
          </motion.section>
        )}

        {/* COMPLETE STACK */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
            {language === "es" ? "STACK DE COMPONENTES DEL SISTEMA" : "SYSTEM COMPONENT STACK"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1.5 bg-[#0e0e0e] text-neutral-400 border border-white/[0.06] rounded-lg text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* BOTTOM NAV */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#0d0d0d] hover:bg-[#121212] border border-white/[0.07] flex items-center gap-3 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-xs font-mono text-neutral-400 uppercase block">
                {language === "es" ? "Caso Anterior" : "Previous Case"}
              </span>
              <span className="text-xs font-medium text-white">
                {prevProject.title.split("—")[0]}
              </span>
            </div>
          </Link>

          <Link
            href="/#projects"
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            {language === "es" ? "Volver a Trabajos" : "Back to Archive"}
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#0d0d0d] hover:bg-[#121212] border border-white/[0.07] flex items-center justify-between sm:justify-start gap-3 transition-colors group text-right sm:text-left"
          >
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase block">
                {language === "es" ? "Siguiente Caso" : "Next Case"}
              </span>
              <span className="text-xs font-medium text-white">
                {nextProject.title.split("—")[0]}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    </div>
  );
}
