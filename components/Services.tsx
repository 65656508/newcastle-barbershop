'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/data/services';
import SectionWrapper from './SectionWrapper';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper>
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-slab font-bold text-gold mb-16 text-center border-b-2 border-dark-green pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Услуги и цены
          </motion.h2>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {SERVICES.map((serviceGroup, groupIndex) => (
              <div key={groupIndex}>
                <motion.h3
                  className={`text-2xl font-bold mb-6 pb-3 border-b-2 ${
                    serviceGroup.isFeatured
                      ? 'text-gold border-gold'
                      : 'text-light-gray border-dark-green'
                  }`}
                  variants={itemVariants}
                >
                  {serviceGroup.category}
                </motion.h3>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                >
                  {serviceGroup.items.map((service, idx) => (
                    <motion.div
                      key={idx}
                      className={`p-6 rounded-sm border-2 transition-all duration-300 hover:shadow-glow-gold ${
                        serviceGroup.isFeatured
                          ? 'border-gold bg-dark-green bg-opacity-30'
                          : 'border-dark-green hover:border-gold'
                      }`}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-white text-lg flex-1">{service.name}</h4>
                        {serviceGroup.isFeatured && (
                          <span className="ml-2 px-3 py-1 bg-gold text-dark-bg text-xs font-bold rounded-full whitespace-nowrap">
                            ТОП
                          </span>
                        )}
                      </div>

                      {service.subtitle && (
                        <p className="text-sm text-light-gray mb-3 italic">{service.subtitle}</p>
                      )}

                      {service.description && (
                        <p className="text-sm text-light-gray mb-4">{service.description}</p>
                      )}

                      <p className="text-gold font-bold text-xl">{service.price}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Services;
