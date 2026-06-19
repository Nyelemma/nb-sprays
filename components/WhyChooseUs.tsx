"use client";

import { motion } from "framer-motion";
import { business, reasons } from "@/lib/content";
import { staggerContainer, staggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="relative scroll-mt-20 border-t border-white/5 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={`Why Choose ${business.name}`}
          title="The difference is in the detail"
          description="A trusted local specialist combining genuine craftsmanship with honest, reliable service."
        />

        <motion.ul
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reasons.map((reason) => (
            <motion.li
              key={reason.title}
              variants={staggerItem}
              className="group relative flex gap-5 rounded-2xl border border-white/10 bg-ink-850/40 p-7 transition-all duration-500 hover:border-white/25 hover:bg-ink-800/60"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-silver-sheen text-ink-900 shadow-silver-glow transition-transform duration-500 group-hover:scale-105">
                <Icon name={reason.icon} className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">
                  {reason.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
