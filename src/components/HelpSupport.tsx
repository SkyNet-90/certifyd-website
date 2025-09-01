import React from 'react';

const HelpSupport: React.FC = () => (
  <section className="container-custom py-16 min-h-screen">
    <h1 className="text-4xl font-bold mb-6 gradient-text">Help & Support</h1>
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
        <ul className="list-disc ml-6 text-secondary-700">
          <li>Download CertifydPro from the App Store (iOS) or Google Play (Android).</li>
          <li>Open the app—no account or sign up required.</li>
          <li>Follow the on-screen instructions to add your first certification.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Managing Certifications</h2>
        <ul className="list-disc ml-6 text-secondary-700">
          <li>Add, edit, or delete certifications directly in the app.</li>
          <li>Set expiration alerts to get notified before your certifications expire.</li>
          <li>Export your certification portfolio for backup or sharing.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Data Privacy & Offline Storage</h2>
        <ul className="list-disc ml-6 text-secondary-700">
          <li>All data is stored locally on your device—no cloud sync or external servers.</li>
          <li>Your information is private and never leaves your device unless you export it.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Troubleshooting</h2>
        <ul className="list-disc ml-6 text-secondary-700">
          <li><strong>App won’t open:</strong> Restart your device and try again. Ensure you have the latest OS version.</li>
          <li><strong>Data missing:</strong> Check if you recently deleted the app or performed a device reset. Data is stored locally and may be lost if the app is removed.</li>
          <li><strong>Device compatibility:</strong> CertifydPro requires iOS 13.0+ or Android 5.0+.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
        <p className="text-secondary-700">Email us at <a href="mailto:support@certifyd.app" className="text-primary-600 underline">support@certifyd.app</a> for help, feedback, or bug reports.</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <ul className="list-disc ml-6 text-secondary-700">
          <li><strong>Do I need an account?</strong> No, CertifydPro works without any sign up or login.</li>
          <li><strong>Is my data secure?</strong> Yes, all data is stored locally and never shared externally.</li>
          <li><strong>Can I use CertifydPro on multiple devices?</strong> Data does not sync between devices. You can export/import your portfolio manually.</li>
          <li><strong>How do I delete my data?</strong> Go to Settings, tap on "Delete All Data" and follow on-screen instructions. Also delete the app from your device to ensure complete removal.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default HelpSupport;
