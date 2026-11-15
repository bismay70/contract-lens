"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "How does ContractLens connect enterprise documents?",
    answer:
      "ContractLens extracts clauses, KPIs, bid data, and operational context, then connects them through a knowledge graph for traceable AI answers.",
  },
  {
    question: "Can every AI answer be traced back to source evidence?",
    answer:
      "Yes. Responses are designed around citations, document references, and reviewable evidence so teams can verify the source behind each insight.",
  },
  {
    question: "What document types are supported?",
    answer:
      "The platform is built for contracts, tender documents, PDFs, spreadsheets, project records, KPI reports, and operational files.",
  },
  {
    question: "Does ContractLens support bid and RFP workflows?",
    answer:
      "Bidwise helps evaluate RFP requirements, compare bid signals, identify compliance gaps, and score tender responses with structured intelligence.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f4efe4] px-5 py-20 text-[#0b3328]">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[420px] overflow-hidden ">
          <Image
            alt="ContractLens document intelligence overview"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            src="/faq-image.png"
          />
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <article
              className="rounded-2xl border border-[#17382f] bg-[#f8f3e8] p-6 shadow-[0_14px_36px_rgba(11,51,40,0.06)]"
              key={faq.question}
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-xl font-black leading-tight">
                  {faq.question}
                </h3>
                <button
                  aria-expanded={openIndex === index}
                  aria-label={`Toggle ${faq.question}`}
                  className={`grid size-9 shrink-0 place-items-center rounded-full text-lg font-black ${
                    openIndex === index
                      ? "bg-[#a8ff2f] text-[#0b3328]"
                      : "border border-[#17382f] text-[#0b3328]"
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  type="button"
                >
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <p className="mt-4 max-w-[720px] text-sm font-medium leading-6 text-[#5f675a]">
                  {faq.answer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
