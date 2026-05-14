import Link from "next/link";
import Image from "next/image";

const solutionLinks = [
  { name: "Residential Solar", href: "/services#residential" },
  { name: "Commercial Solutions", href: "/services#commercial" },
  { name: "Battery Storage", href: "/services#battery" },
  { name: "EV Charging", href: "/services" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/services" },
  { name: "Careers", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/privacy" },
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Brand + Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Section */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-accent text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  solar_power
                </span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight font-headline">
                MS Green Solar
              </span>
            </div>
            
            <p className="text-white/80 font-body text-sm leading-relaxed mb-6 max-w-sm">
              Empowering the energy transition with premium solar solutions for homes and businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <span className="material-symbols-outlined text-white text-lg">link</span>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <span className="material-symbols-outlined text-white text-lg">share</span>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-headline text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Solutions
            </h3>
            <div className="space-y-3">
              {solutionLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-body text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-headline text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Company
            </h3>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-body text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-headline text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Legal
            </h3>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-body text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body text-white/50 text-sm">
            © {new Date().getFullYear()} MS Green Solar. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-white/50 text-sm font-body">
            <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              location_on
            </span>
            United States (EN)
          </div>
        </div>
      </div>
    </footer>
  );
}
