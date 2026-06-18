"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SLIDES = [
  {
    src: "/images/image1.png",
    alt: "Community gathering",
  },
  {
    src: "/images/image2.jpg",
    alt: "Event arrangement",
  },
  {
    src: "/images/image3.jpg",
    alt: "Beautiful decoration",
  },
  {
    src: "/images/image4.jpg",
    alt: "Audio setup",
  },
  {
    src: "/images/image5.jpg",
    alt: "Cleanliness",
  },
];



export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-150 h-150 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #1E7A50, transparent)",
            top: "-200px",
            left: "-200px",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-12">
        
        {/* LEFT IMAGE */}
        <motion.div
          className="relative h-105 md:h-135 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 1 }}
            >
              <Image
  src={SLIDES[current].src}
  alt={SLIDES[current].alt}
  fill
  className="object-cover"
  loading="eager"
  priority={current === 0}
/>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* TITLE */}
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Kalemat <span className="text-[#C9A84C]">Nooraniya</span>
          </motion.h1>

         {/* QUOTE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src="/images/quote.png"
              alt="Quotation"
              width={500}
              height={200}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </motion.div>

          {/* CTA BUTTON (FIXED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="#mawaid"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase font-bold"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #9A7A2E)",
                color: "#000",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Explore Departments →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}