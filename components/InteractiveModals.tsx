"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Zap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface InteractiveModalsProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCreator?: string | null;
  selectedCampaign?: any | null;
  defaultRole?: "brand" | "creator";
}

export default function InteractiveModals({
  isOpen,
  onClose,
  selectedCreator,
  selectedCampaign,
  defaultRole = "brand",
}: InteractiveModalsProps) {
  const [submitted, setSubmitted] = useState(false);
  const [userRole, setUserRole] = useState<"brand" | "creator">(defaultRole);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#211D4B]/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full max-w-lg rounded-[14px] bg-white border border-[#DDDDE5] shadow-[0_24px_80px_rgba(20,20,40,0.22)] p-6 sm:p-8 z-10 overflow-hidden text-[#2B2A35]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-[6px] bg-[#FAFAFC] hover:bg-[#F0EDFF] flex items-center justify-center text-[#2B2A35] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#F0EDFF] text-[#6B53FF] flex items-center justify-center mb-4 border border-[#DCD5FF]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#2B2A35] tracking-tight mb-2">
                You&apos;re on the priority list!
              </h3>
              <p className="text-sm text-[#6F7387] max-w-xs">
                We&apos;ve sent an instant workspace invitation and onboarding brief to{" "}
                <strong className="text-[#2B2A35]">{email || "your email"}</strong>.
              </p>
            </div>
          ) : selectedCampaign ? (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#F0EDFF] text-[#4334B8] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#DCD5FF]">
                <Zap size={12} className="text-[#6B53FF]" />
                <span>Verified Campaign Brief</span>
              </div>

              <h3 className="text-2xl font-bold text-[#2B2A35] tracking-tight mb-2">
                {selectedCampaign.title}
              </h3>
              <p className="text-xs text-[#6F7387] mb-6">
                Brand: <strong className="text-[#2B2A35]">{selectedCampaign.brand}</strong> • {selectedCampaign.category}
              </p>

              <div className="bg-[#FAFAFC] p-4 rounded-[8px] border border-[#DDDDE5] space-y-2 text-xs text-[#2B2A35] mb-6">
                <div className="flex justify-between">
                  <span className="text-[#6F7387]">Deliverables:</span>
                  <span className="font-semibold">{selectedCampaign.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6F7387]">Allocated Budget:</span>
                  <span className="font-bold text-[#6B53FF]">{selectedCampaign.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6F7387]">Submission Deadline:</span>
                  <span className="font-medium">{selectedCampaign.deadline}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Creator Handle"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-4 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-sm text-[#2B2A35] outline-none focus:border-[#6B53FF] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-sm text-[#2B2A35] outline-none focus:border-[#6B53FF] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-[8px] bg-[#6B53FF] hover:bg-[#5840EE] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 shadow-sm"
                >
                  <span>Submit Pitch to Brand</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          ) : (
            <div>
              {/* General Signup / Demo Request */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#F0EDFF] text-[#4334B8] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#DCD5FF]">
                <Briefcase size={12} className="text-[#6B53FF]" />
                <span>Get Started with UGCFY</span>
              </div>

              <h3 className="text-2xl font-bold text-[#2B2A35] tracking-tight mb-2">
                Join the modern creator platform
              </h3>
              <p className="text-sm text-[#6F7387] mb-6">
                Experience high-velocity campaigns without spreadsheet friction.
              </p>

              {/* Role Picker */}
              <div className="grid grid-cols-2 gap-2 bg-[#FAFAFC] p-1.5 rounded-[8px] border border-[#DDDDE5] mb-5">
                <button
                  type="button"
                  onClick={() => setUserRole("brand")}
                  className={`py-2 rounded-[6px] text-xs font-semibold transition-all cursor-pointer ${
                    userRole === "brand"
                      ? "bg-[#6B53FF] text-white shadow-xs"
                      : "text-[#6F7387] hover:text-[#2B2A35]"
                  }`}
                >
                  I&apos;m a Brand / Agency
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole("creator")}
                  className={`py-2 rounded-[6px] text-xs font-semibold transition-all cursor-pointer ${
                    userRole === "creator"
                      ? "bg-[#6B53FF] text-white shadow-xs"
                      : "text-[#6F7387] hover:text-[#2B2A35]"
                  }`}
                >
                  I&apos;m a Creator
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <input
                  type="text"
                  required
                  placeholder={
                    userRole === "brand"
                      ? "Brand or Agency Name"
                      : "Your Full Name / Handle"
                  }
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-4 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-sm text-[#2B2A35] outline-none focus:border-[#6B53FF] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Work or Creator Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-[6px] bg-[#FAFAFC] border border-[#DDDDE5] text-sm text-[#2B2A35] outline-none focus:border-[#6B53FF] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-[8px] bg-[#6B53FF] hover:bg-[#5840EE] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 shadow-[0_4px_16px_rgba(107,83,255,0.3)]"
                >
                  <span>Request Instant Workspace Access</span>
                  <ArrowRight size={15} />
                </button>
              </form>

              <div className="mt-5 pt-3 border-t border-[#DDDDE5] text-center text-xs text-[#6F7387]">
                Free 14-day trial • No credit card required • Instant setup
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
