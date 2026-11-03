"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Navigation, CalendarPlus } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import {
  BotanicalVineLeft,
  BotanicalVineRight,
  GoldDiamondOrnament,
} from "./BotanicalArt";
import { GaneshaMotif } from "./DecorativeMotif";

export default function WeddingHero() {
  const scrollToNext = () => {
    const el = document.getElementById("reception-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const generateGoogleCalendarUrl = () => {
    const startTime = "20261115T040000Z";
    const endTime = "20261115T083000Z";
    const title = encodeURIComponent(`${weddingData.bride.fullName} & ${weddingData.groom.fullName}'s Wedding`);
    const details = encodeURIComponent(
      `The Sacred Wedding Ceremony (Thalikettu) of Amrutha & Athul at Pallikkavu Temple Sannidhi, followed by Wedding Sadhya at Pallikkavu Auditorium.\nMuhurtham: 9:30 AM - 10:30 AM.`
    );
    const location = encodeURIComponent(`${weddingData.venue.ceremonyName}, ${weddingData.venue.fullAddress}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between py-10 sm:py-16 px-4 sm:px-6 bg-sage-silk overflow-hidden">
      {/* Background silk draping lighting */}
      <div className="absolute inset-0 bg-radial-pattern opacity-40 pointer-events-none" />

      {/* Centerpiece: The Exact Arched Cathedral Wedding Card */}
      <div className="relative z-10 w-full max-w-xl mx-auto my-auto pt-2 sm:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FBF9F4] rounded-t-[140px] sm:rounded-t-[220px] rounded-b-2xl shadow-2xl p-6 sm:p-12 text-center overflow-hidden border border-[#B89758]/40"
          style={{
            boxShadow: "0 25px 60px -10px rgba(35, 48, 34, 0.45), 0 10px 30px -5px rgba(184, 151, 88, 0.25)",
          }}
        >
          {/* Double Gold Foil Arched Inset Border */}
          <div className="absolute inset-3 sm:inset-5 rounded-t-[125px] sm:rounded-t-[200px] rounded-b-xl border border-[#B89758]/60 pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 rounded-t-[120px] sm:rounded-t-[195px] rounded-b-lg border border-[#B89758]/35 pointer-events-none" />

          {/* Botanical Floral Garland Climbing Left Edge (from reference photo) */}
          <div className="absolute -left-1 sm:left-1 top-0 bottom-0 pointer-events-none w-24 sm:w-36 opacity-95">
            <BotanicalVineLeft className="w-full h-full object-cover" />
          </div>

          {/* Delicate hanging gold vine on top right */}
          <div className="absolute right-4 sm:right-6 top-8 pointer-events-none opacity-80">
            <BotanicalVineRight className="w-10 sm:w-12 h-32" />
          </div>

          {/* Card Content Interior */}
          <div className="relative z-10 pl-10 sm:pl-20 pr-3 sm:pr-8 pt-4 sm:pt-8 flex flex-col items-center">
            {/* Auspicious Ganesha & Mangalyam Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col items-center mb-1"
            >
              <GaneshaMotif className="w-10 h-10 text-[#B89758] mb-1" />
              <span className="font-serif text-lg sm:text-xl font-bold text-[#8F6D29] tracking-wider">
                {weddingData.traditionalHeader.mangalyam}
              </span>
            </motion.div>

            {/* Header: You Are Cordially Invited */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-serif text-xs sm:text-sm tracking-[0.22em] text-[#5A493B] font-semibold uppercase mt-1"
            >
              You Are Cordially Invited
            </motion.p>

            {/* Diamond Separator (♦ - - ♦ - - ♦) */}
            <GoldDiamondOrnament className="my-2" />

            {/* Couple Names (Amrutha & Athul) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="my-1 sm:my-2"
            >
              <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-gold-foil font-normal leading-[0.95] drop-shadow-sm">
                {weddingData.bride.nickname}
              </h1>
              <span className="font-script text-2xl sm:text-3xl text-[#8F6D29] block my-0.5 select-none">
                &amp;
              </span>
              <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-gold-foil font-normal leading-[0.95] drop-shadow-sm">
                {weddingData.groom.nickname}
              </h1>

              {/* Malayalam Names from the Card */}
              <p className="font-serif text-base sm:text-lg text-[#6B5A4B] font-semibold mt-1">
                {weddingData.bride.malayalamName} <span className="text-[#B89758] font-normal italic">കൂടെ</span> {weddingData.groom.malayalamName}
              </p>
            </motion.div>

            {/* Heartfelt Invitation Message (Malayalam & English) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="my-3 sm:my-5 max-w-sm mx-auto space-y-2 text-[#4A3D33]"
            >
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-medium">
                &ldquo;{weddingData.invitationMessage.malayalamBody}&rdquo;
              </p>
              <p className="font-serif italic text-[11px] sm:text-xs text-[#6B5A4B] leading-relaxed">
                With the blessings of our families, we joyfully invite you to celebrate our sacred wedding union.
              </p>
            </motion.div>

            {/* 3-Column Date | Time | Venue Block (Exact match from the photo) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full max-w-md mx-auto my-2 sm:my-4 pt-3 border-t border-[#B89758]/30"
            >
              <div className="grid grid-cols-12 items-center gap-1 sm:gap-2 text-[#3A2D23]">
                {/* Column 1: Big Date */}
                <div className="col-span-4 text-center sm:text-right pr-2">
                  <span className="font-serif font-bold text-2xl sm:text-4xl text-[#3A2D23] block leading-none">
                    {weddingData.weddingDay}
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-[#6B5A4B] block leading-tight">
                    {weddingData.weddingMonth} 2026
                  </span>
                  <span className="font-serif text-[10px] sm:text-[11px] text-[#8C7A6B] block leading-none mt-0.5">
                    ഞായർ (തുലാം 29)
                  </span>
                </div>

                {/* Vertical Divider 1 */}
                <div className="col-span-1 flex justify-center">
                  <div className="h-12 w-[1px] bg-[#B89758]/60" />
                </div>

                {/* Column 2: Muhurtham Time */}
                <div className="col-span-3 text-center">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#3A2D23] block leading-tight">
                    {weddingData.muhurthamTime}
                  </span>
                  <span className="font-serif text-[10px] text-[#8F6D29] block mt-0.5">
                    മുഹൂർത്തം
                  </span>
                </div>

                {/* Vertical Divider 2 */}
                <div className="col-span-1 flex justify-center">
                  <div className="h-12 w-[1px] bg-[#B89758]/60" />
                </div>

                {/* Column 3: Venue */}
                <div className="col-span-3 text-left pl-1">
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#3A2D23] leading-tight">
                    Pallikkavu
                  </h3>
                  <p className="font-serif text-[10px] sm:text-[11px] text-[#6B5A4B] mt-0.5 leading-tight">
                    പള്ളിക്കാവ് ക്ഷേത്രം &amp; ഓഡിറ്റോറിയം
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Note: Together forever ♡ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-2 mb-1"
            >
              <p className="font-script text-2xl sm:text-3xl text-gold-foil font-normal">
                {weddingData.invitationMessage.togetherForever}
              </p>
            </motion.div>

            {/* Action Buttons on Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap justify-center items-center gap-2.5 mt-3 pt-3 border-t border-[#B89758]/20"
            >
              <a
                href={weddingData.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E5ECE3] border border-[#7A9177]/50 text-[#374435] font-sans text-[11px] font-semibold hover:bg-[#CCD7C9] transition-colors"
              >
                <Navigation className="w-3 h-3 text-[#5A6D57]" />
                <span>Google Maps Directions</span>
              </a>

              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#B89758]/50 text-[#7D5E24] font-sans text-[11px] font-semibold hover:bg-[#F5F0E6] transition-colors"
              >
                <CalendarPlus className="w-3 h-3 text-[#B89758]" />
                <span>Add To Calendar</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-1 text-[#E5ECE3] hover:text-[#FFFFFF] transition-colors pt-6 pb-2 cursor-pointer group"
        aria-label="Scroll to ceremony, feast and family details"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-semibold text-[#DFC692]">
          Ceremony, Feast &amp; RSVP
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
}
