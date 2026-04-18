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
        I am a passionate full-stack developer with a knack for crafting
        seamless user experiences. With a strong foundation in both front-end
        and back-end technologies, I thrive on transforming complex problems
        into elegant solutions. My expertise lies in creating intuitive
        interfaces and robust applications that not only meet but exceed user
        expectations. I am dedicated to continuous learning and innovation,
        always seeking new ways to enhance my skills and contribute to impactful
        projects.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300 text-justify'
      >
        Over a fast year of experience, I have honed my skills in various
        programming languages and frameworks, allowing me to adapt to diverse
        project requirements. I am a collaborative team player who values open
        communication and thrives in dynamic environments. Whether it's
        developing responsive web applications or optimizing backend processes,
        I am committed to delivering high-quality results that drive success for
        both users and businesses.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
