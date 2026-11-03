"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { weddingData } from "@/config/weddingData";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(weddingData.weddingDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-sage-silk overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5ECE3]/90 border border-[#8DA38A]/50 text-[#374435] text-xs font-sans uppercase tracking-[0.25em] font-semibold mb-3 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-[#5A6D57]" />
          <span>Counting Down The Moments</span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl text-[#FFFFFF] font-bold">
          Until We Say &ldquo;Together Forever&rdquo;
        </h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#DFC692] to-transparent mx-auto my-3" />

        {timeLeft.isCompleted ? (
          <div className="py-8 px-6 rounded-2xl bg-[#FBF9F4] border border-[#B89758]/50 shadow-2xl max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-[#B89758] mx-auto mb-2 animate-bounce" />
            <h3 className="font-display text-2xl text-[#3A2D23] font-bold">
              The Auspicious Day Is Here!
            </h3>
            <p className="font-serif italic text-base text-[#6B5A4B] mt-1">
              Thank you for celebrating this sacred union with us at The Leela Kovalam.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-6">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group bg-[#FBF9F4] rounded-2xl p-4 sm:p-6 border border-[#B89758]/45 shadow-xl flex flex-col items-center justify-center hover:scale-[1.03] transition-all duration-300"
              >
                {/* Digits in gold foil style */}
                <span className="font-serif text-3xl sm:text-5xl font-bold text-[#3A2D23] tracking-tight">
                  {mounted ? String(unit.value).padStart(2, "0") : "00"}
                </span>

                <div className="w-8 h-[1px] bg-[#B89758]/50 my-2" />

                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#8F6D29]">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <p className="font-serif italic text-xs sm:text-sm text-[#E4ECE3]/85 mt-6">
          Every second brings us closer to a lifetime of togetherness by the sea
        </p>
      </div>
    </section>
  );
}
