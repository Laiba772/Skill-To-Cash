"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-6">
      <div className="max-w-lg bg-white rounded-2xl shadow-lg p-10 text-center">
        <XCircle className="w-16 h-16 text-red-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ❌ Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Aapne payment process cancel kar diya. Agar aap chahte hain to dobara{" "}
          <span className="font-semibold">Premium Plan</span> select kar sakte
          hain.
        </p>

        <Link
          href="/pricing"
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          🔄 Go Back to Pricing
        </Link>
      </div>
    </section>
  );
}
