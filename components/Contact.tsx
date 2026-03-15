"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, ArrowRight, MessageSquare, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sachin@aqedigital.com",
    href: "mailto:sachin@aqedigital.com",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sachindevmurari",
    href: "https://linkedin.com/in/sachindevmurari",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    href: null,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const services = [
  "SEO Strategy & Audit",
  "Content Marketing Strategy",
  "AI-Powered Growth",
  "Digital PR Campaign",
  "SaaS Growth Consulting",
  "Enterprise Content Operations",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-purple-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
            <div className="h-px w-12 bg-blue-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Let&apos;s{" "}
            <span
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Work Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Ready to grow your brand&apos;s organic presence? Let&apos;s discuss your goals,
            challenges, and how I can help you achieve sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Availability banner */}
            <div className="p-5 rounded-2xl bg-green-500/8 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-gray-400 text-sm">
                Open to consulting engagements, fractional CMO roles, and strategic partnerships.
                Response time: within 24 hours.
              </p>
            </div>

            {/* Contact methods */}
            <div className="flex flex-col gap-3">
              {contactMethods.map((method, i) => (
                <div key={i}>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 p-4 rounded-xl ${method.bgColor} border ${method.border} hover:border-opacity-60 transition-all duration-200 hover:-translate-y-0.5 group`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.bgColor} border ${method.border} shrink-0`}>
                        <method.icon size={18} className={method.color} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-500 text-xs font-medium mb-0.5">{method.label}</p>
                        <p className={`${method.color} text-sm font-medium truncate`}>{method.value}</p>
                      </div>
                      <ArrowRight size={14} className="text-gray-600 ml-auto shrink-0 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-4 rounded-xl ${method.bgColor} border ${method.border}`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.bgColor} border ${method.border} shrink-0`}>
                        <method.icon size={18} className={method.color} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-medium mb-0.5">{method.label}</p>
                        <p className={`${method.color} text-sm font-medium`}>{method.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="p-5 rounded-2xl bg-white/3 border border-white/8">
              <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <MessageSquare size={15} className="text-blue-400" />
                What to expect
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Discovery call within 48 hours",
                  "Custom strategy proposal",
                  "Clear KPIs & timeline",
                  "Transparent reporting & communication",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <CheckCircle size={13} className="text-green-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-12 rounded-2xl bg-white/3 border border-green-500/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                  Thank you for reaching out, {formData.name || "there"}. I&apos;ll review your message and
                  get back to you within 24 hours to discuss how we can grow your brand together.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-3 rounded-xl border border-white/15 text-gray-400 hover:text-white hover:border-white/30 transition-colors text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-[#0d0d16] border border-white/8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Service I&apos;m Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0d0d16] text-gray-400">Select a service...</option>
                    {services.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#0d0d16]">{svc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your brand, current challenges, and growth goals. The more context you share, the better I can prepare for our conversation."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  I typically respond within 24 hours · No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
