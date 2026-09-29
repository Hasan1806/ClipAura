"use client";

import { motion } from "framer-motion";
import {
  Search,
  Video,
  Lock,
  TrendingUp,
  FileCheck2,
  Users,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function FeatureBento() {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="toolkit" className="py-20 sm:py-28 bg-[#FAFAFC] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
            THE PLATFORM
          </span>
          <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
            A complete creator campaign toolkit.
          </h2>
        </div>

        {/* Bento Grid: Variable Sizes, Asymmetrical, Signature #6B53FF Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* 1. SIGNATURE PURPLE BENTO CARD: Creator Discovery (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: easeOutCubic }}
            className="md:col-span-7 bg-[#6B53FF] text-white rounded-[12px] p-6 sm:p-10 flex flex-col justify-between shadow-[0_16px_48px_rgba(107,83,255,0.22)] group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-[8px] bg-white/20 backdrop-blur-xs text-white flex items-center justify-center">
                  <Search size={20} />
                </div>
                <span className="text-xs font-bold text-white bg-white/15 px-3 py-1 rounded-[6px] backdrop-blur-xs">
                  25K+ Graph API Verified
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Multi-attribute creator discovery
              </h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                Filter creators across 40+ niche categories, engagement velocity, audience demographics, and location with zero fake follower risk.
              </p>

              {/* Inside mini white search/filter UI */}
              <div className="bg-white rounded-[10px] p-4 text-[#2B2A35] space-y-2.5 shadow-md">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#DDDDE5]">
                  <span className="font-semibold text-[#2B2A35]">Active Filter: Beauty • Mumbai</span>
                  <span className="text-[#6B53FF] font-bold">142 Matches</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[#6F7387]">Anaya Kapoor (182K • 6.8% ER)</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Shortlisted</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
              <span>First-party audience verification</span>
              <span className="font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore directory →
              </span>
            </div>
          </motion.div>

          {/* 2. Performance Analytics (5 cols, Charcoal Surface) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: easeOutCubic }}
            className="md:col-span-5 bg-[#2B2A35] text-white rounded-[12px] p-6 sm:p-10 flex flex-col justify-between shadow-[0_16px_48px_rgba(20,20,35,0.12)] group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-[8px] bg-white/10 text-[#8D49F7] flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <span className="text-xs font-bold text-[#8D49F7] bg-white/10 px-3 py-1 rounded-[6px]">
                  Real-time UTM
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-3">
                Live performance analytics
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-6">
                Attributed ROAS, impressions, click conversions, and real creator revenue telemetry synced with Shopify.
              </p>

              <div className="p-4 rounded-[8px] bg-black/30 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">Attributed ROAS</span>
                  <span className="font-bold text-[#8D49F7]">3.84x</span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B53FF] w-4/5 rounded-full" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/70">
              Direct Shopify & Google Analytics webhook sync
            </div>
          </motion.div>

          {/* 3. Content Review Studio (5 cols, Pure White Surface) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: easeOutCubic }}
            className="md:col-span-5 bg-white text-[#2B2A35] border border-[#DDDDE5] rounded-[12px] p-6 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(20,20,40,0.04)] group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-[8px] bg-[#F0EDFF] text-[#6B53FF] flex items-center justify-center">
                  <Video size={20} />
                </div>
                <span className="text-xs font-bold text-[#6B53FF] bg-[#F0EDFF] px-3 py-1 rounded-[6px]">
                  4K 60FPS
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-[#6B53FF] transition-colors">
                Timecoded frame review
              </h3>
              <p className="text-[#6F7387] text-sm leading-relaxed mb-6">
                Drop annotations directly on video frames to request cuts, adjust captions, or confirm brand safety.
              </p>

              <div className="p-3.5 bg-[#FAFAFC] rounded-[8px] border border-[#DDDDE5] text-xs space-y-1.5">
                <div className="flex justify-between font-semibold">
                  <span>Frame 00:34</span>
                  <span className="text-emerald-700">Change verified</span>
                </div>
                <div className="text-[#6F7387]">Logo placement aligned with guideline</div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDDDE5] text-xs text-[#6F7387]">
              Zero lost WhatsApp revision chats
            </div>
          </motion.div>

          {/* 4. Campaign Builder (7 cols, Soft Lavender Surface #F0EDFF) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.16, ease: easeOutCubic }}
            className="md:col-span-7 bg-[#F0EDFF] text-[#2B2A35] border border-[#DCD5FF] rounded-[12px] p-6 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(107,83,255,0.06)] group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-[8px] bg-white text-[#6B53FF] flex items-center justify-center shadow-xs">
                  <Layers size={20} />
                </div>
                <span className="text-xs font-bold text-[#4334B8] bg-white px-3 py-1 rounded-[6px] border border-[#DCD5FF]">
                  Multiplayer Canvas
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Structured campaign briefs & milestones
              </h3>
              <p className="text-[#6F7387] text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                Define visual moodboards, asset specifications, and submission dates with automated escrow locking on acceptance.
              </p>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-[6px] border border-[#DCD5FF]">
                  <span className="text-[#6F7387] block font-mono text-[10px]">ESCROW BUDGET</span>
                  <strong className="text-sm font-bold text-[#6B53FF]">₹4,50,000</strong>
                </div>
                <div className="p-3 bg-white rounded-[6px] border border-[#DCD5FF]">
                  <span className="text-[#6F7387] block font-mono text-[10px]">SLOTS</span>
                  <strong className="text-sm font-bold text-[#2B2A35]">8 Creators</strong>
                </div>
                <div className="p-3 bg-white rounded-[6px] border border-[#DCD5FF]">
                  <span className="text-[#6F7387] block font-mono text-[10px]">DELIVERABLES</span>
                  <strong className="text-sm font-bold text-[#2B2A35]">2x Reels</strong>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCD5FF] text-xs text-[#4334B8]">
              Automated contract generation & tax compliance
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
