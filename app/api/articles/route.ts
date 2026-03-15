import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }
  try {
    const articles = getAllArticles();
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json([]);
  }
}
