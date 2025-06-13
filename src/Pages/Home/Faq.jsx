import { useState, useRef } from "react";
import { faqData } from "./data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 my-24 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions...?
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-orange-50 rounded-t-lg text-left"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={(el) => (contentRef.current[index] = el)}
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${contentRef.current[index]?.scrollHeight}px`
                    : "0",
              }}
            >
              <div className="px-6 py-4 text-gray-700 bg-white border-t border-gray-200">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
