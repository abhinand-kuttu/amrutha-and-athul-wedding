"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Calendar, Check, Send } from "lucide-react";
import confetti from "canvas-confetti";
import { weddingData } from "@/config/weddingData";
import { CornerBotanicalSprig } from "./BotanicalArt";

export default function CompanionStationery() {
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [attendance, setAttendance] = useState<"attending" | "regret">("attending");
  const [rsvpSent, setRsvpSent] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setRsvpSent(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FFFFFF", "#B89758", "#DFC692", "#6B7F68"],
    });

    setTimeout(() => {
      setName("");
      setRsvpSent(false);
    }, 4500);
  };

  return (
    <section id="reception-section" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-sage-silk overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#DFC692] font-semibold mb-2">
            The Wedding Itinerary &amp; RSVP
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#FFFFFF] font-bold">
            Thalikettu, Sadhya &amp; RSVP
          </h2>
          <p className="font-serif text-base text-[#DFC692] mt-1">
            താലിക്കെട്ട് • വിവാഹ സദ്യ
          </p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#DFC692] to-transparent mx-auto my-3" />
        </div>

        {/* Two Physical Stationery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Card 1: Ceremony & Feast Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#FBF9F4] rounded-2xl p-7 sm:p-9 shadow-2xl border border-[#B89758]/50 flex flex-col justify-between overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
            style={{
              boxShadow: "0 20px 45px -10px rgba(35, 48, 34, 0.4), 0 5px 15px -3px rgba(184, 151, 88, 0.2)",
            }}
          >
            {/* Fine Inset Gold Foil Border */}
            <div className="absolute inset-3 rounded-xl border border-[#B89758]/40 pointer-events-none" />

            {/* Corner Botanical Floral Artwork */}
            <div className="absolute left-1 bottom-1 pointer-events-none opacity-85">
              <CornerBotanicalSprig className="w-24 h-24" />
            </div>

            {/* Content */}
            <div className="relative z-10 pl-6 sm:pl-8">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-script text-4xl sm:text-5xl text-gold-foil font-normal leading-tight">
                  Ceremony &amp; Sadhya
                </h3>
              </div>
              <p className="font-serif text-sm font-semibold text-[#8F6D29]">
                താലിക്കെട്ട് &amp; വിവാഹ സദ്യ
              </p>

              <p className="font-serif italic text-xs sm:text-sm text-[#4A3D33] mt-2 mb-5">
                Join us for the sacred wedding ceremony followed by a grand traditional feast.
              </p>

              <div className="space-y-4 pt-1 text-[#3A2D23] font-serif">
                {/* Function 1: Thalikettu */}
                <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#B89758]/30">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6D29]">
                    <Clock className="w-3.5 h-3.5 text-[#5A6D57]" />
                    <span>09:30 AM – 10:30 AM (Muhurtham)</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#3A2D23] mt-0.5">
                    Thalikettu (താലിക്കെട്ട്)
                  </h4>
                  <p className="font-serif text-xs text-[#6B5A4B]">
                    Pallikkavu Temple Sannidhi (പള്ളിക്കാവ് ക്ഷേത്രസന്നിധിയിൽ)
                  </p>
                </div>

                {/* Function 2: Wedding Sadhya */}
                <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#B89758]/30">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6D29]">
                    <Calendar className="w-3.5 h-3.5 text-[#5A6D57]" />
                    <span>11:00 AM Onwards</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#3A2D23] mt-0.5">
                    Wedding Sadhya (വിവാഹ സദ്യ)
                  </h4>
                  <p className="font-serif text-xs text-[#6B5A4B]">
                    Pallikkavu Auditorium (പള്ളിക്കാവ് ഓഡിറ്റോറിയത്തിൽ)
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tag & Map Link */}
            <div className="relative z-10 pl-6 sm:pl-8 pt-5 mt-4 border-t border-[#B89758]/20 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#8F6D29] font-semibold">
                Traditional Kasavu
              </span>
              <a
                href={weddingData.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#B89758] hover:text-[#7D5E24] font-semibold transition-colors flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Venue Map &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: RSVP & Family Contacts Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative bg-[#FBF9F4] rounded-2xl p-7 sm:p-9 shadow-2xl border border-[#B89758]/50 flex flex-col justify-between overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
            style={{
              boxShadow: "0 20px 45px -10px rgba(35, 48, 34, 0.4), 0 5px 15px -3px rgba(184, 151, 88, 0.2)",
            }}
          >
            {/* Fine Inset Gold Foil Border */}
            <div className="absolute inset-3 rounded-xl border border-[#B89758]/40 pointer-events-none" />

            {/* Corner Botanical Floral Artwork */}
            <div className="absolute left-1 bottom-1 pointer-events-none opacity-85">
              <CornerBotanicalSprig className="w-24 h-24" />
            </div>

            <div className="relative z-10 pl-6 sm:pl-8">
              <h3 className="font-serif italic text-4xl sm:text-5xl text-gold-foil font-bold tracking-wider">
                RSVP
              </h3>

              <p className="font-serif italic text-xs sm:text-sm text-[#4A3D33] mt-1 mb-4">
                {weddingData.rsvp.deadline}
              </p>

              {/* Exact phone number from the card */}
              <div className="space-y-2.5 pt-1 text-[#3A2D23] font-sans">
                <a
                  href={`tel:${weddingData.rsvp.phone}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#E5ECE3] hover:bg-[#CCD7C9] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#5A6E58] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block text-[#263025]">{weddingData.rsvp.phone}</span>
                    <span className="text-[11px] text-[#4A5D48]">ഫോൺ വിളിക്കാൻ ഇവിടെ തൊടുക</span>
                  </div>
                </a>

                <div className="text-xs text-[#5A493B] font-serif space-y-1 pt-1">
                  <p>
                    <strong className="text-[#3A2D23]">Bride:</strong> Malil Puthenpura, Perumballoor, Muvattupuzha
                  </p>
                  <p>
                    <strong className="text-[#3A2D23]">Groom:</strong> Vadakkepandasseril, Chempu, Vaikom
                  </p>
                </div>
              </div>

              {/* Interactive RSVP Quick Form */}
              <div className="mt-4 pt-3 border-t border-[#B89758]/20">
                {rsvpSent ? (
                  <div className="py-2 text-center space-y-1">
                    <Check className="w-5 h-5 text-[#5A6D57] mx-auto" />
                    <p className="font-serif italic text-xs text-[#3A2D23] font-semibold">
                      Thank you! Your presence will be our greatest blessing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRsvpSubmit} className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name (പേര്)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#B89758]/40 text-xs text-[#3A2D23] focus:outline-none focus:border-[#B89758]"
                      />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#B89758]/40 text-xs text-[#3A2D23] focus:outline-none focus:border-[#B89758]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="Family">കുടുംബസമേതം (Family)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAttendance("attending")}
                        className={`flex-1 py-1 px-2 rounded-md text-[11px] font-sans transition-colors ${
                          attendance === "attending"
                            ? "bg-[#6B7F68] text-white font-semibold"
                            : "bg-[#E5ECE3] text-[#4A3D33]"
                        }`}
                      >
                        പങ്കെടുക്കും (Attending)
                      </button>
                      <button
                        type="button"
                        onClick={() => setAttendance("regret")}
                        className={`flex-1 py-1 px-2 rounded-md text-[11px] font-sans transition-colors ${
                          attendance === "regret"
                            ? "bg-[#6B7F68] text-white font-semibold"
                            : "bg-[#E5ECE3] text-[#4A3D33]"
                        }`}
                      >
                        സ്നേഹാശംസകൾ (Wishes)
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 rounded-full bg-gradient-to-r from-[#B89758] to-[#DFC692] text-[#2E241B] font-sans text-xs uppercase tracking-wider font-semibold shadow hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3 h-3" />
                      <span>Confirm Attendance</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="relative z-10 pl-6 sm:pl-8 pt-3 text-right">
              <span className="font-serif italic text-xs text-[#8C7A6B]">
                With love, Amrutha &amp; Athul
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
