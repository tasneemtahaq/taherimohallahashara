"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function OpeningAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  // phases: tear → ripple → logo → zoom → done
  const [phase, setPhase] = useState<"tear" | "ripple" | "logo" | "zoom" | "done">("tear");

  useEffect(() => {
    //  tear falls for 4s
    //  ripple plays for 1.5s
    //  logo shows for 2.5s
    //  zoom out for 1.5s
    //  done
    const t1 = setTimeout(() => setPhase("ripple"), 4200);
    const t2 = setTimeout(() => setPhase("logo"),   5800);
    const t3 = setTimeout(() => setPhase("zoom"),   8400);
    const t4 = setTimeout(() => { setPhase("done"); onComplete(); }, 10000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
          style={{ background: "#000" }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >

          {/* ── PHASE 1: Falling Teardrop ── */}
          <AnimatePresence>
            {phase === "tear" && (
              <motion.div
                key="tear"
                className="absolute"
                style={{ top: "5%", left: "50%", translateX: "-50%" }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: "42vh", opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{
                  y:       { duration: 4, ease: [0.25, 0.1, 0.25, 1] },
                  opacity: { duration: 0.6 },
                }}
              >
                {/* ── Red Teardrop SVG (3× bigger = 108×168) ── */}
                <svg
                  width="108"
                  height="168"
                  viewBox="0 0 36 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="tearGrad" cx="40%" cy="30%" r="70%">
                      <stop offset="0%"   stopColor="#ff6b6b" />
                      <stop offset="50%"  stopColor="#cc0000" />
                      <stop offset="100%" stopColor="#7a0000" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    {/* clip so Arabic text stays inside teardrop */}
                    <clipPath id="tearClip">
                      <path d="M18 2 C18 2, 34 22, 34 36 C34 45.9 26.8 54 18 54 C9.2 54 2 45.9 2 36 C2 22 18 2 18 2Z" />
                    </clipPath>
                  </defs>

                  {/* teardrop shape */}
                  <path
                    d="M18 2 C18 2, 34 22, 34 36 C34 45.9 26.8 54 18 54 C9.2 54 2 45.9 2 36 C2 22 18 2 18 2Z"
                    fill="url(#tearGrad)"
                    filter="url(#glow)"
                  />

                  {/* inner highlight */}
                  <ellipse cx="13" cy="26" rx="3.5" ry="6" fill="white" opacity="0.2" />

                  {/* ── Arabic text: يا حسين ── */}
                  <text
                    x="18"
                    y="36"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="5.5"
                    fontFamily="'Scheherazade New', 'Amiri', 'Arial', serif"
                    fill="white"
                    opacity="0.95"
                    clipPath="url(#tearClip)"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    يا حسين
                  </text>
                </svg>

                {/* trailing glow line above the tear */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-full"
                  style={{
                    width: "2px",
                    background: "linear-gradient(to top, rgba(200,0,0,0.7), transparent)",
                  }}
                  animate={{ height: ["0px", "100px"] }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── PHASE 2: Ripple rings on impact ── */}
          <AnimatePresence>
            {(phase === "ripple" || phase === "logo") && (
              <motion.div
                key="ripple"
                className="absolute"
                style={{ top: "calc(50% + 60px)", left: "50%" }}
                exit={{ opacity: 0 }}
              >
                {[0, 0.2, 0.4].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      border: "1.5px solid #cc0000",
                      width: "30px",
                      height: "30px",
                      top: "-15px",
                      left: "-15px",
                    }}
                    animate={{ scale: [1, 20], opacity: [0.8, 0] }}
                    transition={{ duration: 1.8, delay, ease: "easeOut" }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── PHASE 3: Logo circle ── */}
          <AnimatePresence>
            {phase === "logo" && (
              <motion.div
                key="logo-circle"
                className="absolute flex items-center justify-center rounded-full overflow-hidden"
                style={{
                  width: "200px",
                  height: "200px",
                  border: "2px solid rgba(200,0,0,0.5)",
                  boxShadow: "0 0 40px rgba(200,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.5)",
                  background: "rgba(0,0,0,0.7)",
                  top: "50%",
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{   scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* ── PUT YOUR LOGO FILE HERE ──
                    Save your logo as: public/images/logo.png
                    Then this Image tag will show it automatically */}
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  onError={() => {
                    /* logo not found — fallback text shows */
                  }}
                />

                {/* Fallback text (shows only if logo.png is missing) */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ opacity: 0 }}
                >
                  <span
                    className="text-2xl font-serif"
                    style={{ color: "#cc0000" }}
                  >
                    يا حسين
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── PHASE 4: Zoom-in flash before website appears ── */}
          <AnimatePresence>
            {phase === "zoom" && (
              <motion.div
                key="zoom-flash"
                className="absolute inset-0"
                style={{ background: "#000" }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}