import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    question: "What is AGAL?",
    answer: "AGAL is the AquaGenetics AI Labs, a subsidiary of Phoenix Labs focused on integrating AI and aquaculture to address health and food production challenges."
  },
  {
    question: "How can I collaborate with AGAL?",
    answer: "Visit the Collaborations section on the platform for partnership opportunities and contact information."
  },
  {
    question: "How do I access the AI tools?",
    answer: "AI tools are accessible through the AI-Powered Research Portal on the user dashboard."
  },
  {
    question: "Where can I find research publications?",
    answer: "Research publications are available in the Publications section under Research on the platform."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left text-base sm:text-lg font-medium text-gray-800 py-4 hover:  transition-all duration-200"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="h-5 w-5  " />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 text-sm sm:text-base transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
