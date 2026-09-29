"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const faqs = [
    {
      q: "What is UGCFY?",
      a: "UGCFY is a modern creator-brand operating system that replaces spreadsheets, lost DMs, and manual invoicing with a unified workspace to discover talent, manage campaign briefs, annotate video deliverables, and measure live ROAS.",
    },
    {
      q: "Who can use UGCFY?",
      a: "UGCFY is built for both sides of the creator economy: direct-to-consumer (D2C) brands, creator agencies, enterprise marketing teams, and verified creators looking to manage brief submissions and guaranteed payouts.",
    },
    {
      q: "Can brands discover creators?",
      a: "Yes. Brands can filter 25,000+ verified creators across 40+ niche categories, follower tiers, geographic locations, and verified Graph API engagement metrics without fake follower risk.",
    },
    {
      q: "Can creators apply to campaigns?",
      a: "Creators can browse open campaign briefs, review deliverable guidelines, and submit customized pitches complete with media kits, proposed concepts, and transparent rate cards.",
    },
    {
      q: "Can brands review creator content?",
      a: "Yes. Brands review 4K video drafts inside UGCFY's built-in player. Reviewers drop pins directly on exact seconds/frames to request edits or approve cuts without exporting drive links.",
    },
    {
      q: "Can I track campaign results?",
      a: "UGCFY natively connects with Shopify, WooCommerce, and Google Analytics to track verified clicks, conversions, average order value, and blended ROAS per creator in real-time.",
    },
    {
      q: "How does earnings tracking work?",
      a: "When a campaign brief is accepted, funds are held in secure escrow. Once deliverables are reviewed and signed off, funds are instantly transferred to creator bank accounts via Stripe with automated W-9/1099 tax processing.",
    },
    {
      q: "Which platforms are supported?",
      a: "UGCFY natively syncs first-party graph APIs for Instagram (Reels & Stories), TikTok, YouTube (Shorts & Dedicated Video), and LinkedIn.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <div className="mb-16 sm:mb-20">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-3 block">
            FAQ
          </span>
          <h2 className="section-editorial-title text-[#2B2A35] tracking-tight">
            Questions, answered.
          </h2>
        </div>

        {/* Flat Minimal Accordion (No FAQ Cards) */}
        <div className="divide-y divide-[#DDDDE5] border-y border-[#DDDDE5]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.q} className="py-7">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                      isOpen ? "text-[#6B53FF]" : "text-[#2B2A35] group-hover:text-[#6B53FF]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-[6px] border flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-[#6B53FF] border-[#6B53FF] text-white"
                        : "border-[#DDDDE5] text-[#6F7387] group-hover:border-[#6B53FF] group-hover:text-[#6B53FF]"
                    }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOutCubic }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#6F7387] text-base sm:text-lg leading-relaxed pt-4 pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
