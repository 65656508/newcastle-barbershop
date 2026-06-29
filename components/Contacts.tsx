'use client';

import { motion } from 'framer-motion';
import { LINKS } from '@/data/links';
import SectionWrapper from './SectionWrapper';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';

const Contacts = () => {
  return (
    <SectionWrapper>
      <section id="contacts" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-slab font-bold text-gold mb-12 text-center border-b-2 border-dark-green pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            МЫ ЖДЁМ ВАС!
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Phone */}
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <FiPhone className="text-gold text-3xl mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">Телефон</h3>
                  <a
                    href={`tel:${LINKS.phone.replace(/\s+/g, '')}`}
                    className="text-light-gray hover:text-gold transition-colors"
                  >
                    {LINKS.phone}
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <FiMapPin className="text-gold text-3xl mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">Адрес</h3>
                  <p className="text-light-gray">г. Алматы, ул. Кызылорда</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-white text-lg mb-6">Свяжитесь с нами</h3>
                <div className="flex gap-4">
                  {/* WhatsApp */}
                  <motion.a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-green border-2 border-gold rounded-sm flex items-center justify-center hover:bg-gold transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AiOutlineWhatsApp className="text-gold text-2xl hover:text-dark-bg" />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-green border-2 border-gold rounded-sm flex items-center justify-center hover:bg-gold transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AiOutlineInstagram className="text-gold text-2xl hover:text-dark-bg" />
                  </motion.a>

                  {/* 2GIS */}
                  <motion.a
                    href={LINKS.twoGis}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-green border-2 border-gold rounded-sm flex items-center justify-center hover:bg-gold transition-all duration-300 font-bold text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-gold text-xs hover:text-dark-bg">2GIS</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="rounded-sm overflow-hidden border-2 border-dark-green h-96"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <iframe
                src="https://2gis.kz/kyzylorda/geo/70000001082411408?utm_source=bigmapapi"
                className="w-full h-full"
                frameBorder="0"
                allow="geolocation"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Contacts;
