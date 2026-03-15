"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sachindevmurari",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
  },
  {
    label: "Email",
    href: "mailto:sachin@aqedigital.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "hover:text-blue-400 hover:border-blue-400/30",
  },
];

const expertise = [
  "SEO Strategy",
  "Content Marketing",
  "AI-Powered Growth",
  "Digital PR",
  "SaaS Growth",
  "Enterprise Content",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060609] border-t border-white/6 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-600/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-600/4 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                S
              </div>
              <div>
                <span className="text-white font-bold text-lg">Sachin Devmurari</span>
                <p className="text-gray-500 text-xs">Digital Marketing Expert</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Helping SaaS & enterprise tech brands grow organic traffic, build authority,
              and drive revenue through data-driven SEO, content marketing, and AI-powered growth strategies.
            </p>

            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-200 hover:-translate-y-0.5 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Available for new projects</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-500 hover:text-gray-200 transition-colors text-sm hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Expertise
            </h4>
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item}>
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/6">
              <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
              <a
                href="https://aqedigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-sm group"
              >
                AQe Digital
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-gray-600 text-xs mt-1">Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="py-8 border-t border-white/6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/15">
            <div>
              <p className="text-white font-semibold mb-1">Ready to grow your brand?</p>
              <p className="text-gray-400 text-sm">Let&apos;s build something remarkable together.</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/6">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Sachin Devmurari · All rights reserved ·{" "}
            <a
              href="https://aqedigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              AQe Digital
            </a>
          </p>

          <p className="text-gray-700 text-xs flex items-center gap-1.5">
            Made with <Heart size={10} className="text-red-500 fill-red-500" /> in Ahmedabad, India
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-300 transition-colors px-3 py-1.5 rounded-lg border border-white/8 hover:border-white/20"
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
