import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section id="quote" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-editorial text-gold mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Let Us Craft
              <br />
              <em className="italic">Your Vision</em>
            </h2>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              Whether you're a couture house seeking bespoke embroidery or a
              designer exploring new textures, our team is ready to bring your
              creative vision to life.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-xs tracking-editorial text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-xs tracking-editorial text-muted-foreground mb-2 block">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                placeholder="Fashion house or brand"
              />
            </div>
            <div>
              <label className="text-xs tracking-editorial text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs tracking-editorial text-muted-foreground mb-2 block">
                Country
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                placeholder="Where are you based?"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs tracking-editorial text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project, fabric preferences, and quantities..."
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="px-12 py-4 text-xs tracking-editorial bg-primary text-primary-foreground hover:bg-gold-dark transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
