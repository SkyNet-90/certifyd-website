import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Users, Clock } from 'lucide-react';

const TrustCredentials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const credentials = [
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "10+ Years Experience",
      description: "Over a decade in IT infrastructure, cloud architecture, and cybersecurity",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Industry Certified",
      description: "Active certifications across AWS, Microsoft Azure, Cisco, and security frameworks",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      description: "Built with enterprise-grade security standards including biometric auth and AES-256 encryption",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Community Driven",
      description: "Developed with feedback from IT professionals across multiple industries",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const certLogos = [
    { name: "AWS", logo: "☁️" },
    { name: "Microsoft", logo: "🔷" },
    { name: "Cisco", logo: "🌐" },
    { name: "CompTIA", logo: "🛡️" },
    { name: "Security+", logo: "🔒" }
  ];

  return (
    <section id="trust" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Why <span className="gradient-text">Trust Us?</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            CertifydPro is built by IT professionals, for IT professionals. We understand enterprise security 
            requirements because we implement them every day.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card p-6 text-center hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${credential.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                {credential.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {credential.title}
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-secondary-700 mb-8">
            Active Certifications & Experience With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certLogos.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-2">{cert.logo}</div>
                <span className="text-sm font-medium text-secondary-700">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security at a Glance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card p-8 mt-16 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200"
        >
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Enterprise Security at a Glance
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Your certification data is protected with the same security standards used by Fortune 500 companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">�</div>
              <h4 className="font-semibold text-secondary-900 text-sm">Biometric Auth</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">�</div>
              <h4 className="font-semibold text-secondary-900 text-sm">AES-256 Encryption</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">�</div>
              <h4 className="font-semibold text-secondary-900 text-sm">Secure Keystore</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-semibold text-secondary-900 text-sm">Auto-Lock</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustCredentials;
