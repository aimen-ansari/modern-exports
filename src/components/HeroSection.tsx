import { motion } from "framer-motion";
import heroImage from "@/assets/hero-embroidery.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Intricate hand beading on silk fabric"
          className="w-full h-full object-cover"
        />
        {/* Slightly darker overlay to help text pop */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-gold-light mb-6">
                Luxury Embroidered Fabrics
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] mb-10"
            >
              The Art of
              <br />
              <em className="italic">Thread & Stone</em>
            </motion.h1>

            {/* Glassy Description Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              /* The backdrop-blur-md creates the glass effect */
              className="relative p-6 md:p-8 backdrop-blur-md bg-white/5 border-l-2 border-gold/30 rounded-r-xl max-w-xl mb-12 shadow-2xl"
            >
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-lg">
                We Create High-End Hand-Embroidered Fabrics And Unique Custom
                Dresses For Special Occasions. Each piece, a masterwork of
                heritage and precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#collections"
                className="px-10 py-4 text-xs font-bold uppercase tracking-widest bg-gold text-charcoal hover:bg-white transition-all duration-300 shadow-lg"
              >
                View Collections
              </a>
              <a
                href="#quote"
                className="px-10 py-4 text-xs font-bold uppercase tracking-widest border border-white/50 text-white hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
              >
                Request a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/60 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 bg-gold/50"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;