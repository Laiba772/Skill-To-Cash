"use client";

const faqs = [
  {
    q: "Is this platform free to use?",
    a: "Yes! You can get your first business idea free of cost.",
  },
  {
    q: "How does the AI generate ideas?",
    a: "We use advanced Agentic AI models to analyze your skills and recommend ideas.",
  },
  {
    q: "Can I really earn through this?",
    a: "Yes! Many users are already monetizing their skills using our guided roadmap.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. Our platform is beginner-friendly and requires no coding.",
  },
  {
    q: "How long does idea generation take?",
    a: "Just a few seconds! Enter your skill and the AI handles the rest.",
  },
  {
    q: "Will I get a complete business roadmap?",
    a: "Yes! You’ll receive branding, website, and monetization steps.",
  },
  {
    q: "Can I use this on mobile?",
    a: "Absolutely. The platform is mobile-friendly and easy to use.",
  },
  {
    q: "How do I save my business plan?",
    a: "You’ll be able to download or export it soon. Feature is in progress.",
  },
  {
    q: "Can I use this with multiple skills?",
    a: "Yes! You can try different skills and compare ideas.",
  },
  {
    q: "Is my data safe?",
    a: "Yes, we respect your privacy and do not share your data.",
  },
  {
    q: "Is this built with real AI?",
    a: "Yes, it's powered by cutting-edge Agentic AI & OpenAI tools.",
  },
  {
    q: "Who built this?",
    a: "A passionate team of developers and designers focused on creator economy.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14 text-gray-900">
          🤔 Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border">
              <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
              <p className="text-gray-700 mt-2 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
