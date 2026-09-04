"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Calendar,
  MapPin,
  Eye,
} from "lucide-react";

const Experience = () => {
  const highlights = [
    {
      icon: "🏆",
      title: "1st place · Sabana Hack 2025",
      description:
        "Real-time alert system with AI for Cruz Roja Colombiana — built in 24 hours at Universidad de La Sabana.",
      borderColor: "border-amber-400/60",
      hoverShadow: "hover:shadow-amber-500/20",
      bgGlow: "bg-amber-500/5",
    },
    {
      icon: "⚙️",
      title: "Live automations in production",
      description:
        "Pipelines with n8n + WhatsApp Business, autonomous deployment with Docker & CI/CD.",
      borderColor: "border-teal-400/60",
      hoverShadow: "hover:shadow-teal-500/20",
      bgGlow: "bg-teal-500/5",
    },
  ];

  const experience = [
    {
      title: "Backend & Cloud Developer",
      company: "Blurealty",
      location: "Remote",
      period: "July 2025 – Present",
      description: (
        <>
          Engineered backend services and cloud deployment on{" "}
          <strong className="text-foreground font-semibold">GCP</strong> for a
          high-demand proptech platform, combining async workflows, relational
          databases, and multi-agent AI architectures.
        </>
      ),
      achievements: [
        <>
          Designed multi-role AI agent (Q&A, Knowledge Base, automated
          interviews) using{" "}
          <strong className="text-foreground font-semibold">OpenAI</strong>,{" "}
          <strong className="text-foreground font-semibold">RAG</strong>, and
          Vector Storage for semantic document retrieval.
        </>,
        <>
          Improved web accessibility from{" "}
          <strong className="text-foreground font-semibold">3.4 → 9.2 (Wave)</strong>{" "}
          across multiple pages implementing ADA standards.
        </>,
        <>
          Deployed and maintained backend services on{" "}
          <strong className="text-foreground font-semibold">GCP (Cloud Run, Cloud SQL)</strong>{" "}
          using Docker and automated CI/CD pipelines in GitHub Actions.
        </>,
        <>
          Designed relational database schema in{" "}
          <strong className="text-foreground font-semibold">PostgreSQL</strong>,{" "}
          managing migrations with Alembic and optimizing queries for high concurrency.
        </>,
        "Integrated external APIs to automate critical business flows, reducing manual intervention.",
        "Implemented event tracking and A/B experiments for data-driven product decisions.",
      ],
    },
    {
      title: "Backend Developer",
      company: "GovLab",
      location: "Remote",
      period: "February 2025 – July 2025",
      description: (
        <>
          Built RESTful APIs with{" "}
          <strong className="text-foreground font-semibold">FastAPI</strong> and{" "}
          <strong className="text-foreground font-semibold">Pydantic</strong>.
          Developed information systems for agricultural and educational clients,
          integrating cloud storage and messaging services.
        </>
      ),
      achievements: [
        <>
          Developed information system for{" "}
          <strong className="text-foreground font-semibold">Corpohass</strong>,
          centralizing avocado production, harvesting, and planting metrics for
          operational decision-making.
        </>,
        "Built multi-institutional educational forms platform with comparative data analysis.",
        <>
          REST APIs with{" "}
          <strong className="text-foreground font-semibold">
            FastAPI + Pydantic
          </strong>
          , Alembic migrations,{" "}
          <strong className="text-foreground font-semibold">AWS S3</strong>{" "}
          storage, and Railway deployment.
        </>,
        <>
          Integrated{" "}
          <strong className="text-foreground font-semibold">Twilio</strong> and{" "}
          <strong className="text-foreground font-semibold">SendGrid</strong>{" "}
          for business communications automation.
        </>,
      ],
    },
    {
      title: "Web Developer & Information Manager",
      company: "UCTS Innovation Center",
      location: "On-site",
      period: "January 2025 – June 2025",
      description: (
        <>
          Developed a{" "}
          <strong className="text-foreground font-semibold">
            vaccine recommendation engine
          </strong>{" "}
          in Node.js. Redesigned the institutional website and coordinated with
          health and technology teams.
        </>
      ),
      achievements: [
        <>
          Built vaccine recommendation engine in{" "}
          <strong className="text-foreground font-semibold">Node.js</strong>{" "}
          using matrix logic over PAI data (age, diseases, special cases) for
          personalized recommendations.
        </>,
        "Redesigned the institutional website, improving content structure and digital presence.",
        "Coordinated with health and tech teams to align technical requirements with PAI protocols.",
      ],
    },
    {
      title: "Web Developer",
      company: "TurboCupones",
      location: "Remote",
      period: "June 2024 – October 2024",
      description: (
        <>
          Built production APIs with{" "}
          <strong className="text-foreground font-semibold">
            Django REST Framework
          </strong>{" "}
          and{" "}
          <strong className="text-foreground font-semibold">JWT</strong> for a
          platform with thousands of users. Developed frontend features with
          Next.js.
        </>
      ),
      achievements: [
        <>
          Built 2 production APIs with{" "}
          <strong className="text-foreground font-semibold">
            Django REST + JWT
          </strong>{" "}
          for a platform with thousands of users, with pagination and advanced
          filters.
        </>,
        <>
          Developed frontend interfaces with{" "}
          <strong className="text-foreground font-semibold">Next.js</strong>{" "}
          consuming the system APIs.
        </>,
        <>
          Collaborated with a team of 4 developers under{" "}
          <strong className="text-foreground font-semibold">Scrum</strong>{" "}
          methodology.
        </>,
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Universidad de La Sabana",
      location: "Chía, Colombia",
      period: "2022 – 2026",
      description:
        "GPA: 4.4 / 5.0. Emphasis on Software Architecture. Active participation in the Engineering Representative Group and academic tutoring. Initial development of WheelUS mobility platform.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const handleDownload = (type: "cv" | "resume") => {
    const fileUrl =
      type === "cv"
        ? "/resume/Jhojan_JimenezCV.pdf"
        : "/resume/Jhojan_Jimenez_Resume.pdf";
    const downloadName =
      type === "cv"
        ? "Jhojan_JimenezCV.pdf"
        : "Jhojan_Jimenez_Resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (type: "cv" | "resume") => {
    const fileUrl =
      type === "cv"
        ? "/resume/Jhojan_JimenezCV.pdf"
        : "/resume/Jhojan_Jimenez_Resume.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Professional Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my complete CV / Resume or explore my professional
            experience and academic background.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-stretch justify-center mt-6 border-2 border-blue-600 rounded-lg overflow-hidden">
              <motion.button
                onClick={() => handleDownload("cv")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV (ES)
              </motion.button>
              <motion.button
                onClick={() => handlePreview("cv")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Preview CV"
                className="flex items-center justify-center px-4 py-3 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border-l-2 border-blue-600"
              >
                <Eye className="w-5 h-5 mr-2" /> Preview
              </motion.button>
            </div>
            <div className="flex items-stretch justify-center mt-6 border-2 border-green-600 rounded-lg overflow-hidden">
              <motion.button
                onClick={() => handleDownload("resume")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Resume (EN)
              </motion.button>
              <motion.button
                onClick={() => handlePreview("resume")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Preview Resume"
                className="flex items-center justify-center px-4 py-3 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300 border-l-2"
              >
                <Eye className="w-5 h-5 mr-2" /> Preview
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
              className={`${item.bgGlow} rounded-xl p-5 border-2 ${item.borderColor} shadow-md ${item.hoverShadow} hover:shadow-lg transition-all duration-300 flex items-start gap-4`}
            >
              <span className="text-2xl mt-0.5">{item.icon}</span>
              <div>
                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Calendar size={24} className="mr-2 text-primary" />
                Professional Experience
              </h3>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-foreground">
                        {job.title}
                      </h4>
                      <span className="text-sm text-muted-foreground font-medium">
                        {job.period}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-4">
                      <span className="font-medium text-primary">
                        {job.company}
                      </span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-muted-foreground text-sm flex items-start"
                          >
                            <span className="text-primary mr-2 shrink-0 select-none">•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <FileText size={24} className="mr-2 text-primary" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card rounded-lg p-5 shadow-md border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <div className="text-primary font-medium mb-1">
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <MapPin size={14} className="mr-1" />
                      {edu.location} • {edu.period}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
