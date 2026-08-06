import { SectionTitle } from '@/components/SectionTitle';
import { TimelineItem } from '@/components/TimelineItem';
import { SectionLayout } from '@/layouts/SectionLayout';
import { containerEachChildren } from '@/utils/animations';
import { motion } from 'framer-motion';

export const ExperienceSection = () => (
  <SectionLayout id='experience'>
    <SectionTitle title='Experience' />
    <motion.ol
      className='mt-10 border-l border-stone-300 md:mt-4'
      variants={containerEachChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >
      <TimelineItem
        isFirst
        date='March 2026 - July 2026'
        company='TESTERARMY (Y COMBINATOR P26)'
        position='Co-Founder'
        description='I co-founded a Y Combinator (P26) startup and was its engineer - I built the product end-to-end. I built an AI agent that autonomously tests web and mobile apps: it navigates and clicks through an app like a real user (LLM tool-calling and context management) to surface bugs and regressions before release. We shipped the MVP to first users during the batch, iterating on real feedback.'
        technologies='TypeScript, React, Next.js, Node.js, LLM APIs, Tool-calling, AI Agents'
      />
      <TimelineItem
        date='May 2023 - March 2026'
        company='GRUPA WIRTUALNA POLSKA'
        position='Front-end Developer'
        description='I built and shipped frontend features for high-traffic products at one of Poland/CEE&apos;s largest media groups. I implemented tracking and web analytics (tag management, tracking pixels), enabling product and marketing teams to measure and act on user behavior, and designed AI agents automating internal developer workflows.'
        technologies='React, Next.js, Javascript, Typescript, HTML, CSS, TailwindCSS, SCSS, Git, REST API, GraphQL, MobX, Jotai, Jest, React Testing Library, Node.js, Express, React Router, AI agent workflows'
      />
      <TimelineItem
        date='September 2022 - May 2023'
        company='FUJITSU'
        position='Front-end Developer'
        description={`I actively participated in the development of an application for displaying and manipulating complex data, as well as resolving issues on both the frontend and backend. I also collaborated in defining the application's requirements.`}
        technologies='Javascript, Typescript, React, Git, SQL, REST API, CSS, HTML'
      />
      <TimelineItem
        date='June 2021 - September 2022'
        company='ETECHNOLOGIE'
        position='Front-end Developer'
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
