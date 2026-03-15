import { NextRequest, NextResponse } from "next/server";

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export async function POST(req: NextRequest) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = process.env.GITHUB_OWNER;
  const GITHUB_REPO = process.env.GITHUB_REPO;

  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return NextResponse.json(
      { error: "GitHub credentials not configured. Set GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO in Vercel environment variables." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { title, date, excerpt, tags, readTime, content, customSlug } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const slug = customSlug?.trim() ? toSlug(customSlug) : toSlug(title);
    const tagsArray: string[] = tags
      ? tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : [];

    const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date || new Date().toISOString().split("T")[0]}"
excerpt: "${excerpt?.replace(/"/g, '\\"') || ""}"
tags: [${tagsArray.map((t) => `"${t}"`).join(", ")}]
readTime: "${readTime || "5 min read"}"
---

${content}`;

    const filePath = `content/articles/${slug}.mdx`;
    const encoded = Buffer.from(mdxContent).toString("base64");

    // Check if file already exists (to get its SHA for updates)
    let sha: string | undefined;
    const checkRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      { headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: "application/vnd.github+json" } }
    );
    if (checkRes.ok) {
      const existing = await checkRes.json();
      sha = existing.sha;
    }

    // Create or update the file
    const payload: Record<string, unknown> = {
      message: `Add article: ${title}`,
      content: encoded,
      committer: { name: "Sachin Devmurari", email: "sachin@sachindevmurari.com" },
    };
    if (sha) payload.sha = sha;

    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    return NextResponse.json({ success: true, slug });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
