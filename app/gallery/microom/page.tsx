"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PhotoAlbum from "@/app/components/PhotoAlbum";

const PHOTOS = [
  { src: "/images/mic1.jpg", caption: "Live audio setup for main event" },
  { src: "/images/mic2.jpg", caption: "Sound engineer at the mixing board" },
  { src: "/images/mic3.jpg", caption: "Announcement system installation" },
  { src: "/images/mic4.jpg", caption: "Event broadcast in progress" },
  { src: "/images/mic5.jpg", caption: "Microphone testing before ceremony" },
  { src: "/images/mic6.jpg", caption: "Audio team working behind the scenes" },
];

export default function MicRoomGalleryPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0D0D0D" }}>
      <Navbar />

      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ color: "#C9A84C" }}
        >
          03 — Mic Room
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          Mic Room Gallery
        </h1>
        <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          A complete look at our Mic Room department — audio systems,
          announcements, and event communication.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-24">
        <PhotoAlbum photos={PHOTOS} departmentTitle="Mic Room" />
      </section>

      <Footer />
    </main>
  );
}