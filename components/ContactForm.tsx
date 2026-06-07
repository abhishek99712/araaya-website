"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#0a0a0a] p-10 flex flex-col items-center justify-center gap-4 min-h-[400px]">
        <div className="w-12 h-12 rounded-full border border-[#0a0a0a] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10l4 4 8-8"
              stroke="#0a0a0a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-center">
          Message Received
        </p>
        <p className="text-[16px] text-black text-center max-w-xs leading-relaxed">
          Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "form-input w-full border border-[#d1d1d1] px-5 py-3.5 text-[12px] tracking-wide placeholder:text-[#aaa] focus:border-[#0a0a0a] transition-colors duration-200 rounded-none bg-white font-sans";

  return (
    <form onSubmit={handleSubmit} className="border border-[#e0ddd8] p-6 md:p-8 space-y-3 bg-white">
      <input
        type="text"
        name="name"
        placeholder="FULL NAME"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="PHONE NUMBER"
        required
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="text"
        name="subject"
        placeholder="SUBJECT"
        required
        value={form.subject}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="MESSAGE"
        required
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />
      {error && (
        <p className="text-[11px] text-red-600 tracking-wide">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full border border-[#0a0a0a] bg-[#0a0a0a] text-white text-[10px] font-semibold tracking-[0.18em] uppercase py-4 hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "SENDING..." : "SUBMIT NOW"}
      </button>
    </form>
  );
}
