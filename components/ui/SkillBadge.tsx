"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon: string;
  level: number;
  index: number;
}

export default function SkillBadge({ name, icon, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-default"
    >
      <span className="text-xl leading-none" role="img" aria-label={name}>
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-200 truncate">
          {name}
        </div>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < level;
            return (
              <div
                key={i}
                className={filled ? "h-1 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-all duration-300" : "h-1 rounded-full bg-slate-700 transition-all duration-300"}
                style={{ width: filled ? "12px" : "8px" }}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
