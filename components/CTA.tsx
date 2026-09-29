"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CTAProps {
  onOpenDemo?: () => void;
}

export default function CTA({ onOpenDemo }: CTAProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      {/* 1. DARK PURPLE BRAND MOMENT (Full-Width #6B53FF) */}
      <section className="py-20 sm:py-28 bg-[#6B53FF] text-white overflow-hidden relative">
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#8D49F7]/40 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-center flex flex-col items-center">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80 mb-6 bg-white/10 px-3.5 py-1.5 rounded-[6px] backdrop-blur-xs">
            THE UGCFY PROMISE
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOutCubic }}
            className="statement-editorial-title max-w-5xl text-white tracking-tight mb-8"
          >
            One campaign.
            <br />
            Every conversation.
            <br />
            Every creator.
            <br />
            One place.
          </motion.h2>

          <p className="text-white/85 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Join thousands of fast-growing brands and creators moving away from scattered DMs, manual payment chasing, and spreadsheet chaos.
          </p>
        </div>
      </section>

      {/* 2. FINAL CTA SECTION (Near-Black #1E1D28) */}
      <section className="py-20 sm:py-28 bg-[#1E1D28] text-white border-t border-white/10 relative overflow-hidden">
        {/* Subtle purple ambient gradient */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#6B53FF]/20 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOutCubic }}
            className="section-editorial-title text-white tracking-tight max-w-4xl mb-6"
          >
            Great collaborations don&apos;t start in spreadsheets.
          </motion.h2>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            Discover creators, run campaigns and measure results with UGCFY.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#6B53FF] hover:bg-[#5840EE] text-white font-semibold text-base h-13 px-8 rounded-[8px] transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-[0_8px_28px_rgba(107,83,255,0.35)]"
            >
              <span>Start free</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center text-white/90 hover:text-white font-medium text-base h-13 px-8 rounded-[8px] border border-white/20 hover:border-white/40 transition-colors cursor-pointer"
            >
              Book a demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
