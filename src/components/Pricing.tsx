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
            CertifydPro is free to download and use, with optional in-app purchases for premium features.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Free Version</h3>
              <div className="text-5xl font-bold gradient-text mb-2">Free</div>
              <p className="text-secondary-600">Core features always free</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Unlimited certifications',
                'Smart notifications & reminders',
                'Document attachments',
                'PDF portfolio export',
                'Calendar integration',
                'Local data storage',
                'AES-256 encryption',
                'iOS & Android apps',
                'Premium features via in-app purchase'
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
              Download Now
            </button>
          </motion.div>
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
