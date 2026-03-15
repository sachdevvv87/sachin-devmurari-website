"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "50+", label: "Brands Served" },
  { value: "4K+", label: "LinkedIn Followers" },
  { value: "8", label: "Service Offerings" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-20 mb-16">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[550px] rounded-3xl overflow-hidden bg-[#111] border border-white/[0.07]">
              <Image
                src="/sachin.jpg"
                alt="Sachin Devmurari — Digital Marketing Head"
                fill
                className="object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-zinc-700 select-none">SD</span>
              </div>
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm font-semibold">Sachin Devmurari</p>
                <p className="text-zinc-400 text-xs mt-1">Ahmedabad, India · Available for projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.2em] text-zinc-600 uppercase">About Me</p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mt-4">
              I help SaaS and enterprise tech brands grow.
            </h2>

            <p className="text-xl text-zinc-300 leading-relaxed mt-6 pl-4 border-l-2 border-blue-500">
              &ldquo;12+ years turning search visibility into measurable revenue — from AQe Group to AQe Digital.&rdquo;
            </p>

            <div className="space-y-4 mt-6">
              <p className="text-zinc-400 text-base leading-relaxed">
                As Digital Marketing Head at AQe Digital, I specialize in Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), SEO, content marketing, and digital PR — making brands visible inside ChatGPT, Perplexity, Google SGE, and traditional search.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                I serve SaaS startups and enterprise tech brands across the USA, UK, and India. Engineering graduate of GEC Bhavnagar — I bring an analytical mindset to every strategy.
              </p>
            </div>

            <a
              href="https://linkedin.com/in/sachindevmurari"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-white/20 text-white rounded-full px-6 py-3 text-sm hover:border-white/50 transition-colors w-fit"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn · 4K+ Followers
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.06]">
          {stats.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-[#111] border border-white/[0.07] rounded-2xl p-6"
            >
              <div className="text-2xl font-bold text-white tracking-tight">{item.value}</div>
              <div className="text-zinc-600 text-xs mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
