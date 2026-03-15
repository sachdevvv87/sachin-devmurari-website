"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const bigNumbers = [
  { value: "12+", label: "Years of Experience" },
  { value: "50+", label: "Brands Served" },
  { value: "4K+", label: "LinkedIn Followers" },
  { value: "8",   label: "Service Offerings" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Top: Photo + Bio side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.08]">
              {/*
                TO ADD YOUR PHOTO:
                1. Save your photo as: public/sachin.jpg
                2. The image will appear automatically here
                OR replace the src below with a direct URL to your LinkedIn photo
              */}
              <Image
                src="/sachin.jpg"
                alt="Sachin Devmurari — Digital Marketing Strategist"
                fill
                className="object-cover object-top"
                onError={(e) => {
                  // If photo not found, hide the img and show initials fallback
                  (e.target as HTMLImageElement).style.display = "none";
                }}
                priority
              />
              {/* Initials fallback (shows when photo not uploaded yet) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center select-none">
                  <div className="text-7xl font-bold text-zinc-700 leading-none">SD</div>
                  <p className="text-zinc-600 text-xs mt-3 tracking-widest uppercase">
                    Add photo to<br />public/sachin.jpg
                  </p>
                </div>
              </div>
            </div>

            {/* Location & availability */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-zinc-400 text-sm">Available for new projects</span>
              </div>
              <p className="text-zinc-600 text-sm">Ahmedabad, Gujarat, India · Serving clients globally</p>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">About Me</p>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The strategist behind real, compounding growth.
            </h2>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Sachin Devmurari</span> — I help
                SaaS startups and enterprise tech brands grow their traffic, authority, and revenue
                through SEO, content marketing, AEO, GEO, and AI-powered digital strategies.
              </p>
              <p>
                As Digital Marketing Head at{" "}
                <span className="text-white font-medium">AQe Digital</span> (formerly AQe Group),
                I specialize in Answer Engine Optimization (AEO), Generative Engine Optimization
                (GEO), and building content ecosystems that make brands visible inside ChatGPT,
                Perplexity, Google SGE, and traditional search — serving clients across the USA,
                UK, and India.
              </p>
              <p>
                Engineering graduate of GEC Bhavnagar. Analytical by training, creative by
                practice — I measure what matters and double down on what works.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/sachindevmurari"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white rounded-xl px-6 py-3 hover:border-white/40 transition-colors inline-flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn · 4K+ Followers
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {bigNumbers.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-[#0f0f0f] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.02] rounded-2xl p-6 transition-all duration-200"
            >
              <div className="text-4xl font-bold text-white tracking-tight">{item.value}</div>
              <div className="text-zinc-500 text-sm mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
