import { RefreshCw } from 'lucide-react';

export default function RefundsCancellations() {
  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <RefreshCw size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Refunds & Cancellations</h1>
            <p className="text-xl text-blue-100">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  This Refund and Cancellation Policy outlines the terms and conditions for refunds and cancellations of partner network registrations with Rural Tech Store Services. Please read this policy carefully before making any payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner Registration Fees</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Partner registration fees include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>AGENT: ₹10,000</li>
                  <li>Distributor: ₹25,000</li>
                  <li>Super Distributor: ₹50,000</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cancellations are accepted under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Cancellation requests must be submitted in writing to ruraltechstore@gmail.com</li>
                  <li>Cancellations made within 7 days of payment: Full refund minus processing fees (5%)</li>
                  <li>Cancellations made between 8-15 days: 50% refund of the registration fee</li>
                  <li>Cancellations made after 15 days: No refund will be provided</li>
                  <li>Once training has been provided or login credentials shared, no refund is applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refunds may be processed in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Payment made by mistake or duplicate payment</li>
                  <li>Technical issues preventing service delivery on our end</li>
                  <li>Failure to provide promised services as per agreement</li>
                  <li>Registration not activated within 15 days due to our technical issues</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Refunds will NOT be processed if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Training has been completed</li>
                  <li>Dashboard access has been provided</li>
                  <li>Business operations have commenced</li>
                  <li>Marketing materials have been shared</li>
                  <li>Territory rights have been assigned</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following are non-refundable:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Training fees once training is provided</li>
                  <li>Marketing materials and promotional content</li>
                  <li>GST and other statutory charges</li>
                  <li>Payment gateway charges</li>
                  <li>Annual renewal fees</li>
                  <li>Transaction service charges</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Send an email to ruraltechstore@gmail.com with your registration details and reason for refund</li>
                  <li>Include your transaction ID, payment receipt, and registered mobile number</li>
                  <li>Our team will review your request within 5-7 business days</li>
                  <li>If approved, refunds will be processed within 10-15 business days</li>
                  <li>Refunds will be credited to the original payment method</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Cancellation by Company</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to cancel your partner network registration if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You violate our Terms and Conditions</li>
                  <li>You engage in fraudulent activities</li>
                  <li>You misrepresent our services</li>
                  <li>You fail to comply with legal requirements</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  In case of cancellation by the company due to violation of terms, no refund will be provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transaction Refunds</h2>
                <p className="text-gray-700 leading-relaxed">
                  For customer transactions processed through your partner account:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Failed transactions will be automatically refunded within 7 business days</li>
                  <li>Disputed transactions will be investigated and resolved within 15 business days</li>
                  <li>Partners are responsible for handling customer queries related to services</li>
                  <li>Service provider policies apply for specific service-related refunds</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wallet Balance</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wallet balance maintained in your account is non-refundable. However, you may continue to use it for transactions or transfer it to other partners within the network as per platform guidelines.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
                <p className="text-gray-700 leading-relaxed">
                  We shall not be liable for refunds or compensation for service interruptions caused by circumstances beyond our control, including but not limited to natural disasters, government regulations, technical failures, or service provider issues.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you disagree with our refund decision, you may escalate the matter by contacting our customer support team. All disputes will be handled in accordance with our Terms and Conditions and applicable Indian laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refunds</h2>
                <p className="text-gray-700 leading-relaxed">
                  For refund and cancellation queries, please contact:
                </p>
                <div className="mt-4 bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Rural Tech Store Services</strong><br />
                    Hyderabad, Telangana<br />
                    Email: ruraltechstore@gmail.com<br />
                    Phone: +91-9492036363<br />
                    <br />
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to update this Refund and Cancellation Policy at any time. Changes will be effective immediately upon posting on our website. Please review this policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
