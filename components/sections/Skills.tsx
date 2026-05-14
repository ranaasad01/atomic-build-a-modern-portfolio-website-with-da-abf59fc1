"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SkillBadge from "@/components/ui/SkillBadge";

function getCategoryClass(category: string): string {
  if (category === "Frontend") return "text-blue-400 bg-blue-500/10 border-blue-500/20";
  if (category === "Backend") return "text-green-400 bg-green-500/10 border-green-500/20";
  if (category === "DevOps & Tools") return "text-orange-400 bg-orange-500/10 border-orange-500/20";
  return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Tech Stack
            </span>
            <div className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={"px-3 py-1 rounded-full text-xs font-semibold border " + getCategoryClass(cat.category)}>
                  {cat.category}
                </span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm">
            Always learning — currently exploring{" "}
            <span className="text-indigo-400 font-medium">Rust</span>,{" "}
            <span className="text-indigo-400 font-medium">WebAssembly</span>, and{" "}
            <span className="text-indigo-400 font-medium">AI/ML integration</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
