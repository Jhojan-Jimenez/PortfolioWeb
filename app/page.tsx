"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-neutral-100 selection:bg-purple-900/50 selection:text-white relative overflow-x-hidden">
      <Header />
      <main className="relative z-10">
        <section className="bg-gradient-to-b from-background to-secondaryBackground">
          <Hero />
        </section>
        <section className="bg-gradient-to-b from-secondaryBackground to-background">
          <Projects />
        </section>
        <section className="bg-gradient-to-b from-background to-secondaryBackground">
          <Experience />
        </section>
        <section className="bg-gradient-to-b from-secondaryBackground to-background">
          <Skills />
        </section>
        <section className="bg-[#0f0715]">
          <Contact />
        </section>
      </main>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="bg-[#120a22] border border-white/10 text-white rounded-xl text-sm"
      />
    </div>
  );
}
