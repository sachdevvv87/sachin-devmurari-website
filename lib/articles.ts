import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

// Only surface a cover image if the file actually exists in /public.
// Some articles declare a coverImage that was never uploaded — returning ""
// lets the templates skip it rather than render a broken image.
function resolveCoverImage(cover: unknown): string {
  if (typeof cover !== "string" || !cover.startsWith("/")) return "";
  return fs.existsSync(path.join(process.cwd(), "public", cover)) ? cover : "";
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  readTime: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getAllArticleSlugs();
  const articles = slugs.map((slug) => getArticleMeta(slug));
  // Sort by date descending
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleMeta(slug: string): ArticleMeta {
  const filePath = resolveFilePath(slug);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    coverImage: resolveCoverImage(data.coverImage),
    readTime: data.readTime ?? "5 min read",
  };
}

export function getArticle(slug: string): Article {
  const filePath = resolveFilePath(slug);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    coverImage: resolveCoverImage(data.coverImage),
    readTime: data.readTime ?? "5 min read",
    content,
  };
}

function resolveFilePath(slug: string): string {
  const mdx = path.join(articlesDir, `${slug}.mdx`);
  const md = path.join(articlesDir, `${slug}.md`);
  if (fs.existsSync(mdx)) return mdx;
  if (fs.existsSync(md)) return md;
  throw new Error(`Article not found: ${slug}`);
}
