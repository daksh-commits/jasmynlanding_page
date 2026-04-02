import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="display-2 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-12">Last updated: February 2026</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>At Jasmyn AI, we collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">5. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience on our website and analyze how our services are used.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">6. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-3 space-y-1">
                <p>Email: <a href="mailto:hello@jasmyn.ai" className="text-primary hover:underline">hello@jasmyn.ai</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
