"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "HubSpot Inbound Marketing",
    issuer: "HubSpot Academy",
    year: "2024",
    category: "Content & Inbound",
    description: "Comprehensive certification covering inbound methodology, content strategy, lead nurturing, and conversion optimization for B2B marketing funnels.",
    skills: ["Inbound Methodology", "Lead Nurturing", "CRM Strategy", "Content Marketing"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40",
    badge: "🏆",
    issuerLogo: "H",
    issuerColor: "bg-[#FF7A59]",
  },
  {
    name: "Semrush SEO Toolkit",
    issuer: "Semrush Academy",
    year: "2024",
    category: "SEO",
    description: "Advanced SEO certification covering keyword research, competitive analysis, technical SEO, and data-driven strategy using the Semrush platform.",
    skills: ["Keyword Research", "Competitive Analysis", "Technical SEO", "Rank Tracking"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    border: "border-green-500/20",
    hoverBorder: "hover:border-green-500/40",
    badge: "★",
    issuerLogo: "S",
    issuerColor: "bg-[#FF642D]",
  },
  {
    name: "Semrush Digital PR",
    issuer: "Semrush Academy",
    year: "2024",
    category: "Digital PR",
    description: "Specialized certification in digital PR strategy, including media outreach, link building through PR, data journalism, and building brand authority online.",
    skills: ["Media Outreach", "Link Building via PR", "Brand Mentions", "Data Journalism"],
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
    badge: "★",
    issuerLogo: "S",
    issuerColor: "bg-[#FF642D]",
  },
  {
    name: "AI for Marketing Professionals",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "AI Strategy",
    description: "In-depth course on applying artificial intelligence tools to marketing — from content creation and SEO automation to predictive analytics and personalization at scale.",
    skills: ["AI Content Tools", "Marketing Automation", "Predictive Analytics", "AI SEO"],
    color: "from-sky-500 to-cyan-500",
    bgColor: "bg-sky-500/10",
    border: "border-sky-500/20",
    hoverBorder: "hover:border-sky-500/40",
    badge: "◆",
    issuerLogo: "in",
    issuerColor: "bg-[#0A66C2]",
  },
  {
    name: "Generative AI for Business",
    issuer: "LinkedIn Learning",
    year: "2023",
    category: "AI & Business",
    description: "Certificate covering generative AI applications in business contexts — prompt engineering, AI workflow design, ethical AI use, and integrating LLMs into marketing processes.",
    skills: ["Prompt Engineering", "AI Workflows", "Generative AI", "LLM Integration"],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    badge: "◆",
    issuerLogo: "in",
    issuerColor: "bg-[#0A66C2]",
  },
  {
    name: "AI for Digital Marketing",
    issuer: "upGrad",
    year: "2023",
    category: "AI Marketing",
    description: "Structured program on leveraging AI across the digital marketing lifecycle — SEO, paid media, social media, content, and analytics with a focus on practical application.",
    skills: ["AI-Powered SEO", "AI Content Strategy", "Marketing Analytics", "AI Tools Stack"],
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    border: "border-rose-500/20",
    hoverBorder: "hover:border-rose-500/40",
    badge: "✓",
    issuerLogo: "U",
    issuerColor: "bg-[#4B5EEB]",
  },
];

const stats = [
  { value: "6+", label: "Certifications", icon: Award },
  { value: "2024", label: "Most Recent", icon: CheckCircle },
  { value: "4", label: "Platforms", icon: CheckCircle },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-[#080810] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-amber-600/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/4 rounded-full blur-[80px]" />
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
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Certifications</span>
            <div className="h-px w-12 bg-amber-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Credentials &{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Continuous learning is core to my practice. These certifications represent
            my commitment to staying at the forefront of digital marketing and AI.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-8 sm:gap-16 mb-14 p-6 rounded-2xl bg-white/3 border border-white/8 max-w-md mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-amber-400 mb-0.5">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative p-6 rounded-2xl bg-[#0d0d16] border ${cert.border} ${cert.hoverBorder} transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 ${cert.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Issuer logo */}
                    <div className={`w-10 h-10 rounded-xl ${cert.issuerColor} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg`}>
                      {cert.issuerLogo}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium">{cert.issuer}</p>
                      <p className="text-gray-600 text-xs">{cert.year}</p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white opacity-90`}>
                    {cert.category}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-4" />

                {/* Cert name */}
                <h3 className="text-white font-bold text-base mb-3 leading-snug group-hover:text-white transition-colors">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-gray-500 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 text-xs text-green-500">
                  <CheckCircle size={12} />
                  <span className="font-medium">Verified Certification</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm">
            Continuously learning — always ahead of the curve in SEO, AI, and digital marketing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
