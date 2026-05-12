import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-green max-w-none text-gray-700 space-y-6">
          <p>
            Your privacy is important to us. This Privacy Policy explains how MS
            Green Solar collects, uses, and protects your personal information.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          <p>
            When you submit a lead form, we collect your name, email address,
            phone number, and ZIP code. This information is used solely to contact
            you about solar energy solutions.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            How We Use Your Information
          </h2>
          <p>
            We use your information to provide quotes, answer inquiries, and
            improve our services. We never sell your personal data to third
            parties.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
            <a href="tel:18004733676" className="text-green-600 underline">
              1-800-473-3676
            </a>
            .
          </p>
          <p className="text-sm text-gray-500">
            Last updated: May 8, 2026
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="text-green-600 hover:underline font-medium"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
