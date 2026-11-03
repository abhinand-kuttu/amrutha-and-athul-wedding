"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Phone, Check, RefreshCw } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { BotanicalSprigSeal, CornerBotanicalSprig } from "./BotanicalArt";

interface ClosingSectionProps {
  onReopenEnvelope: () => void;
}

export default function ClosingSection({ onReopenEnvelope }: ClosingSectionProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareWhatsApp = () => {
    const text = `🌸 You are cordially invited to celebrate the wedding of ${weddingData.bride.nickname} & ${weddingData.groom.nickname} (${weddingData.bride.malayalamName} & ${weddingData.groom.malayalamName}) on ${weddingData.weddingDateFormatted} at ${weddingData.venue.ceremonyName}, followed by Wedding Sadhya at ${weddingData.venue.receptionName}. Click to open digital invitation: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  return (
    <footer className="relative py-24 px-4 sm:px-6 bg-sage-silk overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Family Invitation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#FBF9F4] rounded-3xl p-8 sm:p-12 border border-[#B89758]/50 shadow-2xl mb-16 text-center overflow-hidden"
        >
          {/* Inset Gold Border */}
          <div className="absolute inset-3 rounded-2xl border border-[#B89758]/35 pointer-events-none" />
          <CornerBotanicalSprig className="absolute bottom-2 left-2 w-20 h-20 opacity-75 pointer-events-none" />
          <CornerBotanicalSprig className="absolute top-2 right-2 w-20 h-20 opacity-75 pointer-events-none rotate-180" />

          {/* Botanical Sprig Crest */}
          <div className="flex justify-center mb-3">
            <BotanicalSprigSeal className="w-10 h-10 text-[#B89758]" />
          </div>

          <p className="font-serif text-base text-[#8F6D29] font-bold tracking-wider mb-1">
            {weddingData.traditionalHeader.mangalyam}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#8F6D29] font-semibold mb-2">
            Warm Family Invitation
          </p>
          <h3 className="font-display text-2xl sm:text-4xl text-[#3A2D23] font-bold">
            With The Blessings of Our Families
          </h3>
          <p className="font-serif italic text-sm sm:text-base text-[#6B5A4B] mt-1 max-w-lg mx-auto">
            {weddingData.families.malayalamHostMessage}
          </p>
          <p className="font-serif italic text-xs text-[#736054] mt-0.5 max-w-lg mx-auto">
            ({weddingData.families.hostMessage})
          </p>

          <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#B89758] to-transparent mx-auto my-6" />

          {/* Families Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto pt-2">
            {/* Bride's Family */}
            <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#B89758]/30">
              <h4 className="font-serif font-bold text-base text-[#8F6D29] border-b border-[#B89758]/30 pb-2 mb-3">
                The Bride&apos;s Family (വധുവിന്റെ കുടുംബം)
              </h4>
              <div className="space-y-2 text-sm font-serif">
                <p className="font-bold text-[#3A2D23]">
                  {weddingData.bride.malayalamParents}
                </p>
                <p className="text-xs text-[#736054] italic">
                  {weddingData.bride.parents}
                </p>
                <p className="text-xs text-[#5A493B]">
                  <strong>House:</strong> {weddingData.bride.houseName}
                </p>
                <p className="text-xs text-[#5A493B]">
                  <strong>Place:</strong> {weddingData.bride.place}
                </p>
                <p className="text-xs text-[#5A6E58] font-semibold pt-1">
                  <strong>Phone:</strong> {weddingData.bride.phone}
                </p>
              </div>
            </div>

            {/* Groom's Family */}
            <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#B89758]/30">
              <h4 className="font-serif font-bold text-base text-[#8F6D29] border-b border-[#B89758]/30 pb-2 mb-3">
                The Groom&apos;s Family (വരന്റെ കുടുംബം)
              </h4>
              <div className="space-y-2 text-sm font-serif">
                <p className="font-bold text-[#3A2D23]">
                  {weddingData.groom.malayalamParents}
                </p>
                <p className="text-xs text-[#736054] italic">
                  {weddingData.groom.parents}
                </p>
                <p className="text-xs text-[#5A493B]">
                  <strong>House:</strong> {weddingData.groom.houseName}
                </p>
                <p className="text-xs text-[#5A493B]">
                  <strong>Place:</strong> {weddingData.groom.place}
                </p>
                <p className="text-xs text-[#736054] italic pt-1">
                  With blessings of relatives and dear ones
                </p>
              </div>
            </div>
          </div>

          {/* Direct Phone Call Banner */}
          <div className="mt-8 pt-6 border-t border-[#B89758]/20">
            <p className="font-sans text-xs uppercase tracking-wider text-[#8F6D29] font-semibold mb-3">
              Direct Contact &amp; RSVP
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-[#4A3D33]">
              <a
                href={`tel:${weddingData.rsvp.phone}`}
                className="flex items-center gap-2 bg-[#FAF8F3] px-5 py-2.5 rounded-xl border border-[#B89758]/40 hover:bg-[#E5ECE3] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5A6D57]" />
                <span>
                  <strong>Call Bride&apos;s Family:</strong> {weddingData.rsvp.phone}
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Heartfelt Thank You & Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-xl mx-auto"
        >
          <p className="font-serif italic text-base sm:text-lg text-[#E4ECE3]/90">
            &ldquo;{weddingData.closing.note}&rdquo;
          </p>

          <p className="font-serif text-sm sm:text-base text-[#FAF8F3] whitespace-pre-line leading-relaxed">
            {weddingData.closing.signOff}
          </p>

          <p className="font-script text-5xl sm:text-6xl text-gold-foil pt-2">
            {weddingData.bride.nickname} &amp; {weddingData.groom.nickname}
          </p>

          <p className="font-serif text-lg text-[#DFC692] font-semibold">
            {weddingData.bride.malayalamName} &amp; {weddingData.groom.malayalamName}
          </p>

          <p className="font-script text-2xl text-[#DFC692]">
            Together forever ♡
          </p>

          {/* Share Invitation & Re-open actions */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-6">
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-sans text-xs uppercase tracking-wider font-semibold shadow hover:bg-[#20ba59] transition-all active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share On WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F3] border border-[#B89758]/50 text-[#3A2D23] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#E5ECE3] transition-colors"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#5A6D57]" />
                  <span className="text-[#5A6D57]">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#B89758]" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>

            <button
              onClick={onReopenEnvelope}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E5ECE3]/80 border border-[#8DA38A]/50 text-[#283327] font-sans text-xs tracking-wider hover:bg-[#FAF8F3] transition-colors"
              title="Close and re-open the interactive 3D envelope"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#5A6D57]" />
              <span>Re-open Envelope</span>
            </button>
          </div>

          <p className="font-sans text-[11px] text-[#CCD7C9]/80 pt-6">
            {weddingData.venue.ceremonyName} • {weddingData.weddingDateFormatted}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
