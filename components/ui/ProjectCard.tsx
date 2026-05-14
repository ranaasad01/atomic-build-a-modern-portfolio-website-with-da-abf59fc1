"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/40 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-semibold backdrop-blur-sm">
            Featured
          </div>
        )}

        {/* Quick links overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-white border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200"
              aria-label="View on GitHub"
            >
              <Github size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-white border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200"
              aria-label="View live site"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-200 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag-chip">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <Github size={13} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <ExternalLink size={13} />
                Live
              </a>
            )}
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 group/link"
          >
            Details
            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
