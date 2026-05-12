"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    location: "Mumbai, Maharashtra",
    system: "5kW Residential System",
    savings: "₹35,000/year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    quote: "MS Green Solar transformed our home energy costs. We're now saving ₹35,000 annually and our electricity bills have dropped by 80%. The installation was professional and completed in just 2 days.",
    rating: 5,
    beforeBill: "₹4,500/month",
    afterBill: "₹900/month"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    system: "7kW Residential System",
    savings: "₹48,000/year",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80",
    quote: "Best investment we've made for our home. The system pays for itself in 6 years, and we have 19 more years of free electricity. The monitoring app shows real-time generation - it's amazing!",
    rating: 5,
    beforeBill: "₹6,200/month",
    afterBill: "₹1,200/month"
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Bangalore, Karnataka",
    system: "3kW Residential System",
    savings: "₹22,000/year",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    quote: "Excellent service from consultation to installation. The team handled all government approvals and net metering setup. Our 3kW system generates more power than expected, even during monsoon.",
    rating: 5,
    beforeBill: "₹2,800/month",
    afterBill: "₹450/month"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    system: "10kW Commercial System",
    savings: "₹85,000/year",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    quote: "Our office building's electricity costs dropped by 70% after installing MS Green Solar system. The ROI is excellent and we're contributing to environmental sustainability. Highly recommended!",
    rating: 5,
    beforeBill: "₹12,000/month",
    afterBill: "₹3,500/month"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    system: "6kW Residential + Battery",
    savings: "₹42,000/year",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    quote: "The battery backup system is a game-changer. We have uninterrupted power even during grid outages. The system has been running flawlessly for 2 years with minimal maintenance required.",
    rating: 5,
    beforeBill: "₹5,500/month",
    afterBill: "₹1,000/month"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Real stories from real customers who've made the switch to clean, affordable solar energy.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_16px_48px_-8px_rgba(5,150,105,0.1)] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Customer Info */}
            <div className="text-center lg:text-left">
              <div className="relative w-24 h-24 mx-auto lg:mx-0 mb-4">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="rounded-full object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
              
              <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
                {currentTestimonial.name}
              </h3>
              
              <p className="font-body text-on-surface-variant text-sm mb-3">
                {currentTestimonial.location}
              </p>

              {/* Rating */}
              <div className="flex justify-center lg:justify-start gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* System Info */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    solar_power
                  </span>
                  <span className="font-body text-primary text-xs font-medium">
                    {currentTestimonial.system}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1 ml-2">
                  <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    savings
                  </span>
                  <span className="font-body text-accent text-xs font-medium">
                    Saves {currentTestimonial.savings}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="lg:col-span-2">
              <div className="relative">
                <span className="material-symbols-outlined text-primary/20 text-6xl absolute -top-4 -left-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                  format_quote
                </span>
                <blockquote className="font-body text-on-surface text-lg leading-relaxed pl-8">
                  {currentTestimonial.quote}
                </blockquote>
              </div>

              {/* Before/After Bills */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-surface-container rounded-xl p-4 text-center">
                  <div className="font-body text-on-surface-variant text-xs mb-1">Before Solar</div>
                  <div className="font-headline text-lg font-bold text-error">
                    {currentTestimonial.beforeBill}
                  </div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <div className="font-body text-primary text-xs mb-1">After Solar</div>
                  <div className="font-headline text-lg font-bold text-primary">
                    {currentTestimonial.afterBill}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface-container hover:bg-surface-container-high rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
          >
            <span className="material-symbols-outlined text-on-surface-variant">chevron_left</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface-container hover:bg-surface-container-high rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
          >
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-outline-variant hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-primary mb-2">4.9★</div>
            <div className="font-body text-on-surface-variant text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-primary mb-2">5,000+</div>
            <div className="font-body text-on-surface-variant text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-primary mb-2">₹45,000</div>
            <div className="font-body text-on-surface-variant text-sm">Avg. Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-3xl font-bold text-primary mb-2">6 Years</div>
            <div className="font-body text-on-surface-variant text-sm">Avg. Payback Period</div>
          </div>
        </div>
      </div>
    </section>
  );
}