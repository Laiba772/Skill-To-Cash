"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs"; // ✅ Clerk hook
import Link from "next/link";

export default function SkillForm() {
  const { user } = useUser(); // Clerk se user object
  const [skill, setSkill] = useState("");
  const [idea, setIdea] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIdea("");

    if (!user) {
      setError("⚠️ Please log in to generate ideas.");
      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id, // ✅ Real Clerk userId
          skill,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setIdea(data.idea);
      }
    } catch (err) {
      setError("⚠️ Something went wrong, please try again.");
    }
  };

  return (
    <section className="min-h-screen pt-[120px] flex items-center justify-center bg-gray-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white border border-gray-200 shadow-md rounded-2xl p-8"
      >
        <label className="block text-xl font-semibold text-gray-800 mb-2">
          What’s your skill?
        </label>
        <input
          type="text"
          placeholder="e.g., Python, Graphic Design, Agentic AI..."
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <button
          type="submit"
          className="mt-6 w-full bg-green-800 hover:bg-green-600 text-white py-3 rounded-full text-lg transition"
        >
          Generate Idea
        </button>

        {/* Idea / Error + Roadmap Link */}
        {idea && (
          <div className="mt-6 text-center">
            <p className="text-green-700 font-medium bg-green-50 p-4 rounded-lg shadow">
              💡 {idea}
            </p>
            <Link
              href={`/roadmap?skill=${encodeURIComponent(skill)}`}
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-500 transition"
            >
              📍 View Full Roadmap
            </Link>
          </div>
        )}

        {error && (
          <p className="mt-6 text-red-600 text-center font-medium bg-red-50 p-4 rounded-lg shadow">
            ❌ {error}
          </p>
        )}
      </form>
    </section>
  );
}
