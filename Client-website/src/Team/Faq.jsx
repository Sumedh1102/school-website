import React from "react"
import { useState } from "react"
import { Plus, X } from "lucide-react"


const faqData = [
  {
    question: "What Is BrightMind?",
    answer: "Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
  {
    question: "Who Are The Instructors On BrightMind?",
    answer: "Our instructors are vetted professionals from top industries with proven teaching experience.",
  },
  {
    question: "Can I Learn At My Own Pace?",
    answer: "Yes, all courses are self-paced and accessible anytime, anywhere.",
  },
  {
    question: "How Much Does BrightMind Cost?",
    answer: "BrightMind offers both free and premium course options.",
  },
  {
    question: "Is BrightMind Suitable For Beginners?",
    answer: "We have beginner-friendly courses tailored to help you start from scratch.",
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left side - Heading */}
        <div className="text-center lg:text-left lg:sticky lg:top-8">
          <h2 className="font-bold font-domine text-[#3b2a14] text-4xl md:text-5xl lg:text-6xl leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right side - FAQ Accordion */}
        <div className="flex flex-col gap-3 max-w-2xl mx-auto lg:mx-0">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "shadow-lg shadow-purple-500/20" : "shadow-sm hover:shadow-md"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full p-6 text-left flex justify-between items-center transition-all duration-300 ease-in-out group ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl"
                    : "bg-gray-50 hover:bg-gray-100 text-black rounded-xl hover:scale-[1.02] active:scale-[0.98]"
                }`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-lg pr-4 group-hover:text-purple-600 transition-colors duration-200">
                  {activeIndex === index ? <span className="text-white">{faq.question}</span> : faq.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "rotate-180 scale-110" : "group-hover:scale-110 group-hover:text-purple-600"
                  }`}
                >
                  {activeIndex === index ? <X className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>

              {/* Answer Content with smooth animation */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 pb-6 rounded-b-xl transform transition-all duration-300 ${
                    activeIndex === index ? "translate-y-0" : "-translate-y-2"
                  }`}
                >
                  <div className="h-px bg-white/20 mb-4"></div>
                  <p className="text-purple-50 leading-relaxed text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
