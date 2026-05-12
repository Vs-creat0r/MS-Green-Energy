import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-green max-w-none text-gray-700 space-y-6">
          <p>
            By using the MS Green Solar website and services, you agree to the
            following terms and conditions.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Services</h2>
          <p>
            MS Green Solar provides solar energy system design, installation, and
            maintenance services for residential and commercial properties. All
            services are subject to a separate written agreement.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Limitation of Liability
          </h2>
          <p>
            MS Green Solar shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services or
            website.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p>
            For questions about these Terms, please contact us at{" "}
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
