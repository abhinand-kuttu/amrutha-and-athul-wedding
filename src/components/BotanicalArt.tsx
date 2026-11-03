import React from "react";

// Left Border Botanical Vine with White Blossoms & Sage Eucalyptus
export function BotanicalVineLeft({ className = "w-24 sm:w-36 h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Soft Sage Leaf Gradient */}
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8DA38A" />
          <stop offset="50%" stopColor="#677C64" />
          <stop offset="100%" stopColor="#4A5C47" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B3C4B0" />
          <stop offset="70%" stopColor="#81967E" />
          <stop offset="100%" stopColor="#556952" />
        </linearGradient>
        {/* White Flower Petal Gradient */}
        <radialGradient id="petalWhite" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#FAF7F0" />
          <stop offset="100%" stopColor="#EAE3D2" />
        </radialGradient>
        {/* Gold Pistil Gradient */}
        <radialGradient id="goldPistil" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DFC692" />
          <stop offset="60%" stopColor="#B89758" />
          <stop offset="100%" stopColor="#7D5E24" />
        </radialGradient>
      </defs>

      {/* Main graceful vine stem */}
      <path
        d="M20 10 Q10 80 25 150 T15 260 T30 380 T15 490"
        stroke="#657A62"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M25 60 Q38 90 28 130 T40 220 T25 320 T35 440"
        stroke="#7A9177"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Eucalyptus Leaves cluster 1 (Top) */}
      <g transform="translate(18, 40) rotate(-25)">
        <path d="M0 0 C12 -8 24 -6 28 4 C24 12 10 14 0 0 Z" fill="url(#leafGrad1)" opacity="0.9" />
        <path d="M0 0 L20 2" stroke="#B3C4B0" strokeWidth="0.8" opacity="0.6" />
      </g>
      <g transform="translate(22, 65) rotate(35)">
        <path d="M0 0 C10 -6 20 -4 24 6 C20 12 8 12 0 0 Z" fill="url(#leafGrad2)" opacity="0.85" />
      </g>

      {/* White Blossom 1 (Top) */}
      <g transform="translate(30, 95)">
        {/* 5 Petals */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <path
            key={i}
            d="M0 0 C-6 -10 6 -14 12 -8 C14 -2 8 4 0 0 Z"
            fill="url(#petalWhite)"
            stroke="#D9CEBC"
            strokeWidth="0.5"
            transform={`rotate(${angle})`}
            filter="drop-shadow(0 1px 2px rgba(60,50,40,0.1))"
          />
        ))}
        <circle cx="0" cy="0" r="4.5" fill="url(#goldPistil)" />
        <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Baby's breath sprig */}
      <g transform="translate(38, 120)" opacity="0.85">
        <path d="M0 0 L15 -10 M15 -10 L25 -18 M15 -10 L22 -4 M0 0 L10 12" stroke="#8DA38A" strokeWidth="0.8" />
        <circle cx="25" cy="-18" r="2.2" fill="#FFFFFF" stroke="#CCD7C9" strokeWidth="0.5" />
        <circle cx="22" cy="-4" r="2" fill="#FFFFFF" stroke="#CCD7C9" strokeWidth="0.5" />
        <circle cx="10" cy="12" r="2.2" fill="#FFFFFF" stroke="#CCD7C9" strokeWidth="0.5" />
      </g>

      {/* Eucalyptus Leaves cluster 2 (Mid-High) */}
      <g transform="translate(20, 160) rotate(-40)">
        <path d="M0 0 C14 -10 28 -8 32 6 C28 16 12 16 0 0 Z" fill="url(#leafGrad1)" opacity="0.9" />
        <path d="M0 0 L24 2" stroke="#B3C4B0" strokeWidth="0.8" opacity="0.5" />
      </g>
      <g transform="translate(25, 185) rotate(45)">
        <path d="M0 0 C12 -8 24 -6 28 6 C22 14 10 14 0 0 Z" fill="url(#leafGrad2)" opacity="0.8" />
      </g>

      {/* Large White Blossom 2 (Center Left) */}
      <g transform="translate(32, 215)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <path
            key={i}
            d="M0 0 C-8 -14 8 -18 16 -10 C18 -2 10 6 0 0 Z"
            fill="url(#petalWhite)"
            stroke="#D9CEBC"
            strokeWidth="0.6"
            transform={`rotate(${angle})`}
            filter="drop-shadow(0 1px 3px rgba(60,50,40,0.12))"
          />
        ))}
        <circle cx="0" cy="0" r="5.5" fill="url(#goldPistil)" />
        <circle cx="0" cy="0" r="2" fill="#FFFFFF" opacity="0.95" />
      </g>

      {/* Baby's breath sprig 2 */}
      <g transform="translate(42, 250)" opacity="0.9">
        <path d="M0 0 L18 -8 M18 -8 L28 -14 M18 -8 L26 -2 M0 0 L14 10" stroke="#8DA38A" strokeWidth="0.8" />
        <circle cx="28" cy="-14" r="2.5" fill="#FFFFFF" stroke="#CCD7C9" strokeWidth="0.5" />
        <circle cx="26" cy="-2" r="2" fill="#FFFFFF" stroke="#CCD7C9" strokeWidth="0.5" />
        <circle cx="14" cy="10" r="2.2" fill="#FFFFFF" stroke="#CCD7C9" strokeWidth="0.5" />
      </g>

      {/* Leaves cluster 3 (Mid-Low) */}
      <g transform="translate(22, 290) rotate(-20)">
        <path d="M0 0 C14 -8 26 -6 30 6 C24 14 10 14 0 0 Z" fill="url(#leafGrad1)" opacity="0.9" />
      </g>
      <g transform="translate(26, 320) rotate(30)">
        <path d="M0 0 C12 -6 22 -4 26 6 C20 12 8 12 0 0 Z" fill="url(#leafGrad2)" opacity="0.85" />
      </g>

      {/* White Blossom 3 (Lower) */}
      <g transform="translate(30, 360)">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <path
            key={i}
            d="M0 0 C-6 -12 6 -16 14 -9 C16 -2 8 5 0 0 Z"
            fill="url(#petalWhite)"
            stroke="#D9CEBC"
            strokeWidth="0.5"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="4.8" fill="url(#goldPistil)" />
      </g>

      {/* Bottom Leaves & Baby's breath */}
      <g transform="translate(18, 410) rotate(-35)">
        <path d="M0 0 C12 -8 24 -6 28 4 C24 12 10 12 0 0 Z" fill="url(#leafGrad1)" opacity="0.8" />
      </g>
      <g transform="translate(24, 440) rotate(40)">
        <path d="M0 0 C10 -6 20 -4 24 6 C18 12 8 12 0 0 Z" fill="url(#leafGrad2)" opacity="0.85" />
      </g>
      <g transform="translate(32, 465)" opacity="0.85">
        <path d="M0 0 L12 -6 M12 -6 L20 -10 M0 0 L10 8" stroke="#8DA38A" strokeWidth="0.8" />
        <circle cx="20" cy="-10" r="2" fill="#FFFFFF" />
        <circle cx="10" cy="8" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// Delicate dangling vine on the right side of the arch
export function BotanicalVineRight({ className = "w-12 h-36" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 0 C45 30 40 70 48 110 T42 160"
        stroke="#B89758"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="48" cy="40" r="2.5" fill="#B89758" opacity="0.7" />
      <circle cx="43" cy="85" r="2" fill="#B89758" opacity="0.6" />
      <circle cx="46" cy="130" r="2.8" fill="#B89758" opacity="0.75" />
      <circle cx="42" cy="158" r="3.5" fill="#B89758" opacity="0.9" />
    </svg>
  );
}

// Gold Botanical Sprig (Exactly as engraved on the wax seal in the photo)
export function BotanicalSprigSeal({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sealGoldStem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D1" />
          <stop offset="50%" stopColor="#DFC692" />
          <stop offset="100%" stopColor="#9E7B35" />
        </linearGradient>
      </defs>
      {/* Central curved stem */}
      <path
        d="M24 38 C24 30 23 18 24 10"
        stroke="url(#sealGoldStem)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Leaves branching left & right */}
      <path d="M24 32 C18 30 16 26 17 24 C20 24 23 28 24 32 Z" fill="url(#sealGoldStem)" />
      <path d="M24 30 C30 28 32 24 31 22 C28 22 25 26 24 30 Z" fill="url(#sealGoldStem)" />
      <path d="M24 24 C17 22 15 18 16 16 C19 16 23 20 24 24 Z" fill="url(#sealGoldStem)" />
      <path d="M24 22 C31 20 33 16 32 14 C29 14 25 18 24 22 Z" fill="url(#sealGoldStem)" />
      <path d="M24 16 C18 14 17 11 18 9 C20 9 23 13 24 16 Z" fill="url(#sealGoldStem)" />
      <path d="M24 14 C30 12 31 9 30 7 C28 7 25 11 24 14 Z" fill="url(#sealGoldStem)" />
      {/* Tip leaf */}
      <path d="M24 10 C22 6 24 3 24 3 C24 3 26 6 24 10 Z" fill="url(#sealGoldStem)" />
    </svg>
  );
}

// Gold Diamond Ornament (♦ - - ♦ - - ♦) under "You Are Cordially Invited"
export function GoldDiamondOrnament({ className = "w-36 h-3" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#B89758]" />
      <span className="text-[#B89758] text-[9px] select-none">♦</span>
      <div className="h-[1px] w-6 bg-[#B89758]" />
      <span className="text-[#B89758] text-[11px] select-none">♦</span>
      <div className="h-[1px] w-6 bg-[#B89758]" />
      <span className="text-[#B89758] text-[9px] select-none">♦</span>
      <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#B89758]" />
    </div>
  );
}

// Corner Botanical sprig for Reception & RSVP companion cards
export function CornerBotanicalSprig({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 70 Q30 50 35 20 Q40 10 50 10" stroke="#7A9177" strokeWidth="1.2" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M22 55 C12 50 14 40 20 42 C24 44 26 52 22 55 Z" fill="#8DA38A" />
      <path d="M26 42 C34 36 36 28 30 28 C26 28 24 36 26 42 Z" fill="#677C64" />
      {/* Flower */}
      <g transform="translate(42, 16)">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <path
            key={i}
            d="M0 0 C-4 -8 4 -10 8 -5 C9 -1 5 3 0 0 Z"
            fill="#FFFFFF"
            stroke="#D9CEBC"
            strokeWidth="0.4"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="2.8" fill="#B89758" />
      </g>
    </svg>
  );
}
