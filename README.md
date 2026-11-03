# 👑 Amrutha & Karthik — Luxury Digital Wedding Invitation Website

A luxury, interactive Indian digital wedding invitation crafted with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Canvas Confetti**.

---

## 🌟 Key Features

1. **3D Interactive Envelope Experience**:
   - Full-screen opening screen with a royal envelope, gold foil trim, and wax seal stamped with couple initials.
   - Interactive "Open Invitation" button with 3D flap flip, letter reveal, and golden confetti burst.
   - Ambient Shehnai / Sitar instrumental music starts playing upon opening (with floating mute/unmute control).

2. **Wedding Hero & Auspicious Invocation**:
   - "Om Sri Ganeshaya Namaha" Sanskrit invocation and Ganesha gold line art.
   - Grand typography using **Cinzel**, **Cormorant Garamond**, and **Great Vibes** calligraphy.
   - Prominent couple names, date, and romantic quote.

3. **Heartfelt Wedding Message**:
   - *“With the blessings of our families and the love of those dear to us, we joyfully invite you to celebrate the beginning of a beautiful new journey.”*
   - Framed in an ornate double-gold border with corner mandalas.

4. **The Blessed Couple**:
   - Royal arched portrait frames for the Bride (Amrutha) and Groom (Karthik).
   - Family lineage, parents' names, and romantic personal bios.

5. **Wedding & Muhurtham Details**:
   - Auspicious Date & Muhurtham timing.
   - Venue Name, Grand Ballroom, and Full Address.
   - One-click **Google Maps Directions**, **Add to Google Calendar**, and **Copy Address**.

6. **Real-time Live Countdown**:
   - Live Days, Hours, Minutes, and Seconds auto-updating every second towards the wedding date.

7. **Order of Events (Itinerary Cards)**:
   - Haldi & Mehendi Utsav
   - Sangeet & Cocktail Soirée
   - The Holy Muhurtham & Kanyadaan
   - Grand Wedding Reception
   - Timings, venues, and dress codes for each celebration.

8. **Interactive Blessings Guestbook & RSVP**:
   - Guests can write heartfelt wishes and indicate attendance.
   - Saves wishes to the guestbook and celebrates with a golden confetti cascade.

9. **Closing, Family Invitation & Sharing**:
   - Family details from both Bride's and Groom's sides.
   - RSVP contact numbers for assistance.
   - One-click **Share on WhatsApp** and **Copy Invitation Link**.

---

## ✏️ How to Edit Wedding Information

All wedding information is centralized in a single configuration file:
👉 **`src/config/weddingData.ts`**

You can update:
- **Bride**: `weddingData.bride.fullName`, `nickname`, `parents`, `description`
- **Groom**: `weddingData.groom.fullName`, `nickname`, `parents`, `description`
- **Wedding Date**: `weddingData.weddingDate` (ISO format e.g. `"2027-02-14T09:15:00"`)
- **Muhurtham Time**: `weddingData.muhurthamTime`
- **Venue**: `weddingData.venue.name`, `hall`, `fullAddress`, `city`, `googleMapsUrl`
- **Family Details**: `weddingData.families.brideSide`, `weddingData.families.groomSide`
- **RSVP Contacts**: `weddingData.closing.contactRsvp`

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying Online (Free on Vercel)

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Click **Deploy** — your sister's luxury digital wedding invitation will be live instantly with a shareable URL!
