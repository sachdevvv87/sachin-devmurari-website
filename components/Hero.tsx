"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Brands Grown" },
  { value: "4K+", label: "LinkedIn Network" },
  { value: "8", label: "Services" },
];

const tickerItems =
  "AEO & GEO Services · Best SEO Service · Content Marketing · Digital PR · AI-Powered Growth · SaaS Strategy · Enterprise Content · Content Writing · ";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-black pt-16"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        {/* Split layout */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left — 60% */}
          <div className="flex-1 lg:max-w-[60%]">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-6"
            >
              Sachin Devmurari
            </motion.p>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-bold tracking-tight text-white leading-[1.0] mb-6"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
            >
              The Digital
              <br />
              Growth Expert.
            </motion.h1>

            {/* Descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-zinc-400 text-lg mt-6"
            >
              AEO · GEO · SEO · Content Marketing · Digital PR — 12+ years
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-zinc-100 transition-colors text-sm"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-white/20 text-white px-7 py-3 rounded-full text-sm hover:border-white/50 transition-colors"
              >
                Let&apos;s Talk
              </button>
            </motion.div>
          </div>

          {/* Right — 40%, desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="hidden lg:block lg:w-[40%] shrink-0"
          >
            <div className="relative h-[420px] bg-[#111] border border-white/[0.07] rounded-3xl overflow-hidden">
              {/* Profile photo */}
              <Image
                src="/sachin.jpg"
                alt="Sachin Devmurari"
                fill
                className="object-cover object-top"
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold text-zinc-800 select-none">SD</span>
              </div>
              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-5 py-3 flex justify-between items-center">
                <span className="text-xs text-zinc-400">Digital Marketing Head · AQe Digital</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-green-400">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <div className="h-px bg-white/[0.06] mt-16" />

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-12 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-zinc-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 overflow-hidden"
        >
          <div className="animate-marquee flex w-max gap-8">
            {[tickerItems, tickerItems, tickerItems].map((chunk, idx) => (
              <span key={idx} className="text-sm text-zinc-600 whitespace-nowrap">
                {chunk}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
