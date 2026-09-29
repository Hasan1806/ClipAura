"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface AudienceSectionProps {
  onOpenDemo?: () => void;
}

export default function AudienceSection({ onOpenDemo }: AudienceSectionProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const brandFeatures = [
    "Discover talent across 40+ niche categories",
    "Build campaigns with custom milestones",
    "Review timecoded content with frame annotations",
    "Track live ROAS and purchase telemetry",
    "Manage spend with automated escrow protection",
  ];

  const creatorFeatures = [
    "Discover verified briefs from fast-growing brands",
    "Apply with integrated rates & pitch moodboards",
    "Submit 4K drafts without messy drive links",
    "Get clear timestamped feedback & instant approvals",
    "Track earnings with guaranteed milestone payouts",
  ];

  return (
    <section id="audience" className="py-20 sm:py-28 bg-[#FAFAFC] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
            TWO SIDES. ONE PLATFORM.
          </span>
          <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
            Two sides.
            <br />
            One collaboration space.
          </h2>
        </div>

        {/* Two-Panel Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: FOR BRANDS (Dark Purple / Charcoal #211D4B) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easeOutCubic }}
            className="rounded-[14px] bg-[#211D4B] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-[0_20px_60px_rgba(33,29,75,0.18)]"
          >
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#8D49F7] mb-4 block">
                FOR BRANDS & AGENCIES
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                Find the right creator faster.
              </h3>
              <div className="space-y-4 mb-10">
                {brandFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-base text-white/85">
                    <CheckCircle2 size={18} className="text-[#8D49F7] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#6B53FF] hover:bg-[#5840EE] text-white font-semibold text-base h-13 px-8 rounded-[8px] transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-md"
              >
                <span>UGCFY for brands</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: FOR CREATORS (Soft Purple #F0EDFF) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutCubic }}
            className="rounded-[14px] bg-[#F0EDFF] text-[#2B2A35] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border border-[#DCD5FF] shadow-[0_16px_48px_rgba(107,83,255,0.08)]"
          >
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6B53FF] mb-4 block">
                FOR CREATORS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                Turn opportunities into momentum.
              </h3>
              <div className="space-y-4 mb-10">
                {creatorFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-base text-[#2B2A35]">
                    <CheckCircle2 size={18} className="text-[#6B53FF] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#2B2A35] hover:bg-black text-white font-semibold text-base h-13 px-8 rounded-[8px] transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-sm"
              >
                <span>UGCFY for creators</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
