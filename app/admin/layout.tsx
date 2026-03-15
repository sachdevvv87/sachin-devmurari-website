"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "sachin2025"; // Change this to whatever you want

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "1") {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (!checked) return null;

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔒</div>
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-gray-400 text-sm mt-2">Enter your password to continue</p>
          </div>
          <input
            type="password"
            autoFocus
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors mb-4 ${
              error ? "border-red-500" : "border-white/10 focus:border-blue-500/50"
            }`}
          />
          {error && <p className="text-red-400 text-sm text-center mb-4">Incorrect password</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
