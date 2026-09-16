"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  Server,
  Layers,
  ShieldCheck,
  Zap,
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
  const [activeSection, setActiveSection] = useState("overview");

  const project = getLocalizedProject(slug, language);
  const allProjects = getLocalizedProjects(language);

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  // Table of Contents Navigation Items
  const tocItems = [
    { id: "overview", label: language === "es" ? "Resumen" : "Overview" },
    { id: "the-problem", label: language === "es" ? "El Reto" : "The Problem" },
    { id: "what-i-built", label: language === "es" ? "Arquitectura" : "What I Built" },
    { id: "tech-stack", label: language === "es" ? "Tech Stack" : "Tech Stack" },
    { id: "key-features", label: language === "es" ? "Implementación" : "Key Features" },
    ...(project.metrics && project.metrics.length > 0
      ? [{ id: "specs-metrics", label: language === "es" ? "Resultados" : "Results & Impact" }]
      : []),
  ];

  // Scroll spy to update active section in right sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Highlights to display in Key Features
  const featuresList = [
    ...(project.solution?.points || []),
    ...(project.architecture?.decisions?.map(
      (d) => `${d.title}: ${d.choice}. ${d.why}`
    ) || []),
  ].slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0a0512] text-neutral-100 selection:bg-purple-900/50 selection:text-white relative">
      {/* BACKGROUND DOT GRID ACCENT */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 40% at 50% 10%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 py-8 sm:py-12 pb-24">
        {/* ========================================================================= */}
        {/* TOP BAR: BACK LINK & BILINGUAL SWITCHER                                   */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <Link
            href="/#projects"
            className="font-mono text-xs text-neutral-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
          >
            <span>← cd ../#projects</span>
          </Link>

          {/* Language Switcher */}
          <div className="inline-flex p-0.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#8750f7] text-white font-semibold shadow-sm"
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
                  ? "bg-[#8750f7] text-white font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TOP HERO SECTION (AANAND MADHAV STYLE 2-COLUMN SPLIT)                     */}
        {/* ========================================================================= */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          {/* LEFT: TITLE, SUBTITLE, TECH TAGS & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <h1 className="font-mono font-medium text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] text-white tracking-[-0.03em] leading-[1.08] mb-4 text-balance">
              {project.title}
            </h1>

            <p className="font-mono text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
              {project.subtitle}
            </p>

            {/* TECH TAGS ROW */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 5).map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
              {project.technologies.length > 5 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-mono text-neutral-400 border border-white/10 bg-white/[0.02]">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* ACTION CTAs: PROD + DEV FOR GAZU, LIVE + SOURCE FOR ALL */}
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-[#8750f7] to-[#7435f5] text-white hover:shadow-[0_0_20px_rgba(135,80,247,0.4)] hover:scale-[1.02] transition-all cursor-pointer shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>
                    {project.slug === "gazu"
                      ? language === "es"
                        ? "Producción (gazu.jhojan.cloud)"
                        : "Production (gazu.jhojan.cloud)"
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
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 hover:border-purple-400/60 text-purple-200 transition-all cursor-pointer shadow-sm"
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>
                    {project.slug === "gazu"
                      ? language === "es"
                        ? "Entorno Dev (dev.gazu.jhojan.cloud)"
                        : "Dev Environment (dev.gazu.jhojan.cloud)"
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
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-neutral-300 hover:text-white transition-all cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{language === "es" ? "Código Fuente" : "View Source"}</span>
                </a>
              )}
            </div>
          </div>

          {/* RIGHT: HERO COVER SCREENSHOT */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl group">
              {project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono">
                  {project.title}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* METADATA STRIP: FULL WIDTH BORDER-Y (AANAND MADHAV SPEC)                  */}
        {/* ========================================================================= */}
        <section className="border-y border-white/10 py-5 sm:py-6 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* 1: YEAR */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 block mb-1.5 font-medium">
                {language === "es" ? "AÑO" : "YEAR"}
              </span>
              <span className="text-sm sm:text-base font-mono text-neutral-200">
                {project.date}
              </span>
            </div>

            {/* 2: CLIENT / CONTEXT */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 block mb-1.5 font-medium">
                {language === "es" ? "CONTEXTO / PROYECTO" : "CONTEXT / PROJECT"}
              </span>
              <span className="text-sm sm:text-base font-mono text-neutral-200 truncate block">
                {project.teamOrContext || project.category}
              </span>
            </div>

            {/* 3: ROLE */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 block mb-1.5 font-medium">
                {language === "es" ? "ROL" : "ROLE"}
              </span>
              <span className="text-sm sm:text-base font-mono text-neutral-200 truncate block">
                {project.role}
              </span>
            </div>

            {/* 4: CATEGORY / TYPE */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 block mb-1.5 font-medium">
                {language === "es" ? "CATEGORÍA" : "CATEGORY"}
              </span>
              <span className="text-sm sm:text-base font-mono text-neutral-200 truncate block">
                {project.category}
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BODY CONTENT + STICKY RIGHT SIDEBAR (NAVBAR ONLY STARTS BELOW THE HERO)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px] gap-12 lg:gap-16 items-start">
          {/* ======================================================================= */}
          {/* LEFT: CASE STUDY SECTIONS                                               */}
          {/* ======================================================================= */}
          <main className="min-w-0">
            <article className="space-y-14">
              {/* SECTION 1: OVERVIEW */}
              <section id="overview" className="scroll-mt-28 space-y-5">
                <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                  <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                  <span>{language === "es" ? "Resumen General" : "Overview"}</span>
                </h2>

                <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                  {project.shortDescription}
                </p>

                {/* ARCHITECTURAL PILLARS (IF PRESENT) */}
                {project.pillars && project.pillars.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {project.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-white">
                              {pillar.title}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-950/50 text-purple-300 border border-purple-500/30">
                              {pillar.badge}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 font-light leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SECTION 2: THE PROBLEM */}
              <section id="the-problem" className="scroll-mt-28 space-y-4">
                <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                  <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                  <span>{language === "es" ? "El Reto de Ingeniería" : "The Problem"}</span>
                </h2>

                <div className="space-y-3 font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                  <p>{project.problem?.summary}</p>

                  {project.problem?.points && project.problem.points.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-sm sm:text-base pt-2">
                      {project.problem.points.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* SECTION 3: WHAT I BUILT */}
              <section id="what-i-built" className="scroll-mt-28 space-y-4">
                <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                  <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                  <span>{language === "es" ? "Lo que Construí & Arquitectura" : "What I Built"}</span>
                </h2>

                <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                  {project.solution?.summary}
                </p>

                {/* Architectural Decisions Grid */}
                {project.architecture?.decisions && project.architecture.decisions.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    {project.architecture.decisions.map((dec, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
                      >
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                            {dec.title}
                          </span>
                          <div className="text-sm font-medium text-white mb-2">
                            {dec.choice}
                          </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          {dec.why}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SECTION 4: TECH STACK */}
              <section id="tech-stack" className="scroll-mt-28 space-y-4">
                <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                  <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                  <span>{language === "es" ? "Stack Tecnológico" : "Tech Stack"}</span>
                </h2>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <TechPill key={tech} name={tech} />
                  ))}
                </div>
              </section>

              {/* SECTION 5: KEY FEATURES */}
              {featuresList.length > 0 && (
                <section id="key-features" className="scroll-mt-28 space-y-4">
                  <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                    <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                    <span>{language === "es" ? "Aspectos Clave de Implementación" : "Key Features"}</span>
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">
                    {featuresList.map((feat, idx) => {
                      const parts = feat.split(":");
                      if (parts.length > 1) {
                        return (
                          <div
                            key={idx}
                            className="border-l-2 border-purple-500/40 pl-4 py-1"
                          >
                            <strong className="text-white font-medium block mb-1">
                              {parts[0].trim()}.
                            </strong>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                              {parts.slice(1).join(":").trim()}
                            </p>
                          </div>
                        );
                      }
                      return (
                        <div
                          key={idx}
                          className="border-l-2 border-purple-500/40 pl-4 py-1"
                        >
                          <p className="text-neutral-300 text-sm leading-relaxed">
                            {feat}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* SECTION 6: RESULTS & IMPACT */}
              {project.metrics && project.metrics.length > 0 && (
                <section id="specs-metrics" className="scroll-mt-28 space-y-4 pt-2">
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                      <span>{language === "es" ? "Resultados & Métricas" : "Results & Impact"}</span>
                    </h2>
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
                </section>
              )}
            </article>

            {/* FOOTER: NAVIGATION PREV & NEXT */}
            <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevProject && (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-neutral-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/[0.03] w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-purple-400" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase text-neutral-500 font-mono">
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
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-neutral-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/[0.03] w-full sm:w-auto justify-end text-right ml-auto"
                >
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-500 font-mono">
                      {language === "es" ? "Siguiente" : "Next"}
                    </span>
                    <span className="truncate max-w-[250px] block text-neutral-200 group-hover:text-white">
                      {nextProject.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-purple-400" />
                </Link>
              )}
            </footer>
          </main>

          {/* ======================================================================= */}
          {/* RIGHT: STICKY "ON THIS PAGE" TABLE OF CONTENTS (AKKILA.DEV STYLE)       */}
          {/* ======================================================================= */}
          <aside
            className="sticky top-28 self-start font-mono text-[12.5px] max-h-[calc(100vh-140px)] overflow-y-auto hidden lg:block w-[220px] shrink-0"
            aria-label="Table of contents"
          >
            <div className="text-neutral-400 tracking-[0.06em] mb-4 pb-2 border-b border-white/10 font-medium">
              <span className="text-purple-400 font-bold">##</span>{" "}
              {language === "es" ? "ON THIS PAGE" : "ON THIS PAGE"}
            </div>

            <ol className="list-none p-0 m-0 flex flex-col gap-1">
              {tocItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left py-1.5 transition-all duration-150 leading-[1.4] cursor-pointer block ${
                        isActive
                          ? "border-l-2 border-purple-400 text-purple-300 pl-4 font-semibold"
                          : "border-l border-white/10 text-neutral-400 hover:text-white hover:border-white/40 pl-3.5"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      </div>
    </div>
  );
}
