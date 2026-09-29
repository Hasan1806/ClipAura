"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const testimonials = [
    {
      quote:
        "UGCFY gave our team one place to find creators, review work frame-by-frame and keep every campaign moving with zero spreadsheet overhead.",
      name: "Aarav Mehta",
      role: "Growth Lead",
      company: "Nova Labs",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "The timecoded review studio is game-changing. Our revision turnaround dropped from 5 days to 4 hours. Creators know exactly what to adjust.",
      name: "Sophie Laurent",
      role: "Head of Brand Content",
      company: "Arc Visual Studio",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Having structured briefs and guaranteed milestone payouts in escrow completely revolutionized how I work with enterprise brands.",
      name: "Devina Thorne",
      role: "Lifestyle & Tech Creator",
      company: "420K Audience",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Attribution telemetry showed us precisely which creators drove purchases. We scaled our influencer spend 4x with total confidence.",
      name: "Rohan Kapoor",
      role: "VP Marketing",
      company: "Luma DTC",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
              TESTIMONIALS
            </span>
            <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
              Trusted by leaders on both sides.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-[8px] border border-[#DDDDE5] hover:border-[#6B53FF] hover:text-[#6B53FF] bg-white flex items-center justify-center text-[#2B2A35] transition-colors cursor-pointer active:scale-95 shadow-2xs"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-[8px] border border-[#DDDDE5] hover:border-[#6B53FF] hover:text-[#6B53FF] bg-white flex items-center justify-center text-[#2B2A35] transition-colors cursor-pointer active:scale-95 shadow-2xs"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: easeOutCubic }}
                className="relative aspect-[3/4] rounded-[12px] overflow-hidden bg-zinc-100 border border-[#DDDDE5] shadow-[0_12px_36px_rgba(20,20,40,0.08)]"
              >
                <div
                  className="w-full h-full bg-cover bg-center grayscale contrast-105"
                  style={{ backgroundImage: `url('${current.image}')` }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote Column */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[300px]">
            <div>
              {/* Giant Pitch-Style Quotation Mark */}
              <span className="text-7xl sm:text-8xl font-serif text-[#6B53FF] leading-none block mb-4 select-none">
                &ldquo;
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.quote}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: easeOutCubic }}
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2B2A35] tracking-tight leading-snug mb-10">
                    {current.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author Attribution */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-[#DDDDE5] flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#2B2A35] tracking-tight">
                    {current.name}
                  </h4>
                  <p className="text-sm text-[#6F7387]">
                    {current.role} •{" "}
                    <span className="text-[#6B53FF] font-semibold">{current.company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === i
                          ? "w-8 bg-[#6B53FF]"
                          : "w-2 bg-[#DDDDE5] hover:bg-[#6F7387]"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
