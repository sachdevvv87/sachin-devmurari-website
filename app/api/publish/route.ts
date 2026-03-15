import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  try {
    const { message } = await req.json();
    const commitMsg = message || "Add new article";
    const cwd = process.cwd();

    execSync("git add content/articles/", { cwd });
    execSync(`git commit -m "${commitMsg}"`, { cwd });
    execSync("git push", { cwd });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    // Check for "nothing to commit" which isn't really an error
    if (message.includes("nothing to commit")) {
      return NextResponse.json({ success: true, note: "Nothing new to publish" });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
