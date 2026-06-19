"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { beforeAfter } from "@/lib/content";
import CompareSlider from "./CompareSlider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const project = beforeAfter[active];

  return (
    <section
      id="before-after"
      className="relative scroll-mt-20 border-t border-white/5 bg-ink-900 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Before & After"
          title="See the transformation"
          description="Drag the slider to reveal the difference our work makes. Real repairs, real results."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Project tabs */}
          <Reveal className="mb-7 flex flex-wrap justify-center gap-2.5">
            {beforeAfter.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  i === active
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.02] text-silver-400 hover:border-white/20 hover:text-silver-200"
                }`}
              >
                {p.title}
              </button>
            ))}
          </Reveal>

          <Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <CompareSlider project={project} />
              </motion.div>
            </AnimatePresence>
            <p className="mt-5 text-center text-sm text-silver-500">
              {project.title} &middot; Drag the handle or use arrow keys to compare
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
