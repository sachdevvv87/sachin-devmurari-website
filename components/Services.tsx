"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "AEO & GEO Service",
    tag: "Trending",
    description:
      "Optimize your brand to appear inside AI answers on ChatGPT, Perplexity, Google SGE, and Bing Copilot. Answer Engine Optimization and Generative Engine Optimization are the future of search.",
    features: ["AI Answer Visibility", "Structured Data & Schema", "Entity Optimization", "GEO Content Strategy"],
  },
  {
    number: "02",
    title: "Best SEO Service",
    tag: "Popular",
    description:
      "End-to-end SEO architecture for SaaS and enterprise tech brands — technical audits, semantic keyword clustering, entity optimization, and SERP domination strategies for USA and global markets.",
    features: ["Technical SEO Audits", "Keyword Architecture", "Core Web Vitals", "Schema Markup"],
  },
  {
    number: "03",
    title: "Content Marketing Agency",
    tag: null,
    description:
      "Data-driven content strategies that build topical authority, nurture pipelines, and convert readers into revenue — from thought leadership to product-led content that compounds over time.",
    features: ["Content Strategy", "Pillar & Cluster Model", "Editorial Calendar", "Conversion Copy"],
  },
  {
    number: "04",
    title: "Content Writing Agency",
    tag: null,
    description:
      "Premium content writing for USA and global tech brands. SEO-optimized, human-first content: blog posts, whitepapers, case studies, landing pages, and thought leadership articles.",
    features: ["Blog & Article Writing", "Whitepapers & Ebooks", "Case Studies", "Landing Page Copy"],
  },
  {
    number: "05",
    title: "AI-Powered Growth",
    tag: "Trending",
    description:
      "Leverage AI tools and workflows to accelerate content production, automate reporting, uncover semantic gaps, and build scalable growth systems for brands ready to scale with AI.",
    features: ["AI Content Workflows", "Prompt Engineering", "Automation Stacks", "AI SEO Tools"],
  },
  {
    number: "06",
    title: "Digital PR",
    tag: null,
    description:
      "Strategic digital PR campaigns that earn high-authority backlinks, brand mentions in tier-1 USA and global publications, and establish your brand as the go-to voice in your industry.",
    features: ["Link Building", "Media Outreach", "Brand Mentions", "HARO Campaigns"],
  },
  {
    number: "07",
    title: "SaaS Growth Strategy",
    tag: null,
    description:
      "Full-funnel growth strategy for SaaS brands — from awareness SEO to product-led content, comparison pages, and bottom-of-funnel assets that convert trial users to customers.",
    features: ["PLG Content", "Competitor Displacement", "Review Sites SEO", "Trial Conversion"],
  },
  {
    number: "08",
    title: "Enterprise Content",
    tag: null,
    description:
      "Build and manage enterprise-grade content operations — governance frameworks, multi-team editorial systems, localization strategies, and content programs that scale globally.",
    features: ["Content Governance", "Multi-team Workflows", "Localization", "Analytics Reporting"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="py-32 lg:py-40 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            What I do.
          </h2>
          <p className="text-zinc-400 max-w-xl">
            AEO, GEO, SEO, content marketing, and digital PR for SaaS and enterprise brands in the USA and globally.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div>
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={`cursor-pointer border-b border-white/[0.06] py-5 group transition-colors duration-200 ${isOpen ? "bg-white/[0.02]" : ""} px-2 -mx-2 rounded-sm`}
                  onClick={() => toggle(i)}
                >
                  {/* Row header */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-zinc-700 w-8 shrink-0">{service.number}</span>
                    <span className={`text-lg font-semibold flex-1 transition-colors duration-200 ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                      {service.title}
                    </span>
                    {service.tag && (
                      <span className="text-xs text-zinc-500 border border-white/[0.08] rounded-full px-3 py-1 hidden sm:inline-flex">
                        {service.tag}
                      </span>
                    )}
                    <span
                      className={`text-zinc-600 group-hover:text-white transition-all duration-200 text-lg ${isOpen ? "rotate-90" : ""}`}
                      style={{ display: "inline-block" }}
                    >
                      →
                    </span>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-12">
                          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="text-xs text-zinc-600 border border-white/[0.06] rounded-full px-3 py-1"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
