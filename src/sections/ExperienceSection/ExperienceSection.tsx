import { SectionTitle } from '@/components/SectionTitle';
import { TimelineItem } from '@/components/TimelineItem';
import { SectionLayout } from '@/layouts/SectionLayout';
import { containerEachChildren } from '@/utils/animations';
import { motion } from 'framer-motion';

export const ExperienceSection = () => {
  return (
    <SectionLayout id='experience'>
      <SectionTitle title='Experience' />

      <motion.ol
        className='border-sand mt-10 border-l md:mt-4'
        variants={containerEachChildren}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        <TimelineItem
          isFirst
          date='May 2023 - Present'
          company='WIRTUALNA POLSKA'
          position='Front-end Develper'
          description='My role at the company involves developing and bug fixing. I actively take part in numerous projects, including creating user interfaces, implementing new functionalities, and resolving issues. I collaborate with the development team and system architects, participating in defining project architecture and establishing project requirements.'
          technologies='React, Next.js, Javascript, Typescript, HTML, CSS, TailwindCSS, SCSS, Git, REST API, GraphQL, MobX, MobX-StateTree, Jotai, Jest, React Testing Library'
        />
        <TimelineItem
          date='September 2022 - May 2023'
          company='FUJITSU'
          position='Front-end Develper'
          description={`I actively participated in the development of an application for displaying and manipulating complex data, as well as resolving issues on both the frontend and backend. I also collaborated in defining the application's requirements.`}
          technologies='Javascript, Typescript, React, Git, SQL, REST API, CSS, HTML'
        />
        <TimelineItem
          date='June 2021 - September 2022'
          company='ETECHNOLOGIE'
          position='Front-end Develper'
          description='I took a central role in the creation and development of e-learning and e-commerce platforms, which contributed to their design, implementation, and continuous improvement. I also took part in defining project requirements.'
          technologies='Javascript, React, Wordpress, PHP, HTML, CSS, REST API, Git'
        />
        <TimelineItem
          date='October 2020 - June 2021'
          company='OIRP SZCZECIN'
          position='IT Support'
          description='I provided technical assistance and troubleshooting during classroom and online activities. I was also responsible for managing student files.'
        />
      </motion.ol>
    </SectionLayout>
  );
};
