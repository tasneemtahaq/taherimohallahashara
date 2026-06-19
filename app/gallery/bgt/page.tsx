"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PhotoAlbum from "@/app/components/PhotoAlbum";

const PHOTOS = [
  { src: "/images/bgt1.jpg", caption: "Strategic planning session — 2024" },
  { src: "/images/bgt2.jpg", caption: "Team coordination meeting" },
  { src: "/images/bgt3.jpg", caption: "Resource management workshop" },
  { src: "/images/bgt4.jpg", caption: "Annual review and planning" },
  { src: "/images/bgt5.jpg", caption: "Department heads collaboration" },
  { src: "/images/bgt6.jpg", caption: "Community operations overview" },
];

export default function BgtGalleryPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0D0D0D" }}>
      <Navbar />

      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ color: "#C9A84C" }}
        >
          02 — BGT
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          BGT Gallery
        </h1>
        <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          A complete look at our BGT department — planning, coordination, and
          strategic operations.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-24">
        <PhotoAlbum photos={PHOTOS} departmentTitle="BGT" />
      </section>

      <Footer />
    </main>
  );
}