"use client";

import { useState, useCallback } from "react";
import OpeningAnimation  from "./components/OpeningAnimation";
import ParticleBackground from "./components/ParticleBackground";
import Navbar            from "./components/Navbar";
import HeroSection       from "./components/HeroSection";
import DepartmentSection from "./components/DepartmentSection";
import Footer            from "./components/Footer";
import TopBanner from "./components/TopBanner";

const DEPARTMENTS = [
  {
    id:          "mawaid",
    number:      "01 — Mawaid",
    title:       "Mawaid",
    subtitle:    "Community Meals",
    description: "Managing community meals, food distribution, and event arrangements efficiently.",
    tags:        ["Dining", "Events", "Community"],
    imageSrc:    "/images/img1.jpg",
    imageAlt:    "Mawaid",
    reverse:     false,
    albumPhotos: [
      { src: "/images/mawaid1.jpg", caption: "Community iftar gathering — Ramadan 2024" },
      { src: "/images/mawaid2.jpg", caption: "Food distribution to families in need" },
      { src: "/images/mawaid3.jpg", caption: "Volunteers preparing meals together" },
      { src: "/images/mawaid4.jpg", caption: "Annual feast event setup and arrangement" },
      { src: "/images/mawaid5.jpg", caption: "Serving guests with warmth and dignity" },
      { src: "/images/mawaid6.jpg", caption: "Community members sharing a meal" },
    ],
  },
  {
    id:          "bgt",
    number:      "02 — BGT",
    title:       "BGT",
    subtitle:    "Planning & Coordination",
    description: "Supporting community operations through organized planning and coordination.",
    tags:        ["Strategy", "Planning", "Operations"],
    imageSrc:    "/images/img2.jpg",
    imageAlt:    "BGT",
    reverse:     true,
    albumPhotos: [
      { src: "/images/bgt1.jpg", caption: "Strategic planning session — 2024" },
      { src: "/images/bgt2.jpg", caption: "Team coordination meeting" },
      { src: "/images/bgt3.jpg", caption: "Resource management workshop" },
      { src: "/images/bgt4.jpg", caption: "Annual review and planning" },
      { src: "/images/bgt5.jpg", caption: "Department heads collaboration" },
      { src: "/images/bgt6.jpg", caption: "Community operations overview" },
    ],
  },
  {
    id:          "microom",
    number:      "03 — Audio/Video",
    title:       "Audio/Video",
    subtitle:    "Audio & Communication",
    description: "Handling audio systems, announcements, and event communication.",
    tags:        ["Audio", "Media", "Broadcast"],
    imageSrc:    "/images/img3.jpg",
    imageAlt:    "Mic Room",
    reverse:     false,
    albumPhotos: [
      { src: "/images/mic1.jpg", caption: "Live audio setup for main event" },
      { src: "/images/mic2.jpg", caption: "Sound engineer at the mixing board" },
      { src: "/images/mic3.jpg", caption: "Announcement system installation" },
      { src: "/images/mic4.jpg", caption: "Event broadcast in progress" },
      { src: "/images/mic5.jpg", caption: "Microphone testing before ceremony" },
      { src: "/images/mic6.jpg", caption: "Audio team working behind the scenes" },
    ],
  },
  {
    id:          "nazafat",
    number:      "04 — Nazafat",
    title:       "Nazafat",
    subtitle:    "Cleanliness & Hygiene",
    description: "Maintaining cleanliness, hygiene, and organized surroundings.",
    tags:        ["Hygiene", "Standards", "Maintenance"],
    imageSrc:    "/images/img4.jpg",
    imageAlt:    "Nazafat",
    reverse:     true,
    albumPhotos: [
      { src: "/images/nazafat1.jpg", caption: "Morning cleaning drive by volunteers" },
      { src: "/images/nazafat2.jpg", caption: "Organized waste management system" },
      { src: "/images/nazafat3.jpg", caption: "Sanitization before major event" },
      { src: "/images/nazafat4.jpg", caption: "Clean and welcoming entrance setup" },
      { src: "/images/nazafat5.jpg", caption: "Team maintaining hygiene standards" },
      { src: "/images/nazafat6.jpg", caption: "Post-event cleanup in action" },
    ],
  },
  {
    id:          "tazeen",
    number:      "05 — Tazeen",
    title:       "Tazeen",
    subtitle:    "Décor & Beautification",
    description: "Creating beautiful decorations and enhancing event environments.",
    tags:        ["Décor", "Design", "Aesthetics"],
    imageSrc:    "/images/img5.jpg",
    imageAlt:    "Tazeen",
    reverse:     false,
    albumPhotos: [
      { src: "/images/tazeen1.jpg", caption: "Floral arrangements for main hall" },
      { src: "/images/tazeen2.jpg", caption: "Fabric draping and lighting design" },
      { src: "/images/tazeen3.jpg", caption: "Thematic installation for annual event" },
      { src: "/images/tazeen4.jpg", caption: "Entrance decoration setup" },
      { src: "/images/tazeen5.jpg", caption: "Stage backdrop creation" },
      { src: "/images/tazeen6.jpg", caption: "Final touches before event opening" },
    ],
    
  },
  {
    id:          "zakireen",
    number:      "05 — Zakireen",
    title:       "Zakireen",
    subtitle:    "Décor & Beautification",
    description: "Creating beautiful decorations and enhancing event environments.",
    tags:        ["Décor", "Design", "Aesthetics"],
    imageSrc:    "/images/img5.jpg",
    imageAlt:    "zakireen",
    reverse:     false,
    albumPhotos: [
      { src: "/images/zakireen1.jpg", caption: "Floral arrangements for main hall" },
      { src: "/images/zakireen2.jpg", caption: "Fabric draping and lighting design" },
      { src: "/images/zakireen3.jpg", caption: "Thematic installation for annual event" },
      { src: "/images/zakireen4.jpg", caption: "Entrance decoration setup" },
      { src: "/images/zakireen5.jpg", caption: "Stage backdrop creation" },
      { src: "/images/zakireen6.jpg", caption: "Final touches before event opening" },
    ],
    
  },
];

export default function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  const handleAnimationComplete = useCallback(() => setAnimationDone(true), []);

  return (
    <main className="relative min-h-screen" style={{ background: "linear-gradient(160deg, #fdf6e3 0%, #f9edcc 40%, #f5e4b0 70%, #fdf6e3 100%)", backgroundAttachment: "fixed" }}>

      {/* Opening cinematic animation */}
      <OpeningAnimation onComplete={handleAnimationComplete} />

      {/* Only show content after animation */}
      {animationDone && (
        <>
          <TopBanner />
        
          {/* floating particles layer */}
          <ParticleBackground />

          {/* sticky navbar */}
          <Navbar />

          {/* hero */}
          <HeroSection />

          {/* 5 department sections */}
          {DEPARTMENTS.map((dept) => (
            <DepartmentSection key={dept.id} {...dept} />
          ))}

          {/* footer */}
          <Footer />
        </>
      )}
    </main>
  );
}