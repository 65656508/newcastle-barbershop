'use client';

import { motion } from 'framer-motion';
import { LINKS } from '@/data/links';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gold text-dark-bg rounded-full flex items-center justify-center shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(201, 168, 76, 0.5)' }}
      whileTap={{ scale: 0.9 }}
    >
      <AiOutlineWhatsApp className="text-3xl" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
