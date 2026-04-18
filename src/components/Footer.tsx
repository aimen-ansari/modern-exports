import { motion } from "framer-motion";
import aaimen from "@/assets/aaimen.png";

const supportLink = (topic: string) =>
  `https://wa.me/923216112116?text=${encodeURIComponent(`Hello, I need help with ${topic}.`)}`;

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="border-t border-cream/10 bg-gradient-to-b from-charcoal to-black py-16 md:py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-5">
            <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-cream">
              <span className="bg-gradient-to-r from-gold via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                MODERN
              </span>{" "}
              <span className="text-cream">EXPORTS</span>
            </h3>
            <p className="max-w-md text-base md:text-lg leading-relaxed text-cream/65">
              Purveyors of the finest hand-embroidered fabrics since 1982.
              Serving haute couture houses across five continents.
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-5">
            <h4 className="text-base font-semibold uppercase tracking-[0.18em] text-cream">
              Navigate
            </h4>
            <ul className="space-y-3 text-base text-cream/65">
              <li>
                <a href="#home" className="transition-colors hover:text-gold">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-story" className="transition-colors hover:text-gold">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#collections" className="transition-colors hover:text-gold">
                  Collections
                </a>
              </li>
              <li>
                <a href="#atelier" className="transition-colors hover:text-gold">
                  Atelier
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="text-base font-semibold uppercase tracking-[0.18em] text-cream">
              Company
            </h4>
            <ul className="space-y-3 text-base text-cream/65">
              <li>
                <a href="#our-story" className="transition-colors hover:text-gold">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#atelier" className="transition-colors hover:text-gold">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#collections" className="transition-colors hover:text-gold">
                  Collections
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h4 className="text-base font-semibold uppercase tracking-[0.18em] text-cream">
              Contact Info
            </h4>
            <ul className="space-y-3 text-base text-cream/65">
              <li>
                <a href="mailto:modernexports@gmail.com" className="transition-colors hover:text-gold">
                  modernexports@gmail.com
                </a>
                <a href="mailto:info@moderncoexports.com" className="transition-colors hover:text-gold">
                 info@moderncoexports.com
                </a>
              </li>
              <li>
                <a href={supportLink('inquiry')} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                 +92 323 5620045
                </a>
              </li>
              <li>
                <p className="uppercase text-sm tracking-widest">Sialkot, Pakistan</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-sm md:text-base text-cream/55">
            © {new Date().getFullYear()} ModernExports. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://aimenansari.site/"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base text-cream/55 transition-colors hover:text-gold"
            >
              Developed By.
            </a>
            <a
              href="https://aimenansari.site/"
              className="group block transition-opacity hover:opacity-80"
            >
              <img
                src={aaimen}
                alt="Aimen Ansari Signature"
                className="object-contain brightness-110 contrast-125 filter"
                width={64}
              />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
