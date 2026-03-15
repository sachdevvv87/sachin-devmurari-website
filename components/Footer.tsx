"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          &copy; 2025 Sachin Devmurari
        </p>
        <a
          href="https://linkedin.com/in/sachindevmurari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-600 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
