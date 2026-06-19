"use client";

import { useState } from "react";
import { business } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3.5 text-sm text-white placeholder:text-silver-600 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20";

  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-white/5 py-24 sm:py-32">
      <div className="bg-radial-spot absolute inset-x-0 top-0 h-1/2" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Get a quote today"
          description="Tell us about your vehicle and the repair you need. Call, message us on WhatsApp, or send an enquiry below — we'll get back to you fast."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact options */}
          <Reveal className="flex flex-col gap-4">
            <a
              href={business.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center py-5 text-base shadow-glass-lg"
            >
              <Icon name="whatsapp" className="h-6 w-6" />
              Message Us on WhatsApp
            </a>

            <a
              href={business.phoneHref}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-850/50 p-5 transition-all hover:border-white/25 hover:bg-ink-800/60"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-silver-200 transition-colors group-hover:text-white">
                <Icon name="phone" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-silver-500">
                  Call us directly
                </span>
                <span className="block text-lg font-semibold text-white">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-850/50 p-5 transition-all hover:border-white/25 hover:bg-ink-800/60"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-silver-200 transition-colors group-hover:text-white">
                <Icon name="instagram" className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-silver-500">
                  See our latest work
                </span>
                <span className="block text-lg font-semibold text-white">
                  @{business.instagramHandle}
                </span>
              </span>
            </a>

            <p className="mt-2 flex items-center gap-2 text-sm text-silver-500">
              <Icon name="pin" className="h-4 w-4" />
              Serving {business.region}
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-strong flex flex-col gap-4 rounded-2xl p-6 shadow-glass sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-silver-500">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-wider text-silver-500">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your number"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-silver-500">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your vehicle and the repair you need..."
                  className={`${field} resize-none`}
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Enquiry
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-silver-600">
                Prefer to talk? Call {business.phoneDisplay} or message us on WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
