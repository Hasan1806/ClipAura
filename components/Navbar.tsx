"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. TOP LILAC ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <aside aria-label="Announcement" className="relative z-50 bg-[#D4C3FF] text-[#2B1066] text-xs sm:text-sm font-semibold py-2.5 px-4 text-center flex items-center justify-center gap-2">
          <span className="hidden sm:inline">UGCFY 2.0 &amp; Production Suite are live:</span>
          <span>Plug UGCFY into your creator stack</span>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:opacity-80 transition-opacity ml-1 cursor-pointer"
          >
            <span>See what&apos;s new</span>
            <ArrowRight size={13} />
          </button>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2B1066]/70 hover:text-[#2B1066] p-1 cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X size={15} />
          </button>
        </aside>
      )}

      {/* 2. HEADER NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DDDDE5] py-3.5 shadow-sm text-[#2B2A35]"
            : "bg-[#2B1066] py-4 text-white border-b border-white/10"
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 select-none cursor-pointer group"
          >
            <span
              className={`font-extrabold text-2xl sm:text-[26px] tracking-tight flex items-center gap-2 transition-colors ${
                scrolled ? "text-[#2B2A35]" : "text-white"
              }`}
            >
              UGCFY
              <span className="w-2 h-2 rounded-full bg-[#6B53FF] inline-block transition-transform duration-300 group-hover:scale-125" />
            </span>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
            <a
              href="#why"
              className={`flex items-center gap-1 transition-colors ${
                scrolled ? "text-[#6F7387] hover:text-[#2B2A35]" : "text-white/90 hover:text-white"
              }`}
            >
              <span>Product</span>
              <ChevronDown size={14} className="opacity-70" />
            </a>
            <a
              href="#audience"
              className={`flex items-center gap-1 transition-colors ${
                scrolled ? "text-[#6F7387] hover:text-[#2B2A35]" : "text-white/90 hover:text-white"
              }`}
            >
              <span>Brands</span>
              <ChevronDown size={14} className="opacity-70" />
            </a>
            <a
              href="#audience"
              className={`flex items-center gap-1 transition-colors ${
                scrolled ? "text-[#6F7387] hover:text-[#2B2A35]" : "text-white/90 hover:text-white"
              }`}
            >
              <span>Creators</span>
              <ChevronDown size={14} className="opacity-70" />
            </a>
            <a
              href="#campaigns"
              className={`flex items-center gap-1 transition-colors ${
                scrolled ? "text-[#6F7387] hover:text-[#2B2A35]" : "text-white/90 hover:text-white"
              }`}
            >
              <span>Templates</span>
              <ChevronDown size={14} className="opacity-70" />
            </a>
            <a
              href="#faq"
              className={`transition-colors ${
                scrolled ? "text-[#6F7387] hover:text-[#2B2A35]" : "text-white/90 hover:text-white"
              }`}
            >
              Pricing
            </a>
          </nav>

          {/* RIGHT: CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold h-10 px-5 rounded-full border transition-all duration-200 cursor-pointer ${
                scrolled
                  ? "border-[#DDDDE5] text-[#2B2A35] hover:border-[#2B2A35]"
                  : "border-white/30 text-white hover:border-white bg-white/5 backdrop-blur-xs"
              }`}
            >
              <span>Log in</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center text-sm font-bold h-10 px-5 rounded-[8px] bg-[#CCFF00] hover:bg-[#B8E600] text-[#111827] transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={onOpenDemo}
              className="text-xs font-bold h-9 px-3.5 rounded-[6px] bg-[#CCFF00] text-[#111827]"
            >
              Sign up
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-[6px] ${scrolled ? "text-[#2B2A35]" : "text-white"}`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#211D4B] text-white pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden animate-in fade-in duration-200">
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <span className="font-extrabold text-2xl tracking-tight">UGCFY</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/80">
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 pt-4">
            <a href="#why" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold">
              Product
            </a>
            <a href="#audience" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold">
              Brands
            </a>
            <a href="#audience" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold">
              Creators
            </a>
            <a href="#campaigns" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold">
              Campaigns
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold">
              Pricing
            </a>
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo?.();
              }}
              className="w-full h-12 rounded-[8px] bg-[#CCFF00] text-[#111827] font-bold"
            >
              Sign up for free
            </button>
          </div>
        </div>
      )}
    </>
  );
}
