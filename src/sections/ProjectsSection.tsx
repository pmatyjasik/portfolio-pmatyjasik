import { SectionTitle } from '@/components/SectionTitle';
import { ProjectItem } from '@/components/ProjectItem';

export const ProjectsSection = () => (
  <div className='h-full w-full bg-gray-50'>
    <section
      className='container mx-auto mt-20 h-full px-4 py-12 md:mt-40'
      id='my-projects'
    >
      <SectionTitle title='My Projects' className='text-center' />
      <div className='mt-12 flex flex-col divide-y divide-gray-200'>
        <ProjectItem
          src='/images/isao.png'
          alt='Isao - Daily Quotes'
          title='Isao - Daily Quotes'
          description='AI-powered iOS app: daily motivational quotes personalized to the user&apos;s goals by an LLM. Live on the App Store.'
          technologies='React Native, Typescript, LLM-based personalization'
          pageHref='https://apps.apple.com/us/app/isao-daily-quotes/id6755051258'
          disabled
        />
        <ProjectItem
          src='/images/kai.png'
          alt='Kai - Smart Shopping List'
          title='Kai - Smart Shopping List'
          description='iOS shopping-list app with AI-powered item categorization and real-time sync across multiple lists. Live on the App Store.'
          technologies='React Native, Typescript, AI categorization'
          pageHref='https://apps.apple.com/pl/app/kai-grocery-list/id6747010480'
          disabled
        />
        <ProjectItem
          src='/images/verly.png'
          alt='Verly CMS - Appointment Management'
          title='Verly CMS - Appointment Management'
          description='Web platform for customer and appointment management for service businesses. In active development.'
          technologies='Next.js, Supabase, React, Typescript'
          pageHref='https://cms.verly.app/en'
        />
        <ProjectItem
          src='/images/formsLab.webp'
          alt='FormsLab'
          title='FormsLab'
          description='Open-source form builder for anonymous surveys, polls and feedback collection - 540+ stars on GitHub. One of the top contributors to the project.'
          technologies='Next.js, Typescript, TailwindCSS'
          pageHref='https://formslab.vercel.app/'
          gitHref='https://github.com/Ryczko/FormsLab'
        />
      </div>
    </section>
  </div>
);
