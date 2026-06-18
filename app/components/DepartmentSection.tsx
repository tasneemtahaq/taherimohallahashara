"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface DepartmentSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function DepartmentSection({
  id,
  number,
  title,
  subtitle,
  description,
  tags,
  imageSrc,
  imageAlt,
  reverse = false,
}: DepartmentSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ ONLY ANIMATION STATES (NO transition here)
  const textVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? 60 : -60,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: reverse
            ? "radial-gradient(ellipse at 80% 50%, rgba(10,61,46,0.3) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 20% 50%, rgba(10,61,46,0.3) 0%, transparent 60%)",
        }}
      />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* TEXT SECTION */}
        <motion.div
          className={reverse ? "lg:[direction:ltr]" : ""}
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}   // ✅ FIX HERE
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-mono"
            style={{ color: "#C9A84C" }}
          >
            {number}
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2 leading-tight text-white">
            {title}
          </h2>

          <p className="text-xl font-serif italic mb-6" style={{ color: "#C9A84C" }}>
            {subtitle}
          </p>

          {/* divider */}
          <motion.div
            className="h-0.5 mb-8 rounded-full"
            style={{
              background: "linear-gradient(to right, #C9A84C, transparent)",
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />

          <p
            className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {description}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300 cursor-default"
                style={{
                  borderColor: "rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "#C9A84C";
                  el.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "transparent";
                  el.style.color = "#C9A84C";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          className={`relative ${reverse ? "lg:[direction:ltr]" : ""}`}
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }} // ✅ FIX HERE
        >
          {/* decorations */}
          <div
            className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 z-10"
            style={{ borderColor: "#C9A84C" }}
          />
          <div
            className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 z-10"
            style={{ borderColor: "#C9A84C" }}
          />

          {/* image */}
          <motion.div
            className="relative h-95 md:h-120 overflow-hidden rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.1), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}