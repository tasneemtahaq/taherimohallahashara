"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const QUICK_LINKS = [
  { label: "Mawaid", id: "mawaid" },
  { label: "BGT", id: "bgt" },
  { label: "Mic Room", id: "microom" },
  { label: "Nazafat", id: "nazafat" },
  { label: "Tazeen", id: "tazeen" },
];

const SOCIAL = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "in" },
  { label: "Twitter", href: "#", icon: "tw" },
  { label: "YouTube", href: "#", icon: "yt" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0D0D0D, #0A3D2E20, #0D0D0D)",
      }}
    >
      {/* top glow border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b"
          style={{ borderColor: "rgba(201,168,76,0.15)" }}
        >
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="text-2xl font-serif font-bold mb-4"
              style={{ color: "#C9A84C" }}
            >
              Kaleemat Nooraniya
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              A unified platform dedicated to community service, culture, and
              excellence across all five departments.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ color: "#C9A84C" }}
            >
              Departments
            </h4>

            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm transition-all duration-300 hover:pl-2"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "#C9A84C")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ color: "#C9A84C" }}
            >
              Connect
            </h4>

            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center text-xs font-bold border transition-all duration-300"
                  style={{
                    borderColor: "rgba(201,168,76,0.3)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#C9A84C",
                    color: "#C9A84C",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <p
              className="mt-6 text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Karachi, Pakistan
            </p>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <motion.p
          className="text-center text-xs pt-8"
          style={{ color: "rgba(255,255,255,0.25)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Kaleemat Nooraniya. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}