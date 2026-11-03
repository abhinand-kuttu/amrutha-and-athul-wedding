"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, Heart, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { FloralDivider } from "./DecorativeMotif";

interface Blessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
}

const DEFAULT_BLESSINGS: Blessing[] = [
  {
    id: "1",
    name: "Raghav & Priya Sharma",
    relation: "Family Friends",
    message:
      "Wishing dearest Amrutha and Karthik a lifetime filled with eternal joy, harmonious laughter, and infinite love. Can't wait to celebrate!",
    date: "Just now",
  },
  {
    id: "2",
    name: "Dr. Ashwin & Vidya",
    relation: "Brother & Sister-in-law",
    message:
      "Welcome to our loving family, Amrutha! May Lord Ganesha shower your sacred union with peace, prosperity, and radiant health always.",
    date: "Yesterday",
  },
  {
    id: "3",
    name: "Ananya Rao",
    relation: "Sister",
    message:
      "My sweet sister Amrutha found her true soulmate in Karthik! So blessed and thrilled for this fairytale beginning.",
    date: "2 days ago",
  },
];

export default function RsvpBlessings() {
  const [blessings, setBlessings] = useState<Blessing[]>(DEFAULT_BLESSINGS);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "virtual">("attending");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wedding_blessings");
      if (saved) {
        setBlessings(JSON.parse(saved));
      }
    } catch {
      // LocalStorage not available or parse error
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation.trim() || "Well-Wisher",
      message: message.trim(),
      date: "Just now",
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem("wedding_blessings", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSubmitted(true);

    // Burst golden celebratory confetti
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.65 },
      colors: ["#D4AF37", "#BA9440", "#F5EED9", "#C77567"],
    });

    // Reset form after short time
    setTimeout(() => {
      setName("");
      setRelation("");
      setMessage("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-parchment overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#BA9440] font-semibold mb-2">
            Warm Wishes &amp; RSVP
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-[#3B2A22] font-bold">
            Blessings For The Couple
          </h2>
          <FloralDivider className="my-4 max-w-xs mx-auto" />
          <p className="font-serif italic text-base sm:text-lg text-[#765820] max-w-md mx-auto">
            Your sacred blessings and heartfelt words mean the world to Amrutha &amp; Karthik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-gold-frame shadow-royal">
            <div className="flex items-center gap-2 mb-4 text-[#BA9440]">
              <MessageSquareHeart className="w-5 h-5" />
              <h3 className="font-display text-xl text-[#3B2A22] font-bold">
                Send Your Blessings &amp; RSVP
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#BA9440] mx-auto animate-bounce" />
                <h4 className="font-display text-2xl text-[#3B2A22] font-bold">
                  Thank You For Your Blessing!
                </h4>
                <p className="font-serif italic text-sm text-[#765820]">
                  Your love and auspicious wishes have been warmly received with heartfelt gratitude.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#765820] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh & Sunita Rao"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#CCA83C]/40 text-[#3B2A22] text-sm focus:outline-none focus:border-[#BA9440] focus:ring-1 focus:ring-[#BA9440] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#765820] mb-1">
                    Relationship / Connection
                  </label>
                  <input
                    type="text"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    placeholder="e.g. Family Friend / Cousin / Colleague"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#CCA83C]/40 text-[#3B2A22] text-sm focus:outline-none focus:border-[#BA9440] focus:ring-1 focus:ring-[#BA9440] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#765820] mb-1">
                    Will You Grace Us With Your Presence?
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => setAttendance("attending")}
                      className={`py-2 px-3 rounded-xl border text-xs font-sans font-medium transition-colors ${
                        attendance === "attending"
                          ? "bg-[#F5EED9] border-[#BA9440] text-[#6B4F12] font-semibold"
                          : "bg-[#FAF7F2] border-[#CCA83C]/30 text-[#765820]"
                      }`}
                    >
                      Joyfully Attending 🎉
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("virtual")}
                      className={`py-2 px-3 rounded-xl border text-xs font-sans font-medium transition-colors ${
                        attendance === "virtual"
                          ? "bg-[#F5EED9] border-[#BA9440] text-[#6B4F12] font-semibold"
                          : "bg-[#FAF7F2] border-[#CCA83C]/30 text-[#765820]"
                      }`}
                    >
                      Sending Love From Afar ❤️
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#765820] mb-1">
                    Your Blessing or Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt congratulations and prayers for the couple..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#CCA83C]/40 text-[#3B2A22] text-sm focus:outline-none focus:border-[#BA9440] focus:ring-1 focus:ring-[#BA9440] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#BA9440] via-[#CCA83C] to-[#BA9440] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-gold hover:shadow-luxury transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Heartfelt Blessing</span>
                </button>
              </form>
            )}
          </div>

          {/* Wall of Blessings Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-xl text-[#3B2A22] font-bold flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-[#BA9440] fill-[#BA9440]" />
              <span>Well-Wishers&apos; Guestbook</span>
            </h3>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2">
              {blessings.map((b) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#CCA83C]/30 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-display font-bold text-sm text-[#3B2A22]">
                      {b.name}
                    </h4>
                    <span className="font-sans text-[10px] text-[#BA9440] uppercase tracking-wider bg-[#F5EED9] px-2 py-0.5 rounded-full">
                      {b.relation}
                    </span>
                  </div>
                  <p className="font-serif italic text-xs sm:text-sm text-[#6B4F12]/90 leading-relaxed">
                    &ldquo;{b.message}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
