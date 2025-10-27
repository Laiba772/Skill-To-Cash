"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RoadmapPage() {
  const searchParams = useSearchParams();
  const skill = searchParams.get("skill") || "";
  const [roadmap, setRoadmap] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmap = async () => {
      if (!skill) return;

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill }),
      });

      const data = await res.json();
      if (data.roadmap) {
        setRoadmap(data.roadmap);
      }
      setLoading(false);
    };

    fetchRoadmap();
  }, [skill]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        ⏳ Loading roadmap...
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        ⚠️ No roadmap found for "{skill}".
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 pt-32 pb-32 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        🚀 {skill.toUpperCase()} Roadmap
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {Object.entries(roadmap).map(([section, items]: any, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-3 capitalize">
              {section}
            </h2>

            {typeof items === "object" && !Array.isArray(items) ? (
              <div className="space-y-2">
                {Object.entries(items).map(([level, list]: any, i) => (
                  <div key={i}>
                    <p className="font-medium">{level}:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                      {list.map((item: string, j: number) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="list-disc pl-6 text-gray-700">
                {items.map((item: string, j: number) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-16">
        <Link
          href="/skill-form"
          className="px-6 py-3 bg-green-700 text-white rounded-full text-lg font-medium hover:bg-green-600 transition transform hover:scale-105"
        >
          ⬅️ Back to Idea Generator
        </Link>
      </div>
    </section>
  );
}
