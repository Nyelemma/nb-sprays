"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/content";
import { Icon } from "./Icons";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={business.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[80] flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-[14px] pr-[14px] text-[#0a0a0b] shadow-glass-lg sm:bottom-7 sm:right-7"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="relative grid h-[52px] w-[24px] place-items-center">
        <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </span>
      <span className="max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:pl-2.5 group-hover:opacity-100">
        Message Us
      </span>
    </motion.a>
  );
}
