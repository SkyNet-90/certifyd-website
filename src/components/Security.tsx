import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, Server, FileCheck, Key } from 'lucide-react';

const Security: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Device Security',
      description: 'Secure local storage with device-level protection and automatic data encryption without requiring user accounts.',
    },
    {
      icon: Eye,
      title: 'AES-256 Encryption',
      description: 'Military-grade encryption protects all certification data with secure key management and storage.',
    },
    {
      icon: Server,
      title: 'Secure Storage',
      description: 'iOS Keychain and Android Keystore integration ensures your data is protected by device-level security.',
    },
    {
      icon: FileCheck,
      title: 'Auto-Lock Protection',
      description: 'Configurable timeout settings automatically lock the app to prevent unauthorized access.',
    },
    {
      icon: Key,
      title: 'Account Recovery',
      description: 'Multiple secure recovery methods with attempt limiting to protect against unauthorized access.',
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'Local-only storage means your certification data never leaves your device or gets transmitted anywhere.',
    },
  ];

  return (
    <section id="security" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Security & <span className="gradient-text">Privacy</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security meets professional certification management. Your data is protected 
            with local device security, military-grade encryption, and secure storage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card p-8 md:p-12 text-center bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200"
        >
          <Shield className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
            Our Security Commitment
          </h3>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We believe in transparency when it comes to security. CertifydPro is designed to give you 
            complete control over your data while maintaining the highest security standards. Your trust 
            is earned through action, not promises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">✓ Regular Security Reviews</h4>
              <p className="text-secondary-600 text-sm">
                Our code undergoes regular security assessments to identify and address potential vulnerabilities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">✓ Responsible Disclosure</h4>
              <p className="text-secondary-600 text-sm">
                We welcome security researchers and have a responsible disclosure process for reported issues.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">✓ Open Communication</h4>
              <p className="text-secondary-600 text-sm">
                Any security updates or changes are communicated clearly to our users through app updates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">✓ Continuous Improvement</h4>
              <p className="text-secondary-600 text-sm">
                Security is an ongoing process. We continuously improve our security measures as technology evolves.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact for Security Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-white rounded-xl border border-secondary-200"
        >
          <h4 className="font-semibold text-secondary-900 mb-2">Found a Security Issue?</h4>
          <p className="text-secondary-600 text-sm mb-4">
            We take security seriously. If you've discovered a potential security vulnerability, 
            please report it responsibly.
          </p>
          <a 
            href="mailto:security@certifyd.app" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Shield className="w-4 h-4" />
            <span>Report Security Issue</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
