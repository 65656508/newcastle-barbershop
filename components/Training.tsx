'use client';

import { motion } from 'framer-motion';
import { TRAINING_IMAGE, LINKS } from '@/data/links';
import SectionWrapper from './SectionWrapper';

const Training = () => {
  const features = [
    'Вся техника FADE',
    'Бритьё и оформление бороды',
    'Теория + практика (работка на моделях)',
    '90% обучения время — практика',
    'Техники укладки',
    'Подбор стрижки по голове клиента',
    'Базовые навыки сервиса и продаж',
    'СЕРТИФИКАТ о происхождении курса',
  ];

  return (
    <SectionWrapper>
      <section id="training" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Image */}
            <motion.div
              className="relative rounded-sm overflow-hidden border-2 border-dark-green h-96"
              whileHover={{ borderColor: '#C9A84C' }}
            >
              <img src={TRAINING_IMAGE} alt="Курс Барбер" className="w-full h-full object-cover" />
            </motion.div>

            {/* Content */}
            <motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-slab font-bold text-gold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Курс: БАРБЕР С НУЛЯ
              </motion.h2>

              <motion.p
                className="text-2xl font-bold text-light-gray mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Получил профессию за 30 дней!
              </motion.p>

              {/* Features */}
              <motion.div
                className="space-y-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✅</span>
                    <span className="text-light-gray">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Discount Badge */}
              <motion.div
                className="mb-8 p-4 bg-gold bg-opacity-20 border-2 border-gold rounded-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gold font-bold text-lg">-25% скидка от БОССА 🔥</p>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gold text-dark-bg rounded-sm font-bold text-lg hover:shadow-glow-gold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Записаться на курс
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Training;
