import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="text-white/90 space-y-8">
            <div className="mb-6">
              <p className="text-lg opacity-80 mb-2">Effective Date: October 20, 2025</p>
              <p className="text-lg opacity-80">Last Updated: October 20, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By downloading, installing, or using the CertifydPro mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
              <p className="leading-relaxed">
                CertifydPro is a mobile application that helps users create, manage, and organize professional certifications and credentials. All data is stored locally on your device. The service includes:
              </p>
              <div className="space-y-2 mt-3">
                <p className="leading-relaxed">• Free tier: Track up to 3 certifications with basic features</p>
                <p className="leading-relaxed">• Premium tier: Unlimited certifications with advanced features including analytics, calendar integration, and more</p>
                <p className="leading-relaxed">• Optional professional profile creation for portfolio management</p>
                <p className="leading-relaxed">• Secure local storage with AES-256 encryption</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. App Access</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  • No account or registration is required to use CertifydPro. All features are available without sign up.
                </p>
                <p className="leading-relaxed">
                  • You must be at least 16 years old to use this service
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Acceptable Use</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">You agree NOT to use the App to:</p>
                <p className="leading-relaxed">
                  • Create false, misleading, or fraudulent certifications
                </p>
                <p className="leading-relaxed">
                  • Impersonate any person or entity
                </p>
                <p className="leading-relaxed">
                  • Upload malicious code or attempt to breach our security
                </p>
                <p className="leading-relaxed">
                  • Use the service for any illegal or unauthorized purpose
                </p>
                <p className="leading-relaxed">
                  • Reverse engineer or attempt to extract source code
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                CertifydPro, including its design, features, and underlying technology, is owned by CertifydPro and protected by intellectual property laws.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Your Data:</strong> You retain full ownership of all data you enter into the app, including your certifications and profile information. This data is stored locally on your device.
              </p>
              <p className="leading-relaxed">
                <strong>No Transmission:</strong> Your data is not transmitted to external servers or shared with us unless you explicitly opt-in to services like newsletter subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Privacy and Data Protection</h2>
              <p className="leading-relaxed mb-4">
                Your privacy is important to us. Our Privacy Policy governs the collection and use of personal information and is incorporated into these Terms by reference. Please review our Privacy Policy for details on our data practices.
              </p>
              <div className="space-y-2">
                <p className="leading-relaxed"><strong>Key Privacy Practices:</strong></p>
                <p className="leading-relaxed">• All data is stored locally on your device only</p>
                <p className="leading-relaxed">• We do not transmit or store your certification data on external servers</p>
                <p className="leading-relaxed">• Your data is encrypted using AES-256 encryption</p>
                <p className="leading-relaxed">• We do not sell or share your data with third parties (except as described in our Privacy Policy)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Subscription and Payments</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  • Certifyd offers both free and premium subscription tiers
                </p>
                <p className="leading-relaxed">
                  • Premium subscriptions are billed monthly or annually
                </p>
                <p className="leading-relaxed">
                  • Payments are processed through RevenueCat, a third-party payment service provider
                </p>
                <p className="leading-relaxed">
                  • By purchasing a subscription, you agree to RevenueCat's terms and conditions. RevenueCat's privacy policy is available at <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">https://www.revenuecat.com/privacy</a>
                </p>
                <p className="leading-relaxed">
                  • The actual payment transaction is processed by the app store (Apple App Store or Google Play Store), and you are also subject to their respective terms and conditions
                </p>
                <p className="leading-relaxed">
                  • You may cancel your subscription at any time through your app store account settings
                </p>
                <p className="leading-relaxed">
                  • Refunds are handled according to app store policies (Apple or Google). Please contact the respective app store for refund requests
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access at our discretion if you violate these Terms. Upon termination, your right to use the App ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Disclaimers and Limitations</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  • The App is provided "as is" without warranties of any kind
                </p>
                <p className="leading-relaxed">
                  • We are not liable for any indirect, incidental, or consequential damages
                </p>
                <p className="leading-relaxed">
                  • Our liability is limited to the amount you paid for the service
                </p>
                <p className="leading-relaxed">
                  • We do not guarantee uninterrupted or error-free service
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes through the App or via email. Continued use of the App after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the United States. Any disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Information</h2>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <p className="leading-relaxed">
                  • Email: legal@certifyd.app
                </p>
                <p className="leading-relaxed">
                  • Website: https://certifyd.app/support
                </p>
              </div>
            </section>

            <div className="border-t border-white/20 pt-8 mt-12">
              <p className="text-center text-white/70">
                By using Certifyd, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
