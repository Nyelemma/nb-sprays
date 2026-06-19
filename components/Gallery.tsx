"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/content";
import { staggerContainer, staggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  return (
    <section id="gallery" className="relative scroll-mt-20 border-t border-white/5 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Gallery"
          title="A showcase of our work"
          description="A selection of recent vehicle bodywork, paint and restoration projects. Tap any image to view it in full."
        />

        <motion.div
          className="mt-16 columns-2 gap-4 [column-fill:_balance] lg:columns-3 [&>*]:mb-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              variants={staggerItem}
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative block w-full overflow-hidden rounded-xl border border-white/10 ${
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center gap-2 text-xs font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Icon name="arrowUpRight" className="h-4 w-4" />
                View
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white/10 sm:left-6"
            >
              <Icon name="chevronRight" className="h-6 w-6 rotate-180" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white/10 sm:right-6"
            >
              <Icon name="chevronRight" className="h-6 w-6" />
            </button>

            <motion.div
              key={index}
              className="relative h-[78vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[index].src}
                alt={gallery[index].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-silver-400">
              {index + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
