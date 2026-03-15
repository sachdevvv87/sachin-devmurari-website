"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "12+", label: "Years in Digital Marketing", icon: TrendingUp, color: "text-blue-400" },
  { value: "4K+", label: "LinkedIn Network", icon: Users, color: "text-purple-400" },
  { value: "50+", label: "Brands Served", icon: Briefcase, color: "text-cyan-400" },
  { value: "6+", label: "Certifications", icon: Award, color: "text-green-400" },
];

const highlights = [
  { icon: MapPin, text: "Ahmedabad, Gujarat, India" },
  { icon: Briefcase, text: "Digital Marketing Head · AQe Digital (formerly AQe Group)" },
  { icon: GraduationCap, text: "B.E. · GEC Bhavnagar (2010–2014)" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-blue-500" />
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Photo placeholder + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Photo placeholder */}
            <div className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-72 sm:h-72">
              {/* Rotating border ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-0.5 animate-spin-slow">
                <div className="absolute inset-0 rounded-2xl bg-[#0a0a0f]" />
              </div>

              {/* Main photo area */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#111120] to-[#0d0d1a] border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                    S
                  </div>
                  <p className="text-gray-400 text-sm">Sachin Devmurari</p>
                  <p className="text-gray-600 text-xs mt-1">Digital Marketing Expert</p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg" />
              </div>

              {/* Floating status badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#111118] border border-green-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Open to Collaborate</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/8 hover:border-blue-500/20 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <item.icon size={15} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                The Strategist Behind{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Real Growth
                </span>
              </h2>

              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  I&apos;m Sachin Devmurari — a digital marketing strategist with over{" "}
                  <span className="text-white font-medium">12 years of hands-on experience</span>{" "}
                  delivering the best SEO service, content marketing, and digital growth strategies for SaaS startups and enterprise tech brands across the <span className="text-blue-400 font-medium">USA and globally</span>.
                </p>
                <p>
                  As Digital Marketing Head at{" "}
                  <span className="text-blue-400 font-medium">AQe Digital</span>, I specialize in{" "}
                  <span className="text-purple-400 font-medium">Answer Engine Optimization (AEO)</span>,{" "}
                  <span className="text-cyan-400 font-medium">Generative Engine Optimization (GEO)</span>,
                  SEO, content marketing, digital PR, and AI-powered growth — making brands visible inside ChatGPT, Perplexity, Google SGE, and traditional search.
                </p>
                <p>
                  My approach combines{" "}
                  <span className="text-purple-400 font-medium">deep technical expertise</span> with{" "}
                  <span className="text-cyan-400 font-medium">creative storytelling</span> to build content and SEO programs
                  that don&apos;t just rank — they convert. I serve clients across the USA, UK, and India as a top digital marketing expert trusted by ambitious B2B brands.
                </p>
                <p>
                  An engineering graduate from GEC Bhavnagar, I bring an analytical mindset to
                  every strategy — measuring what matters and doubling down on what works.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-5 rounded-xl bg-white/3 border border-white/8 hover:border-white/15 transition-all group cursor-default"
                >
                  <div className={`${stat.color} mb-3`}>
                    <stat.icon size={20} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-500 text-xs font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://linkedin.com/in/sachindevmurari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#4da3f5] hover:bg-[#0A66C2]/25 transition-all duration-300 hover:-translate-y-0.5 w-fit font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn · 4K+ Followers
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
