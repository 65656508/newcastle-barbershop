'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LOGO_URL, LINKS } from '@/data/links';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'Обучение', href: '#training' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-dark-green shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={LOGO_URL} alt="NewCastle" className="h-12 w-auto" />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-light-gray hover:text-gold transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gold text-dark-bg rounded-sm font-bold hover:bg-light-gray transition-all duration-300 hover:shadow-glow-gold"
        >
          Записаться
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
