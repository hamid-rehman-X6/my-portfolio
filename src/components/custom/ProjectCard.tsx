import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { motion } from 'motion/react';

const ProjectCard = ({ imgSrc, title, projectLink, tags }: ProjectType) => {
  const isValid = !!projectLink;
  return (
    <>
      <motion.div
        variants={fadeUp}
        className='relative'
      >
        {' '}
        <figure className='overflow-hidden rounded-md'>
          <a
            href={isValid ? projectLink! : undefined}
            target={isValid ? '_blank' : undefined}
            rel='noopener noreferrer'
            onClick={(e) => !isValid && e.preventDefault()}
          >
            <img
              src={imgSrc}
              alt={title}
              className='rounded-md w-full blur-sm transition duration-500 hover:scale-115'
              loading='lazy'
              onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
            />
          </a>
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
