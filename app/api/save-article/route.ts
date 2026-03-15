import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
  // Only allow in development
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
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

    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date || new Date().toISOString().split("T")[0]}"
excerpt: "${excerpt?.replace(/"/g, '\\"') || ""}"
tags: [${tagsArray.map((t) => `"${t}"`).join(", ")}]
readTime: "${readTime || "5 min read"}"
---

${content}`;

    const articlesDir = path.join(process.cwd(), "content", "articles");
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

    const filePath = path.join(articlesDir, `${slug}.mdx`);
    fs.writeFileSync(filePath, frontmatter, "utf-8");

    return NextResponse.json({ success: true, slug, filePath });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
