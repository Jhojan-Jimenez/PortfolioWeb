"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { toast, ToastContainer } from "react-toastify";
import Experience from "./components/Experience";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AnimatePresence mode="wait">
        <main>
          <section className="bg-gradient-to-b from-background to-secondaryBackground">
            <Hero />
          </section>
          <section className="bg-gradient-to-b from-secondaryBackground to-background">
            <Skills />
          </section>
          <section className="bg-gradient-to-b from-secondaryBackground to-background">
            <Projects />
          </section>
          <section className="bg-gradient-to-b from-background to-secondaryBackground">
            <Experience />
          </section>
          <section className="bg-gradient-to-b from-secondaryBackground to-background pb-20">
            <Contact />
          </section>
        </main>
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}
