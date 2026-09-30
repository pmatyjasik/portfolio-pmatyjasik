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
        I&apos;m a full-stack product engineer (TypeScript / React) with 5+
        years of shipping end-to-end - from high-traffic frontend at one of
        Poland/CEE&apos;s largest media groups to co-founding TesterArmy (Y
        Combinator P26), where I built an AI agent that autonomously tests web
        and mobile apps.
        <br />
        <br />
        At TesterArmy I built the product end-to-end: frontend, backend,
        database and the agent itself. We shipped the MVP to 30+ companies
        during the batch. Before that, I spent ~3 years at Grupa Wirtualna
        Polska building features across the stack for high-traffic products,
        plus internal AI agents automating developer workflows.
        <br />
        <br />
        On the side I&apos;ve built and shipped my own AI-powered iOS apps
        (React Native + LLMs) to the App Store.
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
