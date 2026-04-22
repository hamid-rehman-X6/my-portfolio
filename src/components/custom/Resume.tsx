import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import SectionHeaders from './SectionHeaders';
import { education, experience, tools } from '@/constants';
import ExpCard from './ExpCard';
import ToolsCard from './ToolsCard';

const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeaders
        subtitle='Resume'
        title='Education and practical experience'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        With the background of a Bachelor's degree in Information Technology and
        hands-on experience in full-stack development. I have successfully
        contributed to the development of responsive web applications, optimized
        backend processes, and collaborated with cross-functional teams to
        deliver high-quality solutions. My commitment to continuous learning and
        adaptability has enabled me to stay abreast of emerging technologies and
        industry trends, ensuring that I can effectively contribute to
        innovative projects and drive success for both users and businesses.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((edu, i) => (
              <ExpCard
                key={i}
                item={edu}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((edu, i) => (
              <ExpCard
                key={i}
                item={edu}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'
        >
          {tools.map((tool, i) => (
            <ToolsCard
              key={i}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
