"use client";

import { motion } from "framer-motion";

export default function LogoStrip() {
  const logos = [
    "NOVA",
    "LUMA",
    "VERVE",
    "ARC",
    "FORM",
    "KITE",
    "PRISM",
    "VELO",
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] text-[#2B2A35] border-b border-[#DDDDE5] overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 text-center mb-8">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#6F7387]">
          Built for modern creator teams.
        </p>
      </div>

      <div className="overflow-hidden relative w-full py-2">
        <div className="animate-marquee flex items-center gap-16 sm:gap-24 whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans text-[#2B2A35]/35 hover:text-[#6B53FF] transition-colors duration-200 cursor-default flex-shrink-0 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
