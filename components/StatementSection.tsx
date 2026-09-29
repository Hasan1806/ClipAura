"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center 50%"],
  });

  const words = [
    { text: "Less", isPurple: false },
    { text: "campaign", isPurple: false },
    { text: "chaos.", isPurple: false },
    { text: "More", isPurple: false },
    { text: "creative", isPurple: true },
    { text: "momentum.", isPurple: true },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#FAFAFC] text-[#2B2A35] border-b border-[#DDDDE5] flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-start">
        {/* Eyebrow */}
        <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-[#6B53FF] mb-8 block">
          THE PAYOFF
        </span>

        {/* Massive Editorial Headline */}
        <div className="statement-editorial-title max-w-5xl tracking-tight leading-[0.92] flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.25, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                word.isPurple
                  ? "text-[#6B53FF] font-extrabold"
                  : "text-[#2B2A35] font-bold"
              }
            >
              {word.text}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
