"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { BeforeAfter } from "@/lib/content";
import { Icon } from "./Icons";

export default function CompareSlider({ project }: { project: BeforeAfter }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-white/10 shadow-glass-lg sm:aspect-[16/10]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (full, underneath) */}
      <Image
        src={project.after}
        alt={project.afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
      <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-silver-200 backdrop-blur">
        After
      </span>

      {/* Before (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={project.before}
          alt={project.beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-silver-200 backdrop-blur">
          Before
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          role="slider"
          aria-label={`Reveal before and after for ${project.title}`}
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-white/40 bg-ink-900/80 text-white backdrop-blur transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-silver-200"
        >
          <Icon name="drag" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
