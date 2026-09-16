"use client";

import { use, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { setActiveTransitionSlug } from "@/lib/view-transition-store";
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
  X,
} from "lucide-react";
import { getLocalizedProject, getLocalizedProjects } from "@/lib/projects-data";
import { useLanguage } from "@/app/context/LanguageContext";
import { TechPill } from "@/lib/tech-icons";
import { FormattedText } from "@/lib/formatted-text";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { language, setLanguage } = useLanguage();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [contentRevealed, setContentRevealed] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setContentRevealed(false);
    const timer = setTimeout(() => {
      setContentRevealed(true);
    }, 420);
    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const project = getLocalizedProject(slug, language);
  const allProjects = getLocalizedProjects(language);

  // Formatted projects list for quick-switching across projects
  const projectList = allProjects.map((p) => {
    let status = "COMPLETED";
    let tag = p.category.split("&")[0].trim().toLowerCase();

    if (p.slug === "gazu") {
      status = "LIVE";
      tag = "cloud native";
    } else if (p.slug === "talentmatch") {
      status = "LIVE";
      tag = language === "es" ? "ia aplicada" : "applied ai";
    } else if (p.slug === "wheelus") {
      status = "COMPLETED";
      tag = language === "es" ? "sistemas distribuidos" : "distributed systems";
    } else if (p.slug === "mercedes-gt3") {
      status = "EXPERIENCE";
      tag = language === "es" ? "gráficos 3d" : "3d graphics";
    } else if (p.slug === "vaccine-cdss") {
      status = "CLINICAL";
      tag = language === "es" ? "ingeniería de datos" : "data engineering";
    }

    let shortTitle = p.title.split("-")[0].trim();
    if (p.slug === "gazu") shortTitle = "Gazu — E-Commerce";
    if (p.slug === "talentmatch") shortTitle = "TalentMatch AI";
    if (p.slug === "wheelus") shortTitle = "WheelUS — Carpooling";
    if (p.slug === "mercedes-gt3") shortTitle = "Mercedes-AMG GT3";
    if (p.slug === "vaccine-cdss") shortTitle = "Vaccine CDSS";

    return {
      slug: p.slug,
      title: shortTitle,
      status,
      tag,
    };
  });

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  // Highlights to display in Key Features
  const featuresList = [
    ...(project.solution?.points || []),
    ...(project.architecture?.decisions?.map(
      (d) => `${d.title}: ${d.choice}. ${d.why}`
    ) || []),
  ].slice(0, 6);

  // Table of contents navigation items
  const tocItems = useMemo(
    () => [
      { id: "overview", label: language === "es" ? "Resumen" : "Overview" },
      { id: "the-problem", label: language === "es" ? "El Reto" : "The Problem" },
      { id: "what-i-built", label: language === "es" ? "Arquitectura" : "What I Built" },
      { id: "tech-stack", label: language === "es" ? "Tech Stack" : "Tech Stack" },
      ...(featuresList.length > 0
        ? [{ id: "key-features", label: language === "es" ? "Implementación" : "Key Features" }]
        : []),
      ...(project.metrics && project.metrics.length > 0
        ? [{ id: "specs-metrics", label: language === "es" ? "Resultados" : "Results & Impact" }]
        : []),
    ],
    [language, featuresList.length, project?.metrics]
  );

  // Scroll spy to update active section in right sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
      setActiveSection(id);
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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

      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* ======================================================================= */}
        {/* LEFT SIDEBAR: "OTHER PROJECTS" (ZUBAIR MURSHID STYLE)                    */}
        {/* ======================================================================= */}
        <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:border-r border-white/10 hidden lg:block px-3 sm:px-4 xl:px-5">
          <div className="sticky top-0 h-screen flex flex-col justify-between pt-8 pb-8">
            {/* TOP ACTIONS ROW: BACK LINK & BILINGUAL SWITCHER */}
            <div className="flex items-center justify-between gap-2 px-3 shrink-0">
              <Link
                href="/#projects"
                onClick={() => setActiveTransitionSlug(slug)}
                className="font-mono text-xs text-neutral-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-purple-400 transition-transform group-hover:-translate-x-1" />
                <span>cd ../#projects</span>
              </Link>

              {/* Language Switcher */}
              <div className="inline-flex p-0.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer text-[11px] ${
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
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer text-[11px] ${
                    language === "es"
                      ? "bg-[#8750f7] text-white font-semibold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>

            {/* OTHER PROJECTS SECTION: CENTERED RESPECT TO Y */}
            <div className="my-auto py-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 px-3 font-medium">
                {language === "es" ? "OTHER PROJECTS" : "OTHER PROJECTS"}
              </h3>

              <nav className="flex flex-col gap-1">
                {projectList.map((p) => {
                  const isCurrent = p.slug === slug;
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className={`group flex flex-col gap-1 px-3.5 py-2.5 rounded-xl transition-all text-left ${
                        isCurrent
                          ? "bg-white/10 text-white shadow-sm"
                          : "hover:bg-white/5 text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold truncate transition-colors ${
                          isCurrent ? "text-white" : "text-neutral-200 group-hover:text-white"
                        }`}
                      >
                        {p.title}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* OPTICAL BOTTOM BALANCE SPACER */}
            <div className="h-8 shrink-0" aria-hidden="true" />
          </div>
        </aside>

        {/* ======================================================================= */}
        {/* RIGHT: MAIN CONTENT AREA (FULL REMAINING WIDTH & CENTERED)               */}
        {/* ======================================================================= */}
        <div className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 pb-24 w-full flex justify-center">
          <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1536px]">
            {/* ========================================================================= */}
            {/* MOBILE ONLY TOP BAR: BACK LINK & BILINGUAL SWITCHER (< lg)                */}
            {/* ========================================================================= */}
          <div
            className={`lg:hidden flex items-center justify-between gap-4 mb-8 sm:mb-10 transition-all duration-500 ease-out ${
              contentRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <Link
              href="/#projects"
              onClick={() => setActiveTransitionSlug(slug)}
              className="font-mono text-xs text-neutral-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
            >
              <span>← cd ../#projects</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white"
              >
                <span>{language === "es" ? "Proyectos" : "Projects"} (05)</span>
              </button>

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
          </div>

          {/* ========================================================================= */}
          {/* TOP HERO SECTION: MACOS SHOWCASE WINDOW WITH INTEGRATED ACTION DOCK       */}
          {/* ========================================================================= */}
          <header className="mb-10 sm:mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* LEFT: TITLE, SUBTITLE & TECH TAGS */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h1
                  style={{ viewTransitionName: "case-title" }}
                  className="font-semibold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-[-0.03em] leading-[1.15] mb-4 text-balance"
                >
                  {project.title.replace(/E-Commerce/g, "E\u2011Commerce")}
                </h1>

                <p
                  style={{ viewTransitionName: "case-desc" }}
                  className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6"
                >
                  <FormattedText text={project.subtitle} />
                </p>

                {/* TECH TAGS */}
                <div
                  className={`flex flex-wrap gap-2 transition-all duration-500 ease-out ${
                    contentRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  {project.technologies.slice(0, 6).map((tech) => (
                    <TechPill key={tech} name={tech} />
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-mono text-neutral-400 border border-white/10 bg-white/[0.02]">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT: MACOS WINDOW FRAME WITH INTEGRATED ACTION DOCK */}
              <div
                className={`lg:col-span-7 transition-all duration-500 ease-out delay-75 ${
                  contentRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.7)] group">
                  {/* WINDOW HEADER */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#120822] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="font-mono text-[11px] text-neutral-400 bg-white/[0.04] px-4 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                      <span className="text-purple-400">🔒</span>
                      <span>{slug}.jhojan.cloud</span>
                    </div>
                  </div>

                  {/* WINDOW SCREENSHOT */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    {project.heroImage ? (
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        priority
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono">
                        {project.title}
                      </div>
                    )}
                  </div>

                  {/* INTEGRATED ACTION DOCK */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#0d0718] border-t border-white/10">
                    <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                      <span className="text-purple-400">✦</span>
                      <span>{project.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>{language === "es" ? "Producción" : "Live"}</span>
                        </a>
                      )}
                      {project.devUrl && (
                        <a
                          href={project.devUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 hover:bg-purple-900/40 text-purple-200 text-xs font-mono transition-all"
                        >
                          <Server className="w-3 h-3 text-purple-400" />
                          <span>Dev</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white text-xs font-mono transition-all"
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* REST OF PROJECT CONTENT (CARDS + CASE STUDY BODY + RIGHT TOC)             */}
          {/* ========================================================================= */}
          <div
            className={`transition-all duration-500 ease-out delay-100 ${
              contentRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            {/* 4 COMPACT KEY-VALUE CARDS (NO TRUNCATION) */}
            <section className="mb-14 sm:mb-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                    {language === "es" ? "AÑO" : "YEAR"}
                  </span>
                  <span className="text-sm font-mono text-neutral-200 block font-medium">
                    {project.date}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                    {language === "es" ? "CONTEXTO" : "CONTEXT"}
                  </span>
                  <span className="text-sm font-mono text-neutral-200 block font-medium">
                    {project.teamOrContext || project.category}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                    {language === "es" ? "ROL" : "ROLE"}
                  </span>
                  <span className="text-sm font-mono text-neutral-200 block font-medium">
                    {project.role}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                    {language === "es" ? "CATEGORÍA" : "CATEGORY"}
                  </span>
                  <span className="text-sm font-mono text-neutral-200 block font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* BODY CONTENT (CASE STUDY SECTIONS) + RIGHT TOC NAVBAR                     */}
            {/* ========================================================================= */}
            <div className="flex items-start gap-10 xl:gap-14">
              <main className="flex-1 min-w-0">
                <article className="space-y-14">
                  {/* SECTION 1: OVERVIEW */}
                  <section id="overview" className="scroll-mt-28 space-y-5">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                      <span>{language === "es" ? "Resumen General" : "Overview"}</span>
                    </h2>

                    <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      <FormattedText text={project.shortDescription} />
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
                                <FormattedText text={pillar.description} />
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>

                  {/* SECTION 2: THE PROBLEM */}
                  <section id="the-problem" className="scroll-mt-28 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                      <span>{language === "es" ? "El Reto de Ingeniería" : "The Problem"}</span>
                    </h2>

                    <div className="space-y-3 font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      <p>
                        <FormattedText text={project.problem?.summary} />
                      </p>

                      {project.problem?.points && project.problem.points.length > 0 && (
                        <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-sm sm:text-base pt-2">
                          {project.problem.points.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">
                              <FormattedText text={point} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>

                  {/* SECTION 3: WHAT I BUILT */}
                  <section id="what-i-built" className="scroll-mt-28 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">##</span>
                      <span>{language === "es" ? "Lo que Construí & Arquitectura" : "What I Built"}</span>
                    </h2>

                    <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      <FormattedText text={project.solution?.summary} />
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
                              <FormattedText text={dec.why} />
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>

                  {/* SECTION 4: TECH STACK */}
                  <section id="tech-stack" className="scroll-mt-28 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2.5">
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
                      <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2.5">
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
                                  <FormattedText text={parts.slice(1).join(":").trim()} />
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
                                <FormattedText text={feat} />
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
                        <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2.5">
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
                                <FormattedText text={metric.description} />
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

              {/* ========================================================================= */}
              {/* RIGHT COLUMN: STICKY "ON THIS PAGE" TABLE OF CONTENTS                     */}
              {/* ========================================================================= */}
              <aside
                className="sticky top-24 self-start font-mono text-xs hidden xl:block w-[180px] 2xl:w-[210px] shrink-0"
                aria-label="Table of contents"
              >
                <div className="text-neutral-400 tracking-[0.06em] mb-4 pb-2 border-b border-white/10 font-medium">
                  <span className="text-purple-400 font-bold">##</span>{" "}
                  {language === "es" ? "EN ESTA PÁGINA" : "ON THIS PAGE"}
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
                              ? "border-l-2 border-purple-400 text-purple-300 pl-3.5 font-semibold"
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
        </div>
      </div>

        {/* ========================================================================= */}
        {/* MOBILE DRAWER FLYOUT (< lg)                                               */}
        {/* ========================================================================= */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileDrawerOpen(false)}
            />
            <div className="relative w-full max-w-[320px] bg-[#0c0517] border-l border-white/10 shadow-2xl h-full flex flex-col p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-medium">
                    OTHER PROJECTS
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5 flex-1">
                {projectList.map((p) => {
                  const isCurrent = p.slug === slug;
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={`group flex flex-col gap-1 px-4 py-3 rounded-xl transition-all text-left ${
                        isCurrent
                          ? "bg-white/10 text-white shadow-sm"
                          : "hover:bg-white/5 text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold truncate transition-colors ${
                          isCurrent ? "text-white" : "text-neutral-200 group-hover:text-white"
                        }`}
                      >
                        {p.title}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest ${
                          p.status === "LIVE"
                            ? "text-emerald-400 font-medium"
                            : "text-neutral-500"
                        }`}
                      >
                        {p.status}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-white/10 text-xs font-mono text-neutral-500 text-center">
                {language === "es" ? "Toca fuera para cerrar" : "Tap outside to close"}
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
