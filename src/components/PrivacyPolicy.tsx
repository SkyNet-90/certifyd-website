import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="text-white/90 space-y-8">
            <div className="mb-6">
              <p className="text-lg opacity-80 mb-2">Effective Date: October 20, 2025</p>
              <p className="text-lg opacity-80">Last Updated: October 20, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                CertifydPro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services. CertifydPro does not require any account or registration, and all certification data is stored locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white/95">User-Provided Information</h3>
              <p className="leading-relaxed mb-3">
                CertifydPro only collects information that you voluntarily provide within the app:
              </p>
              <div className="space-y-2 mb-4">
                <p className="leading-relaxed">• <strong>Certification Data:</strong> Certification names, providers, issue dates, expiration dates, credential IDs, and notes</p>
                <p className="leading-relaxed">• <strong>Professional Profile Information (optional):</strong> Full name, professional title, email address, phone number, address, social media profiles, and profile photo</p>
                <p className="leading-relaxed">• <strong>Resume/Portfolio Information (optional):</strong> Educational background, professional experience, and related documents</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/95">Important Note on Data Storage</h3>
              <p className="leading-relaxed">
                <strong>All data collected is stored locally on your device only.</strong> CertifydPro does not send your certification data, profile information, or any personal details to external servers or cloud storage. Your data remains entirely under your control on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Service Provision:</strong> To display, organize, and manage your certifications and professional profile within the app
                </p>
                <p className="leading-relaxed">
                  <strong>Notifications:</strong> To send you local expiration reminders for your certifications (handled entirely on your device)
                </p>
                <p className="leading-relaxed">
                  <strong>Future Communications (Optional):</strong> If you opt-in to a newsletter, we may send you updates about new features and security updates
                </p>
                <p className="leading-relaxed">
                  <strong>Security:</strong> To protect against fraud and ensure the app functions properly
                </p>
                <p className="leading-relaxed">
                  <strong>Legal Compliance:</strong> To comply with applicable laws and regulations
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white/95">We Do NOT Share Your Certification Data</h3>
              <p className="leading-relaxed mb-4">
                Your certification and profile information is stored locally on your device only. We do not transmit, share, sell, or store your data on external servers or share it with third parties, unless you explicitly choose to do so.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white/95">Limited Exceptions</h3>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Newsletter Opt-in:</strong> If you choose to subscribe to our newsletter, your email address will be shared with our email service provider (Formspree) solely to send you updates about new features and security notices
                </p>
                <p className="leading-relaxed">
                  <strong>Legal Requirements:</strong> If required by law, court order, or government regulation, we may be compelled to disclose information
                </p>
                <p className="leading-relaxed">
                  <strong>Business Transfers:</strong> In the unlikely event of a merger, acquisition, or sale of company assets, your data would transfer as part of that transaction
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4a. RevenueCat and Payment Processing</h2>
              <p className="leading-relaxed mb-4">
                In-app subscriptions and purchases are processed through RevenueCat, a third-party payment service provider. To facilitate subscription management and in-app purchases, certain information is shared with RevenueCat, including:
              </p>
              <div className="space-y-2 mb-4">
                <p className="leading-relaxed">• Device identifiers and app installation ID</p>
                <p className="leading-relaxed">• Subscription status and purchase history</p>
                <p className="leading-relaxed">• Transaction details and pricing information</p>
                <p className="leading-relaxed">• Customer support contact information (if you contact support)</p>
              </div>
              <p className="leading-relaxed mb-4">
                RevenueCat uses this information solely to process your subscriptions, manage billing, and prevent fraud. RevenueCat complies with industry-standard data protection practices. For more information about how RevenueCat handles your data, please visit their <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</a>.
              </p>
              <p className="leading-relaxed">
                Please note that you are also subject to RevenueCat's terms of service when making in-app purchases. The actual payment processing is handled by the app store (Apple App Store or Google Play Store), which may collect additional information according to their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  • <strong>Local Storage:</strong> All your data is encrypted and stored locally on your device
                </p>
                <p className="leading-relaxed">
                  • <strong>Device-Level Security:</strong> Your device's native security features (iOS Keychain, Android Keystore) protect your information
                </p>
                <p className="leading-relaxed">
                  • <strong>AES-256 Encryption:</strong> Sensitive data is encrypted using AES-256 encryption standards
                </p>
                <p className="leading-relaxed">
                  • <strong>No External Storage:</strong> Because data is stored locally, there are no external servers that could be compromised
                </p>
                <p className="leading-relaxed">
                  • <strong>Auto-Lock:</strong> The app supports auto-lock features to prevent unauthorized access if your device is lost or stolen
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Privacy Rights</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Access:</strong> Request a copy of the personal information we have about you
                </p>
                <p className="leading-relaxed">
                  <strong>Correction:</strong> Update or correct inaccurate personal information
                </p>
                <p className="leading-relaxed">
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)
                </p>
                <p className="leading-relaxed">
                  <strong>Portability:</strong> Request your data in a machine-readable format
                </p>
                <p className="leading-relaxed">
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                </p>
                <p className="leading-relaxed">
                  <strong>Restrict Processing:</strong> Limit how we use your personal information
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Data Retention</h2>
              <p className="leading-relaxed">
                Your certification and profile data is retained on your device as long as you keep it in the app. You can delete any information at any time directly through the app. If you uninstall the app, all data stored locally is removed from your device (unless you have backed it up separately).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Children's Privacy</h2>
              <p className="leading-relaxed">
                CertifydPro is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                Since CertifydPro stores all data locally on your device and does not use external servers, we do not use cookies or tracking technologies for analytics or user profiling. The app may use minimal local storage for app preferences and settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our app does not contain external links to third-party websites or services. This privacy policy does not cover third-party services. If you use links provided in your profile or elsewhere, you are subject to their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes through the app. The "Last Updated" date at the top indicates when the policy was most recently revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  For questions about this Privacy Policy or our privacy practices:
                </p>
                <p className="leading-relaxed">
                  • Email: support@certifyd.app
                </p>
                <p className="leading-relaxed">
                  • Website: https://certifyd.app/privacy
                </p>
              </div>
            </section>

            <div className="border-t border-white/20 pt-8 mt-12">
              <p className="text-center text-white/70">
                Your privacy is important to us. We are committed to protecting your personal information and being transparent about our data practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
