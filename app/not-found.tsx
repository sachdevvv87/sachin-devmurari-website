import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center text-center px-4">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
          404 — Page Not Found
        </p>

        <h1 className="text-6xl sm:text-8xl font-black text-white mb-6">
          Oops.
        </h1>

        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Looks like this page got lost in the SERP void. Let&apos;s get you back to
          somewhere that ranks.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
