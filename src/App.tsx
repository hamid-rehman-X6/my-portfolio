import Hero from '@/components/custom/Hero';
import Stats from '@/components/custom/Stats';
import Projects from '@/components/custom/Projects';
import About from '@/components/custom/About';
import Services from '@/components/custom/Services';
import Resume from '@/components/custom/Resume';
import Testimonials from '@/components/custom/Testimonials';
import Contact from '@/components/custom/Contact';

export const App = () => {
  return (
    <main className='flex flex-col mx-auto p-10 container max-w-4xl lg:max-w-6xl lg:pl-0 lg:pr-10'>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
  );
};
