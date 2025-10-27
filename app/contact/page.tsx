"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📬 Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We'd love to hear from you. Reach out via email or social media:
        </motion.p>
        <div className="space-y-4 text-left text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="text-green-600" /> team@skilltocash.ai
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-green-600" /> Karachi, Pakistan (Remote Team)
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="text-green-600" /> @skilltocash
          </div>
        </div>
      </div>
    </main>
  );
}
