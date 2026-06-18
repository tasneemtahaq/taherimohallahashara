"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function OpeningAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"tear" | "ripple" | "logo" | "zoom" | "done">("tear");
  const [audioAllowed, setAudioAllowed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ── Create audio element once ──
  useEffect(() => {
    const audio = new Audio("/audio/intro.mp3");
    audio.volume = 0.8;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // ── Animation phase timer ──
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("ripple"), 4200);
    const t2 = setTimeout(() => setPhase("logo"),   5800);
    const t3 = setTimeout(() => setPhase("zoom"),   8400);
    const t4 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 10000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  // ── Play audio when user taps/clicks (browser requires this) ──
  const handleUserClick = () => {
    if (!audioAllowed && audioRef.current) {
      audioRef.current.play().catch(() => {
        // browser blocked autoplay — that's okay
      });
      setAudioAllowed(true);
    }
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="overlay"
          className="fixed inset-0 flex items-center justify-center overflow-hidden cursor-pointer"
          style={{
            // ── DARK GREEN BACKGROUND ──
            background: "linear-gradient(160deg, #001a0e 0%, #003320 40%, #001a0e 100%)",
            zIndex: 9999,
          }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
          onClick={handleUserClick}
        >

          {/* ── Tap to unmute hint (shows for first 3 seconds) ── */}
          {!audioAllowed && phase === "tear" && (
            <motion.p
              className="absolute bottom-16 text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              tap anywhere for audio
            </motion.p>
          )}

          {/* ── Ambient green glow in background ── */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(0,100,50,0.25) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

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
                  <ellipse cx="13" cy="26" rx="3.5" ry="6" fill="white" opacity="0.2" />
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
                  >
                    يا حسين
                  </text>
                </svg>

                {/* trailing glow line */}
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

          {/* ── PHASE 2: Ripple rings ── */}
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
                  boxShadow: "0 0 60px rgba(0,150,70,0.4), 0 0 40px rgba(200,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.5)",
                  background: "rgba(0,20,10,0.85)",
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
               <Image
  src="/images/logo.png"
  alt="Logo"
  width={160}
  height={160}
  className="object-contain"
  style={{ width: "auto", height: "auto", maxWidth: "160px", maxHeight: "160px" }}
/>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── PHASE 4: Fade to dark green then out ── */}
          <AnimatePresence>
            {phase === "zoom" && (
              <motion.div
                key="zoom-flash"
                className="absolute inset-0"
                style={{ background: "#001a0e" }}
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