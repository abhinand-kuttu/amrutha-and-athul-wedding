"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, MailOpen } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { BotanicalVineLeft, GoldDiamondOrnament } from "./BotanicalArt";
import RealisticWaxSeal from "./RealisticWaxSeal";

interface EnvelopeOpeningProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function EnvelopeOpening({ onOpen, isOpen }: EnvelopeOpeningProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Burst celebration white petals and golden sparkles
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FFFFFF", "#FAF8F3", "#B89758", "#DFC692", "#6B7F68", "#8DA38A", "#FFF3D1"],
      disableForReducedMotion: true,
    });

    // Timing to allow realistic flap unfold and card glide
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="opening-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-sage-silk overflow-hidden"
        >
          {/* Subtle silk satin wave lines and organic drapery in background */}
          <div className="absolute inset-0 bg-radial-pattern opacity-40 pointer-events-none" />

          {/* Decorative Corner White Flower & Leaves (Mimicking the reference photo flat-lay) */}
          <div className="absolute top-2 left-2 sm:top-6 sm:left-6 w-32 sm:w-48 pointer-events-none opacity-80 select-none">
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Eucalyptus branch */}
              <path d="M 10 10 Q 50 40 110 90" stroke="#7E947A" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 30 20 C 40 10 60 15 55 35 C 45 45 25 35 30 20 Z" fill="#6B8067" opacity="0.85" />
              <path d="M 60 45 C 75 35 90 45 80 65 C 70 75 50 60 60 45 Z" fill="#5A6E58" opacity="0.9" />
              <path d="M 90 70 C 105 60 120 70 115 88 C 100 95 85 85 90 70 Z" fill="#7E947A" opacity="0.85" />
              {/* White rose bloom */}
              <circle cx="45" cy="45" r="24" fill="#FBF9F4" filter="drop-shadow(0 4px 10px rgba(25,35,22,0.3))" />
              <circle cx="45" cy="45" r="16" fill="#FFFDF9" stroke="#E5DEC9" strokeWidth="1" />
              <circle cx="45" cy="45" r="8" fill="#F4EDE0" />
            </svg>
          </div>

          <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 w-32 sm:w-48 pointer-events-none opacity-80 select-none rotate-180">
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 10 Q 50 40 110 90" stroke="#7E947A" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 30 20 C 40 10 60 15 55 35 C 45 45 25 35 30 20 Z" fill="#6B8067" opacity="0.85" />
              <path d="M 60 45 C 75 35 90 45 80 65 C 70 75 50 60 60 45 Z" fill="#5A6E58" opacity="0.9" />
              <circle cx="45" cy="45" r="24" fill="#FBF9F4" filter="drop-shadow(0 4px 10px rgba(25,35,22,0.3))" />
              <circle cx="45" cy="45" r="16" fill="#FFFDF9" stroke="#E5DEC9" strokeWidth="1" />
            </svg>
          </div>

          {/* Main Envelope Presentation Container */}
          <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
            {/* Header Text Above Envelope */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-center mb-5"
            >
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#E5ECE3]/25 border border-[#DFC692]/40 mb-1.5 backdrop-blur-sm">
                <span className="font-serif text-xs text-[#DFC692] tracking-widest uppercase font-semibold">
                  {weddingData.traditionalHeader.mangalyam} • Mangalyam
                </span>
              </div>
              <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#DFC692] font-medium mb-1 drop-shadow-sm">
                You Are Cordially Invited
              </p>
              <h1 className="font-script text-4xl sm:text-5xl text-[#FFFFFF] drop-shadow-md">
                {weddingData.bride.nickname} &amp; {weddingData.groom.nickname}
              </h1>
              <p className="font-serif text-sm sm:text-base text-[#DFC692] font-semibold mt-0.5">
                അമൃത &amp; അതുൽ
              </p>
            </motion.div>

            {/* Hyper-Realistic Sage Green Envelope Matching Reference Photo */}
            <div className="relative w-full aspect-[16/11] max-w-[490px] perspective-1000 my-2 select-none">
              {/* Outer Envelope Wrapper with Physical Paper Shadow */}
              <div className="relative w-full h-full rounded-2xl bg-envelope-paper shadow-envelope-3d border border-[#7A9177]/45 overflow-visible transform-style-3d">
                
                {/* 1. Envelope Interior Pocket Lining (Darker sage paper recessed inside) */}
                <div className="absolute inset-1 rounded-2xl bg-envelope-pocket overflow-hidden">
                  {/* Subtle paper grain texture */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  />
                  {/* Deep pocket shadow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 2. The Rising Cathedral Arched Card (Inside the pocket) */}
                <motion.div
                  initial={false}
                  animate={
                    isOpening
                      ? { y: -195, scale: 1.04, opacity: 1, zIndex: 25 }
                      : { y: 0, scale: 0.95, opacity: 0.94, zIndex: 10 }
                  }
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-5 inset-y-2 rounded-t-[140px] rounded-b-xl bg-[#FBF9F4] double-gold-arch-border p-5 shadow-2xl flex flex-col items-center justify-between text-center overflow-hidden"
                >
                  {/* Left Botanical Floral Vine on Card */}
                  <div className="absolute -left-2 top-0 bottom-0 pointer-events-none w-20 sm:w-28 opacity-90">
                    <BotanicalVineLeft className="w-full h-full object-cover" />
                  </div>

                  <div className="relative z-10 pt-3 pl-8">
                    <span className="font-serif text-[11px] tracking-[0.2em] uppercase text-[#6B5A4B] font-semibold">
                      You Are Cordially Invited
                    </span>
                    <GoldDiamondOrnament className="my-1.5" />
                    <h2 className="font-script text-3xl sm:text-4xl text-[#B89758] mt-1 font-normal leading-tight">
                      {weddingData.bride.nickname}
                    </h2>
                    <span className="font-script text-xl text-[#7D5E24] block -my-1">&amp;</span>
                    <h2 className="font-script text-3xl sm:text-4xl text-[#B89758] font-normal leading-tight">
                      {weddingData.groom.nickname}
                    </h2>
                    <p className="font-serif text-xs text-[#736054] mt-0.5 font-semibold">
                      (അമൃത &amp; അതുൽ)
                    </p>
                  </div>

                  <div className="relative z-10 pl-8 pb-2">
                    <p className="font-serif italic text-xs text-[#736054]">
                      {weddingData.weddingDateFormatted}
                    </p>
                    <p className="font-sans text-[11px] text-[#4E3E34] font-medium mt-0.5">
                      Pallikkavu Temple &amp; Auditorium
                    </p>
                    <p className="font-script text-lg text-[#B89758] mt-1">
                      Together forever ♡
                    </p>
                  </div>
                </motion.div>

                {/* 3. Envelope Left & Right Side Flaps (Underneath bottom flap) */}
                {/* Left Side Flap */}
                <div
                  className="absolute inset-0 pointer-events-none z-15"
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 52% 52%)",
                    backgroundColor: "#52684F",
                    borderTopLeftRadius: "1rem",
                    borderBottomLeftRadius: "1rem",
                    boxShadow: "inset 0 0 25px rgba(20, 30, 18, 0.45)",
                  }}
                />

                {/* Right Side Flap */}
                <div
                  className="absolute inset-0 pointer-events-none z-15"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 48% 52%)",
                    backgroundColor: "#52684F",
                    borderTopRightRadius: "1rem",
                    borderBottomRightRadius: "1rem",
                    boxShadow: "inset 0 0 25px rgba(20, 30, 18, 0.45)",
                  }}
                />

                {/* 4. Envelope Bottom Flap (Overlaps side flaps, creating realistic V-pocket) */}
                <div
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    clipPath: "polygon(0 100%, 100% 100%, 50% 48%)",
                    backgroundColor: "#5E745B",
                    borderBottomLeftRadius: "1rem",
                    borderBottomRightRadius: "1rem",
                    boxShadow: "0 -4px 15px rgba(15, 25, 14, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
                  }}
                >
                  {/* Diagonal cut micro-highlights along the bottom flap edges */}
                  <div className="absolute inset-0 border-t border-[#8DA38A]/35" />
                </div>

                {/* 5. Envelope Top Triangular Flap (3D opening fold) */}
                <motion.div
                  initial={false}
                  animate={
                    isOpening
                      ? { rotateX: 180, zIndex: 5 }
                      : { rotateX: 0, zIndex: 30 }
                  }
                  transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    transformOrigin: "top center",
                    clipPath: "polygon(0 0, 100% 0, 50% 64%)",
                  }}
                  className="absolute inset-x-0 top-0 h-[100%] bg-gradient-to-b from-[#698166] via-[#5F765C] to-[#546A52] shadow-flap-down flex items-center justify-center backface-hidden cursor-pointer"
                  onClick={handleOpenClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Top crease realistic 1px paper fold highlight */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/30" />

                  {/* Diagonal cut paper edge thickness highlights */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-80"
                    style={{
                      backgroundImage: `
                        linear-gradient(125deg, transparent 48%, rgba(255,255,255,0.2) 49%, rgba(0,0,0,0.3) 52%, transparent 54%)
                      `,
                    }}
                  />
                </motion.div>

                {/* 6. Photorealistic Poured Gold Wax Seal (Right over the flap tip) */}
                <motion.div
                  initial={false}
                  animate={
                    isOpening
                      ? { scale: 0, opacity: 0, rotate: -15 }
                      : { scale: 1, opacity: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.45 }}
                  className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 z-35"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <RealisticWaxSeal
                    onClick={handleOpenClick}
                    isHovered={isHovered}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </motion.div>
              </div>
            </div>

            {/* Interactive Call-To-Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 text-center"
            >
              <button
                onClick={handleOpenClick}
                disabled={isOpening}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B89758] via-[#DFC692] to-[#B89758] text-[#2E241B] font-serif font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none overflow-hidden"
              >
                {/* Shimmer sweep */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <MailOpen className="w-4 h-4 text-[#2E241B] group-hover:scale-110 transition-transform" />
                <span>{isOpening ? "Opening Envelope..." : "Touch Seal To Open"}</span>
                <Sparkles className="w-4 h-4 text-[#2E241B] animate-pulse" />
              </button>

              <p className="font-serif italic text-xs text-[#E5ECE3]/85 mt-2.5">
                Press the golden botanical seal or button to reveal the invitation
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
