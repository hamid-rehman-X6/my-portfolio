import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';
import SectionHeaders from '@/components/custom/SectionHeaders';
import { projectsData } from '@/constants';
import ProjectCard from '@/components/custom/ProjectCard';
import { Skeleton } from 'boneyard-js/react';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeaders
        title='My featured projects'
        subtitle='Projects'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {projectsData.map((project, i) => (
          <Skeleton
            name='project-card'
            key={i}
            loading={loading}
            fixture={
              <div className='w-full'>
                <div className='h-48 bg-gray-300 rounded-md' />
              </div>
            }
          >
            <ProjectCard
              key={i}
              imgSrc={project.imgSrc}
              projectLink={project.projectLink}
              title={project.title}
              tags={project.tags}
            />
          </Skeleton>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
