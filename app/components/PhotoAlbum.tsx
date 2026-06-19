"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  caption: string;
}

interface PhotoAlbumProps {
  photos: Photo[];
  departmentTitle: string;
  galleryHref?: string;
}

export default function PhotoAlbum({ photos, departmentTitle, galleryHref }: PhotoAlbumProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => setSelectedIndex(index);
  const closePhoto = () => setSelectedIndex(null);
  const goNext = () =>
    setSelectedIndex((i) => (i !== null ? (i + 1) % photos.length : 0));
  const goPrev = () =>
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + photos.length) % photos.length : 0
    );

  return (
    <div className="w-full mt-16">

      {/* ── Album Header ── */}
      {/* ── Album Header (clickable link to full gallery page) ── */}
      <motion.a
        href={galleryHref || "#"}
        className="flex items-center gap-4 mb-8 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="h-px flex-1"
          style={{
            background: "linear-gradient(to right, transparent, #C9A84C)",
          }}
        />
        <p
          className="text-xs tracking-[0.35em] uppercase font-medium transition-colors duration-300 group-hover:opacity-80 flex items-center gap-2"
          style={{ color: "#C9A84C" }}
        >
          {departmentTitle} — Gallery
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </p>
        <div
          className="h-px flex-1"
          style={{
            background: "linear-gradient(to left, transparent, #C9A84C)",
          }}
        />
      </motion.a>

      {/* ── Masonry Grid ── */}
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid relative group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => openPhoto(index)}
          >
            {/* Photo Card */}
            <div
              className="relative overflow-hidden rounded-lg"
              style={{
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Image */}
              <div className="relative w-full" style={{ minHeight: "160px" }}>
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ display: "block" }}
                />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{
                  background: "rgba(0,0,0,0.45)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,0.9)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div
              className="px-2 py-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderLeft: "2px solid rgba(201,168,76,0.3)",
                marginTop: "4px",
              }}
            >
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-9998 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            {/* Card — stop click propagation so clicking image doesn't close */}
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top border */}
              <div
                className="h-0.5 w-full mb-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #C9A84C, transparent)",
                }}
              />

              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-lg"
                   style={{ maxHeight: "70vh" }}>
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].caption}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "70vh" }}
                />
              </div>

              {/* Caption bar */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{
                  background: "rgba(20,20,20,0.95)",
                  borderTop: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {photos[selectedIndex].caption}
                </p>
                <span
                  className="text-xs ml-4 whitespace-nowrap"
                  style={{ color: "#C9A84C" }}
                >
                  {selectedIndex + 1} / {photos.length}
                </span>
              </div>

              {/* Gold bottom border */}
              <div
                className="h-0.5 w-full mt-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #C9A84C, transparent)",
                }}
              />
            </motion.div>

            {/* ── Prev / Next buttons ── */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
              }}
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
              }}
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              →
            </button>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-sm"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
              }}
              onClick={closePhoto}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}