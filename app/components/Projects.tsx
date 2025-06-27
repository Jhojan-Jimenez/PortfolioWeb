"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projects = [
    {
      title: "WheelUS",
      description:
        "WheelUS is an innovative university transport platform designed to connect students via a booking and trip creation system.",
      image: "/projects/WheelUSCreateRidePage.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Express",
        "Firebase",
        "OpenStreetMap",
        "Socket.io",
      ],
      githubUrl: "https://github.com/Jhojan-Jimenez/WheelUS-Front",
      liveUrl: "https://wheel-us-front.vercel.app/rides",
      date: "2024",
    },
    {
      title: "MortShop",
      description:
        "MortShop is a e-commerce platform, modern and high-performance, built with Next.js, Django, and PostgreSQL.",
      image: "/projects/MortShopProductsPage.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "Django",
        "Django-REST",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/Jhojan-Jimenez/Front-Shop",
      liveUrl: "https://github.com/Jhojan-Jimenez/Front-Shop",
      date: "2024",
    },
    {
      title: "Vaccine recommender",
      description:
        "This website, recommends vaccines for children and adults and indicates whether they are provided by the PAI.",
      image: "/projects/VaccineRecommender.png",
      technologies: ["NodeJS", "ReactJS", "TailwindCSS", "Python", "Firebase"],
      githubUrl: "https://github.com/Jhojan-Jimenez",
      liveUrl: "https://vax-topaz.vercel.app",
      date: "2023",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring" as "spring",
        stiffness: 300,
        damping: 20,
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

  const techTagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as "spring",
        stiffness: 500,
        damping: 25,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#3B82F6",
      color: "#FFFFFF",
      transition: {
        type: "spring" as "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl" ref={ref}>
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A selection of projects that showcase my skills and experience in
            development.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden">
                <motion.div variants={imageVariants} whileHover="hover">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                {/* <motion.div
                  className="absolute top-4 right-4 flex space-x-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2">
                    <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                </motion.div> */}
              </div>

              <div className="p-6">
                <motion.div
                  className="flex items-center justify-between mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </span>
                </motion.div>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{
                    delayChildren: index * 0.1 + 0.8,
                    staggerChildren: 0.05,
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      variants={techTagVariants}
                      whileHover="hover"
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 + 0.9 }}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
