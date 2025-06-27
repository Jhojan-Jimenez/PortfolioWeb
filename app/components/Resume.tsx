"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";
import { utilScrollToSection } from "@/lib/utils";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = (type: "cv" | "resume") => {
    const fileName =
      type === "cv" ? "resume/Jhojan_Jimenez_CV.pdf" : "Resume_Tu_Nombre.pdf";
    const fileUrl = `/${fileName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (type: "cv" | "resume") => {
    const fileName =
      type === "cv" ? "resume/Jhojan_Jimenez_CV.pdf" : "Resume_Tu_Nombre.pdf";
    const fileUrl = `/${fileName}`;

    window.open(fileUrl, "_blank");
  };

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

  const cardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
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
    <section id="resume" className="py-20 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CV and Resume
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Download my full CV or executive resume in PDF format
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* CV Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                Currículum Vitae
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 }}
              >
                A complete file with all my professional experience, education,
                and detailed skills.
              </motion.p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              {/* <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Formato:</span>
                <span>PDF</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Tamaño:</span>
                <span>2.3 MB</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Páginas:</span>
                <span>3 páginas</span>
              </div> */}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                onClick={() => handleDownload("cv")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </motion.button>
              <motion.button
                onClick={() => handlePreview("cv")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Vista Previa
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                Executive Resume
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 }}
              >
                A concise version focused on key achievements and essential
                experience.
              </motion.p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              {/* <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Formato:</span>
                <span>PDF</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Tamaño:</span>
                <span>1.8 MB</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Páginas:</span>
                <span>2 páginas</span>
              </div> */}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                onClick={() => handleDownload("resume")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar Resume
              </motion.button>
              <motion.button
                onClick={() => handlePreview("resume")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white rounded-lg font-medium transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Vista Previa
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
          >
            ¿Necesitas una versión específica o tienes alguna pregunta?
          </motion.p>
          <motion.button
            onClick={() => {
              utilScrollToSection("contact");
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors duration-300"
          >
            Contáctame
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
