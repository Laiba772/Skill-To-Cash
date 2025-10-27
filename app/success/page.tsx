"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
      <div className="max-w-lg bg-white rounded-2xl shadow-lg p-10 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Shukriya! Aapka <span className="font-semibold">Premium Plan</span>{" "}
          activate ho gaya hai. Ab aap unlimited AI ideas aur premium features
          use kar sakte hain.
        </p>

        <Link
          href="/skill-form"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          🚀 Start Generating Ideas
        </Link>
      </div>
    </section>
  );
}
