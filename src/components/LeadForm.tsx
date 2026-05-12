"use client";

import { useActionState, useState } from "react";
import { submitLead } from "@/app/actions";
import Image from "next/image";

const initialState: { success: boolean; message: string } = {
  success: false,
  message: "",
};

// Progressive Disclosure Form Steps
const FORM_STEPS = [
  {
    id: "monthly_bill",
    question: "What is your average monthly electricity bill?",
    type: "select",
    options: [
      { value: "₹500-1000", label: "₹500 - ₹1000" },
      { value: "₹1,000-₹2,000", label: "₹1,000 - ₹2,000" },
      { value: "₹2,000-₹4,000", label: "₹2,000 - ₹4,000" },
      { value: "₹4,000-₹6,000", label: "₹4,000 - ₹6,000" },
      { value: "₹6,000-₹10,000", label: "₹6,000 - ₹10,000" },
      { value: "₹10,000+", label: "₹10,000+" },
    ],
    icon: "receipt_long"
  },
  {
    id: "state",
    question: "What state are you located in?",
    type: "select",
    options: [
      { value: "MH", label: "Maharashtra" },
      { value: "GJ", label: "Gujarat" },
      { value: "KA", label: "Karnataka" },
      { value: "TN", label: "Tamil Nadu" },
      { value: "RJ", label: "Rajasthan" },
      { value: "UP", label: "Uttar Pradesh" },
      { value: "MP", label: "Madhya Pradesh" },
      { value: "WB", label: "West Bengal" },
      { value: "AP", label: "Andhra Pradesh" },
      { value: "TG", label: "Telangana" },
      { value: "KL", label: "Kerala" },
      { value: "OR", label: "Odisha" },
      { value: "PB", label: "Punjab" },
      { value: "HR", label: "Haryana" },
      { value: "DL", label: "Delhi" },
    ],
    icon: "location_on"
  },
  {
    id: "contact_info",
    question: "Where should we send your personalized savings report?",
    type: "contact",
    icon: "contact_mail"
  }
];

export default function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    monthly_bill: "",
    state: "",
    full_name: "",
    email: "",
    phone: "",
    zip_code: "",
  });

  const currentStepData = FORM_STEPS[currentStep];
  const isLastStep = currentStep === FORM_STEPS.length - 1;
  const progress = ((currentStep + 1) / FORM_STEPS.length) * 100;

  const handleNext = (value?: string) => {
    if (currentStepData.type === "select" && value) {
      setFormData(prev => ({ ...prev, [currentStepData.id]: value }));
      if (!isLastStep) {
        setCurrentStep(prev => prev + 1);
      }
    } else if (currentStepData.type === "contact") {
      // Handle contact form submission
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form && form.checkValidity()) {
        // Form will be submitted via formAction
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleContactInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quote" className="relative py-20 overflow-hidden">
      {/* Background with Scarcity Banner */}
      <div className="absolute inset-0">
        <Image
          src="/images/12 Solar panels.png"
          alt="Solar panels with blue sky"
          fill
          className="object-cover"
          quality={60}
        />
        <div className="absolute inset-0 bg-surface/94" />
      </div>

      {/* Scarcity/Urgency Banner */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-accent/10 border border-accent/20 rounded-full px-6 py-3 text-center">
          <span className="font-label font-semibold text-accent text-sm">
            ⚡ The 30% Central Government Subsidy is available until 2025 — Secure your benefits today
          </span>
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Get Your Free Solar Assessment
          </h2>
          <p className="text-lg text-on-surface-variant font-body">
            Answer a few quick questions to receive your personalized savings report within 24 hours.
          </p>
        </div>

        {/* Progressive Form Container */}
        <div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-[2rem] shadow-[0_32px_64px_-15px_rgba(5,150,105,0.1)] overflow-hidden">
          
          {/* Progress Bar */}
          <div className="h-2 bg-surface-container">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8 md:p-10">
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8">
              <span className="text-sm font-medium text-on-surface-variant font-body">
                Step {currentStep + 1} of {FORM_STEPS.length}
              </span>
            </div>

            {/* Question Content */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {currentStepData.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface mb-2">
                {currentStepData.question}
              </h3>
            </div>

            {/* Form Content */}
            {currentStepData.type === "select" && (
              <div className="space-y-3 max-w-md mx-auto">
                {currentStepData.options?.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext(option.value)}
                    className="w-full p-4 text-left bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/20 rounded-xl transition-all duration-200 hover:border-primary/40 hover:shadow-md group"
                  >
                    <span className="font-body text-on-surface group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {currentStepData.type === "contact" && (
              <form id="contact-form" action={formAction} className="space-y-6 max-w-md mx-auto">
                {/* Hidden fields for previous answers */}
                <input type="hidden" name="monthly_bill" value={formData.monthly_bill} />
                <input type="hidden" name="state" value={formData.state} />
                
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-on-surface-variant mb-2 font-body">
                    Full Name *
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.full_name}
                    onChange={(e) => handleContactInputChange("full_name", e.target.value)}
                    className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2 font-body">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleContactInputChange("email", e.target.value)}
                    className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-on-surface-variant mb-2 font-body">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleContactInputChange("phone", e.target.value)}
                      className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip_code" className="block text-sm font-medium text-on-surface-variant mb-2 font-body">
                      ZIP Code *
                    </label>
                    <input
                      id="zip_code"
                      name="zip_code"
                      type="text"
                      required
                      placeholder="400001"
                      value={formData.zip_code}
                      onChange={(e) => handleContactInputChange("zip_code", e.target.value)}
                      className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full py-4 bg-accent text-on-accent rounded-full font-label font-bold text-lg hover:bg-accent-container transition-all shadow-[0_8px_32px_rgba(245,158,11,0.25)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {pending ? "Generating Your Report..." : "Get My Savings Report"}
                </button>
              </form>
            )}

            {/* Navigation */}
            {currentStep > 0 && currentStepData.type !== "contact" && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-6 py-3 text-on-surface-variant hover:text-primary transition-colors font-body"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back
                </button>
              </div>
            )}

            {/* Success/Error Message */}
            {state.message && (
              <div
                className={`text-center text-sm font-medium rounded-lg p-3 mt-6 font-body ${
                  state.success
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-error/10 text-error border border-error/20"
                }`}
              >
                {state.message}
              </div>
            )}

            {/* Trust Elements */}
            <div className="mt-8 pt-6 border-t border-outline-variant/20">
              <div className="flex items-center justify-center gap-6 text-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield
                  </span>
                  <span className="font-body">25-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    security
                  </span>
                  <span className="font-body">No Spam Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
