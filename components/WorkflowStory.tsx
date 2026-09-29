"use client";

import { motion } from "framer-motion";
import {
  Search,
  CheckCircle2,
  Video,
  Play,
  BarChart2,
  ArrowRight,
  Sparkles,
  Layers,
  Check,
  TrendingUp,
} from "lucide-react";

interface WorkflowStoryProps {
  onOpenDemo?: () => void;
}

export default function WorkflowStory({ onOpenDemo }: WorkflowStoryProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="workflow" className="relative">
      {/* SECTION HEADER */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#FAFAFC] text-[#2B2A35] border-b border-[#DDDDE5]">
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
            HOW IT WORKS
          </span>
          <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
            From creator search to campaign results.
          </h2>
        </div>
      </div>

      {/* CHAPTER 01: DISCOVER — PALE PURPLE #F0EDFF */}
      <div className="py-20 sm:py-28 bg-[#F0EDFF] text-[#2B2A35] border-b border-[#DCD5FF]">
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easeOutCubic }}
            className="lg:col-span-5"
          >
            <span className="text-6xl sm:text-7xl font-mono font-extrabold text-[#6B53FF]/30 block mb-2">
              01
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4334B8] mb-3 block">
              DISCOVER
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B2A35] mb-6">
              Find creators who actually fit.
            </h3>
            <p className="text-[#6F7387] text-base sm:text-lg leading-relaxed mb-8">
              Search by niche, location, audience demographics, followers, average views and engagement velocity with zero fake follower risk.
            </p>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B53FF] hover:text-[#4334B8] transition-colors cursor-pointer group"
            >
              <span>Explore creator search engine</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOutCubic }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[14px] border border-[#DCD5FF] shadow-[0_16px_48px_rgba(107,83,255,0.1)] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#DDDDE5]">
                <div className="flex items-center gap-2">
                  <Search size={16} className="text-[#6B53FF]" />
                  <span className="text-sm font-bold text-[#2B2A35]">
                    Creator Roster (Mumbai • ER &gt; 6%)
                  </span>
                </div>
                <span className="text-xs font-bold text-[#6B53FF] bg-[#F0EDFF] px-2.5 py-1 rounded-[6px]">
                  Graph API Verified
                </span>
              </div>

              <div className="space-y-3 pt-4">
                <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-[6px] bg-cover bg-center border border-[#DDDDE5]"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80')`,
                      }}
                    />
                    <div>
                      <div className="font-bold text-sm text-[#2B2A35] flex items-center gap-1">
                        Anaya Kapoor
                        <CheckCircle2 size={14} className="text-[#6B53FF]" />
                      </div>
                      <div className="text-xs text-[#6F7387]">Fashion • 182K • 6.8% ER</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-[6px] bg-[#F0EDFF] text-[#4334B8] border border-[#DCD5FF]">
                    98% Brief Fit
                  </span>
                </div>

                <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-[6px] bg-cover bg-center border border-[#DDDDE5]"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80')`,
                      }}
                    />
                    <div>
                      <div className="font-bold text-sm text-[#2B2A35] flex items-center gap-1">
                        Rohan Malik
                        <CheckCircle2 size={14} className="text-[#6B53FF]" />
                      </div>
                      <div className="text-xs text-[#6F7387]">Gaming & Tech • 214K • 7.3% ER</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-[6px] bg-[#F0EDFF] text-[#4334B8] border border-[#DCD5FF]">
                    95% Brief Fit
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CHAPTER 02: COLLABORATE — DARK CHARCOAL #1E1D28 */}
      <div className="py-20 sm:py-28 bg-[#1E1D28] text-white border-b border-[#2B2A35] relative overflow-hidden">
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#6B53FF]/25 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easeOutCubic }}
            className="lg:col-span-5"
          >
            <span className="text-6xl sm:text-7xl font-mono font-extrabold text-[#6B53FF]/50 block mb-2">
              02
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#8D49F7] mb-3 block">
              COLLABORATE
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Move campaigns forward without losing context.
            </h3>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              Annotate timecoded video frames, exchange notes with creators, and lock approved cuts in one continuous workspace.
            </p>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8D49F7] hover:text-white transition-colors cursor-pointer group"
            >
              <span>See video review studio</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOutCubic }}
            className="lg:col-span-7"
          >
            <div className="bg-[#2B2A35] rounded-[14px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Video size={16} className="text-[#8D49F7]" />
                  <span className="text-sm font-bold text-white">
                    Video Review Studio • 1080x1920
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-[6px] border border-emerald-500/20">
                  v2.0 Approved
                </span>
              </div>

              <div className="relative rounded-[8px] overflow-hidden bg-black/50 aspect-video my-4 p-4 flex flex-col justify-between border border-white/10">
                <div className="flex items-center justify-between text-xs text-white">
                  <span className="bg-black/80 px-2.5 py-1 rounded text-[11px]">Cut_v2_Anaya.mp4</span>
                  <span className="bg-[#6B53FF] text-white px-2 py-0.5 rounded font-bold text-[10px]">
                    HD 60FPS
                  </span>
                </div>

                <div className="self-center w-11 h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <Play size={18} className="fill-white translate-x-0.5 text-white" />
                </div>

                <div>
                  <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-1">
                    <div className="h-full bg-[#6B53FF] w-3/5 rounded-full" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-3 h-3 rounded-full bg-white border-2 border-[#6B53FF]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>00:34 (Logo placement pin)</span>
                    <span>00:60</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-black/40 rounded-[6px] border border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/80">Brand Lead: Color grade & hook verified</span>
                <span className="text-[#8D49F7] font-semibold">Sign-off Complete</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CHAPTER 03: MEASURE — PURE WHITE #FFFFFF */}
      <div className="py-20 sm:py-28 bg-[#FFFFFF] text-[#2B2A35] border-b border-[#DDDDE5]">
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easeOutCubic }}
            className="lg:col-span-5"
          >
            <span className="text-6xl sm:text-7xl font-mono font-extrabold text-[#6B53FF]/30 block mb-2">
              03
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6B53FF] mb-3 block">
              MEASURE
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B2A35] mb-6">
              Know what is actually working.
            </h3>
            <p className="text-[#6F7387] text-base sm:text-lg leading-relaxed mb-8">
              Track live campaign performance attribution, impressions, engagement, conversion revenue, and automate escrow payouts.
            </p>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B53FF] hover:text-[#4334B8] transition-colors cursor-pointer group"
            >
              <span>Explore live campaign analytics</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOutCubic }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[14px] border border-[#DDDDE5] shadow-[0_16px_48px_rgba(20,20,40,0.06)] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#DDDDE5]">
                <div className="flex items-center gap-2">
                  <BarChart2 size={16} className="text-[#6B53FF]" />
                  <span className="text-sm font-bold text-[#2B2A35]">
                    Campaign Revenue Telemetry
                  </span>
                </div>
                <span className="text-xs font-mono text-[#6B53FF] bg-[#F0EDFF] px-2.5 py-1 rounded-[6px] border border-[#DCD5FF]">
                  Live ROAS: 3.84x
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4">
                <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] overflow-hidden">
                  <span className="text-[10px] font-mono text-[#6F7387] uppercase block truncate">Attributed Sales</span>
                  <div className="text-base sm:text-lg font-bold text-[#2B2A35] mt-0.5 truncate">₹8,45,000</div>
                  <span className="text-[10px] text-emerald-600 font-semibold block truncate">+34.2% MoM</span>
                </div>
                <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] overflow-hidden">
                  <span className="text-[10px] font-mono text-[#6F7387] uppercase block truncate">Total Reach</span>
                  <div className="text-base sm:text-lg font-bold text-[#6B53FF] mt-0.5 truncate">2.42M</div>
                  <span className="text-[10px] text-[#6F7387] block truncate">CPM: ₹18.20</span>
                </div>
                <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] overflow-hidden">
                  <span className="text-[10px] font-mono text-[#6F7387] uppercase block truncate">Escrow Payout</span>
                  <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5 truncate">₹2,80,000</div>
                  <span className="text-[10px] text-[#6F7387] block truncate">Released</span>
                </div>
              </div>

              <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#6F7387] font-medium">Top Performer: Anaya Kapoor</span>
                  <span className="text-[#6B53FF] font-bold">₹3,46,000 (4.8x ROAS)</span>
                </div>
                <div className="w-full h-2 bg-[#DDDDE5] rounded-full overflow-hidden flex">
                  <div className="h-full bg-[#6B53FF]" style={{ width: "55%" }} />
                  <div className="h-full bg-[#8D49F7]" style={{ width: "30%" }} />
                  <div className="h-full bg-[#DCD5FF]" style={{ width: "15%" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
