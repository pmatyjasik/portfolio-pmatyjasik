import { motion } from 'framer-motion';
import Image from 'next/image';

export const WebBackground = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.7 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <Image
      src='/svgs/web.svg'
      alt='Web icon'
      width={1500}
      height={1500}
      aria-hidden
      className='absolute top-0 z-0 h-[1000px] w-[1000px] lg:right-0 lg:h-[1500px] lg:w-[1500px] xl:left-1/4 xl:h-[1500px] xl:w-[1500px] 2xl:right-0 2xl:h-[1500px] 2xl:w-[1500px]'
    />
  </motion.div>
);
