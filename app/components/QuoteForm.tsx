"use client";

import { useState } from "react";

const GOLD = "#CA8A04";

export default function QuoteForm({ light = false }: { light?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setSubmitted(true);
      } else {
        setError("שליחת הבקשה נכשלה. נסו שוב, או פנו אלינו ב-WhatsApp.");
      }
    } catch {
      setError("שגיאת רשת. נסו שוב, או פנו אלינו ב-WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div
          className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
          style={{ border: `2px solid ${GOLD}`, color: GOLD }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-2xl font-black mb-3 ${light ? "text-[#0C0A09]" : "text-white"}`}>הבקשה נשלחה!</h3>
        <p className={`text-lg font-semibold ${light ? "text-stone-600" : "text-stone-400"}`}>
          ניצור איתך קשר תוך 24 שעות עם הצעת מחיר מותאמת.
        </p>
      </div>
    );
  }

  const inputClass = light
    ? "w-full px-4 py-3 bg-[#FAFAF7] border border-stone-300 text-[#0C0A09] placeholder-stone-400 focus:outline-none focus:border-amber-500 transition-colors duration-200 text-base font-semibold"
    : "w-full px-4 py-3 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors duration-200 text-base";

  const labelClass = light
    ? "block text-sm font-black text-[#0C0A09] mb-2"
    : "block text-sm font-semibold text-stone-300 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>שם מלא</label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            className={inputClass} placeholder="ישראל ישראלי"
            style={{ borderRadius: 0 }}
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>שם העסק</label>
          <input
            id="business" name="business" type="text" required
            value={form.business} onChange={handleChange}
            className={inputClass} placeholder="שם העסק שלך"
            style={{ borderRadius: 0 }}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>טלפון</label>
          <input
            id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange}
            className={inputClass} placeholder="050-000-0000"
            style={{ borderRadius: 0 }}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>אימייל</label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            className={inputClass} placeholder="your@email.com"
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="quantity" className={labelClass}>כמות משוערת</label>
        <input
          id="quantity" name="quantity" type="text"
          value={form.quantity} onChange={handleChange}
          className={inputClass} placeholder="לדוגמה: 500 יח׳"
          style={{ borderRadius: 0 }}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>הודעה חופשית</label>
        <textarea
          id="message" name="message" rows={4}
          value={form.message} onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="ספרו לנו על הצורך שלכם..."
          style={{ borderRadius: 0 }}
        />
      </div>
      {error && (
        <p className="text-sm font-bold text-red-600 text-center" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="w-full py-4 text-white font-black text-lg transition-all duration-200 cursor-pointer hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: GOLD, borderRadius: 0 }}
      >
        {sending ? "שולח..." : "שלחו בקשה להצעת מחיר"}
      </button>
    </form>
  );
}
