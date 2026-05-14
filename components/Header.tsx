"use client";

import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "skills", "projects", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        style={{ transition: "all 0.3s ease" }}
        className={
          scrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg"
            : "fixed top-0 left-0 right-0 z-50 bg-transparent"
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm group-hover:bg-indigo-500 transition-colors duration-200">
                {personalInfo.name.charAt(0)}
              </div>
              <span className="font-semibold text-slate-100 hidden sm:block group-hover:text-indigo-400 transition-colors duration-200">
                {personalInfo.name}
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={
                      isActive
                        ? "px-3 py-2 rounded-lg text-sm font-medium text-indigo-400 bg-indigo-500/10 transition-all duration-200"
                        : "px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-200"
                    }
                  >
                    {link.label}
                    {isActive && (
                      <span className="block h-0.5 bg-indigo-400 rounded-full mt-0.5 mx-auto w-4/5" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Hire Me
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-slate-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={
                      isActive
                        ? "flex items-center px-4 py-3 rounded-lg text-sm font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 transition-all duration-200 text-left"
                        : "flex items-center px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-200 text-left"
                    }
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2 border-t border-slate-800/50 mt-2">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
                >
                  Hire Me
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
