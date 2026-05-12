"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "residential",
    title: "Residential Solar Systems",
    subtitle: "Power Your Home with Clean Energy",
    description: "Custom-designed solar panel systems for Indian homes. Reduce or eliminate your electricity bills with clean, renewable energy that pays for itself.",
    image: "/images/services-residential.jpg",
    icon: "home",
    features: [
      "Custom system sizing based on your energy consumption",
      "High-efficiency monocrystalline solar panels",
      "Advanced inverter technology with monitoring",
      "Net metering setup and grid connection",
      "25-year comprehensive warranty",
      "Professional installation by certified technicians"
    ],
    benefits: [
      "Save ₹15,000-₹50,000 annually on electricity bills",
      "5-7 year payback period with financing options",
      "Increase property value by 4-6%",
      "Reduce carbon footprint by 3-5 tons CO₂ annually",
      "Protection against rising electricity tariffs",
      "Government subsidies and tax benefits available"
    ],
    systemSizes: [
      { capacity: "3 kW", price: "₹1,80,000", homes: "2-3 BHK", savings: "₹18,000/year" },
      { capacity: "5 kW", price: "₹2,75,000", homes: "3-4 BHK", savings: "₹30,000/year" },
      { capacity: "7 kW", price: "₹3,50,000", homes: "4+ BHK", savings: "₹42,000/year" },
      { capacity: "10 kW", price: "₹4,75,000", homes: "Large Homes", savings: "₹60,000/year" }
    ],
    process: [
      "Site assessment and energy audit",
      "Custom system design and proposal",
      "Permits and approvals handling",
      "Professional installation (2-3 days)",
      "Grid connection and net metering setup",
      "System commissioning and handover"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Solar Solutions",
    subtitle: "Scale Your Business with Clean Energy",
    description: "Enterprise-grade solar installations for businesses, industries, and institutions. Reduce operating costs and meet sustainability goals.",
    image: "/images/services-commercial.jpg",
    icon: "domain",
    features: [
      "Large-scale rooftop and ground-mounted systems",
      "Industrial-grade equipment and monitoring",
      "Power Purchase Agreement (PPA) options",
      "Energy storage integration capabilities",
      "Comprehensive O&M services",
      "Performance guarantees and warranties"
    ],
    benefits: [
      "Reduce electricity costs by 30-50%",
      "Improve cash flow with predictable energy costs",
      "Meet corporate sustainability targets",
      "Accelerated depreciation tax benefits",
      "Enhanced brand reputation and ESG compliance",
      "Long-term energy price stability"
    ],
    systemSizes: [
      { capacity: "50 kW", price: "₹22,50,000", business: "Small Business", savings: "₹3,00,000/year" },
      { capacity: "100 kW", price: "₹42,00,000", business: "Medium Enterprise", savings: "₹6,00,000/year" },
      { capacity: "500 kW", price: "₹1,87,50,000", business: "Large Industry", savings: "₹30,00,000/year" },
      { capacity: "1 MW", price: "₹3,50,00,000", business: "Manufacturing", savings: "₹60,00,000/year" }
    ],
    process: [
      "Energy audit and feasibility study",
      "Financial modeling and ROI analysis",
      "Engineering design and approvals",
      "Procurement and project management",
      "Installation and commissioning",
      "Performance monitoring and maintenance"
    ]
  },
  {
    id: "battery",
    title: "Battery Storage & Energy Independence",
    subtitle: "Power When You Need It Most",
    description: "Advanced battery storage solutions to store solar energy for use during outages, peak hours, and night time.",
    image: "/images/services-battery.jpg",
    icon: "battery_charging_full",
    features: [
      "Lithium-ion battery technology",
      "Seamless backup power switching",
      "Smart energy management system",
      "Mobile app monitoring and control",
      "Scalable storage capacity",
      "Integration with existing solar systems"
    ],
    benefits: [
      "Uninterrupted power during grid outages",
      "Store excess solar energy for later use",
      "Reduce dependency on grid electricity",
      "Time-of-use optimization for cost savings",
      "Emergency backup for critical loads",
      "Increased energy independence"
    ],
    systemSizes: [
      { capacity: "5 kWh", price: "₹2,50,000", backup: "4-6 hours", usage: "Essential loads" },
      { capacity: "10 kWh", price: "₹4,50,000", backup: "8-12 hours", usage: "Partial home" },
      { capacity: "15 kWh", price: "₹6,25,000", backup: "12-18 hours", usage: "Full home backup" },
      { capacity: "20 kWh", price: "₹7,75,000", backup: "18-24 hours", usage: "Extended backup" }
    ],
    process: [
      "Load analysis and backup requirements",
      "Battery system sizing and design",
      "Installation and system integration",
      "Smart controls configuration",
      "Testing and commissioning",
      "Training and ongoing support"
    ]
  },
  {
    id: "maintenance",
    title: "Maintenance & Ongoing Support",
    subtitle: "Maximize Your Solar Investment",
    description: "Comprehensive maintenance and support services to ensure your solar system performs at peak efficiency throughout its 25-year lifespan.",
    image: "/images/services-maintenance.jpg",
    icon: "settings",
    features: [
      "Regular cleaning and inspection services",
      "Performance monitoring and analysis",
      "Preventive maintenance programs",
      "Rapid response repair services",
      "Component replacement and upgrades",
      "System optimization and tuning"
    ],
    benefits: [
      "Maintain optimal system performance",
      "Extend equipment lifespan",
      "Maximize energy production and savings",
      "Early detection of potential issues",
      "Warranty protection and compliance",
      "Peace of mind with professional support"
    ],
    servicePlans: [
      { 
        name: "Basic Care", 
        price: "₹3,000/year", 
        includes: ["Annual inspection", "Basic cleaning", "Performance report"],
        suitable: "Small residential systems"
      },
      { 
        name: "Premium Care", 
        price: "₹6,000/year", 
        includes: ["Bi-annual service", "Deep cleaning", "Monitoring", "Priority support"],
        suitable: "Large residential systems"
      },
      { 
        name: "Enterprise Care", 
        price: "₹15,000/year", 
        includes: ["Quarterly service", "24/7 monitoring", "Rapid response", "Performance guarantee"],
        suitable: "Commercial systems"
      },
      { 
        name: "Complete Care", 
        price: "₹25,000/year", 
        includes: ["Monthly service", "Real-time monitoring", "Immediate response", "Full coverage"],
        suitable: "Large commercial/industrial"
      }
    ],
    process: [
      "System assessment and service plan selection",
      "Scheduled maintenance visits",
      "Performance monitoring and reporting",
      "Issue identification and resolution",
      "Component replacement if needed",
      "Continuous optimization and support"
    ]
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("residential");
  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/divider-solar-panels.jpg"
            alt="Solar services overview"
            fill
            className="object-cover"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/85 to-primary/95" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Complete Solar Solutions
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From residential rooftops to large commercial installations, we deliver end-to-end solar solutions that power your future.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md rounded-full px-6 py-3 border border-accent/30">
            <span className="material-symbols-outlined text-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield
            </span>
            <span className="font-body font-semibold text-white">
              25-Year Comprehensive Warranty on All Services
            </span>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-4 sm:py-8 bg-surface-container-low sticky top-16 z-40 border-b border-outline-variant/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-body font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeService === service.id
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {service.icon}
                </span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {currentService.icon}
                  </span>
                </div>
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">
                    {currentService.title}
                  </h2>
                  <p className="font-body text-primary font-semibold text-lg">
                    {currentService.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="font-body text-on-surface-variant text-lg mb-8 leading-relaxed">
                {currentService.description}
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Key Features</h3>
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="font-body text-on-surface-variant">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_16px_48px_-8px_rgba(5,150,105,0.15)] group">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 text-center">
              Why Choose Our {currentService.title}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent text-xl mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      trending_up
                    </span>
                    <span className="font-body text-on-surface">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing/Options Section */}
          <div className="mb-20">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 text-center">
              {currentService.id === 'maintenance' ? 'Service Plans' : 'System Options & Pricing'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {(currentService.systemSizes || currentService.servicePlans || []).map((option: any, index) => (
                <div key={index} className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="font-headline text-2xl font-bold text-primary mb-2">
                      {option.capacity || option.name}
                    </div>
                    <div className="font-headline text-xl font-bold text-on-surface mb-4">
                      {option.price}
                    </div>
                    <div className="space-y-2 text-sm">
                      {option.homes && (
                        <div className="font-body text-on-surface-variant">
                          <span className="font-medium">Suitable for:</span> {option.homes}
                        </div>
                      )}
                      {option.business && (
                        <div className="font-body text-on-surface-variant">
                          <span className="font-medium">Suitable for:</span> {option.business}
                        </div>
                      )}
                      {option.backup && (
                        <div className="font-body text-on-surface-variant">
                          <span className="font-medium">Backup:</span> {option.backup}
                        </div>
                      )}
                      {option.usage && (
                        <div className="font-body text-on-surface-variant">
                          <span className="font-medium">Usage:</span> {option.usage}
                        </div>
                      )}
                      {option.suitable && (
                        <div className="font-body text-on-surface-variant">
                          <span className="font-medium">Best for:</span> {option.suitable}
                        </div>
                      )}
                      {option.savings && (
                        <div className="font-body text-accent font-semibold">
                          Annual Savings: {option.savings}
                        </div>
                      )}
                      {option.includes && (
                        <div className="space-y-1 mt-3">
                          {option.includes.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                                check
                              </span>
                              <span className="font-body text-on-surface-variant text-xs">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 text-center">
              Our Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-headline font-bold text-white text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-body text-on-surface">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary to-primary-container rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-12">
            <h3 className="font-headline text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              See if your roof qualifies for our {currentService.title.toLowerCase()} and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-on-accent rounded-full font-body font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] active:scale-95"
              >
                Get Free Assessment
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
              <a
                href="tel:+918004733676"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-body font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Call Now: +91-800-473-3676
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}