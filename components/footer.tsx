export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo + Description */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-green-400">💰 Skill-to-Cash</h3>
          <p className="text-sm text-gray-400 mt-1 max-w-xs">
            AI-powered platform to turn your skills into a profitable business.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="/privacy" className="hover:text-white transition">
            Privacy
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Skill-to-Cash. Crafted with 💻 by <span className="text-white font-medium">Laiba Naz & His Team.</span>.
      </div>
    </footer>
  );
}
