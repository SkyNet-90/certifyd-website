import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Bell, 
  FileText, 
  Lock, 
  Award, 
  Database,
  Calendar,
  BarChart3,
  Fingerprint
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="card-hover p-6 text-center group"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-secondary-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Fingerprint className="w-8 h-8 text-white" />,
      title: "Biometric Security",
      description: "FaceID, TouchID, and fingerprint authentication with PIN backup and secure account recovery options."
    },
    {
      icon: <Bell className="w-8 h-8 text-white" />,
      title: "Smart Notifications",
      description: "Advanced alerts with 1, 7, 14, and 30-day reminders, plus snooze functionality and priority levels."
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "50+ Providers",
      description: "Track certifications from AWS, Microsoft, Cisco, CompTIA, Google Cloud, and 50+ other providers."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Professional PDFs",
      description: "Generate job-ready certification portfolios with custom branding and watermark-free exports."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Advanced Analytics",
      description: "Portfolio insights, certification heatmaps, trends analysis, and automated weekly/monthly reports."
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Calendar Sync", 
      description: "Sync expiration dates with your device calendar and get native reminders across all devices."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Achievement System",
      description: "Milestone tracking with badges, streak counters, and celebration notifications for portfolio growth."
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      description: "AES-256 encryption, secure keystore integration, and auto-lock protection with configurable timeouts."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Built for{' '}
            <span className="gradient-text">IT Professionals</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            CertifydPro provides a simple, secure way to track your certifications without the complexity 
            of cloud sync or data sharing. Your data stays on your device, always.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Privacy Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl border border-primary-200"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Privacy You Can Trust
            </h3>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto mb-6">
              No cloud storage, no data collection. CertifydPro works entirely offline 
              with all your certification data stored securely on your device.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                No Sign Up Required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                Offline-First Design
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                Local-Only Storage
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                Zero Data Collection
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
