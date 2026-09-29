"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";

interface CampaignGalleryProps {
  onOpenDemo?: () => void;
}

export default function CampaignGallery({ onOpenDemo }: CampaignGalleryProps) {
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const campaigns = [
    {
      title: "Summer Velocity Launch",
      brand: "Nova Activewear",
      category: "Fitness & Lifestyle",
      budget: "₹3,50,000",
      slots: "6 Creator Slots",
      deadline: "Oct 24",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Clean Botanical Skincare Story",
      brand: "Aura Botanical",
      category: "D2C Beauty",
      budget: "₹2,80,000",
      slots: "8 Creator Slots",
      deadline: "Oct 28",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Next-Gen Wireless Audio Review",
      brand: "Sonic Labs",
      category: "Consumer Tech",
      budget: "₹4,20,000",
      slots: "4 Creator Slots",
      deadline: "Nov 02",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Conscious Coffee Brewing Series",
      brand: "Origin Roasters",
      category: "Food & Beverage",
      budget: "₹1,90,000",
      slots: "5 Creator Slots",
      deadline: "Nov 05",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="campaigns" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
              FEATURED CAMPAIGNS
            </span>
            <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
              Campaigns creators want to join.
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
              <span>Browse all open campaigns</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Campaign Tiles: Slideable on Mobile, Grid on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 md:pb-0 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 scrollbar-none">
          {campaigns.map((camp, idx) => (
            <motion.div
              key={camp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: easeOutCubic }}
              onClick={onOpenDemo}
              className="min-w-[270px] sm:min-w-[310px] md:min-w-0 flex-shrink-0 md:flex-shrink snap-start group rounded-[12px] bg-[#FAFAFC] border border-[#DDDDE5] hover:border-[#6B53FF] overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(20,20,40,0.03)] hover:shadow-[0_16px_40px_rgba(107,83,255,0.1)]"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${camp.image}')` }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#2B2A35] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                    {camp.category}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-xs text-[#6F7387] mb-1 font-medium">{camp.brand}</div>
                  <h3 className="font-bold text-base sm:text-lg text-[#2B2A35] tracking-tight group-hover:text-[#6B53FF] transition-colors mb-3">
                    {camp.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#DDDDE5]">
                    <div>
                      <span className="text-[#6F7387] block text-[10px] font-mono">BUDGET</span>
                      <strong className="text-sm font-bold text-[#6B53FF]">{camp.budget}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[#6F7387] block text-[10px] font-mono">DEADLINE</span>
                      <strong className="text-[#2B2A35]">{camp.deadline}</strong>
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
