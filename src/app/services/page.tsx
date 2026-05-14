"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: "residential",
    title: "Residential Solar",
    description: "Complete home energy independence. High-efficiency panels designed to reduce your electricity bills seamlessly.",
    image: "/images/3 Home.png",
    icon: "home",
    highlight: "Example System",
    highlightValue: "3 kW System",
    highlightSub: "Starting at ₹1,80,000",
    features: [
      "25-Year Performance Warranty",
      "Smart App Monitoring",
      "Net Metering Setup",
    ],
    ctaText: "Get a Quote",
    popular: true,
  },
  {
    id: "commercial",
    title: "Commercial Solutions",
    description: "Maximize ROI and meet corporate sustainability goals with our robust, large-scale energy systems.",
    image: "/images/4 Towers.png",
    icon: "domain",
    highlight: "Focus Area",
    highlightValue: "Accelerated ROI",
    highlightSub: "Customized tax & depreciation plans",
    features: [
      "Scalable Deployments (50kW+)",
      "Zero-Downtime Installation",
      "Dedicated Account Manager",
    ],
    ctaText: "Consult an Expert",
    popular: false,
  },
  {
    id: "battery",
    title: "Battery Storage",
    description: "Uninterrupted power supply. Store your excess solar energy for nighttime use or grid outages.",
    image: "/images/7 Solar panel zoom.png",
    icon: "battery_charging_full",
    highlight: "Key Benefit",
    highlightValue: "24/7 Backup",
    highlightSub: "",
    features: [
      "Lithium-Ion Technology",
      "Automated Switchover",
      "Expandable Capacity",
    ],
    ctaText: "View Storage Options",
    popular: false,
  },
];

const maintenancePlans = [
  {
    name: "Basic",
    subtitle: "Annual Checkup",
    features: ["1 Annual Cleaning", "Visual Inspection", "Performance Report"],
    recommended: false,
  },
  {
    name: "Premium",
    subtitle: "Proactive Care",
    features: ["2 Bi-Annual Cleanings", "Detailed Component Check", "Priority Support Queue"],
    recommended: true,
  },
  {
    name: "Enterprise",
    subtitle: "Maximum Uptime",
    features: ["Quarterly Maintenance", "24/7 Active Monitoring", "4-Hour Response SLA"],
    recommended: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/12 Solar panels.png"
            alt="Solar services overview"
            fill
            className="object-cover"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/85 to-primary/95" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Empower Your Energy Future
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our tiered solar solutions designed for maximum efficiency and sustainability.
            From home installations to commercial enterprise systems, we provide reliable, clean
            energy backed by industry-leading warranties.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-14">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.14)] transition-all duration-500 border border-outline-variant/15"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

                  {service.popular && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-primary text-on-primary rounded-full px-4 py-2 font-label font-bold text-sm shadow-lg">
                      <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="material-symbols-outlined text-primary text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {service.icon}
                    </span>
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-body text-on-surface-variant mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-surface-container rounded-xl p-5 mb-6 border border-outline-variant/15">
                    <div className="font-label text-primary text-xs font-semibold uppercase tracking-wider mb-1">
                      {service.highlight}
                    </div>
                    <div className="font-headline text-2xl font-bold text-on-surface">
                      {service.highlightValue}
                    </div>
                    {service.highlightSub && (
                      <div className="font-body text-on-surface-variant text-sm mt-1">
                        {service.highlightSub}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span
                          className="material-symbols-outlined text-primary text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="font-body text-on-surface-variant">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full font-label font-bold text-base transition-all duration-300 active:scale-95 ${
                      service.popular
                        ? "bg-accent text-on-accent shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] hover:bg-accent-container"
                        : "bg-surface-container-lowest text-on-surface border-2 border-outline-variant/30 hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {service.ctaText}
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Maintenance & Support Plans */}
          <div className="mt-16 sm:mt-20 bg-surface-container-lowest rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] border border-outline-variant/15">
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-3">
                Maintenance & Support Plans
              </h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">
                Ensure peak performance year-round with our dedicated service tiers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {maintenancePlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-6 transition-all duration-300 ${
                    plan.recommended
                      ? "bg-primary/5 border-2 border-primary/30 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.12)]"
                      : "bg-surface-container border border-outline-variant/20 hover:border-primary/20"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 right-4 bg-accent text-on-accent font-label font-bold text-xs px-3 py-1 rounded-full shadow-md">
                      Recommended
                    </div>
                  )}

                  <h3 className={`font-headline text-xl font-bold mb-1 ${
                    plan.recommended ? "text-primary" : "text-on-surface"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-5">
                    {plan.subtitle}
                  </p>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <span
                          className={`material-symbols-outlined text-base ${
                            plan.recommended ? "text-primary" : "text-on-surface-variant"
                          }`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="font-body text-on-surface-variant text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-on-primary rounded-full font-label font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.25)] active:scale-95"
            >
              Get Free Assessment
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}