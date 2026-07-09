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
      <article className='text-base leading-relaxed font-light text-gray-800 md:text-lg'>
        I&apos;m an AI engineer (TypeScript / React) building LLM agents and
        full-stack products on top of foundation models. At Y Combinator (P26)
        I co-founded TesterArmy as its lead engineer and built an AI agent that
        autonomously tests web and mobile apps.
        <br />
        <br />
        Before that, I spent ~3 years building high-traffic frontend at Grupa
        Wirtualna Polska, one of the largest media groups in Poland/CEE. I work
        across the stack and focus on making AI reliable in real products.
        <br />
        <br />
        In my free time I ship my own AI-powered iOS apps (Isao, Kai - React
        Native + LLMs, live on the App Store).
      </article>
      <div className='mt-16 flex items-center gap-5'>
        <h2 className='min-w-fit font-syne text-lg font-bold text-gray-800 md:text-xl lg:text-2xl'>
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
