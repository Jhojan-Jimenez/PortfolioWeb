"use client";

import type React from "react";
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
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
    <section id="contact" className="py-24 sm:py-32 px-4 relative z-10 border-t border-purple-500/15">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* LEFT: EDITORIAL COPY & CONTACT INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2">
                {t.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {t.title} {t.titleItalic}
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-md">
                {t.description}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:jhojanjimene@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-purple-300 uppercase font-semibold">{t.directEmail}</p>
                      <p className="text-xs sm:text-sm font-mono text-white group-hover:text-purple-200 transition-colors">
                        jhojanjimene@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20">
                  <div className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-purple-300 uppercase font-semibold">{t.location}</p>
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
                  className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-500 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jhojan-jimenez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-500 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[10px] font-mono text-neutral-400">
                © {new Date().getFullYear()} JHOJAN JIMENEZ · {t.rights}
              </p>
            </div>
          </div>

          {/* RIGHT: MINIMAL DARK FORM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-10 rounded-2xl bg-[#0c0a14]/90 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-950/30 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-mono tracking-wider uppercase text-purple-300 font-semibold mb-2"
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
                    className="w-full bg-purple-950/20 border border-purple-500/20 focus:border-purple-400/50 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-mono tracking-wider uppercase text-purple-300 font-semibold mb-2"
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
                    className="w-full bg-purple-950/20 border border-purple-500/20 focus:border-purple-400/50 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[10px] font-mono tracking-wider uppercase text-purple-300 font-semibold mb-2"
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
                  className="w-full bg-purple-950/20 border border-purple-500/20 focus:border-purple-400/50 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-mono tracking-wider uppercase text-purple-300 font-semibold mb-2"
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
                  className="w-full bg-purple-950/20 border border-purple-500/20 focus:border-purple-400/50 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-full bg-[#eae6df] hover:bg-white text-neutral-950 border border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] font-semibold text-xs tracking-wider uppercase transition-all duration-200 disabled:opacity-50 active:scale-95 cursor-pointer"
                >
                  <span>{submitting ? t.form.submittingBtn : t.form.submitBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
