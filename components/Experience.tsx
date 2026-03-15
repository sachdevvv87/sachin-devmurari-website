"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    period: "2018 – Present",
    company: "AQe Digital",
    companyNote: "formerly AQe Group",
    role: "Digital Marketing Head",
    description:
      "Leading end-to-end digital marketing for AQe Digital — a growth-focused agency serving SaaS startups and enterprise tech brands across the USA, UK, and India. Responsible for SEO strategy, content operations, AEO/GEO, digital PR, and AI-powered marketing initiatives.",
    achievements: [
      "Built SEO programs delivering 200–400% organic traffic growth for SaaS and B2B clients",
      "Established content marketing frameworks adopted across 15+ enterprise accounts",
      "Pioneered Answer Engine Optimization (AEO) and GEO workflows to capture AI-driven search visibility",
      "Reduced content production time by 60% through AI-integrated editorial systems",
      "Earned placements in Forbes, TechCrunch, and niche tech publications via digital PR",
      "Mentored cross-functional teams of SEO specialists, content writers, and PR associates",
    ],
    tools: ["SEMrush", "Ahrefs", "HubSpot", "Screaming Frog", "GA4", "GSC", "ChatGPT", "Perplexity"],
    isCurrent: true,
  },
  {
    period: "2015 – 2018",
    company: "AQe Group",
    companyNote: "",
    role: "Senior SEO & Content Strategist",
    description:
      "Spearheaded SEO and content strategy for a growing portfolio of B2B tech clients. Developed link-building campaigns, on-page optimization frameworks, and content calendars aligned with client business goals.",
    achievements: [
      "Delivered consistent first-page rankings for competitive SaaS and B2B keywords",
      "Built the agency's first structured content marketing playbook",
      "Led digital PR campaigns securing 100+ editorial backlinks per quarter",
      "Managed client SEO accounts across varying budget scales",
    ],
    tools: ["Moz", "SEMrush", "WordPress", "Google Analytics", "Outreach.io"],
    isCurrent: false,
  },
  {
    period: "2013 – 2015",
    company: "Digital Marketing",
    companyNote: "early career",
    role: "SEO Analyst & Content Manager",
    description:
      "Started professional digital marketing career handling on-page optimization, keyword research, and content management for SMBs across various verticals — building foundational expertise in technical SEO and analytics.",
    achievements: [
      "Managed SEO campaigns for 20+ client websites simultaneously",
      "Improved organic visibility for local and national brands through content strategy",
      "Built foundational expertise in technical SEO, link building, and reporting",
    ],
    tools: ["Google Analytics", "Moz", "WordPress", "Excel"],
    isCurrent: false,
  },
  {
    period: "2010 – 2014",
    company: "GEC Bhavnagar",
    companyNote: "education",
    role: "Bachelor of Engineering",
    description:
      "Engineering degree that built the analytical thinking and data-driven mindset that underpins every digital marketing strategy I run today.",
    achievements: [
      "Analytical foundation enabling precise SEO audits and data-driven strategy",
      "Technical aptitude for deeply understanding SaaS products and enterprise software",
    ],
    tools: [],
    isCurrent: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 lg:py-40 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            12 years. One focus.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl">
            A decade of building organic growth engines for SaaS startups and enterprise tech brands — from AQe Group to AQe Digital.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-10 pb-14 last:pb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full ${
                    exp.isCurrent ? "bg-blue-500" : "bg-zinc-700"
                  }`}
                />

                {/* Period + Company */}
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="text-xs text-zinc-600 tabular-nums font-medium">{exp.period}</span>
                  <span className="text-sm font-semibold text-zinc-300">{exp.company}</span>
                  {exp.companyNote && (
                    <span className="text-xs text-zinc-600">· {exp.companyNote}</span>
                  )}
                  {exp.isCurrent && (
                    <span className="text-xs text-blue-400 border border-blue-400/20 rounded-full px-2 py-0.5">
                      Current
                    </span>
                  )}
                </div>

                {/* Role */}
                <h3 className="text-white font-bold text-lg mb-3">{exp.role}</h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-2xl">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="text-zinc-500 text-sm flex items-start gap-2">
                      <span className="text-zinc-700 mt-1.5 shrink-0">—</span>
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                {exp.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-zinc-600 border border-white/[0.06] rounded-full px-3 py-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
