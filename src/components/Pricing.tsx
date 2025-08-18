import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

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
            Certifyd is completely free for individual IT professionals. No hidden costs, no subscriptions, no data mining.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Individual</h3>
              <div className="text-5xl font-bold gradient-text mb-2">Free</div>
              <p className="text-secondary-600">Forever and always</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Unlimited certifications',
                'Biometric authentication',
                'Smart notifications & reminders',
                'Document attachments',
                'PDF portfolio export',
                'Calendar integration',
                'Local data storage',
                'AES-256 encryption',
                'iOS & Android apps',
                'Priority email support'
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

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-8 relative border-primary-300 bg-gradient-to-br from-primary-50 to-white"
          >
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                Coming Soon
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Enterprise</h3>
              <div className="text-5xl font-bold text-secondary-400 mb-2">TBD</div>
              <p className="text-secondary-600">For teams and organizations</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                { feature: 'Everything in Individual', included: true },
                { feature: 'Team certification tracking', included: true },
                { feature: 'Centralized dashboard', included: true },
                { feature: 'Compliance reporting', included: true },
                { feature: 'SSO integration', included: true },
                { feature: 'Advanced analytics', included: true },
                { feature: 'API access', included: true },
                { feature: 'Custom integrations', included: true },
                { feature: 'Priority phone support', included: true },
                { feature: 'On-premise deployment', included: true }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.included ? (
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                  )}
                  <span className={`${item.included ? 'text-secondary-700' : 'text-secondary-400'}`}>
                    {item.feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="btn-secondary w-full text-lg opacity-50 cursor-not-allowed"
            >
              Notify Me When Available
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
                Why is Certifyd free for individuals?
              </h4>
              <p className="text-secondary-600">
                We believe every IT professional deserves access to secure certification management tools. 
                The individual version is free to support the community that builds our industry.
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

            <div className="card p-6">
              <h4 className="font-semibold text-secondary-900 mb-2">
                When will the Enterprise version be available?
              </h4>
              <p className="text-secondary-600">
                The Enterprise version is planned for late 2024. It will focus on team management 
                and compliance features for larger organizations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
