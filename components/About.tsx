'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper>
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-slab font-bold text-gold mb-8 border-b-2 border-dark-green pb-4">
              О нас
            </h2>
            <p className="text-light-gray text-lg leading-relaxed">
              New Castle — премиальный барбершоп в Кызылорде, где традиции мужского стиля встречаются с современным
              сервисом. Мы создаем пространство для техники, ценим качество, точность и превосходный внешний вид. Наши
              барберы — это профессионалы своего дела, которые не просто стригут, а создают индивидуальный стиль для
              каждого мужчины.
            </p>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default About;
