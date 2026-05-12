"use client";

import { useState } from "react";
import { useActionState } from "react";
import { submitLead } from "@/app/actions";
import Image from "next/image";

const initialState: { success: boolean; message: string } = {
  success: false,
  message: "",
};

const assessmentSteps = [
  {
    id: "property",
    title: "Property Details",
    icon: "home",
    fields: [
      {
        name: "address",
        label: "Property Address",
        type: "text",
        placeholder: "Enter your complete address",
        required: true
      },
      {
        name: "roof_type",
        label: "Roof Type",
        type: "select",
        options: [
          { value: "concrete_flat", label: "Concrete Flat Roof" },
          { value: "concrete_sloped", label: "Concrete Sloped Roof" },
          { value: "tile_roof", label: "Tile Roof" },
          { value: "metal_sheet", label: "Metal Sheet Roof" },
          { value: "asbestos", label: "Asbestos Sheet" },
          { value: "other", label: "Other" }
        ],
        required: true
      },
      {
        name: "roof_area",
        label: "Available Roof Area (sq ft)",
        type: "select",
        options: [
          { value: "200-400", label: "200-400 sq ft" },
          { value: "400-600", label: "400-600 sq ft" },
          { value: "600-1000", label: "600-1000 sq ft" },
          { value: "1000-1500", label: "1000-1500 sq ft" },
          { value: "1500+", label: "1500+ sq ft" }
        ],
        required: true
      },
      {
        name: "shading",
        label: "Shading on Roof",
        type: "select",
        options: [
          { value: "no_shading", label: "No Shading" },
          { value: "minimal", label: "Minimal Shading (morning/evening)" },
          { value: "partial", label: "Partial Shading (trees/buildings)" },
          { value: "significant", label: "Significant Shading" }
        ],
        required: true
      }
    ]
  },
  {
    id: "energy",
    title: "Energy Usage",
    icon: "bolt",
    fields: [
      {
        name: "monthly_bill",
        label: "Average Monthly Electricity Bill",
        type: "select",
        options: [
          { value: "1000-2000", label: "₹1,000 - ₹2,000" },
          { value: "2000-4000", label: "₹2,000 - ₹4,000" },
          { value: "4000-6000", label: "₹4,000 - ₹6,000" },
          { value: "6000-10000", label: "₹6,000 - ₹10,000" },
          { value: "10000-15000", label: "₹10,000 - ₹15,000" },
          { value: "15000+", label: "₹15,000+" }
        ],
        required: true
      },
      {
        name: "monthly_units",
        label: "Monthly Units Consumed (kWh)",
        type: "select",
        options: [
          { value: "100-200", label: "100-200 kWh" },
          { value: "200-400", label: "200-400 kWh" },
          { value: "400-600", label: "400-600 kWh" },
          { value: "600-1000", label: "600-1000 kWh" },
          { value: "1000+", label: "1000+ kWh" }
        ],
        required: true
      },
      {
        name: "usage_pattern",
        label: "Peak Usage Time",
        type: "select",
        options: [
          { value: "morning", label: "Morning (6 AM - 12 PM)" },
          { value: "afternoon", label: "Afternoon (12 PM - 6 PM)" },
          { value: "evening", label: "Evening (6 PM - 10 PM)" },
          { value: "night", label: "Night (10 PM - 6 AM)" },
          { value: "all_day", label: "Throughout the day" }
        ],
        required: true
      },
      {
        name: "backup_need",
        label: "Backup Power Requirement",
        type: "select",
        options: [
          { value: "no_backup", label: "No backup needed" },
          { value: "essential", label: "Essential loads only (lights, fans)" },
          { value: "partial", label: "Partial home backup" },
          { value: "full_backup", label: "Full home backup" }
        ],
        required: true
      }
    ]
  },
  {
    id: "goals",
    title: "Your Goals",
    icon: "flag",
    fields: [
      {
        name: "primary_goal",
        label: "Primary Goal",
        type: "select",
        options: [
          { value: "reduce_bills", label: "Reduce electricity bills" },
          { value: "environmental", label: "Environmental impact" },
          { value: "energy_independence", label: "Energy independence" },
          { value: "property_value", label: "Increase property value" },
          { value: "backup_power", label: "Backup power solution" }
        ],
        required: true
      },
      {
        name: "budget_range",
        label: "Budget Range",
        type: "select",
        options: [
          { value: "1-3", label: "₹1-3 Lakhs" },
          { value: "3-5", label: "₹3-5 Lakhs" },
          { value: "5-8", label: "₹5-8 Lakhs" },
          { value: "8-12", label: "₹8-12 Lakhs" },
          { value: "12+", label: "₹12+ Lakhs" },
          { value: "flexible", label: "Flexible based on ROI" }
        ],
        required: true
      },
      {
        name: "timeline",
        label: "Installation Timeline",
        type: "select",
        options: [
          { value: "immediate", label: "Immediate (within 1 month)" },
          { value: "1-3months", label: "1-3 months" },
          { value: "3-6months", label: "3-6 months" },
          { value: "6-12months", label: "6-12 months" },
          { value: "exploring", label: "Just exploring options" }
        ],
        required: true
      },
      {
        name: "financing_preference",
        label: "Financing Preference",
        type: "select",
        options: [
          { value: "cash", label: "Cash payment" },
          { value: "loan", label: "Solar loan" },
          { value: "emi", label: "EMI options" },
          { value: "lease", label: "Lease/PPA" },
          { value: "unsure", label: "Need guidance" }
        ],
        required: true
      }
    ]
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: "contact_mail",
    fields: [
      {
        name: "full_name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "your.email@example.com",
        required: true
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+91 98765 43210",
        required: true
      },
      {
        name: "zip_code",
        label: "PIN Code",
        type: "text",
        placeholder: "400001",
        required: true
      },
      {
        name: "preferred_contact",
        label: "Preferred Contact Method",
        type: "select",
        options: [
          { value: "phone", label: "Phone Call" },
          { value: "whatsapp", label: "WhatsApp" },
          { value: "email", label: "Email" },
          { value: "site_visit", label: "Site Visit" }
        ],
        required: true
      },
      {
        name: "best_time",
        label: "Best Time to Contact",
        type: "select",
        options: [
          { value: "morning", label: "Morning (9 AM - 12 PM)" },
          { value: "afternoon", label: "Afternoon (12 PM - 5 PM)" },
          { value: "evening", label: "Evening (5 PM - 8 PM)" },
          { value: "anytime", label: "Anytime" }
        ],
        required: true
      }
    ]
  }
];

const serviceAreas = [
  { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"] },
  { state: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"] },
  { state: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"] }
];

const contactMethods = [
  {
    title: "Call Us",
    subtitle: "Speak with Solar Experts",
    value: "+91-800-473-3676",
    href: "tel:+918004733676",
    icon: "call",
    hours: "Mon-Sat: 9 AM - 7 PM",
    response: "Immediate response"
  },
  {
    title: "WhatsApp",
    subtitle: "Quick Questions & Updates",
    value: "+91-98765-43210",
    href: "https://wa.me/919876543210",
    icon: "chat",
    hours: "24/7 Available",
    response: "Within 30 minutes"
  },
  {
    title: "Email",
    subtitle: "Detailed Inquiries",
    value: "info@msgreensolar.com",
    href: "mailto:info@msgreensolar.com",
    icon: "email",
    hours: "24/7 Available",
    response: "Within 2 hours"
  },
  {
    title: "Office Visit",
    subtitle: "Meet Our Team",
    value: "Schedule Appointment",
    href: "#assessment-form",
    icon: "location_on",
    hours: "Mon-Sat: 10 AM - 6 PM",
    response: "Same day available"
  }
];

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const currentStepData = assessmentSteps[currentStep];
  const isLastStep = currentStep === assessmentSteps.length - 1;
  const progress = ((currentStep + 1) / assessmentSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepComplete = () => {
    return currentStepData.fields.every(field => {
      if (field.required) {
        return formData[field.name] && formData[field.name].trim() !== '';
      }
      return true;
    });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-solar-farm.jpg"
            alt="Solar consultation and assessment"
            fill
            className="object-cover"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/85 to-primary/95" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Get Your Free Solar Assessment
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Personalized consultation, detailed analysis, and custom proposal - all at no cost. Results delivered within 24 hours.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-lg font-bold text-white">Free</div>
              <div className="font-body text-white/80 text-sm">No Cost Assessment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-lg font-bold text-white">24 Hours</div>
              <div className="font-body text-white/80 text-sm">Quick Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="font-headline text-lg font-bold text-white">No Obligation</div>
              <div className="font-body text-white/80 text-sm">Pressure-Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section id="assessment-form" className="py-20 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Detailed Solar Assessment
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Help us understand your needs for a personalized solar solution and accurate savings estimate.
            </p>
          </div>

          {/* Progressive Assessment Form */}
          <div className="bg-surface-container-lowest rounded-[2rem] shadow-[0_32px_64px_-15px_rgba(5,150,105,0.1)] overflow-hidden">
            
            {/* Progress Bar */}
            <div className="h-3 bg-surface-container">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-5 sm:p-8 md:p-12">
              {/* Step Indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-on-surface-variant font-body">
                    Step {currentStep + 1} of {assessmentSteps.length}
                  </span>
                  <div className="flex gap-2">
                    {assessmentSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index <= currentStep ? 'bg-primary' : 'bg-outline-variant'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {currentStepData.icon}
                  </span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
                  {currentStepData.title}
                </h3>
              </div>

              {/* Form Fields */}
              <form className="space-y-6 max-w-2xl mx-auto">
                {currentStepData.fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-on-surface-variant mb-2 font-body">
                      {field.label} {field.required && <span className="text-accent">*</span>}
                    </label>
                    
                    {field.type === 'select' ? (
                      <select
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300"
                        required={field.required}
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
              </form>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-8 sm:mt-12">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                    currentStep === 0
                      ? 'text-outline-variant cursor-not-allowed'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back
                </button>

                {isLastStep ? (
                  <button
                    onClick={() => {
                      // Submit form with all collected data
                      const form = new FormData();
                      Object.entries(formData).forEach(([key, value]) => {
                        form.append(key, value);
                      });
                      formAction(form);
                    }}
                    disabled={!isStepComplete() || pending}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-on-accent rounded-full font-body font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {pending ? 'Submitting...' : 'Get My Assessment'}
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!isStepComplete()}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-body font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Next Step
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                )}
              </div>

              {/* Success/Error Message */}
              {state.message && (
                <div
                  className={`text-center text-sm font-medium rounded-lg p-4 mt-6 font-body ${
                    state.success
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-error/10 text-error border border-error/20"
                  }`}
                >
                  {state.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Choose your preferred method to get in touch. Our solar experts are ready to help you make the switch to clean energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {method.icon}
                  </span>
                </div>
                
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                  {method.title}
                </h3>
                
                <p className="font-body text-on-surface-variant text-sm mb-3">
                  {method.subtitle}
                </p>
                
                <div className="font-body text-primary font-semibold text-sm mb-2">
                  {method.value}
                </div>
                
                <div className="space-y-1">
                  <div className="font-body text-on-surface-variant text-xs">
                    {method.hours}
                  </div>
                  <div className="font-body text-accent text-xs font-medium">
                    {method.response}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Our Service Areas
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              We provide solar installation and maintenance services across major cities in India with local teams and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  {area.state}
                </h3>
                
                <div className="space-y-2">
                  {area.cities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span className="font-body text-on-surface-variant text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-on-surface-variant mb-6">
              Don't see your city? We're expanding rapidly across India.
            </p>
            <a
              href="tel:+918004733676"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-body font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              Check Service Availability
            </a>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              What Happens Next?
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Our streamlined process ensures you get accurate information and personalized recommendations quickly.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Assessment Review",
                description: "Our solar experts review your assessment within 2 hours and prepare a preliminary analysis of your solar potential.",
                timeline: "Within 2 hours"
              },
              {
                step: "2",
                title: "Initial Consultation",
                description: "We contact you via your preferred method to discuss your needs, answer questions, and schedule a site visit if needed.",
                timeline: "Within 24 hours"
              },
              {
                step: "3",
                title: "Detailed Proposal",
                description: "Receive a comprehensive proposal with system design, pricing, financing options, and projected savings analysis.",
                timeline: "Within 48 hours"
              },
              {
                step: "4",
                title: "Site Visit & Finalization",
                description: "Our certified technician visits your property for final measurements and system optimization before installation.",
                timeline: "Within 1 week"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-headline font-bold text-white text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-headline text-xl font-bold text-on-surface">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 bg-accent/10 rounded-full px-3 py-1 mt-2 md:mt-0">
                      <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        schedule
                      </span>
                      <span className="font-body text-accent text-sm font-medium">
                        {item.timeline}
                      </span>
                    </span>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}