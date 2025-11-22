import { SectionTitle } from '@/components/SectionTitle';
import { ProjectItem } from '@/components/ProjectItem';

export const ProjectsSection = () => (
  <div className='h-full w-full bg-cyanBlue'>
    <section
      className='container mx-auto mt-20 h-full px-4 py-12 md:mt-40'
      id='my-projects'
    >
      <SectionTitle title='My Projects' className='text-center' />
      <div className='mt-12 flex flex-col divide-y'>
        <ProjectItem
          src='/images/isao.png'
          alt='Isao - Daily Quotes'
          title='Isao - Daily Quotes'
          description='An iOS app that delivers super-personalized motivational quotes every day, tailored to your unique goals and mindset. Features AI-driven personalization, daily affirmations, and a clean intuitive design.'
          technologies='React Native, Artificial Intelligence (AI), Product Development, Social Media Marketing, Typescript'
          pageHref='https://apps.apple.com/us/app/isao-daily-quotes/id6755051258'
        />
        <ProjectItem
          src='/images/kai.png'
          alt='Kai - Smart Shopping List'
          title='Kai - Smart Shopping List'
          description='An intelligent shopping list app with AI-powered item categorization and smart suggestions. Create and manage multiple lists with real-time syncing and lightning-fast performance in a clean, intuitive iOS interface.'
          technologies='React Native, Artificial Intelligence (AI), Product Development, Typescript'
          pageHref='https://apps.apple.com/pl/app/kai-grocery-list/id6747010480'
        />
        <ProjectItem
          src='/images/verly.png'
          alt='Verly CMS - Appointment Management'
          title='Verly CMS - Appointment Management'
          description='A tool designed to help businesses manage customers and schedule appointments with ease. Currently in active development, Verly focuses on delivering a powerful web-based platform for streamlined customer and appointment management.'
          technologies='Next.js, Supabase, React, Typescript'
          pageHref='https://cms.verly.app/en'
        />
        <ProjectItem
          src='/images/formsLab.webp'
          alt='FormsLab'
          title='FormsLab'
          description='An application for creating anonymous or non-anonymous surveys and responding to them. The application has become an open-sourced application.'
          technologies='Next.js, Typescript, TailwindCSS'
          pageHref='https://formslab.vercel.app/'
          gitHref='https://github.com/Ryczko/FormsLab'
        />
      </div>
    </section>
  </div>
);
