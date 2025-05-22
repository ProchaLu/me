import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import OpenSource from './components/OpenSource';
import TechStack from './components/Skills';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkExperience />
      <TechStack />
      <OpenSource />
      <ContactForm />
    </>
  );
}
