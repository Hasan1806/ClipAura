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

      <div className="overflow-hidden relative w-full py-4">
        {/* Ambient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="group/logo relative px-5 py-2.5 rounded-xl border border-transparent transition-all duration-300 cursor-pointer flex-shrink-0 select-none hover:border-[#DCD5FF] hover:bg-[#F0EDFF]/70 active:bg-[#F0EDFF] hover:shadow-[0_0_30px_rgba(107,83,255,0.35)] active:shadow-[0_0_40px_rgba(107,83,255,0.55)] hover:scale-105 active:scale-105"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans text-[#2B2A35]/35 group-hover/logo:text-[#6B53FF] group-active/logo:text-[#6B53FF] transition-all duration-300 group-hover/logo:drop-shadow-[0_0_20px_rgba(107,83,255,0.75)] group-active/logo:drop-shadow-[0_0_25px_rgba(107,83,255,0.9)] inline-block">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
