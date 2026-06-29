'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
