import { getAllArticles } from "@/lib/articles";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Insights | Sachin Devmurari",
  description:
    "Thoughts on SEO, content marketing, AI-powered growth, and digital strategy for SaaS and enterprise tech brands.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Articles &amp;{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Insights
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Thoughts on SEO, content marketing, AI strategy, and how SaaS &amp;
          enterprise tech brands can grow their traffic and authority.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-4xl mx-auto px-6">
        {articles.length === 0 ? (
          <p className="text-gray-500 text-center py-20">
            No articles yet. Check back soon.
          </p>
        ) : (
          <div className="flex flex-col gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ArticleCard({
  article,
}: {
  article: ReturnType<typeof getAllArticles>[0];
}) {
  const formatted = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/40 transition-all duration-300">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-400 leading-relaxed mb-5">{article.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span>{formatted}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <span className="text-blue-400 group-hover:translate-x-1 transition-transform inline-block">
            Read →
          </span>
        </div>
      </article>
    </Link>
  );
}
