"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, Copy, Check, CalendarPlus } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { CornerOrnament, FloralDivider } from "./DecorativeMotif";

export default function WeddingDetails() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `${weddingData.venue.name}, ${weddingData.venue.hall}, ${weddingData.venue.fullAddress}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const generateGoogleCalendarUrl = () => {
    const startTime = "20270214T034500Z"; // UTC approximation or based on weddingDate
    const endTime = "20270214T070000Z";
    const title = encodeURIComponent(`${weddingData.bride.fullName} & ${weddingData.groom.fullName}'s Wedding`);
    const details = encodeURIComponent(
      `Sacred Muhurtham & Wedding Ceremony of Amrutha and Karthik.\nTime: ${weddingData.muhurthamTime}\nVenue: ${weddingData.venue.name}`
    );
    const location = encodeURIComponent(`${weddingData.venue.name}, ${weddingData.venue.fullAddress}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  return (
    <section id="wedding-details" className="relative py-20 px-4 sm:px-6 bg-parchment overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#BA9440] font-semibold mb-2">
            Sacred Details &amp; Location
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-[#3B2A22] font-bold">
            The Wedding Ceremony
          </h2>
          <FloralDivider className="my-4 max-w-xs mx-auto" />
          <p className="font-serif italic text-base sm:text-lg text-[#765820]">
            We request the honour of your presence at the sacred Muhurtham
          </p>
        </div>

        {/* Master Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-12 border-gold-frame shadow-royal"
        >
          <CornerOrnament position="top-left" className="absolute top-3 left-3 w-10 h-10 opacity-70" />
          <CornerOrnament position="top-right" className="absolute top-3 right-3 w-10 h-10 opacity-70" />
          <CornerOrnament position="bottom-left" className="absolute bottom-3 left-3 w-10 h-10 opacity-70" />
          <CornerOrnament position="bottom-right" className="absolute bottom-3 right-3 w-10 h-10 opacity-70" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Date & Muhurtham */}
            <div className="space-y-6 md:border-r md:border-[#CCA83C]/30 md:pr-8">
              {/* Wedding Date */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EED9] border border-[#CCA83C]/50 flex items-center justify-center shrink-0 shadow-sm text-[#BA9440]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#BA9440] font-semibold">
                    Auspicious Date
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#3B2A22] font-bold mt-0.5">
                    {weddingData.weddingDateFormatted}
                  </h3>
                  <p className="font-serif italic text-sm text-[#765820] mt-0.5">
                    Magha Masa • Shukla Paksha
                  </p>
                </div>
              </div>

              {/* Muhurtham Time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EED9] border border-[#CCA83C]/50 flex items-center justify-center shrink-0 shadow-sm text-[#BA9440]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#BA9440] font-semibold">
                    Muhurtham Timing
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#3B2A22] font-bold mt-0.5">
                    {weddingData.muhurthamTime}
                  </h3>
                  <p className="font-serif italic text-sm text-[#765820] mt-0.5">
                    Reception: {weddingData.receptionTime}
                  </p>
                </div>
              </div>

              {/* Add to Calendar Button */}
              <div className="pt-2">
                <a
                  href={generateGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#CCA83C]/60 text-xs font-sans uppercase tracking-wider text-[#765820] font-semibold shadow-sm hover:bg-[#F5EED9] hover:border-[#BA9440] transition-colors"
                >
                  <CalendarPlus className="w-4 h-4 text-[#BA9440]" />
                  <span>Add To Google Calendar</span>
                </a>
              </div>
            </div>

            {/* Right Column: Venue & Address */}
            <div className="space-y-6 md:pl-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EED9] border border-[#CCA83C]/50 flex items-center justify-center shrink-0 shadow-sm text-[#BA9440]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#BA9440] font-semibold">
                    Wedding Venue
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#3B2A22] font-bold mt-0.5">
                    {weddingData.venue.name}
                  </h3>
                  <p className="font-serif text-sm font-semibold text-[#BA9440]">
                    {weddingData.venue.hall}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#6B4F12]/85 leading-relaxed mt-1">
                    {weddingData.venue.fullAddress}
                  </p>
                  {weddingData.venue.landmarks && (
                    <p className="font-sans text-[11px] text-[#765820]/80 italic mt-0.5">
                      Landmark: {weddingData.venue.landmarks}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons: Google Maps & Copy Address */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={weddingData.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#BA9440] to-[#CCA83C] text-white font-sans text-xs uppercase tracking-wider font-semibold shadow-gold hover:shadow-luxury transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] border border-[#CCA83C]/50 text-xs font-sans tracking-wider text-[#765820] font-semibold hover:bg-[#F5EED9] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#BA9440]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
