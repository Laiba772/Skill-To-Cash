"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          💡 About Skill-to-Cash
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We’re a passionate team led by <strong>Laiba Naz</strong> building an AI-powered platform
          that helps anyone turn their <span className="text-green-700 font-semibold">skills</span> into a real business. Whether you're a designer,
          developer, or artist — you deserve a chance to earn from what you love. ✨
        </motion.p>
      </div>
    </main>
  );
}
