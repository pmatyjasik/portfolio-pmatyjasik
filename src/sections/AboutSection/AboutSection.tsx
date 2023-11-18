import { ChildrenAnimation } from '@/components/ChildrenAnimation';
import { SectionTitle } from '@/components/SectionTitle';
import { TechnologyItem } from '@/components/TechnologyItem';
import { SectionLayout } from '@/layouts/SectionLayout';

export const AboutSection = () => {
  return (
    <SectionLayout id='about-me'>
      <SectionTitle title='About me' />
      <div>
        <article className='text-sea text-base font-light leading-relaxed md:text-lg'>
          I'm a passionate front-end developer with approximately 3 years of
          professional experience in software development. I have a Bachelor's
          of Computer Science from the West Pomeranian University of Technology.
          Currently, I'm studying towards a master's degree in management at the
          University of Szczecin, where I'm navigating the balance between
          theoretical knowledge and real-world programming challenges.
          <br />
          <br />
          Driven by a desire for continuous growth in the software development
          area, I have dedicated myself to furthering my knowledge in this
          ever-evolving field. I actively seek opportunities to expand my skills
          by learning new technologies to stay up-to-date.
        </article>
        <div className='mt-16 flex items-center gap-5'>
          <h2 className='font-syne text-sea min-w-fit text-lg font-bold md:text-xl lg:text-2xl'>
            TECHNOLOGIES
          </h2>
          <hr className='w-full' />
        </div>
        <ChildrenAnimation className='mt-10 grid grid-cols-2 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-2'>
          <TechnologyItem
            src='/svgs/javascript.svg'
            alt='Javascript'
            technology='Javascript'
          />
          <TechnologyItem
            src='/svgs/typescript.svg'
            alt='Javascript'
            technology='Typescript'
          />
          <TechnologyItem
            src='/svgs/react.svg'
            alt='Javascript'
            technology='React'
          />
          <TechnologyItem
            src='/svgs/nextjs.svg'
            alt='Javascript'
            technology='Next.js'
          />
          <TechnologyItem
            src='/svgs/tailwind.svg'
            alt='Javascript'
            technology='TailwindCSS'
          />
          <TechnologyItem
            src='/svgs/git.svg'
            alt='Javascript'
            technology='Git'
          />
        </ChildrenAnimation>
      </div>
    </SectionLayout>
  );
};
