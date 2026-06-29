'use client';

import { motion } from 'framer-motion';
import { REVIEWS } from '@/data/reviews';
import SectionWrapper from './SectionWrapper';

const Reviews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

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
            Отзывы
          </motion.h2>

          {/* Desktop Grid */}
          <motion.div
            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                className="p-6 bg-dark-green bg-opacity-20 border-2 border-dark-green rounded-sm hover:border-gold transition-all duration-300 hover:shadow-glow-gold"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold text-dark-bg flex items-center justify-center font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="text-gold text-sm">{'⭐'.repeat(review.rating)}</div>
                  </div>
                </div>
                <p className="text-light-gray text-sm leading-relaxed">"{review.text}"</p>
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
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                className="flex-shrink-0 w-80 p-6 bg-dark-green bg-opacity-20 border-2 border-dark-green rounded-sm snap-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold text-dark-bg flex items-center justify-center font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="text-gold text-sm">{'⭐'.repeat(review.rating)}</div>
                  </div>
                </div>
                <p className="text-light-gray text-sm leading-relaxed">"{review.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Reviews;
