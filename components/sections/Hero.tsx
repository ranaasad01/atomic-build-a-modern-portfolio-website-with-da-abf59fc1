"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail } from 'lucide-react';
import { personalInfo } from "@/lib/data";

const roles = [
  "Full-Stack Engineer",
  "React Specialist",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < target.length) {
          setCurrentText(target.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
  { icon: Mail, href: "mailto:" + personalInfo.email, label: "Email" },
];

const stats = [
  { value: personalInfo.yearsExperience + "+", label: "Years Exp." },
  { value: personalInfo.projectsCompleted + "+", label: "Projects" },
  { value: personalInfo.openSourceContributions + "+", label: "Contributions" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg font-medium tracking-wide"
          >
            Hi there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold h-12 flex items-center"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-slate-400 text-lg leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 py-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-xl border border-slate-600 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200 hover:bg-indigo-500/10 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 group-hover:border-indigo-500/50 flex items-start justify-center pt-1.5 transition-colors duration-200">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-indigo-400"
          />
        </div>
      </motion.button>
    </section>
  );
}
