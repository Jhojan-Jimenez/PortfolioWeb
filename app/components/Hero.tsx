"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { utilScrollToSection } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Sparkles,
  Award,
  CheckCircle2,
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

  const stats = [
    {
      number: "+2",
      labelLine1: language === "es" ? "Años de" : "Years of",
      labelLine2: language === "es" ? "Experiencia" : "Experience",
    },
    {
      number: "15+",
      labelLine1: language === "es" ? "Proyectos" : "Projects",
      labelLine2: language === "es" ? "Completados" : "Completed",
    },
    {
      number: "4.4",
      suffix: "/5.0",
      labelLine1: language === "es" ? "Beca de Excelencia" : "Academic Honors",
      labelLine2: language === "es" ? "80% de Mérito" : "80% Merit Scholar",
    },
    {
      number: "99.9%",
      labelLine1: language === "es" ? "Disponibilidad" : "System",
      labelLine2: language === "es" ? "& Fiabilidad" : "Reliability",
    },
  ];

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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-28 sm:pt-36 pb-20 px-4 relative overflow-hidden flex flex-col justify-center bg-[#0f0715]"
    >
      {/* BACKGROUND WATERMARK (GEROLD THEME WATERMARK TEXT) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 1320 300"
          className="w-full max-w-7xl select-none opacity-[0.045]"
        >
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke="#8750f7"
            strokeWidth="3"
            className="text-[280px] font-black tracking-widest uppercase font-mono"
          >
            DEV
          </text>
        </svg>

        {/* Ambient radial glows inspired by Gerold purple lighting */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#8750f7]/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#2a1454]/40 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* GEROLD 2-COLUMN HERO BANNER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 mb-20"
        >
          {/* LEFT COLUMN: HERO CONTENT (col-md-6) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            {/* Hero Subtitle */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {language === "es" ? "Soy Jhojan Jimenez" : "I am Jhojan Jimenez"}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#8750f7] shadow-[0_0_12px_rgba(135,80,247,0.9)] animate-pulse" />
            </div>

            {/* Hero Title with Gerold's Signature Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
                {language === "es"
                  ? "Software Engineer + Cloud Architect"
                  : "Software Engineer + Cloud Architect"}
              </span>
            </h1>

            {/* Lead Description */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {language === "es"
                ? "Diseño y construyo arquitecturas cloud escalables, sistemas distribuidos de alta concurrencia e integración de IA aplicada. Soluciones de ingeniería de misión crítica que garantizan fiabilidad, rendimiento y cero caídas en producción."
                : "I break down complex distributed systems and cloud architectures to build high-concurrency, fault-tolerant solutions and applied AI pipelines that scale to millions of requests with deterministic reliability."}
            </p>

            {/* Gerold Button Box: Download CV + Social Icons */}
            <div className="flex flex-wrap items-center gap-5">
              {/* Primary Download CV Pill */}
              <a
                href={resumeFile}
                download
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#8750f7] text-[#8750f7] hover:bg-[#8750f7] hover:text-white transition-all duration-300 font-semibold text-sm shadow-[0_0_25px_rgba(135,80,247,0.25)] hover:shadow-[0_0_35px_rgba(135,80,247,0.6)] cursor-pointer"
              >
                <span>{language === "es" ? "Descargar CV" : "Download CV"}</span>
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* View Projects CTA button */}
              <button
                onClick={() => utilScrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#140c1c] text-neutral-200 border border-white/10 hover:border-[#8750f7]/60 hover:text-white transition-all duration-300 font-semibold text-sm cursor-pointer hover:shadow-lg hover:shadow-[#8750f7]/20"
              >
                <span>{language === "es" ? "Ver Proyectos" : "Explore Work"}</span>
                <ArrowDown className="w-4 h-4 text-[#8750f7]" />
              </button>

              {/* Social Icons (Gerold circular pills) */}
              <div className="flex items-center gap-3">
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-full border border-[#8750f7]/40 bg-[#140c1c] text-[#8750f7] hover:bg-[#8750f7] hover:text-white hover:border-[#8750f7] transition-all duration-300 hover:rotate-12 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(135,80,247,0.15)]"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HERO IMAGE BOX WITH GEROLD'S ROTATED PROFILE FRAME (col-md-6) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute inset-0 bg-[#8750f7]/30 rounded-[38px] blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10" />

              {/* Gerold's Signature Rotated Box: -4.5deg rotating to 0deg on hover */}
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[350px] lg:h-[430px] rounded-[38px] border-2 border-[#8750f7]/80 bg-[#140c1c] overflow-hidden rotate-[-4.5deg] group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_40px_rgba(135,80,247,0.35)] p-2">
                <div className="w-full h-full rounded-[30px] overflow-hidden relative bg-[#0f0715]">
                  <Image
                    src="/Me.jpeg"
                    alt="Jhojan Jimenez"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 350px"
                    className="object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0715]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Verified floating badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 px-4 py-2 rounded-2xl bg-[#140c1c]/95 border border-[#8750f7]/50 shadow-xl backdrop-blur-md flex items-center gap-2 z-20">
                <CheckCircle2 className="w-4 h-4 text-[#8750f7]" />
                <span className="text-xs font-mono font-bold text-white">
                  {language === "es" ? "Ingeniero Verificado" : "Verified Engineer"}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* GEROLD'S COUNTER WIDGET (FUNFACT ITEMS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-white/10 text-left"
        >
          {stats.map((st, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 sm:gap-4 p-4 rounded-2xl bg-[#140c1c]/60 border border-white/5 hover:border-[#8750f7]/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono shrink-0">
                <span>{st.number}</span>
                {st.suffix && (
                  <span className="text-lg sm:text-xl text-[#8750f7] font-semibold">
                    {st.suffix}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-neutral-300 font-medium leading-snug">
                <span>{st.labelLine1}</span>
                <br />
                <span className="text-neutral-400">{st.labelLine2}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
