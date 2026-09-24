"use client";

import { use, useState, useEffect, useMemo, useCallback } from "react";
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
  Server,
  Layers,
  X,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Sparkles,
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedCmdIndex, setCopiedCmdIndex] = useState<number | null>(null);
  const [endpointsExpanded, setEndpointsExpanded] = useState(true);

  const handleCopyCommand = (cmd: string, idx: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmdIndex(idx);
    setTimeout(() => setCopiedCmdIndex(null), 2000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setContentRevealed(false);
    setCurrentSlide(0);
    const timer = setTimeout(() => {
      setContentRevealed(true);
    }, 380);
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

  // Formatted projects list for quick-switching in left sidebar
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
    if (p.slug === "wheelus") shortTitle = "WheelUS — Movilidad";
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

  // Carousel images for the Hero Showcase Window
  const carouselImages = useMemo(() => {
    const imagesFromGallery =
      project.evidenceGallery?.filter((e) => e.type === "image" && e.src) || [];

    if (imagesFromGallery.length > 0) {
      return imagesFromGallery;
    }

    if (project.heroImage) {
      return [
        {
          id: "hero-image",
          type: "image" as const,
          tabLabel: project.title,
          badge: project.category,
          title: project.title,
          description: project.subtitle,
          src: project.heroImage,
          openUrl: project.liveUrl,
          openLabel: language === "es" ? "Ver en Vivo" : "Open Live",
        },
      ];
    }

    return [];
  }, [project, language]);

  const nextSlide = useCallback(() => {
    if (carouselImages.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    if (carouselImages.length > 1) {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
    }
  }, [carouselImages.length]);

  // Architecture diagram from evidenceGallery
  const architectureDiagram = project.evidenceGallery?.find(
    (e) => e.id === "architecture" || e.type === "iframe"
  );

  // Live endpoints combining liveDemos and telemetry
  const allLiveEndpoints = useMemo(() => {
    const list = [...(project.liveDemos || [])];
    const posthogEvidence = project.evidenceGallery?.find(
      (e) => e.id === "posthog-telemetry"
    );
    if (posthogEvidence && !list.some((d) => d.url.includes("posthog"))) {
      list.push({
        label: posthogEvidence.title || "PostHog Analytics Dashboard",
        url: posthogEvidence.openUrl || posthogEvidence.src || "",
        badge: posthogEvidence.badge || "PostHog · Live",
        description:
          posthogEvidence.description || "Live product analytics dashboard.",
      });
    }
    return list;
  }, [project.liveDemos, project.evidenceGallery]);

  const hasLiveInspection = useMemo(
    () =>
      allLiveEndpoints.length > 0 ||
      (project.inspectionCommands && project.inspectionCommands.length > 0),
    [allLiveEndpoints, project.inspectionCommands]
  );

  // Table of contents navigation items
  const tocItems = useMemo(
    () => [
      { id: "overview", label: language === "es" ? "01. Resumen" : "01. Overview" },
      {
        id: "the-problem",
        label: language === "es" ? "02. El Reto" : "02. The Problem",
      },
      {
        id: "what-i-built",
        label: language === "es" ? "03. Arquitectura" : "03. What I Built",
      },
      ...(architectureDiagram
        ? [
            {
              id: "architecture-diagram",
              label:
                language === "es" ? "Topología del Clúster" : "Cluster Topology",
            },
          ]
        : []),
      ...(hasLiveInspection
        ? [
            {
              id: "live-inspection",
              label:
                language === "es" ? "04. Endpoints en Vivo" : "04. Live Endpoints",
            },
          ]
        : []),
    ],
    [language, architectureDiagram, hasLiveInspection]
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

  const activeImage = carouselImages[currentSlide];
  const activeImageActionUrl =
    activeImage?.openUrl ||
    project.devUrl ||
    project.liveUrl ||
    project.githubUrl;
  const activeImageActionLabel =
    activeImage?.openLabel ||
    (language === "es" ? "Ver Proyecto" : "View Project");

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
        <aside className="w-full lg:w-72 flex-shrink-0 lg:border-r border-white/10 hidden lg:block px-3 sm:px-4 xl:px-5">
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
                OTHER PROJECTS
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
                        className={`font-mono text-xs sm:text-sm font-medium truncate transition-colors ${
                          isCurrent
                            ? "text-white"
                            : "text-neutral-200 group-hover:text-white"
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
        {/* RIGHT: MAIN CONTENT AREA                                                */}
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
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white cursor-pointer"
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
            {/* TOP HERO SECTION: 2-COLUMN SPLIT (ORIGINAL POSITIONING + CAROUSEL)        */}
            {/* ========================================================================= */}
            <header className="mb-10 sm:mb-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* LEFT: TITLE, SUBTITLE, BUTTONS & TECH TAGS */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {/* PROJECT TITLE */}
                  <h1
                    style={{ viewTransitionName: "case-title" }}
                    className="font-mono font-medium text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-white tracking-[-0.03em] leading-[1.08] mb-4 text-balance"
                  >
                    {project.title.replace(/E-Commerce/g, "E\u2011Commerce")}
                  </h1>

                  {/* SUBTITLE */}
                  <p
                    style={{ viewTransitionName: "case-desc" }}
                    className="font-mono text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6"
                  >
                    <FormattedText text={project.subtitle} />
                  </p>

                  {/* ACTION PILL BUTTONS */}
                  <div
                    className={`flex flex-wrap items-center gap-2.5 mb-6 transition-all duration-500 ease-out delay-75 ${
                      contentRevealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{language === "es" ? "Ver Producción" : "Live Demo"}</span>
                      </a>
                    )}

                    {(project.githubUrl || project.gitlabUrl) && (
                      <a
                        href={project.githubUrl || project.gitlabUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white text-xs font-mono transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{language === "es" ? "Repositorio" : "Source Code"}</span>
                      </a>
                    )}

                    {architectureDiagram && (
                      <button
                        type="button"
                        onClick={() => scrollTo("architecture-diagram")}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-purple-500/20 bg-purple-950/20 hover:bg-purple-900/30 text-purple-300 text-xs font-mono transition-all cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5 text-purple-400" />
                        <span>{language === "es" ? "Topología" : "Architecture"}</span>
                      </button>
                    )}
                  </div>

                  {/* TECH TAGS */}
                  <div
                    className={`flex flex-wrap gap-2 transition-all duration-500 ease-out delay-100 ${
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

                {/* RIGHT: MACOS WINDOW FRAME WITH INTERACTIVE IMAGE CAROUSEL */}
                <div
                  className={`lg:col-span-7 transition-all duration-500 ease-out delay-75 ${
                    contentRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.7)] group relative">
                    {/* WINDOW HEADER */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#120822] border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>

                      <div className="flex items-center gap-2.5">
                        {/* SLIDE COUNTER (IF > 1) */}
                        {carouselImages.length > 1 && (
                          <span className="font-mono text-xs text-neutral-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
                            {String(currentSlide + 1).padStart(2, "0")} /{" "}
                            {String(carouselImages.length).padStart(2, "0")}
                          </span>
                        )}

                        <div className="font-mono text-[11px] text-neutral-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 hidden sm:flex items-center gap-1.5">
                          <span className="text-purple-400">🔒</span>
                          <span>{slug}.jhojan.cloud</span>
                        </div>
                      </div>
                    </div>

                    {/* WINDOW SCREENSHOT WITH NAVIGATION ARROWS */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                      {activeImage?.src ? (
                        <Image
                          src={activeImage.src}
                          alt={activeImage.title || project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 850px"
                          priority
                          className="object-cover object-top transition-opacity duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#140c1c] text-purple-300 font-mono">
                          {project.title}
                        </div>
                      )}

                      {/* CAROUSEL CONTROLS (< & >) */}
                      {carouselImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-purple-950/80 border border-white/15 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer backdrop-blur-sm z-10"
                          >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>

                          <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-purple-950/80 border border-white/15 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer backdrop-blur-sm z-10"
                          >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>

                          {/* BOTTOM DOT INDICATORS */}
                          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 z-10">
                            {carouselImages.map((_, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                  currentSlide === idx
                                    ? "w-5 bg-purple-400"
                                    : "w-1.5 bg-white/40 hover:bg-white/70"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* BOTTOM CAPTION & INTERACTIVE ACTIONS */}
                    <div className="p-3.5 sm:p-4 bg-[#0d0718] border-t border-white/10 flex flex-col sm:flex-row sm:items-stretch justify-between gap-3">
                      <div className="space-y-0.5 min-w-0 flex-1 flex flex-col justify-center">
                        <span className="font-mono text-xs sm:text-sm font-medium text-white block truncate">
                          {activeImage?.tabLabel || activeImage?.title}
                        </span>
                        {activeImage?.description && (
                          <p className="font-mono text-xs text-neutral-400 font-light leading-relaxed line-clamp-1 sm:line-clamp-2">
                            {activeImage.description}
                          </p>
                        )}
                      </div>

                      {activeImageActionUrl && (
                        <a
                          href={activeImageActionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="self-stretch inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-0 rounded-lg border border-purple-500/30 bg-purple-950/30 hover:bg-purple-900/40 text-purple-200 text-xs font-mono transition-all shrink-0 w-fit sm:w-auto hover:border-purple-400/60"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span className="whitespace-nowrap">{activeImageActionLabel}</span>
                        </a>
                      )}
                    </div>

                    {/* BREADCRUMB SCREEN NAVIGATION (SOBER & CLEAN) */}
                    {carouselImages.length > 1 && (
                      <nav
                        aria-label="Screen navigation"
                        className="px-4 py-2 bg-[#090412] border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none font-mono text-xs justify-center"
                      >
                        {carouselImages.map((img, idx) => {
                          const isActive = currentSlide === idx;
                          return (
                            <div key={img.id || idx} className="flex items-center gap-2 shrink-0">
                              {idx > 0 && (
                                <span className="text-neutral-600 select-none text-[11px]">/</span>
                              )}
                              <button
                                type="button"
                                onClick={() => setCurrentSlide(idx)}
                                className={`transition-all cursor-pointer py-0.5 ${
                                  isActive
                                    ? "text-purple-300 font-medium underline underline-offset-4 decoration-purple-400"
                                    : "text-neutral-400 hover:text-neutral-200"
                                }`}
                              >
                                {img.tabLabel || img.title}
                              </button>
                            </div>
                          );
                        })}
                      </nav>
                    )}
                  </div>
                </div>
              </div>
            </header>


            {/* ========================================================================= */}
            {/* BODY CONTENT (CASE STUDY SECTIONS) + RIGHT TOC NAVBAR                     */}
            {/* ========================================================================= */}
            <div className="flex items-start gap-10 xl:gap-14">
              <main className="flex-1 min-w-0">
                <article className="space-y-14">
                  {/* SECTION 01: OVERVIEW */}
                  <section id="overview" className="scroll-mt-28 space-y-4">
                    <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">01.</span>
                      <span>{language === "es" ? "Resumen General" : "Project Overview"}</span>
                    </h2>

                    <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      <FormattedText text={project.shortDescription} />
                    </p>

                    {/* ARCHITECTURAL PILLARS (IF PRESENT) */}
                    {project.pillars && project.pillars.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                        {project.pillars.map((pillar, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-purple-950/50 text-purple-300 border border-purple-500/30">
                                  {pillar.badge}
                                </span>
                              </div>
                              <span className="text-sm font-mono font-medium text-white block mb-1.5">
                                {pillar.title}
                              </span>
                              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                                <FormattedText text={pillar.description} />
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>

                  {/* SECTION 02: THE PROBLEM */}
                  <section id="the-problem" className="scroll-mt-28 space-y-4">
                    <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">02.</span>
                      <span>{language === "es" ? "El Reto de Ingeniería" : "The Problem"}</span>
                    </h2>

                    <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      <FormattedText text={project.problem?.summary} />
                    </p>

                    {project.problem?.points && project.problem.points.length > 0 && (
                      <ul className="space-y-2.5 pt-1 max-w-3xl">
                        {project.problem.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400/80 mt-2 shrink-0" />
                            <span>
                              <FormattedText text={point} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  {/* SECTION 03: WHAT I BUILT & ARCHITECTURE */}
                  <section id="what-i-built" className="scroll-mt-28 space-y-4">
                    <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                      <span className="text-purple-400 font-mono text-sm font-bold">03.</span>
                      <span>
                        {language === "es"
                          ? "Lo que Construí & Arquitectura"
                          : "What I Built & Architecture"}
                      </span>
                    </h2>

                    <p className="font-light text-neutral-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      <FormattedText text={project.solution?.summary} />
                    </p>

                    {/* Architectural Decisions Grid (1-sentence points) */}
                    {project.architecture?.decisions &&
                      project.architecture.decisions.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                          {project.architecture.decisions.map((dec, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
                            >
                              <div className="font-mono text-sm font-medium text-white mb-2">
                                {dec.choice}
                              </div>
                              <p className="font-mono text-xs text-neutral-400 font-light leading-relaxed">
                                <FormattedText text={dec.why} />
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                  </section>

                  {/* CLUSTER TOPOLOGY (ARCHIFY DIAGRAM) */}
                  {architectureDiagram && (
                    <section
                      id="architecture-diagram"
                      className="scroll-mt-28 space-y-4 pt-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h3 className="font-mono text-lg sm:text-xl font-medium text-white flex items-center gap-2">
                          <span className="text-purple-400 font-mono text-xs font-bold">✦</span>
                          <span>
                            {language === "es"
                              ? "Topología del Clúster & Flujo de Datos"
                              : "Cluster Topology & Data Flow"}
                          </span>
                        </h3>

                        <a
                          href={
                            architectureDiagram.openUrl ||
                            "/diagrams/gazu-architecture.html"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 hover:bg-purple-900/40 text-purple-200 text-xs font-mono transition-all w-fit shadow-sm"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>
                            {language === "es"
                              ? "Abrir pantalla completa"
                              : "Open full diagram"}
                          </span>
                        </a>
                      </div>

                      <p className="font-light text-neutral-400 leading-relaxed text-xs sm:text-sm max-w-3xl">
                        {architectureDiagram.description}
                      </p>

                      {/* Archify Interactive Frame */}
                      <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0d0718] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#140c1c] border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <span className="text-xs font-mono text-neutral-400 ml-2">
                              Archify :: Interactive System Topology
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                            {architectureDiagram.badge || "Live Archify"}
                          </span>
                        </div>

                        <div className="relative w-full aspect-[16/10] sm:aspect-auto sm:h-[560px] bg-[#0c0814]">
                          <iframe
                            src={
                              architectureDiagram.src ||
                              "/diagrams/gazu-architecture.html"
                            }
                            title={architectureDiagram.title}
                            className="w-full h-full border-0"
                            loading="lazy"
                            allow="fullscreen"
                          />
                        </div>

                        {/* Mobile Quick Action Footer */}
                        <div className="sm:hidden flex items-center justify-between px-3.5 py-2 bg-[#120a1a] border-t border-white/10 text-[11px] font-mono">
                          <span className="text-neutral-400">
                            {language === "es"
                              ? "Vista móvil optimizada"
                              : "Optimized mobile view"}
                          </span>
                          <a
                            href={
                              architectureDiagram.openUrl ||
                              "/diagrams/gazu-architecture.html"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-purple-300 hover:text-white font-medium"
                          >
                            <Maximize2 className="w-3 h-3 text-purple-400" />
                            <span>
                              {language === "es"
                                ? "Abrir interactivo"
                                : "Open interactive"}
                            </span>
                          </a>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* SECTION 04: LIVE INSPECTION & ENDPOINTS (OPTIONAL / COLLAPSIBLE) */}
                  {hasLiveInspection && (
                    <section id="live-inspection" className="scroll-mt-28 space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <h2 className="font-mono text-xl sm:text-2xl font-medium text-white flex items-center gap-2.5">
                          <span className="text-purple-400 font-mono text-sm font-bold">04.</span>
                          <span>
                            {language === "es"
                              ? "Inspección del Sistema & Endpoints en Vivo"
                              : "Live Cluster Inspection & Endpoints"}
                          </span>
                        </h2>

                        <button
                          type="button"
                          onClick={() => setEndpointsExpanded((prev) => !prev)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-neutral-300 transition-colors cursor-pointer"
                        >
                          <span>
                            {endpointsExpanded
                              ? language === "es"
                                ? "Colapsar"
                                : "Collapse"
                              : language === "es"
                              ? "Explorar"
                              : "Explore"}
                          </span>
                          {endpointsExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                          )}
                        </button>
                      </div>

                      <p className="font-light text-neutral-400 leading-relaxed text-xs sm:text-sm max-w-3xl">
                        {language === "es"
                          ? "Links y comandos para auditoría técnica directa: prueba el GraphQL Playground, métricas en vivo de Prometheus o la analítica en PostHog si deseas profundizar."
                          : "Direct technical inspection links and terminal commands: test the GraphQL Playground, live Prometheus metrics, or PostHog telemetry."}
                      </p>

                      {endpointsExpanded && (
                        <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                          {/* Live Endpoint Cards Grid */}
                          {allLiveEndpoints.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {allLiveEndpoints.map((demo, idx) => (
                                <a
                                  key={idx}
                                  href={demo.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-purple-500/50 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                      <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                                        <span>{demo.label}</span>
                                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                      </span>
                                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30 shrink-0">
                                        {demo.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-3">
                                      {demo.description}
                                    </p>
                                  </div>
                                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                                    <span className="truncate max-w-[220px]">
                                      {demo.url.replace(/^https?:\/\//, "")}
                                    </span>
                                    <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
                                      →
                                    </span>
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}

                          {/* Interactive Terminal Inspection Commands */}
                          {project.inspectionCommands &&
                            project.inspectionCommands.length > 0 && (
                              <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                  <Terminal className="w-4 h-4 text-purple-400" />
                                  <span className="uppercase tracking-wider font-semibold text-white">
                                    {language === "es"
                                      ? "Auditoría en Terminal (cURL Directo)"
                                      : "Terminal Verification (Direct cURL)"}
                                  </span>
                                </div>

                                <div className="space-y-2.5">
                                  {project.inspectionCommands.map((cmd, idx) => (
                                    <div
                                      key={idx}
                                      className="rounded-xl border border-white/10 bg-[#08040f] overflow-hidden"
                                    >
                                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.03] border-b border-white/10">
                                        <span className="text-xs font-mono text-neutral-300 font-medium">
                                          {cmd.title}
                                        </span>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleCopyCommand(cmd.command, idx)
                                          }
                                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                                        >
                                          {copiedCmdIndex === idx ? (
                                            <>
                                              <Check className="w-3.5 h-3.5 text-green-400" />
                                              <span className="text-green-400">
                                                {language === "es"
                                                  ? "Copiado!"
                                                  : "Copied!"}
                                              </span>
                                            </>
                                          ) : (
                                            <>
                                              <Copy className="w-3.5 h-3.5" />
                                              <span>
                                                {language === "es" ? "Copiar" : "Copy"}
                                              </span>
                                            </>
                                          )}
                                        </button>
                                      </div>
                                      <div className="p-3.5 overflow-x-auto text-xs font-mono text-purple-300/90 leading-relaxed">
                                        <pre className="whitespace-pre-wrap">
                                          {cmd.command}
                                        </pre>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      )}
                    </section>
                  )}

                </article>

                {/* FOOTER: PREV & NEXT PROJECT */}
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
                        <span className="truncate max-w-[250px] block text-neutral-200 group-hover:text-white font-medium">
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
                        <span className="truncate max-w-[250px] block text-neutral-200 group-hover:text-white font-medium">
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
                className="p-1.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
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
                      className={`font-mono text-xs sm:text-sm font-medium truncate transition-colors ${
                        isCurrent
                          ? "text-white"
                          : "text-neutral-200 group-hover:text-white"
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
              {language === "es"
                ? "Toca fuera para cerrar"
                : "Tap outside to close"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
