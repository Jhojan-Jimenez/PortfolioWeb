"use client";

import { utilScrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
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
    { icon: Mail, href: "mailto:jhojanjimene@gmail.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
      },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring" as "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              variants={avatarVariants}
              className="w-48 h-48 mx-auto my-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 overflow-hidden relative"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
              }}
            >
              <Image
                src="/Me.jpeg"
                alt="Jhojan's Photo"
                fill
                className="object-cover rounded-full"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Jhojan Jimenez
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-8 max-w-2xl mx-auto"
          >
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              I'm a passionate web developer focused on building innovative
              digital experiences. I specialize in technologies like React,
              Node.js, and Django, and I'm always exploring new areas like AI
              and machine learning.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-8"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex items-center"
            >
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">
                Bogotá, Colombia
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
                aria-label={link.label}
                custom={index}
              >
                <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                utilScrollToSection("projects");
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                utilScrollToSection("contact");
              }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
