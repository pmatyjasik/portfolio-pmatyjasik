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
      <div className='mr-3 -ml-1 h-2 w-2 rounded-full bg-white ring-4 ring-orange-600' />
      <h2 className='-mt-[10px] ml-6 text-base font-medium text-orange-600 md:text-lg'>
        {date}
      </h2>
    </div>
    <article className='mt-3 mb-10 ml-10'>
      <h3 className='font-syne text-lg font-bold text-gray-800 md:text-xl lg:text-2xl'>
        {company}
      </h3>
      <h4 className='mt-1 font-syne text-base text-gray-700 md:text-lg'>
        {position}
      </h4>
      <p className='mt-5 text-base leading-relaxed font-light text-gray-800 md:text-lg'>
        {description}
      </p>
      {technologies && (
        <p className='mt-5 text-base leading-relaxed font-light text-gray-800 md:text-lg'>
          <span className='mr-2 font-medium'>Technologies:</span>
          {technologies}.
        </p>
      )}
    </article>
  </motion.li>
);
