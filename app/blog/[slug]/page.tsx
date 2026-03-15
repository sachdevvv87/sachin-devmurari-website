import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = getArticle(slug);
    return {
      title: `${article.title} | Sachin Devmurari`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        type: "article",
        publishedTime: article.date,
        authors: ["Sachin Devmurari"],
        tags: article.tags,
      },
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = getArticle(slug);
  } catch {
    notFound();
  }

  const formatted = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors mb-10"
        >
          ← All Articles
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
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
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-12 pb-8 border-b border-white/10">
          <span>Sachin Devmurari</span>
          <span>·</span>
          <span>{formatted}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        {/* MDX Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-white
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-li:text-gray-300
          prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-400
          prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
          prose-hr:border-white/10">
          <MDXRemote source={article.content} />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">
            Found this useful? Let&apos;s connect.
          </p>
          <a
            href="https://linkedin.com/in/sachindevmurari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </main>
  );
}
