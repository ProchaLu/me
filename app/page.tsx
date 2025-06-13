import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <OpenSource />
      <ContactForm />
    </>
  );
}
