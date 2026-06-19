"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { staggerContainer, staggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 border-t border-white/5 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Premium repairs, expertly delivered"
          description="From the smallest scratch to full accident damage and restoration, every service is carried out to a flawless, factory-quality standard."
        />

        <motion.ul
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <motion.li key={service.title} variants={staggerItem}>
              <a
                href="#contact"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-ink-800/70 hover:shadow-glass-lg"
              >
                {/* sheen on hover */}
                <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-silver-200/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="inline-grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-silver-200 transition-all duration-500 group-hover:scale-105 group-hover:border-white/25 group-hover:text-white">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  {service.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-medium uppercase tracking-wider text-silver-500 transition-colors group-hover:text-silver-200">
                  Get a quote
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
