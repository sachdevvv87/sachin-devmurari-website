"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Zap } from "lucide-react";

const floatingBadges = [
  { icon: TrendingUp, label: "300% Traffic Growth", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30", delay: 0.8 },
  { icon: Sparkles, label: "AEO & GEO Services USA", color: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30", delay: 1.0 },
  { icon: Zap, label: "12+ Years Expert", color: "from-cyan-500/20 to-cyan-600/10", border: "border-cyan-500/30", delay: 1.2 },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] grid-bg"
    >
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
            style={{ top: `${20 * (i + 1)}%` }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for new projects
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">Sachin</span>{" "}
            <span className="relative">
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Devmurari
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {["Best SEO Service", "AEO & GEO Expert", "Content Marketing Agency", "Digital PR", "AI Growth"].map((role) => (
            <span
              key={role}
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-gray-300"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto mb-4 leading-relaxed"
        >
          The{" "}
          <span className="text-blue-400 font-semibold">Best Digital Marketing Service</span>
          <br className="hidden sm:block" />
          {" "}for SaaS & Enterprise Tech Brands —{" "}
          <span className="text-purple-400 font-semibold">USA & Global</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          Answer Engine Optimization · Content Marketing · SEO · AEO · GEO · Digital PR
          <br className="hidden sm:block" />
          <span className="text-gray-600">Digital Marketing Head at AQe Digital · Serving USA & Global Clients · 12+ Years</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection("portfolio")}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base hover:opacity-90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-gray-200 font-semibold text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-16"
        >
          {[
            { value: "12+", label: "Years Experience" },
            { value: "4K+", label: "LinkedIn Followers" },
            { value: "50+", label: "Brands Served" },
            { value: "6", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: badge.delay, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} border ${badge.border} backdrop-blur-sm`}
            >
              <badge.icon size={14} className="text-current opacity-80" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
