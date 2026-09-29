"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Bookmark } from "lucide-react";

interface CreatorGalleryProps {
  onOpenDemo?: () => void;
}

export default function CreatorGallery({ onOpenDemo }: CreatorGalleryProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const creators = [
    {
      name: "Anaya Kapoor",
      niche: "Fashion & Conscious Lifestyle",
      location: "Mumbai",
      followers: "182K",
      engagement: "6.8%",
      views: "96K",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Riya Shah",
      niche: "Clean Beauty & Skincare",
      location: "Delhi",
      followers: "217K",
      engagement: "5.9%",
      views: "118K",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kabir Varma",
      niche: "Tech, Audio & Everyday Carry",
      location: "Bengaluru",
      followers: "310K",
      engagement: "7.4%",
      views: "142K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zoya Akhtar",
      niche: "Travel, Architecture & Film",
      location: "Goa",
      followers: "145K",
      engagement: "8.1%",
      views: "88K",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
              VERIFIED ROSTER
            </span>
            <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
              Find the next face of your campaign.
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="md:hidden text-xs font-medium text-[#6B53FF] flex items-center gap-1">
              Swipe to explore →
            </span>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6B53FF] hover:text-[#4334B8] transition-colors cursor-pointer group"
            >
              <span>Search 25,000+ creators</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Creator Cards: Slideable on Mobile, Grid on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 md:pb-0 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 scrollbar-none">
          {creators.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: easeOutCubic }}
              onClick={onOpenDemo}
              className="min-w-[270px] sm:min-w-[310px] md:min-w-0 flex-shrink-0 md:flex-shrink snap-start group rounded-[12px] bg-white border border-[#DDDDE5] hover:border-[#6B53FF] overflow-hidden flex flex-col justify-between transition-colors duration-300 cursor-pointer shadow-[0_8px_24px_rgba(20,20,40,0.03)] hover:shadow-[0_16px_40px_rgba(107,83,255,0.1)]"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                    style={{ backgroundImage: `url('${c.image}')` }}
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-[6px] bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2B2A35] hover:text-[#6B53FF] transition-colors shadow-2xs">
                    <Bookmark size={14} />
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#2B2A35] flex items-center gap-1.5">
                      {c.name}
                      <CheckCircle2 size={16} className="text-[#6B53FF]" />
                    </h3>
                  </div>
                  <p className="text-xs text-[#6F7387] mb-3 sm:mb-4 truncate">
                    {c.niche} • {c.location}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-2.5 sm:py-3 border-t border-[#DDDDE5] text-xs">
                    <div className="overflow-hidden">
                      <span className="text-[#6F7387] block text-[9px] sm:text-[10px] font-mono truncate">FOLLOWERS</span>
                      <strong className="text-xs sm:text-sm font-bold text-[#2B2A35] truncate block">{c.followers}</strong>
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[#6F7387] block text-[9px] sm:text-[10px] font-mono truncate">ENGAGEMENT</span>
                      <strong className="text-xs sm:text-sm font-bold text-[#6B53FF] truncate block">{c.engagement}</strong>
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[#6F7387] block text-[9px] sm:text-[10px] font-mono truncate">AVG VIEWS</span>
                      <strong className="text-xs sm:text-sm font-bold text-[#2B2A35] truncate block">{c.views}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
