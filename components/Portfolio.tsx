"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ExternalLink, BarChart2, Users, Search, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    tag: "SaaS · SEO Strategy",
    title: "300% Organic Traffic Growth for a B2B SaaS Platform",
    description:
      "Developed a comprehensive SEO overhaul for a mid-market SaaS platform — revamping site architecture, implementing topical authority clusters, and fixing critical technical SEO issues that unlocked massive indexing gains.",
    metrics: [
      { icon: TrendingUp, value: "300%", label: "Organic Traffic Growth", color: "text-blue-400" },
      { icon: Search, value: "#1–3", label: "Rankings for 40+ Keywords", color: "text-green-400" },
      { icon: BarChart2, value: "8x", label: "Increase in Organic Leads", color: "text-purple-400" },
    ],
    tags: ["Technical SEO", "Content Architecture", "Schema Markup", "CRO"],
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
    accentColor: "text-blue-400",
    timeline: "6 months",
    industry: "HR Tech SaaS",
  },
  {
    tag: "Enterprise · Content Marketing",
    title: "2x Pipeline Growth via Content for Enterprise Tech Brand",
    description:
      "Built and executed a full-funnel content strategy for an enterprise software company — from awareness blog content to bottom-of-funnel comparison pages, case studies, and gated whitepapers that accelerated deal velocity.",
    metrics: [
      { icon: Users, value: "2x", label: "MQL Growth via Content", color: "text-purple-400" },
      { icon: TrendingUp, value: "180%", label: "Blog Traffic Increase", color: "text-blue-400" },
      { icon: BarChart2, value: "45%", label: "Reduction in CAC", color: "text-cyan-400" },
    ],
    tags: ["Content Strategy", "Lead Gen", "Thought Leadership", "ABM Content"],
    gradient: "from-purple-500/20 to-cyan-500/20",
    border: "border-purple-500/20",
    accentColor: "text-purple-400",
    timeline: "12 months",
    industry: "Enterprise Software",
  },
  {
    tag: "Digital PR · Authority Building",
    title: "Domain Authority Surge via Digital PR Campaign",
    description:
      "Orchestrated a targeted digital PR campaign combining data-driven story angles, media outreach to tech publications, and HARO responses — earning 50+ high-quality backlinks from DR 60+ publications in the tech space.",
    metrics: [
      { icon: TrendingUp, value: "DR +22", label: "Domain Rating Increase", color: "text-cyan-400" },
      { icon: ExternalLink, value: "50+", label: "Quality Backlinks Earned", color: "text-green-400" },
      { icon: BarChart2, value: "3x", label: "Branded Search Growth", color: "text-rose-400" },
    ],
    tags: ["Digital PR", "Link Building", "Media Outreach", "HARO"],
    gradient: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    timeline: "4 months",
    industry: "FinTech SaaS",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />
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
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <div className="h-px w-12 bg-blue-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Case Studies &{" "}
            <span
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Real campaigns, measurable outcomes. Here&apos;s how I&apos;ve helped brands
            achieve significant growth through strategic digital marketing.
          </motion.p>
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${study.gradient} border ${study.border} hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>

              {/* Index number */}
              <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Content */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 border border-white/15 ${study.accentColor}`}>
                      {study.tag}
                    </span>
                    <span className="text-xs text-gray-500">· {study.timeline} campaign · {study.industry}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Metrics */}
                <div className="flex flex-col gap-4 lg:items-end">
                  {study.metrics.map((metric, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-white/10 w-full lg:w-auto min-w-[180px]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <metric.icon size={18} className={metric.color} />
                      </div>
                      <div>
                        <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-gray-500 text-xs leading-tight">{metric.label}</div>
                      </div>
                    </div>
                  ))}

                  <button className="mt-2 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/btn">
                    <span>View Full Case Study</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-2 text-sm">These are select highlights.</p>
          <p className="text-gray-400 mb-6">
            Want to explore how similar results can be achieved for your brand?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 font-medium"
          >
            Start Your Growth Journey
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
