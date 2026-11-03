import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/config/weddingData";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${weddingData.bride.nickname} & ${weddingData.groom.nickname} (${weddingData.bride.malayalamName} & ${weddingData.groom.malayalamName}) | Wedding Celebration`,
  description: `You are cordially invited to celebrate the auspicious wedding of ${weddingData.bride.fullName} and ${weddingData.groom.fullName} on ${weddingData.weddingDateFormatted} at ${weddingData.venue.ceremonyName}.`,
  openGraph: {
    title: `${weddingData.bride.nickname} & ${weddingData.groom.nickname} — Wedding Invitation`,
    description: `We joyfully invite you to celebrate our sacred wedding on ${weddingData.weddingDateFormatted}.`,
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} ${montserrat.variable}`}
    >
      <body className="font-serif antialiased bg-[#51634E] text-[#3A2D23] selection:bg-[#DFC692] selection:text-[#3A2D23] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
