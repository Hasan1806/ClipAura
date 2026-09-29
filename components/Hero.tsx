"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Film,
  Video,
  Clapperboard,
  Briefcase,
  Layers,
} from "lucide-react";

interface HeroProps {
  onOpenDemo?: (role?: "brand" | "creator") => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="relative min-h-[88vh] sm:min-h-[90vh] lg:min-h-[94vh] pt-14 sm:pt-24 pb-16 sm:pb-28 text-white overflow-hidden flex flex-col justify-center items-center text-center"
      style={{
        backgroundColor: "#2B1066",
      }}
    >
      {/* ============================================================ */}
      {/* LAYER 1: BASE DEEP PURPLE BLEND                              */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 25%, #461E96 0%, #34147A 45%, #2B1066 85%, #1F074D 100%),
            linear-gradient(180deg, rgba(70, 30, 150, 0.2) 0%, rgba(43, 16, 102, 0.9) 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* LAYER 2: SOFT LAVENDER LIGHT BLOOMS                           */}
      {/* ============================================================ */}
      <div
        className="absolute -top-24 -left-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none blur-[100px] sm:blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(216, 203, 255, 0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none blur-[100px] sm:blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(141, 73, 247, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* LAYER 3: BLURRED FLOATING PRODUCTION & AGENCY BOARDS         */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Top Left: Commercial Shot List */}
        <div className="absolute top-3 left-[2%] sm:left-[10%] w-[160px] sm:w-[210px] h-[95px] sm:h-[120px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs p-2.5 sm:p-3 text-left opacity-25 sm:opacity-35">
          <span className="text-[9px] sm:text-[10px] font-bold text-white/80 block leading-tight">
            COMMERCIAL
            <br />
            SHOT LIST
          </span>
          <div className="h-5 sm:h-7 w-full bg-white/10 rounded mt-2" />
        </div>

        {/* Top Center: THE DIRECTOR'S CUT */}
        <div className="absolute top-1 left-[50%] -translate-x-1/2 w-[200px] sm:w-[260px] h-[110px] sm:h-[140px] rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xs p-2.5 sm:p-3 text-center opacity-20 sm:opacity-35">
          <span className="text-[10px] sm:text-[11px] font-serif italic text-white/90 tracking-widest block uppercase pt-0.5">
            THE DIRECTOR&apos;S
            <br />
            CUT TREATMENT
          </span>
          <div className="h-6 sm:h-8 w-3/4 mx-auto bg-white/10 rounded mt-1.5" />
        </div>

        {/* Top Right: Production Treatment */}
        <div className="absolute top-3 right-[2%] sm:right-[10%] w-[160px] sm:w-[210px] h-[95px] sm:h-[120px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs p-2.5 sm:p-3 text-left opacity-25 sm:opacity-35">
          <span className="text-[9px] sm:text-[10px] font-bold text-white/80 block">
            Production
            <br />
            Treatment
          </span>
          <div className="h-5 sm:h-7 w-full bg-white/10 rounded mt-2" />
        </div>

        {/* Mid Left: CREATIVE BRIEF */}
        <div className="absolute top-[28%] -left-6 sm:left-[3%] w-[180px] sm:w-[240px] h-[110px] sm:h-[140px] rounded-xl border border-white/15 bg-gradient-to-br from-white/10 via-purple-500/10 to-transparent backdrop-blur-xs p-3 sm:p-4 text-left opacity-25 sm:opacity-40">
          <span className="text-lg sm:text-xl font-black text-white/70 block tracking-tighter leading-none mb-1">
            CREATIVE
          </span>
          <span className="text-base sm:text-lg font-black text-white/60 block tracking-tighter leading-none">
            BRIEF
          </span>
        </div>

        {/* Lower Left: EPISODIC BRAND DOC */}
        <div className="absolute bottom-16 -left-4 sm:left-[6%] w-[170px] sm:w-[220px] h-[95px] sm:h-[120px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs p-2.5 sm:p-3 text-left opacity-20 sm:opacity-30">
          <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-white/60 block uppercase">
            EPISODIC BRAND DOC
          </span>
          <div className="h-6 sm:h-8 w-full bg-white/10 rounded mt-2" />
        </div>

        {/* Lower Right: MOODBOARD & COLOR GRADE */}
        <div className="absolute bottom-14 -right-4 sm:right-[6%] w-[180px] sm:w-[250px] h-[110px] sm:h-[140px] rounded-xl border border-white/15 bg-white/5 backdrop-blur-xs p-3 sm:p-3.5 text-left opacity-25 sm:opacity-35">
          <span className="text-xs sm:text-base font-black text-white/80 block leading-tight mb-1">
            MOODBOARD &amp;
            <br />
            COLOR GRADE
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono text-white/50 tracking-wider">4K CINEMATIC LOOK</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FOREGROUND: MASSIVE HEADLINE & GLOWING EDITORIAL CONTENT     */}
      {/* ============================================================ */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center">
        {/* Subtle glowing pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutCubic }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(204,255,0,0.18)] mb-3.5 sm:mb-5"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#CCFF00] animate-pulse shadow-[0_0_10px_#CCFF00]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
            Next-Gen Media Production Agency
          </span>
        </motion.div>

        {/* Massive Centered Headline with subtle glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOutCubic }}
          className="hero-pitch-title text-white tracking-tight text-center font-extrabold mb-3 sm:mb-4 max-w-4xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        >
          Create media
          <br />
          <span className="bg-gradient-to-r from-white via-[#F0EDFF] to-[#D4C3FF] bg-clip-text text-transparent">
            that wins.
          </span>
        </motion.h1>

        {/* Glowing Editorial Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: easeOutCubic }}
          className="text-xs sm:text-base lg:text-xl text-purple-100/90 font-normal max-w-xl text-center leading-relaxed mb-6 sm:mb-8 text-balance px-2"
        >
          From high-impact TV commercials and brand films to creator-led social campaigns — produced with cinematic craft and speed.
        </motion.p>

        {/* Glowing Action Buttons: Brand and Creator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOutCubic }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto max-w-sm sm:max-w-none px-2 sm:px-0"
        >
          {/* Brand Button: Intense Neon Lime Glow */}
          <button
            onClick={() => onOpenDemo?.("brand")}
            className="group relative inline-flex items-center justify-between sm:justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#1E0B4B] font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:shadow-[0_0_55px_rgba(204,255,0,0.7)] hover:scale-[1.02] active:scale-95 cursor-pointer w-full sm:w-auto sm:min-w-[180px]"
          >
            <div className="flex items-center gap-2.5">
              <Briefcase size={18} className="text-[#1E0B4B] flex-shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm sm:text-base font-extrabold tracking-tight">Brand</span>
                <span className="text-[10px] font-medium opacity-80">Launch campaigns</span>
              </div>
            </div>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 ml-1 text-[#1E0B4B]" />
          </button>

          {/* Creator Button: Premium Frosted Glass + Purple Bloom */}
          <button
            onClick={() => onOpenDemo?.("creator")}
            className="group relative inline-flex items-center justify-between sm:justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/18 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/25 hover:border-white/40 transition-all duration-300 shadow-[0_0_35px_rgba(107,83,255,0.35)] hover:shadow-[0_0_55px_rgba(107,83,255,0.6)] hover:scale-[1.02] active:scale-95 cursor-pointer w-full sm:w-auto sm:min-w-[180px]"
          >
            <div className="flex items-center gap-2.5">
              <Clapperboard size={18} className="text-[#CCFF00] flex-shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm sm:text-base font-bold tracking-tight text-white">Creator</span>
                <span className="text-[10px] font-medium text-purple-200">Join the roster</span>
              </div>
            </div>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 ml-1 text-[#CCFF00]" />
          </button>
        </motion.div>

        {/* Glowing Agency Highlights / Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-10 max-w-3xl w-full sm:w-auto px-1 sm:px-0"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-[11px] sm:text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <Clapperboard size={12} className="text-[#CCFF00] flex-shrink-0" />
            <span className="truncate">TVC &amp; Commercials</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-[11px] sm:text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <Video size={12} className="text-[#CCFF00] flex-shrink-0" />
            <span className="truncate">Brand Docs</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-[11px] sm:text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <Layers size={12} className="text-[#CCFF00] flex-shrink-0" />
            <span className="truncate">3D VFX &amp; Post</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-[11px] sm:text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00] flex-shrink-0" />
            <span className="truncate">14-Day Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
