"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { utilScrollToSection } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage } = useLanguage();

  const t = TRANSLATIONS[language].header;

  const navItems = [
    { id: "projects", label: t.nav.projects },
    { id: "experience-list", label: t.nav.experience },
    { id: "resume-hub", label: t.nav.resumeHub },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "projects", "resume-hub", "experience-list", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    utilScrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-7 px-4 sm:px-5 py-2 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-[#0c0a14]/90 border-purple-500/20 shadow-2xl shadow-purple-950/40 backdrop-blur-xl"
            : "bg-[#100c1c]/80 border-purple-500/15 shadow-lg backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-100 hover:text-purple-300 transition-all cursor-pointer"
        >
          <span className="w-6 h-6 rounded-full bg-purple-600 border border-purple-400/40 text-xs font-bold text-white flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
            J
          </span>
          <span className="flex items-center gap-0.5">
            <span>Jhojan</span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-medium tracking-[0.16em] uppercase transition-all duration-200 relative cursor-pointer ${
                activeSection === item.id
                  ? "text-purple-300 font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right cluster: Language Switcher Pill + CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          {/* Segmented Language Switcher (EN | ES) */}
          <div className="inline-flex p-0.5 rounded-full bg-black/40 border border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-purple-600 text-white font-semibold shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "text-neutral-400 hover:text-white"
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "es"
                  ? "bg-purple-600 text-white font-semibold shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "text-neutral-400 hover:text-white"
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
          </div>

          {/* Action Button: Glowing Purple-Pink Gradient Pill */}
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
          >
            {t.cta}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 md:hidden transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed top-20 inset-x-4 max-w-sm mx-auto p-5 rounded-2xl bg-[#0e0a1a]/95 border border-purple-500/25 backdrop-blur-2xl shadow-2xl md:hidden flex flex-col gap-2.5"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-2 px-3 rounded-lg text-xs font-medium tracking-widest text-neutral-300 hover:text-purple-300 hover:bg-purple-500/10 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Switcher Row */}
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between px-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Globe className="w-3.5 h-3.5 text-purple-300" />
                <span>IDIOMA / LANGUAGE:</span>
              </div>
              <div className="inline-flex p-0.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "en"
                      ? "bg-purple-600 text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "es"
                      ? "bg-purple-600 text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Español
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
