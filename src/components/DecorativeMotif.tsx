import React from "react";

// Auspicious Ganesha Motif in Gold Line Art
export function GaneshaMotif({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lord Ganesha Motif"
    >
      <defs>
        <linearGradient id="goldGradientGanesha" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB75A" />
          <stop offset="50%" stopColor="#BA9440" />
          <stop offset="100%" stopColor="#8A671E" />
        </linearGradient>
      </defs>
      {/* Crown / Mukut */}
      <path
        d="M50 12 L56 26 L50 24 L44 26 Z"
        fill="url(#goldGradientGanesha)"
      />
      <circle cx="50" cy="18" r="1.5" fill="#FAF7F2" />
      <path
        d="M38 30 C44 22 56 22 62 30 C58 32 42 32 38 30 Z"
        fill="url(#goldGradientGanesha)"
        opacity="0.9"
      />
      {/* Tilak */}
      <path
        d="M48 33 Q50 31 52 33 Q52 38 50 40 Q48 38 48 33 Z"
        fill="#C74545"
      />
      <circle cx="50" cy="35" r="1" fill="#DFB75A" />
      {/* Ears */}
      <path
        d="M38 33 C28 32 20 40 26 52 C32 60 38 52 40 45"
        stroke="url(#goldGradientGanesha)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M62 33 C72 32 80 40 74 52 C68 60 62 52 60 45"
        stroke="url(#goldGradientGanesha)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Head & Trunk gracefully curved */}
      <path
        d="M42 38 C42 38 43 55 45 62 C46 66 48 70 53 70 C57 70 59 66 59 62 C59 58 55 57 53 60 C52 62 53 64 55 64"
        stroke="url(#goldGradientGanesha)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Modak in trunk */}
      <circle cx="61" cy="58" r="3" fill="url(#goldGradientGanesha)" />
      {/* Tusk */}
      <path
        d="M40 48 L35 50"
        stroke="url(#goldGradientGanesha)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Decorative Halo / Arch */}
      <path
        d="M26 65 C22 45 30 20 50 18 C70 20 78 45 74 65"
        stroke="url(#goldGradientGanesha)"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.6"
      />
    </svg>
  );
}

// Ornate Mandala Centerpiece
export function MandalaMotif({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradientMandala" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6CA65" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#8F6D17" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" stroke="url(#goldGradientMandala)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="100" cy="100" r="75" stroke="url(#goldGradientMandala)" strokeWidth="1.2" opacity="0.7" />
      <circle cx="100" cy="100" r="60" stroke="url(#goldGradientMandala)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="16" fill="url(#goldGradientMandala)" opacity="0.25" />
      <circle cx="100" cy="100" r="8" fill="url(#goldGradientMandala)" />

      {/* 8 radiating lotus petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
        <g key={idx} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 40 C92 60 92 80 100 90 C108 80 108 60 100 40 Z"
            fill="none"
            stroke="url(#goldGradientMandala)"
            strokeWidth="1.5"
          />
          <circle cx="100" cy="35" r="2.5" fill="url(#goldGradientMandala)" />
          <path
            d="M96 65 Q100 50 104 65"
            stroke="url(#goldGradientMandala)"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* 8 secondary soft petals */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, idx) => (
        <g key={`sec-${idx}`} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 55 C96 70 96 82 100 88 C104 82 104 70 100 55 Z"
            fill="none"
            stroke="url(#goldGradientMandala)"
            strokeWidth="1"
            opacity="0.8"
          />
          <circle cx="100" cy="50" r="1.5" fill="url(#goldGradientMandala)" />
        </g>
      ))}
    </svg>
  );
}

// Ornate Corner Flourish for luxury cards
export function CornerOrnament({
  className = "w-16 h-16",
  position = "top-left",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotation = {
    "top-left": "rotate(0deg)",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(270deg)",
  }[position];

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: rotation }}
    >
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB75A" />
          <stop offset="100%" stopColor="#99752D" />
        </linearGradient>
      </defs>
      <path
        d="M4 4 L40 4 C24 4 10 16 8 32 C6 44 4 52 4 60"
        stroke="url(#cornerGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 4 L4 40 C4 24 16 10 32 8 C44 6 52 4 60 4"
        stroke="url(#cornerGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 10 Q28 12 36 28 Q40 40 42 46"
        stroke="url(#cornerGold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="14" cy="14" r="2.5" fill="url(#cornerGold)" />
      <circle cx="28" cy="8" r="1.5" fill="url(#cornerGold)" />
      <circle cx="8" cy="28" r="1.5" fill="url(#cornerGold)" />
      <path
        d="M20 20 C24 14 30 16 28 22 C26 26 20 26 20 20 Z"
        fill="url(#cornerGold)"
        opacity="0.75"
      />
    </svg>
  );
}

// Royal Divider Flourish
export function FloralDivider({ className = "w-full max-w-xs" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-3 my-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CCA83C] to-transparent opacity-60" />
      <div className="flex items-center space-x-1.5 text-[#CCA83C]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#BA9440]" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#CCA83C]"
        >
          <path
            d="M12 2 C12 7 7 12 2 12 C7 12 12 17 12 22 C12 17 17 12 22 12 C17 12 12 7 12 2 Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-[#BA9440]" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CCA83C] to-transparent opacity-60" />
    </div>
  );
}

// Auspicious Kalash Motif
export function KalashMotif({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5EED9" />
          <stop offset="40%" stopColor="#CBAC63" />
          <stop offset="100%" stopColor="#765820" />
        </linearGradient>
      </defs>
      {/* Coconut on top */}
      <ellipse cx="32" cy="18" rx="8" ry="11" fill="url(#kalashGold)" opacity="0.9" />
      {/* Mango leaves */}
      <path d="M32 18 C24 12 18 16 16 24 C22 22 28 22 32 24 Z" fill="url(#kalashGold)" opacity="0.75" />
      <path d="M32 18 C40 12 46 16 48 24 C42 22 36 22 32 24 Z" fill="url(#kalashGold)" opacity="0.75" />
      {/* Pot neck */}
      <path d="M25 25 H39 L42 29 H22 L25 25 Z" fill="url(#kalashGold)" />
      {/* Pot belly */}
      <path
        d="M22 29 C14 36 16 49 24 53 H40 C48 49 50 36 42 29 Z"
        fill="url(#kalashGold)"
      />
      {/* Swastik / Sacred symbol on pot */}
      <circle cx="32" cy="41" r="3" fill="#FAF7F2" opacity="0.8" />
      {/* Base */}
      <path d="M26 53 H38 L40 56 H24 L26 53 Z" fill="url(#kalashGold)" />
    </svg>
  );
}
