import { containerEachChildren } from '@/utils/animations';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ChildrenAnimationProps {
  children: ReactNode;
  className?: string;
}

export const ChildrenAnimation = ({
  children,
  className,
}: ChildrenAnimationProps) => (
  <motion.div
    className={twMerge(className)}
    variants={containerEachChildren}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
