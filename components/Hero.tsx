'use client';

import { motion } from 'framer-motion';
import { HERO_IMAGE, LOGO_URL, LINKS } from '@/data/links';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-dark-bg opacity-60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.img
          src={LOGO_URL}
          alt="NewCastle"
          className="h-32 md:h-48 mx-auto mb-8"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Tagline */}
        <motion.h1
          className="text-4xl md:text-6xl font-slab font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Добро пожаловать в NewCastle!
        </motion.h1>

        <motion.p
          className="text-light-gray text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Премиальный барбершоп в Кызылорде. Качество, точность и безупречный стиль.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gold text-dark-bg rounded-sm font-bold text-lg hover:shadow-glow-gold transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Записаться
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
