"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#1e1e2e]/80 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                S
              </div>
              <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
                Sachin<span className="text-blue-400">.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA + Mobile menu button */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#0d0d14]/95 backdrop-blur-xl border-b border-[#1e1e2e] lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-2 pt-2 border-t border-[#1e1e2e]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
