"use client";

import {
  Cloud,
  Server,
  Cpu,
  Layers,
  BarChart3,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;

  const pillarIcons = [Cloud, Server, BarChart3, Cpu, Layers];

  const pillars = t.pillars.map((pillar, idx) => ({
    ...pillar,
    icon: pillarIcons[idx] || Server,
  }));

  const topPillars = pillars.slice(0, 2);
  const bottomPillars = pillars.slice(2, 5);

  return (
    <section id="skills" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2">
              {t.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t.title} {t.titleItalic}
            </h2>
          </div>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* TOP ROW: 2 PILLARS (CLOUD & BACKEND) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {topPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 md:p-8 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-950/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* CARD HEADER: ICON + (CATEGORY & TITLE) */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300 mb-0.5">
                        {pillar.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* CARD SUMMARY */}
                  <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                    {pillar.summary}
                  </p>
                </div>

                {/* CARD PILLS */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200 bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 hover:text-white hover:bg-purple-900/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM ROW: 3 PILLARS (DATA, AI, FRONTEND) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-950/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* CARD HEADER: ICON + (CATEGORY & TITLE) */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-purple-300 mb-0.5 truncate">
                        {pillar.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* CARD SUMMARY */}
                  <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed mb-5">
                    {pillar.summary}
                  </p>
                </div>

                {/* CARD PILLS */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-neutral-200 bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 hover:text-white hover:bg-purple-900/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
