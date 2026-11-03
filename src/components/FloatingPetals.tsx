"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: "whiteRose" | "goldDust" | "babysBreath";
}

export default function FloatingPetals() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const petalColors = [
      "rgba(255, 255, 255, 0.9)", // Pure white rose petal
      "rgba(251, 248, 240, 0.85)", // Creamy ivory petal
      "rgba(245, 240, 230, 0.75)", // Linen warm white
      "rgba(223, 198, 146, 0.65)", // Subtle antique gold shimmer
    ];

    const petalCount = Math.min(Math.floor(width / 40), 38);
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const isGold = Math.random() < 0.25;
      const isBabysBreath = Math.random() < 0.35;
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? Math.random() * 2.5 + 1.2 : isBabysBreath ? Math.random() * 3 + 2 : Math.random() * 9 + 8,
        speedX: Math.random() * 0.8 - 0.35,
        speedY: Math.random() * 1.0 + 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.45 + 0.35,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        type: isGold ? "goldDust" : isBabysBreath ? "babysBreath" : "whiteRose",
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y / 45) * 0.7 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === "goldDust") {
          // Shimmering gold sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = "#DFC692";
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#B89758";
          ctx.fill();
        } else if (p.type === "babysBreath") {
          // Delicate little baby's breath floret
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowBlur = 2;
          ctx.shadowColor = "rgba(255,255,255,0.6)";
          ctx.fill();
        } else {
          // White rose curved petal
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
          ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 3;
          ctx.shadowColor = "rgba(40, 55, 38, 0.15)";
          ctx.fill();
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
