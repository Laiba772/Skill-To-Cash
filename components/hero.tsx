"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-36 flex items-center bg-gray-800 text-white px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Turn your skill into a <br className="hidden md:block" />
            profitable business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg mb-6"
          >
            Launch your passion project with AI-powered tools and zero guesswork.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              href="/sign-up"
              className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              🚀 Start Building Now
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Bulb Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <Image
            src="/bulb.png"
            alt="Idea Illustration"
            width={400}
            height={400}
            className="max-w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
