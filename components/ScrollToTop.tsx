'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Elegant icon
import { motion } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
