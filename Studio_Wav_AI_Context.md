# Studio.wav - AI Context Document

**Purpose:** This document contains the core business identity, branding guidelines, contact information, and website architecture for **Studio.wav**. Provide this file to any AI model (ChatGPT, Claude, Gemini, etc.) to immediately give it full context on the business before asking it to write copy, design marketing materials, or edit the website.

---

## 1. Business Overview
- **Business Name:** Studio.wav
- **Type of Business:** Premium Music Recording Studio
- **Vibe / Brand Identity:** High-end, professional, cinematic, dark, moody, modern. The studio caters to serious artists who want industry-level quality.
- **Tone of Voice:** Punchy, confident, premium, and direct. Use emojis sparingly but effectively (e.g., 🎙️, 🔥, 🎵).

## 2. Contact & Location Information
- **Phone / WhatsApp:** 9958340671
- **Email:** rajneeshrana303@gmail.com
- **Instagram Handle:** @studio.wav_
- **Instagram Link:** https://www.instagram.com/studio.wav_?igsh=MXMyY3p0ajQxYmM2eg==
- **Address:** Second floor, 75/3, Street No. 3, Krishna Nagar, Safdarjung Enclave, New Delhi, Delhi 110029
- **Google Maps Link:** https://maps.app.goo.gl/LW5fiSqNVQE4NUnb9

## 3. Services Offered
1. Vocal Recording
2. Music Production
3. Mix & Master
4. Instrument Recording

## 4. Brand Design System & Aesthetics
The brand uses a strict dark theme with vibrant, glowing neon accents to create a premium, glassmorphism-inspired aesthetic.

**Core Color Palette (Hex Codes):**
- **Studio Black (Backgrounds):** `#0a0a0a`
- **Studio Dark (Cards/Sections):** `#141414`
- **Studio Purple (Primary Accent):** `#6d28d9` (Deep Purple)
- **Studio Purple Light (Hovers):** `#8b5cf6`
- **Studio Red (Secondary Accent):** `#dc2626` (Bold Red)
- **Studio Red Light (Hovers):** `#ef4444`

**Typography:**
- **Primary Font:** `Inter` (sans-serif) for clean, modern body text.
- **Secondary/Display Font:** `Outfit` (sans-serif) for bold, impactful headlines.

**Strict Visual Rules (CRITICAL for Image Generation or CSS):**
- **NO Purple Tint/Blur on Photos:** The client strongly dislikes purple shading or blur applied over actual photographs. Photos must remain high-contrast, clean, and realistic. Purple should only be used for UI elements, text, buttons, and neon lighting accents in the environment.
- **UI Elements:** Use translucent backgrounds (`bg-white/5`), subtle white borders (`border-white/10`), and blurred backdrops (`backdrop-blur-md`) to create a frosted glass look.
- **Animations:** Elements should reveal smoothly on scroll (fade-in up), and buttons should have smooth scale and color transitions.

## 5. Website Technical Architecture
- **Tech Stack:** Vanilla HTML, Tailwind CSS, Vanilla JavaScript, Vite.
- **Lead Generation Flow:** The website does not use a traditional backend for form submissions. Instead, when a user fills out the "Book Your Session" form, it uses JavaScript to construct a pre-formatted string and redirects the user directly to the studio's WhatsApp number via deep-linking (`window.location.href`).
- **File Structure:** 
  - `/index.html`: Core markup and layout.
  - `/src/style.css`: Tailwind directives and custom animation keyframes.
  - `/src/main.js`: Scroll logic, mobile menu toggle, audio player logic, gallery lightbox, and WhatsApp form submission.
  - `/public/images/`: Contains `/studio/` (primary shots of gear and rooms) and `/artist/` (shots of clients working).

## 6. Marketing Hooks & Offers
- **Current Promo:** "Free Vocal Recording" for select artists.
- **Key Selling Point:** "Experience the best in the business. We don't just record music; we craft hits."
