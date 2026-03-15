"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 lg:py-40 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 justify-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">Contact</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Let&apos;s build something.
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Ready to grow your brand&apos;s organic presence? Reach out and let&apos;s discuss
                how I can help you achieve sustainable growth.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://linkedin.com/in/sachindevmurari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">
                  linkedin.com/in/sachindevmurari
                </span>
              </a>
              <a
                href="mailto:sachin@aqedigital.com"
                className="flex items-center gap-3 group"
              >
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">
                  sachin@aqedigital.com
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {submitted ? (
              <div className="bg-[#0f0f0f] border border-white/[0.08] rounded-2xl p-8 flex flex-col items-start gap-4">
                <div className="text-white font-bold text-xl">Message received.</div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-zinc-600 hover:text-white transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0f0f0f] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-5"
              >
                <div>
                  <label className="block text-xs text-zinc-600 uppercase tracking-[0.15em] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-600 uppercase tracking-[0.15em] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-600 uppercase tracking-[0.15em] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your brand and goals."
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black font-semibold rounded-xl px-6 py-3 hover:bg-zinc-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-zinc-700 text-xs text-center">
                  Typically respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
