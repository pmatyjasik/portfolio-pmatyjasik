import { AboutSection } from '@/sections/AboutSection';
import { ContactSection } from '@/sections/ContactSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { Footer } from '@/sections/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Piotr Matyjasik</title>
    </Head>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </>
);

export default Home;
