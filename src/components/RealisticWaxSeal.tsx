"use client";

import React from "react";

interface RealisticWaxSealProps {
  className?: string;
  onClick?: () => void;
  isHovered?: boolean;
}

export default function RealisticWaxSeal({
  className = "w-16 h-16 sm:w-20 sm:h-20",
  onClick,
  isHovered = false,
}: RealisticWaxSealProps) {
  return (
    <div
      onClick={onClick}
      className={`relative select-none cursor-pointer filter transition-transform duration-300 ${
        isHovered ? "scale-105" : "scale-100"
      } ${className}`}
      style={{
        filter: "drop-shadow(0 10px 18px rgba(25, 35, 22, 0.55)) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.35))",
      }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Main molten gold wax body gradient */}
          <linearGradient id="waxBodyGrad" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#E5C782" />
            <stop offset="25%" stopColor="#C9A352" />
            <stop offset="60%" stopColor="#A88235" />
            <stop offset="100%" stopColor="#6E511A" />
          </linearGradient>

          {/* Specular gloss on top rim */}
          <linearGradient id="waxGlossGrad" x1="30%" y1="0%" x2="50%" y2="60%">
            <stop offset="0%" stopColor="#FFF4D6" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#DFC076" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B38E3D" stopOpacity="0" />
          </linearGradient>

          {/* Recessed stamp floor gradient */}
          <radialGradient id="recessedFloor" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#B59043" />
            <stop offset="65%" stopColor="#9C772F" />
            <stop offset="100%" stopColor="#664C17" />
          </radialGradient>

          {/* Raised relief botanical branch gradient */}
          <linearGradient id="reliefGold" x1="25%" y1="15%" x2="75%" y2="85%">
            <stop offset="0%" stopColor="#FFF2D1" />
            <stop offset="40%" stopColor="#DFC47E" />
            <stop offset="85%" stopColor="#A37F30" />
            <stop offset="100%" stopColor="#634B16" />
          </linearGradient>

          {/* Outer rim inner shadow filter */}
          <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset dx="-2" dy="-2" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
            <feFlood floodColor="#FFE8B3" floodOpacity="0.6" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* 1. Organic Molten Outer Wax Lip (Irregular poured wax shape) */}
        <path
          d="M 60 6 
             C 76 5, 92 12, 102 24 
             C 112 36, 116 52, 114 68 
             C 112 84, 102 98, 88 108 
             C 74 116, 54 117, 38 112 
             C 22 106, 10 94, 6 78 
             C 2 62, 5 44, 14 30 
             C 24 16, 42 7, 60 6 Z"
          fill="url(#waxBodyGrad)"
        />

        {/* Outer molten wax drip bulges on the edges */}
        <path
          d="M 88 106 C 94 112, 102 110, 99 100 C 96 92, 88 98, 88 106 Z"
          fill="#8A6722"
          opacity="0.9"
        />
        <path
          d="M 16 34 C 10 26, 6 36, 10 44 C 14 50, 20 42, 16 34 Z"
          fill="#B89445"
          opacity="0.8"
        />
        <path
          d="M 52 8 C 58 3, 68 4, 66 10 C 64 16, 50 14, 52 8 Z"
          fill="#E5C782"
          opacity="0.75"
        />

        {/* Realistic top glossy rim highlight arc */}
        <path
          d="M 22 36 C 32 18, 52 12, 74 12 C 90 12, 102 20, 106 32 C 98 22, 78 18, 54 20 C 36 22, 26 28, 22 36 Z"
          fill="url(#waxGlossGrad)"
          opacity="0.9"
        />

        {/* 2. Recessed Stamp Circle Floor (Depressed matrix) */}
        <circle
          cx="60"
          cy="60"
          r="41"
          fill="url(#recessedFloor)"
          stroke="#523B0F"
          strokeWidth="2"
        />

        {/* Pressed Stamp Inner Bevel Ring (Ridge) */}
        <circle
          cx="60"
          cy="60"
          r="38.5"
          fill="none"
          stroke="#73551A"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          opacity="0.65"
        />
        <circle
          cx="60"
          cy="60"
          r="36.5"
          fill="none"
          stroke="#DDBB6C"
          strokeWidth="0.8"
          opacity="0.5"
        />

        {/* 3. Embossed Botanical Olive / Eucalyptus Sprig (Relief with 3D shadow & highlight) */}
        <g id="botanical-relief" transform="translate(60, 60)">
          {/* Cast shadow under relief (Offset +1.5, +1.5 in dark brown) */}
          <g transform="translate(1.2, 1.6)" opacity="0.65">
            <path
              d="M 0 25 C 0 12 -2 -5 0 -22"
              stroke="#3D2B0B"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path d="M 0 16 C -8 13 -12 7 -10 3 C -5 4 0 10 0 16 Z" fill="#3D2B0B" />
            <path d="M 0 13 C 8 10 12 4 10 0 C 5 1 0 7 0 13 Z" fill="#3D2B0B" />
            <path d="M 0 4 C -9 1 -13 -5 -11 -9 C -6 -8 0 -2 0 4 Z" fill="#3D2B0B" />
            <path d="M 0 1 C 9 -2 13 -8 11 -12 C 6 -11 0 -5 0 1 Z" fill="#3D2B0B" />
            <path d="M 0 -8 C -8 -11 -11 -16 -9 -20 C -5 -19 0 -14 0 -8 Z" fill="#3D2B0B" />
            <path d="M 0 -11 C 8 -14 11 -19 9 -23 C 5 -22 0 -17 0 -11 Z" fill="#3D2B0B" />
            <path d="M 0 -22 C -3 -27 0 -31 0 -31 C 0 -31 3 -27 0 -22 Z" fill="#3D2B0B" />
          </g>

          {/* Main Gold Relief Botanical Sprig */}
          <path
            d="M 0 25 C 0 12 -2 -5 0 -22"
            stroke="url(#reliefGold)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          {/* Pairs of Leaves */}
          <path d="M 0 16 C -8 13 -12 7 -10 3 C -5 4 0 10 0 16 Z" fill="url(#reliefGold)" />
          <path d="M 0 13 C 8 10 12 4 10 0 C 5 1 0 7 0 13 Z" fill="url(#reliefGold)" />
          <path d="M 0 4 C -9 1 -13 -5 -11 -9 C -6 -8 0 -2 0 4 Z" fill="url(#reliefGold)" />
          <path d="M 0 1 C 9 -2 13 -8 11 -12 C 6 -11 0 -5 0 1 Z" fill="url(#reliefGold)" />
          <path d="M 0 -8 C -8 -11 -11 -16 -9 -20 C -5 -19 0 -14 0 -8 Z" fill="url(#reliefGold)" />
          <path d="M 0 -11 C 8 -14 11 -19 9 -23 C 5 -22 0 -17 0 -11 Z" fill="url(#reliefGold)" />
          <path d="M 0 -22 C -3 -27 0 -31 0 -31 C 0 -31 3 -27 0 -22 Z" fill="url(#reliefGold)" />

          {/* Light-catching micro highlights on upper left edges */}
          <path
            d="M -1 -22 L -1 25"
            stroke="#FFF8E7"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="-6" cy="7" r="1" fill="#FFF8E7" opacity="0.7" />
          <circle cx="6" cy="-4" r="1" fill="#FFF8E7" opacity="0.7" />
          <circle cx="-6" cy="-6" r="1" fill="#FFF8E7" opacity="0.7" />
          <circle cx="5" cy="-17" r="1" fill="#FFF8E7" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
