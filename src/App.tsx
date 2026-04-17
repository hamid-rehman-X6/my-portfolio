import Hero from '@/components/custom/Hero';
import Stats from '@/components/custom/Stats';
import Projects from './components/custom/Projects';

export const App = () => {
  return (
    <main className='flex flex-col mx-auto p-10 container max-w-4xl lg:max-w-6xl lg:pl-0 lg:pr-10'>
      <Hero />
      <Stats />
      <Projects />
    </main>
  );
};
