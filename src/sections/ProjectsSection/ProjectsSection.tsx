import { SectionTitle } from '@/components/SectionTitle';
import { ProjectItem } from '@/components/ProjectItem';

export const ProjectsSection = () => (
  <div className='bg-cyanBlue h-full w-full'>
    <section
      className='container mx-auto mt-20 h-full px-4 py-12 md:mt-40'
      id='my-projects'
    >
      <SectionTitle title='My Projects' className='text-center' />
      <div className='mt-12 flex flex-col divide-y'>
        <ProjectItem
          src='/images/formsLab.png'
          alt='FormsLab'
          title='FormsLab'
          description='An application for creating anonymous or non-anonymous surveys and responding to them. The application has become an open-sourced application.'
          technologies='Next.js, Typescript, TailwindCSS'
          pageHref='https://formslab.vercel.app/'
          gitHref='https://github.com/Ryczko/FormsLab'
        />
        <ProjectItem
          src='/images/yourBooks.png'
          alt='YourBooks'
          title='YourBooks'
          description='An application to search for books in the Google database and manage their status on the Kanban board using drag And drop.'
          technologies='Next.js, Typescript, TailwindCSS, Firebase, React Query'
          pageHref='https://your-books-engineer.vercel.app/'
          gitHref='https://github.com/pmatyjasik/your-books'
        />
        <ProjectItem
          src='/images/quization.png'
          alt='Quization'
          title='Quization'
          description='An application for digital competency testing. The purpose of the application is to take quizzes and monitor the results.'
          technologies='Next.js,
              Typescript, TailwindCSS, Firebase'
          pageHref='https://quization.vercel.app/'
          gitHref='https://github.com/pmatyjasik/quization'
        />
      </div>
    </section>
  </div>
);
