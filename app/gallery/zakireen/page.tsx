"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PhotoAlbum from "@/app/components/PhotoAlbum";

const PHOTOS = [
  { src: "/images/zakireen1.jpg", caption: "noha aweel" },
  { src: "/images/zakireen2.jpg", caption: "noha aweel" },
  { src: "/images/zakireen3.jpg", caption: "noha aweel" },
  { src: "/images/zakireen4.jpg", caption: "noha aweel" },
  { src: "/images/zakireen5.jpg", caption: "noha aweel" },
  { src: "/images/zakireen6.jpg", caption: "noha aweel" },
];

export default function ZakireenGalleryPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0D0D0D" }}>
      <Navbar />

      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ color: "#C9A84C" }}
        >
          05 — Zakireen
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          Zakireen Gallery
        </h1>
        <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          A complete look at our Tazeen department — décor, design, and
          beautification.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-24">
        <PhotoAlbum photos={PHOTOS} departmentTitle="Zakireen" />
      </section>

      <Footer />
    </main>
  );
}