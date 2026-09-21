import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Shield size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Rural Tech Store Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Business information (company name, address, GST number if applicable)</li>
                  <li>Financial information for transaction processing</li>
                  <li>Communication preferences and feedback</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Process your partner applications and registrations</li>
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, updates, and security alerts</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect and prevent fraud and abuse</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Service providers who perform services on our behalf</li>
                  <li>Government authorities as required by law</li>
                  <li>Business partners for network operations</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Rural Tech Store Services</strong><br />
                    Hyderabad, Telangana<br />
                    Email: ruraltechstore@gmail.com<br />
                    Phone: +91-9492036363
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
