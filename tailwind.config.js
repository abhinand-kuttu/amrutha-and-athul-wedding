/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F4F6F3",
          100: "#E5ECE3",
          200: "#CCD7C9",
          300: "#A8BCA4",
          400: "#869E81",
          500: "#6B7F68", // Envelope sage
          600: "#5A6D57", // Deep sage
          700: "#485846", // Silk shadow
          800: "#374435",
          900: "#263025",
        },
        ivory: {
          DEFAULT: "#FAF8F3",
          card: "#FBF9F4",
          linen: "#F5F0E6",
          dark: "#EAE3D4",
        },
        gold: {
          foil: "#B89758",
          light: "#DFC692",
          DEFAULT: "#C5A059",
          dark: "#8F6D29",
          shimmer: "#F4E3BD",
        },
        charcoal: {
          DEFAULT: "#3A2D23",
          soft: "#4E3E34",
          muted: "#736054",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Playfair Display", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "sage-silk": "linear-gradient(135deg, #586B55 0%, #6A7E67 22%, #4E5F4B 45%, #71866E 68%, #51624E 100%)",
        "gold-foil-gradient": "linear-gradient(135deg, #A88647 0%, #C9A86A 35%, #F0D9A6 55%, #B89758 75%, #7D5E24 100%)",
        "paper-texture": "radial-gradient(circle, rgba(184, 151, 88, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        envelope: "0 25px 60px -15px rgba(38, 48, 37, 0.4), 0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        archCard: "0 20px 50px -10px rgba(58, 45, 35, 0.15), 0 10px 25px -5px rgba(184, 151, 88, 0.15)",
        waxSeal: "0 8px 20px -3px rgba(90, 60, 15, 0.4), inset 0 2px 4px rgba(255, 235, 170, 0.4)",
      },
      borderRadius: {
        arch: "180px",
        "arch-lg": "240px",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gentleFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        gentleFloat: "gentleFloat 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
