import { ChildrenAnimation } from '@/components/ChildrenAnimation';
import { SectionTitle } from '@/components/SectionTitle';
import { TechnologyItem } from '@/components/TechnologyItem';
import { SectionLayout } from '@/layouts/SectionLayout';

interface Technology {
  src: string;
  name: string;
}

const technologies: Technology[] = [
  { src: '/svgs/javascript.svg', name: 'Javascript' },
  { src: '/svgs/typescript.svg', name: 'Typescript' },
  { src: '/svgs/react.svg', name: 'React' },
  { src: '/svgs/nextjs.svg', name: 'Next.js' },
  { src: '/svgs/tailwind.svg', name: 'TailwindCSS' },
  { src: '/svgs/git.svg', name: 'Git' },
];

export const AboutSection = () => (
  <SectionLayout id='about-me'>
    <SectionTitle title='About me' />
    <div>
      <article className='text-base font-light leading-relaxed text-sea md:text-lg'>
        I&#39;m a passionate front-end developer with over 3 years of
        professional experience in software development. I have a Bachelor&#39;s
        of Computer Science from the West Pomeranian University of Technology.
        Currently, I&#39; m studying towards a master&#39; s degree in
        management at the University of Szczecin, where I&#39; m navigating the
        balance between theoretical knowledge and real-world programming
        challenges.
        <br />
        <br />
        Driven by a desire for continuous growth in the software development
        area, I have dedicated myself to furthering my knowledge in this
        ever-evolving field. I actively seek opportunities to expand my skills
        by learning new technologies to stay up-to-date.
      </article>
      <div className='mt-16 flex items-center gap-5'>
        <h2 className='min-w-fit font-syne text-lg font-bold text-sea md:text-xl lg:text-2xl'>
          TECHNOLOGIES
        </h2>
        <hr className='w-full' />
      </div>
      <ChildrenAnimation className='mt-10 grid grid-cols-2 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-2'>
        {technologies.map(({ src, name }) => (
          <TechnologyItem key={name} src={src} alt={name} technology={name} />
        ))}
      </ChildrenAnimation>
    </div>
  </SectionLayout>
);
