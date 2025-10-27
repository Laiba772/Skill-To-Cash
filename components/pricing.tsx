"use client";

import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  // ✅ Single function for both free & premium
  const handleSelectPlan = async (type: "free" | "premium") => {
    if (type === "free") {
      router.push("/skill-form");
    } else {
      try {
        const res = await fetch("/api/checkout", { method: "POST" });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url; // Stripe Checkout open hoga
        } else {
          alert("Stripe checkout URL missing.");
        }
      } catch (err) {
        console.error(err);
        alert("Error connecting to Stripe.");
      }
    }
  };

  type PlanType = "free" | "premium";
  interface Plan {
    name: string;
    price: string;
    features: string[];
    type: PlanType;
    highlight: boolean;
  }

  const plans: Plan[] = [
    {
      name: "Free",
      price: "$0",
      features: [
        "🎯 1 AI Business Idea",
        "🧠 Skill to Business Generator",
        "🗺️ Basic Roadmap",
      ],
      type: "free",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$19/month",
      features: [
        "🚀 Unlimited AI Idea Generation",
        "🎨 Branding & Website Creation",
        "💰 Monetization Strategy",
        "📈 Progress Tracker",
        "⚡ Priority Support",
      ],
      type: "premium",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="pt-36 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          💎 Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 shadow-md ${
                plan.highlight
                  ? "border-green-600 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-green-700 mb-4">
                {plan.price}
              </p>

              <ul className="text-left space-y-3 text-sm mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-800">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan.type)}
                className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
                  plan.highlight
                    ? "bg-green-700 hover:bg-green-800"
                    : "bg-gray-700 hover:bg-gray-800"
                }`}
              >
                {plan.highlight ? "Upgrade to Premium" : "Start for Free"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
