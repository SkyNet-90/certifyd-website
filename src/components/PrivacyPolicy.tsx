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
              <p className="text-lg opacity-80 mb-2">Effective Date: August 18, 2025</p>
              <p className="text-lg opacity-80">Last Updated: August 18, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                CertifydPro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services. CertifydPro does not require any account or registration, and all certification data is stored locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white/95">Personal Information</h3>
              <div className="space-y-2 mb-4">
                <p className="leading-relaxed">• Full name and professional title</p>
                <p className="leading-relaxed">• Email address and phone number</p>
                <p className="leading-relaxed">• Profile photos and professional headshots</p>
                <p className="leading-relaxed">• Educational and professional background</p>
                <p className="leading-relaxed">• Certification and credential information</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/95">Technical Information</h3>
              <div className="space-y-2 mb-4">
                <p className="leading-relaxed">• Device information and operating system</p>
                <p className="leading-relaxed">• IP address and location data (when permitted)</p>
                <p className="leading-relaxed">• App usage analytics and performance data</p>
                <p className="leading-relaxed">• Crash reports and error logs</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/95">Usage Data</h3>
              <div className="space-y-2">
                <p className="leading-relaxed">• Features used within the app</p>
                <p className="leading-relaxed">• Time spent on different sections</p>
                <p className="leading-relaxed">• Certification creation and verification history</p>
                <p className="leading-relaxed">• Search queries and interactions</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Service Provision:</strong> To create, manage, and verify your digital certifications
                </p>
                <p className="leading-relaxed">
                  // removed account management section
                </p>
                <p className="leading-relaxed">
                  <strong>Communication:</strong> To send important updates, security alerts, and promotional content
                </p>
                <p className="leading-relaxed">
                  <strong>Improvement:</strong> To analyze usage patterns and enhance our app features
                </p>
                <p className="leading-relaxed">
                  <strong>Security:</strong> To detect and prevent fraud, abuse, and security breaches
                </p>
                <p className="leading-relaxed">
                  <strong>Legal Compliance:</strong> To comply with applicable laws and regulations
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white/95">We Do NOT Sell Your Personal Information</h3>
              <p className="leading-relaxed mb-4">
                Certifyd does not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white/95">Limited Sharing</h3>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Service Providers:</strong> Trusted partners who assist with app functionality (cloud storage, analytics, payment processing)
                </p>
                <p className="leading-relaxed">
                  <strong>Verification Requests:</strong> When you explicitly choose to share certifications for verification purposes
                </p>
                <p className="leading-relaxed">
                  <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                </p>
                <p className="leading-relaxed">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of company assets
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  • <strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols
                </p>
                <p className="leading-relaxed">
                  • <strong>Access Controls:</strong> Strict access controls for our systems
                </p>
                <p className="leading-relaxed">
                  • <strong>Regular Audits:</strong> Regular security assessments and vulnerability testing
                </p>
                <p className="leading-relaxed">
                  • <strong>Data Centers:</strong> Secure, certified data centers with physical and digital protection
                </p>
                <p className="leading-relaxed">
                  • <strong>Incident Response:</strong> Comprehensive plan for responding to potential security breaches
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
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Certification data may be retained for verification purposes. You can request earlier deletion by contacting support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place when transferring data internationally, including using Standard Contractual Clauses and working with certified partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Certifyd is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                Our app may use cookies and similar tracking technologies to enhance user experience and analyze app performance. You can control cookie preferences through your device settings. We do not use cookies for cross-site tracking or advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes through the app or via email. The "Last Updated" date at the top indicates when the policy was most recently revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  For questions about this Privacy Policy or our privacy practices:
                </p>
                <p className="leading-relaxed">
                  • Email: privacy@certifyd.app
                </p>
                <p className="leading-relaxed">
                  • Data Protection Officer: dpo@certifyd.app
                </p>
                <p className="leading-relaxed">
                  • Website: https://certifyd.app/privacy
                </p>
                <p className="leading-relaxed">
                  // removed in-app account privacy settings
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
