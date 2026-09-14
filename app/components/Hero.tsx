"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { utilScrollToSection } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Server,
  Cloud,
  Cpu,
  FileText,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  const socialLinks = [
    {
      href: "https://github.com/Jhojan-Jimenez",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/jhojanjimenez/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:jhojanjimene@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  const resumeFile =
    language === "es"
      ? "/resume/Jhojan_JimenezCV.pdf"
      : "/resume/Jhojan_Jimenez_Resume.pdf";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const roleTracks = [
    {
      title: language === "es" ? "Sistemas Distribuidos" : "Distributed Systems",
      detail: "k3s · ARM64 · OCI",
    },
    {
      title: language === "es" ? "Arquitectura Cloud & APIs" : "Cloud Architecture & APIs",
      detail: "FastAPI · NestJS · Docker",
    },
    {
      title: language === "es" ? "IA Aplicada & Vectores" : "Applied AI & Vector Search",
      detail: "pgvector · CLIP · RAG",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden flex flex-col justify-center"
    >
      {/* BACKGROUND NEON GLOWS & ABSTRACT PURPLE WAVES */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Ambient radial gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-700/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-pink-600/10 blur-[130px] rounded-full" />

        {/* Sinusoidal Glowing Ribbon Waves (SVG) */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] opacity-40 overflow-visible"
          viewBox="0 0 1400 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="purpleWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#9333ea" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="purpleWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            d="M -100 320 C 200 180, 450 420, 700 280 C 950 140, 1200 390, 1500 240"
            stroke="url(#purpleWave1)"
            strokeWidth="2.5"
            filter="url(#neonGlow)"
          />
          <path
            d="M -100 360 C 220 220, 480 460, 720 320 C 970 180, 1220 420, 1500 280"
            stroke="url(#purpleWave2)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.7"
          />
          <path
            d="M -100 260 C 300 400, 600 150, 900 360 C 1150 500, 1350 220, 1500 340"
            stroke="url(#purpleWave1)"
            strokeWidth="1.2"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* TOP 3-COLUMN HERO COMPOSITION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 mb-14"
        >
          {/* LEFT COLUMN: GREETING + TAGLINE + CIRCUIT ROLE TRACKS */}
          <motion.div variants={itemVariants} className="lg:col-span-4 text-left">
            {/* "Hello," with extending line & neon dot */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                {language === "es" ? "Hola," : "Hello,"}
              </span>
              <div className="flex-1 max-w-[90px] sm:max-w-[120px] h-[2px] bg-gradient-to-r from-purple-400 to-purple-500/20 relative">
                <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] animate-pulse" />
              </div>
            </div>

            {/* Subtitle / Tagline */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-sm font-normal">
              {language === "es"
                ? "Diseñando soluciones escalables y sistemas distribuidos para convertir visiones tecnológicas en realidad."
                : "Delivering efficient, scalable solutions to transform your tech vision into reality."}
            </p>

            {/* Circuit Branching Role Lines */}
            <div className="space-y-4 max-w-sm">
              {roleTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between gap-3 text-neutral-300 hover:text-purple-200 transition-colors py-1"
                >
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    {track.title}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-purple-500/40 relative transition-all duration-300">
                    <span className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER COLUMN: PERSON PORTRAIT + FLOATING SOCIAL TILES */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex justify-center items-center relative my-6 lg:my-0"
          >
            {/* Ambient halo behind portrait */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-purple-600/25 rounded-full blur-[70px] pointer-events-none" />

            {/* Portrait Container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.25)] bg-[#0d091a]/80 backdrop-blur-sm group">
              <Image
                src="/Me.jpeg"
                alt="Jhojan Jimenez"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle inner dark gradient bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d091a] to-transparent pointer-events-none" />
            </div>

            {/* Floating Glass Social Tiles (Inspired by the reference image) */}
            <div className="absolute -right-2 sm:-right-4 top-8 flex flex-col gap-3 z-20">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl bg-[#110c22]/90 border border-purple-500/30 backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white hover:border-purple-400 hover:scale-110 shadow-xl shadow-purple-950/60 transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE STACKED "I am Jhojan Jimenez" */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 text-left lg:text-left pl-0 lg:pl-6"
          >
            <span className="block text-2xl sm:text-3xl text-purple-200/90 font-medium tracking-tight mb-1">
              {language === "es" ? "Soy" : "I am"}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-4">
              Jhojan
              <br />
              Jimenez
            </h1>

            {/* Credential highlights */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-200 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {language === "es"
                  ? "+2 Años en Prod · Sabana Hack 1º"
                  : "+2 Yrs in Prod · Sabana Hack 1st"}
              </span>
            </div>

            {/* Quick Action Button */}
            <div>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-xs font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] transition-all cursor-pointer font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === "es" ? "Descargar CV (PDF)" : "Download Resume"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* LOWER HERO: "ABOUT ME" FEATURE CARD (EXACTLY AS IN THE REFERENCE IMAGE) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-[#0e091c]/80 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle card ambient highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT SIDE: Heading + Bio + CTAs */}
            <div className="lg:col-span-6 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
                <span>{language === "es" ? "Sobre Mí" : "About Me"}</span>
                <span className="h-[2px] w-10 bg-purple-500/40 inline-block" />
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {t.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => utilScrollToSection("projects")}
                  className="px-6 py-2.5 bg-[#eae6df] hover:bg-white text-neutral-950 rounded-full font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-purple-500/25 cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>{t.ctaProjects}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />
                </button>

                <button
                  onClick={() => utilScrollToSection("contact")}
                  className="px-6 py-2.5 border border-purple-500/30 bg-purple-950/30 hover:bg-purple-900/50 text-neutral-200 hover:text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  {t.ctaContact}
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: 2 FEATURE HIGHLIGHT TILES WITH GRADIENT ICONS & ARROWS */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Feature 1: Distributed Systems & Cloud */}
              <div
                onClick={() => utilScrollToSection("skills")}
                className="group p-4 sm:p-5 rounded-2xl bg-black/40 border border-purple-500/15 hover:border-purple-400/40 backdrop-blur-md flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer hover:bg-purple-950/20"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 p-2.5 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
                    <Cloud className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate group-hover:text-purple-300 transition-colors">
                      {language === "es"
                        ? "Sistemas Distribuidos & Cloud"
                        : "Distributed Systems & Cloud"}
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">
                      k3s ARM64 · Docker · Cloud Run · PostgreSQL 16 HA
                    </p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-purple-600 group-hover:border-purple-400 shrink-0 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Feature 2: High-Throughput Backends & AI */}
              <div
                onClick={() => utilScrollToSection("projects")}
                className="group p-4 sm:p-5 rounded-2xl bg-black/40 border border-purple-500/15 hover:border-purple-400/40 backdrop-blur-md flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer hover:bg-purple-950/20"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-2.5 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate group-hover:text-purple-300 transition-colors">
                      {language === "es"
                        ? "Backend de Alto Rendimiento & IA"
                        : "High-Throughput Backends & AI"}
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">
                      FastAPI · NestJS · pgvector · CLIP · OpenTelemetry
                    </p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-purple-600 group-hover:border-purple-400 shrink-0 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
