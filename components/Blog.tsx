"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowUpRight, Eye, ThumbsUp } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    tag: "AI & SEO",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "AI Is Reshaping SEO in 2025 — Here's What Enterprise Tech Brands Must Do",
    excerpt:
      "Search is no longer just about keywords. AI-driven search engines are rewarding authority, trust, and structured knowledge. Here's how enterprise tech brands should adapt.",
    readTime: "6 min read",
    date: "Nov 2025",
    views: "12.4K",
    likes: "348",
    gradient: "from-blue-500/10 to-purple-500/10",
    border: "border-blue-500/15",
    href: "/blog/ai-is-reshaping-seo-in-2025",
  },
  {
    tag: "Thought Leadership",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    title: "Why Founder Visibility Is Your Best B2B Growth Strategy in 2025",
    excerpt:
      "Buyers don't trust brands. They trust people. Here's how to build a founder visibility engine that consistently drives pipeline for your B2B SaaS.",
    readTime: "5 min read",
    date: "Oct 2025",
    views: "9.8K",
    likes: "291",
    gradient: "from-purple-500/10 to-cyan-500/10",
    border: "border-purple-500/15",
    href: "/blog/founder-visibility-strategy",
  },
  {
    tag: "Content Marketing",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "The SaaS Content Marketing Playbook That Actually Drives Revenue",
    excerpt:
      "Most SaaS content doesn't convert. Here's the framework I've used to build content engines that generate qualified pipeline — not just traffic.",
    readTime: "7 min read",
    date: "Sep 2025",
    views: "7.2K",
    likes: "215",
    gradient: "from-cyan-500/10 to-teal-500/10",
    border: "border-cyan-500/15",
    href: "/blog/content-marketing-for-saas",
  },
  {
    tag: "Enterprise SEO",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
    title: "Enterprise Content Operations: Scaling Without Losing Quality or Consistency",
    excerpt:
      "Managing content at enterprise scale requires systems, not just strategy. Here's how to build editorial governance frameworks that maintain quality as you scale to hundreds of pages.",
    readTime: "9 min read",
    date: "Aug 2025",
    views: "6.5K",
    likes: "187",
    gradient: "from-green-500/10 to-teal-500/10",
    border: "border-green-500/15",
    href: "https://linkedin.com/in/sachindevmurari",
  },
  {
    tag: "SaaS Growth",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "Product-Led Content: The Strategy That Drives SaaS Trial Signups Through SEO",
    excerpt:
      "Product-led content bridges the gap between awareness and activation. Learn how SaaS companies are using product-integrated blog content to convert readers into trial users.",
    readTime: "7 min read",
    date: "Jul 2025",
    views: "8.1K",
    likes: "264",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/15",
    href: "https://linkedin.com/in/sachindevmurari",
  },
  {
    tag: "AI Strategy",
    tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    title: "Building AI-First Marketing Workflows: A Practical Guide for Growth Teams",
    excerpt:
      "AI tools aren't just for content generation — they're transforming research, competitive analysis, personalization, and reporting. Here's how to build an AI-first marketing stack.",
    readTime: "11 min read",
    date: "Jun 2025",
    views: "10.3K",
    likes: "312",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-500/15",
    href: "https://linkedin.com/in/sachindevmurari",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-cyan-500" />
              <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Articles</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white"
            >
              Insights &{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Perspectives
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200 text-sm whitespace-nowrap"
            >
              View All Articles
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mb-12"
        >
          Sharing actionable insights on SEO, content strategy, AI, and digital marketing
          for SaaS and enterprise tech brands.
        </motion.p>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6 }}
            >
            <Link
              href={article.href}
              target={article.href.startsWith("http") ? "_blank" : undefined}
              rel={article.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br ${article.gradient} border ${article.border} hover:border-opacity-60 transition-all duration-300 cursor-pointer h-full`}
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${article.tagColor}`}>
                  {article.tag}
                </span>
                <span className="text-gray-600 text-xs">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-100 transition-colors line-clamp-3 flex-1">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <div className="flex items-center gap-1 text-gray-600 text-xs">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-600 text-xs">
                    <Eye size={12} />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs">
                    <ThumbsUp size={12} />
                    <span>{article.likes}</span>
                  </div>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-gray-400" />
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            Follow me on LinkedIn for weekly insights on SEO, content marketing, AI strategy,
            and digital growth for B2B tech brands.
          </p>
          <a
            href="https://linkedin.com/in/sachindevmurari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2] text-white font-medium hover:bg-[#0A66C2]/90 transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
