"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Phone } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { CornerBotanicalSprig } from "./BotanicalArt";

export default function CoupleSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-sage-silk overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#DFC692] font-semibold mb-2">
            The Blessed Couple
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-[#FFFFFF] font-bold">
            Amrutha &amp; Athul
          </h2>
          <p className="font-serif text-lg text-[#DFC692] mt-1 font-semibold">
            അമൃത &amp; അതുൽ
          </p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#DFC692] to-transparent mx-auto my-3" />
          <p className="font-serif italic text-base sm:text-lg text-[#E4ECE3]/90 max-w-xl mx-auto">
            United in sacred matrimony with the divine blessings of our families.
          </p>
        </div>

        {/* Two Cathedral Arched Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Bride Card: Amrutha */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-[#FBF9F4] rounded-t-[140px] rounded-b-2xl p-8 sm:p-10 border border-[#B89758]/50 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-archCard"
          >
            <div className="absolute inset-3 rounded-t-[130px] rounded-b-xl border border-[#B89758]/35 pointer-events-none" />
            <CornerBotanicalSprig className="absolute bottom-2 left-2 w-20 h-20 opacity-75 pointer-events-none" />

            {/* Arch Silhouette Header */}
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 mt-4 mb-6 rounded-t-full rounded-b-xl p-2 bg-gradient-to-b from-[#8DA38A]/30 to-[#6B7F68]/20 border border-[#B89758]/50 shadow-inner flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-t-full rounded-b-lg bg-[#E5ECE3] flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <svg
                  viewBox="0 0 120 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-28 h-32 text-[#6B7F68]"
                >
                  <circle cx="60" cy="55" r="22" fill="#FAF8F3" stroke="#B89758" strokeWidth="1.5" />
                  <path d="M60 33 L60 45" stroke="#DFC692" strokeWidth="1.5" />
                  <circle cx="60" cy="46" r="2.5" fill="#8F6D29" />
                  <path
                    d="M40 50 C40 35 50 33 60 33 C70 33 80 35 80 50 C80 54 75 58 60 58 C45 58 40 54 40 50 Z"
                    fill="#3A2D23"
                  />
                  <circle cx="54" cy="58" r="3" stroke="#DFC692" strokeWidth="1" fill="none" />
                  <path d="M38 56 L36 62 L40 62 Z" fill="#B89758" />
                  <path d="M82 56 L80 62 L84 62 Z" fill="#B89758" />
                  <path d="M48 76 C54 82 66 82 72 76" stroke="#B89758" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 90 C42 85 58 84 88 95 L88 135 L32 135 Z" fill="#6B7F68" opacity="0.9" />
                  <path d="M32 90 L88 120" stroke="#DFC692" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span className="font-serif text-[11px] uppercase tracking-widest text-[#5A6E58] font-semibold mt-1">
                  The Bride (വധു)
                </span>
              </div>
            </div>

            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#8F6D29] font-semibold">
              The Bride
            </span>
            <h3 className="font-script text-4xl sm:text-5xl text-gold-foil font-normal mt-1 leading-tight">
              {weddingData.bride.nickname}
            </h3>
            <p className="font-serif text-lg text-[#6B5A4B] font-bold">
              {weddingData.bride.malayalamName}
            </p>

            {/* Exact Malayalam and English Parent Lineage from Card */}
            <div className="my-3 px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#B89758]/30 text-xs sm:text-sm font-serif text-[#5A493B] text-center space-y-1">
              <p className="font-bold text-[#3A2D23]">{weddingData.bride.malayalamParents}</p>
              <p className="text-[11px] text-[#736054] italic">({weddingData.bride.parents})</p>
              <div className="pt-1 flex items-center justify-center gap-1 text-[11px] text-[#5A6E58]">
                <MapPin className="w-3 h-3 text-[#B89758]" />
                <span>{weddingData.bride.houseName}, {weddingData.bride.place}</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] text-[#5A6E58] font-semibold">
                <Phone className="w-3 h-3 text-[#B89758]" />
                <a href={`tel:${weddingData.bride.phone}`} className="hover:underline">
                  {weddingData.bride.phone}
                </a>
              </div>
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-[#4E3E34] leading-relaxed mt-2 max-w-sm">
              &ldquo;{weddingData.bride.description}&rdquo;
            </p>
          </motion.div>

          {/* Groom Card: Athul */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-[#FBF9F4] rounded-t-[140px] rounded-b-2xl p-8 sm:p-10 border border-[#B89758]/50 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-archCard"
          >
            <div className="absolute inset-3 rounded-t-[130px] rounded-b-xl border border-[#B89758]/35 pointer-events-none" />
            <CornerBotanicalSprig className="absolute bottom-2 left-2 w-20 h-20 opacity-75 pointer-events-none" />

            <div className="relative w-40 h-48 sm:w-48 sm:h-56 mt-4 mb-6 rounded-t-full rounded-b-xl p-2 bg-gradient-to-b from-[#8DA38A]/30 to-[#6B7F68]/20 border border-[#B89758]/50 shadow-inner flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-t-full rounded-b-lg bg-[#E5ECE3] flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <svg
                  viewBox="0 0 120 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-28 h-32 text-[#6B7F68]"
                >
                  <path d="M30 40 C30 20 45 15 60 15 C75 15 90 20 90 40 C90 48 85 52 60 52 C35 52 30 48 30 40 Z" fill="#6B7F68" />
                  <path d="M32 35 C42 22 78 22 88 35" stroke="#DFC692" strokeWidth="2.5" />
                  <circle cx="60" cy="22" r="3" fill="#DFC692" />
                  <circle cx="60" cy="55" r="21" fill="#FAF8F3" stroke="#B89758" strokeWidth="1.5" />
                  <path d="M48 74 L60 84 L72 74 L76 135 L44 135 Z" fill="#FFFDF9" stroke="#B89758" strokeWidth="1.5" />
                  <circle cx="60" cy="92" r="1.8" fill="#B89758" />
                  <circle cx="60" cy="104" r="1.8" fill="#B89758" />
                  <circle cx="60" cy="116" r="1.8" fill="#B89758" />
                  <path d="M40 76 C36 90 34 110 32 135" stroke="#485846" strokeWidth="7" strokeLinecap="round" />
                  <path d="M80 76 C84 90 86 110 88 135" stroke="#485846" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <span className="font-serif text-[11px] uppercase tracking-widest text-[#5A6E58] font-semibold mt-1">
                  The Groom (വരൻ)
                </span>
              </div>
            </div>

            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#8F6D29] font-semibold">
              The Groom
            </span>
            <h3 className="font-script text-4xl sm:text-5xl text-gold-foil font-normal mt-1 leading-tight">
              {weddingData.groom.nickname}
            </h3>
            <p className="font-serif text-lg text-[#6B5A4B] font-bold">
              {weddingData.groom.malayalamName}
            </p>

            {/* Exact Malayalam and English Parent Lineage from Card */}
            <div className="my-3 px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#B89758]/30 text-xs sm:text-sm font-serif text-[#5A493B] text-center space-y-1">
              <p className="font-bold text-[#3A2D23]">{weddingData.groom.malayalamParents}</p>
              <p className="text-[11px] text-[#736054] italic">({weddingData.groom.parents})</p>
              <div className="pt-1 flex items-center justify-center gap-1 text-[11px] text-[#5A6E58]">
                <MapPin className="w-3 h-3 text-[#B89758]" />
                <span>{weddingData.groom.houseName}, {weddingData.groom.place}</span>
              </div>
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-[#4E3E34] leading-relaxed mt-2 max-w-sm">
              &ldquo;{weddingData.groom.description}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Center Heart Emblem */}
        <div className="flex justify-center -mt-6 sm:-mt-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF8F3] border border-[#B89758]/60 shadow-xl text-[#8F6D29]">
            <Heart className="w-4 h-4 fill-[#B89758] text-[#B89758] animate-pulse" />
            <span className="font-script text-2xl text-[#8F6D29]">Together forever ♡</span>
            <Heart className="w-4 h-4 fill-[#B89758] text-[#B89758] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
