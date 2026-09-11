"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { utilScrollToSection } from "@/lib/utils";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jhojan-Jimenez",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jhojan-jimenez-dev/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:jhojanjimene@gmail.com",
      label: "Email",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-28 pb-20 text-center"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Circular Avatar */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl overflow-hidden relative"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0c0517]">
                <Image
                  src="/Me.jpeg"
                  alt="Jhojan Jimenez"
                  fill
                  priority
                  className="object-cover scale-105"
                />
              </div>
            </motion.div>
          </motion.div>


          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
          >
            {t.name}
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-blue-400 font-medium mb-5"
          >
            {t.role}
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal"
          >
            {t.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-1.5 text-sm text-gray-400 mb-6"
          >
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{t.location}</span>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => utilScrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 cursor-pointer min-w-[160px]"
            >
              {t.ctaProjects}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => utilScrollToSection("contact")}
              className="px-8 py-3 border border-indigo-700/60 bg-indigo-950/20 hover:bg-indigo-900/40 text-indigo-200 hover:text-white rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer min-w-[160px]"
            >
              {t.ctaContact}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
