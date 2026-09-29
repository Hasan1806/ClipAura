"use client";

import { motion } from "framer-motion";

export default function Metrics() {
  const metrics = [
    {
      value: "25K+",
      label: "CREATOR PROFILES",
      sub: "First-party Graph API verified across Instagram and YouTube.",
    },
    {
      value: "42%",
      label: "FASTER CAMPAIGN SETUP",
      sub: "From brief creation to creator shortlist and budget lock.",
    },
    {
      value: "3.2×",
      label: "FASTER COLLABORATION",
      sub: "Timecoded frame comments cut revision loops from days to hours.",
    },
  ];

  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="py-18 sm:py-24 bg-[#FFFFFF] text-[#2B2A35] border-b border-[#DDDDE5]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDDDE5]">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: easeOutCubic }}
              className={`flex flex-col justify-between ${
                idx === 0
                  ? "md:pr-12 pb-10 md:pb-0"
                  : idx === 1
                  ? "md:px-12 py-10 md:py-0"
                  : "md:pl-12 pt-10 md:pt-0"
              }`}
            >
              <div className="metric-number-title text-[#2B2A35] tracking-tight mb-4">
                {item.value}
              </div>
              <div>
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#6B53FF] mb-2">
                  {item.label}
                </h4>
                <p className="text-sm text-[#6F7387] leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
