"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PhotoAlbum from "@/app/components/PhotoAlbum";

const PHOTOS = [
  { src: "/images/nazafat1.jpg", caption: "Morning cleaning drive by volunteers" },
  { src: "/images/nazafat2.jpg", caption: "Organized waste management system" },
  { src: "/images/nazafat3.jpg", caption: "Sanitization before major event" },
  { src: "/images/nazafat4.jpg", caption: "Clean and welcoming entrance setup" },
  { src: "/images/nazafat5.jpg", caption: "Team maintaining hygiene standards" },
  { src: "/images/nazafat6.jpg", caption: "Post-event cleanup in action" },
];

export default function NazafatGalleryPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0D0D0D" }}>
      <Navbar />

      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ color: "#C9A84C" }}
        >
          04 — Nazafat
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          Nazafat Gallery
        </h1>
        <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          A complete look at our Nazafat department — cleanliness, hygiene,
          and organized surroundings.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-24">
        <PhotoAlbum photos={PHOTOS} departmentTitle="Nazafat" />
      </section>

      <Footer />
    </main>
  );
}