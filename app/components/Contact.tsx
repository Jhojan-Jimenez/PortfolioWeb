"use client";

import type React from "react";
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Send } from "lucide-react";
import { toast } from "react-toastify";
import { useLanguage } from "@/app/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/i18n/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzgyber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t.toasts.success);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(t.toasts.error);
      }
    } catch (error) {
      console.error("Transmission error:", error);
      toast.error(t.toasts.networkError);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 relative z-10 bg-[#0f0715]">
      {/* Subdivided / Cropped Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8750f7]/40 via-white/20 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* LEFT: EDITORIAL COPY & CONTACT INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-white">
                  {t.title}
                </span>
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed mb-8 max-w-md">
                {t.description}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:jhojanjimene@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/60 hover:shadow-xl hover:shadow-[#8750f7]/15 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#8750f7]/15 border border-[#8750f7]/30 flex items-center justify-center text-[#8750f7] shrink-0 shadow-md">
                      <Mail className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#8750f7] uppercase font-bold">{t.directEmail}</p>
                      <p className="text-xs sm:text-sm font-mono text-white group-hover:text-purple-200 transition-colors">
                        jhojanjimene@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#1e1130] border border-[#8750f7]/30 flex items-center justify-center text-neutral-300 group-hover:bg-[#8750f7] group-hover:text-white group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#140c1c] border border-white/10">
                  <div className="w-11 h-11 rounded-2xl bg-[#8750f7]/15 border border-[#8750f7]/30 flex items-center justify-center text-[#8750f7] shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#8750f7] uppercase font-bold">{t.location}</p>
                    <p className="text-xs sm:text-sm font-mono text-white">
                      {t.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Footer note */}
            <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Jhojan-Jimenez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#140c1c] border border-white/15 text-neutral-300 hover:text-white hover:border-[#8750f7] hover:scale-105 flex items-center justify-center transition-all shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jhojan-jimenez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#140c1c] border border-white/15 text-neutral-300 hover:text-white hover:border-[#8750f7] hover:scale-105 flex items-center justify-center transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs font-mono sm:text-left text-center text-neutral-400">
                © {new Date().getFullYear()} JHOJAN JIMENEZ · {t.rights}
              </p>
            </div>
          </div>

          {/* RIGHT: MINIMAL DARK FORM WITH GEROLD PURPLE GLOW */}
          <div className="lg:col-span-7 text-left">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-10 rounded-[28px] bg-[#140c1c] border border-white/10 hover:border-[#8750f7]/40 shadow-2xl space-y-5 transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono tracking-wider uppercase text-[#8750f7] font-bold mb-2"
                  >
                    {t.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.form.namePlaceholder}
                    className="w-full bg-[#0f0715] border border-white/10 focus:border-[#8750f7] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono tracking-wider uppercase text-[#8750f7] font-bold mb-2"
                  >
                    {t.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.form.emailPlaceholder}
                    className="w-full bg-[#0f0715] border border-white/10 focus:border-[#8750f7] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono tracking-wider uppercase text-[#8750f7] font-bold mb-2"
                >
                  {t.form.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.form.subjectPlaceholder}
                  className="w-full bg-[#0f0715] border border-white/10 focus:border-[#8750f7] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono tracking-wider uppercase text-[#8750f7] font-bold mb-2"
                >
                  {t.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.form.messagePlaceholder}
                  className="w-full bg-[#0f0715] border border-white/10 focus:border-[#8750f7] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#8750f7] hover:bg-[#7435f5] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(135,80,247,0.4)] hover:shadow-[0_0_30px_rgba(135,80,247,0.6)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? t.form.submittingBtn : t.form.submitBtn}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
