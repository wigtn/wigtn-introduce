"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { TEAM_MEMBERS } from "@/constants";
import { staggerContainer, staggerItem, TRANSITION } from "@/lib/animations";

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="TEAM" title="팀" subtitle="WIGTN을 만드는 사람들" />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              transition={TRANSITION.smooth}
              className="group p-6 border-t border-white/10 hover:border-lime/50 transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-lg font-medium text-white group-hover:text-lime transition-colors">
                  {member.name}
                </h3>
                {member.nameEn && (
                  <span className="text-sm text-white/40">{member.nameEn}</span>
                )}
              </div>

              <p className="text-label text-lime mb-3">{member.role}</p>
              <p className="text-sm text-white/60 mb-4">{member.description}</p>

              {member.links && (
                <div className="flex gap-3">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-lime transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-lime transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.twitter && (
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-lime transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
