"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { business, nav } from "@/lib/content";
import { Icon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="NB Sprays home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/[0.04] font-display text-sm font-bold text-metal">
            NB
          </span>
          <span className="font-display text-lg font-bold uppercase tracking-wider text-white">
            Sprays
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-silver-300 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-silver-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="hidden items-center gap-2 text-sm font-medium text-silver-200 transition-colors hover:text-white md:flex">
            <Icon name="phone" className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <a href="#contact" className="btn btn-primary hidden h-10 px-5 py-0 text-xs sm:inline-flex">
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/[0.04] text-white lg:hidden"
            aria-label="Open menu"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-1 border-l border-white/10 bg-ink-850 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-bold uppercase tracking-wider text-metal">
                  NB Sprays
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white"
                  aria-label="Close menu"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>

              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/5 py-4 text-lg font-medium text-silver-100"
                >
                  {item.label}
                  <Icon name="chevronRight" className="h-5 w-5 text-silver-500" />
                </a>
              ))}

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  Get a Quote
                </a>
                <a href={business.whatsappMessage} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
                  <Icon name="whatsapp" className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <a href={business.phoneHref} className="btn btn-ghost w-full">
                  <Icon name="phone" className="h-4 w-4" />
                  {business.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
