"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Z-Pattern: Top Left (Identity) */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                solar_power
              </span>
            </div>
            <span className="text-xl font-bold text-secondary tracking-tight font-headline">
              MS Green Solar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-body text-sm"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-body text-sm"
            >
              Services
            </Link>
            <Link
              href="/faqs"
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-body text-sm"
            >
              FAQs & Incentives
            </Link>
            
            {/* Phone Number - Trust Element */}
            <a
              href="tel:+918004733676"
              className="flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors font-body text-sm"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              +91-800-GREEN-SOL
            </a>
            
            {/* Primary CTA - Z-Pattern: Top Right (Action) */}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-accent text-on-accent rounded-full font-label font-bold text-sm tracking-wide hover:bg-accent-container transition-all duration-300 shadow-[0_4px_16px_-4px_rgba(245,158,11,0.25)] active:scale-95"
            >
              Get Free Assessment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Thumb-Zone Design */}
      {mobileOpen && (
        <div className={`md:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-4 pb-6 pt-4 space-y-3 transition-all duration-300 transform ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-on-surface-variant font-body hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-on-surface-variant font-body hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/faqs"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-on-surface-variant font-body hover:text-primary"
          >
            FAQs & Incentives
          </Link>
          
          {/* Mobile Phone - Prominent */}
          <a
            href="tel:+918004733676"
            className="flex items-center gap-3 py-3 text-secondary font-medium font-body"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            +91-800-GREEN-SOL
          </a>
          
          {/* Mobile CTA - Bottom 30% for thumb zone */}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-4 bg-accent text-on-accent rounded-full font-label font-bold text-sm shadow-lg"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA - Appears only on mobile, bottom 30% */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <Link
          href="tel:+918004733676"
          className="flex items-center justify-center gap-2 w-full py-4 bg-secondary text-on-secondary rounded-full font-label font-bold text-lg shadow-[0_8px_32px_-4px_rgba(30,41,59,0.25)] active:scale-95"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          Call Now
        </Link>
      </div>
    </header>
  );
}
