"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TopBanner() {
  return (
    <motion.div
      className="w-full relative"
      style={{ zIndex: 60 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={1920}
        height={300}
        priority
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </motion.div>
  );
}