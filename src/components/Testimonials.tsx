import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  title: string;
  content: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, content, rating, delay }) => {
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
      className="card p-6 relative group hover:shadow-glow-lg"
    >
      <div className="absolute top-4 right-4 text-primary-200 opacity-50">
        <Quote className="w-8 h-8" />
      </div>
      
      <div className="flex items-center mb-4">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-secondary-700 mb-6 italic leading-relaxed">
        "{content}"
      </p>

      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-secondary-900">{name}</h4>
          <p className="text-sm text-secondary-600">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Senior Cloud Architect",
      content: "As someone with 12+ AWS certifications, this app is a lifesaver. The biometric security gives me peace of mind, and I never miss renewal dates anymore.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      title: "IT Security Manager",
      content: "Finally, a certification tracker that takes security seriously. Local storage and encryption mean my data stays private. The PDF export feature is perfect for job applications.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      title: "DevOps Engineer",
      content: "The smart notifications are incredible. It reminds me at just the right time, and I can snooze if I'm busy. Much better than sticky notes on my monitor!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            What <span className="gradient-text">IT Professionals</span> Are Saying
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of IT professionals who trust CertifydPro to manage their certifications securely and efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Development Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">Beta</div>
            <div className="text-secondary-600">Development Stage</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">iOS</div>
            <div className="text-secondary-600">First Platform</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-secondary-600">Supported Providers</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-secondary-600">Offline Capable</div>
          </div>
        </motion.div>

        {/* Beta notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200"
        >
          <p className="text-secondary-700">
            <strong>Coming Soon:</strong> CertifydPro is currently in beta development. 
            Be the first to know when it launches!
          </p>
          <a 
            href="#support" 
            className="inline-block mt-3 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            Join the waitlist →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
