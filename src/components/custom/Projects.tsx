import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';
import SectionHeaders from '@/components/custom/SectionHeaders';
import { projectsData } from '@/constants';
import ProjectCard from '@/components/custom/ProjectCard';

const Projects = () => {
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
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            title={project.title}
            tags={project.tags}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
