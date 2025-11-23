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
        I’m a passionate software developer specializing in front-end
        development while also working across backend technologies. I focus on
        building intuitive, high-quality user interfaces and reliable backend
        systems. In my current role, I collaborate on AI-powered tools and
        full-stack development workflows.
        <br />
        <br />
        In my free time, I build iOS apps using React Native.
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
