'use client';

import { motion } from 'framer-motion';
import { COFFEE_IMAGE } from '@/data/links';
import SectionWrapper from './SectionWrapper';
import { FiWifi } from 'react-icons/fi';

const ServiceExtras = () => {
  return (
    <SectionWrapper>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Coffee Card */}
            <motion.div
              className="border-2 border-dark-green rounded-sm overflow-hidden hover:border-gold transition-all duration-300 hover:shadow-glow-gold"
              whileHover={{ y: -5 }}
            >
              <img src={COFFEE_IMAGE} alt="Бесплатный кофе" className="w-full h-64 object-cover" />
              <div className="p-6 bg-dark-green bg-opacity-20">
                <h3 className="text-2xl font-bold text-gold mb-4">☕ Бесплатный кофе</h3>
                <p className="text-light-gray">
                  Угощаем бодрящим ароматным кофе каждого гостя. Мы заботимся о том, чтобы вы могли расслабиться и
                  настроиться на классный результат с первых минут.
                </p>
              </div>
            </motion.div>

            {/* WiFi Card */}
            <motion.div
              className="border-2 border-dark-green rounded-sm p-8 flex flex-col justify-center items-center text-center hover:border-gold transition-all duration-300 hover:shadow-glow-gold"
              whileHover={{ y: -5 }}
            >
              <FiWifi className="text-gold text-6xl mb-6" />
              <h3 className="text-2xl font-bold text-gold mb-4">Бесплатный Wi‑Fi</h3>
              <p className="text-light-gray">
                Оставайтесь на связи, листайте ленту или решайте рабочие вопросы прямо в кресле. Делитесь по-новому в
                соцсетях сразу после стрижки.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ServiceExtras;
