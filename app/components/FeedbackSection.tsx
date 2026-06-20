"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923332226672";

export default function FeedbackSection() {
  const [itsNumber, setItsNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!itsNumber || !phone || !feedback || rating === 0) {
      alert("Please fill in all fields and select a rating before submitting.");
      return;
    }

    const stars = "⭐".repeat(rating);

    const message = `*New Feedback Submission*

*ITS #:* ${itsNumber}
*Phone #:* ${phone}
*Rating:* ${stars} (${rating}/5)

*Feedback:*
${feedback}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="feedback"
      className="relative py-24 px-4"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(10,61,46,0.15) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            We Value Your Voice
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Feedback &amp; Rating
          </h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Share your experience — your message will be sent directly to us on WhatsApp.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* ITS Number */}
          <div className="mb-5">
            <label
              className="block text-xs tracking-widest uppercase mb-2"
              style={{ color: "#C9A84C" }}
            >
              ITS #
            </label>
            <input
              type="text"
              value={itsNumber}
              onChange={(e) => setItsNumber(e.target.value)}
              placeholder="Enter your ITS number"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "white",
              }}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label
              className="block text-xs tracking-widest uppercase mb-2"
              style={{ color: "#C9A84C" }}
            >
              Phone #
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "white",
              }}
            />
          </div>

          {/* Star Rating */}
          <div className="mb-5">
            <label
              className="block text-xs tracking-widest uppercase mb-2"
              style={{ color: "#C9A84C" }}
            >
              Your Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-3xl transition-transform duration-200"
                  style={{
                    color: (hoverRating || rating) >= star ? "#C9A84C" : "rgba(255,255,255,0.2)",
                    transform: (hoverRating || rating) >= star ? "scale(1.1)" : "scale(1)",
                  }}
                  aria-label={`Rate ${star} stars`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Textarea */}
          <div className="mb-7">
            <label
              className="block text-xs tracking-widest uppercase mb-2"
              style={{ color: "#C9A84C" }}
            >
              Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg outline-none resize-none transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "white",
              }}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 text-sm uppercase tracking-[0.2em] font-bold rounded-lg flex items-center justify-center gap-3"
            style={{
              background: "linear-gradient(135deg, #25D366, #1ebe57)",
              color: "#000",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4a8.83 8.83 0 0 0-7.62 13.31L3 21l3.79-1.36a8.84 8.84 0 0 0 5.27 1.7h.01a8.83 8.83 0 0 0 8.83-8.82 8.78 8.78 0 0 0-3.3-6.2zm-5.55 13.6h-.01a7.33 7.33 0 0 1-4.32-1.45l-.31-.21-3.05 1.09 1.1-2.97-.23-.31a7.34 7.34 0 0 1 11.4-9.05 7.27 7.27 0 0 1 2.17 5.18 7.34 7.34 0 0 1-6.75 7.72zm4.02-5.5c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.1a6.62 6.62 0 0 1-1.22-1.52c-.13-.22-.01-.34.11-.45.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.16.04-.3-.03-.41-.07-.11-.66-1.6-.91-2.19-.24-.57-.49-.49-.67-.5h-.57c-.18 0-.48.07-.73.34a2.24 2.24 0 0 0-.7 1.67c0 .98.72 1.93.82 2.06.1.13 1.4 2.16 3.42 3.04 2.02.89 2.02.59 2.38.56.37-.04 1.19-.49 1.36-.96.16-.47.16-.87.11-.96-.05-.09-.18-.14-.4-.25z" />
            </svg>
            Send via WhatsApp
          </motion.button>

          <p
            className="text-center text-xs mt-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Your feedback will open WhatsApp and send directly to our team.
          </p>
        </motion.form>
      </div>
    </section>
  );
}