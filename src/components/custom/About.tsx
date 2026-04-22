import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import SectionHeaders from './SectionHeaders';
import { Button } from '../ui/button';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeaders
        subtitle='About'
        title='Transforming compolexity into effortless design'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I am a passionate Full-Stack AI MERN Developer with over 3 years of
        experience crafting scalable web applications and seamless user
        experiences. With a strong foundation in both frontend and backend
        technologies, I enjoy transforming complex ideas into clean, efficient,
        and user-focused solutions. My expertise lies in building pixel-perfect,
        responsive interfaces from Figma designs while developing robust backend
        architectures that ensure performance, scalability, and reliability.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300 text-justify'
      >
        Over the years, I have worked with modern JavaScript technologies,
        microservices architecture, and scalable application development,
        allowing me to adapt quickly to diverse project requirements. Recently,
        my passion has expanded into AI-powered applications, where I work with
        LangChain, RAG techniques, and OpenAI models to build smart AI agents
        and intelligent chatbot solutions. I am a collaborative team player who
        values continuous learning, innovation, and creating high-quality
        digital products that deliver real impact for both users and businesses.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button
          className='mt-5'
          asChild
        >
          <a href='mailto:dev.mhr.codes@gmail.com'>Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
