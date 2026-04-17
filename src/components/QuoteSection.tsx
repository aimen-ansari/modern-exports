import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const QuoteSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  // Initialize EmailJS once on component mount
  React.useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    setStatus({ type: 'loading' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tw71q8n',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_d9nk3sf',
        form.current
      );

      setStatus({
        type: 'success',
        message: 'Your inquiry has been sent successfully! We\'ll get back to you soon.'
      });

      form.current.reset();

      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: 'idle' }), 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="quote" className="py-20 md:py-32 bg-charcoal border-t border-cream/10">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-editorial text-gold mb-3 uppercase">Custom Inquiries</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-4">
            Request a Custom Quote
          </h2>
          <p className="text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Share your vision with us. Whether it's a custom design or bulk order, our team is ready to bring it to life.
          </p>
        </motion.div>

        <div className="h-px w-16 bg-gold/50 mx-auto mb-12" />

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <input type="hidden" name="title" value="New Custom Inquiry from Website" />

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm text-cream mb-2 uppercase tracking-wide">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-cream/5 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors rounded"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm text-cream mb-2 uppercase tracking-wide">
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 bg-cream/5 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors rounded"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm text-cream mb-2 uppercase tracking-wide">
              Your Inquiry <span className="text-gold">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your custom order, design ideas, or any questions..."
              required
              rows={6}
              className="w-full px-4 py-3 bg-cream/5 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors rounded resize-none"
            />
          </div>

          {/* Status Messages */}
          {status.type === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/10 border border-green-500/30 text-green-300 rounded"
            >
              ✓ {status.message}
            </motion.div>
          )}

          {status.type === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded"
            >
              ✕ {status.message}
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full py-3 px-6 bg-gradient-to-r from-gold to-yellow-400 hover:from-gold/90 hover:to-yellow-300 disabled:from-gold/50 disabled:to-yellow-400/50 text-charcoal font-semibold uppercase tracking-wide transition-all duration-300 rounded disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
          </button>

          <p className="text-xs text-cream/40 text-center">
            We typically respond within 24-48 hours
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteSection;