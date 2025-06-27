"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML5", "CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "REST APIs",
        "GraphQL",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps",
      icon: Code,
      skills: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions"],
      color: "from-gray-500 to-slate-500",
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

  const skillTagVariants = {
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
      scale: 1.05,
      transition: {
        type: "spring" as "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-secondaryBackground transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Technologies and tools I master to build complete digital solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4`}
                variants={iconVariants}
                whileHover="hover"
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              <motion.h3
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {category.title}
              </motion.h3>

              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  delayChildren: index * 0.1 + 0.6,
                  staggerChildren: 0.05,
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillTagVariants}
                    whileHover="hover"
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
