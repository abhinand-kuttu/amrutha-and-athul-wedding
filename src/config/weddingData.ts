/**
 * =========================================================================
 * WEDDING INVITATION CONFIGURATION (AUTHENTIC FAMILY DETAILS)
 * =========================================================================
 * Updated with exact details from the official invitation card for
 * Amrutha & Athul (അമൃത & അതുൽ).
 */

export interface EventItem {
  id: string;
  name: string;
  malayalamName?: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  malayalamVenue?: string;
  address: string;
  description: string;
  dressCode?: string;
  iconName: "ring" | "music" | "sparkles" | "heart" | "sun";
  googleMapsUrl: string;
}

export interface FamilyMember {
  relation: string;
  malayalamRelation?: string;
  names: string[];
  houseName?: string;
  place?: string;
  phone?: string;
}

export interface WeddingData {
  // Couple Information
  bride: {
    fullName: string;
    malayalamName: string;
    nickname: string;
    description: string;
    parents: string;
    malayalamParents: string;
    houseName: string;
    place: string;
    phone: string;
  };
  groom: {
    fullName: string;
    malayalamName: string;
    nickname: string;
    description: string;
    parents: string;
    malayalamParents: string;
    houseName: string;
    place: string;
    phone?: string;
  };

  // Main Wedding Muhurtham & Date
  weddingDate: string; // ISO date string for countdown
  weddingDateFormatted: string; // "Sunday, 15 November 2026"
  malayalamDateFormatted: string; // "നവംബർ 15, ഞായർ (തുലാം 29)"
  weddingDay: string; // "15"
  weddingMonth: string; // "Nov"
  weddingYear: string; // "2026"
  muhurthamTime: string; // "9:30 AM – 10:30 AM"
  malayalamMuhurthamTime: string; // "പകൽ 9.30 നും 10.30 നും ഇടയിൽ"
  receptionTime?: string; // "11:00 AM Onwards (Sadhya)"

  // Primary Venue Details
  venue: {
    name: string;
    hall: string;
    ceremonyName: string;
    malayalamCeremonyName: string;
    receptionName: string;
    malayalamReceptionName: string;
    fullAddress: string;
    city: string;
    state: string;
    googleMapsUrl: string;
    landmarks?: string;
  };

  // Auspicious Invocation
  traditionalHeader: {
    mangalyam: string;
    shlokaSanskrit: string;
    shlokaEnglish: string;
    translation: string;
    tagline: string;
  };

  // Wedding Invitation Message
  invitationMessage: {
    heading: string;
    openingQuote: string;
    mainBody: string;
    malayalamBody: string;
    subText: string;
    togetherForever: string;
  };

  // Detailed Events Timeline
  events: EventItem[];

  // Family Details
  families: {
    brideSide: FamilyMember[];
    groomSide: FamilyMember[];
    hostMessage: string;
    malayalamHostMessage: string;
  };

  // Closing, RSVP & Gratitude
  rsvp: {
    deadline: string;
    phone: string;
    email: string;
    contactPerson: string;
  };
  closing: {
    note: string;
    signOff: string;
    contactRsvp: {
      name: string;
      phone: string;
      relation: string;
    }[];
  };

  // Audio configuration
  music: {
    title: string;
    audioUrl: string;
    autoPlayPrompt: boolean;
    tracks: {
      id: string;
      title: string;
      subtitle: string;
      audioUrl: string;
    }[];
  };
}

export const weddingData: WeddingData = {
  // Couple Details (From Official Invitation Card)
  bride: {
    fullName: "Amrutha Biju",
    malayalamName: "അമൃത",
    nickname: "Amrutha",
    description:
      "Daughter of Late Sri. Biju M.N. & Smt. Bindu Biju, stepping into a lifetime of cherished love, joy and companionship.",
    parents: "D/o Late Sri. Biju M.N. & Smt. Bindu Biju",
    malayalamParents: "D/o ശ്രീ. ബിജു എം.എൻ (late) & ശ്രീമതി. ബിന്ദു ബിജു",
    houseName: "Malil Puthenpura (House)",
    place: "Perumballoor P.O., Muvattupuzha",
    phone: "+91 79943 13296",
  },
  groom: {
    fullName: "Athul Appukkuttan",
    malayalamName: "അതുൽ",
    nickname: "Athul",
    description:
      "Son of Sri. Appukkuttan & Smt. Radhika Appukkuttan, whose heart found its eternal compass and home in Amrutha.",
    parents: "S/o Sri. Appukkuttan & Smt. Radhika Appukkuttan",
    malayalamParents: "S/o ശ്രീ. അപ്പുക്കുട്ടൻ & ശ്രീമതി. രാധിക അപ്പുക്കുട്ടൻ",
    houseName: "Vadakkepandasseril (House)",
    place: "Chempu P.O., Vaikom",
    phone: "+91 79943 13296",
  },

  // Main Wedding Date (Sunday, 15 November 2026)
  weddingDate: "2026-11-15T09:30:00",
  weddingDateFormatted: "Sunday, 15 November 2026",
  malayalamDateFormatted: "15 നവംബർ 2026, ഞായർ (തുലാം 29)",
  weddingDay: "15",
  weddingMonth: "Nov",
  weddingYear: "2026",
  muhurthamTime: "9:30 AM – 10:30 AM",
  malayalamMuhurthamTime: "പകൽ 9.30 നും 10.30 നും ഇടയിൽ",
  receptionTime: "11:00 AM Onwards (Wedding Sadhya)",

  // Primary Venue Details
  venue: {
    name: "Pallikkavu Temple & Auditorium",
    hall: "Pallikkavu Auditorium (പള്ളിക്കാവ് ഓഡിറ്റോറിയം)",
    ceremonyName: "Pallikkavu Temple Sannidhi (താലിക്കെട്ട്)",
    malayalamCeremonyName: "പള്ളിക്കാവ് ക്ഷേത്രസന്നിധിയിൽ",
    receptionName: "Pallikkavu Auditorium (വിവാഹ സദ്യ)",
    malayalamReceptionName: "പള്ളിക്കാവ് ഓഡിറ്റോറിയം",
    fullAddress: "Pallikkavu Temple & Auditorium, Near Muvattupuzha, Kerala",
    city: "Muvattupuzha",
    state: "Kerala",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pallikkavu+Temple+Auditorium",
    landmarks: "Near Muvattupuzha & Perumballoor",
  },

  // Traditional Invocations
  traditionalHeader: {
    mangalyam: "മാംഗല്യം",
    shlokaSanskrit: "|| ॐ श्री गणेशाय नमः ||\nवक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaEnglish: "Om Sri Ganeshaya Namaha",
    translation: "Seeking divine blessings for eternal harmony, happiness and auspicious beginnings.",
    tagline: "You Are Cordially Invited",
  },

  // Heartfelt Invitation Message (Exact wording from both English and Malayalam on card)
  invitationMessage: {
    heading: "You Are Cordially Invited",
    openingQuote: "Two souls united in sacred holy matrimony with the grace of the divine.",
    mainBody:
      "With the blessings of our families and the love of those dear to us, we joyfully invite you to celebrate the sacred wedding ceremony of Amrutha & Athul and grace the auspicious wedding feast (Sadhya) with your warm presence.",
    malayalamBody:
      "വിവാഹത്തിലും തുടർന്ന് പള്ളിക്കാവ് ഓഡിറ്റോറിയത്തിൽ വെച്ച് നടക്കുന്ന വിവാഹ സദ്യയിൽ പങ്കുകൊള്ളുന്നതിനും താങ്കളെ കുടുംബസമേതം സ്നേഹപൂർവ്വം ക്ഷണിച്ചു കൊള്ളുന്നു.",
    subText:
      "Your loving presence and blessings will make our special day complete and unforgettable.",
    togetherForever: "Together forever ♡",
  },

  // Event Schedule Cards
  events: [
    {
      id: "thalikettu",
      name: "The Sacred Thalikettu Ceremony",
      malayalamName: "താലിക്കെട്ട്",
      subtitle: "The divine vows & tying of the sacred Mangalsutra",
      date: "Sunday, 15 November 2026 (തുലാം 29)",
      time: "9:30 AM – 10:30 AM (Muhurtham)",
      venue: "Pallikkavu Temple Sannidhi",
      malayalamVenue: "പള്ളിക്കാവ് ക്ഷേത്രസന്നിധിയിൽ",
      address: "Pallikkavu Temple, Kerala",
      description: "Join us in the divine presence of the temple deity as Amrutha & Athul exchange eternal vows.",
      dressCode: "Traditional Kerala Kasavu Mundu & Saree / Royal Ethnic",
      iconName: "ring",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pallikkavu+Temple+Auditorium",
    },
    {
      id: "sadhya",
      name: "Wedding Feast (വിവാഹ സദ്യ) & Reception",
      malayalamName: "വിവാഹ സദ്യ",
      subtitle: "Traditional grand Kerala feast and felicitations",
      date: "Sunday, 15 November 2026",
      time: "Following The Ceremony (11:00 AM Onwards)",
      venue: "Pallikkavu Auditorium",
      malayalamVenue: "പള്ളിക്കാവ് ഓഡിറ്റോറിയത്തിൽ",
      address: "Adjacent to Pallikkavu Temple, Kerala",
      description: "Celebrate with a sumptuous traditional Kerala Sadya served on fresh banana leaves with family and well-wishers.",
      dressCode: "Traditional Ethnic / Festive Wear",
      iconName: "sparkles",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pallikkavu+Temple+Auditorium",
    },
  ],

  // Family details (Exact Malayalam & English from the card)
  families: {
    hostMessage: "Cordially invited by both families with immense love and gratitude:",
    malayalamHostMessage: "താങ്കളെ കുടുംബസമേതം സ്നേഹപൂർവ്വം ക്ഷണിച്ചു കൊള്ളുന്നു",
    brideSide: [
      {
        relation: "Parents of the Bride",
        malayalamRelation: "മാതാപിതാക്കൾ",
        names: ["Smt. Bindu Biju & Late Sri. Biju M.N."],
        houseName: "Malil Puthenpura (House)",
        place: "Perumballoor P.O., Muvattupuzha",
        phone: "+91 79943 13296",
      },
      {
        relation: "With Love & Blessings",
        names: ["Relatives & Well-Wishers"],
      },
    ],
    groomSide: [
      {
        relation: "Parents of the Groom",
        malayalamRelation: "മാതാപിതാക്കൾ",
        names: ["Sri. Appukkuttan & Smt. Radhika Appukkuttan"],
        houseName: "Vadakkepandasseril (House)",
        place: "Chempu P.O., Vaikom",
      },
      {
        relation: "With Love & Blessings",
        names: ["Relatives & Well-Wishers"],
      },
    ],
  },

  // RSVP details from the card
  rsvp: {
    deadline: "Kindly bless us with your presence on 15 Nov 2026",
    phone: "+91 79943 13296",
    email: "amrutha.athul.wedding@gmail.com",
    contactPerson: "Bride's Family (Muvattupuzha)",
  },

  // Closing note
  closing: {
    note: "Your heartfelt prayers and presence are the greatest gifts to us.",
    signOff: "With immense love & warmest regards,\nAmrutha & Athul\nalong with their families",
    contactRsvp: [
      {
        name: "Malil Puthenpura (Bride's Residence)",
        phone: "+91 79943 13296",
        relation: "Perumballoor, Muvattupuzha",
      },
      {
        name: "Vadakkepandasseril (Groom's Residence)",
        phone: "+91 79943 13296",
        relation: "Chempu, Vaikom",
      },
    ],
  },

  // Ambient traditional wedding music (Sita Kalyanam by Agam - Trending Reels Cut)
  music: {
    title: "Sita Kalyanam (Trending Reel Portion)",
    audioUrl: "/audio/sita-kalyanam-agam.mp3",
    autoPlayPrompt: true,
    tracks: [
      {
        id: "agam-trending",
        title: "Sita Kalyanam (Trending Reel Portion)",
        subtitle: "Aasai Mugam & Sita Kalyana Vaibhogame • Agam",
        audioUrl: "/audio/sita-kalyanam-agam.mp3",
      },
      {
        id: "agam-chorus-drop",
        title: "Sita Kalyanam (Direct Chorus Drop)",
        subtitle: "Seetha Kalyana Vaibhogame Drop • Agam",
        audioUrl: "/audio/sita-kalyanam-chorus-drop.mp3",
      },
      {
        id: "agam-nadaswaram",
        title: "Nadaswaram Bridal Walk Entry",
        subtitle: "Tavil & Nadaswaram Rhythm Roll • Agam",
        audioUrl: "/audio/sita-kalyanam-nadaswaram-walk.mp3",
      },
      {
        id: "agam-full",
        title: "Walk of the Bride (Full 8-Min Track)",
        subtitle: "Complete Studio Master • Agam",
        audioUrl: "/audio/sita-kalyanam-full.mp3",
      },
      {
        id: "temple-chimes",
        title: "Kalyana Melam & Temple Chimes",
        subtitle: "Auspicious Kerala Temple Wedding Harmony",
        audioUrl: "/audio/wedding-chimes.wav",
      },
    ],
  },
};
