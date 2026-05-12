"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "How much will solar cost?",
    a: "The cost of solar depends on your home's size, energy usage, and roof configuration. Most homeowners qualify for the 30% Federal Tax Credit, which significantly reduces net cost. We provide a free, no-obligation quote tailored to your property.",
  },
  {
    q: "Will solar work on my roof?",
    a: "Solar works on most roof types including asphalt shingle, metal, tile, and flat roofs. Our team conducts a free site assessment to determine optimal panel placement, shading analysis, and structural viability before installation.",
  },
  {
    q: "What if I move or sell my house?",
    a: "Solar panels increase your home's resale value. Studies show homes with solar sell faster and at a premium compared to non-solar homes. The solar loan (if any) can typically be transferred to the new buyer, or paid off at sale.",
  },
  {
    q: "What happens when the sun isn't shining?",
    a: "Grid-tied solar systems use net metering — excess energy produced during the day is sent to the grid, and you draw from the grid at night. With battery storage, you can keep your home powered even during outages.",
  },
  {
    q: "How long does installation take?",
    a: "From signed contract to turned-on system, most residential installations take 4-8 weeks. This includes engineering, permit approvals, installation (1-3 days), and final inspection/interconnection.",
  },
  {
    q: "What kind of warranty do you offer?",
    a: "All our installations come with a 25-year equipment warranty on panels and inverters, plus a 10-year workmanship warranty. We stand behind every system we install.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative py-20 overflow-hidden bg-surface-container-low">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/1 Wind.png"
          alt="Solar background"
          fill
          className="object-cover opacity-5"
          quality={30}
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-on-surface-variant font-body">
            Everything you need to know before making the switch to solar.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-[1.5rem] shadow-[0_8px_32px_-4px_rgba(27,28,26,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(27,28,26,0.05)] transition-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-on-surface font-headline">
                  {faq.q}
                </span>
                <span className={`material-symbols-outlined text-on-surface-variant transition-transform shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              <div className="px-6 overflow-hidden transition-[max-height] duration-300" style={{maxHeight: openIndex===i ? '500px' : '0px'}}>
                <div className="pb-4 text-on-surface-variant leading-relaxed font-body">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
