"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Download, Code2 as Github, Briefcase as Linkedin } from 'lucide-react';
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: personalInfo.yearsExperience + "+ Years",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Calendar,
    label: "Availability",
    value: personalInfo.availability,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image column */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/20">
                <img
                  src="https://experis.be/wp-content/uploads/2023/05/Online-web-developer-profile-1200x675.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/30">
                {personalInfo.yearsExperience}+ Years
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-indigo-500" />
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Passionate about building{" "}
              <span className="gradient-text">great software</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    <div className="text-sm text-slate-200 font-semibold mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500/10 hover:-translate-y-0.5"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500/10 hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
