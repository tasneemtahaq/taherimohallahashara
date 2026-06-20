"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Mawaid", href: "#mawaid" },
  { label: "BGT", href: "#bgt" },
  { label: "Audio/Video", href: "#microom" },
  { label: "Nazafat", href: "#nazafat" },
  { label: "Tazeen", href: "#tazeen" },
  { label: "Zakireen", href: "#zakireen" },
  { label: "ITS", href: "#its" },
  { label: "DaanaComittee", href: "#daana" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-lg bg-black/70 border-b border-yellow-600/30"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <h1 className="text-xl, md:text-lg font-bold text-[#C9A84C]">
            Taheri Mohallah{" "}
            <span className="text-white text-sm tracking-widest">
              Karachi
            </span>
          </h1>
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-yellow-500/40 px-5 py-2 text-yellow-500 flex items-center gap-3 hover:bg-yellow-500/10 transition-all"
        >
          <div className="flex flex-col gap-1">
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 7 : 0,
              }}
              className="w-5 h-0.5 bg-yellow-500"
            />
            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              className="w-5 h-0.5 bg-yellow-500"
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -7 : 0,
              }}
              className="w-5 h-0.5 bg-yellow-500"
            />
          </div>

          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
            }}
            animate={{
              opacity: 1,
              clipPath: "circle(150% at 100% 0%)",
            }}
            exit={{
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
            }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-40 bg-[#0A3D2E] flex items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group text-xl md:text-gigitxl text-white hover:text-yellow-500 transition-colors duration-300"
                  >
                    <span className="text-yellow-500 mr-4 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {link.label}

                    <div className="h-px w-0 bg-yellow-500 group-hover:w-full transition-all duration-500 mt-2" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            <p className="absolute bottom-10 text-white/30 tracking-[0.3em] uppercase text-xs">
              Taheri Mohallah Karachi — All Departments
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}