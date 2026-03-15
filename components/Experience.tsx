"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "AQe Digital",
    companyFull: "AQe Digital (formerly AQe Group)",
    role: "Digital Marketing Head",
    period: "2018 – Present",
    duration: "7+ years",
    location: "Ahmedabad, Gujarat, India",
    type: "Full-time",
    description:
      "Leading the digital marketing function for AQe Digital, a premier digital agency serving SaaS, enterprise tech, and B2B brands. Responsible for SEO strategy, content operations, digital PR, and AI-powered marketing initiatives.",
    achievements: [
      "Built and scaled SEO programs generating 200–400% organic traffic growth for clients",
      "Established content marketing frameworks adopted across 15+ enterprise accounts",
      "Pioneered AI-integrated marketing workflows reducing content production time by 60%",
      "Grew agency's digital PR capabilities, earning placements in Forbes, TechCrunch, and niche tech publications",
      "Managed and mentored a cross-functional team of SEO specialists, content writers, and PR associates",
    ],
    tech: ["SEMrush", "Ahrefs", "HubSpot", "Screaming Frog", "GA4", "GSC", "ChatGPT", "Jasper"],
    color: "from-blue-500 to-purple-600",
    dotColor: "bg-blue-500",
    borderColor: "border-blue-500/30",
    isCurrent: true,
  },
  {
    company: "AQe Group",
    companyFull: "AQe Group (Pre-rebranding)",
    role: "Senior SEO & Content Strategist",
    period: "2015 – 2018",
    duration: "3 years",
    location: "Ahmedabad, Gujarat, India",
    type: "Full-time",
    description:
      "Spearheaded SEO and content strategy for a growing portfolio of B2B tech clients. Developed link-building campaigns, on-page optimization frameworks, and content calendars aligned with business growth objectives.",
    achievements: [
      "Delivered consistent first-page rankings for competitive SaaS keywords",
      "Developed agency's first structured content marketing playbook",
      "Led digital PR campaigns that secured 100+ editorial backlinks per quarter",
      "Managed client SEO accounts with budgets ranging from $5K to $50K/month",
    ],
    tech: ["Moz", "SEMrush", "WordPress", "Google Analytics", "Outreach.io"],
    color: "from-purple-500 to-cyan-600",
    dotColor: "bg-purple-500",
    borderColor: "border-purple-500/30",
    isCurrent: false,
  },
  {
    company: "Digital Agency",
    companyFull: "Digital Marketing Agency (Confidential)",
    role: "SEO Analyst & Content Manager",
    period: "2013 – 2015",
    duration: "2 years",
    location: "Gujarat, India",
    type: "Full-time",
    description:
      "Began professional digital marketing career as an SEO analyst, handling on-page optimization, keyword research, and content management for small and mid-sized businesses across various verticals.",
    achievements: [
      "Managed SEO campaigns for 20+ client websites simultaneously",
      "Implemented content strategies that improved organic visibility for local and national brands",
      "Gained foundational expertise in technical SEO, link building, and analytics",
    ],
    tech: ["Google Analytics", "Moz", "WordPress", "Excel"],
    color: "from-cyan-500 to-teal-600",
    dotColor: "bg-cyan-500",
    borderColor: "border-cyan-500/30",
    isCurrent: false,
  },
  {
    company: "GEC Bhavnagar",
    companyFull: "Government Engineering College, Bhavnagar",
    role: "Bachelor of Engineering",
    period: "2010 – 2014",
    duration: "4 years",
    location: "Bhavnagar, Gujarat, India",
    type: "Education",
    description:
      "Completed engineering degree that instilled analytical thinking, problem-solving frameworks, and a data-driven mindset — skills that directly translate to modern digital marketing strategy.",
    achievements: [
      "Engineering foundation enabling analytical approach to SEO and data analysis",
      "Technical aptitude for understanding SaaS products and enterprise software deeply",
    ],
    tech: [],
    color: "from-amber-500 to-orange-600",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-500/30",
    isCurrent: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-[#080810] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Experience</span>
            <div className="h-px w-12 bg-purple-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            12+ Years of{" "}
            <span
              className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Growth Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            From SEO analyst to Digital Marketing Head — a journey built on continuous learning,
            data-driven strategy, and measurable impact.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-5 top-6">
                  <div className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-[#080810] shadow-lg`}>
                    {exp.isCurrent && (
                      <div className={`absolute inset-0 rounded-full ${exp.dotColor} animate-ping opacity-40`} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`group p-6 rounded-2xl bg-[#0d0d16] border ${exp.borderColor} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500/15 border border-green-500/30 text-green-400">
                            Current
                          </span>
                        )}
                        {exp.type === "Education" && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-400">
                            Education
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 mb-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`} />
                        <span className="text-blue-300 font-semibold text-sm">{exp.company}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period} · {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={12} />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <ChevronRight size={14} className="text-blue-400 shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
