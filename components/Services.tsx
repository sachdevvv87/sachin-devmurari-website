"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "AEO & GEO Service",
    description:
      "Optimize your brand to appear inside AI answers on ChatGPT, Perplexity, Google SGE, and Bing Copilot. Answer Engine Optimization and Generative Engine Optimization are the future of search.",
    features: ["AI Answer Visibility", "Structured Data & Schema", "Entity Optimization", "GEO Content Strategy"],
    tag: "Trending",
  },
  {
    number: "02",
    title: "Best SEO Service",
    description:
      "End-to-end SEO architecture for SaaS and enterprise tech brands — technical audits, semantic keyword clustering, entity optimization, and SERP domination strategies for USA and global markets.",
    features: ["Technical SEO Audits", "Keyword Architecture", "Core Web Vitals", "Schema Markup"],
    tag: "Popular",
  },
  {
    number: "03",
    title: "Content Marketing Agency",
    description:
      "Data-driven content strategies that build topical authority, nurture pipelines, and convert readers into revenue — from thought leadership to product-led content that compounds over time.",
    features: ["Content Strategy", "Pillar & Cluster Model", "Editorial Calendar", "Conversion Copy"],
    tag: null,
  },
  {
    number: "04",
    title: "Content Writing Agency",
    description:
      "Premium content writing for USA and global tech brands. SEO-optimized, human-first content: blog posts, whitepapers, case studies, landing pages, and thought leadership articles.",
    features: ["Blog & Article Writing", "Whitepapers & Ebooks", "Case Studies", "Landing Page Copy"],
    tag: null,
  },
  {
    number: "05",
    title: "AI-Powered Growth",
    description:
      "Leverage AI tools and workflows to accelerate content production, automate reporting, uncover semantic gaps, and build scalable growth systems for brands ready to scale with AI.",
    features: ["AI Content Workflows", "Prompt Engineering", "Automation Stacks", "AI SEO Tools"],
    tag: "Trending",
  },
  {
    number: "06",
    title: "Digital PR",
    description:
      "Strategic digital PR campaigns that earn high-authority backlinks, brand mentions in tier-1 USA and global publications, and establish your brand as the go-to voice in your industry.",
    features: ["Link Building", "Media Outreach", "Brand Mentions", "HARO Campaigns"],
    tag: null,
  },
  {
    number: "07",
    title: "SaaS Growth Strategy",
    description:
      "Full-funnel growth strategy for SaaS brands — from awareness SEO to product-led content, comparison pages, and bottom-of-funnel assets that convert trial users to customers.",
    features: ["PLG Content", "Competitor Displacement", "Review Sites SEO", "Trial Conversion"],
    tag: null,
  },
  {
    number: "08",
    title: "Enterprise Content",
    description:
      "Build and manage enterprise-grade content operations — governance frameworks, multi-team editorial systems, localization strategies, and content programs that scale globally.",
    features: ["Content Governance", "Multi-team Workflows", "Localization", "Analytics Reporting"],
    tag: null,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0f0f0f] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.02] rounded-2xl p-6 transition-all duration-200"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-zinc-600">{service.number}</span>
                {service.tag && (
                  <span className="text-xs text-zinc-400 border border-white/[0.08] rounded-full px-3 py-1">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Tag pills */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
