"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].experience;

  // Track expanded items for detailed technical architecture inspect (checklist-style toggle)
  const [expandedRoles, setExpandedRoles] = useState<number[]>([]);
  const [expandedEducation, setExpandedEducation] = useState<number[]>([]);

  const toggleRole = (idx: number) => {
    setExpandedRoles((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleEducation = (idx: number) => {
    setExpandedEducation((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const educationItems = [
    {
      period: "2022 – 2026",
      status: language === "es" ? "Promedio: 4.4 / 5.0" : "GPA: 4.4 / 5.0",
      title:
        language === "es"
          ? "Ingeniería Informática (Computational Science)"
          : "B.S. in Computer Science & Engineering",
      institution: "Universidad de La Sabana",
      location: language === "es" ? "Chía, Colombia" : "Chía, Colombia",
      description:
        language === "es"
          ? "Pregrado en Ingeniería Informática con énfasis en Arquitectura de Software, Sistemas Distribuidos de alta concurrencia y Almacenamiento Vectorial. Beneficiario de Beca de Excelencia Académica del 80% otorgada al ingreso por mérito continuo."
          : "Undergraduate degree in Computer Engineering with core emphasis on Software Architecture, High-Concurrency Distributed Systems, and Vector Storage. Recipient of entrance 80% Academic Excellence Scholarship.",
      badgeMetric:
        language === "es"
          ? "Beca de Excelencia 80% · Promedio Acumulado: 4.4 / 5.0"
          : "80% Academic Excellence Scholarship · Cumulative GPA: 4.4 / 5.0",
      achievements: [
        {
          tag: language === "es" ? "Beca de Excelencia Académica" : "Academic Excellence Scholarship",
          description:
            language === "es"
              ? "Beneficiario de Beca de Excelencia Académica del 80% otorgada al ingreso por mérito sobresaliente y mantenida de forma continua con un promedio acumulado de 4.4 / 5.0."
              : "Recipient of entrance 80% Academic Excellence Scholarship awarded for outstanding merit, continuously maintained with a 4.4 / 5.0 cumulative GPA.",
        },
        {
          tag: language === "es" ? "Liderazgo & Tutoría Universitaria" : "Academic Leadership & Tutoring",
          description:
            language === "es"
              ? "Tutor Académico en Fundamentos de Programación y Ciencias de la Computación, y Miembro Activo del Consejo Estudiantil de la Facultad de Ingeniería."
              : "Academic Peer Tutor in Computer Science and Programming Fundamentals, and Active Member of the Engineering Student Council.",
        },
        {
          tag: language === "es" ? "Énfasis Curricular" : "Curricular Focus",
          description:
            language === "es"
              ? "Profundización en modelado de datos relacionales, computación concurrente, patrones de arquitectura de microservicios y sistemas distribuidos tolerantes a fallos."
              : "Core specialization in relational data modeling, concurrent computing, microservices architectural patterns, and fault-tolerant distributed systems.",
        },
        {
          tag: language === "es" ? "Proyecto Aplicado / Capstone" : "Applied Capstone",
          description:
            language === "es"
              ? "Diseño e implementación de la arquitectura central y flujos de reserva de WheelUS, plataforma de carpooling universitario."
              : "Designed and implemented the core architecture and booking dispatch flows for the WheelUS university carpooling platform.",
        },
      ],
      technologies: [
        language === "es" ? "Arquitectura de Software" : "Software Architecture",
        language === "es" ? "Sistemas Distribuidos" : "Distributed Systems",
        language === "es" ? "Almacenamiento Vectorial" : "Vector Storage",
        language === "es" ? "Bases de Datos Relacionales" : "Relational Databases",
        language === "es" ? "Ingeniería Cloud" : "Cloud Engineering",
        language === "es" ? "Algoritmia y Concurrencia" : "Algorithms & Concurrency",
        language === "es" ? "Sistemas Operativos (Linux)" : "Operating Systems (Linux)",
      ],
    },
    {
      period: "2025",
      status: language === "es" ? "🏆 1er Lugar Hackathon" : "🏆 1st Place Hackathon",
      title:
        language === "es"
          ? "1er Lugar — Sabana Hack 2025 (Cruz Roja Colombiana)"
          : "1st Place — Sabana Hack 2025 (Colombian Red Cross)",
      institution: "Cruz Roja Colombiana & Universidad de La Sabana",
      location: language === "es" ? "Bogotá, Colombia" : "Bogotá, Colombia",
      description:
        language === "es"
          ? "Diseño e implementación en sprint intensivo de 24 horas de un sistema distribuido de alertas tempranas y triaje de emergencias humanitarias asistido por IA multimodal."
          : "Engineered in a 24-hour intensive sprint a real-time distributed early-warning alert and multimodal AI emergency triage platform for humanitarian disaster response.",
      badgeMetric:
        language === "es"
          ? "Sprint de 24h · Alertas en Tiempo Real con IA"
          : "24h Sprint · Real-time AI Emergency Alerts",
      achievements: [
        {
          tag: language === "es" ? "Ingeniería en Tiempo Real" : "Real-Time Engineering",
          description:
            language === "es"
              ? "Pipeline de ingesta y georreferenciación de incidentes con WebSockets y telemetría en vivo para despacho de brigadas."
              : "Incident ingestion and georeferencing pipeline with WebSockets and live telemetry for emergency brigade dispatch.",
        },
        {
          tag: language === "es" ? "IA Multimodal" : "Multimodal AI",
          description:
            language === "es"
              ? "Clasificación automatizada de gravedad del incidente a partir de imágenes de campo y descripciones de texto."
              : "Automated incident severity triage based on field imagery and audio/text incident descriptions.",
        },
      ],
      technologies: [
        "FastAPI",
        "WebSockets",
        "Python",
        "Multimodal AI",
        "Real-Time Telemetry",
        "Cloud Deployment",
      ],
    },
  ];

  const handleAction = (type: "cv" | "resume", mode: "download" | "preview") => {
    const fileUrl =
      type === "cv"
        ? "/resume/Jhojan_JimenezCV.pdf"
        : "/resume/Jhojan_Jimenez_Resume.pdf";
    const downloadName =
      type === "cv" ? "Jhojan_JimenezCV.pdf" : "Jhojan_Jimenez_Resume.pdf";

    if (mode === "preview") {
      window.open(fileUrl, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderExperienceBody = () => (
    <div className="container mx-auto max-w-6xl">
      {/* OFFICIAL RESUME HUB (DOWNLOAD BUTTONS) */}
      <div id="resume-hub" className="scroll-mt-28 mb-16 sm:mb-24 text-center max-w-2xl mx-auto space-y-4">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {language === "es" ? "Curriculum Vitae & Resume" : "Curriculum Vitae & Resume"}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
          {t.resumeHub.description}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* CV Español */}
          <div className="inline-flex rounded-full overflow-hidden border border-[#8750f7]/50 shadow-lg shadow-[#8750f7]/10">
            <button
              onClick={() => handleAction("cv", "download")}
              className="flex items-center gap-2 px-6 py-3 bg-[#8750f7] hover:bg-[#7435f5] text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.resumeHub.downloadCv}</span>
            </button>
            <button
              onClick={() => handleAction("cv", "preview")}
              aria-label="Preview CV"
              className="flex items-center justify-center px-4 py-3 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs sm:text-sm cursor-pointer"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Resume English */}
          <div className="inline-flex rounded-full overflow-hidden border border-[#8750f7]/50 shadow-lg shadow-[#8750f7]/10">
            <button
              onClick={() => handleAction("resume", "download")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8750f7] to-[#a855f7] hover:brightness-110 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.resumeHub.downloadResume}</span>
            </button>
            <button
              onClick={() => handleAction("resume", "preview")}
              aria-label="Preview Resume"
              className="flex items-center justify-center px-4 py-3 bg-[#140c1c] text-purple-200 hover:bg-white/10 hover:text-white transition-all border-l border-[#8750f7]/40 text-xs sm:text-sm cursor-pointer"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* STACKED FULL-WIDTH EXPERIENCE & EDUCATION SECTIONS */}
      <div className="space-y-16 sm:space-y-20 text-left">
        {/* SECTION 1: MY EXPERIENCE (CLEAN TIMELINE STYLE) */}
        <div id="experience-list" className="scroll-mt-28">
          {/* Column Header with Gerold's Badge/Award Icon */}
          <div className="flex items-center gap-3.5 mb-10 sm:mb-12">
            <div className="text-[#8750f7]">
              <Award className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === "es" ? "Mi Experiencia" : "My Experience"}
            </h3>
          </div>

          {/* Continuous Vertical Timeline */}
          <div className="relative border-l border-white/15 ml-3 sm:ml-4 space-y-12 sm:space-y-16">
            {t.roles.map((job, idx) => {
              const isExpanded = expandedRoles.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleRole(idx)}
                  className="relative pl-7 sm:pl-9 group cursor-pointer transition-colors"
                >
                  {/* Timeline Circular Dot Marker (Centered on the line) */}
                  <div
                    className={`absolute -left-[6px] top-1.5 rounded-full transition-all duration-300 ${
                      job.isCurrent
                        ? "w-3 h-3 bg-[#8750f7] ring-4 ring-[#8750f7]/30 shadow-[0_0_12px_rgba(135,80,247,0.8)]"
                        : "w-3 h-3 bg-[#8750f7]/70 border-2 border-[#0a0512] group-hover:bg-[#8750f7] group-hover:scale-125"
                    }`}
                  />

                  {/* 1. Period on Top */}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#8750f7] tracking-wide">
                      {job.period}
                    </span>
                    {job.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {t.activeStatus}
                      </span>
                    )}
                  </div>

                  {/* 2. Role Title in Bold */}
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-purple-300 transition-colors">
                    {job.title}
                  </h4>

                  {/* 3. Company Name */}
                  <div className="text-sm sm:text-base font-semibold text-neutral-200">
                    {job.company}
                  </div>

                  {/* 4. Location */}
                  <div className="text-xs sm:text-sm text-neutral-400 font-light mb-3">
                    {job.location}
                  </div>

                  {/* 5. Summary Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-3xl">
                    {job.description}
                  </p>

                  {/* 6. Expand / Collapse Trigger Indicator */}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#8750f7] group-hover:text-purple-300 transition-colors">
                    <span>
                      {isExpanded
                        ? language === "es"
                          ? "[-] Ocultar detalles"
                          : "[-] Hide details"
                        : language === "es"
                        ? "[+] Ver arquitectura & entregables"
                        : "[+] View architecture & deliverables"}
                    </span>
                  </div>

                  {/* 7. Expandable Drawer (Animación Framer Motion) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-3 border-t border-white/10 space-y-3 max-w-3xl">
                          {/* Star Metric */}
                          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/30 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                            <span>✦</span>
                            <span>{job.highlightMetric}</span>
                          </div>

                          {/* Achievements with [TAG] */}
                          <div className="space-y-2 pt-1">
                            {job.achievements.map((ach, aIdx) => (
                              <div
                                key={aIdx}
                                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors text-xs sm:text-sm text-neutral-300 leading-relaxed"
                              >
                                <span className="font-mono font-bold text-xs text-[#8750f7] uppercase mr-1.5 block sm:inline">
                                  [{ach.tag}]
                                </span>
                                <span>{ach.description}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Pills */}
                          <div className="pt-1 flex flex-wrap gap-1.5">
                            {(job.technologies || []).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: MY EDUCATION & HONORS (TIMELINE STYLE) */}
        <div>
          {/* Column Header with Gerold's Mortarboard Icon */}
          <div className="flex items-center gap-3.5 mb-10 sm:mb-12">
            <div className="text-[#8750f7]">
              <GraduationCap className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === "es" ? "Mi Educación & Distinciones" : "My Education & Honors"}
            </h3>
          </div>

          {/* Continuous Vertical Timeline */}
          <div className="relative border-l border-white/15 ml-3 sm:ml-4 space-y-12 sm:space-y-16">
            {educationItems.map((edu, idx) => {
              const isExpanded = expandedEducation.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleEducation(idx)}
                  className="relative pl-7 sm:pl-9 group cursor-pointer transition-colors"
                >
                  {/* Timeline Circular Dot Marker (Centered on the line) */}
                  <div
                    className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-[#8750f7]/70 border-2 border-[#0a0512] group-hover:bg-[#8750f7] group-hover:scale-125 transition-all duration-300"
                  />

                  {/* 1. Period on Top */}
                  <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#8750f7] tracking-wide">
                      {edu.period}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium">
                      {edu.status}
                    </span>
                  </div>

                  {/* 2. Degree / Role Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {edu.title}
                  </h4>

                  {/* 3. Institution */}
                  <div className="text-xs sm:text-sm text-purple-200/90 font-medium mt-0.5">
                    {edu.institution}
                  </div>

                  {/* 4. Location */}
                  <div className="text-xs sm:text-sm text-neutral-400 font-light mb-3">
                    {edu.location}
                  </div>

                  {/* 5. Summary Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>

                  {/* 6. Expand / Collapse Trigger Indicator */}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#8750f7] group-hover:text-purple-300 transition-colors">
                    <span>
                      {isExpanded
                        ? language === "es"
                          ? "[-] Ocultar detalles"
                          : "[-] Hide details"
                        : language === "es"
                        ? "[+] Ver detalles & competencias"
                        : "[+] View details & competencies"}
                    </span>
                  </div>

                  {/* 7. Expandable Drawer (Animación Framer Motion) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-3 border-t border-white/10 space-y-3 max-w-3xl">
                          {/* Badge Metric */}
                          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/30 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                            <span>✦</span>
                            <span>{edu.badgeMetric}</span>
                          </div>

                          {/* Achievements with [TAG] */}
                          <div className="space-y-2 pt-1">
                            {edu.achievements.map((ach, aIdx) => (
                              <div
                                key={aIdx}
                                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors text-xs sm:text-sm text-neutral-300 leading-relaxed"
                              >
                                <span className="font-mono font-bold text-xs text-[#8750f7] uppercase mr-1.5 block sm:inline">
                                  [{ach.tag}]
                                </span>
                                <span>{ach.description}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech / Area Pills */}
                          <div className="pt-1 flex flex-wrap gap-1.5">
                            {edu.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="pt-4 sm:pt-6 pb-20 sm:pb-28 px-4 relative z-10 bg-[#0f0715]"
    >
      {renderExperienceBody()}
    </section>
  );
}
