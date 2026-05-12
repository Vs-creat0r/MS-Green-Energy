import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs & Resources", href: "/faqs" },
  { name: "Free Assessment", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

const services = [
  { name: "Residential Solar", href: "/services#residential" },
  { name: "Commercial Solar", href: "/services#commercial" },
  { name: "Battery Storage", href: "/services#battery" },
  { name: "Maintenance Plans", href: "/services#maintenance" }
];

const contactInfo = [
  { 
    icon: "call", 
    label: "Call Us", 
    value: "+91-800-473-3676", 
    href: "tel:+918004733676" 
  },
  { 
    icon: "email", 
    label: "Email", 
    value: "info@msgreensolar.com", 
    href: "mailto:info@msgreensolar.com" 
  },
  { 
    icon: "chat", 
    label: "WhatsApp", 
    value: "+91-98765-43210", 
    href: "https://wa.me/919876543210" 
  }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <Image
          src="/images/9 Solar with sun.png"
          alt="Solar panels at sunset"
          fill
          className="object-cover opacity-10"
          quality={40}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-accent text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  solar_power
                </span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight font-headline">
                MS Green Solar
              </span>
            </div>
            
            <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-md">
              Empowering India's transition to clean energy. From residential rooftops to large commercial installations, we deliver reliable solar solutions with 25-year warranties.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="font-headline text-lg font-bold text-white">15+</div>
                <div className="font-body text-white/70 text-xs">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="font-headline text-lg font-bold text-white">25 MW</div>
                <div className="font-body text-white/70 text-xs">Installed Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="font-headline text-lg font-bold text-white">5,000+</div>
                <div className="font-body text-white/70 text-xs">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="font-headline text-lg font-bold text-white">₹0</div>
                <div className="font-body text-white/70 text-xs">Down Payment</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-bold text-white mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-body text-white/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline text-lg font-bold text-white mb-6">
              Our Services
            </h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block font-body text-white/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            
            {/* Contact Methods */}
            <div className="lg:col-span-3">
              <h3 className="font-headline text-lg font-bold text-white mb-4">
                Get in Touch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <span className="material-symbols-outlined text-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {contact.icon}
                    </span>
                    <div>
                      <div className="font-body text-white/70 text-xs">{contact.label}</div>
                      <div className="font-body text-white font-medium text-sm group-hover:text-accent transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-on-accent rounded-full font-body font-bold text-sm hover:bg-accent-container transition-all duration-300 shadow-lg active:scale-95"
              >
                Start Your Solar Journey
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body text-white/70 text-sm">
            © {new Date().getFullYear()} MS Green Solar Systems Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              <span className="font-body text-white/70 text-xs">MNRE Empaneled</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield
              </span>
              <span className="font-body text-white/70 text-xs">25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              <span className="font-body text-white/70 text-xs">Carbon Neutral</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
