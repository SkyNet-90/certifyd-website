import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToDownload = () => {
    const element = document.querySelector('#download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Start free with up to 3 certifications, then upgrade for unlimited features and professional tools.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 relative bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
            >
              <div className="text-center mb-8">
                <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full mb-3">
                  Always Free
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Core Features</h3>
                <div className="text-5xl font-bold text-green-600 mb-2">$0</div>
                <p className="text-secondary-600">Forever free, no hidden costs</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Up to 3 certifications',
                  'Basic 30-day notifications',
                  'PDF export (with watermark)',
                  'Device security',
                  'AES-256 encryption',
                  'Core security features',
                  'Basic data management'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDownload}
                className="btn-secondary w-full text-lg border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
              >
                Download Free
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8 relative bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200"
            >
              <div className="text-center mb-8">
                <div className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full mb-3">
                  Premium Features
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Premium Subscription</h3>
                <div className="text-5xl font-bold gradient-text mb-2">$2.49</div>
                <p className="text-secondary-600">per month or $24.99/year</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited certifications',
                  'Advanced notifications (1,7,14,30 days)',
                  'Calendar integration',
                  'Professional PDFs (no watermark)',
                  'Advanced analytics & reports',
                  'Automated portfolio reports',
                  'Bulk data import',
                  'Achievement system',
                  'Custom branding',
                  'Priority support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDownload}
                className="btn-primary w-full text-lg"
              >
                Get Premium
              </button>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="card p-6">
              <h4 className="font-semibold text-secondary-900 mb-2">
                Is CertifydPro really free?
              </h4>
              <p className="text-secondary-600">
                Yes! The core features are completely free. Premium features are available as optional in-app purchases to support continued development.
              </p>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-secondary-900 mb-2">
                Will there ever be ads or data collection?
              </h4>
              <p className="text-secondary-600">
                Never. Your certification data is yours alone. We don't collect, share, or monetize your 
                personal information. All data stays on your device.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
