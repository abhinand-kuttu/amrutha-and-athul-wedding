"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/config/weddingData";
import { CornerOrnament, FloralDivider, KalashMotif } from "./DecorativeMotif";

export default function WeddingMessage() {
  return (
    <section id="wedding-message" className="relative py-20 px-4 sm:px-6 bg-parchment overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main Royal Invitation Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDF9] rounded-3xl p-8 sm:p-14 border-gold-frame shadow-royal text-center"
        >
          {/* Ornate Corner Elements */}
          <CornerOrnament position="top-left" className="absolute top-3 left-3 w-10 h-10 sm:w-14 sm:h-14 opacity-75" />
          <CornerOrnament position="top-right" className="absolute top-3 right-3 w-10 h-10 sm:w-14 sm:h-14 opacity-75" />
          <CornerOrnament position="bottom-left" className="absolute bottom-3 left-3 w-10 h-10 sm:w-14 sm:h-14 opacity-75" />
          <CornerOrnament position="bottom-right" className="absolute bottom-3 right-3 w-10 h-10 sm:w-14 sm:h-14 opacity-75" />

          {/* Kalash Icon */}
          <div className="flex justify-center mb-3">
            <KalashMotif className="w-12 h-12 text-[#CCA83C]" />
          </div>

          {/* Sacred Sanskrit Shloka Box */}
          <div className="max-w-xl mx-auto mb-6 px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#CCA83C]/30 text-[#8F6D17]">
            <p className="font-serif text-sm sm:text-base leading-relaxed tracking-wider whitespace-pre-line font-medium">
              {weddingData.traditionalHeader.shlokaSanskrit}
            </p>
          </div>

          <FloralDivider className="my-5" />

          {/* Heartfelt Invitation Message (Exact wording requested) */}
          <div className="max-w-2xl mx-auto space-y-4 my-6">
            <p className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] text-[#BA9440] font-semibold">
              Sacred Matrimonial Invitation
            </p>

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-3xl text-[#3B2A22] leading-relaxed font-normal">
              &ldquo;{weddingData.invitationMessage.mainBody}&rdquo;
            </blockquote>

            <p className="font-serif italic text-base sm:text-lg text-[#765820] pt-2">
              {weddingData.invitationMessage.subText}
            </p>
          </div>

          <FloralDivider className="my-5" />

          {/* Couple Signatures */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-2 font-script text-3xl sm:text-4xl text-[#BA9440]">
            <span>{weddingData.bride.fullName}</span>
            <span className="font-serif text-base text-[#CCA83C]">&amp;</span>
            <span>{weddingData.groom.fullName}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
