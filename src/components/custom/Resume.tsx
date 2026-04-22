import { fadeUp, staggerContainer } from '@/lib/animations';
import { AnimatePresence, motion } from 'motion/react';
import SectionHeaders from './SectionHeaders';
import ExpCard from './ExpCard';
import ToolsCard from './ToolsCard';
import { useMemo, useState } from 'react';
import { education, experience, toolsData } from '@/constants';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeTools = useMemo(() => {
    return toolsData.find((item) => item.id === activeTab)?.tools || [];
  }, [activeTab]);

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
          variants={fadeUp}
          className='flex flex-wrap gap-3 mb-10'
        >
          {toolsData?.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? 'bg-white text-black border-white'
                      : 'border-neutral-700 text-neutral-300 hover:border-white hover:text-white'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tools Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'
          >
            {activeTools?.map((tool, i) => (
              <ToolsCard
                key={i}
                tool={tool}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Resume;
