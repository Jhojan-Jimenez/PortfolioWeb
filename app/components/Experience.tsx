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
} from "lucide-react";

const Experience = () => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Madrid, España",
      period: "2022 - Presente",
      description:
        "Lidero el desarrollo de aplicaciones web escalables usando React, Next.js y Node.js. Gestiono un equipo de 4 desarrolladores y superviso la arquitectura de sistemas.",
      achievements: [
        "Reduje el tiempo de carga de la aplicación principal en un 40%",
        "Implementé arquitectura de microservicios que mejoró la escalabilidad",
        "Mentoré a 3 desarrolladores junior hasta convertirse en mid-level",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Barcelona, España",
      period: "2020 - 2022",
      description:
        "Desarrollé aplicaciones web completas desde el frontend hasta el backend, trabajando principalmente con React, Python y PostgreSQL.",
      achievements: [
        "Desarrollé 5+ aplicaciones web desde cero",
        "Integré sistemas de pago con Stripe y PayPal",
        "Implementé tests automatizados que redujeron bugs en un 30%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Valencia, España",
      period: "2018 - 2020",
      description:
        "Especializado en desarrollo frontend con React y Vue.js, creando interfaces de usuario intuitivas y responsive.",
      achievements: [
        "Mejoré la experiencia de usuario resultando en 25% más conversiones",
        "Desarrollé una librería de componentes reutilizables",
        "Implementé PWA que aumentó la retención de usuarios",
      ],
    },
  ];

  const education = [
    {
      degree: "Máster en Desarrollo Web Full Stack",
      institution: "Universidad Politécnica de Madrid",
      location: "Madrid, España",
      period: "2017 - 2018",
      description:
        "Especialización en tecnologías web modernas, arquitectura de software y metodologías ágiles.",
    },
    {
      degree: "Ingeniería Informática",
      institution: "Universidad de Valencia",
      location: "Valencia, España",
      period: "2013 - 2017",
      description:
        "Grado en Ingeniería Informática con especialización en Ingeniería del Software.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://aws.amazon.com/certification/",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      link: "https://cloud.google.com/certification/",
    },
    {
      name: "React Advanced Patterns",
      issuer: "Meta",
      date: "2021",
      link: "https://developers.facebook.com/academy/",
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
            Mi Trayectoria Profesional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Descarga mi CV completo o explora mi experiencia profesional y
            formación académica
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/cv-juan-perez-es.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="mr-2" />
              Descargar CV (ES)
            </a>

            <a
              href="/resume-juan-perez-en.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <FileText size={20} className="mr-2" />
              Download Resume (EN)
            </a>
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
                Experiencia Profesional
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
                        Logros principales:
                      </h5>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-muted-foreground text-sm flex items-start"
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
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
                Formación
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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <ExternalLink size={24} className="mr-2 text-primary" />
                Certificaciones
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
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail size={16} className="mr-3 text-primary" />
                  <span className="text-sm">juan@example.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone size={16} className="mr-3 text-primary" />
                  <span className="text-sm">+34 600 123 456</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-3 text-primary" />
                  <span className="text-sm">Madrid, España</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
