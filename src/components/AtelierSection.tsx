import { motion } from "framer-motion";
import swatch2 from "@/assets/swatch-2.jpg";

const stats = [
  { number: "40+", label: "Years of Heritage" },
  { number: "200+", label: "Master Artisans" },
  { number: "35", label: "Countries Served" },
  { number: "∞", label: "Possibilities" },
];

const AtelierSection = () => {
  return (
    <section id="atelier" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={swatch2}
                alt="Artisan hand embroidery detail"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-editorial text-gold mb-4">The Atelier</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Where Tradition
              <br />
              Meets <em className="italic">Mastery</em>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
             Modern Exports provides end-to-end embroidery solutions, from custom design development to high-volume manufacturing. We bridge the gap between heritage craftsmanship and modern supply chain needs, ensuring every piece is meticulously inspected for perfection
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              With a focus on transparent communication and on-time delivery, we maintain a 98% satisfaction rating among our European and Middle Eastern couture partners."
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <p className="font-serif text-3xl md:text-4xl text-gold mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs tracking-editorial text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtelierSection;
