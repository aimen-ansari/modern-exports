import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logoMain from '@/assets/logo-main.png';
import storybg from '@/assets/storybg.jpg'; 

const OurStorySection = () => {
  const containerRef = useRef(null);
  
  // 1. Setup Scroll Progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 2. Parallax: Move the background image slightly slower for depth
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef} 
      id="our-story" 
      className="relative py-24 md:py-40 overflow-hidden bg-[#F9F6F0]"
    >
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          style={{ y }}
          src={storybg} 
          className="w-full h-[120%] object-cover opacity-40 grayscale-[40%] scale-110" 
          alt="Texture"
        />
        {/* Soft gradient overlay to blend edges with the beige background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F6F0] via-transparent to-[#F9F6F0]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Logo Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-white shadow-2xl border border-stone-100 flex items-center justify-center p-6">
            <img 
              src={logoMain} 
              className="w-full h-full object-contain mix-blend-multiply" 
              alt="Modern Exports" 
            />
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold font-bold mb-8"
        >
          Established 1982
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl text-charcoal mb-10 leading-tight"
        >
          The Standard in <br />
          <span className="italic font-light text-stone-500">Bespoke Embroidery</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-8 text-stone-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg font-light"
        >
          <p>
            We provide high-capacity, premium hand-embroidery and intricate beadwork 
            tailored for global fashion labels and international export.
          </p>
          <p>
            Our facility combines traditional artistry with rigorous quality control, 
            ensuring every fabric meets the exacting standards of the 
            global market. 
          </p>
        </motion.div>

        {/* Client Satisfaction Stats - Fixed scale error and added staggered entrance */}
        <div className="mt-16 flex justify-center gap-6 md:gap-12 border-t border-stone-200 pt-12">
           
           {/* Stat 1 */}
           <motion.div 
             initial={{ opacity: 0, y: 20, scale: 0.9 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.9, duration: 0.6 }}
             className="text-center"
           >
              <span className="block text-2xl md:text-3xl font-serif text-gold">100%</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-400">Accuracy</span>
           </motion.div>

           {/* Stat 2 */}
           <motion.div 
             initial={{ opacity: 0, y: 20, scale: 0.9 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.1, duration: 0.6 }}
             className="text-center border-x border-stone-200 px-6 md:px-12"
           >
              <span className="block text-2xl md:text-3xl font-serif text-gold">98%</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-400">Retention</span>
           </motion.div>

           {/* Stat 3 */}
           <motion.div 
             initial={{ opacity: 0, y: 20, scale: 0.9 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.3, duration: 0.6 }}
             className="text-center"
           >
              <span className="block text-2xl md:text-3xl font-serif text-gold">Global</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-400">Shipping</span>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;