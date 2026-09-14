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
    <section id="contact" className="py-24 sm:py-32 px-4 relative z-10 bg-[#131313] border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* LEFT: EDITORIAL COPY & CONTACT INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181d] border border-[#7F1DFF]/30 text-purple-200 text-xs font-mono mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFEB34] animate-pulse" />
                <span>{t.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {t.title}
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed mb-8 max-w-md">
                {t.description}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:jhojanjimene@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-3xl bg-[#18181d]/90 backdrop-blur-xl border border-white/10 hover:border-[#7F1DFF]/40 hover:shadow-xl hover:shadow-[#7F1DFF]/15 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#7F1DFF]/15 border border-[#7F1DFF]/30 flex items-center justify-center text-[#D46F88] shrink-0 shadow-md">
                      <Mail className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#D46F88] uppercase font-bold">{t.directEmail}</p>
                      <p className="text-xs sm:text-sm font-mono text-white group-hover:text-purple-200 transition-colors">
                        jhojanjimene@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#131313] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:bg-[#7F1DFF] group-hover:text-white group-hover:border-[#7F1DFF] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-3xl bg-[#18181d]/90 backdrop-blur-xl border border-white/10">
                  <div className="w-11 h-11 rounded-2xl bg-[#7F1DFF]/15 border border-[#7F1DFF]/30 flex items-center justify-center text-[#D46F88] shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#D46F88] uppercase font-bold">{t.location}</p>
                    <p className="text-xs sm:text-sm font-mono text-white">
                      {t.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Footer note */}
            <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Jhojan-Jimenez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-[#18181d] border border-white/15 text-neutral-300 hover:text-white hover:border-[#7F1DFF] hover:scale-105 flex items-center justify-center transition-all shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jhojanjimenez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-[#18181d] border border-white/15 text-neutral-300 hover:text-white hover:border-[#7F1DFF] hover:scale-105 flex items-center justify-center transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs font-mono text-neutral-400">
                © {new Date().getFullYear()} JHOJAN JIMENEZ · {t.rights}
              </p>
            </div>
          </div>

          {/* RIGHT: MINIMAL DARK FORM WITH DESIGN SYSTEM GLOW */}
          <div className="lg:col-span-7 text-left">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-10 rounded-3xl bg-[#18181d]/90 backdrop-blur-xl border border-white/10 hover:border-[#7F1DFF]/30 shadow-2xl space-y-5 transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono tracking-wider uppercase text-[#D46F88] font-bold mb-2"
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
                    className="w-full bg-[#131313] border border-white/10 focus:border-[#7F1DFF] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono tracking-wider uppercase text-[#D46F88] font-bold mb-2"
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
                    className="w-full bg-[#131313] border border-white/10 focus:border-[#7F1DFF] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono tracking-wider uppercase text-[#D46F88] font-bold mb-2"
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
                  className="w-full bg-[#131313] border border-white/10 focus:border-[#7F1DFF] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono tracking-wider uppercase text-[#D46F88] font-bold mb-2"
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
                  className="w-full bg-[#131313] border border-white/10 focus:border-[#7F1DFF] text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7F1DFF] to-[#D46F88] hover:from-[#6b14dd] hover:to-[#be5872] text-white font-semibold text-xs font-mono tracking-wider uppercase shadow-[0_0_20px_rgba(127,29,255,0.4)] hover:shadow-[0_0_30px_rgba(212,111,136,0.5)] transition-all duration-200 disabled:opacity-50 active:scale-95 cursor-pointer"
                >
                  <span>{submitting ? t.form.submittingBtn : t.form.submitBtn}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
