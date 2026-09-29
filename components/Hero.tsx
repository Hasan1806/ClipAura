"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Film,
  Video,
  Clapperboard,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenDemo?: (role?: "brand" | "creator") => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="relative min-h-[75vh] lg:min-h-[82vh] pt-10 sm:pt-14 pb-14 sm:pb-20 text-white overflow-hidden flex flex-col justify-center items-center text-center"
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
        className="absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(216, 203, 255, 0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full pointer-events-none blur-[130px]"
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
        <div className="absolute top-4 left-[10%] w-[210px] h-[120px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs p-3 text-left opacity-35">
          <span className="text-[10px] font-bold text-white/80 block leading-tight">
            COMMERCIAL
            <br />
            SHOT LIST
          </span>
          <div className="h-7 w-full bg-white/10 rounded mt-2.5" />
        </div>

        {/* Top Center: THE DIRECTOR'S CUT */}
        <div className="absolute top-2 left-[50%] -translate-x-1/2 w-[260px] h-[140px] rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xs p-3 text-center opacity-35">
          <span className="text-[11px] font-serif italic text-white/90 tracking-widest block uppercase pt-1">
            THE DIRECTOR&apos;S
            <br />
            CUT TREATMENT
          </span>
          <div className="h-8 w-3/4 mx-auto bg-white/10 rounded mt-2" />
        </div>

        {/* Top Right: Production Treatment */}
        <div className="absolute top-4 right-[10%] w-[210px] h-[120px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs p-3 text-left opacity-35">
          <span className="text-[10px] font-bold text-white/80 block">
            Production
            <br />
            Treatment
          </span>
          <div className="h-7 w-full bg-white/10 rounded mt-2.5" />
        </div>

        {/* Mid Left: CREATIVE BRIEF */}
        <div className="absolute top-[28%] left-[3%] w-[240px] h-[140px] rounded-xl border border-white/15 bg-gradient-to-br from-white/10 via-purple-500/10 to-transparent backdrop-blur-xs p-4 text-left opacity-40">
          <span className="text-xl font-black text-white/70 block tracking-tighter leading-none mb-1">
            CREATIVE
          </span>
          <span className="text-lg font-black text-white/60 block tracking-tighter leading-none">
            BRIEF
          </span>
        </div>

        {/* Lower Left: EPISODIC BRAND DOC */}
        <div className="absolute bottom-12 left-[6%] w-[220px] h-[120px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs p-3 text-left opacity-30">
          <span className="text-[9px] font-mono tracking-widest text-white/60 block uppercase">
            EPISODIC BRAND DOC
          </span>
          <div className="h-8 w-full bg-white/10 rounded mt-2" />
        </div>

        {/* Lower Right: MOODBOARD & COLOR GRADE */}
        <div className="absolute bottom-10 right-[6%] w-[250px] h-[140px] rounded-xl border border-white/15 bg-white/5 backdrop-blur-xs p-3.5 text-left opacity-35">
          <span className="text-base font-black text-white/80 block leading-tight mb-1">
            MOODBOARD &amp;
            <br />
            COLOR GRADE
          </span>
          <span className="text-[9px] font-mono text-white/50 tracking-wider">4K CINEMATIC LOOK</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FOREGROUND: MASSIVE HEADLINE & GLOWING EDITORIAL CONTENT     */}
      {/* ============================================================ */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        {/* Subtle glowing pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutCubic }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(204,255,0,0.18)] mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse shadow-[0_0_10px_#CCFF00]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
            Next-Gen Media Production Agency
          </span>
        </motion.div>

        {/* Massive Centered Headline with subtle glow */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOutCubic }}
          className="hero-pitch-title text-white tracking-tight text-center font-extrabold mb-4 max-w-4xl leading-[0.92] drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        >
          Create media
          <br />
          <span className="bg-gradient-to-r from-white via-[#F0EDFF] to-[#D4C3FF] bg-clip-text text-transparent">
            that wins.
          </span>
        </motion.h1>

        {/* Glowing Editorial Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: easeOutCubic }}
          className="text-sm sm:text-lg lg:text-xl text-purple-100/90 font-normal max-w-2xl text-center leading-relaxed mb-8 text-balance"
        >
          From high-impact TV commercials and brand films to creator-led social campaigns — produced with cinematic craft and speed.
        </motion.p>

        {/* Glowing Action Buttons: Brand and Creator */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOutCubic }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Brand Button: Intense Neon Lime Glow */}
          <button
            onClick={() => onOpenDemo?.("brand")}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#1E0B4B] font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:shadow-[0_0_55px_rgba(204,255,0,0.7)] hover:scale-[1.025] active:scale-95 cursor-pointer w-full sm:w-auto min-w-[180px]"
          >
            <Sparkles size={18} className="text-[#1E0B4B]" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-sm sm:text-base font-extrabold tracking-tight">Brand</span>
              <span className="text-[10px] font-medium opacity-80">Launch campaigns</span>
            </div>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 ml-1 text-[#1E0B4B]" />
          </button>

          {/* Creator Button: Premium Frosted Glass + Purple Bloom */}
          <button
            onClick={() => onOpenDemo?.("creator")}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/18 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/25 hover:border-white/40 transition-all duration-300 shadow-[0_0_35px_rgba(107,83,255,0.35)] hover:shadow-[0_0_55px_rgba(107,83,255,0.6)] hover:scale-[1.025] active:scale-95 cursor-pointer w-full sm:w-auto min-w-[180px]"
          >
            <Clapperboard size={18} className="text-[#CCFF00]" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white">Creator</span>
              <span className="text-[10px] font-medium text-purple-200">Join the roster</span>
            </div>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 ml-1 text-[#CCFF00]" />
          </button>
        </motion.div>

        {/* Glowing Agency Highlights / Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-8 sm:mt-10 max-w-3xl"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <Clapperboard size={13} className="text-[#CCFF00]" />
            <span>TVC &amp; Commercials</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <Video size={13} className="text-[#CCFF00]" />
            <span>Brand Documentaries</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <Sparkles size={13} className="text-[#CCFF00]" />
            <span>3D VFX &amp; Post-Production</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-xs font-medium text-white/80 shadow-[0_0_20px_rgba(107,83,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span>14-Day Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
