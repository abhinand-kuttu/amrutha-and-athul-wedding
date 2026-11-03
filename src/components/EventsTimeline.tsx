"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Music, Sun, Heart, Shirt, Navigation } from "lucide-react";
import { weddingData, EventItem } from "@/config/weddingData";
import { CornerOrnament, FloralDivider } from "./DecorativeMotif";

export default function EventsTimeline() {
  const getEventIcon = (iconName: EventItem["iconName"]) => {
    switch (iconName) {
      case "sun":
        return <Sun className="w-5 h-5 text-[#BA9440]" />;
      case "music":
        return <Music className="w-5 h-5 text-[#BA9440]" />;
      case "ring":
        return <Heart className="w-5 h-5 text-[#BA9440]" />;
      case "sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-[#BA9440]" />;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#BA9440] font-semibold mb-2">
            Order of Celebrations
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-[#3B2A22] font-bold">
            Wedding Itinerary &amp; Events
          </h2>
          <FloralDivider className="my-4 max-w-xs mx-auto" />
          <p className="font-serif italic text-base sm:text-lg text-[#765820] max-w-lg mx-auto">
            Cherish every celebration, from vibrant yellow traditions to starry nights
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {weddingData.events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative group bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-gold-frame shadow-royal flex flex-col justify-between hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
            >
              <CornerOrnament position="top-right" className="absolute top-2 right-2 w-8 h-8 opacity-50" />
              <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 opacity-50" />

              <div>
                {/* Event Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F5EED9] border border-[#CCA83C]/40 flex items-center justify-center shadow-sm">
                    {getEventIcon(event.iconName)}
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#BA9440] font-semibold">
                      Event 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-[#3B2A22] font-bold leading-tight">
                      {event.name}
                    </h3>
                  </div>
                </div>

                <p className="font-serif italic text-sm text-[#765820] mb-4">
                  &ldquo;{event.subtitle}&rdquo;
                </p>

                <p className="font-sans text-xs sm:text-sm text-[#6B4F12]/85 leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              {/* Event Metadata (Date, Time, Venue, Dress Code) */}
              <div className="space-y-2.5 pt-4 border-t border-[#CCA83C]/20 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-[#765820]">
                  <Calendar className="w-4 h-4 text-[#BA9440] shrink-0" />
                  <span className="font-semibold">{event.date}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[#765820]">
                  <Clock className="w-4 h-4 text-[#BA9440] shrink-0" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-start gap-2.5 text-[#765820]">
                  <MapPin className="w-4 h-4 text-[#BA9440] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#3B2A22]">{event.venue}</strong>, {event.address}
                  </span>
                </div>

                {event.dressCode && (
                  <div className="flex items-center gap-2.5 pt-1 text-[#8F6D17]">
                    <Shirt className="w-4 h-4 text-[#BA9440] shrink-0" />
                    <span className="font-sans text-xs italic bg-[#F5EED9]/70 px-2.5 py-1 rounded-md border border-[#CCA83C]/30">
                      Attire: {event.dressCode}
                    </span>
                  </div>
                )}

                {/* Directions Link */}
                {event.googleMapsUrl && (
                  <div className="pt-2">
                    <a
                      href={event.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#BA9440] hover:text-[#765820] transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>View Map Directions &rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
