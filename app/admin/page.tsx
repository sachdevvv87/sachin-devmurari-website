"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const SUGGESTED_TAGS = [
  "SEO", "Content Marketing", "AI", "Digital PR", "SaaS",
  "Enterprise", "Thought Leadership", "B2B", "Growth", "Strategy",
];

type Article = { slug: string; title: string; date: string; tags: string[] };
type Screen = "dashboard" | "write" | "success";

export default function AdminPage() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<"idle" | "ok" | "error">("idle");
  const [publishError, setPublishError] = useState("");
  const [savedSlug, setSavedSlug] = useState("");

  // Form state
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [excerpt, setExcerpt] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [content, setContent] = useState(
    "## Introduction\n\nStart writing your article here...\n\n## Main Point\n\nAdd your insights...\n\n## Conclusion\n\nWrap up with a key takeaway and a CTA to [connect on LinkedIn](https://linkedin.com/in/sachindevmurari)."
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fetchArticles = useCallback(async () => {
    try {
      const res = await fetch("/api/articles");
      if (res.ok) setArticles(await res.json());
    } catch {}
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  function addTag(tag: string) {
    const current = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    if (!current.includes(tag)) {
      setTagsInput(current.concat(tag).join(", "));
    }
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "Title is required";
    if (!excerpt.trim()) e.excerpt = "Excerpt is required (shown in article previews)";
    if (!content.trim() || content.length < 100) e.content = "Article content is too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSave() {
    if (!validate()) return;
    setLoading(true);
    try {
      const isProduction = window.location.hostname !== "localhost";
      const endpoint = isProduction ? "/api/github-publish" : "/api/save-article";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, excerpt, tags: tagsInput, readTime, content }),
      });
      const data = await res.json();
      if (data.success) {
        setSavedSlug(data.slug);
        if (isProduction) {
          // GitHub commit triggers Vercel redeploy automatically
          setPublishStatus("ok");
        }
        setScreen("success");
        fetchArticles();
      } else {
        alert("Error saving: " + (data.error || "Unknown error"));
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePublish() {
    setPublishing(true);
    setPublishStatus("idle");
    try {
      const res = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `Add article: ${title || savedSlug}` }),
      });
      const data = await res.json();
      if (data.success) {
        setPublishStatus("ok");
      } else {
        setPublishStatus("error");
        setPublishError(data.error || "Unknown error");
      }
    } catch {
      setPublishStatus("error");
      setPublishError("Could not connect to server.");
    } finally {
      setPublishing(false);
    }
  }

  function resetForm() {
    setTitle(""); setDate(new Date().toISOString().split("T")[0]);
    setExcerpt(""); setTagsInput(""); setReadTime("5 min read");
    setContent("## Introduction\n\nStart writing here...");
    setErrors({}); setSavedSlug(""); setPublishStatus("idle");
    setScreen("write");
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  if (screen === "dashboard") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold">Article Manager</h1>
              <p className="text-gray-400 mt-1">Write and publish articles to your website</p>
            </div>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              ← Back to site
            </Link>
          </div>

          {/* Write new button */}
          <button
            onClick={() => setScreen("write")}
            className="w-full py-5 rounded-2xl border-2 border-dashed border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/5 transition-all duration-200 text-blue-400 font-medium text-lg mb-8 flex items-center justify-center gap-3"
          >
            <span className="text-2xl">+</span> Write a New Article
          </button>

          {/* Existing articles */}
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Your Articles ({articles.length})
          </h2>
          <div className="flex flex-col gap-3">
            {articles.length === 0 && (
              <p className="text-gray-600 text-sm py-8 text-center">No articles yet. Write your first one!</p>
            )}
            {articles.map((a) => (
              <div key={a.slug} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div>
                  <p className="font-medium text-white">{a.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    {a.tags.length > 0 && ` · ${a.tags.slice(0, 2).join(", ")}`}
                  </p>
                </div>
                <a
                  href={`/blog/${a.slug}`}
                  target="_blank"
                  className="text-xs text-blue-400 hover:underline ml-4 shrink-0"
                >
                  View →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Success screen ──────────────────────────────────────────────────────────
  if (screen === "success") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold mb-3">
            {publishStatus === "ok" ? "Article Published! 🎉" : "Article Saved!"}
          </h1>
          <p className="text-gray-400 mb-8">
            {publishStatus === "ok"
              ? "Your article has been published to your website. It will be live in about 60 seconds."
              : "Your article has been saved. Now publish it to make it live on your website."}
          </p>

          {/* Preview link */}
          <a
            href={`/blog/${savedSlug}`}
            target="_blank"
            className="inline-block mb-6 text-blue-400 hover:underline text-sm"
          >
            View article → /blog/{savedSlug}
          </a>

          {/* Publish button — only show on localhost */}
          {publishStatus !== "ok" && (
            <button
              onClick={handlePublish}
              disabled={publishing}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-wait font-semibold text-lg transition-colors mb-4"
            >
              {publishing ? "Publishing… (this takes ~60 seconds)" : "🚀 Publish to Website"}
            </button>
          )}

          {publishStatus === "ok" && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 mb-6">
              <p className="font-semibold text-lg">🎉 Published!</p>
              <p className="text-sm mt-1">Your article is live. Your website will update in about 60 seconds.</p>
            </div>
          )}

          {publishStatus === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 text-left">
              <p className="font-semibold">Publishing failed</p>
              <p className="text-xs mt-1 font-mono break-all">{publishError}</p>
              <p className="text-xs mt-2 text-gray-400">
                Make sure your project is connected to GitHub and you have push access.
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={resetForm}
              className="flex-1 py-3 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-colors"
            >
              Write Another
            </button>
            <button
              onClick={() => setScreen("dashboard")}
              className="flex-1 py-3 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-colors"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Write screen ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setScreen("dashboard")}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Dashboard
          </button>
          <span className="text-gray-700">|</span>
          <span className="text-gray-400 text-sm">New Article</span>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-wait font-medium transition-colors text-sm"
        >
          {loading ? "Saving…" : "Save Article →"}
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Title */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Article title…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full bg-transparent text-3xl font-bold placeholder-gray-700 outline-none border-b pb-3 transition-colors ${
              errors.title ? "border-red-500" : "border-white/10 focus:border-blue-500/50"
            }`}
          />
          {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">Read Time</label>
            <input
              type="text"
              placeholder="e.g. 5 min read"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="mb-6">
          <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
            Short Summary <span className="normal-case text-gray-600">(shown in article previews — 1-2 sentences)</span>
          </label>
          <textarea
            placeholder="A brief, compelling summary of what this article is about…"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none ${
              errors.excerpt ? "border-red-500" : "border-white/10 focus:border-blue-500/50"
            }`}
          />
          {errors.excerpt && <p className="text-red-400 text-sm mt-1">{errors.excerpt}</p>}
        </div>

        {/* Tags */}
        <div className="mb-8">
          <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
            Tags <span className="normal-case text-gray-600">(separate with commas)</span>
          </label>
          <input
            type="text"
            placeholder="SEO, Content Marketing, AI…"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors mb-2"
          />
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => addTag(tag)}
                type="button"
                className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
              >
                + {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Content editor */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wider mb-3 block">
            Article Content <span className="normal-case text-gray-600">(use the toolbar to format)</span>
          </label>
          {errors.content && <p className="text-red-400 text-sm mb-2">{errors.content}</p>}
          <div data-color-mode="dark" className="rounded-xl overflow-hidden border border-white/10">
            <MDEditor
              value={content}
              onChange={(val) => setContent(val || "")}
              height={520}
              preview="live"
              visibleDragbar={false}
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Tip: Use <code className="bg-white/5 px-1 rounded">##</code> for headings, <code className="bg-white/5 px-1 rounded">**bold**</code>, <code className="bg-white/5 px-1 rounded">- item</code> for lists. The right panel shows the live preview.
          </p>
        </div>

        {/* Bottom save */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-wait font-semibold text-lg transition-colors"
          >
            {loading ? "Saving…" : "Save Article →"}
          </button>
        </div>
      </div>
    </div>
  );
}
