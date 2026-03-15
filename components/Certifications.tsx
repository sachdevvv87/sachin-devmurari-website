"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certificationGroups = [
  {
    issuer: "upGrad",
    certs: [
      { name: "Generative AI Foundations", year: "Jun 2025" },
    ],
  },
  {
    issuer: "LinkedIn Learning",
    certs: [
      { name: "Ethics in the Age of Generative AI", year: "Jul 2023" },
      { name: "Introduction to Artificial Intelligence", year: "Jul 2023" },
      { name: "Generative AI: The Evolution of Thoughtful Online Search", year: "Jun 2023" },
      { name: "Content Marketing Foundations", year: "May 2020" },
    ],
  },
  {
    issuer: "HubSpot Academy",
    certs: [
      { name: "Inbound Certification", year: "Dec 2022" },
    ],
  },
  {
    issuer: "Semrush Academy",
    certs: [
      { name: "Mastering Digital PR", year: "May 2022" },
      { name: "On-Page and Technical SEO", year: "May 2022" },
    ],
  },
  {
    issuer: "Write Right",
    certs: [
      { name: "Write Right Certificate", year: "Jun 2020" },
    ],
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-32 lg:py-40 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Certified expertise.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl">
            Continuously learning across AI, SEO, content marketing, and digital PR — verified by leading industry platforms.
          </p>
        </motion.div>

        {/* Groups */}
        <div className="flex flex-col gap-10">
          {certificationGroups.map((group, gi) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-600 mb-4">
                {group.issuer}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="border border-white/[0.08] hover:border-white/[0.18] rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="text-sm text-zinc-300">{cert.name}</span>
                    <span className="text-xs text-zinc-600">·</span>
                    <span className="text-xs text-zinc-600">{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
