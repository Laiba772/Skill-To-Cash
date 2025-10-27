"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skill Form", href: "/skill-form" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg sm:text-xl">
          💰 Skill-to-Cash
        </Link>

        {/* Desktop nav & buttons */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white hover:underline hover:text-green-500 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign In
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 p-6 flex flex-col gap-5 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-green-500 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/sign-in"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-green-700 text-white py-2 px-4 rounded-lg text-center hover:bg-green-600"
            >
              Sign In
            </Link>

            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
    </header>
  );
}
