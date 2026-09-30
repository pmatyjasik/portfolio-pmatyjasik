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
        position='Software Engineer & Co-Founder'
        description='Co-founded a Y Combinator (P26) startup and built the product end-to-end: frontend, backend, database and the agent itself. Built an AI agent that autonomously tests web and mobile apps - an LLM tool-calling loop with context management keeping long sessions coherent. Shipped the MVP to 30+ companies during the YC batch, iterating weekly on real user feedback.'
        technologies='TypeScript, React, Next.js, Node.js, PostgreSQL, Playwright, LLMs, AI Agents, tool-calling, context engineering'
      />
      <TimelineItem
        date='May 2023 - March 2026'
        company='GRUPA WIRTUALNA POLSKA'
        position='Frontend Developer'
        description='Built and shipped features across the stack - React/TypeScript/Next.js on the frontend, Node.js services and database work on the backend - for high-traffic products. Designed and developed AI agents automating internal workflows, including an agent generating analytics event-tracking scripts, cutting manual scripting work to a fraction of the time. Implemented tracking and web analytics (tag management, tracking pixels), enabling product and marketing teams to measure and act on user behavior.'
        technologies='TypeScript, React, Next.js, Node.js, LLM APIs (AI agents), GraphQL, TailwindCSS'
      />
      <TimelineItem
        date='September 2022 - May 2023'
        company='FUJITSU'
        position='Frontend Developer'
        description='Developed a React application for displaying and manipulating large volumes of complex enterprise data, backed by REST APIs and MySQL. Resolved issues across the frontend and backend, owning problems end-to-end, and co-defined business requirements and project milestones with cross-functional stakeholders.'
        technologies='TypeScript, JavaScript, React, C#, MySQL, REST API, HTML, CSS'
      />
      <TimelineItem
        date='June 2021 - September 2022'
        company='ETECHNOLOGIE'
        position='Frontend Developer'
        description='Designed, built and improved eLearning and eCommerce platforms - PHP/WordPress with MySQL on the backend, JavaScript/React on the frontend. Tested frontend features, troubleshot issues across the stack and worked directly with business and product teams to ship improvements.'
        technologies='JavaScript, React, PHP, WordPress, MySQL, REST API, Cypress'
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
