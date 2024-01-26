import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const InitialLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='hero-background fixed inset-x-0 z-[100] flex h-full items-center justify-center overflow-x-hidden overflow-y-hidden'
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color='#ffffff'
            ariaLabel='ball-triangle-loading'
            visible
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
