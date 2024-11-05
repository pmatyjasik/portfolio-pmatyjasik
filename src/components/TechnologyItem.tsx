import { ImageIcon } from '@/components/ImageIcon';
import { eachChildren } from '@/utils/animations';
import { motion } from 'framer-motion';

interface TechnologyItemProps {
  src: string;
  alt: string;
  technology: string;
}

export const TechnologyItem = ({
  src,
  alt,
  technology,
}: TechnologyItemProps) => (
  <motion.div className='flex items-center gap-3' variants={eachChildren}>
    <ImageIcon src={src} alt={alt} height={28} width={28} className='size-7' />
    <span className='font-light text-sea'>{technology}</span>
  </motion.div>
);
