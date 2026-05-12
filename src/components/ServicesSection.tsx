import ServiceCard from "./ServiceCard";

const services = [
  {
    image: "/images/services-residential.jpg",
    title: "Residential Solar Systems",
    description: "Custom-designed solar panel systems for your home. Reduce or eliminate your electricity bills with clean, renewable energy that pays for itself.",
    icon: "home",
    quickFact: "Average 5-7 year payback period"
  },
  {
    image: "/images/services-commercial.jpg",
    title: "Commercial Solar Solutions",
    description: "Scale your business with commercial-grade solar installations. Lower operating costs and meet your sustainability goals with enterprise-level systems.",
    icon: "domain",
    quickFact: "Up to 40% reduction in operating costs"
  },
  {
    image: "/images/services-battery.jpg",
    title: "Battery Storage & Energy Independence",
    description: "Pair your solar system with battery storage to keep your home powered day and night, even during grid outages.",
    icon: "battery_charging_full",
    quickFact: "Stay powered during grid outages"
  },
  {
    image: "/images/services-maintenance.jpg",
    title: "Maintenance & Ongoing Support",
    description: "Keep your solar investment performing at peak efficiency with our comprehensive maintenance and support plans.",
    icon: "settings",
    quickFact: "25-year comprehensive warranty"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            The Solution Suite
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            From residential rooftops to large commercial installations, we deliver end-to-end solar solutions that power your future.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto md:auto-rows-[280px]">
          
          {/* Residential - Large Feature (2x2) */}
          <div className="sm:col-span-2 md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0 group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-500">
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${services[0].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/90" />
            </div>
            <div className="relative p-8 h-full flex flex-col justify-between text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {services[0].icon}
                </span>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-3">
                  {services[0].title}
                </h3>
                <p className="font-body text-white/90 text-sm mb-4 leading-relaxed">
                  {services[0].description}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    trending_up
                  </span>
                  <span className="font-label font-medium text-white text-xs">
                    {services[0].quickFact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Battery Storage - Medium (1x2) */}
          <div className="sm:col-span-1 md:row-span-2 min-h-[280px] md:min-h-0 group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary to-primary-container shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-500">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative p-6 h-full flex flex-col justify-between text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {services[2].icon}
                </span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold mb-2">
                  {services[2].title}
                </h3>
                <p className="font-body text-white/90 text-xs mb-3 leading-relaxed">
                  {services[2].description}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                  <span className="material-symbols-outlined text-accent text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    power
                  </span>
                  <span className="font-label font-medium text-white text-xs">
                    {services[2].quickFact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial - Medium (1x1) */}
          <div className="group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-surface-container-lowest shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-500">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {services[1].icon}
                </span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                  {services[1].title}
                </h3>
                <p className="font-body text-on-surface-variant text-xs mb-3 leading-relaxed">
                  Scale your business with enterprise-level solar solutions.
                </p>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1.5 border border-accent/20">
                  <span className="material-symbols-outlined text-accent text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    business
                  </span>
                  <span className="font-label font-medium text-accent text-xs">
                    {services[1].quickFact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance - Small (1x1) */}
          <div className="group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-surface-container-lowest shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-500">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {services[3].icon}
                </span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                  Maintenance & Support
                </h3>
                <p className="font-body text-on-surface-variant text-xs mb-3 leading-relaxed">
                  Keep your investment performing at peak efficiency.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield
                  </span>
                  <span className="font-label font-medium text-primary text-xs">
                    {services[3].quickFact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust/Stats Block - Wide (2x1) */}
          <div className="sm:col-span-2 md:col-span-2 bg-gradient-to-r from-accent via-accent-container to-accent rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.15)] relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="font-headline text-xl font-bold text-on-accent mb-2">
                The MS Green Standard
              </h3>
              <p className="font-body text-on-accent/90 text-sm max-w-sm">
                25 MW installed capacity across 5,000+ satisfied customers with industry-leading warranties.
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <span className="material-symbols-outlined text-white mb-1 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div className="font-headline font-bold text-white text-lg">25 MW</div>
                <div className="font-label text-[10px] text-white/80 uppercase tracking-wide">Installed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <span className="material-symbols-outlined text-white mb-1 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <div className="font-headline font-bold text-white text-lg">5,000+</div>
                <div className="font-label text-[10px] text-white/80 uppercase tracking-wide">Customers</div>
              </div>
            </div>
          </div>

          {/* CTA Block - Wide (2x1) */}
          <div className="sm:col-span-2 md:col-span-2 bg-surface-container-lowest rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">
                Ready to Customize Your System?
              </h3>
              <p className="font-body text-on-surface-variant text-sm">
                Get a personalized quote based on your energy needs and roof specifications.
              </p>
            </div>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-label font-bold text-sm hover:bg-primary-container transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
            >
              Customize My System
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
