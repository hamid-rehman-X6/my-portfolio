import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SparkleIcon } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-10'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center gap-2 py-1 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:6xl mt-2 font-semibold max-w-3xl md:leading-16 capitalize'
      >
        I'm <span className='text-primary'>Hamid</span> Full Stack AI Software
        Engineer
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'> View Projects</a>
        </Button>
        <Button variant='outline'>Download Resume</Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
