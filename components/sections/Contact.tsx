"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { CONTENT, SOCIAL_LINKS } from "@/constants";
import { useContactForm } from "@/lib/hooks";
import { fadeInUp, TRANSITION } from "@/lib/animations";

export function Contact() {
  const { label, title, subtitle, email, responseTime, form } = CONTENT.contact;
  const {
    formData,
    focusedField,
    isSubmitting,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={TRANSITION.smooth}
          >
            <SectionHeader label={label} title={title} subtitle={subtitle} />

            <div className="space-y-6 mt-8">
              <div>
                <span className="text-label text-white/50 block mb-2">EMAIL</span>
                <a
                  href={`mailto:${email}`}
                  className="text-xl text-white hover:text-lime transition-colors"
                >
                  {email}
                </a>
              </div>
              <div>
                <span className="text-label text-white/50 block mb-2">
                  RESPONSE TIME
                </span>
                <span className="text-white/70">{responseTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ ...TRANSITION.smooth, delay: 0.2 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="text-label text-white/50 block mb-2">
                  {form.name.label}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  placeholder={form.name.placeholder}
                  className={`w-full bg-transparent border-b py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                    focusedField === "name"
                      ? "border-lime"
                      : "border-white/20"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-label text-white/50 block mb-2">
                  {form.email.label}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  placeholder={form.email.placeholder}
                  className={`w-full bg-transparent border-b py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                    focusedField === "email"
                      ? "border-lime"
                      : "border-white/20"
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-label text-white/50 block mb-2">
                  {form.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder={form.message.placeholder}
                  rows={4}
                  className={`w-full bg-transparent border-b py-3 text-white placeholder:text-white/30 focus:outline-none resize-none transition-colors ${
                    focusedField === "message"
                      ? "border-lime"
                      : "border-white/20"
                  }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-2 text-lime hover:text-white transition-colors disabled:opacity-50"
              >
                <span className="text-label">{form.submit}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ ...TRANSITION.smooth, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl text-white">WIGTN</span>
              <span className="text-white/40 text-sm">
                {CONTENT.footer.tagline}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-lime transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-lime transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-lime transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <span className="text-white/30 text-xs">
                &copy; {new Date().getFullYear()} {CONTENT.footer.copyright}
              </span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
