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
    description: "Managing community meals, food distribution, and event arrangements efficiently. From planning menus to ensuring every guest is served with warmth and dignity — Mawaid is the heart of communal nourishment.",
    tags:        ["Dining", "Events", "Community"],
    imageSrc:    "/images/img1.jpg",
    imageAlt:    "Mawaid",
    reverse:     false,
  },
  {
    id:          "bgt",
    number:      "02 — BGT",
    title:       "BGT",
    subtitle:    "Planning & Coordination",
    description: "Supporting community operations through organized planning and coordination. BGT drives strategy, manages resources, and ensures every department runs with precision, purpose, and long-term vision.",
    tags:        ["Strategy", "Planning", "Operations"],
    imageSrc:    "/images/img2.jpg",
    imageAlt:    "BGT",
    reverse:     true,
  },
  {
    id:          "microom",
    number:      "03 — Mic Room",
    title:       "Mic Room",
    subtitle:    "Audio & Communication",
    description: "Handling audio systems, announcements, and event communication. The Mic Room ensures every word is heard clearly, every announcement lands powerfully, and every event resonates with sonic excellence.",
    tags:        ["Audio", "Media", "Broadcast"],
    imageSrc:    "/images/img3.jpg",
    imageAlt:    "Mic Room",
    reverse:     false,
  },
  {
    id:          "nazafat",
    number:      "04 — Nazafat",
    title:       "Nazafat",
    subtitle:    "Cleanliness & Hygiene",
    description: "Maintaining cleanliness, hygiene, and organized surroundings. Rooted in the belief that a clean environment reflects a clean spirit, Nazafat ensures every space is spotless, welcoming, and dignified.",
    tags:        ["Hygiene", "Standards", "Maintenance"],
    imageSrc:    "/images/img4.jpg",
    imageAlt:    "Nazafat",
    reverse:     true,
  },
  {
    id:          "tazeen",
    number:      "05 — Tazeen",
    title:       "Tazeen",
    subtitle:    "Décor & Beautification",
    description: "Creating beautiful decorations and enhancing event environments. Tazeen transforms ordinary spaces into extraordinary experiences through floral arrangements, fabric draping, lighting design, and thematic installations.",
    tags:        ["Décor", "Design", "Aesthetics"],
    imageSrc:    "/images/img5.jpg",
    imageAlt:    "Tazeen",
    reverse:     false,
  },
  {
    id:          "Zakireen",
    number:      "06 — Zakireen",
    title:       "Zakireen",
    subtitle:    "Décor & Beautification",
    description: "Creating beautiful decorations and enhancing event environments. Tazeen transforms ordinary spaces into extraordinary experiences through floral arrangements, fabric draping, lighting design, and thematic installations.",
    tags:        ["Décor", "Design", "Aesthetics"],
    imageSrc:    "/images/img6.jpg",
    imageAlt:    "Tazeen",
    reverse:     false,
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