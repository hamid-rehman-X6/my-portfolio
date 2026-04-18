import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { motion } from 'motion/react';

const ProjectCard = ({ imgSrc, title, tags }: ProjectType) => {
  return (
    <>
      <motion.div
        variants={fadeUp}
        className='relative'
      >
        {' '}
        <figure className='overflow-hidden rounded-md'>
          <img
            src={imgSrc}
            alt={title}
            className='rounded md w-full transition duration-500 hover:scale-115'
          />
        </figure>
        <div className='absolute bottom-2 left-2 flex gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-background hover:bg-primary hover:text-black text-sm rounded-sm px-2 py-1 cursor-pointer'
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
