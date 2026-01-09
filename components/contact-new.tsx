"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tighter mb-8">
              <span className="block text-white">Contact us</span>
            </h2>

            <p className="font-body text-xl text-white/60 leading-relaxed mb-12">
              여러분의 아이디어를 한 문장으로 보내주세요.
              <br />
              24시간 내에 회신드립니다.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4 border-l-2 border-lime pl-6"
              >
                <div>
                  <p className="font-mono text-sm text-lime tracking-wider mb-1">
                    EMAIL
                  </p>
                  <p className="font-body text-white/80">
                    contact@wigtn.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4 border-l-2 border-white/20 pl-6"
              >
                <div>
                  <p className="font-mono text-sm text-white/40 tracking-wider mb-1">
                    RESPONSE TIME
                  </p>
                  <p className="font-body text-white/80">
                    24시간 이내
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs text-white/50 tracking-widest mb-3"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full bg-transparent border-b-2 ${
                    focusedField === "name" ? "border-lime" : "border-white/20"
                  } px-0 py-4 text-white font-body text-lg focus:outline-none transition-colors`}
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs text-white/50 tracking-widest mb-3"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full bg-transparent border-b-2 ${
                    focusedField === "email" ? "border-lime" : "border-white/20"
                  } px-0 py-4 text-white font-body text-lg focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs text-white/50 tracking-widest mb-3"
                >
                  YOUR IDEA (1 SENTENCE IS ENOUGH!)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={`w-full bg-transparent border-b-2 ${
                    focusedField === "message" ? "border-lime" : "border-white/20"
                  } px-0 py-4 text-white font-body text-lg focus:outline-none transition-colors resize-none`}
                  placeholder="예: 실시간 주식 거래 알림 앱을 만들고 싶어요"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 mt-8 font-mono text-sm tracking-widest text-lime hover:text-white transition-colors"
              >
                SEND MESSAGE
                <div className="w-12 h-12 border border-lime group-hover:bg-lime group-hover:border-lime flex items-center justify-center transition-all">
                  <ArrowRight size={20} className="text-lime group-hover:text-nero transition-colors" />
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-32 pt-12 border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-sm text-white/40 tracking-wider">
            © 2024 WIGTN. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="font-mono text-xs text-white/40 hover:text-lime transition-colors tracking-wider"
            >
              GITHUB
            </a>
            <a
              href="#"
              className="font-mono text-xs text-white/40 hover:text-lime transition-colors tracking-wider"
            >
              LINKEDIN
            </a>
            <a
              href="#"
              className="font-mono text-xs text-white/40 hover:text-lime transition-colors tracking-wider"
            >
              TWITTER
            </a>
          </div>

          <p className="font-display text-lg tracking-tight text-lime">
            와 이게 되네?
          </p>
        </div>
      </motion.div>
    </section>
  );
}
