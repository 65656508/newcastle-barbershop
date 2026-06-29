'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { GALLERY_IMAGES } from '@/data/links';
import SectionWrapper from './SectionWrapper';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-slab font-bold text-gold mb-12 text-center border-b-2 border-dark-green pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Интерьер
          </motion.h2>

          {/* Desktop Grid */}
          <motion.div
            className="hidden md:grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                className="relative h-64 rounded-sm overflow-hidden border-2 border-dark-green hover:border-gold cursor-pointer transition-all duration-300 hover:shadow-glow-gold"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedIndex(idx)}
              >
                <img src={img} alt={`Interior ${idx + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Carousel */}
          <motion.div
            className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-72 h-64 rounded-sm overflow-hidden border-2 border-dark-green snap-center"
              >
                <img src={img} alt={`Interior ${idx + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Gallery;
