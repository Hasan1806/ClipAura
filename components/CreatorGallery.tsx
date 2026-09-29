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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
              VERIFIED ROSTER
            </span>
            <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
              Find the next face of your campaign.
            </h2>
          </div>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B53FF] hover:text-[#4334B8] transition-colors cursor-pointer group"
          >
            <span>Search 25,000+ creators</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: easeOutCubic }}
              onClick={onOpenDemo}
              className="group rounded-[12px] bg-white border border-[#DDDDE5] hover:border-[#6B53FF] overflow-hidden flex flex-col justify-between transition-colors duration-300 cursor-pointer shadow-[0_8px_24px_rgba(20,20,40,0.03)]"
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

                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-[#2B2A35] flex items-center gap-1.5">
                      {c.name}
                      <CheckCircle2 size={16} className="text-[#6B53FF]" />
                    </h3>
                  </div>
                  <p className="text-xs text-[#6F7387] mb-4">
                    {c.niche} • {c.location}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-[#DDDDE5] text-xs">
                    <div>
                      <span className="text-[#6F7387] block text-[10px] font-mono">FOLLOWERS</span>
                      <strong className="text-sm font-bold text-[#2B2A35]">{c.followers}</strong>
                    </div>
                    <div>
                      <span className="text-[#6F7387] block text-[10px] font-mono">ENGAGEMENT</span>
                      <strong className="text-sm font-bold text-[#6B53FF]">{c.engagement}</strong>
                    </div>
                    <div>
                      <span className="text-[#6F7387] block text-[10px] font-mono">AVG VIEWS</span>
                      <strong className="text-sm font-bold text-[#2B2A35]">{c.views}</strong>
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
