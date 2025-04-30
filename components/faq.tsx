"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  q: string
  a: string
}

interface FaqProps {
  faqs: FaqItem[]
}

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4  scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-text-300">Perguntas Frequentes</h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                className="w-full px-6 py-4 text-left font-medium flex justify-between items-center text-text-200"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-text-300/80 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 text-text-200">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
