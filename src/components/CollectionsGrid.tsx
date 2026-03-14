import { motion } from "framer-motion";
import swatch1 from "@/assets/swatch-1.jpg";
import swatch2 from "@/assets/swatch-2.jpg";
import swatch3 from "@/assets/swatch-3.jpg";
import swatch4 from "@/assets/swatch-4.jpg";
import swatch5 from "@/assets/swatch-5.jpg";

const collections = [
  {
    image: swatch1,
    title: "Zari Silk",
    subtitle: "Gold threadwork on pure silk",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    image: swatch2,
    title: "Pearl Organza",
    subtitle: "Seed pearls & sequins on organza",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: swatch4,
    title: "Chikankari",
    subtitle: "White-on-white cotton muslin",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: swatch3,
    title: "Velvet Zardozi",
    subtitle: "Gold embroidery on burgundy velvet",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    image: swatch5,
    title: "Emerald Zardozi",
    subtitle: "Metallic threadwork on silk",
    span: "",
    aspect: "aspect-[4/5]",
  },
];

const CollectionsGrid = () => {
  return (
    <section id="collections" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs tracking-editorial text-gold mb-4">Our Fabrics</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Curated
            <br />
            <em className="italic text-muted-foreground">Collections</em>
          </h2>
          <div className="divider-gold mt-8" />
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            >
              <div className={`${item.aspect} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs tracking-editorial text-gold-light mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
