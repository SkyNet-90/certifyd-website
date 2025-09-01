import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trash2, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const DataDeletion: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const deletionSteps = [
    {
      step: 1,
      title: "Open CertifydPro App",
      description: "Launch the CertifydPro application on your device.",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      step: 2,
      title: "Access Settings",
      description: "Navigate to the Settings menu within the app.",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
      step: 3,
      title: "Select Delete All Data",
      description: "Tap on the 'Delete All Data' option in the settings menu.",
      icon: <Trash2 className="w-6 h-6 text-white" />
    },
    {
      step: 4,
      title: "Confirm Deletion",
      description: "Follow the on-screen prompts to confirm the permanent deletion of your data.",
      icon: <AlertTriangle className="w-6 h-6 text-white" />
    },
    {
      step: 5,
      title: "Remove App",
      description: "Delete the CertifydPro app from your device to ensure complete data removal.",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="deletion" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Data <span className="gradient-text">Deletion</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Need to delete your certification data? Follow these simple steps to permanently 
            remove all your information from CertifydPro.
          </p>
        </motion.div>

        {/* Deletion Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {deletionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card p-6 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-secondary-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-secondary-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4">
                Important: Data Deletion is Permanent
              </h3>
              <div className="space-y-3 text-red-800">
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>All certification data will be permanently deleted and cannot be recovered</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>This includes all certificates, renewal dates, and associated documents</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Make sure to export any important data before proceeding</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Deleting the app from your device completes the removal process</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200"
        >
          <h4 className="font-semibold text-secondary-900 mb-2">Need Help with Data Deletion?</h4>
          <p className="text-secondary-600 text-sm mb-4">
            If you're having trouble deleting your data or need assistance, 
            we're here to help. Contact our support team.
          </p>
          <a 
            href="mailto:support@certifydpro.app" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Shield className="w-4 h-4" />
            <span>Contact Support</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DataDeletion;
