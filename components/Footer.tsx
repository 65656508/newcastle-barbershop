'use client';

import { motion } from 'framer-motion';
import { LOGO_URL, LINKS } from '@/data/links';
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-green border-t-2 border-dark-green py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={LOGO_URL} alt="NewCastle" className="h-16 w-auto" />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-light-gray text-sm">
              © {currentYear} NewCastle Barbershop
            </p>
            <p className="text-light-gray text-xs mt-2">Премиальный барбершоп в Кызылорде</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <motion.a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gold hover:text-light-gray transition-colors"
            >
              <AiOutlineWhatsApp className="text-2xl" />
            </motion.a>
            <motion.a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gold hover:text-light-gray transition-colors"
            >
              <AiOutlineInstagram className="text-2xl" />
            </motion.a>
            <motion.a
              href={LINKS.twoGis}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gold hover:text-light-gray transition-colors font-bold"
            >
              <span className="text-sm">2GIS</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          className="border-t border-dark-green pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-light-gray text-xs">
            Создано с ❤️ для лучших барберов
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
