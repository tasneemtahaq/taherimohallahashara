"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PhotoAlbum from "@/app/components/PhotoAlbum";

const PHOTOS = [
  { src: "/images/its1.jpg", caption: "Community iftar gathering — Ramadan 2024" },
  { src: "/images/its2.jpg", caption: "Food distribution to families in need" },
  { src: "/images/its3.jpg", caption: "Volunteers preparing meals together" },
  { src: "/images/its4.jpg", caption: "Annual feast event setup and arrangement" },
  { src: "/images/its5.jpg", caption: "Serving guests with warmth and dignity" },
  { src: "/images/its6.jpg", caption: "Community members sharing a meal" },
];

export default function ITSGalleryPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0D0D0D" }}>
      <Navbar />

      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ color: "#C9A84C" }}
        >
          07 — ITS
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          ITS Gallery
        </h1>
        <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          A complete look at our Mawaid department — community meals, food
          distribution, and event arrangements.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-24">
        <PhotoAlbum photos={PHOTOS} departmentTitle="ITS " />
      </section>

      <Footer />
    </main>
  );
}