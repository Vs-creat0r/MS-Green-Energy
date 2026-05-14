"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    id: "cost-financing",
    title: "Cost & Financing",
    icon: "payments",
    faqs: [
      {
        question: "How much does solar really cost in India?",
        answer: "Solar system costs vary based on size and quality. For residential systems: 3kW costs ₹1,80,000, 5kW costs ₹2,75,000, and 10kW costs ₹4,75,000. These prices include panels, inverters, installation, and 25-year warranty. With government subsidies (₹14,588/kW for systems up to 3kW), net metering, and financing options, most customers see positive cash flow from day one."
      },
      {
        question: "What financing options are available?",
        answer: "We offer multiple financing solutions: (1) Zero down payment with solar loans at 8.5-12% interest, (2) Lease-to-own programs with monthly payments lower than your current electricity bill, (3) Power Purchase Agreements (PPA) where you pay only for the power generated, (4) EMI options through our banking partners, and (5) Corporate financing for commercial projects. Most customers qualify for financing with minimal documentation."
      },
      {
        question: "How do I qualify for government subsidies and incentives?",
        answer: "Central Government provides ₹14,588/kW subsidy for residential systems up to 3kW, and ₹7,294/kW for systems between 3-10kW. State governments offer additional incentives - Maharashtra provides net metering benefits, Gujarat offers generation-based incentives, and Karnataka has accelerated depreciation for commercial systems. We handle all subsidy applications and ensure you receive maximum benefits. Commercial customers can claim 40% accelerated depreciation in the first year."
      },
      {
        question: "What's the payback period for solar investment?",
        answer: "Typical payback period is 5-7 years for residential systems and 3-5 years for commercial systems. Factors affecting payback: system size, local electricity rates, solar irradiation, financing terms, and government incentives. After payback, you enjoy 18+ years of free electricity. With rising electricity tariffs (8-12% annually), solar provides protection against future rate increases."
      },
      {
        question: "Are there any hidden costs or maintenance fees?",
        answer: "No hidden costs. Our quoted price includes panels, inverters, mounting structures, cables, installation, commissioning, and 25-year warranty. Optional services: annual maintenance (₹3,000-₹6,000), insurance (₹5,000-₹15,000 annually), and extended monitoring services. We provide transparent pricing with detailed breakdowns. All permits, approvals, and net metering setup costs are included in our packages."
      }
    ]
  },
  {
    id: "installation-process",
    title: "Installation Process",
    icon: "construction",
    faqs: [
      {
        question: "Will solar installation damage my roof?",
        answer: "No, when installed properly by certified professionals. We use advanced mounting systems that don't penetrate the roof structure. For concrete roofs, we use ballast mounting or chemical anchors. For metal roofs, we use clamps that attach to existing seams. Our installation includes waterproofing at all attachment points and comes with a 25-year structural warranty. We've completed 5,000+ installations with zero roof damage claims."
      },
      {
        question: "How long does installation take?",
        answer: "Residential installations (3-10kW) typically take 2-3 days. Commercial projects (50kW+) take 1-4 weeks depending on size. Timeline breakdown: Day 1 - Site preparation and mounting structure installation, Day 2 - Panel installation and DC wiring, Day 3 - Inverter installation, AC wiring, and system commissioning. Weather conditions may extend timeline by 1-2 days. We provide daily progress updates and minimize disruption to your routine."
      },
      {
        question: "What happens during monsoon or bad weather?",
        answer: "Solar panels are designed to withstand extreme weather including heavy rain, hail, and winds up to 200 km/h. During monsoon, panels continue generating electricity from diffused sunlight, producing 20-40% of peak capacity. Our systems include lightning protection and surge arresters. Installation is paused during heavy rain for safety, but light rain doesn't affect the process. All equipment carries weather-resistance certifications (IP65/IP67 ratings)."
      },
      {
        question: "Do I need special permits or approvals?",
        answer: "Yes, but we handle all paperwork. Required approvals include: (1) Electricity board approval for net metering, (2) Municipal building permissions if required, (3) Fire department clearance for commercial projects, (4) Electrical inspector approval, and (5) Subsidy application processing. We have dedicated teams for approvals in each state and maintain relationships with local authorities. Typical approval timeline is 2-4 weeks, which we process while manufacturing your system."
      },
      {
        question: "Can solar be installed on any type of roof?",
        answer: "Solar can be installed on most roof types: concrete flat roofs, sloped tile roofs, metal roofing, and even ground-mounted systems. Roof requirements: minimum 200 sq ft area, structurally sound (can support 15-20 kg/sq meter), minimal shading, and south/west-facing orientation preferred. We conduct structural assessments and can recommend reinforcement if needed. For unsuitable roofs, we offer ground-mounted or carport solutions."
      }
    ]
  },
  {
    id: "technical-performance",
    title: "Technical & Performance",
    icon: "settings",
    faqs: [
      {
        question: "What happens at night or on cloudy days?",
        answer: "Solar panels don't generate electricity at night, so you draw power from the grid through net metering. During cloudy days, panels produce 20-40% of peak capacity from diffused sunlight. With net metering, excess power generated during sunny periods is fed into the grid, earning you credits for nighttime consumption. Battery storage systems can provide backup power during outages and store excess energy for later use."
      },
      {
        question: "How long do solar panels actually last?",
        answer: "Solar panels are designed to last 25+ years with minimal degradation. Quality panels lose only 0.5-0.7% efficiency annually, retaining 80%+ capacity after 25 years. Inverters typically last 10-15 years and may need replacement once during the system's lifetime. Our panels come with 25-year performance warranty guaranteeing 80% output after 25 years. With proper maintenance, systems can operate efficiently for 30+ years."
      },
      {
        question: "Can I monitor my system's performance?",
        answer: "Yes, all our systems include smart monitoring. Features include: real-time power generation tracking, daily/monthly/yearly energy reports, performance alerts and fault notifications, weather impact analysis, carbon footprint tracking, and mobile app access. Commercial systems get advanced monitoring with string-level diagnostics. You can track ROI, compare with neighbors, and receive maintenance alerts. Our support team monitors all systems 24/7 for optimal performance."
      },
      {
        question: "What happens if panels get dirty or damaged?",
        answer: "Dust and dirt can reduce efficiency by 5-15%, so regular cleaning is important. Rain naturally cleans panels, but manual cleaning 2-4 times yearly is recommended. Our maintenance plans include professional cleaning services. For damage: panels are covered by comprehensive insurance and warranty. Hail, storm, or accidental damage is typically covered. Individual panel replacement doesn't affect system operation due to bypass diodes and optimizers."
      },
      {
        question: "How does net metering work in India?",
        answer: "Net metering allows you to sell excess solar power to the grid and buy back when needed. Your electricity meter runs backward when generating excess power, earning credits. Billing is done monthly/quarterly based on net consumption. Rates vary by state: some offer 1:1 credit, others pay feed-in tariffs. Unused credits typically carry forward for 12 months. We handle all net metering applications and setup with your local electricity board."
      }
    ]
  },
  {
    id: "incentives-policies",
    title: "Incentives & Policies",
    icon: "policy",
    faqs: [
      {
        question: "What government incentives are currently available?",
        answer: "Central Government Subsidies: ₹14,588/kW for systems up to 3kW, ₹7,294/kW for 3-10kW systems. State Incentives vary: Maharashtra offers net metering and generation incentives, Gujarat provides additional subsidies and wheeling benefits, Karnataka offers accelerated depreciation, Tamil Nadu has favorable net metering policies. Commercial benefits include 40% accelerated depreciation in first year, reduced GST rates, and priority sector lending. We track all current incentives and ensure maximum benefit utilization."
      },
      {
        question: "How do tax benefits work for solar installations?",
        answer: "For Individuals: Claim depreciation on solar assets, deduct loan interest under Section 24(b) if installed on rented property, and potential income tax benefits on solar income. For Businesses: 40% accelerated depreciation in first year, remaining 60% over 4 years, GST input credit on solar equipment, and reduced corporate tax rates for renewable energy companies. We provide detailed tax benefit calculations and connect you with CA partners for optimal tax planning."
      },
      {
        question: "What are the latest policy changes affecting solar?",
        answer: "Recent positive changes: Extended net metering policies in most states, simplified approval processes, increased subsidy allocations, reduced GST rates (5% on solar systems), and mandatory renewable energy certificates for large consumers. Upcoming changes: Rooftop solar mandates for new buildings, increased renewable purchase obligations, and potential feed-in tariff improvements. We stay updated on all policy changes and advise customers on optimal timing for installations."
      },
      {
        question: "Are there special programs for different customer segments?",
        answer: "Yes, multiple targeted programs: Residential - PM-KUSUM scheme for farmers, housing society group installations, and women entrepreneur incentives. Commercial - Priority sector lending for MSMEs, special rates for educational institutions, and industrial park group installations. Agricultural - Solar water pumps with 90% subsidy, solar cold storage incentives, and agri-voltaic pilot programs. We help identify and apply for relevant programs based on your profile."
      },
      {
        question: "How do policies vary across different states?",
        answer: "State policies significantly impact solar economics: Maharashtra - excellent net metering, group net metering allowed, and virtual net metering for apartments. Gujarat - highest solar adoption, favorable policies, and additional state subsidies. Karnataka - good commercial policies, accelerated depreciation benefits, and open access options. Rajasthan - large-scale solar parks, good irradiation, and supportive policies. We provide state-specific guidance and optimize installations based on local policies."
      }
    ]
  }
];

const incentivePrograms = [
  {
    title: "Central Government Subsidy",
    amount: "Up to ₹78,000",
    description: "Direct subsidy on residential solar installations",
    eligibility: "Residential customers, systems up to 10kW",
    icon: "account_balance"
  },
  {
    title: "Accelerated Depreciation",
    amount: "40% in Year 1",
    description: "Tax benefit for commercial solar installations",
    eligibility: "Businesses and commercial entities",
    icon: "trending_down"
  },
  {
    title: "Net Metering Benefits",
    amount: "1:1 Credit Ratio",
    description: "Sell excess power back to the grid",
    eligibility: "All grid-connected solar systems",
    icon: "swap_horiz"
  },
  {
    title: "Priority Sector Lending",
    amount: "Low Interest Rates",
    description: "Preferential loan rates for solar projects",
    eligibility: "All customer segments",
    icon: "percent"
  }
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("cost-financing");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory) || faqCategories[0];

  const toggleFAQ = (index: number) => {
    const faqId = `${activeCategory}-${index}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/8 Solar with car.png"
            alt="Solar FAQ and resources"
            fill
            className="object-cover"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/85 to-primary/95" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Solar FAQs & Resources
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get answers to all your solar questions. We've compiled the most common concerns and detailed explanations to help you make an informed decision.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md rounded-full px-6 py-3 border border-accent/30">
            <span className="material-symbols-outlined text-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              support_agent
            </span>
            <span className="font-body font-semibold text-white">
              Still have questions? Call +91-800-473-3676
            </span>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-4 sm:py-8 bg-surface-container-low sticky top-16 z-40 border-b border-outline-variant/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-body font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {category.icon}
                </span>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              {currentCategory.title}
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Detailed answers to help you understand every aspect of solar energy.
            </p>
          </div>

          <div className="space-y-4">
            {currentCategory.faqs.map((faq, index) => {
              const faqId = `${activeCategory}-${index}`;
              const isOpen = openFAQ === faqId;
              
              return (
                <div key={index} className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-surface-container transition-colors duration-200"
                  >
                    <h3 className="font-headline text-lg font-semibold text-on-surface pr-4">
                      {faq.question}
                    </h3>
                    <span className={`material-symbols-outlined text-primary text-2xl transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-outline-variant/20 pt-4">
                        <p className="font-body text-on-surface-variant leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incentives & Programs Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Current Incentives & Programs
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Take advantage of government subsidies, tax benefits, and financing programs to maximize your solar investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {incentivePrograms.map((program, index) => (
              <div key={index} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {program.icon}
                  </span>
                </div>
                
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                  {program.title}
                </h3>
                
                <div className="font-headline text-xl font-bold text-accent mb-3">
                  {program.amount}
                </div>
                
                <p className="font-body text-on-surface-variant text-sm mb-4">
                  {program.description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    info
                  </span>
                  <span className="font-body text-secondary text-xs font-medium">
                    {program.eligibility}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Incentive Calculator CTA */}
          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-primary to-primary-container rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-12">
            <h3 className="font-headline text-2xl font-bold text-white mb-4">
              Calculate Your Total Incentives
            </h3>
            <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a personalized breakdown of all available subsidies, tax benefits, and financing options for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-on-accent rounded-full font-body font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] active:scale-95"
              >
                Get Incentive Breakdown
                <span className="material-symbols-outlined text-xl">calculate</span>
              </Link>
              <a
                href="tel:+918004733676"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-body font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Speak with Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
            Still Have Questions?
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Our solar experts are here to help. Get personalized answers and guidance for your specific situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  call
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Call Us</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4">Speak directly with our solar experts</p>
              <a href="tel:+918004733676" className="font-body text-primary font-semibold hover:text-primary-container transition-colors">
                +91-800-473-3676
              </a>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  email
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Email Us</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4">Get detailed written responses</p>
              <a href="mailto:info@msgreensolar.com" className="font-body text-primary font-semibold hover:text-primary-container transition-colors">
                info@msgreensolar.com
              </a>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  schedule
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Schedule Consultation</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4">Book a free site assessment</p>
              <Link href="/#quote" className="font-body text-primary font-semibold hover:text-primary-container transition-colors">
                Book Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}