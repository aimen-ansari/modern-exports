import React from "react";
import aaimen from "@/assets/aaimen.png"; // Using your imported asset

const Footer = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-serif text-2xl tracking-wide-subtle text-cream mb-4 uppercase">
              MODERN<span className="text-gold"> ·</span> EXPORTS
            </p>
            <p className="text-cream/50 text-sm leading-relaxed max-w-sm">
              Purveyors of the finest hand-embroidered fabrics since 1982.
              Serving haute couture houses across five continents.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-editorial text-gold mb-6 uppercase">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {["Home", "Our Story", "Collections", "Atelier", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-editorial text-gold mb-6 uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm text-cream/50">
              <p>moderncoexports@gmail.com</p>
              <p>+92 321 611 2116</p>
              <p className="mt-2 text-xs uppercase tracking-widest">
                Sialkot, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-xs text-cream/30">
              © {new Date().getFullYear()} ModernExports. All rights reserved.
            </p>
            <span className="text-cream/10">|</span>
            <a
              href="https://aimenansari.site"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-cream/30 hover:text-gold transition-all group"
            >
              <span>Developed by</span>
              <img
                src={aaimen}
                alt="Aimen Ansari"
                className="opacity-90 object-contain group-hover:opacity-100 transition-all duration-300 brightness-205"
                 width={64}
              />
            </a>
          </div>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-cream/30 hover:text-cream/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
