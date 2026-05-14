"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  const topTags = ["All", "Next.js", "React", "TypeScript", "Node.js", "Solidity"];

  return (
    <section id="projects" className="section-padding bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Portfolio
            </span>
            <div className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from SaaS platforms to open-source libraries.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {topTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={
                filter === tag
                  ? "px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white transition-all duration-200"
                  : "px-4 py-2 rounded-full text-sm font-medium bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-200"
              }
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Show more */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl border border-slate-600 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500/10"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </motion.div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No projects found for this filter.
          </div>
        )}
      </div>
    </section>
  );
}
