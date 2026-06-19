import Image from "next/image";
import { about } from "@/lib/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="bg-radial-spot absolute inset-x-0 top-0 h-1/2" />
      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-glass-lg sm:aspect-[5/5]">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            {/* Floating accent badge */}
            <div className="glass-strong absolute -bottom-6 -right-2 hidden rounded-2xl px-6 py-5 shadow-glass sm:block">
              <p className="font-display text-3xl font-bold text-metal">
                <CountUp to={about.stats[0].value} suffix={about.stats[0].suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-silver-400">
                {about.stats[0].label}
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-silver-500" />
                {about.eyebrow}
              </span>
              <h2 className="mt-4 section-title text-balance text-white">{about.title}</h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-silver-300 sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
          {about.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.1 * i}
              className="bg-ink-850/60 px-8 py-10 text-center backdrop-blur"
            >
              <p className="font-display text-5xl font-bold text-metal sm:text-6xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-wider text-silver-400">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
