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
          description='The application is under continuous development (open source). Technologies used: Next.js, Typescript, TailwindCSS, Firebase.'
          technologies='Next.js, Typescript, TailwindCSS, Firebase'
          pageHref='https://formslab.vercel.app/'
          gitHref='https://github.com/Ryczko/FormsLab'
        />
        <ProjectItem
          src='/images/yourBooks.png'
          alt='YourBooks'
          title='YourBooks'
          description='The application was developed for an engineering thesis. Technologies used: Next.js, Typescript, TailwindCSS, Firebase.'
          technologies='Next.js, Typescript, TailwindCSS, Firebase'
          pageHref='https://your-books-engineer.vercel.app/'
          gitHref='https://github.com/pmatyjasik/your-books'
        />
        <ProjectItem
          src='/images/quization.png'
          alt='Quization'
          title='Quization'
          description='Project carried out at the University. Technologies used: Next.js,
              Typescript, TailwindCSS, Firebase.'
          technologies='Next.js,
              Typescript, TailwindCSS, Firebase'
          pageHref='https://quization.vercel.app/'
          gitHref='https://github.com/pmatyjasik/quization'
        />
      </div>
    </section>
  </div>
);
