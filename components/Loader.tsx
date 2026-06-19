"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 200 : 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          aria-hidden="true"
        >
          <div className="bg-radial-spot absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <div className="overflow-hidden">
              <motion.span
                className="block bg-silver-sheen bg-clip-text font-display text-3xl font-bold uppercase tracking-widest2 text-transparent sm:text-4xl"
                style={{ backgroundSize: "200% auto" }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                NB Sprays
              </motion.span>
            </div>
            <motion.p
              className="mt-3 text-[0.7rem] uppercase tracking-widest2 text-silver-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Vehicle Bodywork Specialists
            </motion.p>

            <div className="mx-auto mt-7 h-px w-44 overflow-hidden rounded bg-white/10">
              <motion.div
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-silver-200 to-transparent"
                initial={{ x: "-120%" }}
                animate={{ x: "360%" }}
                transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
