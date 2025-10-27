"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🔐 Privacy Policy
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your privacy matters to us. We collect only the minimum data necessary
          and never sell your personal information. Your info is safe and secure, always. 🔒
        </motion.p>
        <p className="text-sm text-gray-500 mt-6">
          For questions, reach out via our <a href="/contact" className="text-green-600 underline">Contact page</a>.
        </p>
      </div>
    </main>
  );
}
