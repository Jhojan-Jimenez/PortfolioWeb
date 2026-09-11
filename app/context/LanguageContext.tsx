"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("portfolio_lang") as Language | null;
      if (saved === "en" || saved === "es") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      } else if (typeof navigator !== "undefined") {
        const browserLang = navigator.language?.toLowerCase() || "";
        const detected: Language = browserLang.startsWith("es") ? "es" : "en";
        setLanguageState(detected);
        document.documentElement.lang = detected;
        localStorage.setItem("portfolio_lang", detected);
      }
    } catch {
      // Fallback silently if localStorage is disabled
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
