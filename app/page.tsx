import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import OpenSource from './components/OpenSource';
import TechStack from './components/Skills';

export default function Home() {
  return (
    <>
      <AboutMe />
      <TechStack />
      <OpenSource />
      <ContactForm />
    </>
  );
}
