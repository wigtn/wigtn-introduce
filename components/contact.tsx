"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MessageSquare, User } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
    <section
      id="contact"
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric-amber/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-cyan/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-amber">Let's Build</span>
              <br />
              <span className="text-gradient-cyan">Together</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              여러분의 아이디어를 듣고 싶습니다.
              <br />
              한 문장만 보내주세요. 나머지는 저희가 처리합니다.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-electric-cyan/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-electric-cyan" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">빠른 응답</h3>
                  <p className="text-sm text-foreground/60">24시간 내 회신</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-electric-amber/10 rounded-lg flex items-center justify-center">
                  <Send className="text-electric-amber" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">무료 상담</h3>
                  <p className="text-sm text-foreground/60">프로젝트 범위 논의</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl focus:outline-none focus:border-electric-cyan transition-colors text-foreground"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl focus:outline-none focus:border-electric-cyan transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Idea (1 sentence is enough!)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl focus:outline-none focus:border-electric-cyan transition-colors text-foreground resize-none"
                  placeholder="예: 실시간 주식 거래 알림 앱을 만들고 싶어요"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-electric-cyan to-electric-blue text-dark-900 rounded-xl font-semibold text-lg hover:glow-cyan transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-12 border-t border-dark-700"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2024 WIGTN. All rights reserved.
          </p>
          <p className="font-display text-sm text-gradient-cyan">
            와 이게 되네? (Wow, this works?)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
