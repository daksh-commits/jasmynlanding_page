import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CancellationRefund() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="display-2 mb-4">Cancellation & Refund Policy</h1>
          <p className="text-sm text-gray-400 mb-12">Last updated: February 2026</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">Our Commitment</h2>
              <p>Jasmyn AI is a delivery-oriented business and believes in upholding our commitments and providing the highest quality service for every client.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">Client Cancellation</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>The subscription may be cancelled by the Client at any time. If cancelled within the first 14 days and no services have been delivered, a full refund will be issued.</li>
                <li>If the Client chooses to cancel the subscription after services have been delivered (content created, ads launched, emails sent, etc.), the current billing period will not be refunded. The service will remain active until the end of the paid period.</li>
                <li>Once marketing deliverables have been created and deployed on your behalf, no refunds will be issued for that billing period.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">Company Cancellation</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>The Company reserves the right to cancel the subscription at any time by providing a 7-day written notice. In this event, the Company will refund the prorated amount for the remaining unused portion of the billing period.</li>
                <li>The Company shall not be liable for any failure to perform its obligations where such failure is a result of acts of God (i.e., fire, flood, earthquake, storm, hurricane or other natural disaster), war, invasion, civil war, rebellion, revolution, insurrection, government sanction, blockage, embargo, labor dispute, strike, lockout or interruption or failure of electricity or internet service.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">Refund Processing</h2>
              <p>All approved refunds will be processed within 14 business days. The refund shall in no case be deemed an admission of deficiency and will be considered a full and final settlement of all claims.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">Contact Information</h2>
              <p>All notices of cancellation or requests for refunds must be sent in writing to:</p>
              <div className="mt-3 space-y-1">
                <p>Jasmyn AI</p>
                <p>Email: <a href="mailto:hello@jasmyn.ai" className="text-primary hover:underline">hello@jasmyn.ai</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
