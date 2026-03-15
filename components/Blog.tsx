"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    tag: "AI & SEO",
    title: "AI Is Reshaping SEO in 2025 — Here's What Enterprise Tech Brands Must Do",
    date: "Nov 2025",
    href: "/blog/ai-is-reshaping-seo-in-2025",
    isInternal: true,
  },
  {
    tag: "Thought Leadership",
    title: "Why Founder Visibility Is Your Best B2B Growth Strategy in 2025",
    date: "Oct 2025",
    href: "/blog/founder-visibility-strategy",
    isInternal: true,
  },
  {
    tag: "Content Marketing",
    title: "The SaaS Content Marketing Playbook That Actually Drives Revenue",
    date: "Sep 2025",
    href: "/blog/content-marketing-for-saas",
    isInternal: true,
  },
  {
    tag: "Enterprise SEO",
    title: "Enterprise Content Operations: Scaling Without Losing Quality or Consistency",
    date: "Aug 2025",
    href: "https://linkedin.com/in/sachindevmurari",
    isInternal: false,
  },
  {
    tag: "SaaS Growth",
    title: "Product-Led Content: The Strategy That Drives SaaS Trial Signups Through SEO",
    date: "Jul 2025",
    href: "https://linkedin.com/in/sachindevmurari",
    isInternal: false,
  },
  {
    tag: "AI Strategy",
    title: "Building AI-First Marketing Workflows: A Practical Guide for Growth Teams",
    date: "Jun 2025",
    href: "https://linkedin.com/in/sachindevmurari",
    isInternal: false,
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-32 lg:py-40 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">Writing</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Ideas &amp; insights.
          </h2>
        </motion.div>

        {/* Article list */}
        <div>
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={article.href}
                target={article.isInternal ? undefined : "_blank"}
                rel={article.isInternal ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between gap-6 py-5 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-xs text-zinc-600 shrink-0 w-28 hidden sm:block">{article.tag}</span>
                  <span className="text-white text-sm font-medium leading-snug group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-zinc-600 hidden md:block">{article.date}</span>
                  <span className="text-xs text-zinc-600 group-hover:text-blue-400 transition-colors">
                    Read →
                  </span>
                </div>
              </Link>
              {i < articles.length - 1 && (
                <div className="h-px bg-white/[0.06]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: articles.length * 0.08 }}
          className="mt-10"
        >
          <Link
            href="/blog"
            className="text-sm text-zinc-600 hover:text-blue-400 transition-colors duration-200"
          >
            View all articles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
