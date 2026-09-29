"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  SlidersHorizontal,
  Video,
  Play,
  TrendingUp,
  BarChart2,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  FileCheck,
  Check,
  RotateCcw,
  Users,
} from "lucide-react";

interface PlatformStoryProps {
  onOpenDemo?: () => void;
}

export default function PlatformStory({ onOpenDemo }: PlatformStoryProps) {
  const [activeTab, setActiveTab] = useState(0);
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const chapters = [
    {
      step: "01",
      title: "Discover creators",
      tagline: "Find creators who actually fit your campaign parameters.",
      desc: "Search verified creators across 40+ niches, audience demographics, follower tiers, and true engagement velocity without fake followers.",
      visual: (
        <div className="bg-white rounded-[14px] border border-[#DDDDE5] shadow-[0_12px_40px_rgba(20,20,40,0.06)] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#DDDDE5]">
            <div className="flex items-center gap-2.5 bg-[#FAFAFC] px-3.5 py-2.5 rounded-[6px] border border-[#DDDDE5] flex-1 max-w-sm">
              <Search size={16} className="text-[#6B53FF]" />
              <span className="text-xs sm:text-sm font-medium text-[#2B2A35]">
                D2C Beauty • Tier 1 Cities
              </span>
            </div>
            <span className="text-xs font-bold text-[#6B53FF] bg-[#F0EDFF] px-3 py-1 rounded-[6px] border border-[#DCD5FF]">
              25,480 Active Creators
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-4 text-xs">
            <div className="p-2.5 rounded-[6px] bg-[#F0EDFF] border border-[#6B53FF] text-[#4334B8] font-medium">
              <span className="text-[10px] text-[#6B53FF] block font-mono">PLATFORM</span>
              Instagram & YouTube
            </div>
            <div className="p-2.5 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-[#2B2A35]">
              <span className="text-[10px] text-[#6F7387] block font-mono">FOLLOWERS</span>
              50K – 250K
            </div>
            <div className="p-2.5 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-[#2B2A35]">
              <span className="text-[10px] text-[#6F7387] block font-mono">MIN ER</span>
              &gt; 5.5%
            </div>
            <div className="p-2.5 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-[#2B2A35]">
              <span className="text-[10px] text-[#6F7387] block font-mono">LOCATION</span>
              Mumbai / Delhi
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-[6px] bg-cover bg-center border border-[#DDDDE5]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80')`,
                  }}
                />
                <div>
                  <div className="font-bold text-sm text-[#2B2A35] flex items-center gap-1">
                    Anaya Kapoor
                    <CheckCircle2 size={14} className="text-[#6B53FF]" />
                  </div>
                  <div className="text-[#6F7387]">Fashion & Lifestyle • 182K • Mumbai</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-[#6B53FF] text-sm">6.8% ER</div>
                <div className="text-[11px] text-[#6F7387]">96K Avg Views</div>
              </div>
            </div>

            <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-[6px] bg-cover bg-center border border-[#DDDDE5]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80')`,
                  }}
                />
                <div>
                  <div className="font-bold text-sm text-[#2B2A35] flex items-center gap-1">
                    Kabir Varma
                    <CheckCircle2 size={14} className="text-[#6B53FF]" />
                  </div>
                  <div className="text-[#6F7387]">Tech & Audio • 310K • Bengaluru</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-[#6B53FF] text-sm">7.4% ER</div>
                <div className="text-[11px] text-[#6F7387]">142K Avg Views</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Launch campaigns",
      tagline: "Build briefs, set deliverables, and lock escrow budgets.",
      desc: "Streamlined 4-step wizard to create brief parameters, attach visual moodboards, set deadline milestones, and distribute to shortlisted creators.",
      visual: (
        <div className="bg-white rounded-[14px] border border-[#DDDDE5] shadow-[0_12px_40px_rgba(20,20,40,0.06)] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#DDDDE5]">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#6B53FF]">
                CAMPAIGN BUILDER
              </span>
              <h4 className="text-base font-bold text-[#2B2A35]">
                Summer Glow Product Launch 2026
              </h4>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-[6px] border border-emerald-200">
              Active Brief
            </span>
          </div>

          {/* 4-Step Progress Indicator */}
          <div className="grid grid-cols-4 gap-2 py-4 text-xs font-semibold">
            <div className="p-2 rounded-[6px] bg-[#6B53FF] text-white flex items-center gap-1.5 justify-center">
              <Check size={13} />
              <span>1 Brief</span>
            </div>
            <div className="p-2 rounded-[6px] bg-[#6B53FF] text-white flex items-center gap-1.5 justify-center">
              <Check size={13} />
              <span>2 Creators</span>
            </div>
            <div className="p-2 rounded-[6px] bg-[#F0EDFF] text-[#4334B8] border border-[#6B53FF] flex items-center gap-1.5 justify-center">
              <span>3 Deliverables</span>
            </div>
            <div className="p-2 rounded-[6px] bg-[#FAFAFC] text-[#6F7387] border border-[#DDDDE5] flex items-center gap-1.5 justify-center">
              <span>4 Launch</span>
            </div>
          </div>

          <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-[#6F7387]">Allocated Escrow Budget:</span>
              <strong className="text-sm font-bold text-[#6B53FF]">₹4,50,000</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6F7387]">Confirmed Creator Slots:</span>
              <strong className="text-[#2B2A35]">8 of 10 confirmed</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6F7387]">Deliverable Scope:</span>
              <strong className="text-[#2B2A35]">2x Reels + 3x Stories per creator</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6F7387]">Draft Submission Window:</span>
              <strong className="text-[#2B2A35]">Oct 14 – Oct 20</strong>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Review content",
      tagline: "Pin timecoded revisions directly onto video frames.",
      desc: "Eliminate long email threads and vague WhatsApp notes. Review high-resolution video drafts, drop timestamp annotations, and approve final cuts.",
      visual: (
        <div className="bg-white rounded-[14px] border border-[#DDDDE5] shadow-[0_12px_40px_rgba(20,20,40,0.06)] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#DDDDE5]">
            <div className="flex items-center gap-2">
              <Video size={16} className="text-[#6B53FF]" />
              <span className="text-sm font-bold text-[#2B2A35]">
                Draft Review: Reel_v2_Anaya.mp4
              </span>
            </div>
            <span className="text-xs font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-[6px] border border-amber-200">
              Waiting for review
            </span>
          </div>

          {/* Video Preview Canvas */}
          <div className="relative rounded-[8px] overflow-hidden bg-zinc-900 aspect-video my-4 p-4 flex flex-col justify-between border border-zinc-800">
            <div className="flex items-center justify-between text-xs text-white">
              <span className="bg-black/60 px-2 py-0.5 rounded text-[11px]">1080 × 1920 60FPS</span>
              <span className="bg-[#6B53FF] text-white px-2 py-0.5 rounded font-bold text-[10px]">
                Pin active @ 00:24
              </span>
            </div>

            <div className="self-center w-11 h-11 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <Play size={18} className="fill-white translate-x-0.5 text-white" />
            </div>

            <div>
              <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-1">
                <div className="h-full bg-[#6B53FF] w-2/5 rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-3 h-3 rounded-full bg-white border-2 border-[#6B53FF]" />
              </div>
              <div className="flex justify-between text-[10px] text-zinc-300">
                <span>00:24 (Brand packaging close-up)</span>
                <span>00:60</span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="flex-1 h-10 rounded-[6px] bg-[#6B53FF] hover:bg-[#5840EE] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Check size={14} />
              <span>Approve cut</span>
            </button>
            <button
              onClick={onOpenDemo}
              className="flex-1 h-10 rounded-[6px] border border-[#DDDDE5] hover:bg-zinc-50 text-[#2B2A35] text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Request changes</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: "Measure results",
      tagline: "Real-time reach, engagement, and conversion telemetry.",
      desc: "Live campaign telemetry tracking impressions, verified clicks, conversion sales, CPM efficiency, and creator-by-creator ROAS rankings.",
      visual: (
        <div className="bg-white rounded-[14px] border border-[#DDDDE5] shadow-[0_12px_40px_rgba(20,20,40,0.06)] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#DDDDE5]">
            <div className="flex items-center gap-2">
              <BarChart2 size={16} className="text-[#6B53FF]" />
              <span className="text-sm font-bold text-[#2B2A35]">
                Attributed Campaign Telemetry
              </span>
            </div>
            <span className="text-xs font-mono text-[#6B53FF] bg-[#F0EDFF] px-2.5 py-1 rounded-[6px] border border-[#DCD5FF]">
              Blended ROAS: 3.84x
            </span>
          </div>

          {/* 4 Core Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
            <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5]">
              <span className="text-[10px] font-mono text-[#6F7387] uppercase block">TOTAL REACH</span>
              <div className="text-xl font-bold text-[#2B2A35] mt-1">2.4M</div>
            </div>
            <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5]">
              <span className="text-[10px] font-mono text-[#6F7387] uppercase block">VIDEO VIEWS</span>
              <div className="text-xl font-bold text-[#6B53FF] mt-1">1.7M</div>
            </div>
            <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5]">
              <span className="text-[10px] font-mono text-[#6F7387] uppercase block">AVG ENGAGEMENT</span>
              <div className="text-xl font-bold text-[#2B2A35] mt-1">7.2%</div>
            </div>
            <div className="p-3.5 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5]">
              <span className="text-[10px] font-mono text-[#6F7387] uppercase block">EFFECTIVE CPM</span>
              <div className="text-xl font-bold text-emerald-700 mt-1">₹18.20</div>
            </div>
          </div>

          {/* Visual Chart Bar */}
          <div className="p-4 rounded-[8px] bg-[#FAFAFC] border border-[#DDDDE5] space-y-2 text-xs">
            <div className="flex justify-between items-center text-[#2B2A35]">
              <span className="font-semibold">Top Performing Creator: Anaya Kapoor</span>
              <strong className="text-[#6B53FF]">₹1,84,000 Attributed Sales</strong>
            </div>
            <div className="w-full h-2 bg-[#DDDDE5] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#6B53FF]" style={{ width: "55%" }} />
              <div className="h-full bg-[#8D49F7]" style={{ width: "30%" }} />
              <div className="h-full bg-[#DCD5FF]" style={{ width: "15%" }} />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="why" className="py-20 sm:py-28 bg-[#FAFAFC] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6B53FF] block mb-3 font-mono">
            WHY UGCFY
          </span>
          <h2 className="section-editorial-title text-[#2B2A35] tracking-tight mb-6">
            Your creator collaboration workspace.
          </h2>
          <p className="text-[#6F7387] text-lg sm:text-xl leading-relaxed">
            From first shortlist to final performance report, UGCFY keeps brands and creators moving together.
          </p>
        </div>

        {/* Desktop Interactive Sticky Story */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-start">
          {/* Left Column: Interactive State Navigation */}
          <div className="col-span-5 space-y-6">
            {chapters.map((chap, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={chap.step}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 rounded-[10px] border transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? "bg-white border-[#6B53FF] shadow-[0_8px_30px_rgba(107,83,255,0.08)] opacity-100"
                      : "bg-transparent border-transparent hover:border-[#DDDDE5] opacity-40 hover:opacity-75"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isActive ? "text-[#6B53FF]" : "text-[#6F7387]"
                      }`}
                    >
                      {chap.step}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[#2B2A35]">
                      {chap.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[#2B2A35] mb-2">
                    {chap.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6F7387] leading-relaxed">
                    {chap.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Crossfading Product Panels */}
          <div className="col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.45, ease: easeOutCubic }}
              >
                {chapters[activeTab].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Vertical Stack (No sticky issues!) */}
        <div className="lg:hidden space-y-12">
          {chapters.map((chap) => (
            <div key={chap.step} className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6B53FF]">
                <span>({chap.step})</span>
                <span>{chap.title.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2B2A35]">
                {chap.tagline}
              </h3>
              <p className="text-sm text-[#6F7387] leading-relaxed">
                {chap.desc}
              </p>
              <div className="pt-2">{chap.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
