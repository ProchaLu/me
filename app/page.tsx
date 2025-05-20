import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import OpenSource from './components/OpenSource';
import TechStack from './components/Skills';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <OpenSource />
      <ContactForm />
    </>
  );
}
