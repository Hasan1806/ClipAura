"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import PlatformStory from "@/components/PlatformStory";
import StatementSection from "@/components/StatementSection";
import Metrics from "@/components/Metrics";
import WorkflowStory from "@/components/WorkflowStory";
import AudienceSection from "@/components/AudienceSection";
import Testimonials from "@/components/Testimonials";
import FeatureBento from "@/components/FeatureBento";
import CampaignGallery from "@/components/CampaignGallery";
import CreatorGallery from "@/components/CreatorGallery";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import InteractiveModals from "@/components/InteractiveModals";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoRole, setDemoRole] = useState<"brand" | "creator">("brand");

  const handleOpenDemo = (role: "brand" | "creator" = "brand") => {
    setDemoRole(role);
    setDemoOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFC] text-[#2B2A35] selection:bg-[#6B53FF] selection:text-white">
      {/* 1. Seamless Top Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo("brand")} />

      <main className="flex-1">
        {/* 2. Hero Section: Primary Brand Purple #6B53FF */}
        <Hero onOpenDemo={(role) => handleOpenDemo(role || "brand")} />

        {/* 3. Trust Logo Strip: Pure White #FFFFFF */}
        <LogoStrip />

        {/* 4. Why UGCFY / Sticky Product Story: Soft Canvas #FAFAFC */}
        <PlatformStory onOpenDemo={() => handleOpenDemo("brand")} />

        {/* 5. The Payoff: Editorial Typography Reveal */}
        <StatementSection />

        {/* 6. Typographic Metrics: 3-Column Full-Width */}
        <Metrics />

        {/* 7. How UGCFY Works: 3 Chapters with Pale Purple → Dark Ink → White Transitions */}
        <WorkflowStory onOpenDemo={() => setDemoOpen(true)} />

        {/* 8. Brands vs Creators: Two-Panel Composition */}
        <AudienceSection onOpenDemo={() => setDemoOpen(true)} />

        {/* 9. Editorial Testimonials */}
        <Testimonials />

        {/* 10. Complete Bento Toolkit with Signature #6B53FF Card */}
        <FeatureBento />

        {/* 11. Featured Campaigns Gallery */}
        <CampaignGallery onOpenDemo={() => setDemoOpen(true)} />

        {/* 12. Verified Creator Gallery */}
        <CreatorGallery onOpenDemo={() => setDemoOpen(true)} />

        {/* 13. Brand Moment & Final CTA */}
        <CTA onOpenDemo={() => setDemoOpen(true)} />

        {/* 14. Minimal FAQ Accordions */}
        <FAQ />
      </main>

      {/* 15. Structured Dark Ink Footer */}
      <Footer onOpenDemo={() => setDemoOpen(true)} />

      {/* 16. Interactive Access / Demo Modal */}
      <InteractiveModals
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultRole={demoRole}
      />
    </div>
  );
}
