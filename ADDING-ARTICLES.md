# How to Add New Articles

Publishing a new article on your website takes **less than 2 minutes**.

---

## Step 1: Create a New File

Go to the folder:
```
content/articles/
```

Create a new file with a `.mdx` extension. The filename becomes the URL of the article.

**Naming rules:**
- Use lowercase letters and hyphens only
- No spaces or special characters
- Make it descriptive and SEO-friendly

**Examples:**
```
content/articles/why-ai-matters-for-seo.mdx
content/articles/enterprise-content-strategy-2026.mdx
content/articles/digital-pr-guide-for-saas.mdx
```

---

## Step 2: Add the Frontmatter

At the very top of your `.mdx` file, add the metadata block between `---` markers:

```mdx
---
title: "Your Article Title Here"
date: "2026-03-15"
excerpt: "A 1-2 sentence summary of the article that appears in previews and search results."
tags: ["SEO", "Content Marketing", "AI"]
coverImage: "/images/blog/your-image.jpg"
readTime: "5 min read"
---
```

### Field Guide

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Full article title |
| `date` | Yes | Publication date (YYYY-MM-DD format) |
| `excerpt` | Yes | Short summary shown in card previews |
| `tags` | Yes | 1–4 topic tags |
| `coverImage` | No | Path to cover image (optional) |
| `readTime` | No | Estimated read time |

---

## Step 3: Write the Article

Below the closing `---`, write your article in **Markdown**. Everything you know from LinkedIn articles applies here.

```mdx
---
title: "Your Title"
date: "2026-03-15"
excerpt: "Your excerpt."
tags: ["Tag1", "Tag2"]
readTime: "5 min read"
---

## Introduction

Your intro paragraph here...

## Section Heading

More content...

### Sub-section

- Bullet point 1
- Bullet point 2

**Bold text** and *italic text* work normally.

[Link text](https://example.com)
```

---

## Step 4: Deploy

Once you've saved the file:

1. Push the changes to GitHub:
   ```bash
   git add content/articles/your-new-article.mdx
   git commit -m "Add article: Your Article Title"
   git push
   ```

2. Vercel will **automatically redeploy** the site within ~60 seconds.

3. Your article will be live at:
   ```
   https://yourdomain.com/blog/your-filename-without-extension
   ```

That's it. No CMS login, no dashboard, no publishing button.

---

## Article Formatting Reference

### Headings
```md
## Section (H2)
### Sub-section (H3)
```

### Lists
```md
- Bullet item
- Another item

1. Numbered item
2. Another item
```

### Bold & Italic
```md
**Bold text**
*Italic text*
```

### Links
```md
[LinkedIn](https://linkedin.com/in/sachindevmurari)
```

### Blockquote (pull quote)
```md
> This is a highlighted quote or key insight.
```

### Horizontal Rule (section separator)
```md
---
```

---

## Tips for Great Articles

1. **Start with the problem** — readers should feel understood in the first 2 sentences
2. **Use short paragraphs** — 2–3 sentences max, especially on mobile
3. **Include at least one numbered or bulleted list** — it improves scannability
4. **End with a CTA** — link to your LinkedIn, contact page, or a related article
5. **Keep tags consistent** — use existing tags where possible for better filtering

---

## Existing Article Tags

To keep your tag cloud clean, reuse these where applicable:
- `SEO`
- `Content Marketing`
- `AI`
- `Digital PR`
- `SaaS`
- `Enterprise`
- `Thought Leadership`
- `B2B`
- `Growth`
- `Strategy`

---

*Questions? Open an issue or reach out to your developer.*
