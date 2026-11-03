"use client";

import React, { useState } from "react";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import WeddingHero from "@/components/WeddingHero";
import CompanionStationery from "@/components/CompanionStationery";
import CoupleSection from "@/components/CoupleSection";
import CountdownTimer from "@/components/CountdownTimer";
import ClosingSection from "@/components/ClosingSection";
import FloatingPetals from "@/components/FloatingPetals";
import MusicPlayer from "@/components/MusicPlayer";

export default function WeddingInvitationPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-sage-silk text-[#3A2D23]">
      {/* Floating creamy white rose petals, baby's breath, and gold sparkles */}
      <FloatingPetals />

      {/* Background ambient traditional music player */}
      <MusicPlayer autoPlayTrigger={isEnvelopeOpen} />

      {/* Section 1: Opening Experience (Exact Sage Green Envelope with Gold Botanical Wax Seal) */}
      <EnvelopeOpening
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Main Wedding Invitation Suite Content */}
      <div
        className={`transition-opacity duration-1000 ${
          isEnvelopeOpen ? "opacity-100" : "opacity-0 pointer-events-none h-screen overflow-hidden"
        }`}
      >
        {/* Section 2: Main Arched Cathedral Wedding Card (Exact match to reference photo) */}
        <WeddingHero />

        {/* Section 3: Companion Cards (Reception Card & RSVP Card from reference photo) */}
        <CompanionStationery />

        {/* Section 4: Couple Details (Anusree & Arun in Arched Frames) */}
        <CoupleSection />

        {/* Section 5: Real-time Countdown Timer */}
        <CountdownTimer />

        {/* Section 6: Closing, Family Blessings & WhatsApp Sharing */}
        <ClosingSection onReopenEnvelope={handleReopenEnvelope} />
      </div>
    </main>
  );
}
