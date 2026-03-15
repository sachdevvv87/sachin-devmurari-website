"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const caseStudies = [
  {
    metric: "300%",
    metricLabel: "ORGANIC TRAFFIC GROWTH",
    tag: "SaaS · SEO Strategy",
    title: "300% Organic Traffic Growth for a B2B SaaS Platform",
    description:
      "Developed a comprehensive SEO overhaul for a mid-market SaaS platform — revamping site architecture, implementing topical authority clusters, and fixing critical technical SEO issues that unlocked massive indexing gains.",
    secondaryMetrics: ["#1–3 Rankings for 40+ Keywords", "8x Increase in Organic Leads"],
    tags: ["Technical SEO", "Content Architecture", "Schema Markup", "CRO"],
  },
  {
    metric: "2x",
    metricLabel: "MQL GROWTH VIA CONTENT",
    tag: "Enterprise · Content Marketing",
    title: "2x Pipeline Growth via Content for Enterprise Tech Brand",
    description:
      "Built and executed a full-funnel content strategy for an enterprise software company — from awareness blog content to bottom-of-funnel comparison pages, case studies, and gated whitepapers that accelerated deal velocity.",
    secondaryMetrics: ["180% Blog Traffic Increase", "45% Reduction in CAC"],
    tags: ["Content Strategy", "Lead Gen", "Thought Leadership", "ABM Content"],
  },
  {
    metric: "DR +22",
    metricLabel: "DOMAIN RATING INCREASE",
    tag: "Digital PR · Authority Building",
    title: "Domain Authority Surge via Digital PR Campaign",
    description:
      "Orchestrated a targeted digital PR campaign combining data-driven story angles, media outreach to tech publications, and HARO responses — earning 50+ high-quality backlinks from DR 60+ publications in the tech space.",
    secondaryMetrics: ["50+ Quality Backlinks Earned", "3x Branded Search Growth"],
    tags: ["Digital PR", "Link Building", "Media Outreach", "HARO"],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-32 lg:py-40 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Results that speak.
          </h2>
        </motion.div>

        {/* Case studies — full-width stacked */}
        <div>
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {i > 0 && <div className="h-px bg-white/[0.06]" />}
              <div className="py-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left: Big metric */}
                <div className="lg:w-[35%] shrink-0">
                  <div
                    className="font-bold text-white leading-none tracking-tight"
                    style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                  >
                    {study.metric}
                  </div>
                  <div className="text-zinc-500 text-sm uppercase tracking-widest mt-3">
                    {study.metricLabel}
                  </div>
                  <div className="mt-4 flex flex-col gap-1">
                    {study.secondaryMetrics.map((m) => (
                      <div key={m} className="text-xs text-zinc-600">{m}</div>
                    ))}
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:w-[65%]">
                  <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2">{study.tag}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{study.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-zinc-600 border border-white/[0.06] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
