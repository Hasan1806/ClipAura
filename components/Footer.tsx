"use client";

import Link from "next/link";

interface FooterProps {
  onOpenDemo?: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const footerSections = {
    PRODUCT: [
      { label: "Discovery Engine", href: "#why" },
      { label: "Campaigns Builder", href: "#why" },
      { label: "Video Review Studio", href: "#workflow" },
      { label: "Analytics & ROAS", href: "#workflow" },
      { label: "Escrow & Payouts", href: "#toolkit" },
    ],
    SOLUTIONS: [
      { label: "For Brands & Agencies", href: "#audience" },
      { label: "For Creators", href: "#audience" },
      { label: "Enterprise Scale", href: "#toolkit" },
      { label: "DTC Playbooks", href: "#campaigns" },
    ],
    RESOURCES: [
      { label: "Documentation", href: "#" },
      { label: "Creator Rate Guide 2026", href: "#" },
      { label: "Community", href: "#" },
      { label: "Help Center", href: "#" },
    ],
    COMPANY: [
      { label: "About UGCFY", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact & Support", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#1E1D28] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 select-none cursor-pointer group mb-4"
            >
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white flex items-center gap-1.5">
                UGCFY
                <span className="w-2.5 h-2.5 rounded-full bg-[#6B53FF] inline-block transition-transform duration-300 group-hover:scale-125" />
              </span>
            </Link>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
              Creator collaboration, without the chaos. The connected operating system for modern creator partnerships, video reviews, and real-time performance analytics.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-white/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-[6px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • v2.6</span>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-5 font-mono">
                  {title}
                </h4>
                <ul className="space-y-3.5 text-sm text-white/75">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href === "#") {
                            e.preventDefault();
                            onOpenDemo?.();
                          }
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} UGCFY Inc. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
