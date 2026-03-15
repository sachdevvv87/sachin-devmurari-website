"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years" },
  { value: "50+", label: "Brands" },
  { value: "4K+", label: "Followers" },
  { value: "8", label: "Services" },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col items-start">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-8"
          >
            Digital Growth Strategist
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02] mb-6"
          >
            Digital Growth
            <br />
            Strategist.
          </motion.h1>

          {/* Descriptor */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-zinc-400 mb-4"
          >
            AEO · GEO · SEO · Content Marketing · Digital PR
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-zinc-400 leading-relaxed max-w-xl mb-10"
          >
            Helping SaaS and enterprise tech brands across the USA and globally achieve
            compounding organic growth — 12+ years of hands-on strategy.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-white text-black font-semibold rounded-xl px-6 py-3 hover:bg-zinc-100 transition-colors"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-white/20 text-white rounded-xl px-6 py-3 hover:border-white/40 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Divider + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-px w-full bg-white/[0.06] mb-10" />
          <div className="flex flex-wrap gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-zinc-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
