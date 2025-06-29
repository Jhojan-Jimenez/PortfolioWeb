"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ExternalLink,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Eye,
} from "lucide-react";

const Experience = () => {
  const experience = [
    {
      title: "Backend Developer",
      company: "GovLab",
      location: "Remote",
      period: "May 2025 – Present",
      description: (
        <>
          Developed and maintained scalable RESTful APIs using &nbsp;
          <strong className="text-foreground font-semibold">FastAPI</strong> and
          &nbsp;
          <strong className="text-foreground font-semibold">Pydantic</strong>.
          Managed &nbsp;
          <strong className="text-foreground font-semibold">MySQL</strong>&nbsp;
          databases and migrations with &nbsp;
          <strong className="text-foreground font-semibold">Alembic</strong>,
          integrated messaging services, and implemented automated deployments
          through &nbsp;
          <strong className="text-foreground font-semibold">Railway</strong>.
        </>
      ),
      achievements: [
        <>
          Developed endpoints with robust validation and documentation using
          &nbsp;
          <strong className="text-foreground font-semibold">FastAPI</strong>.
        </>,
        <>
          Performed unit and end-to-end testing with &nbsp;
          <strong className="text-foreground font-semibold">PyTest</strong>
          &nbsp;and &nbsp;
          <strong className="text-foreground font-semibold">Postman</strong>.
        </>,
        <>
          Integrated &nbsp;
          <strong className="text-foreground font-semibold">AWS S3</strong>
          &nbsp; for secure file storage.
        </>,
        "Managed technical documentation to support development and maintenance.",
      ],
    },
    {
      title: "Web Developer & Information Manager",
      company: "UCTS Innovation Center",
      location: "On-site",
      period: "January 2025 – June 2025",
      description: (
        <>
          Developed a&nbsp;
          <strong className="text-foreground font-semibold">
            vaccine recommendation algorithm
          </strong>
          &nbsp; based on public data sources. Designed and updated the
          institutional&nbsp;
          <strong className="text-foreground font-semibold">website</strong>
          &nbsp; to improve access to information. Collaborated continuously
          with multidisciplinary teams to support project goals.
        </>
      ),
      achievements: [
        <>
          Developed a&nbsp;
          <strong className="text-foreground font-semibold">
            vaccine recommendation algorithm
          </strong>
          &nbsp; integrating public datasets.
        </>,
        <>
          Designed and updated the institutional&nbsp;
          <strong className="text-foreground font-semibold">website</strong>
          &nbsp; to enhance usability.
        </>,
        "Collaborated consistently with multidisciplinary teams to drive project success.",
      ],
    },
    {
      title: "Web Developer",
      company: "TurboCupones",
      location: "Remote",
      period: "June 2024 – September 2024",
      description: (
        <>
          Built secure RESTful APIs using &nbsp;
          <strong className="text-foreground font-semibold">
            Django REST Framework
          </strong>
          &nbsp; and implemented advanced authentication with &nbsp;
          <strong className="text-foreground font-semibold">JWT</strong>.
          Developed frontend features with &nbsp;
          <strong className="text-foreground font-semibold">Next.js</strong> and
          contributed to quality assurance through unit and functional testing.
        </>
      ),
      achievements: [
        <>
          Created APIs with advanced filtering, pagination, and &nbsp;
          <strong className="text-foreground font-semibold">
            JWT authentication
          </strong>
          .
        </>,
        <>
          Developed dynamic frontend interfaces with &nbsp;
          <strong className="text-foreground font-semibold">Next.js</strong>.
        </>,
        <>
          Performed unit and functional testing with &nbsp;
          <strong className="text-foreground font-semibold">PyTest</strong>.
        </>,
        <>
          Worked within agile workflows using &nbsp;
          <strong className="text-foreground font-semibold">Scrum</strong>
          &nbsp;and &nbsp;
          <strong className="text-foreground font-semibold">Trello</strong>.
        </>,
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Engineering (in progress)",
      institution: "Universidad de La Sabana",
      location: "Chía, Colombia",
      period: "2022 - Present",
      description:
        "Currently pursuing a degree in Computer Engineering with a focus on web development, software architecture, and data systems.",
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2025",
      link: "https://aws.amazon.com/training/",
    },
    {
      name: "Python for Everybody",
      issuer: "Coursera - University of Michigan",
      date: "2024",
      link: "https://www.coursera.org/specializations/python",
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
    const fileName =
      type === "cv"
        ? "resume/Jhojan_Jimenez_CV.pdf"
        : "resume/Jhojan_Jimenez_Resume.docx";
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
      type === "cv"
        ? "resume/Jhojan_Jimenez_CV.pdf"
        : "resume/Jhojan_Jimenez_Resume.pdf";
    const fileUrl = `/${fileName}`;

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
              {/* Botón de Descargar CV (relleno + texto) */}
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

              {/* Botón de Previsualizar CV (solo icono) */}
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
              {/* Botón de Descargar CV (relleno + texto) */}
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

              {/* Botón de Previsualizar CV (solo icono) */}
              <motion.button
                onClick={() => handlePreview("resume")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Preview CV"
                className="flex items-center justify-center px-4 py-3 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 transition-all duration-300 border-l-2 "
              >
                <Eye className="w-5 h-5 mr-2" /> Preview
              </motion.button>
            </div>
          </div>
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
                            <span className="text-primary mr-2 ">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
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

            {/* Certifications */}
            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <ExternalLink size={24} className="mr-2 text-primary" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.name}
                        </h4>
                        <div className="text-primary font-medium text-sm mb-1">
                          {cert.issuer}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {cert.date}
                        </div>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-accent transition-colors"
                        aria-label="Ver certificación"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
