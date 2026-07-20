"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const faqs = [
  {
    question: "Do you offer custom furniture designs?",
    answer:
      "Yes, every piece we build is fully customizable. We work with you from initial sketches to final dimensions, materials, and finish.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most custom furniture projects take 4 to 8 weeks depending on complexity, while larger remodeling projects can take longer. We'll give you a clear timeline during consultation.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We primarily work with solid hardwoods like oak, walnut, and mahogany, along with eco-friendly finishes and premium hardware.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, our team handles delivery and installation for every project to make sure everything fits and functions perfectly in your space.",
  },
  {
    question: "Can I request changes during the process?",
    answer:
      "Absolutely. We keep you updated at every stage and welcome feedback before moving to the next step of production.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Got Questions?"
          textAlign="center"
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-secondary/30 rounded-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-dark">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-dark/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;