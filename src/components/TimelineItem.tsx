import { eachChildren } from '@/utils/animations';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface TimelineItemProps {
  isFirst?: boolean;
  date: string;
  company: string;
  position: string;
  description: string;
  technologies?: string;
}

export const TimelineItem = ({
  isFirst,
  date,
  company,
  position,
  description,
  technologies,
}: TimelineItemProps) => (
  <motion.li className={twMerge(!isFirst && 'pt-6')} variants={eachChildren}>
    <div className='flex-start flex'>
      <div className='ring-orange -ml-1 mr-3 h-2 w-2 rounded-full bg-white ring-4' />
      <h2 className='text-orange -mt-[10px] ml-6 text-base font-medium md:text-lg'>
        {date}
      </h2>
    </div>
    <article className='mb-10 ml-10 mt-3'>
      <h3 className='font-syne text-sea text-lg font-bold md:text-xl lg:text-2xl'>
        {company}
      </h3>
      <h4 className='font-syne text-granite mt-1 text-base md:text-lg'>
        {position}
      </h4>
      <p className='text-sea mt-5 text-base font-light leading-relaxed md:text-lg'>
        {description}
      </p>
      {technologies && (
        <p className='text-sea mt-5 text-base font-light leading-relaxed md:text-lg'>
          <span className='mr-2 font-medium'>Technologies:</span>
          {technologies}.
        </p>
      )}
    </article>
  </motion.li>
);
