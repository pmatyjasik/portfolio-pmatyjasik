import { InitialLoader } from '@/components/InitialLoader';
import { AboutSection } from '@/sections/AboutSection';
import { ContactSection } from '@/sections/ContactSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { Footer } from '@/sections/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ProjectsSection } from '@/sections/ProjectsSection';

const Home = () => (
  <>
    <InitialLoader />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </>
);

export default Home;
