import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { HashLoader } from 'react-spinners';

export const InitialLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='bg-hero-gradient fixed inset-x-0 z-[100] flex h-full items-center justify-center overflow-x-hidden overflow-y-hidden'
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.5, delay: 0.3 } }}
          onAnimationComplete={() => setIsVisible(false)}
        >
          <HashLoader color='white' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
