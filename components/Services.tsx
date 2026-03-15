"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  FileText,
  Brain,
  Radio,
  BarChart3,
  BookOpen,
  ArrowRight,
  Cpu,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AEO & GEO Service",
    subtitle: "Answer Engine & Generative Engine Optimization USA",
    description:
      "The #1 emerging digital marketing service in the USA. Optimize your brand to appear inside AI answers on ChatGPT, Perplexity, Google SGE, and Bing Copilot. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are the future of search — get ahead of competitors now.",
    features: ["AI Answer Visibility", "Structured Data & Schema", "Entity Optimization", "GEO Content Strategy"],
    gradient: "from-violet-500 to-violet-700",
    bgGlow: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    tag: "New & Trending",
  },
  {
    icon: Search,
    title: "Best SEO Service",
    subtitle: "Technical & Semantic SEO for USA & Global Brands",
    description:
      "The best SEO service for SaaS and enterprise tech brands. End-to-end SEO architecture including technical audits, semantic keyword clustering, entity optimization, and SERP domination strategies — trusted by companies across the USA and worldwide.",
    features: ["Technical SEO Audits", "Keyword Architecture", "Core Web Vitals", "Schema Markup"],
    gradient: "from-blue-500 to-blue-700",
    bgGlow: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
    tag: "Most Popular",
  },
  {
    icon: FileText,
    title: "Content Marketing Agency",
    subtitle: "Top Content Marketing Agency for USA Brands",
    description:
      "One of the best content marketing agencies serving USA clients. Data-driven strategies that build topical authority, nurture pipelines, and convert readers into revenue — from thought leadership to product-led content that compounds over time.",
    features: ["Content Strategy", "Pillar & Cluster Model", "Editorial Calendar", "Conversion Copy"],
    gradient: "from-purple-500 to-purple-700",
    bgGlow: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/40",
    tag: null,
  },
  {
    icon: PenTool,
    title: "Content Writing Agency",
    subtitle: "Expert Content Writing Services for USA & Global Brands",
    description:
      "Premium content writing agency serving USA and global tech brands. SEO-optimized, human-first content: blog posts, whitepapers, case studies, landing pages, and thought leadership articles that rank, engage, and convert.",
    features: ["Blog & Article Writing", "Whitepapers & Ebooks", "Case Studies", "Landing Page Copy"],
    gradient: "from-emerald-500 to-emerald-700",
    bgGlow: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    tag: null,
  },
  {
    icon: Brain,
    title: "AI-Powered Growth",
    subtitle: "AI Strategy & Automation",
    description:
      "Leverage AI tools and workflows to accelerate content production, automate reporting, uncover semantic gaps, and build scalable growth systems. A best-in-class digital marketing service for brands ready to scale with AI.",
    features: ["AI Content Workflows", "Prompt Engineering", "Automation Stacks", "AI SEO Tools"],
    gradient: "from-cyan-500 to-cyan-700",
    bgGlow: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    tag: "Trending",
  },
  {
    icon: Radio,
    title: "Digital PR",
    subtitle: "Authority & Backlink Building",
    description:
      "Strategic digital PR campaigns that earn high-authority backlinks, brand mentions in tier-1 USA and global publications, and establish your brand as the go-to voice in your industry.",
    features: ["Link Building", "Media Outreach", "Brand Mentions", "HARO Campaigns"],
    gradient: "from-rose-500 to-rose-700",
    bgGlow: "bg-rose-500/10",
    border: "border-rose-500/20",
    hoverBorder: "hover:border-rose-500/40",
    tag: null,
  },
  {
    icon: BarChart3,
    title: "SaaS Growth Strategy",
    subtitle: "Organic Pipeline Growth",
    description:
      "Full-funnel growth strategy for SaaS brands — from awareness SEO to product-led content, comparison pages, and bottom-of-funnel assets that convert trial users to customers.",
    features: ["PLG Content", "Competitor Displacement", "Review Sites SEO", "Trial Conversion"],
    gradient: "from-amber-500 to-amber-700",
    bgGlow: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
    tag: null,
  },
  {
    icon: BookOpen,
    title: "Enterprise Content",
    subtitle: "Large-Scale Content Operations",
    description:
      "Build and manage enterprise-grade content operations — governance frameworks, multi-team editorial systems, localization strategies, and content programs that scale globally including USA enterprise clients.",
    features: ["Content Governance", "Multi-team Workflows", "Localization", "Analytics Reporting"],
    gradient: "from-teal-500 to-teal-700",
    bgGlow: "bg-teal-500/10",
    border: "border-teal-500/20",
    hoverBorder: "hover:border-teal-500/40",
    tag: null,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#080810] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Services</span>
            <div className="h-px w-12 bg-purple-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            What I{" "}
            <span
              className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Specialize In
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            The best digital marketing services for SaaS and enterprise tech brands — including
            AEO, GEO, SEO, content marketing, and content writing services for USA and global clients.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative group p-6 rounded-2xl bg-[#0d0d16] border ${service.border} ${service.hoverBorder} transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Tag */}
              {service.tag && (
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${service.gradient} text-white`}>
                    {service.tag}
                  </span>
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={22} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-5">Looking for a custom strategy for your brand?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
