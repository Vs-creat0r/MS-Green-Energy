import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: "/images/3 Home.png",
    title: "Residential Solar",
    description: "Complete home energy independence. High-efficiency panels designed to reduce your electricity bills seamlessly.",
    icon: "home",
    highlight: "Example System",
    highlightValue: "3 kW System",
    highlightPrice: "Starting at ₹1,80,000",
    features: [
      "25-Year Performance Warranty",
      "Smart App Monitoring",
      "Net Metering Setup",
    ],
    ctaText: "Get a Quote",
    ctaLink: "/contact",
    popular: true,
  },
  {
    image: "/images/4 Towers.png",
    title: "Commercial Solutions",
    description: "Maximize ROI and meet corporate sustainability goals with our robust, large-scale energy systems.",
    icon: "domain",
    highlight: "Focus Area",
    highlightValue: "Accelerated ROI",
    highlightPrice: "Customized tax & depreciation plans",
    features: [
      "Scalable Deployments (50kW+)",
      "Zero-Downtime Installation",
      "Dedicated Account Manager",
    ],
    ctaText: "Consult an Expert",
    ctaLink: "/contact",
    popular: false,
  },
  {
    image: "/images/7 Solar panel zoom.png",
    title: "Battery Storage",
    description: "Uninterrupted power supply. Store your excess solar energy for nighttime use or grid outages.",
    icon: "battery_charging_full",
    highlight: "Key Benefit",
    highlightValue: "24/7 Backup",
    highlightPrice: "",
    features: [
      "Lithium-Ion Technology",
      "Automated Switchover",
      "Expandable Capacity",
    ],
    ctaText: "View Storage Options",
    ctaLink: "/services",
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

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4 tracking-tight">
            Empower Your Energy Future
          </h2>
          <p className="font-body text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our tiered solar solutions designed for maximum efficiency and sustainability.
            From home installations to commercial enterprise systems, we provide reliable, clean
            energy backed by industry-leading warranties.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.14)] transition-all duration-500 border border-outline-variant/15"
            >
              {/* Service Image */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-primary text-on-primary rounded-full px-4 py-2 font-label font-bold text-sm shadow-lg">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    Most Popular
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="material-symbols-outlined text-primary text-2xl mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {service.icon}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-on-surface">
                    {service.title}
                  </h3>
                </div>

                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlight Box */}
                {service.highlightValue && (
                  <div className="bg-surface-container rounded-xl p-4 mb-6 border border-outline-variant/15">
                    <div className="font-label text-primary text-xs font-semibold uppercase tracking-wider mb-1">
                      {service.highlight}
                    </div>
                    <div className="font-headline text-xl font-bold text-on-surface">
                      {service.highlightValue}
                    </div>
                    {service.highlightPrice && (
                      <div className="font-body text-on-surface-variant text-sm mt-1">
                        {service.highlightPrice}
                      </div>
                    )}
                  </div>
                )}

                {/* Features */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-primary text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body text-on-surface-variant text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={service.ctaLink}
                  className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-label font-bold text-sm transition-all duration-300 active:scale-95 ${
                    service.popular
                      ? "bg-accent text-on-accent shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] hover:bg-accent-container"
                      : "bg-surface-container-lowest text-on-surface border-2 border-outline-variant/30 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {service.ctaText}
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance & Support Plans */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] border border-outline-variant/15">
          <div className="text-center mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span
                className="material-symbols-outlined text-primary text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                support_agent
              </span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-3">
              Maintenance & Support Plans
            </h3>
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
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 right-4 bg-accent text-on-accent font-label font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    Recommended
                  </div>
                )}

                <h4 className={`font-headline text-xl font-bold mb-1 ${
                  plan.recommended ? "text-primary" : "text-on-surface"
                }`}>
                  {plan.name}
                </h4>
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
                      <span className="font-body text-on-surface-variant text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
