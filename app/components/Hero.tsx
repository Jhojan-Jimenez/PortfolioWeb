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
    },
    {
      title: language === "es" ? "Arquitectura Cloud" : "Cloud Architecture",
    },
    {
      title: language === "es" ? "IA Aplicada & Datos" : "Applied AI & Data",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden flex flex-col justify-center bg-[#131313]"
    >
      {/* BACKGROUND NEON GLOWS & ABSTRACT PURPLE WAVES (DESIGN SYSTEM: #7F1DFF, #D46F88, #FFEB34) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#7F1DFF]/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#D46F88]/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#7F1DFF]/12 blur-[130px] rounded-full" />

        {/* Sinusoidal Glowing Ribbon Waves (Matching the reference design) */}
        <svg
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[1440px] h-[720px] opacity-45 overflow-visible"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dsNeonWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F1DFF" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#D46F88" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFEB34" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="dsNeonWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D46F88" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7F1DFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
            </linearGradient>
            <filter id="dsGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Glowing main sinusoidal path flowing behind the center cutout */}
          <path
            d="M -120 340 C 180 160, 440 440, 720 280 C 1000 120, 1260 410, 1560 250"
            stroke="url(#dsNeonWave1)"
            strokeWidth="3"
            filter="url(#dsGlow)"
          />
          <path
            d="M -120 380 C 200 200, 460 480, 740 320 C 1020 160, 1280 440, 1560 290"
            stroke="url(#dsNeonWave2)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            opacity="0.8"
          />
          <path
            d="M -120 280 C 280 420, 580 140, 880 370 C 1140 520, 1380 210, 1560 360"
            stroke="url(#dsNeonWave1)"
            strokeWidth="1.2"
            opacity="0.45"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 12-COLUMN DESKTOP GRID (EXACTLY AS SPECIFIED IN DESIGN SYSTEM SETUP) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6 mb-16"
        >
          {/* LEFT 4 COLUMNS: "Hello," + TAGLINE + CIRCUIT ROLE TRACKS */}
          <motion.div variants={itemVariants} className="lg:col-span-4 text-left">
            {/* "Hello," with horizontal line connector and glowing node */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                {language === "es" ? "Hola," : "Hello,"}
              </span>
              <div className="flex-1 max-w-[80px] sm:max-w-[110px] h-[2px] bg-gradient-to-r from-white/90 via-[#7F1DFF] to-transparent relative">
                <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#FFEB34] shadow-[0_0_12px_rgba(255,235,52,0.9)]" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-sm font-normal">
              {language === "es"
                ? "Diseñando arquitecturas cloud y sistemas distribuidos de alto rendimiento en producción."
                : "Delivering efficient, scalable solutions to transform your tech vision into reality."}
            </p>

            {/* Connected Circuit Role Tracks */}
            <div className="space-y-4 max-w-sm">
              {roleTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between gap-3 text-neutral-300 hover:text-white transition-colors py-1"
                >
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    {track.title}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/15 group-hover:bg-[#7F1DFF]/60 relative transition-all duration-300">
                    <span className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-white group-hover:bg-[#FFEB34] shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:shadow-[0_0_10px_rgba(255,235,52,0.9)] transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER 4 COLUMNS: STUDIO PORTRAIT CUTOUT + CONNECTED CIRCUIT SOCIAL TILES */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex justify-center items-center relative my-6 lg:my-0"
          >
            {/* Ambient purple backlight halo */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-[#7F1DFF]/25 rounded-full blur-[80px] pointer-events-none" />

            {/* Portrait Cutout Frame with smooth bottom fade into #131313 */}
            <div
              className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border border-[#7F1DFF]/30 shadow-[0_0_40px_rgba(127,29,255,0.25)] bg-[#18181d]/80 backdrop-blur-sm group"
              style={{
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            >
              <Image
                src="/Me.jpeg"
                alt="Jhojan Jimenez"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Connected Circuit Wire & Floating Social Media Badges (As in reference image) */}
            <div className="absolute -right-3 sm:-right-5 top-8 flex flex-col items-center z-20">
              {/* Vertical connector circuit line */}
              <div className="absolute top-4 bottom-4 w-[1px] bg-white/20 -z-10" />

              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl bg-[#18181d]/95 border border-white/20 hover:border-[#7F1DFF] backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white hover:scale-110 shadow-xl shadow-black/80 transition-all duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT 4 COLUMNS: LARGE STACKED "I am Jhojan Jimenez" */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 text-left lg:text-left pl-0 lg:pl-6"
          >
            <span className="block text-2xl sm:text-3xl text-neutral-200 font-medium tracking-tight mb-1">
              {language === "es" ? "Soy" : "I am"}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-4">
              Jhojan
              <br />
              Jimenez
            </h1>

            {/* Credential Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181d] border border-[#7F1DFF]/30 text-purple-200 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(127,29,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FFEB34] shadow-[0_0_8px_rgba(255,235,52,0.9)] animate-pulse" />
              <span>
                {language === "es"
                  ? "+2 Años en Prod · Sabana Hack 1º"
                  : "+2 Yrs in Prod · Sabana Hack 1st"}
              </span>
            </div>

            {/* Quick Action Button (Design System gradient: #7F1DFF -> #D46F88) */}
            <div>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7F1DFF] to-[#D46F88] hover:from-[#6b14dd] hover:to-[#be5872] text-white text-xs font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(127,29,255,0.4)] hover:shadow-[0_0_35px_rgba(212,111,136,0.5)] transition-all cursor-pointer font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === "es" ? "Descargar CV (PDF)" : "Download Resume"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* LOWER HERO: "ABOUT ME" FEATURE CARD (EXACTLY MATCHING THE REFERENCE DESIGN) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-[#18181d]/90 border border-white/10 hover:border-[#7F1DFF]/30 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-300"
        >
          {/* Subtle ambient highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7F1DFF]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT SIDE: Heading + Bio + CTAs */}
            <div className="lg:col-span-6 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
                <span>{language === "es" ? "Sobre Mí" : "About Me"}</span>
                <span className="h-[2px] w-12 bg-gradient-to-r from-[#7F1DFF] to-[#D46F88] inline-block" />
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {t.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => utilScrollToSection("projects")}
                  className="px-6 py-2.5 bg-[#eae6df] hover:bg-white text-neutral-950 rounded-full font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-[0_0_20px_rgba(127,29,255,0.3)] cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>{t.ctaProjects}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />
                </button>

                <button
                  onClick={() => utilScrollToSection("contact")}
                  className="px-6 py-2.5 border border-white/20 bg-white/[0.04] hover:bg-[#7F1DFF]/20 hover:border-[#7F1DFF]/40 text-neutral-200 hover:text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  {t.ctaContact}
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: 2 FEATURE HIGHLIGHT ROWS (EXACTLY AS IN THE REFERENCE DESIGN) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Feature 1: Distributed Systems & Cloud */}
              <div
                onClick={() => utilScrollToSection("skills")}
                className="group p-4 sm:p-5 rounded-2xl bg-[#131313] border border-white/10 hover:border-[#7F1DFF]/40 backdrop-blur-md flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer hover:bg-[#18181d]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F1DFF] to-[#D46F88] p-2.5 flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#7F1DFF]/25 group-hover:scale-105 transition-transform">
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

                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-[#7F1DFF] group-hover:border-[#7F1DFF] shrink-0 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Feature 2: High-Throughput Backends & AI */}
              <div
                onClick={() => utilScrollToSection("projects")}
                className="group p-4 sm:p-5 rounded-2xl bg-[#131313] border border-white/10 hover:border-[#7F1DFF]/40 backdrop-blur-md flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer hover:bg-[#18181d]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F1DFF] to-[#4c1d95] p-2.5 flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#7F1DFF]/25 group-hover:scale-105 transition-transform">
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

                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-[#7F1DFF] group-hover:border-[#7F1DFF] shrink-0 transition-all">
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
