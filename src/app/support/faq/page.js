"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Delivery within Nairobi takes 24–48 hours. Other regions in Kenya take 2–4 days depending on courier routes.",
    },
    {
      question: "Do you offer free delivery?",
      answer:
        "Orders above KSh 7,000 qualify for free delivery nationwide.",
    },
    {
      question: "How do I return an item?",
      answer:
        "Items can be returned within 7 days if unworn and in original packaging. Visit our Returns Policy page for details.",
    },
    {
      question: "Do you have a physical shop?",
      answer:
        "Yes — we have pickups available in Nairobi. Contact our support team for location details.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-3">
          <HelpCircle className="w-10 h-10 text-purple-600" />
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>

        <p className="text-gray-900 font-semibold mt-4 text-lg font-medium">
          Quick answers to common questions about Urstyle.ke
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6"
              >
                <h2
                  className={`text-xl font-semibold transition ${isOpen ? "text-purple-600" : "text-gray-900"
                    }`}
                >
                  {faq.question}
                </h2>

                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 transition" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition" />
                )}
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
